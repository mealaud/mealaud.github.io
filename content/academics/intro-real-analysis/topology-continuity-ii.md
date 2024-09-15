---
title: "Topology & Continuity II (Continuous functions)"
date: 2024-09-15T00:08:48-04:00
draft: true
type:
layout:
summary: "Never lifting your pen, mathematically!"
---

I first learning about continuous functions in high school (I think) as "being able to draw the graph of the function without lifting your pen".
This is not rigorous of course, but it does give some helpful intuition and brings up some good questions:
1. What are the different types of discontinuities?
2. How do we encode jumps (or the lack thereof)?
3. How many discontinuities can we have?
4. How do we deal with little blips or very brief, single-point spikes in value?

Let's explore this a bit.

## Developing the definition


### What things SHOULDN'T be continuous?

There are some clear candidates for discontinuities.

The aforementioned jump and blip discontinuities are great choices.

{{% svg-figure "https://raw.githubusercontent.com/mealaud/mealaud.github.io/main/static/svgs/jump-discontinuity.svg" "90%" %}}
A jump discontinuity at a point $ c $ in a function $ f $.
{{%  /svg-figure %}}

{{% svg-figure "https://raw.githubusercontent.com/mealaud/mealaud.github.io/main/static/svgs/blip-discontinuity.svg" "90%" %}}
A single-point blip discontinuity at a point $ c $ in a function $ f $.
{{%  /svg-figure %}}

But how many of these little jumps can we have?
Can we be _discontinuous everywhere_?
Can we be discontinuous _every but a single point_?
It turns out the answers are: it depends; yes; and yes.
We'll talk about this more in due time, but for now we know what stuff _shouldn't_ be continuous.
Let's try developing a definition of continuity.


### What things should be continuous?

Looking back at our examples, we see that there is a never an issue with the domain (read: our inputs/$ x $-axis).
The only issue happens with our codomain (read: our outputs/$ y $-axis.)
So it seems that to ensure continuity, we need to restrict how much the function can move up and down.
{{%nl%}}{{%nl%}}

Preliminarily, consider the following diagram for a continuous (in the sense of the pen-lifting) function $ f $, where $ \varepsilon > 0 $ and $ \delta > 0 $ are small values satisfying our little picture.

{{% svg-figure "https://raw.githubusercontent.com/mealaud/mealaud.github.io/7dde523b1f0e5ee4ac54b5b6f3863827534e50f4/static/svgs/continuity-in-reals.svg" "90%" %}}
A diagram of constraints on vertical and associated horizontal movements for continuity.
{{%  /svg-figure %}}

The interesting thing is is that we can make $ \varepsilon $ as small as we want (and still have a satisfying $ x $-axis interval). 
If we had a jump like before, there would be a point where interval on the $ y $-axis would not include the jump itself.
If we had a little blip the same thing can happen.
But because we can make our $ \varepsilon  $ arbitrarily small with a corresponding $ \delta $ existing, we are _continuous_.

### The definition 

Let's phrase this a little bit more rigorously. Given two metric spaces $ (X,d_X), (Y,d_Y) $, a function $ f \colon X \to Y $ is {{% tdf "continuous at a point" %}}  $ c \in X $ if for every $ \varepsilon > 0 $ there exist some $ \delta > 0 $ (possibly dependent on $ c $ and $ \varepsilon $) such that $ d_Y(f(x)-f(c))<\varepsilon $ whenever $ d_X(x,c) < \delta $.

We then say a function $ f \colon X \to Y $ is {{% tdf "continuous" %}}  if it is continuous at every point in its domain.
