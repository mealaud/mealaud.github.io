---
title: "Metric Spaces III (Topology)"
date: 2024-09-13T14:44:27-04:00
draft: true
type:
layout:
summary: "An introduction to the topology (read: _shape_) of metric spaces."
---

A quick explanation of topology (per my Professor, Philip Tosteson) is that topology is "geometry made flexible; geometry without rigid notions of distance".
Immediately, you may be confused why this is relevant as we are considering _metric spaces_--spaces with (literally) a notion of distance.
So why are we thinking about this?
I have three reasons.
1. Topology is the overarching branch of mathematics which contains the contents of this post; we are simply studying a very special case of a topology.
2. Topology is a powerful language in which we can express mathematics. 
Sometimes, things we prove in analysis using metrics is actually a consequence of a more general topological idea or theorem. 
3. Metric spaces are a bit geometric with their distances and whatnot, but they are also quite flexible! 
We will witness this idea a bit with equivalent metrics and the idea of _homeomorphic spaces_ (essentially, when two spaces "look the same").


## The foundation of topology: open sets

Open sets are going to be the basis of how we understand the "shape" of our space. 
Indeed, all other topological/geometric/shape-seeming properties will be (in some form) encoded by these objects.
{{%nl%}}{{%nl%}}


### Balls and their relation to openness

Though open sets are a very powerful idea, they are not too complicated (in definition)! 
{{%nl%}}{{%nl%}}

First, we need a preliminary definition.
Indeed: in a metric space $ (X,d) $, the {{% tdf "open ball" %}} around a point $ p \in X $ of radius $ r \in \mathbb{R}^+ $ is defined to be the set $ \left \\{ x \in X : d(p,x) < r \right \\}  $ and is denoted $ B(p,r) $.
{{%nl%}}{{%nl%}}

Now, an {{% tdf "open set" %}} $ U \subseteq X $ is a set such that for all $ p \in U $, there exists an open ball around $ p $ that is completely contained in $ U $. 
In other words, $ U $ is open if for all $ p \in U $, there exists $ r_p > 0 $ such that $ B(p,r_p) \subseteq U $.[^radius is dependent on the point]
{{%nl%}}{{%nl%}}

Now you might be thinking: is an _open ball_ open? 
It is! 
If you want to prove it on your own, remember that pictures, although not proofs, are helpful for intuition and for developing your argument.

{{% MathEnv "prop" %}}
In a metric space $ (X,d) $, every open ball is open.
{{% /MathEnv %}}

{{% Hint %}}
Suppose we are working with $ B(p,r) $ for $ p \in X $ and $ r > 0 $. 
Consider some point $ q \in B(p,r) $. 
What radius $ s $ would fit the ball $ B(q,s) $ in the original ball $ B(p,r) $? (cf. the diagram below)
{{% svg-figure "https://raw.githubusercontent.com/mealaud/mealaud.github.io/main/static/svgs/open-ball-is-open.svg" "90%" %}}
{{%  /svg-figure %}}
{{% /Hint %}}

{{% Proof %}}
Suppose $ p \in X $, $ r > 0 $ and consider $ B(p,r) $. 
To show that $ B(p,r) $ is open, it suffices to show that for any point $ q \in B(p,r) $ there exists some $ s > 0 $ such that $ B(q,s) \subseteq B(p,r) $. 
{{%nl%}}{{%nl%}}

To this end, consider 
$$\begin{equation}
    s = r-d(p,q)
\end{equation}$$
Now consider some point $ \ell \in B(q,s) $:
Using the triangle inequality, we get that
$$\begin{equation}
    d(\ell,p) \leq d(\ell,q) + d(q,p) < s + d(q,p) = r - d(p,q) + d(q,p) = r.
\end{equation}$$
Thus $ d(\ell,p) < r $ and $ \ell \in B(p,r) $.
Thus $ B(q,s) \subseteq B(p,r) $ and $ B(p,r) $ is open.
{{% /Proof %}}

Now we can freely discuss open sets.

### Properties and examples of open sets

We immediately state some neat properties of open sets.

{{% MathEnv "prop" %}}
In a metric space $ (X,d) $:
1. $ X $ and $ \varnothing $ are open.
2. Finite intersection of open sets are open.
3. Arbitrary unions of open sets are open.
{{% /MathEnv %}}
Statement #1
{{% Proof %}}
Vacuously, $ \varnothing $ is open as it contains no points.
Moreover, $ X $ is open as any open ball $ B(p,r) $ for $ p \in X $, $ r > 0 $ is, by definition, contained in $ X $.
{{% /Proof %}}

Statement #2.
{{% Proof %}}
Suppose $ U_1,\ldots,U_n $ are a collection of open subsets of $ X $.
Then consider $\bigcap_{i=1}^{n}U_i $.
If $ p \in U_i $, there exists some radius $ r_i > 0 $ such that $ B(p,r_i) \subseteq U_i $. 
Then, for each $ p $, we can define an $ r_p $ by taking the minimum of the $ r_i $. 
(This minimum is still positive as we are taking the minimum of a finite set.)
Hence, for each $ p \in\bigcap_{i=1}^{n} U_i $, $ B(p,r_p) \subseteq\bigcap_{i=1}^{n}U_i $ and their intersection is open.
{{% /Proof %}}

