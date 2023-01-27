---
aliases: [Shannon's code, Shannon code]
tags: [InfoTheory]
---

```ad-algorithm
title: Shannon's Algorithm
given a $\operatorname{pmf} p$ on $\mathcal{X}=\{1, \cdots, m\}, p_i=p\left(x_i\right)$, and a finite set $\mathcal{Y}$
1) Order the probabilities $p_i$ decreasingly and assume (by relabelling) that $p_1 \geq \cdots \geq p_m$,
2) Define $c_S\left(x_r\right)$ as the first $l_r:=\left\lceil-\log _{|\mathcal{Y}|}\left(p_r\right)\right\rceil$ digits in the $|\mathcal{Y}|$-ary expansion of the real number $\sum_{i=1}^{r-1} p_i$.
```
- Following the proof of [[Kraft-McMillan inequality#Theorem 3.5: Kraft-McMillan inequality]], we can verify it is a [[Classes of Codes|prefix code]].  $$H_{|\mathcal{Y}|}(X) \leq \mathbb{E}\left[\left|c_S(X)\right|\right]<H_{|\mathcal{Y}|}(X)+1$$
- Ordering is expensive.

### Proposition 3.11
Let $p$ and $q$ be pmf's on $\mathcal{X}$ and $X \sim p$ and $\mathcal{Y}$ a finite set of cardinality $|\mathcal{Y}|=d$. If we denote with $c_q: \mathcal{X} \longrightarrow \mathcal{Y}^*$ a Shannon code for the distribution $q$, then
$$
H_d(X)+D_d(p \| q) \leq \mathbb{E}\left[\mid c_q(X) \|<H_d(X)+D_d(p \| q)+1 .\right.
$$
#### Proof
We have
$$
\begin{aligned}
\mathbb{E}\left[\left|c_q(X)\right|\right] & =\sum_{x \in \mathcal{X}} p(x)\left\lceil-\log _d(q(x))\right] \\
& <\sum_{x \in \mathcal{X}} p(x)\left(-\log _d(q(x))+1\right) \\
& =\sum_{x \in \mathcal{X}} p(x)\left(\log _d\left(\frac{p(x)}{q(x)} \frac{1}{p(x)}\right)+1\right) \\
& =\sum_{x \in \mathcal{X}} p(x)\left(\log _d\left(\frac{p(x)}{q(x)}\right)\right)+\sum_{x \in \mathcal{X}} p(x) \log _d\left(\frac{1}{p(x)}\right)+1 \\
& =D_d(p \| q)+H_d(X)+1 .
\end{aligned}
$$
Since the lower bound is attained iff $\left\lceil-\log _d(q(x))\right\rceil=-\log _d(q(x))$ the lower bound follows similarly.