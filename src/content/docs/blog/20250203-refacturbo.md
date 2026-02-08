---
title: Refacturbo
description: Researching how Large Language Models can automatically refactor code for energy efficiency.
---

<a href="https://github.com/saifrashed/refacturbo" target="_blank">Repository</a> | <a href="/assets/refacturbo/thesis.pdf" target="_blank">Thesis</a>

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/refacturbo/cover.jpg" alt="University of Amsterdam Science park" style="max-width: 100%; height: auto; border-radius: 8px;" />
</figure>


For my thesis I researched large language models (LLMs) and how they can be used to automatically refactor green anti-patterns in code for improved energy efficiency. By integrating a static analysis engine that identifies problematic code segments and generates targeted prompts for it, it can automate a significant part of the refactoring process.

## Implementation

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/refacturbo/architecture.png" alt="High-level architecture of the refactoring pipeline" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: #666; font-style: italic;"><b>Figure 2:</b> High-level architecture of the refactoring pipeline</figcaption>
</figure>

Static analysis is performed on the code using predefined rules designed to detect energy-inefficient anti-patterns, such as excessive string concatenation in loops or using if-else chains instead of switch statements. For each detected pattern, we generate prompts that explain how to refactor the code. These prompts, along with the relevant code snippets, are then provided to a language model, like GPT-4, to produce refactored code. The optimized code snippets generated are used to replace the original code, including a human-in-the-loop step as validation on correctness.

## Experiments

To assess the energy efficiency of refactored code, the evaluation follows a structured experimental methodology. For each test scenario, programs representing specific code anti-patterns and their refactored versions are executed on a controlled Device Under Test (DUT). Before each run, the DUT is prepared by disabling non-essential processes and measuring baseline idle energy consumption. The energy usage during program execution is collected using Intel RAPL-based sensors accessed via the powermetrics utility at a fixed sampling interval. Power samples, timestamped at 2Hz, are integrated with the composite trapezoidal rule to calculate total energy consumed (in Joules), and baseline values are subtracted to correct for background usage.

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/refacturbo/experiment.png" alt="Experiment orchestration" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: #666; font-style: italic;"><b>Figure 3:</b> Experiment orchestration</figcaption>
</figure>

Each test is repeated multiple times for statistical robustness, and the compiled measurements are analyzed using statistical tests (e.g., Shapiro-Wilk, Mann-Whitney U) to determine the significance of energy differences between code variants. Three Java programs were tested, each containing a different anti-pattern. Measurements used system-level power metrics at 2 Hz sampling. Results showed:

*   Refactored versions reduced energy usage by an average of about 82% (ranging 64%–90%).
*   All prompt strategies consistently outperformed the unoptimized code, but no single strategy dominated.

## Conclusions

By combining static analysis with LLM refactoring, it is feasible to detect and fix green anti-patterns automatically. Each generated code variant significantly decreased energy consumption. While multiple prompting techniques proved effective, future work could investigate more advanced pipeline stages (handling multi-file patterns, rollback mechanisms, or continuous integration) and apply these methods at scale in real projects.