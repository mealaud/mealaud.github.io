---
title: "Metric Spaces II (Completeness)"
date: 2024-09-01T12:08:16-04:00
draft: true
type:
layout:
summary: "A introduction to completeness and completions."
---

In the previous set of notes, we defined [cauchy sequences]({{<relref "/academics/intro-real-analysis/metric-spaces-i#defn:Cauchy" >}}) and I commented that they _do_ converge but also they _do not_ converge. 
I will expand on that more in this set of notes.

## Completeness and how it fails

We say a metric space $ (X,d) $ is {{% tdf "complete" %}} if every cauchy sequence is convergent.
But isn't this obvious?
Yes!——but also no!
{{%nl%}}{{%nl%}}

Cauchy sequences, morally speaking, _should_ converge, but they don't necessarily.
Where can they fail?
{{%nl%}}{{%nl%}}
To explore this, consider the metric space $ (X,d) $ with $ X = \left \\{ 1/n : n \in \mathbb{Z} \setminus \left \\{ 0 \right \\}  \right \\}  $ and $ d $ the Euclidean metric.
This space is _not_ complete.
Why?
Well, we know that the sequences $ (a_n), (b_n) \subseteq X $ defined by $ a_n = 1/n $ and $ b_n = -1/n $ are Cauchy and _should_ converge to $ 0 $, but $ 0 \not \in X $. 
Hence, in some sense, $ a_n ,b_n \to 0 $, but just in a space _larger than but still containing $ X $._
This is precisely how Cauchy sequences can fail to converge, but it gives us a way to fix this! 
We (somehow) make our spaces bigger... or we _complete_ the space. B)

## Incompleteness and how to fix it

Consider an _incomplete_ metric space $ (X,d) $.
How do we fill the holes? 
By adding in the limits of Cauchy sequences.
This is literally the core idea lol.

We proceed with a step-by-step proof.
{{% MathEnv "thm" %}}
Given a metric space $ (X,d) $, there exists a complete metric space $ (\mathcal{X},D) $ such that there is an injective map $ \iota \colon X \to \mathcal{X} $ such that $ d(x_1,x_2) = D(\iota(x_1),\iota(x_2)) $.
{{% /MathEnv %}}
We're basically saying, we can put the original metric space inside a bigger, complete metric space.
{{% Proof %}}
put back
{{% /Proof %}}

**Step 1.** 
(Creating the fillers.)
We proceed by creating equivalence classes of Cauchy sequences.
We say that two Cauchy sequences $ (p_n) \sim (q_n) $ if 
$$\begin{equation}
   \lim_{n \to \infty} d(p_n,q_n) = 0.
\end{equation}$$
We claim that $ \sim $ defines an equivalence relation as it clearly satisfies reflexivity, symmetry, and transitivity.
{{%nl%}}{{%nl%}}

**Step 2.** 
(Choosing our space and its metric.)
Now let $ \mathscr{X} $ be the space of $ X $-valued sequences and let $ \mathcal{X} \coloneqq \mathscr{X} / \sim $.
We now claim that $ D \colon \mathcal{X} \times \mathcal{X} \to \mathbb{R} $ defined by $ (\overline{(a_n)},\overline{(b_n)}) \mapsto\lim_{n \to \infty} d(a_n,b_n) $ is a metric on $ \mathcal{X} $ under which $ (\mathcal{X}, D) $ is complete. 
(We use the bar-notation to indicate that the object is an equivalence class under $ \sim $.)
{{%nl%}}{{%nl%}}

**Step 3.** 
(Showing $ (\mathcal{X},D) $ is complete.)
{{%nl%}}

_Step 3.1._
(Show $ D $ is well-defined.)
Suppose $ (a_n) \sim (c_n) $ and $ (b_n) \sim (d_n) $. 
Then using $ d $'s triangle inequality:
$$\begin{align}
D \left ( \overline{(a_n)}, \overline{(b_n)} \right )  - D\left ( \overline{(c_n)}, \overline{(d_n)} \right ) 
&= \lim_{n\to \infty} \left [ d(a_n,b_n) -\lim_{n\to\infty} d(c_n,d_n) \right ]   \\\\
&\leq\lim_{n\to\infty} \left [ d(a_n,b_n) - d(c_n,d_n) \right ]  \\\\
&\leq\lim_{n\to \infty} \left [ d(a_n,b_n) - d(c_n,b_n) \right. \\\\
&\qquad \left . + d(c_n,b_n) - d(c_n,d_n) \right ] \\\\
&\leq\lim_{n\to\infty} \left [ d(a_n,c_n) + d(b_n,d_n) \right ]  \\\\
&= 0.
\end{align}$$
Thus $ D $ is well-defined.
{{%nl%}}{{%nl%}}

I further claim that $ D $ is indeed a metric.
(It is clear that $ D $ is symmetric, reflexive, and satisfies the triangle inequality.)
{{%nl%}}{{%nl%}}


_Step 3.2._ 
(Showing completeness.)
Now, suppose $ (F_n) \subseteq \mathcal{X} $ is a Cauchy sequence with each $ F_n $ being an equivalence class of Cauchy sequences in $ (X,d) $. 
For each $ n $, choose a representative and call it $ (f_n) $.
We claim that $ F_n \to \overline{g(n)} $ where $ g(n) = f_n(n) $.
We know that $ g \in \mathcal{X} $, as if we fix $ \varepsilon > 0 $, we know that:
1. for each $ n $, there is $ N_n $ such that $ r,s \geq N_n $ implies that $ d(f_n(r),f_n(s)) < \varepsilon/3 $
2. for each m
3. $ d(f_m(n),f_m(m)) < \varepsilon/3 $ (similarly)
3. $ D(f_n,f_m) < \varepsilon/3 $ and $ (f_n) $ is assumed to be Cauchy in $ (\mathcal{X},D) $.
Then:
$$\begin{align}
d(g(n),g(m)) &= d(f_n(n),f_m(m)) \\\\
&\leq d(f_n(n), f_n(m)) + d(f_n(m), f_m(n)) + d(f_m(n),f_m(m)) \\\\
\end{align}$$
https://www.rose-hulman.edu/~bryan/lottamath/complete.pdf
