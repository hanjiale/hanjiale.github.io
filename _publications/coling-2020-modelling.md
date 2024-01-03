---
title: "Modelling Long-distance Node Relations for KBQA with Global Dynamic Graph"
collection: publications
permalink: /publication/coling-2020-modelling
excerpt: 'Xu Wang, Shuai Zhao, **Jiale Han**, Bo Cheng, Hao Yang, Jianchang Ao, and Zhenzi Li.'
date: 2020-12-08
venue: 'Proceedings of the 28th International Conference on Computational Linguistics'
---

[pdf](https://aclanthology.org/2020.coling-main.231/)


The structural information of Knowledge Bases (KBs) has proven effective to Question Answering (QA). Previous studies rely on deep graph neural networks (GNNs) to capture rich structural information, which may not model node relations in particularly long distance due to oversmoothing issue. To address this challenge, we propose a novel framework GlobalGraph, which models long-distance node relations from two views: 1) Node type similarity: GlobalGraph assigns each node a global type label and models long-distance node relations through the global type label similarity; 2) Correlation between nodes and questions: we learn similarity scores between nodes and the question, and model long-distance node relations through the sum score of two nodes. We conduct extensive experiments on two widely used multi-hop KBQA datasets to prove the effectiveness of our method.