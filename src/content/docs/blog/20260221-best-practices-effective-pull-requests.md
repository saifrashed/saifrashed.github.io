---
title:  Best Practices for Effective Pull Requests
description: Yes
---

12 March, 2026

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/what-makes-a-good-pull-request/cover.png" alt="Cover images" style="max-width: 100%; height: auto; border-radius: 8px;" />
</figure>

When Linus Torvalds invented Git in 2005 to manage the thousands of Linux kernel code contributions, he did not include a clear and easy-to-use workflow for reviewing code. Only years later, when GitHub popularized modern pull requests (PRs) in 2008, did it provide developers with a new way of reviewing code, making use of git pull to merge changes into the main branch.

A pull request is [defined](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) as a proposed code change submitted for developers to review, approve, and merge into the source repository. To determine the value of an effective PR description, [Pirouzkhah et al](http://arxiv.org/abs/2602.14611) analyzed 80k modified Github PRs across multiple projects and interviewed 64 developers on this topic. They observe that writing a PR description is a context-sensitive task, not just a simple repetitive one. They let us know that a PR serves two roles: descriptive, explaining the purpose, code, and testing; and also as a way to shape the reviewing process, setting expectations for both parties. PR templates are a great way to do this. They act as a predefined blueprint stored in your repository, automatically generating the PR description the moment it is created. Employing these templates has been [shown to improve the review process](https://www.sciencedirect.com/science/article/abs/pii/S0950584921002354), correlating with fewer duplicate PRs, shorter review times, and fewer review comments, especially when the templates are well-structured.

So, what exactly makes a PR description well-structured? According to [a paper](https://dl.acm.org/doi/epdf/10.1145/3797880) by Jiang et al, PRs help reviewers make informed decisions, however descriptions are not always clearly written. They argue that reviewer modification has often been neglected in previous studies, despite being key in improving description quality, and speeding up a time-consuming review process. During the research, thousands of PRs are analyzed to understand what makes a high-quality description. It finds that 40% of PR suggestions are not applied and that applying them leads to 4.31 times higher approval rates. The research formulates best practices and shares a set of 12 practices, including practices such as including a motivation, linking the related issue and explaining the trade-offs. Based on 40 valid survey responses regarding the difficulty and importance of these practices, the following results were obtained:

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/what-makes-a-good-pull-request/difficulty.png" alt="Difficulty of PR descriptions" style="max-width: 100%; height: auto; border-radius: 8px;" />
    <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: #666; font-style: italic;">
    Importance and Difficulty of Practices 
    </figcaption>
</figure>

Interestingly, the data suggests that administrative tasks like linking issues are seen as important and easy. However, the more complex tasks, like explaining how and why code was written, are recognized as both important and more challenging to perform. The low importance assigned to updating checklists might indicate they are viewed as bureaucratic formalities rather than a meaningful step in the code review process.

Ultimately, pull requests have drastically changed the code review process, but their success still heavily depends on well-written descriptions. These descriptions serve as an important communication tool that sets expectations between the reviewer and the reviewee. While administrative tasks are important for developers, most valuable practices require time and effort. The key to writing an effective description lies in explaining how and why a change was made. Investing the time to detail the motivation, trade-offs, and effects of the code can lead to shorter review cycles and fewer revisions.