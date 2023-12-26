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
2. The map $ (a_1,\ldots,a_n) \mapsto\sum_{1}^{n}a_j e_j $ is continuous from $ K^n $ with the usual Euclidean topology to $ \mathcal{X} $ with the topology defined by $ || \cdot ||_1 $.
3. $ \left \\{ x \in \mathcal{X} : ||x||_1 = 1 \right \\} $ is compact in the topology defined by $ ||\cdot||_1 $.
4. All norms on $ \mathcal{X} $ are equivalent. (Compare any norm to $ ||\cdot||_1 $.)
{{% /MathEnv %}}

{{% MathEnv "lem" %}}
$ ||\cdot||_2 $ (the Euclidean metric) and $ ||\cdot||_1 $ (per the above exercise) are equivalent norms on $ \mathbb{R}^n $ (and hence also on $ \mathbb{C}^n $).
{{% Proof %}}
Since $ ||\cdot||_2 $ and $ ||\cdot||_1 $ are nonnegative, it is sufficient to prove that there exists positive constants $ A $ and $ B $ such that for any $ v \in \mathbb{R}^n $, 
$$
     A ||v||_2^2 \leq ||v||_1^2 \leq B||v||_2^2.
$$ 
Considering the standard basis $ u_1,\ldots,u_n $ of $ \mathbb{R}^n $, $ v = v_1 u_1+ \cdots + v_n u_n $. Then: 
$$
    ||v||_2^2 = v_1^2 + \cdots + v_n^2
$$
and 
$$
    ||v||_1^2 = (|v_1| + \cdots + |v_n|)^2.
$$
Hence, $ ||v||_2^2 \leq ||v||_1^2 $ so we may take $ A = 1 $. Moreover, 
$$
    \begin{align*}
        ||v||_1^2 &\leq \left ( n \operatorname{max}\left \\{ |v_i| : 1\leq i\leq n \right \\}  \right )^2 \\\\
        &\leq n^2 \operatorname{max} \left \\{ |v_i|^2 : 1 \leq i \leq n \right \\} \\\\
        &\leq n^2 ||v||_2^2.
    \end{align*}
$$
Thus we may take $ B $ to be $ n^2 $. The claim has been shown.
{{% /Proof %}}
{{% /MathEnv %}}


{{% Proof %}}
1. This follows from properties of the absolute value over $ K $ ($ = \mathbb{R} $ or $ \mathbb{C} $.)
2. finish
3. By the second part of this question, we can see that $ \mathcal{X} $ is homeomorphic to $ K^n $ with the Euclidean topology (via the given bijective bicontinuous mapping). Hence we may consider our set, $ S \coloneqq \left \\{ x \in K^n : ||x||_1 = 1 \right \\} $. This set is closed and bounded, so by Heine-Borel theorem it is compact. Now, because these spaces are homeomorphic, we get that the original set is compact in $ \mathcal{X} $. 
4. Consider some normal $ ||\cdot|| $ on $ \mathcal{X} $. It suffices to show that there are positive constants $ A $ and $ B $ such that 
$$
    A||v||_1 \leq ||v|| \leq B||v||_1 \quad \text{for all} \quad v \in \mathcal{X}.
$$
Fix some $ w \in \mathcal{X} $. We then know that $ w = w_1 e_1 + \cdots + w_n e_n $ for some constants $ w_i \in K $. Then, 
$$
    \begin{align*}
        ||w|| &\leq |w_1| ||e_1|| + \cdots + |w_n| ||e_n|| \\\\
        &\leq ||w||_1 \operatorname{max} \left \\{ ||e_i|| : 1 \leq i \leq n \right \\} 
    \end{align*}
$$
Hence we can take $ B =\operatorname{max} \left \\{ ||e_i|| : 1 \leq i \leq n \right \\} $. Similarly, we can take $ A = (n) $
{{% /Proof %}}

