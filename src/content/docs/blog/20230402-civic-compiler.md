---
title: CiviC Compiler
description: Developing a compiler for the C-like language CiviC, featuring lexical analysis, parsing, and code generation.
---

<a href="https://github.com/saifrashed/CiviC-compiler" target="_blank">Repository</a> | <a href="/assets/civic-compiler/compiler-report.pdf" target="_blank">Download full report</a> | <a href="/assets/civic-compiler/civic-manual.pdf" target="_blank">CiviC Manual</a>

Compilers are a unique program that translate higher level programming code into lower level code, typically machine executable instructions like assembly. I developed a compiler for the CiviC language, a C-like language designed by the University of Amsterdam for the course Compiler Construction. The focus was on core language features, including support for arrays, multi-dimensional arrays, and nested functions.

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/civic-compiler/overview.png" alt="Compiler architecture diagram" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: #666; font-style: italic;"><b>Figure 1:</b> Compiler architecture</figcaption>
</figure>

The process began with lexicographic analysis using Flex to define tokenization rules. Next, I conducted syntactic analysis, building grammars for constants, expressions, statements, and function definitions. Initial ambiguities and conflicts, particularly with variable declarations, were resolved by trial-and-error. During semantic analysis, I created a symbol table data structure for type checking and declaration management. Traversals captured all declarations while maintaining checks for variable scopes. The symbol table allowed name binding through systematic lookups in the symbol table, ensuring all variables were correctly defined and accessible. In the code generation phase, I transformed the AST and implemented output strategies in preparation for assembly generation. By traversing the grammar, I produced assembly code compatible with the CiviCC VM.

Due to strict deadlines and overwhelming work, the importance of planning and prioritization could not be understated. The project began with improvisation, but once the intuition seeped in, it became systematic, particularly during semantic analysis. There were some unresolved challenges, especially with array initialization and function overloading, however overall, the project was a success because it had the core features, but more importantly provided a valuable learning experience. The net result is a functional compiler and a solidified understanding of compiler design.