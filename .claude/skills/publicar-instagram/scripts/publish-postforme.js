#!/usr/bin/env node
/**
 * publish-postforme.js
 *
 * Publica carrossel/post no Instagram (e outras plataformas) via Post for Me API.
 *
 * Variáveis de ambiente necessárias:
 *   POSTFORME_API_KEY      — chave da API Post for Me
 *   INSTAGRAM_ACCOUNT_ID   — ID da conta Instagram no Post for Me
 *
 * Uso:
 *   node publish-postforme.js \
 *     --platform instagram \
 *     --images "slide-1.png,slide-2.png,slide-3.png" \
 *     --caption-file "legenda.md" \
 *     --account-id "$INSTAGRAM_ACCOUNT_ID"
 *
 *   --dry-run              # testa sem publicar
 *   --draft                # cria como rascunho (pra TikTok, deixa escolher música)
 */

const fs = require('fs');
const path = require('path');

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
  'account-id': accountId,
  'dry-run': dryRun = 'false',
  draft = 'false',
} = opts;

const API_KEY = process.env.POSTFORME_API_KEY;
const PLATFORMS_SUPPORTED = ['instagram', 'tiktok', 'linkedin', 'x', 'facebook'];

if (!API_KEY && dryRun !== 'true') {
  console.error('❌ POSTFORME_API_KEY não definida. Configura em .env ou usa --dry-run.');
  process.exit(1);
}

if (!PLATFORMS_SUPPORTED.includes(platform)) {
  console.error(`❌ Plataforma não suportada: ${platform}. Use uma de: ${PLATFORMS_SUPPORTED.join(', ')}`);
  process.exit(1);
}

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
  console.warn(`⚠️ Legenda com ${caption.length} caracteres. Instagram aceita até 2200. Será cortada.`);
  caption = caption.substring(0, 2197) + '...';
}

const account = accountId || process.env[`${platform.toUpperCase()}_ACCOUNT_ID`];

// --- Dry-run ---
if (dryRun === 'true') {
  console.log('\n🧪 DRY RUN — nada será publicado.\n');
  console.log(`Plataforma: ${platform}`);
  console.log(`Conta: ${account}`);
  console.log(`Imagens (${imageList.length}):`);
  imageList.forEach((img, i) => console.log(`  ${i + 1}. ${img}`));
  console.log(`\nLegenda (${caption.length} chars):\n---`);
  console.log(caption);
  console.log('---\n');
  process.exit(0);
}

// --- Publicação real ---
async function uploadMedia() {
  // Post for Me aceita upload de mídia diretamente
  const FormData = (await import('form-data')).default;
  const form = new FormData();

  for (const img of imageList) {
    const filePath = path.resolve(img);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Arquivo não encontrado: ${filePath}`);
    }
    form.append('files', fs.createReadStream(filePath));
  }

  const response = await fetch('https://api.postforme.dev/v1/media', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    body: form,
  });

  if (!response.ok) {
    throw new Error(`Upload falhou: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

async function createPost(mediaIds) {
  const body = {
    caption,
    account_id: account,
    media_ids: mediaIds,
    platform,
    is_draft: draft === 'true' || platform === 'tiktok', // TikTok sempre rascunho pra escolher música
  };

  const response = await fetch('https://api.postforme.dev/v1/posts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Criação do post falhou: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

(async () => {
  try {
    console.log(`📤 Subindo ${imageList.length} imagens pro Post for Me...`);
    const media = await uploadMedia();
    const mediaIds = Array.isArray(media) ? media.map((m) => m.id) : [media.id];
    console.log(`✅ ${mediaIds.length} mídias uploaded.`);

    console.log(`📝 Criando post em ${platform}...`);
    const post = await createPost(mediaIds);
    console.log(`✅ Post criado!`);
    console.log(`   ID: ${post.id}`);
    if (post.url) console.log(`   URL: ${post.url}`);
    if (draft === 'true' || platform === 'tiktok') {
      console.log(`   ⚠️ Modo rascunho — abra o app pra finalizar (TikTok: escolha música).`);
    }
  } catch (err) {
    console.error('❌ Erro:', err.message);
    process.exit(1);
  }
})();
