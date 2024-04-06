---
title: "Experimental Facts"
date: 2024-04-05T00:09:33-07:00
draft: true
type: "page"
layout: "note"
summary: "An overview of some physical laws (which we will explore further soon)."
---

Arnold begins with some basic experimental facts. 
These are to serve the basis of the this study of mechanics.

### Fact #1: Space and time {#fact1}
Our space is three-dimensional and euclidean, and time is one-dimensional.

### Fact #2: Galileo's principle of relativity {#fact2}
There exist coordinate systems (called inertial) possessing the following two properties:
1. All the laws of nature at all moments of time are the same in all inertial coordinate systems.
2. All coordinate systems in uniform rectilinear motion[^definition of rectilinear] with respect to an inertial one are themselves inertial.

We can summarize this with an example:
{{% MathEnv "x" %}}
If we consider...
1. a coordinate system attached to the earth inertial and
2. a train moving in uniform rectilinear motion with respect to the earth

then no experiment conducted entirely inside the train can detect the motion of the train.
{{% /MathEnv %}}

### Fact #3: Newton's principle of determinacy {#fact3}
The initial state of a mechanical system (the totality of positions and velocities of its points at some moment in time) uniquely determines all of its motion.
{{%nl%}}{{%nl%}}

Arnold asserts this quite confidently and further says "it is hard to doubt this fact", but I was originally quite confused by it.
Now feeling as though I understand it, my resolution is the following: the equations of motion, i.e., $ F = \dot p $ with $ F $ being the force and $ p $ being the momentum, is a second order ODE.
Hence these positions and velocities determine a unique solution to the ODE which satisfy those initial conditions.


## Invariance under Galilean transformations
In [Experimental Fact #2]({{<relref "#fact2">}}) we say that the laws of the universe should be invariant uniform rectilinear motion. 
We now investigate the implications of this _Galilean invariance_.

### Notation
As is usual, $ \mathbb{R} $ denotes the real numbers and $ \mathbb{R}^n $ is $ n $-dimensional Euclidean space. 
As is unusual (for me), we take $ A^n $ to be {{% tdf "affine $ n $-dimensional space" %}}, i.e., $ A^n $ is just $ \mathbb{R}^n $ _without_ a fixed origin.
Why do we introduce this, however? 
Well, if we insist that physical laws should be invariant under rectilinear motion, we cannot have some "absolute inertial reference frame". 
We instead need a structure for which we can put coordinate systems onto naturally--this is precisely $ A^n $.
{{%nl%}}{{%nl%}}

We now consider $ \mathbb{R}^n $ (as an additive group) acting on $ A^n $ via {{% tdf "parallel displacements" %}}, i.e.,
$$\begin{equation}
\mathbb{R}^n \times A^n \ni (b,a) \mapsto a+b \in A^n.
\end{equation}$$
We also note that the sum of two elements of $ A^n $ is not discussed but the difference of elements of $ A^4 $ is defined and is an element of $ \mathbb{R}^4 $.

{{%nl%}}{{%nl%}}
A {{% tdf "euclidean structure" %}} on the vector space $ \mathbb{R}^n $ is a scalar product (i.e., a positive symmetric bilinear form). 
We usually call this scalar product the _dot product_. 
This then allows us to define a distance function $ \rho $:
$$\begin{equation}
 \rho(x,y) = \left \lVert x-y \right \rVert = \sqrt{(x-y) \cdot (x-y)}
\end{equation}$$
between points $ x,y $ in an affine space $ A^n $. 
We call an affine space endowed with a euclidean structure a {{% tdf "euclidean space" %}}.

### Galilean Structure
Galilean space-time has three components:

1. Universe/Space

The universe is a four-dimensional affine space $ A^4 $.
The points of $ A^4 $ are called {{% tdf "world points" %}} or {{% tdf "events" %}}.

2. Time

Time is a linear mapping $ t \colon \mathbb{R}^4 \to \mathbb{R} $ from the vector space of parallel displacements of the universe to the real "time axis". 
The {{% tdf "time interval" %}} from an event $ a \in A^4 $ to an event $ b \in A^4 $ is the number $ t(b-a) $. 
If $ t(b-a) = 0 $, then the events $ a $ and $ b $ are said to be {{% tdf "simultaneous" %}}.
The set of events simultaneous with some fixed event forms a three-dimensional affine subspace in $ A^4 $; we call this the {{% tdf "space of simultaneous events" %}}.

3. Distance

The {{% tdf "distance between simultaneous events" %}} is defined to be 
$$\begin{equation}
\rho(a,b) = \left \lVert a-b \right \rVert  = \sqrt{(a-b) \cdot (a-b)}, \quad a,b \in A^3
\end{equation}$$
This distance makes every space of simultaneous events into a three-dimensional euclidean space $ E^3 $.





[^definition of rectilinear]: Uniform rectilinear motion just means "moving in a straight line at a constant rate".
