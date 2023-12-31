---
title: "Problem Set 3"
date: 2023-12-31T06:05:59Z
draft: false
layout: "problem-set"
summary: "The third problem set for my Folland reading."
---

{{% MathEnv "x" %}}
(Folland 5.51) A vector subspace of a normed vector space $ \mathcal{X} $ is norm-closed iff it is weakly closed. (However, a norm-closed subspace of $ \mathcal{X}^\* $ need not be weak*-closed unless $ \mathcal{X} $ is reflexive; see exercise 52d.)
{{% /MathEnv %}}


{{% MathEnv "x" %}}
(Folland 5.53) Suppose that $ \mathcal{X} $ is a Banach space and $ \left \\{ T_n \right \\} $, $ \left \\{ S_n \right \\} $ are sequences in $ L(\mathcal{X}, \mathcal{X}) $ such that $ T_n \to T $ strongly and $ S_n \to S $ strongly.
1. If $ \left \\{ x_n \right \\} \subseteq \mathcal{X} $ and $ \left \lVert x_n-x \right \rVert \to 0 $, then $ \left \lVert T_n x_n - Tx \right \rVert \to 0 $. (Use Exercise 47a.)
2. $ T_n S_n \to TS $ strongly.
{{% /MathEnv %}}


{{% MathEnv "x" %}}
(Folland 5.54) For any nonempty set $ A $, $ \ell^2(A) $ is complete.
{{% /MathEnv %}}

{{% MathEnv "x" %}}
(Folland 5.56) If $ E $ is a subset of a Hilbert space $ \mathcal{H} $, $ (E^\perp)^\perp $ is the smallest closed subspace of $ \mathcal{H} $ containing $ E $. 
{{% /MathEnv %}}


{{% MathEnv "x" %}}
(Folland 4.58) Let $ \mathcal{M} $ be a closed subspace of the Hilbert space $ \mathcal{H} $, and for $ x \in \mathcal{H} $ let $ Px $ be the element of $ \mathcal{M} $ such that $ x- Px \in \mathcal{M}^\perp $ as in Theorem 5.24.
1. $ P \in L(\mathcal{H}, \mathcal{H}) $, and in the notation of Exercise 57, we have $ P^\* = P $, $ P^2 = P $, $ \mathcal{R}(P) = \mathcal{M} $, and $ \mathcal{N}(P) = \mathcal{M}^\perp $. $ P $ is called the orthogonal projection onto $ \mathcal{M} $. 
2. Conversely, suppose that $ P \in L(\mathcal{H}, \mathcal{H}) $, satisfies $ P^2 = P^\* = P $. Then $ \mathcal{R}(P) $ is closed and $ P $ is the orthogonal projection on $ \mathcal{R}(P) $.
3. If $ \left \\{ u_\alpha \right \\} $ is an orthonormal basis for $ \mathcal{M} $, then $ Px = \sum \left \langle x, u_\alpha \right \rangle u_\alpha $.
{{% /MathEnv %}}


{{% MathEnv "x" %}}
(Folland 4.59) Every closed convex set $ K $ in a Hilbert space has a unique element of minimal norm. (If $ 0 \in \mathcal{K} $, the result is trivial; otherwise, adapt the proof of Theorem 5.24.)
{{% /MathEnv %}}

{{% MathEnv "x" %}}
(Folland 5.63) Let $ \mathcal{H} $ be an infinite-dimensional Hilbert space.
1. Every orthonormal sequence in $ \mathcal{H} $ converges weakly to $ 0 $. 
2. The unit sphere $ S = \left \\{ x : \left \lVert x \right \rVert = 1 \right \\} $ is weakly dense in the unit ball $ B = \left \\{ x : \left \lVert x \right \rVert \leq 1 \right \\} $. (In fact, every $ x \in B $ is the weak limit of a sequence in $ S $.)
{{% /MathEnv %}}


{{% MathEnv "x" %}}
(Folland 5.67) (The Mean Ergodic Theorem) Let $ U $ be a unitary operator on the Hilbert space $ \mathcal{H} $, $ \mathcal{M} = \left \\{ x : Ux = x \right \\} $, $ P $ the orthogonal projection onto $ \mathcal{M} $ (Exercise 58), and $ S_n = n^{-1} \sum_0^{n-1} U^j $. Then $ S_n \to P $ in the strong operator topology. (If $ x \in \mathcal{M} $, then $ S_n x = x $; if $ x = y - Uy $ for some $ y $, then $ S_n x \to 0 $. By Exercise 57d, $ \mathcal{M} = \left \\{ x : U^\* x = x \right \\} $. Apply Exercise 57c with $ T = I-U $.)
{{% /MathEnv %}}


