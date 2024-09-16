---
title: "Metric Spaces and Sequences I (Overview)"
date: 2024-08-31T15:38:34-04:00
draft: false
type:
layout:
summary: "A guided tour and introduction to metric spaces in real analysis."
---

Metric spaces, are in essence, the realm of analysis (in my experience).
Analysis (or as I have heard from those my senior, "applied triangle inequality") relies on notions of distance and, in particular, arbitrarily precise approximations. (e.g., the $ \varepsilon $-$ \delta $ arguments that you might have seen previously.)

## Metric spaces and examples thereof

Consider three different locations A, B, C in our world. 
Experience tells us that 
1. To get from point A to point A should be $ 0 $ since we don't have to move at all.
2. The distance from point A to point B should be the same as the distance from point B to point A.
3. Walking from A to B to C takes longer than walking from A to C directly.

From this, we get three basic rules that any "sensible" sense of distance should follow: if $ X $ is a space (read: set), a distance function $ d \colon X \times X \to \mathbb{R^{\geq 0}} $ satisfies for all $ x,y,z \in X $:
1. $ d(x,x) = 0 $,
2. $ d(x,y) = d(y,x) $, and 
3. $ d(x,y) + d(y,z) \geq d(x,z) $. 

Any function satisfying this description is henceforth known as a {{% tdf "metric" %}} on $ X $.

{{% MathEnv "rem" %}}
Note that $ \mathbb{R}^{\geq 0} $ is just the set of nonnegative reals or just $ \left \\{ x \in \mathbb{R} : x \geq 0 \right \\} $.
{{% /MathEnv %}}

Here are many examples of metric spaces:
1. $ X = \mathbb{R} $ and $ d(x,y) = |x-y| $
2. $ X = \mathbb{R}^n $ and $ d(x,y) = [\sum_{i=1}^{n} (x_i-y_i)^2]^{1/2} $
3. $ X = \mathbb{R}^n $ and $ d(x,y) =\sum_{i=1}^{n} |x_i-y_i| $
4. $ X = \mathbb{R}^n $ and $ d(x,y) = \sup_{i=1}^n |x_i-y_i| $

Notice that we can have _different_ metrics on the same underlying set. 
Neat!
But now we have a few slightly more exotic examples:

5. $ X = C([0,1], \mathbb{R}) \coloneqq \left \\{ f \colon [0,1] \to \mathbb{R} \mid f \text{ continuous} \right \\} $ and $ d(f,g) = \sup_{x \in [0,1]} |f(x)-g(x)| $
6. If $ (X,d) $ is a metric space and $ F \subseteq X $, then $ (F,d) $ is a metric space
7. Let $ X $ be any set and take 
$$\begin{equation}
    d(x,y) = 
    \begin{cases}
    1 \quad & x \neq y\\\\\
    0 \quad & x = y
    \end{cases}
\end{equation}$$

## Sequences

We now delve into the one of the most fundamental objects of study in analysis: _the sequence_. 
{{%nl%}}{{%nl%}}

A sequence is a list of elements from a set (like numbers from $ \mathbb{R} $) indexed by the positive integers $ \mathbb{Z}^+ $.[^indexing of sequences] 
{{%nl%}}{{%nl%}}

To put say this more precisely, given a set $ X $, a {{% tdf "sequence" %}} is a function $ p \colon \mathbb{Z}^+ \to X $. 
We also often denote $ p(n) $ by $ p_n $ for simplicity, and we write $ (p_n) $, $ (p\_n)\_n $, $ (p_n)_{n=1}^\infty $ for the sequence itself.


{{% MathEnv "rem" %}}
Also, please note that sequences are therefore _infinite_ in length. 
ooppp
If you need a finite list of things though, just be explicit (by saying "finite sequence" or something like that).
{{% /MathEnv %}}

