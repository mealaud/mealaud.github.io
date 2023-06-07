---
title: "Splitting Fields"
date: 2023-06-03T23:22:19-07:00
draft: true
math: true
tags: 
categories: 
partOfText: ["Field Theory"]
---

## All the roots!

We've talked ad nauseam about adjoining roots by quotienting my irreducible polynomials, but can we adjoin roots of non-irreducible polynomials? Does there exist an extension of the base field where the polynomial can be factored into linear factors, or _splits_? I suppose that obvious answer is "why not? ;3c" as we can just take a list of all the roots and slap'em into field extension and call it day, but what if we stipulate that it should be the _smallest_ such extensions? What would be the degree of such an extension? This object that we are discussing is called a _splitting field_. 

{{% MathEnv "defn" %}}
The extension field $ K $ of a field $ F $ is called a {{% tdf "splitting field" %}} for the polynomial $ f(t) \in F[t] $ if $ f(t) $ factors completely into linear factors (or {{% tdf "splits completely" %}}) in $ K[t] $ and $ f(t) $ does not factor completely into linear factors over any proper subfield of $ K $ containing $ F $. 
{{% /MathEnv %}}

When first thinking about where such a field exists, I thought: "What's all the fuss? Just quotient by the polynomial if you're studying!" Though this seems like a great idea (and is in the case of irreducibles), if we're working with a non-irreducible polynomial this just plainly doesn't work. This is because quotienting by a non-irreducible doesn't give you a field! What makes matters even worse is that the degree of the polynomial doesn't even tell you what the degree of a splitting field should be! Indeed, if we look at $ (t^2+1)^2 \in \mathbb{Q}[t] $, this has roots $ \pm i $ (each with multiplicity $ 2 $) when we consider it as a polynomial over $ \mathbb{C} $, so we have that, if $ K $ is an extension of $ \mathbb{Q} $ where $ (t^2+1)^2 $ splits: 
$$
    K = \mathbb{Q}(i,-i) = \mathbb{Q}(i)
$$
(recall that $ -i \in \mathbb{Q}(i) $). So we have that 
$$
    [K : \mathbb{Q}] = 2
$$
but,... our polynomial had degree $ 4 $? This brings us to an important observation about splitting fields: 

{{% MathEnv "up" %}}
The degree of a splitting field can be less than the degree of the polynomial you're splitting!
{{% /MathEnv %}}
{{% MathEnv "rem" %}}
I thought this was important to really emphasize as I found it somewhat surprising at first.
{{% /MathEnv %}}

## Do splitting fields exist? 

Yes lol. Otherwise I wouldn't be writing about them! :3c

