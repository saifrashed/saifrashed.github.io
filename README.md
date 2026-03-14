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








The code is done, the tests pass, but now you have to write the pull request description. It feels repetitive and happens to consume much time, but recent research shows that writing this context-sensitive description might shape the entire review process. A peer-reviewed study analyzing a large dataset of pull requests shows clear qualitative differences and formulates a set of best practices.

Using this as my guide, I've developed an automated tool using the GitHub and OpenAI APIs, that reads the issue description and Git context. It uses an LLM to complete a PR template, allowing the developer to modify, or accept an generated description.



The code is done and the tests pass, yet the pull request description remains to be written. While this often feels repetitive and consumes significant time, recent studies emphasize the importance of this context-sensitive task in shaping the review process. A peer-reviewed study analyzing a large dataset of pull requests shows clear qualitative differences and formulates 12 best practices for writing descriptions.

Using this as my guide, I've developed an automated tool using the GitHub and OpenAI APIs, that reads the issue description and Git context. It uses an LLM to complete a research-based PR template, allowing the developer to modify, reject, or accept the generated description.





We all know the pain of reviewing a pull request with a vague description. Writing one is a context-sensitive task that can either speed up or significantly slow down the code review process. I looked at two recently published academic papers to understand best practices for writing impactful PR descriptions and making the most of PR templates. It's a short read, and I would love to hear your thoughts on it.


In a short article I look at two recent studies that analyze in total 150k pull requests from Github, from it they extract important findings that help us understand how to write accurate descriptions. 



How you write a pull request can either speed up or completely bottleneck your code review process. To find out what actually matters, I looked at two recent academic studies that analyzed over 150k GitHub PRs across multiple projects and surveyed over a hundred developers. In my short article, I break down their findings on effective PR descriptions. It is a quick read, and I would love to hear about your experience with code reviews.

https://www.saifrashed.com/blog/20260221-best-practices-effective-pull-requests/




