---
title: "The Hahn-Banach Theorem"
date: 2024-02-24T11:23:27-08:00
draft: true
type: "page"
layout: "note"
summary: "Notes on the Hahn-Banach Theorem and its applications. In particular, we will talk about: the real, complex, and geometric Hahn-Banach Theorems; the spanning criterion; Runge's Theorem; Muntz's Theorem; and weak solutions to the Poisson equation."
---

Note that we are currently assuming the definition of dual spaces, Banach spaces, etc. (These will have notes on them eventually.)

### The (Analytic) Hahn-Banach Theorem

A big question one can pose for these seemingly pathological infinite-dimensional normed spaces is whether there are *any* nonzero bounded linear functionals on the space. In finite-dimensions its easy enough, but, as is often the case, infinite-dimensional spaces are a bit harder to deal with. The Hahn-Banach Theorem answers this question in the positive: there **are** bounded linear functionals. (We prove this using Zorn's Lemma! So it is... non-constructive.)

{{% MathEnv "thm" %}}
(Hahn-Banach, analytic form, over $ \mathbb{R} $). Let $ V $ be a vector space over $ \mathbb{R} $, and let $ p \colon V \to \mathbb{R} $ be a map which satisfies: 
1. Positive homogeneity: $ p(\lambda x) = \lambda p(x) $ for all $ x \in V $ and positive $ \lambda $.
2. Subadditivity: $ p(x+y) \leq p(x) + p(y) $ for all $ x,y \in V $.
Let $ W \subseteq V $ be a linear subspace and let $ g \colon W \to \mathbb{R} $ be a linear form such that $ g(x) \leq p(x) $ for all $ x \in W $. Then there exists a linear form $ f \colon V \to \mathbb{R} $ which agrees with $ g $ on $ W $ such that $ f(x) \leq p(x) $ for all $ x \in V $.
{{% /MathEnv %}}

{{% Proof %}}
I feel comfortable with this so I will prove it later.
{{% /Proof %}}

We can then easily generalize this to $ \mathbb{C} $! :)

{{% MathEnv "thm" %}}
(Hahn-Banach, analytic form, over $ \mathbb{C} $). Let $ V $ be a $ \mathbb{C} $-vector space, $ W \subseteq V $ a linear subspace, and $ p \colon V \to [0,\infty) $ a seminorm. LEt $ g \colon W \to \mathbb{C} $ be be linear such that $ |g(x)| \leq p(x) $ for all $ x \in W $. Then $ g $ can be extended to a linear form $ f \colon V \to \mathbb{C} $ such that $ |f(x)| \leq p(x) $ for al $ x \in V $.
{{% /MathEnv %}}
{{% Proof %}}
Will add later.
{{% /Proof %}}

### An aside on dual spaces

Usually, the dual of a vector space is just the vector space of linear forms on the original vector space, but for Banach spaces we modify this a tiny bit.

{{% MathEnv "defn" %}}
If $ B_1, B_2 $ are Banach spaces, then {{% tdf "$ \mathcal{L}(B_1,B_2) $" %}}  is the space of continuous linear maps $ T \colon B_1 \to B_2 $. We equip this space with the following norm: 
$$
    \left \lVert T \right \rVert = \sup_{0 \neq x \in B_1} \frac{ \left \lVert Tx \right \rVert_{B_2} }{ \left \lVert x \right \rVert_{B_1} }
$$
{{% /MathEnv %}}

{{% MathEnv "rem" %}}
In general, given two normed spaces $ V_1, V_2 $, it suffices to have only $ V_2 $ complete to have $ \mathcal{L}(V_1,V_2) $ be complete.
{{% /MathEnv %}}

The dual space is a special case of this new notation. 
{{% MathEnv "defn" %}}
Let $ B $ be a Banach space over $K =  \mathbb{R} $ or $ \mathbb{C} $. Then the {{% tdf "dual space" %}} $ B^* $ is $ \mathcal{L}(B,K) $.

If $ x \in B $ and $ \xi \in B^* $, we write {{% tdf "$ \langle x, \xi \rangle $" %}} $ \coloneqq \xi(x) $
{{% /MathEnv %}}
Our little convention for our inner-product-ish notation for evaluating linear forms is going to make things easier at times by being a bit more clear. 

It's also worth noting that the norm on $ B^* $ for is 
$$
    \left \lVert \xi \right \rVert_{B^*} = \sup_{0 \neq x \in B} \frac{ | \langle x,\xi \rangle | }{ \left \lVert x \right \rVert_{B} }.
$$
(This is directly from our definition for the norm on $ \mathcal{L}(B_1,B_2) $ above.)

We get a neat characterization of our original name based on linear forms from our definitions! 
{{% MathEnv "prop" %}}
For all $ x \in B $, 
$$
    \left \lVert x \right \rVert_B = \sup_{0 \neq \xi \in B^*} \frac{ | \langle x,\xi \rangle | }{ \left \lVert \xi \right \rVert_{B^*} }.
$$
{{% /MathEnv %}}

One neat thing about this proposition is that it yields a linear isometry from $ B $ to a closed, linear subspace of $ B^{* *} $! Indeed,
$$
    x \mapsto (\xi \mapsto \langle x, \xi \rangle)
$$
witnesses this property. (This is not necessarily a bijection as evaluation maps are a subset of the elements of the dual space, and not necessarily the entire space.) 


### Geometric Hahn-Banach

Like we will see as this post goes on, Hahn-Banach Theorem is kind of insanely useful, and has applications that I did not expect! Like this section's application which is related to separating certain types of sets using hyperplanes.
{{% MathEnv "defn" %}}
Let $ V $ be a normed vector space over $ \mathbb{R} $. An {{% tdf "affine hyperplane" %}} in $ V $ is a set of the form $ H = f^{-1}[\left \{ \alpha \right \}] $, where $ \alpha \in \mathbb{R} $, $ f \colon V \to \mathbb{R} $ is linear and nonzero.
{{% /MathEnv %}}

{{% MathEnv "prop" %}}
The affine hyperplane $ H = f^{-1}[\left \{ \alpha \right \}] $ is closed if and only if $ f $ is continuous.
{{% /MathEnv %}}

{{% MathEnv "defn" %}}
Let $ V $ be a normed vector space over $ \mathbb{R} $, and let $ A,B \subseteq V $. We say that the affine hyperplane $ H = f^{-1}[\left \{ \alpha \right \}] $ separates $ A $ and $ B $ if we have $ f(x) \leq \alpha $ for all $ x \in A $ and $ f(x) \geq \alpha $ for all $ x \in B $.
{{% /MathEnv %}}

{{% MathEnv "thm" %}}
(Geometric Hahn-Banach). Let $ V $ be a normed vector space over $ \mathbb{R} $, and let $ A, B \subseteq V $ be convex, disjoint, and nonempty. Assume also that $ A $ is open. Then there exists a closed affine hyperplane separating $ A $ and $ B $.
{{% /MathEnv %}}

{{% Proof %}}
I will fill in this proof later.
{{% /Proof %}}

There is also the complex geometric Hahn-Banach.

