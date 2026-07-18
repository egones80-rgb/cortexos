# dados/

**Drop zone.** Jogue aqui arquivos que você quer que as skills leiam:

- `clientes.csv` → `/analisar-dados` resume a base
- `campanha-google-ads.csv` → `/relatorio-ads` lê direto
- `transcricao.txt` → `/roteiro-post` transforma em roteiro
- `planilha-vendas.xlsx` → `/analisar-dados` destrincha

Arquivos em `dados/` são **ignorados pelo Git** (vide `.gitignore`). Pode jogar dado sensível aqui sem medo — ele não vaza em commit.

O `README.md` é versionado, o resto não.
