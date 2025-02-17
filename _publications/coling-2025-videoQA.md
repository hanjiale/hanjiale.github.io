---
title: "VideoQA-TA: Temporal-Aware Multi-Modal Video Question Answering"
collection: publications
permalink: /publication/coling-2025-videoQA
excerpt: 'Zhixuan Wu, Bo Cheng, **Jiale Han**, Jiabao Ma, Shuhao Zhang, Yuli Chen, Changbo Li.'
date: 2025-01-01
venue: 'International Conference on Computational Linguistics (COLING)'
---
Zhixuan Wu, Bo Cheng, **Jiale Han**, Jiabao Ma, Shuhao Zhang, Yuli Chen, Changbo Li.

[Paper](https://aclanthology.org/2025.coling-main.483/)

Video question answering (VideoQA) has recently gained considerable attention in the field of computer vision, aiming to generate answers rely on both linguistic and visual reasoning. However, existing methods often align visual or textual features directly with large language models, which limits the deep semantic association between modalities and hinders a comprehensive understanding of the interactions within spatial and temporal contexts, ultimately leading to sub-optimal reasoning performance. To address this issue, we propose a novel temporal-aware framework for multi-modal video question answering, dubbed VideoQA-TA, which enhances reasoning ability and accuracy of VideoQA by aligning videos and questions at fine-grained levels. Specifically, an effective Spatial-Temporal Attention mechanism (STA) is designed for video aggregation, transforming video features into spatial and temporal representations while attending to information at different levels. Furthermore, a Temporal Object Injection strategy (TOI) is proposed to align object-level and frame-level information within videos, which further improves the accuracy by injecting explicit temporal information. Experimental results on MSVD-QA, MSRVTT-QA, and ActivityNet-QA datasets demonstrate the superior performance of our proposed method compared with the current SOTAs, meanwhile, visualization analysis further verifies the effectiveness of incorporating temporal information to videos.