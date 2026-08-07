# Miyamoto Michiru Portfolio

React + Viteで作成した、AI / Software / Researchポートフォリオです。参考画像はデザイン確認のみに使用し、サイト内には含めていません。

## Local development

```bash
npm install
npm run dev
```

本番ビルドは `npm run build`、ビルド結果の確認は `npm run preview` です。

## GitHub Pages

`.github/workflows/deploy.yml` は `main` ブランチへのpushでビルドし、GitHub Pagesへ自動デプロイします。リポジトリの Settings > Pages > Build and deployment で Source を **GitHub Actions** にしてください。

詳細ページはGitHub Pagesで安定して再読み込みできるよう、HashRouterを使用しています。公開後のURLは `https://ユーザー名.github.io/リポジトリ名/#/projects/tracking` の形式です。

現在のリポジトリ名に合わせて `vite.config.js` の `base` を変更してください。現在は `/react-router-assignment/` です。

```js
export default defineConfig({
  plugins: [react()],
  base: '/リポジトリ名/',
})
```

## Content and assets

- プロフィール・連絡先: `src/data/profile.js`
- Projectsの追加・編集: `src/data/projects.js`。配列へオブジェクトを追加するとカードが自動で増えます。詳細ページの `detail`、`role`、`outcome`、`learning` で背景・担当・成果・学びを整理できます。
- プロフィール画像: `src/data/profile.js` の `image` を差し替えます。
- Project画像・説明・詳細情報: `src/data/projects.js` の各プロジェクトを編集します。
- トラッキング動画: 現在のHeroアートはSVGプレースホルダーです。動画を使う場合は `HeroArtwork` をvideo要素へ差し替えます。

```jsx
<video controls muted playsInline preload="metadata" poster={trackingPoster}>
  <source src={trackingVideo} type="video/mp4" />
</video>
```
