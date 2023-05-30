---
title: "Baby's First Field Extension"
date: 2023-05-29T13:42:29-07:00
draft: true
math: true
tags: 
categories: 
---

We start by defining what a field is.{{%nl%}}

{{% MathEnv "defn"%}}
A {{% tdf "field" %}} is a commutative ring in which every nonzero element has a (multiplicative) inverse.
{{% /MathEnv %}}
{{% MathEnv "rem"%}}
If $ F$ is a field, this is equivalent to $ F^\times = F - \left \\{ 0 \right \\} $ of nonzero elements of $F$ is an abelian group under multiplication.
{{% /MathEnv %}}

I find examples very helpful so here's a few examples of fields.{{%nl%}}

{{% MathEnv "ex"%}}
1. The rational numbers $ \mathbb{Q}$;
2. the real numbers $ \mathbb{R}$;
3. the complex numbers $ \mathbb{C}$; and 
4. $ \mathbb{Z}/2\mathbb{Z}$ and $ \mathbb{Z}/3\mathbb{Z}$.
    - In fact for any prime $ p$, $ \mathbb{Z}/p\mathbb{Z}$ is a field!
{{% /MathEnv %}}

We now move on to some other objects of study.{{%nl%}}

## The characteristic of a field

From the definition of fields, we know that fields are integral domains (you cannot multiply two nonzero elements and get zero), but does addition fulfill a similar property? Not necessarily. Indeed it is the case that in $ \mathbb{Q}$, $ 1+1+1+\cdots$ never just "disappears", but in other fields it can! For example, if we consider $ \mathbb{Z}/3\mathbb{Z}$: 
- $ 1 \neq 0$
- $ 1+1 =2 \neq 0$
- $ 1+1+1=3=0$

Here it makes sense that summing ones eventually zeros out and in $ \mathbb{Q}$ it also makes sense that it never zeros out. This happens because of something called the _characteristic_ of a field. {{%nl%}}{{%nl%}}

Recall that given a ring $ R$, there is a unique ring homomorphism from $ \mathbb{Z}$ to $ R$. Now since fields are also rings, we have that there exists a unique (ring) homomorphism from the integers into some given field. Now combining this with our observation about summing ones vanishing in $ \mathbb{Z}/3\mathbb{Z}$ but not in $ \mathbb{Q}$, we can see the following:
- we can embed a copy of $ \mathbb{Z}$ in $ \mathbb{Q}$; and 
- we can embed a copy of $ \mathbb{Z}/3\mathbb{Z}$ in $ \mathbb{Z}/3\mathbb{Z}$!

Though you could argue the last bullet point there isn't particularly insightful, I still find it quite important to point out as we use the aforementioned unique homomorphism to make these observations a bit more rigorous. Consider the following for a given field $ F$: if $ \varphi \colon \mathbb{Z} \to F$ is a ring homomorphism, by the First Isomorphism Theorem, $ \mathbb{Z}/\mathrm{ker} \varphi \cong \mathrm{im} \varphi \subseteq F$. Noticing the the kernel of $ \varphi$ is necessarily of the form $ n\mathbb{Z}$ for some unique nonnegative $ n \in \mathbb{Z}$, we get that there is a copy of $ \mathbb{Z}/n\mathbb{Z}$ embedded inside $ F$! This is precisely what is happening in the examples of $ \mathbb{Q}$ and $ \mathbb{Z}/3\mathbb{Z}$. This explains the vanishing sums!{{%nl%}}

We are now ready to define what the _characterstic of a field_ actually is. 

{{% MathEnv "defn"%}}
The {{% tdf "characteristic" %}} of a field $ F$, denoted $ \mathrm{char}(F)$ is the unique nonnegative integer $ n$ such that if $ \varphi$ is the unique homomorphism from $ \mathbb{Z}$ into $ F$, $ n\mathbb{Z} = \mathrm{ker} \varphi$. {{%nl%}}

Put another way, the characteristic is defined to be the smallest positive integer $ p$ such that $ p \cdot 1_F = 0$ if such a $ p$ exists and is defined to be $ 0$ otherwise. 
{{% /MathEnv %}}

Here are some examples. 
{{% MathEnv "ex"%}}
1. $ \mathrm{char}(\mathbb{Q}) = 0$;
2. $ \mathrm{char}(\mathbb{R}) = 0$;
3. $ \mathrm{char}(\mathbb{C}) = 0$; and
4. $ \mathrm{char}(\mathbb{Z}/p\mathbb{Z}) = p$ for prime $ p$.
5. $ \mathrm{char}(\mathbb{F}_p[x]) = p$ for $ \mathbb{F}_p \coloneqq \mathbb{Z}/p\mathbb{Z}$.
    - Notice that $ \mathbb{F}_p[x]$ has finite characteristic despite being an infinite field! 
{{% /MathEnv %}}

Had I given you more examples of fields, you might have realized that the characteristic of a field is always either $ 0$ or prime. Indeed, we can make this a proposition!

{{% MathEnv "prop"%}}
The characteristic of a field $ F$ is either $ 0$ or a prime $ p$.
{{% /MathEnv %}}

{{% Proof %}}
Without loss of generality, suppose that $ \mathrm{char}(F) \neq 0$. Further suppose then that $ \mathrm{char}(F) = mn$ for some positive integers $ m,n$. Then 
$$
    (m \cdot 1) (n\cdot 1) = mn \cdot 1 = 0
$$ 
by definition. However, because fields are integral domains, either $ m \cdot 1 = 0$ or $ n \cdot 1 = 0$. Without loss of generality, suppose that $ m \cdot 1 = 0$ Then $ \mathrm{char}(F) \mid m$ so $ m = k \mathrm{char}(F)$. Hence: 
$$
    \mathrm{char}(F) = mn = k \mathrm{char}(F) \cdot n
$$
and $ kn = 1$. Since $ k,n$ are positive integers, however, $ k=n=1$. Thus $ \mathrm{char}(F) = m$ and $ m$ (and hence $ \mathrm{char}(F)$) must have been prime. 
{{% /Proof %}}

Because of the "summing ones can disappear" thing in a field, we have this fact also.

{{% MathEnv "prop"%}}
If the characteristic of a field $ F$ is some prime $ p$, then for all $ a \in F$, 
$$
    p \cdot a = \underbrace{a+\cdots+a}_{p \text{ times}} = 0.
$$          
{{% /MathEnv %}}


## Field extensions and their degrees

Note that there are _subfields_ of fields! For example, $ \mathbb{Q}$ is a subfield of $ \mathbb{R}$. In some sense... **DRUMROLL PLEASE**... $ \mathbb{R}$ extends $ \mathbb{Q}$! This turns out to be a general phenomenon and field theory and is actually a very important idea that we study. Here is a precise definition.

{{% MathEnv "defn"%}}
If $ K$ is a field containing the subfield $ F$, then $ K$ is said to be an {{% tdf "extension" %}} of $ F$, denoted $ K/F$ or by the diagram 
{{% /MathEnv %}}


