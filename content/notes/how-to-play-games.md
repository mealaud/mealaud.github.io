---
title: "How to Play Games"
date: 2023-08-20T23:22:38-07:00
draft: false
math: true
tags: 
categories: 
rootPage: true
---

The definition of a game is not entirely clear to me yet, but from reading Isaac's I've understood the following things that _help define_ a game (to my knowledge). Indeed, games seem to consist primarily of two variables:
- {{% tdf "Control variables" %}}: values through which players make their decisions.
- {{% tdf "State variables" %}}: values such that if all of them are known at any one instant, the current state of the game is _fully_ determined.

This is very informal/imprecise right now, so I think this is best explained through an example.
{{% MathEnv "ex" %}}

Suppose we are playing a _pursuit_ game: tag. And a lame version at that: tag with two players. We say $ E $ is the evader (the person trying not to get tagged) and $ P $ is the pursuer (the person trying to tag). From this (assuming a very, simple, mathematically idealized game of tag) we have the following control and state variables:
- Control variables: each of $ E $ and $ P $ are making in-game decisions through choosing how fast they are running and in which direction.
- State variables: if we knew, say, $ E $ and $ P $ positions, velocities, and accelerations, we could fully determine what the game is like at that instant.
{{% /MathEnv %}}





---
---
## References & Related Readings
- _Differential Games: a mathematical theory with applications to warfare and pursuit, control and optimization_ by Rufus Isaacs, pg. 3.
