---
title: "Complex Differentiation"
date: 2023-07-20T14:41:11-07:00
draft: false
math: true
tags: 
categories: 
partOfText: ["Math 246A"]
---
---
---
---
## Exercises

{{% MathEnv "x" %}}
[Tao 1.9] (Ratio test) If $\sum_{n=0}^{\infty} a_n (z-z_0)^n $ is a formal power series with the $ a_n $ non-zero for all sufficiently large $ n $, show that the radius of convergence $ R $ of the series obeys the bounds 
$$
    \liminf_{n \to \infty} \frac{ |a_n| }{ |a_{n+1} | } \leq R \leq \limsup_{n\to \infty} \frac{ |a_n| }{ |a_{n+1}| }.
$$
In particular, if the limit $\lim_{n \to \infty} \frac{ |a_n| }{ |a_{n+1}| }$ exists, then it is equal to $ R $. {{%nl%}}{{%nl%}}

Given examples to show that strict inequality can hold in either of the bounds. (For an extra challenge, provide an example where both bounds are simultaneously strict.)
{{% /MathEnv %}}

{{% MathEnv "x" %}}
[Tao 1.14] 
1. (Summation by parts formula) Let $ a_0, a_1, a_2, \ldots, a_N $ be a finite sequence of complex numbers, and let $ A_n \coloneqq a_0 + \cdots + a_n $ be the partial sums for $ n=0,\ldots,N $. Show that for any complex numbers $ b_0, \ldots, b_N $, that 
$$
   \sum_{n=0}^{N}a_nb_n =\sum_{n=0}^{N-1} A_n(b_n-b_{n+1}) + b_NA_N.
$$
2. Let $ a_0, a_1, \ldots $ be a sequence of complex numbers such that $\sum_{n=0}^{\infty} a_n $ is convergent (not necessarily absolutely) to zero. Show that for any $ 0 < r< 1 $, the series $\sum_{n=0}^{\infty}a_n r^n  $is absolutely convergent, and 
$$
  \lim_{r \uparrow 1}\sum_{n=0}^{\infty}a_n r^n = 0.
