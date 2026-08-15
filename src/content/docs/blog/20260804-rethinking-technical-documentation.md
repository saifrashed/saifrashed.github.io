---
title: Rethinking Technical Documentation
description: For decades, software documentation was written in isolated tools like Microsoft Word, Google Docs, or WYSIWYG wikis like Confluence. This created a massive disconnect between the code and the documentation. For technical documentation we ought to rethink how we store, version and update our docs.
---

4 August, 2026

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/rethinking-technical-documentation/cover.jpg" alt="Cover images" style="max-width: 100%; height: auto; border-radius: 8px;" />
</figure>

Attention is one of a developer’s most valuable resources. Focused attention keeps the gears turning, and every interruption comes at a cost.

Researcher Sophie Leroy calls this cost **“attention residue.”** In her 2009 [paper](https://www.sciencedirect.com/science/article/abs/pii/S0749597809000399), *Why Is It So Hard to Do My Work?*, she explains how part of our attention remains on a previous task after switching to another. For developers, every context switch means reorienting to a new task, and then reorienting again when returning to the original one.

Documentation often creates exactly this problem.

Traditionally, documentation has lived separately from code in tools such as Microsoft Word, Google Docs, or Confluence. It was done before or after the construction, and in mnay cases not at all. This disconnect makes documentation easier to neglect and forces developers to leave their development environment to update it.

What if we treat documentation like code?

**Docs-as-code** applies software development practices to documentation. Documentation is stored alongside the code and managed with the same tools and workflows, including:

- Version control
- Pull requests and code reviews
- Continuous integration
- Automated publishing

Developers can update code and documentation in the same commit without leaving their IDE. Because both share a repository and review process, documentation is more likely to remain aligned with the software. It also leads to less context switching, a single source of truth, perfect versioning and immutable audit trails.

Spotify has used a similar approach for years. Engineers write documentation in Markdown alongside their code, generate documentation sites with MkDocs during CI, and make them available centrally through Backstage. Product manager Gary Nieman explains the workflow in [this presentation](https://youtube.com/watch?v=uFGCaZmA6d4).

There are trade-offs.

Docs-as-code is not perfect. Markdown may feel less intuitive than a visual editor, and Git-based workflows can be a barrier for non-technical contributors.

AI tools such as GitHub Copilot, Cursor, and ChatGPT are reducing that barrier. They can generate Markdown, improve formatting, and suggest clearer wording. They are able to scan the code and synchronize it with the documentation, a task that would normally take a significant amount of effort from a human. Plain-text documentation is also easy to search, index, and analyze using IDEs and AI tools.

Taking a hybrid approach often workss best:

- Keep core technical documentation alongside the code.
- Use traditional tools for supplementary or user-facing content when visual editing and broad collaboration matter more.

The goal is not to force every document into Git. It is to reduce context switching, keep technical documentation accurate, and make documentation part of development, and not something we do later, supposedly.