Statement #3.
{{% Proof %}}
Suppose $ \left \\{ U_\alpha \right \\}_{\alpha \in A} $ is a collection of open sets (where $ A $ is some indexing set).
Then suppose $ p \in\bigcup_{\alpha \in A}^{}U_\alpha $. 
Then, by definition of union, there exists some $ \beta \in A $ such that $ p \in U_\beta $. 
Thus there exists a radius $ r > 0 $ such that $ B(p,r) \subseteq U_\beta $.
Hence $ B(p,r) \subseteq\bigcup_{\alpha \in A}^{} U_\alpha $ as desired.
{{% /Proof %}}

{{%nl%}}
One thing worth noting is that I didn't say "arbitrary intersections of open sets are open".
I didn't say it, because, well, it's not true!; but that's not particularly helpful... 
If we consider a metric space $ \mathbb{R} $, $\bigcap_{n=1}^{\infty}(-n^{-1}, n^{-1}) = \left \\{ 0 \right \\} $ which is not open even though $ (-n^{-1},n^{-1}) $ is open for all $ n $.


### Open balls and convergence of sequences

We learned in the last post that a sequence $ (p_n) $ converges to $ p $ if for all $ \varepsilon > 0 $ there exists $ N $ such that $ d(p,p_n) < \varepsilon $ if $ n \geq N $.
But, since we know about open balls now, we can rephrase this definition using open balls! 
We put this as a proposition (which I will not prove).
{{% MathEnv "prop" %}}
Let $ (X,d) $ be a metric space and let $ (p_n) \subseteq X $ and $ p \in X $.
Then: $ p_n \to p $ if and only if for all $ \varepsilon > 0 $ there exists $ N $ such that $ p_n \in B(p,\varepsilon) $ whenever $ n \geq N $.
{{% /MathEnv %}}




### Closed sets and their relation to openness

We say a set $ C \subseteq X $ is {{% tdf "closed" %}} if: if $ (p_n) \subseteq C $ is a sequence converging to $ p \in X $, then $ p \in C $.
How does this relate to openness however? 
Well, with the definition of openness in mind, we can show that $ C $ is closed if and only if $ X \setminus C $ is _open_! 
We state this as a result and leave an associated proof.
{{% MathEnv "prop" %}}
In a metric space $ (X,d) $, $ C \subseteq X $ is closed if and only if $ X \setminus C $ is open.
{{% /MathEnv %}}
{{% Proof %}}
($\Rightarrow$)
Suppose towards the contraposition that $ X \setminus C $ is not open.
Then there exists an element $ p \in X \setminus C $ such that for all $ \varepsilon > 0 $, there $ B(p,\varepsilon) \cap C \neq \varnothing $. 
(i.e., $ B(p,\varepsilon) $ is not entirely contained in $ X \setminus C $.)
Using this we can now define a sequence $ (p_n) $. 
For each $ n \in \mathbb{Z}^+ $, define $ p_n $ to be a point contained in $ B(p,1/n) \cap C $. 
Then, by our alternate definition of convergence using open balls, we have that $ (p_n) \subseteq C $ and $ p_n \to p $. 
However, $ p \not \in C $ by hypothesis. 
Thus $ C $ is not closed.

{{%nl%}}{{%nl%}}
($\Leftarrow$)
Suppose towards the contraposition that $ C $ is not closed. 
Then there is a sequence $ (q_n) \subseteq C $ such that $ q_n \to q \not \in C $ (i.e., $ q \in X \setminus C $).
Then for all $ \varepsilon > 0 $, there is some $ n_\varepsilon $ such that $ q_{n_\varepsilon} \in B(q,\varepsilon) $. 
Thus $ B(q,\varepsilon) \not \subseteq X \setminus C $ for any $ \varepsilon > 0 $ and $ X \setminus C $ is not open.
{{% /Proof %}}

Then recalling our properties of open sets and using our above proposition, we get the following:
{{% MathEnv "prop" %}}
In a metric space $ (X,d) $: 
1. $ X $ and $ \varnothing $ are closed.
2. Finite unions of closed sets are closed.
3. Arbitrary intersections of closed sets are closed.
{{% /MathEnv %}}

### An interesting observation

If we look at our properties of open and closed sets, we get that in a metric space $ (X,d) $, $ X $ and $ \varnothing $ are both open AND closed, or {{% tdf "clopen" %}}.
We will give more examples of clopen sets soon.
{{%nl%}}{{%nl%}}

For now we will describe more metric-topological properties in increasing abstractness.

## A stronger sense of boundedness



## Connectedness


## Compactness












[^radius is dependent on the point]: The dependence of the radius on the point is quite important. In this case, there is not much to read into, but it is important to know when values depend on other values in analysis. 
Later we'll get more into this with ideas like _pointwise_ and _uniform_ continuity, among other things.
