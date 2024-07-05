---
title: "Complex Differentiation"
date: 2024-06-29T11:48:12-07:00
draft: false
type: "page"
layout: "note"
summary: "An introduction to complex differentiability and some explanation for why it's so strong. Plus some exercises."
---

If $ V \subseteq \mathbb{C} $ is open, we say a function $ f \colon V \to \mathbb{C} $ is {{% tdf "complex-differentiable" %}}, or {{% tdf "holomorphic" %}}, at a point $ z \in V $ if the usual difference quotient converges. That is, 
$$\begin{equation}
    f^\prime(z) = \lim_{h \to 0} \frac{ f(z+h)-f(z) }{ h }
\end{equation}$$
where, of course, $ h \in \mathbb{C} \setminus \left \\{  0 \right \\} $.[^domain of limit]
{{%nl%}}{{%nl%}}

The incredible thing about complex differentiation is how strong it is! 
We'll see more on _why_ this is true with the rest of this post, but two fascinating facts are:
- Being one-time complex-differentiable implies you are infinitely-many times complex-differentiable;
- A function is complex-smooth if and only if it is analytic (analytic meaning locally represented by a convergent power series).


{{% MathEnv "x" "x:landau" %}}
Suppose that $ f $ is defined in a neighborhood of the complex number $ z $.
Show that $ f $ is complex-differentiable at $ z $ if and only if there exists a complex number $ a $ such that 
$$\begin{equation}
    f(z+h) = f(z) + ah + o(h) \quad \text{as} \quad h \to 0
\end{equation}$$
(where we are using Landau's Little $ o $-notation, i.e., our above equation means that 
$$\begin{equation}
    f(z+h) = f(z) + ah + E(h)
\end{equation}$$
for some "error term" $ E(h) $ satisfying $ E(0) = 0 $ and 
$$\begin{equation}
    \lim_{h \to 0} \frac{ \left | E(h) \right |  }{ \left | h \right |  } = 0.
\end{equation}$$
This is also just good to know in general.)
{{% /MathEnv %}}
{{% Proof %}}
($\Rightarrow$) 
Suppose $ f $ is complex-differentiable at $ z $. 
Then there exists a complex number $ a $ such that for all $ \varepsilon > 0 $, there exists $ \delta > 0 $ such that 
$$\begin{equation}
0 < |h| < \delta \implies \left | \frac{ f(z+h) - f(z) }{ h } - a \right | < \varepsilon.
\end{equation}$$
Thus taking $ h $ in this neighborhood, we see that we have an error term $ E $ such that
$$\begin{equation}
    f(z+h) = f(z) + ah + E(h)
\end{equation}$$
and
$$\begin{equation}
    |E(h)| < \varepsilon |h| \quad \text{and} \quad E(0) = 0 
\end{equation}$$
Hence, 
$$\begin{equation}
    f(z+h) = f(z) + ah + o(h)
\end{equation}$$
as desired.
{{%nl%}}{{%nl%}}

($\Leftarrow$)
Suppose that there exists a complex number $ a $ such that 
$$\begin{equation}
    f(z+h) = f(z) + ah + o(h) \quad \text{as} \quad h \to 0.
\end{equation}$$
By definition, we know then that we have an error term $ E(h) $ such that 
$$\begin{equation}
    f(z+h) = f(z) + ah + E(h)
\end{equation}$$
with $ E(0) = 0 $ and $ |E(h)/h| \to 0 $ as $ h \to 0 $.
It immediately follows from our properties of $ E $ that for all $ \varepsilon > 0  $, there exists a $ \delta > 0 $ such that 
$$\begin{equation}
    0 < |h| < \delta \implies |E(h)| < \varepsilon |h|,
\end{equation}$$
whereby we get 
$$\begin{equation}
    |f(z+h) - f(z) - ah| = |E(h)| < \varepsilon |h|.
\end{equation}$$
Thus: 
$$\begin{equation}
    \left | \frac{ f(z+h)-f(z) }{ h } - a \right | < \varepsilon,
