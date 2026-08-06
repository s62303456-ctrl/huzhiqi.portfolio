# 胡智琪 · 作品集

## 为什么根目录 index.html 打不开？

这是 **React + Vite** 项目，根目录的 `index.html` 只是开发入口，必须用：

```bash
npm install
npm run dev
```

**部署请用 `dist` 文件夹**（已打包好的静态网站），不要上传整个项目。

## 如何部署

1. 打开 `dist` 文件夹
2. 把里面的全部内容上传到：GitHub Pages / Netlify / 腾讯云静态网站 / 学校服务器等
3. 确保上传后能看到 `index.html` 和 `assets` 文件夹

本地预览打包结果：

```bash
npm install
npm run preview
```

或直接双击打开：`dist/index.html`
