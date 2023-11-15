---
title: "Intro to Dynamical Systems"
date: 2023-10-14T22:22:19Z
draft: false
math: true
tags: 
categories: 
rootPage: false
---
## Ethos of the subject
Dynamical systems is the study of the long/longer-term behavior of some time evolving system.

## Basic definitions
We start with the two basic types of dynamical systems: discrete- and continuous-time.

{{% MathEnv "defn" %}}

- A {{% tdf "discrete-time dynamical system" %}}  is a space $ X $ and a map $ f \colon X \to X $. For $ n \in \mathbb{N} $ or $ n \in \mathbb{Z} $ if invertible, we define the $ n $-fold composition $ f^{(n)} = f \circ f \circ \cdots \circ f $ with $ f^0 $ defined as the identity map. 

- A {{% tdf "continuous-time dynamical system" %}} consists of a space $ X $ and a one-parameter family maps $ \left \\{ f^t \colon X \to X \right \\} $, $ t \in \mathbb{R} $ (if invertible) or $ \mathbb{R}^+ $which forms a one-parameter semigroup: $ f^{t+s} = f^t \circ f^s $.
{{% /MathEnv %}}

Now we have he orbits (of inputs) of these dynamical systems. (I think of these as kind of trajectories/paths that the system follows.)
{{% MathEnv "defn" %}}
A {{% tdf "positive (semi-)orbit" %}} is given by $ \mathcal{O}^+_f(x) =\bigcup{t \geq 0}^{f^t(x)} $. Analagous definitions exist for the negative semi-orbit and the (full) orbit, which is hte union of forawrd and backward in time.
{{% /MathEnv %}}

Here are some invariant adjacent things.
{{% MathEnv "defn" %}}

- An {{% tdf "equilibrium" %}} or {{% tdf "fixed" %}} point is a point $ x $ such taht $ f^t(x) = x $ for all $ t $. A point is {{% tdf "periodic" %}} if there exists $ T $ such that $ f^T(x)=x $ and the orbit is called a {{% tdf "periodic orbit" %}}.

- A set $ A \subseteq X $ is called (forward) {{% tdf "invariant" %}} if $ f^t(x) \in A $ ofr all $ x \in A $ and $ t \geq 0 $.
{{% /MathEnv %}}

Here's a thing called conjugacy. (I don't actually fully get what this definition is trying to say!)

{{% MathEnv "defn" %}}
A semi-conjugacy from $ (Y,g) $ to $ (X,f) $ if $ \pi \colon Y \to X $ surjective such that 
$$
    f^t \circ \pi = \pi \circ g^t
$$
is invertible, then called conjugacy.
{{% /MathEnv %}}





---
---
## References & Related Readings
- My Math 238 (Dynamical Systems) lectures by Professor Jacob Bedrossian (UCLA).  