\end{equation}$$
so $ f $ is complex-differentiable at $ z $ as desired.
{{% /Proof %}}

## Complex numbers as matrices
Recall that the complex numbers can be seen as ordered pairs of real numbers $ (x,y) \in \mathbb{R}^2 $ written $ x+iy $.
Further recall that they have the usual pointwise addition defined on them, $ (x+iy)+(a+ib) = (x+a) + i (y+b) $, and that they have a special multiplication defined on them: 
$$\begin{equation}
    (x+iy) \cdot (a+ib) = (xa - yb) + i (xb + ya).
\end{equation}$$
This ends up endowing $ \mathbb{C} $ with a _field_ structure (i.e., we have additive and multiplicative identities, and both addition and multiplication have our usual properties).
{{%nl%}}{{%nl%}}

We may also represent these numbers as $ 2 \times 2 $ matrices with real entries.
Indeed, we may identify[^kyle]
$$\begin{equation}
    x+iy \longleftrightarrow
    \begin{pmatrix}
    x & -y \\\\
    y & x
    \end{pmatrix}.
\end{equation}$$

## Differentiation in $ \mathbb{R}^2 $
Consider a function $ F \colon \mathbb{R}^2 \to \mathbb{R}^2 $.
If the function is differentiable, the derivative takes the form of the Jacobian, i.e., if $ F = (F_1, F_2) $, 
$$\begin{equation}
    D F = 
    \begin{pmatrix}
    \partial_x F_1 & \partial_y F_1 \\\\
    \partial_x F_2 & \partial_y F_2 
    \end{pmatrix}.
\end{equation}$$

## Requiring derivatives are complex
Recalling our first section, it is clear that we may identify functions $ f \colon \mathbb{C} \to \mathbb{C} $ with functions $ F \colon \mathbb{R}^2 \to \mathbb{R}^2 $.
This then allots us the opportunity to study what something being complex-differentiable _would_ mean.
Indeed, the following two subsections explore this idea and make the same conclusion: the existence of the _Cauchy-Riemann Equations_.
{{%nl%}}{{%nl%}}

Consider a function $ f \colon \mathbb{C} \to \mathbb{C} $ given by $ f = u+iv $, where $ u,v \colon \mathbb{R}^2 \to \mathbb{R}^2 $ (obviously with us identifying $ \mathbb{C} $ with $ \mathbb{R}^2 $).
Then, taking the derivative of $ f $ in the $ \mathbb{R}^2 $-sense, we get that 
$$\begin{equation}
    Df = 
    \begin{pmatrix}
    \partial_x u & \partial_y u \\\\
    \partial_x v & \partial_y v
    \end{pmatrix}.
\end{equation}$$
But if we require the result of this differentiation to always be a complex number, we immediately get two constraints, known as the {{% tdf "Cauchy-Riemann Equations" %}} (AKA the _C-R Equations_):[^partial notation]
$$\begin{equation}
    \begin{cases}
    u_x &= v_y \\\\
    u_y &= -v_x
    \end{cases}
\end{equation}$$
A quick way to recall these is by thinking about how matching indices are positive, and differing indices are negative, i.e., $ u $ is the first component and $ v $ is the second, so $ u_x = v_y $ with no negative sign (similarly for $ u_y = - v_x $).
{{%nl%}}{{%nl%}}

From this we also get a nice (and hopefully clear) consequence of the C-R Equations being satisfied: equivalence to complex differentiability!

{{% MathEnv "prop" "prop:complex-diff-cond" %}}
Suppose $ V \subseteq \mathbb{C} $ is open and that $ z \in V $. 
Then if $ f = u + iv $ is complex-differentiable at $ z $ if and only if the corresponding $ \mathbb{R}^2 \to \mathbb{R}^2 $ map is differentiable and the C-R Equations are satisfied.
{{% /MathEnv %}}

### An important example and exercise
{{% MathEnv "ex" "ex:real-diff-but-not-holo" %}}
There are functions which are real-differentiable but NOT complex-differentiable.
{{% /MathEnv %}}
{{% Proof %}}
Take for example: $ f(x+iy) = x $. We can then identify $ f $ with the function $ F(x,y) = x $. Clearly, then, 
$$\begin{equation}
    DF = 
    \begin{pmatrix}
    1 & 0 \\\\
    0 & 0
    \end{pmatrix}.
