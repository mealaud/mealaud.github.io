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
{{% /Proof %}}



