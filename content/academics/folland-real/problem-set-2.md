---
title: "Problem Set 2"
date: 2023-12-31T01:50:32Z
draft: false
layout: "problem-set"
summary: "The second problem set for my Folland reading."
---

problems: 19, 22, 25, 30, 33, 36, 38, 48

{{% MathEnv "x" %}}
(Folland 5.19) Let $ \mathcal{X} $ be an infinite-dimensional normed vector space.
1. There is a sequence $ \left \\{ x_j \right \\}  $ in $ \mathcal{X} $ such taht $ \left \lVert x_j \right \rVert = 1 $ for all $ j $ and $ \left \lVert x_j - x_k \right \rVert \geq 1/2 $ for $ j \neq k $. (Construct $ x_j $ inductively, using exercises 12b and 18). 
2. $ \mathcal{X} $ is not locally compact.
{{% /MathEnv %}}


{{% MathEnv "x" %}}
(Folland 5.22) Suppose that $ \mathcal{X} $ and $ \mathcal{Y} $ are normed vector spaces and $ T \in L(\mathcal{X}, \mathcal{Y}) $. 
1. Define $ T\^\dagger \colon \mathcal{Y}^\* \to \mathcal{X}^\* $ by $ T^\dagger f = f \circ T $. Then $ T^\dagger \in L(\mathcal{Y}^\*, \mathcal{X}^\*) $ and $ \left \lVert T^\dagger \right \rVert = \left \lVert T \right \rVert $. $ T^\dagger $ is called the adjoint or transpose of $ T $. 
2. Applying the construction in (a) twice, one obtains $ T^{\dagger\dagger} \in L(\mathcal{X}^{\*\*}, \mathcal{Y}^{\*\*}) $. If $ \mathcal{X} $ and $ \mathcal{Y} $ are identified with their natural images $ \widehat{X} $ and $ \widehat{Y} $ in $ \mathcal{X}^{\*\*} $ and $ \mathcal{Y}^{\*\*} $, then $ T^{\dagger\dagger}\rvert \mathcal{X} = T $. 
3. $ T^\dagger $ is injective iff the range of $ T $ is dense in $ \mathcal{Y} $.
4. If the range of $ T^\dagger $ is dense in $ \mathcal{X}^\* $, then $ T $ is injective; the converse is true if $ \mathcal{X} $ is reflexive.
{{% /MathEnv %}}


{{% MathEnv "x" %}}
(Folland 5.25) If $ \mathcal{X} $ is a Banach space and $ \mathcal{X}^\* $ is separable, then $ \mathcal{X} $ is separable. (Let $ \left \\{ f_n \right \\}_1^\infty $ be a countable dense subset of $ \mathcal{X}^\* $. For each $ n $ choose $ x_n \in \mathcal{X} $ with $ \left \lVert x_n \right \rVert = 1 $ and $ \left | f_n(x_n) \right | \geq \left \lVert f_n \right \rVert/2 $. Then the linear combinations of $ \left \\{ x_n \right \\}_1^\infty $ are dense in $ \mathcal{X} $.) _Note:_ Separability of $ \mathcal{X} $ does not imply separability of $ \mathcal{X}^\* $.
{{% /MathEnv %}}


{{% MathEnv "x" %}}
(Folland 5.30) Let $ \mathcal{Y} = C([0,1]) $ and $ \mathcal{X} = C^1([0,1]) $, both equipped with the uniform norm. 
1. $ \mathcal{X} $ is not complete.
2. The map $ (\mathrm d /\mathrm d x) \colon \mathcal{X} \to \mathcal{Y} $ is closed (see Exercise 9) but not bounded.
{{% /MathEnv %}}


{{% MathEnv "x" %}}
(Folland 5.33) There is no slowest rate of decay of the terms of an absolutely convergent series; that is, there is no sequence $ \left \\{ a_n \right \\} $ of positive numbers such that $ \sum a_n |c_n| < \infty $ iff $ \left \\{ c_n \right \\} $ is bounded. (The set of bounded sequences is the space $ B(\mathbb{N}) $ of bounded functions on $ \mathbb{N} $, and the set of absolutely summable sequences is $ L^1(\mu) $ where $ \mu $ is the counting measure on $ \mathbb{N} $. If such an $ \left \\{ a_n \right \\} $ exists, consider $ T \colon B(\mathbb{N}) \to L^1(\mu) $ defined by $ Tf(n) = a_n f(n) $. The set of $ f $ such that $ f(n) = 0 $ for all but finitely many $ n $ is dense in $ L^1(\mu) $ but not in $ B(\mathbb{N}) $.)
{{% /MathEnv %}}

{{% MathEnv "x" %}}
(Folland 5.36) Let $ \mathcal{X} $ be a separable Banach space and let $ \mu $ be the counting measure on $ \mathbb{N} $. Suppose that $ \left \\{ x_n \right \\}_1^\infty $ is a countable dense subset of the unit ball of $ \mathcal{X} $, and define $ T \colon L^1(\mu) \to \mathcal{X} $ by $ Tf = \sum_1^\infty f(n)x_n $.
1. $ T $ is bounded.
2. $ T $ is surjective.
3. $ \mathcal{X} $ is isomorphic to a quotient space of $ L^1(\mu) $. (Use Exercise 35.)
{{% /MathEnv %}}


{{% MathEnv "x" %}}
(Folland 5.38) Let $ \mathcal{X} $ and $ \mathcal{Y} $ be Banach spaces, and let $ \left \\{ T_n \right \\} $ be a sequence in $ L(\mathcal{X},\mathcal{Y}) $ such that $ \lim T_n x $ exists for every $ x \in \mathcal{X} $. Let $ Tx = \lim T_n x $; then $ T \in L(\mathcal{X}, \mathcal{Y}) $.
{{% /MathEnv %}}


{{% MathEnv "x" %}}
(Folland 5.48) Suppose that $ \mathcal{X} $ is a Banach space.
1. The norm-closed unit ball $ B = \left \\{ x \in \mathcal{X} : \left \lVert x \right \rVert \leq 1 \right \\} $ is also weakly closed. (Use Theorem 5.8d.) 
2. If $ E \subseteq \mathcal{X} $ is bounded (with respect to the norm), so is its weak closure.
3. If $ F \subseteq \mathcal{X}^\* $ is bounded (with respect to the norm), so is its weak* closure.
4. Every weak*-Cauchy sequence in $ \mathcal{X}^\* $ converges. (Use Exercise 38.)
{{% /MathEnv %}}


