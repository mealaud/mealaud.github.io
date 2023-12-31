---
title: "Problem Set 1"
date: 2023-12-26T08:13:46Z
draft: false
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
2. Clearly such a map is bijective, so we identify any coordinate with a corresponding vector. Moreover, by our lemma, we may suppose without loss of generality that $ K^n $ is instead endowed with the $ ||\cdot||_1 $ norm. Now, let $ (v_1,\ldots,v_n) \mapsto v_1 e_1 + \cdots + v_n e_n = v $ and $ (w_1,\ldots,w_n) \mapsto w_1 e_1 + \cdots + w_n e_n = w $. Then, if $ ||(v_1,\ldots,v_n)-(w_1,\ldots,w_n)||_1 < \varepsilon $, 
$$
    \begin{align*}
        ||v-w||_1 &= \sum_i |v_i-w_i| \\\\
        &= ||(v_1-w_1, \ldots, v_n-w_n)||_1 \\\\
        &=||(v_1,\ldots,v_n)-(w_1,\ldots,w_n)||_1 \\\\
        &< \varepsilon 
    \end{align*}
$$
as desired.
3. By the second part of this question, we can see that $ \mathcal{X} $ is homeomorphic to $ K^n $ with the Euclidean topology (via the given bijective bicontinuous mapping). Hence we may consider our set, $ S \coloneqq \left \\{ x \in K^n : ||x||_1 = 1 \right \\} $. This set is closed and bounded, so by Heine-Borel theorem it is compact. Now, because these spaces are homeomorphic, we get that the original set is compact in $ \mathcal{X} $. 
4. We prove this in several steps.
    1. Note that the equivlence of norms is an equivalence relation, so it is transitive. Hence, it suffices to only compare our norms to $ ||\cdot||_1 $. Whereby we consider some norm $ ||\cdot|| $ on $ \mathcal{X} $. 
    2. We now claim that it suffices to check $ S \coloneqq \left \\{ x \in \mathcal{X} : ||x||_1 = 1 \right \\} $. Suppose we have some $ x \in \mathcal{X} $ with $ x \neq 0 $. Then, for fixed $ A,B $, 
        $$
            A||x||_1 \leq ||x|| \leq B||x||_1 \quad \text{if and only if} \quad A \leq \frac{ ||x|| }{ ||x||_1 } \leq B,
        $$
    proving the claim. 
    3. We now claim that $ ||\cdot|| $ is $ ||\cdot||_1 $-continuous. It suffices to show that a mixed-reverse triangle inequality holds. Consider the following:
    $$
        \begin{align*}
            ||x|| - ||x_0|| &\leq ||x_0 + (x-x_0)|| - ||x_0|| \leq ||x-x_0|| \\\\
            ||x_0|| - ||x|| &\leq ||x - (x - x_0)|| - ||x|| \leq ||x-x_0||.
        \end{align*}
    $$
    So $ |||x||-||x_0||| \leq ||x-x_0|| $. Thus, if $ x = a_1 e_1 + \cdots + a_n e_n $ and $ x_0 = b_1 e_1 + \cdots + b_n e_n $, and we take $ ||x-x_0|| < \varepsilon/ \operatorname{max}\left \\{ ||e_i||: 1\leq i\leq n \right \\} $: 
    $$
        ||x-x_0|| \leq\sum_i |a_i-b_i|||e_i|| \leq ||x-x_0||_1 \operatorname{max}_i ||e_i|| < \varepsilon.
    $$
    Thus $ ||\cdot|| $ is $ ||\cdot||_1 $-continuous. 
    4. From part (3) of this exercise, we know that $ S $ is compact. Hence, since we are restricting $ ||\cdot|| $ to $ S $, it reaches its extreme values. Thus, if its minimum is $ m $ and its maximum is $ M $, so that 
    $$
        m \leq ||u|| \leq M
    $$
    as desired. Thus all norms are equivalent and we may celebrate!
{{% /Proof %}}

{{% MathEnv "x" %}}
(Folland 5.7) Let $ \mathcal{X} $ be a Banach space. 
1. If $ T \in L(\mathcal{X}, \mathcal{X}) $ and $ || I - T || < 1 $ where $ I $ is the identity operator, then $ T $ is invertible; in fact, the series $\sum_{0}^{\infty} (I-T)^n $ converges in $ L(\mathcal{X},\mathcal{X}) $ to $ T^{-1} $.
2. If $ T \in L(\mathcal{X},\mathcal{X}) $ is invertible and $ || S - T || < ||T^{-1}||^{-1} $, then $ S $ is invertible. Thus the set of invertible operators is open in $ L(\mathcal{X},\mathcal{X}) $. 
{{% /MathEnv %}}

{{% Proof %}}
1. Since $\sum_{0}^{\infty}||I-T||^n $ is a geometric series with common ratio less than $ 1 $, the sum converges. Hence, the series converges in $ \mathcal{X} $. It remains to verify that this series converges to the inverse of $ T $. To this end, let $ R \coloneqq \sum_0^\infty (I-T)^n $. Then 
$$
    R - RT = (I-T)R = \sum_1^\infty (I-T)^n = R - I \quad \text{so that} \quad RT = I.
