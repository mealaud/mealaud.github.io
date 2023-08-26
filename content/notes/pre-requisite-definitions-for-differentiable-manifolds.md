---
title: "Pre Requisite Definitions for Differentiable Manifolds"
date: 2023-08-25T15:11:57-07:00
draft: false
math: true
tags: 
categories: 
rootPage: false
---

Let $ \mathbb{R}^m $ be the standard $ m $-dimensional real vector space equipped with the topology $ \mathcal{T}_m $ induced by the Euclidean metric on $ \mathbb{R}^m $. 

{{% MathEnv "ndefn" %}}

For a natural number $ r $ and an open subset $ U $ of $ \mathbb{R}^m $ we define 
$$
    C^r(U,\mathbb{R}^n) \coloneqq \left \\{ f \colon U \to \mathbb{R}^n \mid f^{(r)} \text{ exists and is continuous }\right \\}.
$$

We then define {{% tdf "smooth maps" %}} $ F \colon \to U \to \mathbb{R}^n $ to be elements of $ C^\infty(U,\mathbb{R}^n) $ where 
$$
    C^\infty(U, \mathbb{R}^n) = \bigcap_{r=0}^{\infty} C^r(U,\mathbb{R}^n).
$$
{{% /MathEnv %}}






---
---
## References & Related Readings
- [An Introduction to Riemannian Geometry](https://www.maths.lth.se/matematiklu/personal/sigma/Riemann.pdf) pg.7 by Sigmundur Gudmundsson.
