---
title: "Differentiability on a Manifold"
date: 2023-08-25T21:32:35-07:00
draft: false
math: true
tags: 
categories: 
rootPage: false
---

{{% MathEnv "ndefn" %}}

Let $ (M^m, \widehat{\mathcal{A}}_M) $ and $ (N^n, \widehat{\mathcal{A}}_N) $ be {{<ref "$ C^r $-manifolds" "/notes/definition-of-a-differentiable-manifold">}}. A map $ \phi \colon M \to N $ is said to be {{% tdf "differentiable of class $ C^r $ at a point" %}} $ p \in M $ if there exist local charts $ (U,x) \in \widehat{\mathcal{A}}_M $ around $ p $ and $ (V,y) \in \widehat{\mathcal{A}}_N $ around $ q = \phi(p) $ such that the map 
$$
    y \circ \phi \circ x^{-1} |_A \colon A \subseteq\mathbb{R}^m \to \mathbb{R}^n,
$$
with $ A \coloneqq x(U \cap \phi^{-1}(V)) $, is of class $ C^r $. The map $ \phi $ is said to be {{% tdf "differentiable" %}} if it is differentiable at every point $ p \in M $.
{{% /MathEnv %}}





---
---
## References & Related Readings
- [An Introduction to Riemannian Geometry](https://www.maths.lth.se/matematiklu/personal/sigma/Riemann.pdf) pg.15 by Sigmundur Gudmundsson.
