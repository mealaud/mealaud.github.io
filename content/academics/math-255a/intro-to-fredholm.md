---
title: "Introduction to Fredholm Operators"
date: 2024-02-26T03:15:41-08:00
draft: false
type: "page"
layout: "note"
summary: "An introduction to Fredholm operators! :D"
---

Our previous work with linear operators in functional analysis have let us experience several... pathologies. However, one need not use only general ideas divorced from assumptions to make progress! Indeed, the study of a *nice* operators have a place. The ones we study today are called *Fredholm operators*.{{%nl%}}{{%nl%}}

If $ B_1, B_2 $ are complex Banach spaces, we say a continuous linear operator $ T \in \mathcal{L}(B_1,B_2) $ is called a {{% tdf "Fredholm operator" %}} if $ \operatorname{Ker}(T) $ and $ \operatorname{CoKer}(T) \coloneqq B_2 / \operatorname{Ran}(T) $ are finite dimensional. Fredholm operators, in essence, are operators which are *almost injective* and *almost surjective*. In fact, we can quantify this using the {{% tdf "index" %}} of a Fredholm operator $ \operatorname{ind}(T) $ is defined to be: 
$$
    \operatorname{ind}(T) = \operatorname{dim}\operatorname{Ker}(T) - \operatorname{dim}\operatorname{CoKer}(T).
$$

{{% MathEnv "thm" %}}
Let $ T \in \mathcal{L}(B_1,B_2) $ be such that $ \operatorname{dim}\operatorname{CoKer}(T)= \operatorname{codim} \operatorname{Ran}(T) < \infty $. Then $ \operatorname{Ran}(T) \subseteq B_2 $ is closed.
{{% /MathEnv %}}
{{% Proof %}}
Notice that we need only consider the case where $ T $ is injective, as otherwise we could take the map from $ B_1 / \operatorname{Ker}(T) $ to $ B_2 $ and study essentially the same function. {{%nl%}}{{%nl%}}

Let $ \operatorname{dim}(B_2/\operatorname{Ran}(T))= n < \infty $, and let $ x_1, \ldots,x_n \in B_1 $ be such that $ x_1 + \operatorname{Ran}(T), \ldots, x_n + \operatorname{Ran}(T) $ forms a basis for $ B_2 / \operatorname{Ran}(T) $. Then for any $ y \in B_2 $, there exists some $ z \in B_1 $ so that 
$$
    y = Tz +\sum_{j=1}^{n}a_j x_j.
$$

In essence, we are just decomposing $ B_2 $ into a (direct) sum of $ \operatorname{Ran}(T) $ and $ B_2 / \operatorname{Ran}(T) $. Indeed, we can make this precise using a new map $ S \colon \mathbb{C}^n \to B_2 $ given by 
$$
    S(a_1,\ldots,a_n) = a_1 x_1 + \cdots + a_n x_n.
$$
Clearly this map is injective by our choice of $ x_1,\ldots,x_n $, so we then get that: 
$$
    B_2 = \operatorname{Ran}(T) \oplus \operatorname{Ran}(S).
$$
Thus the map $ R \colon B_1 \oplus \mathbb{C}^n \to B_2 $ defined by $ R(x,a) \mapsto Tx + Sa $ is linear, continuous, and bijective. Now, since $ R $ is a bijection, we may apply Open Mapping Theorem to get that $ R $ is a homeomorphism! Thus, since $ B_1 \oplus \left \{ 0 \right \} $ is closed, $ \operatorname{Ran}(T) = R[B_1 \oplus \left \{ 0 \right \}] $ is closed. Thus we are done.
{{% /Proof %}}

Note that this gives us the following immediate corollary:
{{% MathEnv "coro" %}}
Any Fredholm operator has closed image.
{{% /MathEnv %}}

### Perturbing Fredholm Operators

First, we'll need this interesting (at least to me!) fact about operators with less than unit norm.
{{% MathEnv "lem" %}}
Let $ B $ be a Banach space, and let $ S \in \mathcal{L}(B,B) $ be such that $ \left \lVert S \right \rVert < 1 $. Then the operator $ I - S $ has an inverse in $ \mathcal{L}(B,B) $.
{{% /MathEnv %}}
{{% Proof %}}
Consider the (Neumann) series 
$$
    R =\sum_{n=0}^{\infty}S^n.
$$
(Note that this sum converges as this is just a geometric series with ratio less than one.) Then: 
$$
    R(I-S) = R - RS = I \quad \text{and} \quad (I-S)R = R - SR = I,
$$
so $ R \in \mathcal{L}(B,B) $ is the inverse of $ I-S $.
{{% /Proof %}}

We can actually squeeze out a nice little corollary out of this lemma.
{{% MathEnv "coro" %}}
The space of invertible bounded operators in $ \mathcal{L}(B,B) $ is open.
{{% /MathEnv %}}
{{% Proof %}}
Let $ T \in \mathcal{L}(B,B) $ be invertible. Then suppose $ S \in \mathcal{L}(B,B) $ is such that 
$$
    \left \lVert T^{-1} S \right \rVert \leq \left \lVert T^{-1} \right \rVert \left \lVert S \right \rVert < 1.
$$
Then, $ I + T^{-1} S $ is invertible by our above lemma. Now since the product of invertible operators is invertible, $ T (I + T^{-1} S) = T+ S $ is invertible and our space is open.
{{% /Proof %}}

Now using these ideas of perturbation, we show that the space of Fredholm operators is open, and that the $ \operatorname{ind} $ is locally constant on this open set. In other words, Fredholm operators are _stable_ under perturbations.

{{% MathEnv "thm" %}}
Let $ T \in \mathcal{L}(B_1,B_2) $ be a Fredholm operator. If $ S \in \mathcal{L}(B_1,B_2) $ is such that $ \left \lVert  S \right \rVert $ is sufficiently small, then $ T+S $ is Fredholm and $ \operatorname{ind}(T+S) = \operatorname{ind}(T) $.
{{% /MathEnv %}}
{{% Proof %}}
**Will finish this later.**
{{% /Proof %}}

### The Logarithmic Law
{{% MathEnv "prop" %}}
Let $ T_1 \in \mathcal{L}(B_1,B_2) $ and $ T_2 \in \mathcal{L}(B_2,B_3) $ be Fredholm. Then $ T_2 T_1 \in \mathcal{L}(B_1,B_3) $ is also Fredholm, and we have the "logarithmic law": 
$$
    \operatorname{ind}(T_2 T_1) = \operatorname{ind}(T_2) + \operatorname{ind}(T_1).
$$
{{% /MathEnv %}}

