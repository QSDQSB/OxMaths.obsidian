---
aliases: [σ-algebra generated, generated σ-algebras, generated]
tags: [PMM]
---

## Definition
Let $\mathscr{A}$ be a collection of subsets of $\Omega$. The smallest $\sigma$-algebra containing all the sets in $\mathscr{A}$ is denoted $\sigma(\mathscr{A})$ and is called the [[Generated σ-algebra|σ-algebra generated]] by $\mathscr{A}$.

>`Well-definedness`
>Note that [[B8.1 Probability, Measure and Martingales/1 Measurable sets and functions, a.k.a. events and random variables/σ-algebra#Lemma 1.3]] ensures that $\sigma(\mathscr{A})$ is well defined and is simply given by the intersection of all the $\sigma$-algebras $\mathscr{F}$ such that $\mathscr{A} \subseteq \mathscr{F}$, a non-empty collection since $\mathscr{A} \subseteq \mathscr{P}(\Omega)$. 

## Lemma 1.18
Let $X$ be a random variable from $(\Omega, \mathscr{F})$ to $(E, \mathscr{E})$ and suppose $\mathscr{E}=\sigma(\mathscr{A})$. Then
$$
\sigma(X)=\left\{X^{-1}(A): A \in \mathscr{E}\right\}=\sigma\left(X^{-1}(A): A \in \mathscr{A}\right) \text {. }
$$
### Proof
It is easy to verify that the inverse $A \rightarrow X^{-1}(A)$ preserves all the set operations. In particular, $\left\{X^{-1}(A)\right.$ : $A \in \mathscr{E}\}$ is a [[B8.1 Probability, Measure and Martingales/1 Measurable sets and functions, a.k.a. events and random variables/σ-algebra]]. By definition, it is contained in $\sigma(X)$ and by the minimality of the latter, the two are equal. Denote $\sigma(X ; \mathscr{A})=\sigma\left(X^{-1}(A): A \in \mathscr{A}\right)$. The inclusion $\sigma(X ; \mathscr{A}) \subseteq \sigma(X)$ is clear. For the reverse, let $\mathscr{G}=\left\{A \subseteq E: X^{-1}(A) \in \sigma(X ; \mathscr{A})\right\}$. We verify easily that $\mathscr{G}$ is a $\sigma$-algebra and since $\mathscr{A} \subseteq \mathscr{G}$ we conclude that $\mathscr{E} \subseteq \mathscr{G}$. It follows that $\sigma(X) \subseteq \sigma(X ; \mathscr{A})$ and hence we have an equality.

### Corollary 1.19
A function $f: \Omega \rightarrow \mathbb{R}$ or $f: \Omega \rightarrow \overline{\mathbb{R}}$ is [[B8.1 Probability, Measure and Martingales/1 Measurable sets and functions, a.k.a. events and random variables/Measurable]] with respect to $\mathscr{F}$ (and $\mathscr{B}(\mathbb{R})$ or $\mathscr{B}(\overline{\mathbb{R}})$ ) if and only if $\{x: f(x) \leqslant t\} \in \mathscr{F}$ for every $t \in \mathbb{R}$