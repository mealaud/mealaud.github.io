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
5. $ \mathrm{char}(\mathbb{F}_p[t]) = p$ for $ \mathbb{F}_p \coloneqq \mathbb{Z}/p\mathbb{Z}$.
    - Notice that $ \mathbb{F}_p[t]$ has finite characteristic despite being an infinite field! 
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

Note that there are _subfields_ of fields! For example, $ \mathbb{Q}$ is a subfield of $ \mathbb{R}$. In some sense... **DRUMROLL PLEASE**... $ \mathbb{R}$ extends $ \mathbb{Q}$! This turns out to be a general phenomenon of field theory and is actually a very important idea. 

{{% MathEnv "defn"%}}
If $ K$ is a field containing the subfield $ F$, then $ K$ is said to be an {{% tdf "extension" %}} of $ F$, denoted $ K/F$ (read: "$ K$ over $ F$") or by the diagram 
$$
    bruh put the figure :skull: incscape moment
$$
{{% /MathEnv %}}
{{% MathEnv "rem"%}}
$ F$ is sometimes called the {{% tdf "base field" %}}.
{{% /MathEnv %}}


But how can we quantify how much our extension "extends" our base field? It turns out, as one might expect, that an extension corresponds to a vector space (over the base field)! Indeed, if $ K / F$, $ K$ forms an $ F$-vector-space. This gives us a nifty way to define how "extend-y" an extension is.

{{% MathEnv "defn"%}}
The {{% tdf "degree" %}} or {{% tdf "index" %}} of a field extension $ K /F$, denoted $ [K:F]$, is the dimension of $ K$ as a vector space over $ F$. (i.e., $ [K:F] = \mathrm{dim}_F(K)$). If $ [K:F]$ is finite, we say the extension is {{% tdf "finite" %}}  and the extension is {{% tdf "infinite" %}} otherwise.
{{% /MathEnv %}}

#### Aside: Why is the definition of degree any good?

When I first approached these ideas I wasn't really sure I was understanding why the definition of the degree of an extension was good. More precisely, it was not obvious to me that any two isomorphic fields would have the same degree over isomorphic base fields. That's why I go through all of this rigmarole.

{{% MathEnv "prop"%}}
If $ K_1, K_2$ both extend a base field $ F$ and are isomorphic, then $ [K_1 : F] = [K_2 : F]$. 
{{% /MathEnv %}}

{{% Proof %}}
It suffices to show that $ K_1$ and $ K_2$ are isomorphic as $ F$-vector spaces. Let $ \alpha, \beta$ be bases of $ K_1$ and $ K_2$ as $ F$-vector spaces. Moreover, let $ \phi \colon K_1 \to K_2$ be a field isomorphism. Then define $ T \colon \alpha \to \beta$ with $ T(a) \coloneqq \phi(\alpha)$. We may then extend $ T$ to $ \widetilde{T} \colon K_1 \to K_2$. 

We now show injectivity. If $ K_1 \ni v = c_1 a_1 +\cdots + c_n a_n$ (for $ \left \\{ a_1,\ldots,a_n \right \\} \subseteq \alpha$),  
$$\begin{align*}
    v \in \mathrm{ker}(\widetilde{T}) &\iff \widetilde{T}(v) = 0 \\\\
    &\iff c_1 \widetilde{T}(a_1) + \cdots + c_n \widetilde{T}(a_n) = 0 \\\\
    &\implies c_i = 0 \text{ for all } i \text{ by linear independence of } \beta \\\\
    &\implies v=0
\end{align*}$$
Thus $ \widetilde{T}$ is injective. 

What remains to be shown is surjectivity. Suppose $ u \in K_2$. Then $ \phi^{-1} \in K_1$ and hence $ \widetilde{T}(\phi^{-1}(u)) = u$. Thus $ \widetilde{T}$ is surjective and is hence a bijective linear map--an isomorphism. Therefore $ K_1 \cong K_2$ as $ F$-vector spaces and $ [K_1:F]= \mathrm{dim}_F(K_1) = \mathrm{dim}_F(K_2)=[K_2:F]$ as desired.
{{% /Proof %}}

### Adjoining roots by quotienting by polynomials

One thing I remember being mentioned in one of my (5?) complex analysis classes during my undergrad career was that 
$$
    \mathbb{C} \cong \frac{ \mathbb{R}[t] }{(t^2+1)}.
$$
I honestly had no idea what my professor was trying to say besides them mumbling (read: saying quite clearly) that we are _adjoining_ the root of $ t^2+1$, i.e. $ \sqrt{-1}$, to $ \mathbb{R}$. What did this mean? 

Having now taken ring theory and now being vaguely familiar with field theory I see that he meant literally what he said (as math professors often do...), we are giving the otherwise _irreducible_ polynomial $ t^2+1$ a root "in" a field extending $ \mathbb{R}$. We call this idea (we being me) _quotienting fields by polynomials_ (the name of this section!)
