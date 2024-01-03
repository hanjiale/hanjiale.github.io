---
title: "DVKCM: Knowledge-guided Conversation Generation with Dynamic Vocabulary"
collection: publications
permalink: /publication/ijcnn-2020-knowledge
excerpt: 'Xu Wang, Shuai Zhao, Bo Cheng, **Jiale Han**, Xiangsheng Wei, Yi Liang, and Hao Yang.'
date: 2020-07-19
venue: 'International Joint Conference on Neural Networks (IJCNN)'
---

[pdf](https://ieeexplore.ieee.org/document/9207441)

Knowledge-guided conversation models, whose inputs are current input sentence with its background knowledge, make the generation of responses more informative and meaningful. Existing methods assume that words in responses come from the vocabulary of the whole corpus. However, for specific input and knowledge, only a small vocabulary is useful in prediction and other words lead to uncorrelated noise. In this paper, we propose a Dynamic Vocabulary based Knowledge-guided Conversation Model (DVKCM). Inspired by dynamic vocabulary mechanism, DVKCM adopts the vocabulary construction module to allocate the sentence-level vocabulary which relates to the input sentence and background knowledge, and then only uses the small vocabulary to execute the decoding part. Through the sentence-level vocabulary mechanism, we reduce the generation of noise effectively. Experiments on both automatic and human evaluation verify the performance of our model compared with previous models. Moreover, we find that dynamic vocabulary can be applied to other conversation models to improve their performance.