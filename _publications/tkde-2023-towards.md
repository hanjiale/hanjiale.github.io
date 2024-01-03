---
title: "Towards Hard Few-Shot Relation Classification"
collection: publications
permalink: /publication/tkde-2023-towards
excerpt: '**Jiale Han**, Bo Cheng, Zhiguo Wan, and Wei Lu.'
date: 2023-01-31
venue: 'IEEE Transactions on Knowledge and Data Engineering (TKDE)'
---

[pdf](https://ieeexplore.ieee.org/abstract/document/10032649)
[code](https://github.com/hanjiale/hcrp)

Few-shot relation classification (FSRC) focuses on recognizing novel relations by learning with merely a handful of annotated instances. Meta-learning has been widely adopted for such a task, which trains on randomly generated few-shot tasks to learn generic data representations. Despite impressive results achieved, existing models still perform suboptimally when handling hard FSRC tasks with similar categories that confuse the model to distinguish correctly. We argue this is largely due to two reasons, 1) ignoring pivotal and discriminate information that is crucial to distinguish confusing classes, and 2) training indiscriminately via randomly sampled tasks of varying difficulty. In this article, we introduce a novel prototypical network approach with contrastive learning that learns more informative and discriminative representations by exploiting relation label information. We further design two strategies that increase the difficulty of training tasks and allow the model to adaptively learn to focus on hard tasks. By doing so, our model can better represent subtle inter-relation variance and grow up through task difficulty. Extensive experiments on three standard benchmarks demonstrate the effectiveness of our method.