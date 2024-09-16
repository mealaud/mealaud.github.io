---
title: "Topology & Continuity IV (Compactness, Uniform Continuity)"
date: 2024-09-16T12:30:56-04:00
draft: true
type:
layout:
summary: "A study of one of the most powerful ideas in mathematics: compactness."
---

Finite sets enjoy such wonderful properties like... (where $ A \subseteq \mathbb{R} $ is finite)
1. They always contain their maximum or minimum values (i.e., $ \sup A, \inf A \in A $);
2. Any collection of open sets which union to the set, there is always a finite subcollection which still unions to the set 
3. Every sequence in a finite set has a convergent subsequence (i.e., by Pigeon Hole Principle, at least one element of $ A $ must occur infinitely many times and hence a subsequence consisting of these elements is convergent); and
4. Every finite set (with some metric) is complete

and many other wonderful properties. (It is worth nothing though, that Property 2 is a lot more involved.)
{{%nl%}}{{%nl%}}

But, the moment we go to infinite sets, we can lose these!
As counter examples, consider (to the corresponding nice property):
1. If $ A = (0,1) $, $ \sup A, \inf A \not \in A $.
2. $ A = \left \\{ n^{-1} : n \in \mathbb{Z}^+ \right \\} $.
3. If $ A = \mathbb{Z} $, the sequence defined by $ a_n = n $ has no convergent subsequence.
4. The space $ \mathbb{Q} $ is not complete.

But if the set is _compact_, all the properties of finite sets we stated above are actually preserved! 
In essence, _compactness means you are **basically** finite_.
{{%nl%}}{{%nl%}}

Let actually define it now.


## Definition

Let $ (X,d) $ be a metric space.

We first need to define some preliminary stuff. 

1. We say $ \left \\{ U_\alpha : \alpha_A \right \\}  $ for some indexing set $ A $ (we also say just $ \left \\{ U_\alpha \right \\}  $) is an {{% tdf "open cover" %}} of $ X $ if each $ U_\alpha $ is open and $ \bigcup U_\alpha \supseteq X $[^equals vs supset].
2. We say $ \left \\{ U_\alpha \right \\}  $ has a {{% tdf "finite subcover" %}} if there is a finite subcollection of $ \left \\{ U_\alpha \right \\} $ which is also an open cover.

Now we say that: a subset $ K \subseteq X $ is {{% tdf "compact" %}}[^covering compact] if any open cover of $ K $ has a finite subcover.
{{%nl%}}{{%nl%}}

I now state the definition with more emphasis: a subset $ K \subseteq X $ is _compact_ if **any open cover has a finite subcover**. 
I repeat: ***ANY***.
{{%nl%}}{{%nl%}}

The reason this is so strong is because we are saying that no matter how you look at a compact set, it is can be understood by looks at finitely many pieces of it.
{{%nl%}}{{%nl%}}

Let's start looking at examples of compactness being a powerful property.
First, its "absoluteness".

## Is compactness relative?

We know that sets open in one metric space may not be open in another. (e.g., $ (0,1] $ is open in itself but $ (0,1] $ is not open as a subset of $ \mathbb{R} $.)
And compactness is all about open sets...
Does this mean compactness is also relative?
No!
{{% MathEnv "thm" %}}
Let $ (X,d) $ be a metric space and let $ K \subseteq X $.
Then $ K $ is compact in $ X $ if and only if $ (K,d) $ is compact (when we restrict $ d $ to $ K $).
{{% /MathEnv %}}
{{% Proof %}}
($\Rightarrow$)
Suppose $ K $ is compact in $ X $.
Then consider $ (K,d) $ as a metric space in its own right.
If $ \left \\{ U_\alpha \right \\} $ is an open cover of $ (K,d) $.
Then each $ U_\alpha = V_\alpha \cap K $ for some $ V_\alpha $ open in $ X $.
Then $ \left \\{ V_\alpha \right \\}  $ is an open cover $ K $ in $ X $.
Since $ K $ is compact in $ X $, there is a finite subcover $ \left \\{ V_{\alpha_1},\ldots,V_{\alpha_n} \right \\}  $ of $ K $ in $ X $.
We then immediately have that $ \left \\{ U_{\alpha_1},\ldots,U_{\alpha_n} \right \\}  $ is a finite subcover of $ (K,d) $.
Thus $ K $ is compact.
{{%nl%}}{{%nl%}}

($\Leftarrow$)
Suppose $ (K,d) $ is compact and let $ \left \\{ U_\alpha \right \\}  $ be an open cover of $ K $ in $ X $.
Then $ \left \\{ U_\alpha \cap K \right \\}  $ is an open cover of $ (K,d) $ and hence has a finite subcover $ \left \\{ U_{\alpha_i} \cap K \right \\}  $.
We then have that $ \left \\{ U_{\alpha_i} \right \\}  $ is a finite subcover of $ K $ so that $ K $ is compact.
{{% /Proof %}}

Let's show off some of the power of compactness. B)

## Uniform Continuity

Let $ (X,d) $ and $ (Y,\rho) $ be metric spaces.
{{%nl%}}{{%nl%}}

Recall our definition of [continuity]({{<relref "academics/intro-real-analysis/topology-continuity-ii#defn:continuous" >}}).
In particular, recall that our $ \delta $ depends on both $ \varepsilon $ (of course) AND the point we're at.
Compactness, however, gives us the freedom from this point-dependent $ \delta $, and let's us choose one $ \delta $ for the entire interval.
{{%nl%}}{{%nl%}}

Putting this mathematically, we say that $ f $ is {{% tdf "uniformly continuous" %}} on $ X $ if for every $ \varepsilon > 0 $, there exists some $ \delta > 0 $ (dependent only on $ \varepsilon $) such that any $ x_1,x_2 \in X $ satisfying $ d(x_1,x_2) < \delta $, we have that $ \rho(f(x_1),f(x_2)) < \varepsilon $.
{{%nl%}}{{%nl%}}

Let's do some exploration into this definition.

{{% MathEnv "ex" %}}
Let $ (X,d), (Y,\rho) $ are metric spaces.
Suppose $ f \colon X \to Y $ is continuous.
So let $ \varepsilon > 0 $.
Then for each $ x \in X $, there exist some suitable $ \delta_x > 0 $.
But if we try to extract a $ \delta_x $ that works for everyone? 
The obvious candidate is $ \delta = \inf_{x \in X} \delta_x $, but this isn't necessarily positive...
So how do we ensure this "minimum $ \delta $" is nonzero?
{{% /MathEnv %}}




[^equals vs supset]: This is equivalent to just equality, but the containment gets the right idea across.
[^covering compact]: This open cover definition of compactness is sometimes called _covering compactness_ to avoid ambiguity between equivalent formulations of compactness.
