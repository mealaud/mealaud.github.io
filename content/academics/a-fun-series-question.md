---
title: "A Fun Series Question"
date: 2025-02-01T19:33:10-05:00
draft: true
type: 
layout:
summary: "I think the radius of convergence is very neat!"
---

I am currently taking Complex Analysis with Professor Jeremy Marzuola and we were talking about radius of convergence when I started to wonder: Given a power series $\sum_{}^{}a_n z^n $ with radius of convergence $ R $, how does the series behave when $ \left | z \right |  = R $? Does it converge ever? Must it diverge?
{{%nl%}}{{%nl%}}

In a similar vein, I recalled that I had seen a power series with radius of convergence $ R=1 $, but converges for all $ z \in S^1 \setminus \left \\{ 1 \right \\}  $.
{{%nl%}}{{%nl%}}

I combined both this line of thought and an associated memory to ask Professor Marzuola some questions and he suggested the series  
$$\begin{equation}
   \sum_{n=1}^{\infty} \frac{ z^n }{ n } \text{ converges for all } z \in \overline{\mathbb{D}} \setminus \left \\{ 1 \right \\} 
\end{equation}$$
(where $ \mathbb{D} $ is the open unit disk) had my aforementioned property.

{{%nl%}}{{%nl%}}

Geometrically speaking (viewing complex numbers as vectors and adding them "tip to tail"), if $ z = 1 $, our finite sums necessarily move along the real line and diverge to infinity.
But, if $ z = i $, for example, bend and curl around a potential point.


{{% series-summation %}}

