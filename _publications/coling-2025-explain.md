---
title: "Explain-Analyze-Generate: A Sequential Multi-Agent Collaboration Method for Complex Reasoning"
collection: publications
permalink: /publication/coling-2025-explain
excerpt: 'Wenyuan Gu<sup>*</sup>, **Jiale Han**<sup>*</sup>, Haowen Wang, Xiang Li, Bo Cheng.'
date: 2025-01-01
venue: 'International Conference on Computational Linguistics (COLING)'
---

Wenyuan Gu<sup>*</sup>, **Jiale Han**<sup>*</sup>, Haowen Wang, Xiang Li, Bo Cheng.

[Paper](https://aclanthology.org/2025.coling-main.475/)

Exploring effective collaboration among multiple large language models (LLMs) represents an active research direction, with multiagent debate (MAD) emerging as a popular approach. MAD involves LLMs independently generating responses and refining their own responses by incorporating feedback from other agents in a debate manner. However,empirical experiments reveal the suboptimal performance of MAD in complex reasoning scenarios. We attribute this to the potential misleading caused by peer agents with limited individual capabilities. To address this, we propose a novel sequential collaboration framework named Explain-Analyze-Generate(EAG). By decomposing complex tasks into essential subtasks and employing a pipeline approach, EAG enable agents provide constructive assistance to peers, ultimately yielding higher performance. We conduct experiments on the comprehensive complex language reasoning benchmark: BIG-Bench-Hard (BBH). Our method achieves the highest performance on 19 out of 23 tasks, with an average improvement of 8% across all tasks, and incurs lower costs compared to MAD, demonstrating its effectiveness and efficiency.