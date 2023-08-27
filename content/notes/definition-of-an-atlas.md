---
title: "Definition of an Atlas"
date: 2023-08-25T16:37:55-07:00
draft: false
math: true
tags: 
categories: 
rootPage: false
---

{{% MathEnv "ndefn" %}}

Let $ M $ be an {{<ref "$ m $-dimensional" "/notes/dimension-and-homeomorphisms">}} {{<ref "topological manifold" "/notes/definition-of-a-topological-manifold">}}. Then a {{% tdf "$ C^r $-atlas" %}} on $ M $ is a collection 
$$
    \mathcal{A} = \left \\{ (U_\alpha, x_\alpha) : \alpha \in \mathcal{I} \right \\}
$$
of local charts on $ M $ such that $ \mathcal{A} $ covers the whole of $ M $. i.e., 
$$
    M = \bigcup_{\alpha}^{}U_\alpha
$$
and for all $ \alpha,\beta \in \mathcal{I} $ the corresponding {{% tdf "transition maps" %}} 
$$
    x_\beta \circ x_\alpha^{-1} |_A : A \subseteq \mathbb{R}^m \to \mathbb{R}^m,
$$

with $ A \coloneqq x_\alpha (U_\alpha \cap U_\beta) $, are $ r $-times continuously differentiable, i.e., of class $ C^r $.
{{% /MathEnv %}}

---
---
## References & Related Readings
- [An Introduction to Riemannian Geometry](https://www.maths.lth.se/matematiklu/personal/sigma/Riemann.pdf) pg.8 by Sigmundur Gudmundsson.
- {{<ref "Pre Requisite Definitions for Differentiable Manifolds" "/notes/pre-requisite-definitions-for-differentiable-manifolds">}}