$$
(Hint: use summation by parts and a limiting arugment to express $\sum_{n=0}^{\infty} a_n r^n $ in terms of the partial sums $ A_n = a_0 + \cdots + a_n $.)
3. (Abel's theorem) Let $ F(z) =\sum_{n=0}^{\infty}a_n(z-z_0)^n $ be a power series with a finite positive radius of convergence $ R $, and let $ z_1 \coloneqq z_0 + Re^{i\theta} $ be a point on the boundary of the disk fo convergence at which the series $\sum_{n=0}^{\infty}a_n(z_1-z_0)^n $ converges (not necessarily absolutely). Show that $\lim_{r \uparrow R} F(z_0 + re^{i\theta}) = F(z_1)$. (Hint: use various translations and rotations to reduce to the case considered in (2).)
{{% /MathEnv %}}

{{% MathEnv "x" %}}
[Tao 1.17] (Taylor expansions and uniqueness of power series) Let $ F(z) =\sum_{n=0}^{\infty} a_n(z-z_0)^n $ be a power series with a positive radius of convergence. Show that $ a_n = \frac{ 1 }{ n! } F^{(n)}(z_0) $, where $ F^{(n)} $ denotes the $ n^\text{th} $ complex derivative of $ F $. In particular, if $ G(z) =\sum_{n=0}^{\infty}b_n (z-z_0)^n $ is another power series around $ z_0 $ with a positive radius of convergence which agrees with $ F $ on some neighborhood $ U $ of $ z_0 $ (thus, $ F(z) = G(z) $ for all $ z \in U $), show that the coefficients of $ F $ and $ G $ are identical, that is to say that $ a_n = b_n $ for all $ n \geq 0 $.
{{% /MathEnv %}}

{{% MathEnv "x" %}}
[Tao 1.23] Let $ U $ be an open subset of $ \mathbb{C} $, and let $ f \colon U \to \mathbb{C} $ be a Fre'chet differentiable function. Define the Wirtinger derivatives $ \frac{\partial f}{\partial z} $, $ \frac{\partial f}{\partial \overline{z}}\colon U \to \mathbb{C} $, 
$$\begin{align*}
    \frac{\partial f}{\partial z} &\coloneqq \frac{ 1 }{ 2 } \left ( \frac{\partial f}{\partial x} + \frac{ 1 }{ i } \frac{\partial f}{\partial y}\right ) \\\\
    \frac{\partial f}{\partial \overline{z}} &\coloneqq \frac{ 1 }{ 2 } \left ( \frac{\partial f}{\partial x} - \frac{ 1 }{ i } \frac{\partial f}{\partial y}\right ) .
\end{align*}$$

1. Show that $ f $ is holomorphic on $ U $ if and only if the Wirtinger derivative $ \frac{\partial f}{\partial \overline{z}} $ vanishes identically on $ U $. 
2. If $ f $ is given by a polynomial 
$$
    f(z) =\sum_{n,m \geq 0 : n+m \leq d} c_{n,m} z^n \overline{z}^m 
$$
in both $ z $ and $ \overline{z} $ for some complex coefficients $ c_{n,m} $ and some natural number $ d $, show that 
$$
    \frac{\partial f}{\partial z}(z) =\sum_{n,m \geq 0 : n+m \leq d} c_{n,m} (nz^{n-1})\overline{z}^m
$$
and  
$$
    \frac{\partial f}{\partial \overline{z}}(z) =\sum_{n,m \geq 0 : n+m \leq d} c_{n,m} z^n (m \overline{z}^{m-1}).
$$
(Hint: first establish a Leibniz/product rule for Wirtinger derivatives.) Conclude in particular that $ f $ is holomorphic if and only if $ c_{n,m}  $ vanishes whenever $ m \geq 1 $ (i.e., $ f $ does not contain any terms that involve $ \overline{z} $).
3. If $ z_0 $ is a point in $ U $, show that one has the taylor expansion 
$$
    f(z) = f(z_0) + \frac{\partial f}{\partial z}(z_0)(z-z_0) + \frac{\partial f}{\partial \overline{z}}(z_0)  \overline{(z-z_0)} + o(|z-z_0|)
$$
as $ z \to z_0 $, where $ o(|z-z_0|) $ denotes quantity of the form $ |z-z_0| c(z) $, where $ c(z) $ goes to zero as $ z $ goes to $ z_0 $. Conversely, show that this property determines the numbers $ \frac{\partial f}{\partial z}(z_0) $ and $ \frac{\partial f}{\partial \overline{z}}(z_0) $ uniquely (and thus can be used as an alternate definition of the Wirtinger derivatives).
{{% /MathEnv %}}

{{% MathEnv "x" %}}
[Tao 1.27] Recall the Wirtinger derivatives defined in the previous exercise. 
1. If $ f \colon U \to \mathbb{C} $ is twice continuously differentiable on an open subset $ U $ of $ \mathbb{C} $, show that 
$$
    \Delta f = 4 \frac{\partial }{\partial z} \frac{\partial f}{\partial \overline{z}} = 4 \frac{\partial }{\partial \overline{z}} \frac{\partial f}{\partial z}.
$$
Use this to give na alternate proof that ($ C^2 $) holomorphic functions are harmonic. 
2. If $ f $ is gven by a polynomial 
$$
    f(z) =\sum_{n,m \geq 0 : n+m \leq d}^{} c_{n,m} z^n \overline{z}^m
$$      
in both $ z $ and $ \overline{z} $ for some complex coefficients $ c_{n,m} $ and some natural number $ d $, show taht $ f $ is harmonic on $ \mathbb{C} $ if and onlyif $ c_{n,m} $ vanishes whenever $ n $ and $ n $ are both positive (i.e., $ f $ only contains terms $ c_{n,0}z^n  $ or $ c_{0,m}\overline{z}^m $ that only involve one of $ z $ or $ \overline{z} $).
3. If $ u \colon U \to \mathbb{R} $ is a real polynomial 
$$
    u(x+iy) =\sum_{n,m \geq 0 : n+m \leq d}^{a_{n,m}x^ny^m}
$$
in $ x $ and $ y $ for some real coefficients $ a_{n,m} $ and some natural number $ d $, show that $ u $ is harmonic if and only if it is the real part of a polynomial $ f(z) =\sum_{n=0}^{d} c_n z^n $ of one complex variable $ z $. 
{{% /MathEnv %}}

{{% MathEnv "x" %}}
[S&S 1.13] Suppose that $ f $ is holomorphic in a region $ \Omega $. Prove htat in any one of the following cases: 
1. $ \operatorname{Re}(f) $ is constant;
2. $ \operatorname{Im}(f) $ is constant;
3. $ |f| $ is constant;{{%nl%}}
one can conclude that $ f $ is constant.
{{% /MathEnv %}}
{{% Proof %}}
1. Suppose $ \operatorname{Re}(f) $ is constant. Then, if $ f = u+iv $, $ u_x=u_y = 0 $. But by the Cauchy-Riemann equations $ 0= u_x=v_y $ and $ 0=u_y=-v_x $ so the imaginary part of $ f $ is also constant. Hence $ f $ is constant.     
2. Similar to the previous part.
3. Suppose $ |f| $ is constant. Without loss of generality, suppose $ f $ is nonzero. Hence $ |f|^2 $ is also constant. Then if $ f=u+iv $, $ u^2+v^2 $ is constant in both variables, so: 
$$
    \begin{cases}
    2u u_x + 2v v_x &= 0 \\\\
    2u u_y + 2 v v_y &= 0
    \end{cases}
    \quad
    \stackrel{\text{by C-R Eqns}}{\implies}
    \quad
    \begin{cases}
    2 u u_x - 2 v u_y&= 0 \\\\
    2 v u_x + 2u u_y &= 0 
    \end{cases}.
$$
We then get the following system of equations (in matrix form): 
$$
    \begin{bmatrix}
    2u & -2v \\\\
    2v & 2u
    \end{bmatrix}
    \begin{bmatrix}
    u_x \\\\ u_y
    \end{bmatrix}
    =0.
$$
Taking the determinant we get $ 4(u^2+v^2) $, so since $ f \neq 0 $ (by hypothesis), $ 4(u^2+v^2) \neq 0 $ so that the matrix is invertible and hence has trivial kernel. Hence $ u_x=u_y=0 $. Then by the C-R Equations, $ v_x=v_y =0 $. Thus $ f $ is constant as desired.
{{% /Proof %}}