\end{equation}$$
Hence the C-R Equations are not satisfied and our function, although real-differentiable, is NOT complex-differentiable.
{{% /Proof %}}


{{% MathEnv "x" "x:C-R-necessary" %}}
Define $ f \colon \mathbb{C} \to \mathbb{C} $ by 
$$\begin{equation}
    f(x+iy) = 
    \begin{cases}
    0 \quad& x = 0 \\\\
    0 \quad& y = 0 \\\\
    1 \quad& \text{otherwise}.
    \end{cases}
\end{equation}$$
Show that $ f $ satisfies the Cauchy-Riemann equations at the origin even though it is NOT complex-differentiable at the origin.
{{%nl%}}{{%nl%}}

_Hint._ By our if and only if from earlier, this function must then fail to be a $ \mathbb{R}^2 $-differentiable.
{{% /MathEnv %}}
{{% Proof %}}
It is clear that 
$$\begin{equation}
    u_x(0,0) = 0 = v_y(0,0) \quad \text{and} \quad u_y(0,0) = 0 = -v_x(0,0),
\end{equation}$$
so the C-R Equations are satisfied, but it is also clear that (although the partials exist) $ f $ is not $ \mathbb{R}^2 $-differentiable.
{{% /Proof %}}

## Extra exercises
{{% MathEnv "x" "x:holo-implies-cts" %}}
Suppose that $ f $ is complex-differentiable at $ z $. Show that $ f $ is continuous at $ z $.
{{% /MathEnv %}}
{{% Proof %}}
Suppose that $ f $ is complex-differentiable at $ z $.
Let $ \varepsilon > 0 $ be smaller than $ 1 $. 
Then there exists some $ 0 < \delta < 1 $ such that 
$$\begin{equation}
    0 < |w-z| < \delta \implies \left | \frac{ f(w)-f(z) }{ w-z } - f^\prime(z) \right | < \frac{ \varepsilon }{2 |w-z|}
\end{equation}$$
so 
$$\begin{equation}
|f(w)-f(z) - (w-z)f^\prime(z)| < \frac{ \varepsilon }{ 2|w-z| }|w-z| < \frac{ \varepsilon }{ 2 }
\end{equation}$$
Taking $ |w-z| < \min \left \\{ \delta, \varepsilon|f^\prime(z)|^{-1}/2 \right \\}  $, 
$$\begin{align}
|f(w)-f(z)| &\leq |f(w)-f(z) - (w-z)f^\prime(z)| + |w-z||f^\prime(z)| \\\\
&< \frac{ \varepsilon }{ 2 } + \frac{ \varepsilon }{ 2 } = \varepsilon,
\end{align}$$
so $ f $ is continuous! :) 
{{% /Proof %}}

