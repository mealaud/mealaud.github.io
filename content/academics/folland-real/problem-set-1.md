---
title: "Problem Set 1"
date: 2023-12-26T08:13:46Z
draft: false
math: true
layout: "problem-set"
summary: "The first problem set for my Folland reading."
---

{{% MathEnv "x" %}}
(Folland 5.1) If $ \mathcal{X} $ is a normed vector space over $ K $ ($ = \mathbb{R} $ or $ \mathbb{C} $), then addition and scalar multiplication are continuous from $ \mathcal{X}\times \mathcal{X} $ and $ K\times \mathcal{X} $ to $ \mathcal{X} $. Moreover, the norm is continuous from $ \mathcal{X} $ to $ [0,\infty) $; in fact, $ \left | ||x|| - ||y|| \right |  \leq ||x-y|| $. 
{{% /MathEnv %}}
{{% Proof %}}
   Fix $ (x_0,y_0) \in \mathcal{X}\times \mathcal{X} $. Let $ \varepsilon > 0 $. Then, if $ (x,y) \in \mathcal{X}\times \mathcal{X} $ is such that $ ||(x,y) - (x_0,y_0)|| < \varepsilon/2 $:
   $$
    ||(x+y)-(x_0+y_0)|| \leq || x-x_0 || + ||y-y_0|| < 2 \cdot \frac{ \varepsilon }{ 2 } = \varepsilon.
   $$
   Thus addition of vectors is continuous.
   {{%nl%}}{{%nl%}}

   Fix $ (c_0,x_0) \in K \times \mathcal{X} $, and take $ \varepsilon > 0 $. If we take $ (c,x) \in K \times \mathcal{X} $ such that
   $$
    \left | \left | (c,x)-(c_0,x_0) \right |  \right | < \operatorname{min}\left \\{ \frac{ \varepsilon }{ 2|c| }, \frac{ \varepsilon }{ 2 ||x_0|| } \right \\} ,
   $$
   we have that: 
   $$
    \begin{align*}
        ||cx-c_0x_0|| &\leq ||cx - cx_0|| + ||cx_0 - c_0x_0|| \\\\
        &= |c| ||x-x_0|| + |c-c_0| ||x_0|| \\\\
        &< 2 \cdot \frac{ \varepsilon }{ 2 } = \varepsilon
    \end{align*}
   $$
   by assumption. Thus scalar multiplication is continuous.
{{% /Proof %}}


{{% MathEnv "x" %}}
(Folland 5.6) Suppose that $ \mathcal{X} $ is a finite-dimensional vector space. Let $ e_1, \ldots, e_n $ be a basis for $ \mathcal{X} $, and define $||\sum_{1}^{n} a_j e_j|| \coloneqq\sum_{1}^{n}|a_j| $. 

1. $ || \cdot ||_1 $ is a norm on $ \mathcal{X} $.
2. The map $ (a_1,\ldots,a_n) \mapsto\sum_{1}^{n}a_j e_j $ is cotninuous from $ K^n $ with the usual Euclidean topology to $ \mathcal{X} $ with the topology defined by $ || \cdot ||_1 $.
3. $ \left \\{ x \in \mathcal{X} : ||x||_1 = 1 \right \\} $ is compact in the topology defined by $ ||\cdot||_1 $.
4. All norms on $ \mathcal{X} $ are equivalent. (Compare any norm to $ ||\cdot||_1 $.)
{{% /MathEnv %}}

