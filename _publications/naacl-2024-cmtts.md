---
title: "CM-TTS: Enhancing Real Time Text-to-Speech Synthesis Efficiency through Weighted Samplers and Consistency Models"
collection: publications
permalink: /publication/naacl-2024-cmtts
excerpt: 'Xiang Li, Fan Bu, Ambuj Mehrish, Yingting Li, **Jiale Han**, Bo Cheng, Soujanya Poria.'
date: 2024-03-31
venue: 'Findings of the Association for Computational Linguistics (NAACL Findings)'
---
Xiang Li, Fan Bu, Ambuj Mehrish, Yingting Li, **Jiale Han**, Bo Cheng, Soujanya Poria.

[Paper](https://arxiv.org/abs/2404.00569)
[Project](https://github.com/XiangLi2022/CM-TTS)

Neural Text-to-Speech (TTS) systems find broad applications in voice assistants, e-learning, and audiobook creation. The pursuit of modern models, like Diffusion Models (DMs), holds promise for achieving high-fidelity, real-time speech synthesis. Yet, the efficiency of multi-step sampling in Diffusion Models presents challenges. Efforts have been made to integrate GANs with DMs, speeding up inference by approximating denoising distributions, but this introduces issues with model convergence due to adversarial training. To overcome this, we introduce CM-TTS, a novel architecture grounded in consistency models (CMs). Drawing inspiration from continuous-time diffusion models, CM-TTS achieves top-quality speech synthesis in fewer steps without adversarial training or pre-trained model dependencies. We further design weighted samplers to incorporate different sampling positions into model training with dynamic probabilities, ensuring unbiased learning throughout the entire training process. We present a real-time mel-spectrogram generation consistency model, validated through comprehensive evaluations. Experimental results underscore CM-TTS's superiority over existing single-step speech synthesis systems, representing a significant advancement in the field.