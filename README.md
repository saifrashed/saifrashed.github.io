# Blog

## 🚀 Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   │       ├── blog/        # Blog posts
│   │       └── index.mdx    # Home page
│   └── content/config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Blog posts are `.md` or `.mdx` files in `src/content/docs/blog/`. Each file is exposed as a route based on its file name.

## 🧞 Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Installs dependencies                       |
| `npm run dev`     | Starts local dev server at `localhost:4321` |
| `npm run build`   | Build your production site to `./dist/`     |
| `npm run preview` | Preview your build locally                  |




20231013-playerworkload-capture-analysis.md



After some transformations, I perform name binding, which passes by all varlet and var nodes, and searches the name in the symbol table with ```NBlookup```. We search by climbing up the parents until there is no parent left.