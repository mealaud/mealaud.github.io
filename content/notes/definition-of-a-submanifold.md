---
title: "Definition of a Submanifold"
date: 2023-08-25T17:41:59-07:00
draft: false
math: true
tags: 
categories: 
rootPage: false
---


{{% MathEnv "ndefn" %}}

Let $ m \leq n $ be positive integers and $ (N^n, \widehat{\mathcal{A}}_N) $ be a {{<ref "$ C^r $-manifold" "/notes/definition-of-a-differentiable-manifold">}}. A subset $ M $ of $ N $ is said to be a {{% tdf "submanifold" %}} of $ N $ if for each point $ p \in M $ there exists a local chart $ (U_p,x_p) \in \widehat{\mathcal{ A}}_N $  such that $ p \in U_p $ and $ x_p \colon U_p \subseteq N \to \mathbb{R}^m \times \mathbb{R}^{n-m} $ satisfies 
$$
    x_p(U_p \cap M) = x_p (U_p) \cap (\mathbb{R}^m \times \left \\{ 0 \right \\} ).
$$
The natural number $ (n-m) $ is called the {{% tdf "codimension" %}} of $ M $ in $ N $.
{{% /MathEnv %}}




---
---
## References & Related Readings
- [An Introduction to Riemannian Geometry](https://www.maths.lth.se/matematiklu/personal/sigma/Riemann.pdf) pg.11 by Sigmundur Gudmundsson.
