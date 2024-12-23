---
title: "Topology & Continuity III (Connectedness)"
date: 2024-09-16T12:20:16-04:00
draft: true
type:
layout:
summary: "Study of non-separated spaces."
---

Let's motivate first.
You may or may not remember the Intermediate Value Theorem from calculus: given a continuous function $ f \colon [a,b] \to \mathbb{R} $ then for all $ f(a) \lesseqgtr y \lesseqgtr f(b) $[^weird interval notation], there is some $ c \in [a,b] $ with $ f(c) = y $. 
Note that when we understand the function to be continuous, our domain is exactly what gives us this property.
{{%nl%}}{{%nl%}}

Indeed, consider the function $ f \colon [0,1] \cup [2,3] \to \mathbb{R} $ given by $ f(x)=x $ and consider the value $ 1.5 $.
Here we attain $ f(0)=0 $ and $ f(3)=3 $ with $ 1.5 \in [0,3] $, but DO NOT attain $ 1.5 $.
Why?
{{%nl%}}{{%nl%}}

This failure comes $ [a,b] $ have no "holes" or "gaps" whereas $ [0,1] \cup [2,3] $ has a "hole" or "gap" from $ (1,2) $.
If there was no gap in our domain, we would have reached our desired value.
In this sense, we have to have a _connected_ domain. 




## OLD


Connectedness is kind of hard to define directly.
We know for sure when something is _not_ connected (or is _disconnected_) but the positive answer is not nearly as obvious.
For example, which of following are connected?
1. Is $ A \cup B $ connected?
{{% svg-figure "https://raw.githubusercontent.com/mealaud/mealaud.github.io/main/static/svgs/connected-blobs.svg" "90%" %}}
{{%  /svg-figure %}}
2. Is this curve connected?
{{% svg-figure "https://raw.githubusercontent.com/mealaud/mealaud.github.io/98245a3e3cb8aee7367faf701a3d6b3d1541795f/static/svgs/topologist-sine-curve.svg" "90%" %}}
This curve is known as the Topologist's Sine Curve. It is defined by $  (0 \times [-1,1]) \cup \left \{ (t,\sin(1/t)) : t \in (0,1] \right \}   $
{{%  /svg-figure %}}
3. Is the large blob $ A \cup B $ connected?
{{% svg-figure "https://raw.githubusercontent.com/mealaud/mealaud.github.io/main/static/svgs/disconnected-blobs.svg" "90%" %}}
{{%  /svg-figure %}}


It seems that the first is _connected_.
The second is entirely unclear (at least it was to me at first).
We know that the third example is certainly _not connected_.
{{%nl%}}{{%nl%}}

So what characterizes these?
Well, in the sense of open sets, we can see that (3) has open sets that totally separate the blobs $ A $ and $ B $.
And it seems as if we cannot do that in (1). 
(I will save (2) for later.)
{{%nl%}}{{%nl%}}

It turns out that this notion of separation can be made more rigorous with the following definition: given a set $ A $, it is {{% tdf "disconnected" %}} if there are a pair of disjoint open sets whose union is $ A $.
From here, we get that a set is {{% tdf "connected" %}} if it is _not_ disconnected.



[^weird interval notation]: This is just a shorthand for both $ f(a) \leq c \leq f(b) $ and $ f(a) \geq c \geq f(b) $. The reason I use this is because it not a priori obvious that whether $ f $ is increasing or decreasing on the interval. Just choose which one makes sense.
