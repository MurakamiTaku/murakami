# EC業務効率化支援サイト

静的サイトとしてそのままデプロイできます。

## 収録ファイル
- `index.html`
- `styles.css`
- `script.js`
- `assets/hero-visual.svg`
- `assets/flow-visual.svg`
- `assets/og-image.png`
- `assets/favicon.svg`

## GitHub リポジトリをいったん入れ替える手順

```bash
git clone https://github.com/MurakamiTaku/murakami.git
cd murakami

# 既存ファイルを削除（.git は残す）
find . -mindepth 1 -maxdepth 1 ! -name ".git" -exec rm -rf {} +

# このサイト一式をコピー
# 例:
# cp -R /path/to/ec-efficiency-site/* .

git add .
git commit -m "Replace site with redesigned EC efficiency landing page"
git push origin main
```

## Cloudflare Pages
- Framework preset: `None`
- Build command: 空欄
- Build output directory: 空欄
