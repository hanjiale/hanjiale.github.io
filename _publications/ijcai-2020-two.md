---
title: "Two-Phase Hypergraph Based Reasoning with Dynamic Relations for Multi-Hop KBQA"
collection: publications
permalink: /publication/ijcai-2020-two
excerpt: '**Jiale Han**, Bo Cheng, Xu Wang.'
date: 2020-11-11
venue: 'Proceedings of the International Joint Conference on Artificial Intelligence (IJCAI)'
---
**Jiale Han**, Bo Cheng, Xu Wang.

[pdf](https://www.ijcai.org/Proceedings/2020/0500)


Multi-hop knowledge base question answering (KBQA) aims at finding the answers to a factoid question by reasoning across multiple triples. Note that when human performs multi-hop reasoning, one tends to concentrate on specific relation at different hops and pinpoint a group of entities connected by the relation. Hypergraph convolutional networks (HGCN) can simulate this behavior by leveraging hyperedges to connect more than two nodes more than pairwise connection. However, HGCN is for undirected graphs and does not consider the direction of information transmission. We introduce the directed-HGCN (DHGCN) to adapt to the knowledge graph with directionality. Inspired by human's hop-by-hop reasoning, we propose an interpretable KBQA model based on DHGCN, namely two-phase hypergraph based reasoning with dynamic relations, which explicitly updates relation information and dynamically pays attention to different relations at different hops. Moreover, the model predicts relations hop-by-hop to generate an intermediate relation path. We conduct extensive experiments on two widely used multi-hop KBQA datasets to prove the effectiveness of our model.