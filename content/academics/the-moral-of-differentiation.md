---
title: "The Moral of Differentiation"
date: 2023-08-26T21:16:13-07:00
draft: false
math: true
tags: 
categories: 
rootPage: false
---

## The spiel
Differentiation is first introduced via tangent lines to graphs that may or may not continue to good approximations after your chosen point. For example, $ f(x) = x^2 $ and its tangent line at $ x=1 $ is great at, say, $ x = 1 \pm 1/100 $ but is not so great at $ x = 1 + 100 $. Although a bit extreme, we get the following important idea from this: our tangent line may not represent the graph well after a certain point. :( In other words:
{{% MathEnv "up" %}}

Differentiation is a local property. i.e., it only properly models your function near your point of interest.
{{% /MathEnv %}}
{{%nl%}}

For the next idea, consider the following function: 
$$
    f(x) = 
    \begin{cases}
        1 & x \geq 0,\\\\
        -1 & x < 0.
    \end{cases}
$$  
Here, although our function is seemingly very simple, there is a big problem at $ x=0 $---there's no tangent line! So we can't differentiate it. Leading us to your next idea:
{{% MathEnv "up" %}}

Not every function admits a derivative. i.e., sometimes there's no tangent line.
{{% /MathEnv %}}
{{%nl%}}

For our last point, consider the following seemingly very complicated function: 
$$
    f(x) = e^{\sin x} + \cos (x^2).
$$
This seems incredibly awful to work with, in my opinion, but let's consider its derivative: $ f'(x) = \cos(x) e^{\sin x} - 2x \sin (x^2)$. Although still ugly, studying this function near, say, $ x = 50 $ is simple enough! We compute its derivative, $ f'(50) $ and consider our tangent line and now begin studying the function in that _small neighborhood_. Now we've simplified $ e^{\sin x} + \cos (x^2) $ to $ mx + b $ for some $ m $ and $ b $. This straight line is much, much easier to work with, yielding our final big idea:
{{% MathEnv "up" %}}

Differentiation makes things easier to work with. It makes them more familiar.
{{% /MathEnv %}}

## Summary
We summarize with a pretty graphic:
{{% MathEnv "up" %}}

1. Differentiation is a local property.
2. Differentiation isn't always possible.
3. When differentiation is possible, it simplifies things.
{{% /MathEnv %}}






---
---
## References & Related Readings
- Just trust me lol.
