---
title: "Exploring Task Difficulty for Few-Shot Relation Extraction"
collection: publications
permalink: /publication/emnlp-2021-exploring
excerpt: '**Jiale Han**, Bo Cheng, and Wei Lu.'
date: 2021-11
venue: 'Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing'
---

[pdf](https://aclanthology.org/2021.emnlp-main.204/)
[code](https://github.com/hanjiale/hcrp)


Few-shot relation extraction (FSRE) focuses on recognizing novel relations by learning with merely a handful of annotated instances. Meta-learning has been widely adopted for such a task, which trains on randomly generated few-shot tasks to learn generic data representations. Despite impressive results achieved, existing models still perform suboptimally when handling hard FSRE tasks, where the relations are fine-grained and similar to each other. We argue this is largely because existing models do not distinguish hard tasks from easy ones in the learning process. In this paper, we introduce a novel approach based on contrastive learning that learns better representations by exploiting relation label information. We further design a method that allows the model to adaptively learn how to focus on hard tasks. Experiments on two standard datasets demonstrate the effectiveness of our method.