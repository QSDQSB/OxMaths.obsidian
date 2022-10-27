---
aliases: [DMC]
---
#InfoTheory 
## Definition
A [[discrete memoryless channel]] ([[Discrete Memoryless Channel|DMC]]) is a triple $(\mathcal{X}, M, \mathcal{Y})$ consisting of
- a finite set $\mathcal{X}$, called the input alphabet,
- a finite set $\mathcal{Y}$, called the output alphabet,
- a stochastiฯ $|\mathcal{X}| \times|\mathcal{Y}|$-matrix $M$.

We say that a pair of random variables $X, Y$ defined on some probability space $(\Omega, \mathcal{F}, \mathbb{P})$ realises the [[Discrete Memoryless Channel|DMC]], if the conditional distribution of $Y$ given $X$ equals $M$, i.e. $M=\left(p_{Y \mid X}(y \mid x)\right)_{x \in \mathcal{X}, y \in \mathcal{Y}}$.