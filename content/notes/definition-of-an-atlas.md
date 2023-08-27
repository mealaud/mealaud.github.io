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

Roughly speaking, a $ C^r $-atlas is a collection of (local) charts such that when a chart's transition map is composed with another chart's inverse of its transition map, we get a $ C^r $ map from $ \mathbb{R}^m \to \mathbb{R}^m $.{{%nl%}}{{%nl%}}

I suppose more philosophically speaking (if that's even the right way to describe this thought), manifolds are important because we want to be able to generalize calculus (at least this is my current understanding). Indeed, to this end, we would want to be able to work in Euclidean space so if we leverage the domains/codomains of our maps, we can treat functions that relate the manifold to Euclidean space as maps to and from Euclidean space itself.{{%nl%}}{{%nl%}}

I suppose (once more, haha) this is where we begin being an able to utilize the ideas of differentiability of maps on manifolds. Indeed, consider the following:
{{% MathEnv "ex" %}}

Suppose $ (M, \mathcal{A}_M) $ and $ (N, \mathcal{A}_N) $ are $ m $- and $ n $-dimensional {{<ref "topological manifolds" "/notes/definition-of-a-topological-manifold">}} where $ \mathcal{A}_M $ and $ \mathcal{A}_N $ are both $ C^r $-atlases. {{%nl%}}{{%nl%}}

Then suppose we have a map $ \psi \colon M \to N $ and a point $ p \in M $. Then we could say $ \psi $ is differentiable at $ p $ if there are charts $ (U, x) \in \mathcal{A}_M $ at $ p $ and $ (V,y) \in \mathcal{A}_N $ at $ q \coloneqq \psi(p) $ such that 
$$
    y \circ \psi \circ x^{-1} \colon x(U \cap x^{-1}(V)) \subseteq \mathbb{R}^m \to \mathbb{R}^n
$$
are $ r $ times continuously differentiable (in $ C^r $). In essence, in the above expression: 
{{% svg-figure "g6397.svg" "35%" %}}{{% /svg-figure %}}
which makes the idea that we are really studying the a corresponding function in Euclidean space much clearer to me.
{{% /MathEnv %}}



---
---
## References & Related Readings
- [An Introduction to Riemannian Geometry](https://www.maths.lth.se/matematiklu/personal/sigma/Riemann.pdf) pg.8 by Sigmundur Gudmundsson.
- {{<ref "Pre Requisite Definitions for Differentiable Manifolds" "/notes/pre-requisite-definitions-for-differentiable-manifolds">}}
