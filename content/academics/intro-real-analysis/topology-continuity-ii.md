---
title: "Topology & Continuity II (Continuous functions)"
date: 2024-09-15T00:08:48-04:00
draft: false
type:
layout:
summary: "A study of pen-lifting, or the lack thereof."
---

I first learned about continuous functions in high school (I think) as "being able to draw the graph of the function without lifting your pen".
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
Can we be discontinuous _everywhere but a single point_?
It turns out the answers are: it depends; yes; and yes.
We'll talk about this more in due time, but for now we know what stuff _shouldn't_ be continuous.
Let's try developing a definition of continuity.


### What things SHOULD be continuous?

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
{{%nl%}}{{%nl%}}

But what does $ \delta $ depend on? 
Obviously it depends on $ \varepsilon $, but does it depend on the point? 
In this case, yes!
Looking at our function, the left-most hump is much steeper coming down than around the point $ c $.
Hence, for the same $ \varepsilon $, we have different values of $ \delta $ depending on where we are.
{{%nl%}}{{%nl%}}

This dependence on $ \varepsilon,c $ are usually omitted when writing $ \delta $ (i.e., we don't usually write $ \delta(\varepsilon,c) $), but it is important to keep in mind.
We'll cover examples of when the point doesn't matter soon. :)

### The definition 

Let's phrase this a little bit more rigorously. Given two metric spaces $ (X,d_X), (Y,d_Y) $, a function $ f \colon X \to Y $ is {{% tdf "continuous at a point" %}}  $ c \in X $ if for every $ \varepsilon > 0 $ there exist some $ \delta > 0 $ (possibly dependent on $ c $ and $ \varepsilon $) such that $ d_Y(f(x)-f(c))<\varepsilon $ whenever $ d_X(x,c) < \delta $.
{{%nl%}}{{%nl%}}

We then say a function $ f \colon X \to Y $ is {{% tdf "continuous" %}}  if it is continuous at every point in its domain.
{{%nl%}}{{%nl%}}

Are there any alternate definitions, however? 
Yes! 
And some are (on occasion) more useful than others.

## Equivalent definitions of continuity

Let $ (X,d_X) $ and $ (Y,d_Y) $ be metric spaces and $ f \colon X \to Y $.

### Open ball definition

{{% MathEnv "thm" %}}
The function $ f $ is continuous at $ c \in X $ if and only if for all $ \varepsilon > 0 $, there exists some $ \delta > 0 $ such that 
$$\begin{equation}
    B_X(c, \delta) \subseteq f^{-1}\left [ B_Y(f(c),\varepsilon) \right ] 
\end{equation}$$
where $ B_X $ and $ B_Y $ are balls in $ X $ and $ Y $, respectively.
{{% /MathEnv %}}
This equivalent formulation is important, but not as interesting.

{{% Proof %}}
($\Rightarrow$) 
Let $ \varepsilon > 0 $. 
Suppose that $ f $ is continuous at $ c $. 
Then there exists $ \delta > 0 $ such that $ d_Y(f(x),f(c)) < \varepsilon $ whenever $ d_X(x,c) < \delta $.
In other words, 
$$\begin{equation}
    x \in B_X(c,\delta) \implies f(x) \in B_Y(f(c),\varepsilon)
\end{equation}$$
Notice that this is precisely the definition of 
$$\begin{equation}
    B_X( c, \delta) \subseteq f^{-1}[B_Y(f(c),\varepsilon)].
\end{equation}$$

($\Leftarrow$)
Let $ \varepsilon > 0 $.
Suppose that then there exists some $ \delta > 0 $ such that 
$$\begin{equation}
    B_X( c, \delta) \subseteq f^{-1}[B_Y(f(c),\varepsilon)].
\end{equation}$$
Hence, $ x \in B_X(c,\delta) $ so that $ f(x) \in B_Y(f(c),\varepsilon) $.
Thus 
$$\begin{equation}
    d_X(x,c) < \delta \implies d_Y(f(x),f(c)) < \varepsilon
\end{equation}$$
as desired.
{{% /Proof %}}

### Sequential definition
This equivalent definition is actually very helpful to know. 

{{% MathEnv "thm" %}}
The function $ f $ is continuous at $ c \in X $ if and only if for all sequences $ (x_n) $ converging to $ c $:
$$\begin{equation}
   \lim_{n\to\infty} f(x_n) = f (c).
\end{equation}$$
{{% /MathEnv %}}
{{% Proof %}}
($\Rightarrow$) 
Suppose that $ f $ is continuous at $ c $.
Further suppose that $ (x_n) $ is a sequence converging to $ c $. 
Fix $ \varepsilon > 0 $. 
Then there exists some $ \delta > 0 $ such that any $ x \in X $ satisfying $ d(x,c) < \delta $ further satisfies $ d(f(x),f(c)) < \varepsilon $.
By $ (x_n) $'s convergence, there exists some $ N $ such that $ n \geq N $ implies that $ d(x_n,c) < \delta $.
Then taking $ n \geq N $, we have that
$$\begin{equation}
    d(f(x_n),f(c)) < \varepsilon.
\end{equation}$$
Thus $ f(x_n) \to f(c) $ as desired.
{{%nl%}}{{%nl%}}

($\Leftarrow$)
Suppose towards the contraposition that $ f $ is not continuous at $ c $.
Then there exists some $ \varepsilon > 0 $ such that for all $ \delta > 0 $, there is some $ x \in B(c,\delta) $ such that $ d(f(x), f(c)) \geq \varepsilon $.
{{%nl%}}{{%nl%}}

Now for each $ n $, choose some $ x_n \in B(c,n^{-1}) $ such that $ d(f(x_n),f(c)) \geq \varepsilon $.
Clearly, $ x_n \to c $, and, by construction, $ f(x_n) \not \to f(c) $.
{{% /Proof %}}






