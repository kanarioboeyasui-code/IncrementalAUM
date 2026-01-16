# Factor Fund - ファクター投資インクリメンタルゲーム

運用会社を立ち上げて、市場のファクターを発見し、世界最大の運用会社を目指すインクリメンタルゲームです。

## 🎮 ゲームの概要

- **データ収集**: 市場のノイズ（データ）を集めます
- **研究**: データを分析して研究ポイントを獲得します
- **ファクター発見**: 研究ポイントを使って市場のファクターを発見します
- **戦略展開**: 発見したファクターに基づいて投資戦略を展開します
- **リバース**: AlphaOmega (ESG) ファクターを発見すると、新しい地域への参入が可能になります

## 🚀 公開方法（GitHub Pages）

このゲームをGitHub Pagesで公開する手順：

### 1. GitHubリポジトリを作成

1. **GitHubアカウントを作成**（まだ持っていない場合）
   - https://github.com にアクセスしてアカウントを作成

2. **新しいリポジトリを作成**
   - GitHubで「New repository」をクリック
   - リポジトリ名を入力（例: `factor-fund-game`）
   - **Public** を選択
   - 「Create repository」をクリック

### 2. コードをプッシュ

```bash
# リモートリポジトリを追加（GitHubで作成したリポジトリのURLを使用）
git remote add origin https://github.com/[あなたのユーザー名]/[リポジトリ名].git

# コードをプッシュ
git branch -M main
git push -u origin main
```

### 3. GitHub Pagesを有効化

1. リポジトリの「Settings」タブをクリック
2. 左メニューの「Pages」をクリック
3. 「Source」で「GitHub Actions」を選択（推奨）または「Deploy from a branch」を選択
4. 「Save」をクリック

### 4. 公開URLを取得

- 数分待つと、Pagesセクションに表示されるURLが利用可能になります
- URL形式: `https://[あなたのユーザー名].github.io/[リポジトリ名]/`
- このURLを共有すれば、誰でもゲームをプレイできます！

### 代替案：NetlifyやVercel

GitHub Pagesの代わりに、以下のサービスも使用できます：

- **Netlify**: https://www.netlify.com
  - ドラッグ&ドロップで `index.html` をアップロードするだけ
- **Vercel**: https://vercel.com
  - GitHubリポジトリと連携して自動デプロイ

## 📝 ローカルでプレイする方法

ブラウザで `index.html` を開くだけでプレイできます。

## 🔨 本番環境用ビルド

開発環境の警告を解消し、最適化された本番用バージョンを作成するには：

1. **依存関係をインストール**
   ```bash
   npm install
   ```

2. **ビルドを実行**
   ```bash
   npm run build
   ```

3. **本番用ファイルを使用**
   - `index.production.html` が生成されます
   - このファイルには警告がなく、最適化されています
   - GitHub Pagesなどで公開する場合は、このファイルを `index.html` として使用してください

## 🛠️ 技術スタック

- React 18
- Tailwind CSS (開発: CDN、本番: ビルド済み)
- Babel (開発: Standalone、本番: 事前コンパイル)
- 純粋なHTMLファイル（サーバー不要）

## 📄 ライセンス

このプロジェクトは自由に使用・改変・共有できます。
