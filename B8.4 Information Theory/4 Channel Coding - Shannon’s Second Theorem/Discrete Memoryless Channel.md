---
aliases: [DMC]
---
#InfoTheory 

## Definition
A [[Discrete Memoryless Channel]] ([[Discrete Memoryless Channel|DMC]]) is a triple $(\mathcal{X}, M, \mathcal{Y})$ consisting of
- a finite set $\mathcal{X}$, called the input alphabet,
- a finite set $\mathcal{Y}$, called the output alphabet,
- a stochastic[^1] $|\mathcal{X}| \times|\mathcal{Y}|$-matrix $M$.

[^1]: A *stochastic* matrix is a matrix with non-negative entries and the sum of entries in each row equals 1.

We say that a pair of random variables $X, Y$ defined on some probability space $(\Omega, \mathcal{F}, \mathbb{P})$ *realises* the [[Discrete Memoryless Channel|DMC]], if the conditional distribution of $Y$ given $X$ equals $M$, i.e. $M=\left(p_{Y \mid X}(y \mid x)\right)_{x \in \mathcal{X}, y \in \mathcal{Y}}$.

- A lossless channel $H(X \mid Y)=0$
- A useless channel $H(X \mid Y)=H(X)$
