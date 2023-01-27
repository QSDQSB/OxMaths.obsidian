---
aliases: [simple]
---
## Definition
A measurable function $f$ on $(\Omega, \mathscr{F})$ is called a [[Simple Function]] if
$$
f=\sum_{k=1}^n a_k \mathbf{1}_{E_k}
$$
for some $n \geqslant 1$ and where each $E_k \in \mathscr{F}$ and each $a_k \in \mathbb{R}$. The canonical form of $f$ is the unique decomposition where the numbers $a_k$ are distinct and non-zero and the sets $E_k$ are disjoint and non-empty.

### Measurable Functions are Limits of Simple Functions
```ad-theorem
title: Lemma 1.26
Let $(\Omega, \mathscr{F})$ be a measurable space. A function $X: \Omega \rightarrow \mathbb{R}$ is measurable if and only if it is a limit of simple functions. Further, if $f$ is bounded from below (resp. bounded), the limit can be taken to be increasing (resp. uniform).
```
#### Proof
That a limit of simple functions is a measurable function follows from Proposition 1.24. Now let $X$ be a random variable and define
$$
X_n=\sum_{k \in \mathbb{Z} \cap\left[-4^n, 4^n\right]} \frac{k}{2^2} \mathbf{1}_{\frac{k}{2^n}<X \leqslant \frac{k+1}{2^n}}, \quad n \geqslant 1 .
$$
Let $\Omega_n^{+}:=\left\{\omega \in \Omega: X(\omega) \leqslant 2^n\right\}, \Omega_n^{-}:=\left\{\omega \in \Omega: X(\omega)>-2^n\right\}$ and $\Omega_n=\Omega_n^{-} \cap \Omega_n^{+}$. The result follows by noting that $\sup _{\omega \in \Omega_n}\left|X_n(\omega)-X(\omega)\right| \leqslant 2^{-n}$ and $X_n \leqslant X_{n+1}$ on $\Omega_n^{-}$.