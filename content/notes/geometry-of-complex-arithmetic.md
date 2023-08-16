---
title: "Geometry of Complex Arithmetic"
date: 2023-08-11T18:27:03-07:00
draft: false
math: true
tags: 
categories: 
rootPage: false
---

We previously covered that complex addition is just the tip-to-tail addition of vectors (cf. {{<ref "Complex Numbers as Vectors" "/notes/complex-numbers-as-vectors">}}), but what about multiplication? Indeed we cannot multiply vectors but if we consider the {{<ref "polar form of complex numbers" "/notes/polar-form-of-complex-numbers">}} we get the following: if $ z = re^{i\theta} $ and $ w = se^{i\alpha} $ for some $ s,r,\theta, \alpha \in \mathbb{R} $, we get that: 
$$
    zw = |z||w|e^{i(\theta+\alpha)}.
$$
Essentially, we have just scaled up $ z $ by the magnitude of $ w $ and then rotated it by the phase of $ w $. In summary:
- addition is tip-to-tail vector addition;
- multiplication is scaling and rotating.
