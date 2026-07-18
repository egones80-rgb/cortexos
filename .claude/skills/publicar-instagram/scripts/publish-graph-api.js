#!/usr/bin/env node
/**
 * publish-graph-api.js
 *
 * Publica carrossel no Instagram e Facebook via Meta Graph API direto.
 *
 * Variáveis de ambiente necessárias:
 *   INSTAGRAM_ACCESS_TOKEN   — token de longa duração (60 dias)
 *   INSTAGRAM_USER_ID        — ID do usuário Instagram Business
 *   IMGBB_API_KEY            — chave do imgbb (pra hospedar imagens publicamente)
 *   FACEBOOK_PAGE_ID         — ID da página do Facebook
 *   FACEBOOK_ACCESS_TOKEN    — token de página do Facebook
 *
 * Uso:
 *   node publish-graph-api.js \
 *     --images "slide-1.png,slide-2.png,slide-3.png" \
 *     --caption-file "legenda.md" \
 *     --platform instagram
 *
 *   --dry-run                 # testa sem publicar
 *   --platform facebook       # publica no Facebook
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { URL } = require('url');

// --- Parse de argumentos ---
const args = process.argv.slice(2);
const opts = {};
for (let i = 0; i < args.length; i += 2) {
  const key = args[i].replace(/^--/, '');
  opts[key] = args[i + 1];
}

const {
  platform = 'instagram',
  images = '',
  'caption-file': captionFile,
  'dry-run': dryRun = 'false',
} = opts;

const imageList = images.split(',').map((f) => f.trim()).filter(Boolean);
if (imageList.length === 0) {
  console.error('❌ Nenhuma imagem passada em --images.');
  process.exit(1);
}

let caption = '';
if (captionFile && fs.existsSync(captionFile)) {
  caption = fs.readFileSync(captionFile, 'utf-8');
} else if (opts.caption) {
  caption = opts.caption;
}

if (caption.length > 2200) {
  console.warn(`⚠️ Legenda com ${caption.length} caracteres. Será cortada em 2200.`);
  caption = caption.substring(0, 2197) + '...';
}

// --- Dry-run ---
if (dryRun === 'true') {
  console.log('\n🧪 DRY RUN — nada será publicado.\n');
  console.log(`Plataforma: ${platform}`);
  console.log(`Imagens (${imageList.length}):`);
  imageList.forEach((img, i) => console.log(`  ${i + 1}. ${img}`));
  console.log(`\nLegenda (${caption.length} chars):\n---`);
  console.log(caption);
  console.log('---\n');
  process.exit(0);
}

// --- Helpers ---

function readFileAsBase64(filePath) {
  const buffer = fs.readFileSync(filePath);
  return buffer.toString('base64');
}

function uploadToImgbb(filePath) {
  return new Promise((resolve, reject) => {
    const IMGBB_KEY = process.env.IMGBB_API_KEY;
    if (!IMGBB_KEY) {
      return reject(new Error('IMGBB_API_KEY não definida. Sem ela, não dá pra hospedar as imagens.'));
    }

    const base64 = readFileAsBase64(filePath);
    const formData = new URLSearchParams();
    formData.append('image', base64);

    const url = new URL(`https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`);

    const req = https.request(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(formData.toString()),
        },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (data.success) resolve(data.data.url);
            else reject(new Error(`imgbb: ${data.error?.message || body}`));
          } catch (e) {
            reject(new Error(`imgbb resposta inválida: ${body}`));
          }
        });
      }
    );

    req.on('error', reject);
    req.write(formData.toString());
    req.end();
  });
}

async function graphApiFetch(endpoint, params, accessToken) {
  const url = new URL(`https://graph.facebook.com/v18.0/${endpoint}`);
  Object.entries({ ...params, access_token: accessToken }).forEach(([k, v]) => {
    url.searchParams.append(k, v);
  });

  const response = await fetch(url.toString(), { method: 'GET' });
  if (!response.ok) {
    throw new Error(`Graph API erro: ${response.status} ${await response.text()}`);
  }
  return response.json();
}

async function graphApiPost(endpoint, body, accessToken) {
  const url = `https://graph.facebook.com/v18.0/${endpoint}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...body, access_token: accessToken }),
  });
  if (!response.ok) {
    throw new Error(`Graph API erro: ${response.status} ${await response.text()}`);
  }
  return response.json();
}

async function pollContainer(containerId, accessToken, timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const status = await graphApiFetch(`${containerId}`, { fields: 'status_code' }, accessToken);
    if (status.status_code === 'FINISHED') return;
    if (status.status_code === 'ERROR') throw new Error(`Container ${containerId} deu erro.`);
    await new Promise((r) => setTimeout(r, 3000));
  }
  throw new Error(`Timeout esperando container ${containerId} ficar pronto.`);
}

// --- Publicação Instagram ---

async function publishToInstagram() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  if (!accessToken || !userId) {
    throw new Error('INSTAGRAM_ACCESS_TOKEN e INSTAGRAM_USER_ID são obrigatórios.');
  }

  console.log(`📤 Subindo ${imageList.length} imagens pro imgbb...`);
  const publicUrls = [];
  for (const img of imageList) {
    const url = await uploadToImgbb(img);
    publicUrls.push(url);
    console.log(`   ✅ ${path.basename(img)} → ${url}`);
  }

  console.log(`📝 Criando containers filhos (${publicUrls.length})...`);
  const childIds = [];
  for (const url of publicUrls) {
    const container = await graphApiPost(
      `${userId}/media`,
      { image_url: url, is_carousel_item: true },
      accessToken
    );
    childIds.push(container.id);
  }

  console.log(`⏳ Aguardando containers ficarem prontos...`);
  for (const id of childIds) {
    await pollContainer(id, accessToken);
  }

  console.log(`📦 Criando container pai (carousel)...`);
  const parent = await graphApiPost(
    `${userId}/media`,
    {
      media_type: 'CAROUSEL_ALBUM',
      caption,
      children: childIds.join(','),
    },
    accessToken
  );

  console.log(`⏳ Aguardando container pai...`);
  await pollContainer(parent.id, accessToken);

  console.log(`🚀 Publicando...`);
  const published = await graphApiPost(`${parent.id}/media_publish`, {}, accessToken);

  return {
    id: published.id,
    url: `https://www.instagram.com/p/${published.id.replace('_', '/')}`,
  };
}

// --- Publicação Facebook ---

async function publishToFacebook() {
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID;
  if (!accessToken || !pageId) {
    throw new Error('FACEBOOK_ACCESS_TOKEN e FACEBOOK_PAGE_ID são obrigatórios.');
  }

  console.log(`📤 Subindo imagens pro imgbb...`);
  const publicUrls = [];
  for (const img of imageList) {
    const url = await uploadToImgbb(img);
    publicUrls.push(url);
  }

  // Facebook: post com foto attached, ou photos pra álbum
  const photos = publicUrls.map((url) => ({ media_fbid: url }));

  // Para carrossel no Facebook, anexamos várias fotos a um post de feed
  const params = new URLSearchParams();
  params.append('message', caption);
  params.append('access_token', accessToken);
  for (const url of publicUrls) {
    params.append('attached_media[]', JSON.stringify({ media_fbid: url }));
  }

  console.log(`🚀 Publicando no Facebook...`);
  const response = await fetch(`https://graph.facebook.com/v18.0/${pageId}/feed`, {
    method: 'POST',
    body: params,
  });
  const data = await response.json();
  if (data.error) throw new Error(`Facebook: ${data.error.message}`);
  return {
    id: data.id,
    url: `https://facebook.com/${data.id}`,
  };
}

// --- Main ---

(async () => {
  try {
    let result;
    if (platform === 'instagram') {
      result = await publishToInstagram();
    } else if (platform === 'facebook') {
      result = await publishToFacebook();
    } else {
      console.error(`❌ Plataforma não suportada em Graph API direto: ${platform}. Use 'instagram' ou 'facebook'.`);
      process.exit(1);
    }

    console.log(`\n✅ Publicado!`);
    console.log(`   ID: ${result.id}`);
    console.log(`   URL: ${result.url}`);
  } catch (err) {
    console.error('\n❌ Erro:', err.message);
    process.exit(1);
  }
})();
