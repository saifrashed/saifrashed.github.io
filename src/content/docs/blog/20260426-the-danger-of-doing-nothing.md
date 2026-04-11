---
title: The Danger of Doing Nothing
description: test
---

11 April, 2026

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/the-danger-of-doing-nothing/cover.jpg" alt="Cover images" style="max-width: 100%; height: auto; border-radius: 8px;" />
    <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: #666; font-style: italic;">
      The <a href="https://en.wikipedia.org/wiki/The_Tower_of_Babel_%28Bruegel%29">Tower of Babel</a> is a story about a group of people attempting to build a tower to heaven, a project that collapses when they lose the ability to speak and understand the same language.
    </figcaption>
</figure>

Imagine a future where you, as a software engineer, hand off an approved technical plan to an autonomous system that effortlessly accepts your documents, asks a few follow-up questions, sets up the environment, and gets to work. As it accesses the terminal, creates files, fetches remote assets, and writes lines of code, you simply sit back and wait for the agent to set the backlog item to 'implemented' then 'tested' and finally 'deployed', feels like a utopia, right? 

This vision has prompted the industry to [push for Agentic AI](https://www.mckinsey.com/featured-insights/week-in-charts/agentic-ai-advances), the use of systems that act autonomously without human intervention. A [paper](https://arxiv.org/pdf/2508.17343) by A. Roychoudhury describes the potential of this technology. Unlike traditional LLMs, these agents are designed to go far beyond code generation. The study concludes that as software engineering becomes heavily automated, the industry must pivot from simply generating code to using AI agents that can deeply analyze code structure, infer human intent, and verify that software is secure.

According to Lisanne Bainbridge, automation might make problems bigger instead of smaller. In her [1983 paper "Ironies of Automation"](https://static1.squarespace.com/static/644321e78cd2dd37613af33e/t/6694873f71612132a84371c7/1721009983702/Ironies+of+Automation_Bainbridge_1983.pdf) she explains how system designers often see humans as unreliable, not taking into account that designer errors account for the majority of issues, and leaving the human with just a few difficult and troublesome tasks. Moreover, when a system fails to do something correctly, the engineer has to intervene; however, due to a lack of hands-on activity, the engineer's ability degrades. This erosion of cognitive ability is a consequence of the lack of interaction with the system. Additionally, the natural mental model that builds as one uses a system is incomplete, which will cause trouble when emergencies or incidents occur. Even deeper lies the psychological impact: the engineer will lose knowledge and confidence in the system, damaging their professional status and leading them to intentionally operate the systems manually, just to feel in control.

To see the biological impact of total automation, one needs to look no further than the mysterious, electrified slab of meat housed in our skulls: the human brain. [Researchers at MIT conducted an experiment](https://arxiv.org/pdf/2506.08872) with three test groups: LLM, Search Engine, and Brain-only users, who worked across multiple sessions. In the final session, the LLM and Brain-only groups were swapped. The participants were assessed using multiple evaluation tools, such as electroencephalography (EEG) to measure cognitive load, and Natural Language Processing (NLP) to evaluate written essays. The results revealed that cognitive activity and neural connectivity decrease as reliance on external tools increases, with LLM users showing the weakest engagement; however, attempting a task independently before consulting an LLM helps preserve memory recall and brain activation.

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/the-danger-of-doing-nothing/eeg-scan.png" alt="Difficulty of PR descriptions" style="max-width: 100%; height: auto; border-radius: 8px;" />
    <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: #666; font-style: italic;">
    From "Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task"
    </figcaption>
</figure>

The neural inactivity observed by MIT is not a glitch, but a feature of human biology. Setting a reminder on our phone or rotating our head to see a rotated image are some of the examples listed [in a review by E. Risko et al](https://samgilbert.net/pubs/Risko2016TiCS.pdf)., which discusses the concept of cognitive offloading. It describes the relationship between human cognition and physical activity. They suggest we rely on physical actions just to reduce cognitive demand; however, they note that doing this might have a negative impact on low-level cognitive capacities and metacognition.

The promise of fully automated construction of complex software systems comes with a price. Just as omissions in the code layer can lead to increased technical debt, omissions in code understanding can lead to an increase in cognitive debt. Margaret-Anne Storey [finds](https://arxiv.org/pdf/2603.22106) that GenAI does not solve software issues, but rather redistributes them. She defines cognitive debt as an inadequate understanding across a team, making systems harder to understand overall. Furthermore, who is to say that the AI agents develop software according to human readability standards? [A different study](https://veneraarnaoudova.ca/wp-content/uploads/2018/03/2018-ICPC-Effect-lexicon-cognitive-load.pdf) used a technique called functional Near-Infrared Spectroscopy (fNIRS) to demonstrate that inappropriately named identifiers and poorly written comments significantly increase developers' cognitive load, driving up overall potential cognitive debt.

Eventually, this debt has to be paid back. When incidents or outages occur we look towards the experts. [A study by X. Xia et al.](https://baolingfeng.github.io/papers/tsecomprehension.pdf) involved a field study on 7 real-world projects consisting of 79 professional developers, and found that the majority spend up to 58% of their time on program comprehension using tools like a web browser and editors. This can increase significantly if the source code contains antipatterns that impact the linguistic quality. When an AI agent is the sole author of a codebase, that 58% baseline threatens to increase. This is the compounding effect of cognitive debt. During a critical system incident, perhaps on a weekend, an AI agent may lack the ability required to debug a complex architectural collapse. The responsibility falls back onto the human engineer. However, because the engineer has offloaded the day-to-day coding, their mental model of the system is fractured, they have no skin in the game, and their problem-solving muscles have atrophied. They are forced to understand an alien codebase, written with logic they did not construct, using skills they have not recently practiced.


<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/the-danger-of-doing-nothing/the-sorcerer-apprentice.png" alt="Difficulty of PR descriptions" style="max-width: 100%; height: auto; border-radius: 8px;" />
    <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: #666; font-style: italic;">
      In a <a href="https://en.wikipedia.org/wiki/The_Sorcerer%27s_Apprentice">poem</a> from 1797 by Johann Wolfgang von Goethe, an apprentice uses magic he doesn’t fully understand to animate a broom to do his chores, but loses control as it multiplies and floods the workshop.
    </figcaption>
</figure>

Furthermore, fixing a system you didn’t build is fundamentally different from recalling one you did. As the MIT EEG study suggested, without that initial independent engagement, our memory recall is impacted. The engineer isn't just reading code; they are reverse-engineering an autonomous agent's thought process under pressure. The very automation that was meant to save time in the short term ends up causing delays in the long term. So, how do we prevent software engineering from becoming a victim of its own automation? Agentic AI should be treated as an amplifier of human capability, not a substitute for human understanding. We must have strict readability standards, mandate "human-in-the-loop" code reviews, and require engineers to actively participate in architectural decision-making.

The vision of sitting back while an agent moves tickets from "backlog" to "deployed" is indeed a tempting ideal. But if we outsource our cognitive effort entirely, we will inevitably end up in a reality where we are no longer the owners of our own systems. 

