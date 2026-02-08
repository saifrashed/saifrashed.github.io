---
title: DupliScanPro
---

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/dupliscanpro/cover.jpg" alt="University of Amsterdam Science park" style="max-width: 100%; height: auto; border-radius: 8px;" />
</figure>

[Repository](https://github.com/saifrashed/software-evolution)

During my master at the University of Amsterdam, I looked into the issue of **code duplication**, a phenomenon that quietly hampers software maintainability. As part of the *Software Evolution* course, I developed **DupliScanPro**, a tool to detect code clones. The *Software Evolution* course looks at change in codebases across time, and how we as engineers can help them stay healthy over years and even decades. Clone detection stood out as a core aspect, because redundant code compounds technical debt and makes future changes increasingly problematic.

Spotting an exact copy-paste is one thing, but what about code that’s nearly the same except for a name change or swapped literal? The goal with DupliScanPro was to find both **Type I clones** (exact matches) and **Type II clones** (structurally similar but with superficial changes in identifiers or literals). The analysis of the programming language is done algoritmically, using the [Rascal](https://www.rascal-mpl.org/) meta programming language. The detection was built around the Abstract Syntax Tree (AST) data structure. This data structure represents the code at an higher level of abstraction, and therefore easier to work with, relieving us from memory expensive string operations. Two algorithms have been implemented:

* **Basic (Type I) Algorithm:** Quickly detects exact matches by hashing and efficiently comparing structural subtrees.
* **Sequence (Type I & II) Algorithm:** Finds “near-miss” clones, normalizing code to ignore differences in variable names and literals, and compares code sequences within the AST.

The focus was put on <u>scalability</u> and <u>performance</u>, which was tested on larger, real-world Java projects. The frontend was built with React, Tailwind CSS, and ECharts, inspired by cognitive research from the course. The goal was to minimize the mental workload for whoever is reviewing the results.

* **Chord diagrams:** Map out code duplication relationships between files visually.
* **Side-by-side comparison:** Makes it easy to spot exactly how clones differ.
* **Statistics summary:** Provides an instant “health report” for the codebase’s duplication.

There is a lot more to do, especially around making the visualizations more interactive and scalable, but this project was a good first step. Huge thanks to [Dr. L.T. (Thomas) van Binsbergen](https://ltvanbinsbergen.nl/) for his lectures and my teammate [Stephen Kwan](https://www.linkedin.com/in/stephen-kwan-a09442261/) for the collaboration.