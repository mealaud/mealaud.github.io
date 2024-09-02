---
title: "Topological Spaces I (Overview)"
date: 2024-09-02T13:46:56-04:00
draft: true
type:
layout:
summary: "A tour of some basic ideas in topology."
---

Topology, intuitively speaking, is "geometry made flexible; geometry without rigid notions of distance" (per Professor Philip Tosteson). 
But, in the strongest terms possible (with which I can respectfully disagree with my Professor Tosteson), this is reductive.
Topological spaces are, in my eyes, not domain specific.
I firmly believe that **topology is one of the strongest, most general ideas in all of mathematics and can serve to unify the most disparate of notions.**
{{%nl%}}{{%nl%}}

The structure of a topology (which will soon be described) is so basic and simple that it is applicable nearly everywhere: from analysis, manifold theory, computability, model theory, algebraic geometry, etc. 
**Topologies are present in every context in which mathematics is done.**
{{%nl%}}{{%nl%}}

Now let's get to actually learning topology. 


## Motivation: continuity in Euclidean space

A central idea in topology is that of _continuity_.
Vaguely speaking, topology is a generalization of the properties of continuity over $ \mathbb{R} $ and other familiar spaces, to a more general context.[^continuity later]
{{%nl%}}{{%nl%}}

(For simplicity, we will only consider $ \mathbb{R} $.)
Recall the definition of continuity on $ \mathbb{R} $ from analysis.
A function $ f \colon \mathbb{R} \to \mathbb{R} $ is continuous at a point $ c \in \mathbb{R} $ if for all $ \varepsilon > 0 $, there exists some $ \delta > 0 $ such that if $ x \in (c-\delta, c+\delta) $, then $ |f(x)-f(c)| < \varepsilon $. 
Here's a diagram.
{{% svg-figure "https://raw.githubusercontent.com/mealaud/mealaud.github.io/7dde523b1f0e5ee4ac54b5b6f3863827534e50f4/static/svgs/continuity-in-reals.svg" "90%" %}}
{{%  /svg-figure %}}

In other words, if we take some open interval around $ f(c) $ in the codomain, we get an open interval around $ c $ in the domain.
In other other words, $ f $ is continuous if for all $ \varepsilon > 0 $, there exists some $ \delta > 0 $ such that[^i know i know]
$$\begin{equation}
    f^{-1}[(f(c) - \varepsilon, f(c) + \varepsilon)] \subseteq (c-\delta, c+\delta).
\end{equation}$$

We now have something interesting happening: can we characterize the continuity of functions using open intervals? 
Indeed, we can! 
So let's start studying open intervals or, in general, open sets.
Open sets are the objects which can bear witness to a function's openness. 
{{%nl%}}{{%nl%}}

If open sets are to behave like open intervals (at least roughly speaking), then we have some basic, nice properties we can work with. 
For whatever an open set is, it should...
1. have the entire set be open (e.g., $ \mathbb{R} = (-\infty,\infty) $ is open)
2. the union of open sets is an open set (e.g., $\bigcup_{n=1}^{\infty} (-n,n) = \mathbb{R} $ is open)
3. the finite intersection of open sets is open (e.g., $ (0,2) \cap (-1,1) = (0,1) $ is open)

Why did I specify the finite intersection though? 
Well, if we inform our intuition from intervals, we can make closed intervals using open intervals... if we intersect them!
The intersection 
$$\begin{equation}
   \bigcap_{n=1}^{\infty}\left ( \frac{ 1 }{ n }, 1 + \frac{ 1 }{ n } \right ) = [0,1]
\end{equation}$$
is a witness of this fact.
{{%nl%}}{{%nl%}}

I think we're ready to abstract now.


## Topological spaces and examples thereof

A {{% tdf "topological space" %}} is a set $ X $ together with a collection $ \mathcal{T} $ of subsets of $ X $ such that 
1. $ \varnothing, X \in \mathcal{T} $
2. A union of elements of $ \mathcal{T} $ is in $ \mathcal{T} $
3. A finite intersection of elements of $ \mathcal{T} $ is in $ \mathcal{T} $

[^continuity later]: We'll talk more about continuity later. We're just using it for motivation for now.

[^i know i know]: If you actually take the preimage of that interval in our graph, we get several open intervals (one where we specified and one more to the left). Just work with me on this... 