We also have an object called the _subsequence_, literally a sequence from within a sequence. 
A {{% tdf "subsequence" %}} of a sequence $ (p_n) $ is sequence $ (q_m) $ defined by $ q_m = p_{\iota(m)} $ where $ \iota \colon \mathbb{Z}^+ \to \mathbb{Z}^+ $ is a function such that $ \iota(1) < \iota(2) < \iota(3) < \cdots $.
We often refer to $ \iota(m) $ as $ n_m $.
A shorthand for a subsequence is then $ (p_{n_m})_m $.
{{%nl%}}{{%nl%}}

From our definition of subsequence, we have an immediate consequence: for all $ m \in \mathbb{Z}^+ $, $ \iota(m) = n_m \geq m $.




### An understanding of long term behavior

The power of sequences is not necessarily in simply what occupies your list; it is moreso in its ability to represent the long term behavior of an object.
{{%nl%}}{{%nl%}}

In particular, these infinitely-long lists can approach or _converge_ to something. 
There's obviously very simple cases like the sequence $ p_n = 0 $ for all $ n $, but so much can be studied in this paradigm.
However, things can also _not converge_, like $ p_n = (-1)^n $ or $ p_n = n $. 
{{%nl%}}{{%nl%}}

From this idea of long term behavior, two big ideas fall out: _convergence_ (approaching a single point, or none) and _Cauchy-ness_ (how close the terms get to one another). 
{{%nl%}}{{%nl%}}

We now define both of these a bit more rigorously. 
Given a metric space $ (X,d) $, we say a sequence $ (p_n) $ in $ X $ {{% tdf "converges" %}} to $ p \in X $ if for all $ \varepsilon > 0 $ there exists an $ N \in \mathbb{Z}^+ $ such that $ n \geq N $ implies that $ d(p_n,p) < \varepsilon $.
In other words
$$\begin{equation}
    (\forall \varepsilon > 0)(\exists N \in \mathbb{Z}^+)[n \geq N \implies d(p_n,p) < \varepsilon ].
\end{equation}$$
We denote this by $\lim_{n\to\infty} p_n = p $ or $ p_n \to p $.
{{%nl%}}{{%nl%}}

In other other words, our sequence converges to $ p $ if we can get _arbitrarily_ close to $ p $.
Now we say our sequence is {{% tdf "Cauchy" %}} if for all $ \varepsilon > 0 $ there exists $ N \in \mathbb{Z}^+ $ such that whenever $ n,m \geq N $, $ d(p_n,p_m) < \varepsilon $. 
In quite similar words as before, 
$$\begin{equation}
    (\forall \varepsilon > 0)(\exists N \in \mathbb{Z}^+)[n,m \geq N \implies d(p_n,p_m) < \varepsilon].
\end{equation}$$
In other other quite similar words as before, our sequence is Cauchy if the terms of the sequence get _arbitrarily_ close together.

{{% MathEnv "rem" %}}
This may seem almost redundant: if they get close together, don't they have to get to the same point? Yes! But also no.
Indeed, they do approach a point, BUT that point may not be in your space.... 
This property of having the limit of every Cauchy sequence in your space is called _completeness_ and we will talk about it later.
{{% /MathEnv %}}


### Boundedness

We first have to discuss sets being bounded. 
A set is bounded if it can be entirely contained in a ball of finite radius around some point of the space. 
Now, a sequence $ (p_n) $ is {{% tdf "bounded" %}} if the set $ \left \\{ p_n : n \in \mathbb{Z}^+ \right \\}  $ is bounded.
Symbolically, $ (p_n) $ is bounded if and only if: 
$$\begin{equation}
    (\exists q \in X)(\exists r > 0)\left [ \left \\{ p_n : n \in \mathbb{Z}^+ \right \\} \subseteq \left \\{ p \in X : d(p,q) < r \right \\}  \right ] 
\end{equation}$$



### Some results on sequences

{{% MathEnv "prop" %}}
1. If a sequence converges, its limit is unique.
2. Every convergent sequence is bounded.
3. Every Cauchy sequence is bounded.
4. Every subsequence of a convergent sequence converges to the parent sequence's limit.
5. Any convergent sequence is a Cauchy sequence.
6. Given a Cauchy sequence with a convergent subsequence, all subsequences share the same limit.
{{% /MathEnv %}}
For the following proofs, let $ (X,d) $ be a metric space with a sequence $ (p_n) $ in $ X $.
{{%nl%}}{{%nl%}}