$$
Similarly, $ TR = I $. Thus $ R $ is the inverse of $ T $ and $ T $ is invertible.

2. Consider $ || ST^{-1} - I || $. 
$$
    ||ST^{-1} - I|| = ||(S - T) T^{-1}|| \leq ||S -T || ||T^{-1}|| < ||T^{-1}||^{-1} ||T^{-1}|| = 1.
$$
Then by part (1), $ ST^{-1} $ is invertible with inverse $ U $. Hence, $ ST^{-1} U = I $ so $ S = U^{-1}T $ and since both $ U $ and $ T $ are invertible, $ S $ is invertible. Moreover, $ S $ is bounded since 
$$
    || S || \leq ||U^{-1}|| \cdot ||T|| < \infty.
$$
{{% /Proof %}}

{{% MathEnv "x" %}}
(Folland 5.11) If $ 0 < \alpha \leq 1 $, let $ \Lambda_\alpha([0,1]) $ be the space of Holder continuous functions of exponent $ \alpha $ on $ [0,1] $. That is, $ f \in \Lambda_\alpha([0,1]) $ iff $ ||f||\_{\Lambda\_{\alpha}} < \infty $, where 
$$
    ||f||\_{\Lambda\_{\alpha}} = ||f(0)|| + \operatorname{sup}\_{x,y \in [0,1], x \neq y} \frac{ |f(x)-f(y) }{ |x-y|^{\alpha} }.
$$
1. $ ||\cdot||\_{\Lambda\_{\alpha}} $ is a norm that makes $ \Lambda_\alpha([0,1]) $ into a Banach space.
2. Let $ \lambda_\alpha([0,1]) $ be the set of all $ f\in \Lambda_\alpha([0,1]) $ such that 
$$
    \frac{ |f(x)-f(y)| }{ |x-y|^\alpha } \to 0 \text{ as } x\to y, \text{ for all } y \in [0,1].
$$
If $ \alpha <1 $, $ \lambda_\alpha([0,1]) $ is an infinite-dimensional closed subspace of $ \Lambda_\alpha([0,1]) $. If $ \alpha = 1 $, $ \lambda_\alpha([0,1]) $ contains only constant functions.
{{% /MathEnv %}}

{{% MathEnv "x" %}}
Suppose that $ \mathcal{X} $ and $ \mathcal{Y} $ are normed vector spaces and $ T \in L(\mathcal{X},\mathcal{Y}) $. Let $ \mathcal{N}(T) = \left \\{ x \in X : Tx = 0 \right \\} $. 
1. $ \mathcal{N}(T) $ is a closed subspace of $ \mathcal{X} $.
2. There is a unique $ S \in L(\mathcal{X}/\mathcal{N}(T), \mathcal{Y}) $ such that $ T = S \circ \pi  $ where $ \pi \colon \mathcal{X}\to \mathcal{X}/\mathcal{N}(T) $ is the projection. Moreover, $ \left \lVert S \right \rVert = \left \lVert T \right \rVert $.
{{% /MathEnv %}}

{{% Proof %}}
1. Suppose $ \left \\{ x_n \right \\} \subseteq \mathcal{N}(T) $ converges to $ x \in X $. We aim to show that $ x \in \mathcal{N}(T) $. Then let $ \varepsilon > 0 $ and $ N $ sufficiently large for $ \left \lVert x_n-x \right \rVert < \varepsilon/\left \lVert T \right \rVert $ to hold for all $ n \geq N $. Then:
$$
    \left \lVert Tx \right \rVert = \left \lVert Tx - Tx_N \right \rVert \leq \left \lVert T \right \rVert \left \lVert x_N - x \right \rVert < \left \lVert T \right \rVert \cdot \frac{ \varepsilon }{ \left \lVert T \right \rVert } = \varepsilon.
$$
Thus $ \left \lVert Tx \right \rVert = 0 $ so $ Tx = 0 $ so $ x \in \mathcal{N}(T) $ as desired.
2. We claim $ S(x+\mathcal{N}(T)) = Tx$ satisfies this property. First we show that $ S $ is well-defined. Suppose $ x,y \in \mathcal{X} $ are such that $ x - y \in \mathcal{N}(T) $. Then: 
$$
    \begin{align*}
        S(x+\mathcal{N}(T)) &= Tx = Tx - T(x-y) \\\\
        &= T(x-x) + Ty = Ty = S(y + \mathcal{N}(T)).
    \end{align*}
$$
Hence $ S $ is well-defined. It is then clearly linear and satisfies $ T = S \circ \pi $. What remains to be shown is that $ S $ is unique. This, however, follows immediately from the surjectivity (and hence right-cancellation) of $ \pi $ with any other map satisfying our projection-composition property.
{{% /Proof %}}
