---
title: "Function Spaces I ($ C([0,1]) $ and Uniform Convergence)"
date: 2024-12-18T12:50:01-05:00
draft: true
type: "page"
layout: "note"
summary: "There are multiple notions of convergence."
---


I'll start with a question: when can we interchange limits?
{{%nl%}}{{%nl%}}

As you continue with analysis, this question will crop up over and over, and some of our most powerful theorems (e.g., Dominated Convergence and Fubini-Tonelli) are directly answering this question (in specific contexts). 
In the of more foundational analysis, we are studying the humble function and now the slightly-less humble _sequence of functions_: a {{% tdf "sequence of functions" %}} is a collection of functions indexed by $ \mathbb{N} $.

{{%nl%}}{{%nl%}}

Recall our sequential form of continuity: if a function $ f \colon X \to Y $ (with $ X,Y $ metric spaces) is continuous and $ \left \\{ x_n \right \\} \subseteq X $ is convergent, then
$$\begin{equation}
    \lim_{n\to\infty} f(x_n) = f(x) = f \left (\lim_{n\to\infty}x_n \right ) 
\end{equation}$$


