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

### Fact #1: Space and time
Our space is three-dimensional and euclidean, and time is one-dimensional.

### Fact #2: Galileo's principle of relativity
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

### Fact #3: Newton's principle of determinacy
The initial state of a mechanical system (the totality of positions and velocities of its points at some moment in time) uniquely determines all of its motion.
{{%nl%}}{{%nl%}}

Arnold asserts this quite confidently and further says "it is hard to doubt this fact", but I was originally quite confused by it.
Now feeling as though I understand it, my resolution was the following: the equations of motion, i.e., $ F = \dot p $ with $ F $ being the force and $ p $ being the momentum, is a second order ODE.
Hence these positions and velocities determine a unique solution to the ODE which satisfy those initial conditions.




[^definition of rectilinear]: Uniform rectilinear motion just means "moving in a straight line at a constant rate".
