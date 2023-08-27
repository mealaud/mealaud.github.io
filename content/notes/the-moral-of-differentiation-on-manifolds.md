---
title: "The Moral of Differentiation on Manifolds"
date: 2023-08-26T22:22:20-07:00
draft: false
math: true
tags: 
categories: 
rootPage: false
---


Thinking back to {{<ref "The Moral of Differentiable Manifolds" "/notes/the-moral-of-differentiable-manifolds">}}, what were we missing? The $ C^r $-structure. Basically "differentiable" transition maps (see {{<ref "Definition of a Differentiable Manifold" "/notes/definition-of-a-differentiable-manifold">}} for more details). But now, more philosophically speaking (if that's even the right way to describe this thought), we want to work in Euclidean space so we can try to leverage the domains/codomains of our maps to study maps from Euclidean space to itself. 

{{% MathEnv "ex" %}}

Suppose $ (M, \mathcal{A}_M) $ and $ (N, \mathcal{A}_N) $ are $ m $- and $ n $-dimensional {{<ref "topological manifolds" "/notes/definition-of-a-topological-manifold">}} where $ \mathcal{A}_M $ and $ \mathcal{A}_N $ are both $ C^r $-atlases. {{%nl%}}{{%nl%}}

Then suppose we have a map $ \psi \colon M \to N $ and a point $ p \in M $. Then we could say $ \psi $ is differentiable at $ p $ if there are charts $ (U, x) \in \mathcal{A}_M $ at $ p $ and $ (V,y) \in \mathcal{A}_N $ at $ q \coloneqq \psi(p) $ such that 
$$
    y \circ \psi \circ x^{-1} \colon x(U \cap x^{-1}(V)) \subseteq \mathbb{R}^m \to \mathbb{R}^n
$$
are $ r $ times continuously differentiable (in $ C^r $). Recall that the power of manifolds and differentiation comes in its locality!; so we have to restrict the domains of things to make sure we keep that locality property, because a lot of this is definitely not true for thole space! In essence, the expression is saying that our function $ \psi $ is $ r $-times differentiable on our manifold if we can study it in Euclidean space and see that it is $ r $-times differentiable in Euclidean space. So, we can leverage our transition maps in the following way:
1. use $ x^{-1} $ to get from $ \mathbb{R}^m $ to $ M $;
2. use $ y $ to get from $ N $ to $ \mathbb{R}^n $; and 
3. then compose these (in the right order, haha) to get $ \psi $ as a map from $ \mathbb{R}^m $ to $ \mathbb{R}^n $ (in a rough sense).

This is exemplified in the below diagram.
{{% svg-figure "g6397.svg" "35%" %}}{{% /svg-figure %}}
{{% /MathEnv %}}


---
---
## References & Related Readings
- See {{<ref "Differentiability on a Manifold" "/notes/differentiability-on-a-manifold">}} for the technical (or maybe less technical?) definition.
