---
title: "Definition of a Topological Manifold"
date: 2023-08-25T15:14:13-07:00
draft: false
math: true
tags: 
categories: 
rootPage: false
---

{{% MathEnv "ndefn" %}}

Let $ (M, \mathcal{T}) $ be a topological Hausdorff space with a countable basis (or _second-countable_). Then $ M $ is called a {{% tdf "topological manifold" %}}  if there exists an $ m \in \mathbb{Z}^+ $ such that for each point $ p \in M $ we have an open neighborhood $ U $ of $ p $, an open subset $ V $ of $ \mathbb{R}^m $ and a homeomorphism $ x \colon U \to V $. The pair $ (U,x) $ is called a {{% tdf "local chart" %}} (or {{% tdf "local coordinates" %}}) on $ M $. The integer $ m $ is called the {{% tdf "dimension of $ M $" %}}. To denote that the dimension of $ M $ is $ m $ we write $ M^m $.
{{% /MathEnv %}}

---
---
## References & Related Readings
- [An Introduction to Riemannian Geometry](https://www.maths.lth.se/matematiklu/personal/sigma/Riemann.pdf) pg.7 by Sigmundur Gudmundsson.
- [Hausdorff spaces](https://en.wikipedia.org/wiki/Hausdorff_space) on Wikipedia.
- [Second-countable spaces](https://en.wikipedia.org/wiki/Second-countable_space) on Wikipedia.
- {{<ref "The Moral of Manifolds" "/notes/the-moral-of-manifolds">}}.