{{% MathEnv "x" "x:Ahlfors-1.2.1." %}}
(Ahlfors 1.2.1.) If $ g(w) $ and $ f(z) $ are holomorphic, show that $ g(f((z)) $ is also holomorphic.
{{% /MathEnv %}}
{{% Proof %}}
Fix $ z_0 $ in the domain of $ g \circ f $. 
Let $ h $ be small.
Then:
1. by our [Landau's Little $ o $ notation exercise](#x:landau), $ f(z_0+h) = f(z_0) + f^\prime(z_0)h + o(h) $ and similarly for $ g $,
2. the facts that $ o(h) + o(h) = o(h) $ and $ o(ch) = o(h) $ for constant $ c $, and
3. $ o(o(h)) = o(h) $,
we get that:
$$\begin{align}
    g(f(z_0+h)) &= g(f(z_0) + \underbrace{f^\prime(z_0)h + o(h)}_{(*)}) \\\\
    &= g(f(z_0)) + g^\prime(f(z_0))[f^\prime(z_0) h + o(h)] \\\\
    &\qquad+ o(f^\prime(z_0)h + o(h)) \\\\
    &= g(f(z_0)) + g^\prime(f(z_0)) f^\prime(z_0) h + o(h).
\end{align}$$
(Where we used (\*) to indicate what the small error term was in our expansion.)
Thus we have shown $ g\circ f $ is holomorphic, with derivative $ g^\prime(f(z_0))f^\prime(z_0) $, by our Landau exercise.
{{% /Proof %}}
{{% MathEnv "x" %}}
(Ahlfors 1.2.3.) Find the most general harmonic polynomial of the form $ ax^3 + bx^2 y + cxy^2 + dy^3 $. Determine the conjugate harmonic function and the corresponding holomorphic function by integration and by the formal method. 
{{% /MathEnv %}}

{{% MathEnv "x" "Ahlfors-1.2.4" %}}
(Ahlfors 1.2.4.) Show that an holomorphic function cannot have a constant absolute value without reducing to a constant.
{{% /MathEnv %}}
{{% Proof %}}
Suppose $ f $ is holomorphic and that $ f $ has constant magnitude $ c \in \mathbb{R} $.
Without loss of generality, suppose $ c \neq 0 $. 
{{%nl%}}{{%nl%}}

Recall that if $ f = u + iv $, $ |f|^2 = u^2 + v^2 $. 
Moreover, note that $ |f| $ is constant iff $ |f|^2 $ is constant. 
Thus, we henceforth study $ |f|^2 $ in place of $ |f| $. 

First observe that we then have that 
$$\begin{equation}
    \frac{\mathrm d (u^2+v^2)}{\mathrm d x} = 0 \quad \text{and} \quad \frac{\mathrm d (u^2+v^2)}{\mathrm d y} = 0.
\end{equation}$$
We then get two equations: 
$$\begin{equation}
    \begin{cases}
        u u_x + v v_x &= 0 \\\\
        u u_y + v v_y &= 0
    \end{cases}
\end{equation}$$
which becomes
$$\begin{equation}
    \begin{cases}
        u^2 u_x + uv v_x &= 0 \\\\
        -uv v_x + v^2 u_x &= 0
    \end{cases}
\end{equation}$$
after using the C-R Equations and multiplying by $ u $ and $ v $. 
Summing these two equations, we get that 
$$\begin{equation}
    0= (u^2+v^2)u_x = c u_x 
\end{equation}$$
so that $ u_x = 0 $. 
Similarly, if we run the same argument with the function $ g(z) = f(iz) $, we get that $ u_y = 0 $. 
Then by the C-R Equations, $ f^\prime(z)=0 $, and we are done.
{{% /Proof %}}

{{% MathEnv "x" "x:Ahlfors-1.2.5" %}}
(Ahlfors 1.2.5.) Prove rigorously that the function $ f(z) $ and $ \overline{f(\overline{z})} $ are simultaneously holomorphic.
{{% /MathEnv %}}
{{% Proof %}}
We only consider the forward direction as both are almost exactly the same.
Fix some $ z_0 $ in the domain of $ g(z) = \overline{f(\overline{z})} $.
Then, if we let $ a = \overline{f^\prime(\overline{z_0})} $ and take $ h \in \mathbb{C} $ to be small, we get
$$\begin{align}
    g(z_0+h) &= \overline{f(\overline{z_0+h})} = \overline{f(\overline{z_0} + \overline{h})} \\\\
    &= \overline{f(\overline{z_0}) + f^\prime(\overline{z_0}) \overline{h} + o(\overline{h})} \\\\
    &= g(z_0) + a h + o(h).
\end{align}$$
{{% /Proof %}}










[^domain of limit]: In general we will not be specifying the set in which we are taking the limit over, but I felt it is worthwhile to do it the first time.

[^kyle]: I was discussing this idea with my roommate Kyle he had a good bit of intuition for this fact: complex numbers can be treated as rotations and dilations, and a rotation matrix (with some scaling factors) takes this form!

[^partial notation]: Here we use the notation $ u_x $ for $ \partial u/\partial x $ because it looks a lot prettier. :)

