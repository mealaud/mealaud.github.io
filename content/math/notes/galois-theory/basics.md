---
title: "Basics"
date: 2023-06-04T22:45:48-07:00
draft: true
math: true
tags: 
categories: 
partOfText: ["Galois Theory"]
---

## Zero-th Draft

This will just definitions and stuff for now as I'm figuring out how to structure it in a way that makes sense to me.

{{% MathEnv "defn" %}}
1. An isomorphism $ \sigma $ of $ K $ with itself is called an {{% tdf "automorphism" %}} of $ K $. The collection of automorphisms of $ K $ is denoted $ \operatorname{Aut}(K) $. If $ \alpha \in K $ we shall write $ \sigma \alpha $ for $ \sigma(\alpha) $.
2. An automorphism $ \sigma \in \operatorname{Aut}(K) $ is said to {{% tdf "fix" %}} an element $ \alpha \in K $ if $ \sigma\alpha = \alpha $. If $ F $ is a subset of $ K $ (for example, a subfield), then an automorphism $ \sigma $ is said to {{% tdf "fix" %}} $ F $ if it fixes all the elements of $ F $, i.e., $ \sigma a = a $ for all $ a \in F $.
{{% /MathEnv %}}

{{% MathEnv "rem" %}}
For any field $ F $, the identity map $ a \mapsto a $ is an automorphism and so $ \operatorname{Aut}(F) $ is never empty. 
{{% /MathEnv %}}

{{% MathEnv "prop" %}}
The prime subfield of a field is fixed by all automorphisms. 
{{% /MathEnv %}}

{{% MathEnv "defn" %}}
Let $ K/F $ be an extension of fields. Let $ \operatorname{Aut}(K/F) $ be the collection of automorphisms which fix $ F $. 
{{% /MathEnv %}}
{{% MathEnv "rem" %}}
By the previous proposition, if $ F $ is the prime subfield of $ K $, then $ \operatorname{Aut}(K/F) = \operatorname{Aut}(K) $.
{{% /MathEnv %}}

{{% MathEnv "prop" %}}
$ \operatorname{Aut}(K) $ is a group under composition and $ \operatorname{Aut}(K/F) $ is a subgroup. 
{{% /MathEnv %}}

The next proposition is very useful for determining the automorphisms of algebraic extensions.

{{% MathEnv "prop" %}}
Let $ K/F $ be a field extension and let $ \alpha \in K $ be algebraic over $ F $. Then for any $ \sigma \in \operatorname{Aut}(K/F) $, $ \sigma \alpha $ is a root of the minimal polynomial for $ \alpha $ over $ F $ i.e., $ \operatorname{Aut}(K/F) $ permutes the roots of irreducible polynomials. Equivalently, any polynomial with coefficients in $ F $ having $ \alpha $ ias a root also has $ \sigma \alpha $ as a root.
{{% /MathEnv %}}
{{% Proof %}}
This was done in the Elman homework.
{{% /Proof %}}

{{% MathEnv "prop" %}}
Let $ H \leq \operatorname{Aut}(K) $ be a subgroup of the group of automorphisms of $ K $. Then the collection $ F $ of element sof $ K $ fixed by all the elements of $ H $ is a subfield of $ K $.
{{% /MathEnv %}}

{{% MathEnv "defn" %}}
If $ H $ is a subgroup of the group of automorphisms of $ K $, the subfield of $ K $ fixed by all the elements of $ H $ is called the {{% tdf "fixed field" %}}  of $ H $.
{{% /MathEnv %}}

{{% MathEnv "prop" %}}
The association of groups to fields and fields to groups defined above is inclusion reversing, namely
1. if $ F_1 \subseteq F_2 \subseteq K $ are two subfields of $ K $ then $ \operatorname{Aut}(K/F_2) \leq \operatorname{Aut}(K/F_1) $, ad
2. if $ H_1 \leq H_2 \leq \operatorname{Aut}(K) $ are two subgroups of automorphisms with associated fixed fields $ F_1 $ and $ F_2 $, respectively, then $ F_2 \subseteq F_1 $.
{{% /MathEnv %}}




