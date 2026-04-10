---
title: Treat Your Documentation Like Code 
description: For decades, software documentation was written in isolated tools like Microsoft Word, Google Docs, or WYSIWYG wikis like Confluence. This created a massive disconnect between the code and the documentation. For technical documentation we ought to rethink how we store, version and update our docs.
---

4 April, 2026

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/best-practices-effective-pull-requests/cover.png" alt="Cover images" style="max-width: 100%; height: auto; border-radius: 8px;" />
</figure>



Git provides a perfect, immutable audit trail of exactly who changed a system's documentation, what they changed, and when they changed it. You can't easily prove that to a financial regulator with a shared Word doc!


No Context Switching for Developers: Developers hate leaving their IDE (like VS Code) to log into a wiki to write docs. By keeping docs in the repository, developers can update the code and the documentation in the exact same commit.
Perfect Versioning: If a company releases Version 1.0 and Version 2.0 of their software simultaneously, Docs-as-Code allows them to maintain branches of documentation. A user can toggle a dropdown on the website to view the docs exactly as they were for v1.0.
A Single Source of Truth: Wikis often become "graveyards" of outdated information because no one remembers to update them. When docs live with the code, it is much easier to institute policies like: "No code PR can be merged unless the corresponding documentation is updated."
Open Source Collaboration: Because the workflow uses standard Git operations, anyone in the world can submit a typo fix or a new tutorial to open-source documentation simply by opening a PR.

 The Tooling Ecosystem
The shift to Docs-as-Code has spawned a massive ecosystem of specialized tools.
Static Site Generators (SSGs): Tools that take folders full of Markdown files and compile them into beautiful, searchable websites. Popular examples include Docusaurus (built by Meta), MkDocs (Python-based), Hugo, and Sphinx.
Linters and Testing: Just as code is tested for bugs, documentation is tested automatically in the CI pipeline.
Vale: A highly customizable prose linter that checks text against corporate style guides (e.g., the Microsoft Manual of Style or Google Developer Documentation Style Guide).
Link Checkers: Scripts that crawl the documentation to ensure there are no dead links or broken image tags.
Markdownlint: Ensures all Markdown is formatted consistently.
Advanced Markup (MDX): A modern evolution of Markdown that allows authors to embed interactive UI components (like React widgets, live API playgrounds, or interactive charts) directly into plain text files.



What the Heck is Backstage Anyway? 
"Spotify uses a docs-like-code approach. Engineers write technical documentation in Markdown files that live together with the code. During CI, a beautiful-looking documentation site is created using MkDocs, and all sites are rendered centrally in a Backstage plugin"
(https://www.youtube.com/watch?v=uFGCaZmA6d4)
# https://engineering.atspotify.com/2020/03/what-the-heck-is-backstage-anyway

2022 Accelerate State of DevOps Report
# https://dora.dev/research/2022/dora-report/2022-dora-accelerate-state-of-devops-report.pdf

Software Documentation Issues Unveiled
# https://csnagy.github.io/research/pdfs/2019/Aghajani2019-preprint.pdf

Architecture Decision Records in Action: An Empirical Study
# https://rebekkaa.github.io/files/2024_ECSA.pdf




# https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Group_Dynamics/Latane_et_al_1979_Many_hands_make_light_the_work.pdf


# https://aiamc.org/uploads/Edmondson%202012%20-%20Teamwork%20On%20The%20Fly.pdf

# https://www.melconway.com/Home/pdf/committees.pdf



If you need to drop quick stats into your article, lean heavily on the DORA State of DevOps Report (2021/2022) for the business value, and frame Git as an immutable audit ledger to satisfy the risk/compliance angle that bankers care about.
