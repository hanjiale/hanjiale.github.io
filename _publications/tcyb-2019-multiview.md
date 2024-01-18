---
title: "Multiview Clustering by Joint Latent Representation and Similarity Learning"
collection: publications
permalink: /publication/tcyb-2019-multiview
excerpt: 'Deyan Xie, Xiangdong Zhang, Quanxue Gao, **Jiale Han**, Song Xiao, and Xinbo Gao.'
date: 2019-06-26
venue: 'IEEE Transactions on Cybernetics'
---
Deyan Xie, Xiangdong Zhang, Quanxue Gao, **Jiale Han**, Song Xiao, and Xinbo Gao.

[pdf](https://ieeexplore.ieee.org/document/8746824)


Subspace learning-based multiview clustering has achieved impressive experimental results. However, the similarity matrix, which is learned by most existing methods, cannot well characterize both the intrinsic geometric structure of data and the neighbor relationship between data. To consider the fact that original data space does not well characterize the intrinsic geometric structure, we learn the latent representation of data, which is shared by different views, from the latent subspace rather than the original data space by linear transformation. Thus, the learned latent representation has a low-rank structure without solving the nuclear-norm. This reduces the computational complexity. Then, the similarity matrix is adaptively learned from the learned latent representation by manifold learning which well characterizes the local intrinsic geometric structure and neighbor relationship between data. Finally, we integrate clustering, manifold learning, and latent representation into a unified framework and develop a novel subspace learning-based multiview clustering method. Extensive experiments on benchmark datasets demonstrate the superiority of our method.