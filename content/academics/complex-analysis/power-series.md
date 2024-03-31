---
title: "Power Series"
date: 2024-03-30T00:15:11-07:00
draft: true
type: "page"
layout: "note"
summary: "An introduction to power series as objects in their own right."
---

As we will see later, a function is complex-differentiable iff it is complex-smooth iff it is analytic, so understanding power series will be very important.[^strength of complex differentiability]
This is why, even though we have not explored differentiability very much, we will study power series on their own.


## Convergence in Disks
We first have to define two basic objects, open and closed disks.
If $ z \in \mathbb{C} $ and $ r > 0 $, then 
1. the {{% tdf "open disk" %}} is the set $ D(z,r) = \left \\{ w \in \mathbb{C} : |z-w| < r \right \\}  $, and
2. the {{% tdf "closed disk" %}} is the set $ \overline{D}(z,r) = \left \\{ w \in \mathbb{C} : |z-w| \leq r \right \\}  $.
{{%nl%}}

This notation is generally for $ r < \infty $, but if $ r = \infty $, $ D(z, \infty) = \overline{D}(z,\infty) = \mathbb{C}  $, as one would expect.
(This will become helpful very soon.)
{{%nl%}}{{%nl%}}
It turns out that disks are the fundamental objects on which convergence happens (or doesn't happen). 
This is codified in the following series of results.

{{% MathEnv "lem" %}}
Suppose $ \left \{ c_n \right \}_{n=0}^\infty \subseteq \mathbb{C} $, and define $ 0 \leq R \leq \infty $ by 
$$\begin{equation}
R = \sup \left \{ r \geq 0 : \text{the sequence } \left \{ c_n r^n \right \} \text{ is bounded} \right \} .
\end{equation}$$
Then the power series $\sum_{n=0}^{\infty}c_n (z-z_0)^n $ converges absolutely and uniformly on every compact subset of the disk $ D(z_0, R) $ and diverges at every point $ z $ with $ |z-z_0| > R $.
{{% /MathEnv %}}
{{% MathEnv "rem" %}}
Before we prove this, please note that for the purpose of power series, we identify $ 0^0 $ with $ 1 $. Moreover, "converges absolutely and uniformly" means $\sum_{n=0}^{\infty}|c_n (z-z_0)^n| $ converges uniformly.
{{% /MathEnv %}}
Because of these properties of $ R $, we call $ R $ the {{% tdf "radius of convergence" %}} and $ D(z_0,R) $ is called the {{% tdf "disk of convergence" %}}.
We now prove the claim.
{{% Proof %}}
Suppose $ z \in \mathbb{C} $ is such that $ |z-z_0| > R $.
Then the sequence $ \left \\{ c_n |z-z_0|^n \right \\}_{n=0}^\infty  $ is unbounded, so its sum must diverge.
{{%nl%}}{{%nl%}}

We now want to show that the power series converges absolutely and uniformly every compact subset of $ D(z_0, R) $. 
To this end, it suffices to show that the power series converges absolutely and uniformly on $ \overline{D}(z_0, r) $ for any choice of $ 0\leq r < R $.
So suppose $ z \in \overline{D}(z_0,r) $. Now taking some $ r < \rho < R $, $ |z-z_0| \leq r < \rho $. Furthermore, because $ \rho < R $, there exists some bound $ M > 0 $ such that $ |c_n| \rho^n < M $ for all $ n $. Hence,
$$\begin{equation}
    |c_n(z-z_0)^n| \leq |c_n| r^n = |c_n| \rho^n \left ( \frac{ r }{ \rho } \right )^n \leq M \left ( \frac{ r }{ \rho } \right )^n.
\end{equation}$$
Since $ r < \rho $, $ r/\rho < 1 $, so $ M (r/\rho)^n \to 0 $ as $ n \to \infty $ as desired.
{{% /Proof %}}

There is also a more common definition of the radius of convergence: $ R = \liminf_{n \to \infty} |c_n|^{-1/n}  $.
This is equal to our definition, but to me it feels more opaque and harder to use than our supremum definition of the radius of convergence.



[^strength of complex differentiability]: This is incredible because these are very much on the case on the real line! Indeed, there are functions are once differentiable but not twice (let alone infinitely-many times), and there are functions which are smooth but are not analytic.
[^convergence absolutely and uniformly]: test
