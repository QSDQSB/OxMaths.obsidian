---
aliases: [random variable, random variables]
---
## Definition
Let $(\Omega, \mathscr{F})$ and $(E, \mathscr{E})$ be measurable spaces. A function $f: \Omega \rightarrow E$ is said to be measurable, or a random variable, if
$$
f^{-1}(A)=\{\omega \in \Omega: f(\omega) \in A\} \in \mathscr{F} \quad \forall A \in \mathscr{E}
$$

## Composition of Random Variables
```ad-theorem
title: Proposition 1.15
Let $(\Omega, \mathscr{F}),(E, \mathscr{E})$ and $(H, \mathscr{H})$ be three measurable spaces. Let $f: \Omega \rightarrow E$ and $g: E \rightarrow H$ be two random variables. Then $g \circ f$ is a random variable from $(\Omega, \mathscr{F})$ to $(H, \mathscr{H})$.
```
#### Random Variable Generalises Events
Let $E=\{0,1\}$ and $\mathscr{E}=\mathscr{P}(E)$. A subset $A \subset \Omega$ is an event if and only if its characteristic function $\mathbf{1}_A$ (equal to 1 for $\omega \in A$ and 0 otherwise) is a random variable.

### Lemma 1.18
```ad-theorem
title: Lemma 1.18
Let $X$ be a random variable from $(\Omega, \mathscr{F})$ to $(E, \mathscr{E})$ and suppose $\mathscr{E}=\sigma(\mathscr{A})$. Then
$$
\sigma(X)=\left\{X^{-1}(A): A \in \mathscr{E}\right\}=\sigma\left(X^{-1}(A): A \in \mathscr{A}\right)
$$
```
#### Proof
It is easy to verify that the inverse $A \rightarrow X^{-1}(A)$ preserves all the set operations. In particular, $\left\{X^{-1}(A)\right.$ : $A \in \mathscr{E}\}$ is a $\sigma$-algebra. By definition, it is contained in $\sigma(X)$ and by the minimality of the latter, the two are equal. Denote $\sigma(X ; \mathscr{A})=\sigma\left(X^{-1}(A): A \in \mathscr{A}\right)$. The inclusion $\sigma(X ; \mathscr{A}) \subseteq \sigma(X)$ is clear. For the reverse, let $\mathscr{G}=\left\{A \subseteq E: X^{-1}(A) \in \sigma(X ; \mathscr{A})\right\}$. We verify easily that $\mathscr{G}$ is a $\sigma$-algebra and since $\mathscr{A} \subseteq \mathscr{G}$ we conclude that $\mathscr{E} \subseteq \mathscr{G}$. It follows that $\sigma(X) \subseteq \sigma(X ; \mathscr{A})$ and hence we have an equality.

#### Corollary 1.19
A function $f: \Omega \rightarrow \mathbb{R}$ or $f: \Omega \rightarrow \overline{\mathbb{R}}$ is measurable with respect to $\mathscr{F}($ and $\mathscr{B}(\mathbb{R})$ or $\mathscr{B}(\overline{\mathbb{R}})$ ) if and only if $\{x: f(x) \leqslant t\} \in \mathscr{F}$ for every $t \in \mathbb{R}$.

## Theorem 1.27
Let $X$ be a random variable on $(\Omega, \mathscr{F})$ with values in a measurable space $(E, \mathscr{E})$ and let $g$ be a real-valued random variable on $(\Omega, \mathscr{F})$. Then $g$ is $\sigma(X)$-measurable if and only if $g=h \circ X$ for some real-valued random variable on $(E, \mathscr{E})$.