---
title: "State Spaces"
date: 2023-08-20T23:45:12-07:00
draft: false
math: true
tags: 
categories: 
rootPage: false
---

Since {{<ref "state variables" "/notes/how-to-play-games">}} (also cf. {{<ref "Equivalent statements of state variables" "/notes/equivalent-statements-of-state-variables">}}) are unique to each instant (or, well, I'd assume as much since they fully determine the game at that instant), they change in time. Suppose $ (x_1,\ldots,x_n) $ are the $ n $ state variables for some game. Then we can (assuming the state variables are all real numbers) consider the space of all possible values of state variables as region of Euclidean Space, $ \mathbb{R}^n $ to be a bit more precise. We call this the {{% tdf "state space" %}} of the game and denote it $ \mathcal{E} $. {{%nl%}}{{%nl%}}{{%nl%}}

We can then consider the state varaibles changing in time as a sort of motion through Euclidean $ n $-space. You can then consider this motion as being controlled by the players. I'm not super sure how this is useful yet but it seems neat!{{%nl%}}{{%nl%}}

Can we then treat state spaces as manifolds? Can we do calculus on them?

---
---
## References & Related Readings
- _Differential Games: a mathematical theory with applications to warfare and pursuit, control and optimization_ by Rufus Isaacs, pg. 3.
