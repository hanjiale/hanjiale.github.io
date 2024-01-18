---
title: "Generative Prompt Tuning for Relation Classification"
collection: publications
permalink: /publication/emnlp-2022-generative
excerpt: '**Jiale Han**, Shuai Zhao, Bo Cheng, Shengkun Ma, and Wei Lu.'
date: 2022-12-07
venue: 'Findings of the Association for Computational Linguistics: EMNLP 2022'
---
**Jiale Han**, Shuai Zhao, Bo Cheng, Shengkun Ma, and Wei Lu.

[pdf](https://aclanthology.org/2022.findings-emnlp.231/)
[code](https://github.com/hanjiale/GenPT)


Using prompts to explore the knowledge contained within pre-trained language models for downstream tasks has now become an active topic. Current prompt tuning methods mostly convert the downstream tasks to masked language modeling problems by adding cloze-style phrases and mapping all labels to verbalizations with fixed length, which has proven effective for tasks with simple label spaces. However, when applied to relation classification exhibiting complex label spaces, vanilla prompt tuning methods may struggle with label verbalizations with arbitrary lengths due to rigid prompt restrictions. Inspired by the text infilling task for pre-training generative models that can flexibly predict missing spans, we propose a novel generative prompt tuning method to reformulate relation classification as an infilling problem, which frees our approach from limitations of current prompt based approaches and thus fully exploits rich semantics of entity and relation types. In addition, we design entity-guided decoding and discriminative relation scoring to generate and align relations effectively and efficiently during inference. Extensive experiments under fully supervised settings and low-resource settings demonstrate the effectiveness of our approach.