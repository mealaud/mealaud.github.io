---
title: "Definition of the Complex Numbers"
date: 2023-08-11T18:22:05-07:00
draft: false
math: true
tags: 
categories: 
rootPage: true
---

There are many ways to define them! :D I'll generally use the following definition:

{{% MathEnv "defn" %}}
A complex number is of the following form: 
$$
   z=x+iy \qquad \text{where} \qquad x,y \in \mathbb{R} \text{ and } i^2 = -1. 
$$
$ \mathbb{C} $ is the collection of all such values. Furthermore, we call $ x $ the {{% tdf "real part of $ z $" %}} and denote it by $ \operatorname{Re} z $. Similarly, $ y $ is the {{% tdf "imaginary part of $ z $" %}} and is denoted by $ \operatorname{Im} z $. {{%nl%}}{{%nl%}}

$ \mathbb{C} $'s arithmetical operations are defined as: 
$$
    (x+iy) + (u+iv) = (x+u) + i(y+v) \qquad \text{and} \qquad (x+iy)\cdot (u+iv) = (xu - yv) + i(xv+ yu)
$$
and has the following properties:
- addition and multiplication are commutative;
- addition and multiplication are associative; and 
- multiplication is distributive
{{% /MathEnv %}}

{{% MathEnv "rem" %}}
$ i $ is often called the {{% tdf "imaginary unit" %}}.
{{% /MathEnv %}}