Statement #1.
{{% Proof %}}
Suppose $ (p_n) $ converges to $ p,p^{\prime} \in X $. 
Then for all $ \varepsilon > 0 $, there exists $ N $ such that $ n \geq N $ such that $ d(p_n,p) < \varepsilon/2 $ and $ d(p_n,p^{\prime}) < \varepsilon/2 $. 
Then 
$$\begin{equation}
    d(p,p^{\prime}) \leq d(p,p_N)
\end{equation}$$
{{% /Proof %}}
{{%nl%}}

Statement #2.
{{% Proof %}}
Suppose $ p_n \to p \in X $. 
Then there exists some $ N $ such that $ d(p_n,p) < 1 $ whenever $ n \geq N $. 
Then taking 
$$\begin{equation}
    r = \max \left \\{ d(p_i,p) : 1 \leq i \leq N \right \\} \cup \left \\{  1 \right \\} 
\end{equation}$$
we get that $ d(p_i,p) < r $ for all $ i \in \mathbb{Z}^+ $.
{{% /Proof %}}
{{%nl%}}

Statement #3.
{{% Proof %}}
Suppose $ (p_n) $ is Cauchy. 
Then there exists some $ N $ such that $ n,m \geq N $ implies that 
$$\begin{equation}
    d(p_n,p_m) < 1.
\end{equation}$$
Then we can apply the same argument as with the previous statement, but center our bounding set around $ p_N $ with radius 
$$\begin{equation}
    r = \max \left \\{ d(p_i,p_N) : 1 \leq i \leq N \right \\} \cup \left \\{  1 \right \\} 
\end{equation}$$
{{% /Proof %}}
{{%nl%}}

Statement #4.
{{% Proof %}}
Suppose $ (p_{n_m}) $ is a subsequence of $ (p_n) $ and that $ p_n \to p \in X $.
Let $ \varepsilon > 0 $. 
Then there exists an $ N $ such that $ n \geq N $ implies $ d(p_n,p) < \varepsilon $. Now, taking $ m \geq N $, we get that 
$$\begin{equation}
    d(p_{n_m},p) < \varepsilon
\end{equation}$$
as $ n_m \geq m \geq N $.
{{% /Proof %}}
{{%nl%}}

Statement #5.
{{% Proof %}}
Suppose $ p_n \to p \in X $. 
Let $ \varepsilon > 0 $. 
Then there exists some $ N $ such that $ d(p_n,p) < \varepsilon/2 $ whenever $ n \geq N $. 
Then, taking $ n,m \geq N $, we get that 
$$\begin{equation}
    d(p_n,p_m) \leq d(p_n,p) + d(p,p_m) < \frac{ \varepsilon }{ 2 } + \frac{ \varepsilon }{ 2 } = \varepsilon.
\end{equation}$$
Thus $ (p_n) $ is Cauchy.
{{% /Proof %}}
{{%nl%}}

Statement #6.
{{% Proof %}}
Suppose $ (p_n) $ is a Cauchy sequence and suppose $ (p_{n_m}) $ is a subsequence of $ (p_n) $ which converges to $ p \in X $. 
Now suppose $ (p_{n_i}) $ is another subsequence. 
Then, for any $ \varepsilon > 0 $, there is some $ M $ large enough so that $ j,k,m \geq M $ implies that $ d(p_{n_m},p) < \varepsilon/2 $ and $ d(p_j,p_k) < \varepsilon/2 $.
Then taking $ i \geq M $,
$$\begin{equation}
    d(p_{n_i},p) \leq d(p_{n_i}, p_{n_M}) + d(p_{n_M}, p) < \frac{ \varepsilon }{ 2 } + \frac{ \varepsilon }{ 2 } = \varepsilon.
\end{equation}$$

{{% /Proof %}}







[^indexing of sequences]: Most people index by either $ 0 $ or $ 1 $, depending on what's convenient to them at that moment.
