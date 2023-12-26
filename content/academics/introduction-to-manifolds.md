---
title: "Introduction to Manifolds"
date: 2023-08-31T15:58:48-07:00
draft: false
math: true
tags: 
categories: 
rootPage: true
---



{{% MathEnv "ndefn" %}}

Let $ (M, \mathcal{T}) $ be a topological Hausdorff space with a countable basis). Then $ M $ is called a {{% tdf "topological manifold" %}}  if there exists an $ m \in \mathbb{Z}^+ $ such that for each point $ p \in M $ we have an open neighborhood $ U $ of $ p $, an open subset $ V $ of $ \mathbb{R}^m $ and a homeomorphism $ x \colon U \to V $. The pair $ (U,x) $ is called a {{% tdf "local chart" %}} (or {{% tdf "local coordinates" %}}) on $ M $. The integer $ m $ is called the {{% tdf "dimension of $ M $" %}}. To denote that the dimension of $ M $ is $ m $ we write $ M^m $.
{{% /MathEnv %}}

From this definition, pay close attention to the definition of the so called _local charts_. These objects let us map our possibly weird topological space into the very familiar _Euclidean space_, point by point. We put this into a graphic for emphasis:

{{% MathEnv "up" %}}

Topological manifolds are locally Euclidean. 
{{% /MathEnv %}}

But why is this important? Our above observation allows us to do some calculus on our space (since we know how to do calculus in Euclidean space). To this end, recall from {{<ref "the moral of differentiation" "/notes/the-moral-of-differentiation">}} that differentiation is a local property: the only thing that matters to differentiation is a small neighborhood around your chosen point. Combining this with morals our boxed observation, we get to the pleasant conclusion that 

{{% MathEnv "up" %}}

You can do calculus on manifolds.
{{% /MathEnv %}}

We'll get how to exactly do this new calculus, but at the least we now (or soon will) have the tools of calculus at our disposal. :D

---
---
## References & Related Readings
- [An Introduction to Riemannian Geometry](https://www.maths.lth.se/matematiklu/personal/sigma/Riemann.pdf) by Sigmundur Gudmundsson.
- My dad.
