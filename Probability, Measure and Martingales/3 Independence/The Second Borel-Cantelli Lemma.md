---
aliases: [BC2]
---
## Theorem
```ad-theorem
title: The Second Borel-Cantelli Lemma

Let $\left(A_n\right)$ be a sequence of **independent** events.

If $\sum_{n=1}^{\infty} \mathbb{P}\left(A_n\right)=\infty$ then $$\mathbb{P}\left(A_n \text{ i.o. }\right)=1.$$
```
### Proof
Set $a_m=\mathbb{P}\left(A_m\right)$ and note that $1-a \leqslant e^{-a}$. We consider the complementary event $\left\{A_n^{\mathrm{c}}\right.$ eventually $\}$.

$$\begin{aligned} \mathbb{P}\left[\bigcap_{m \geqslant n} A_m^{\mathrm{c}}\right] &=\prod_{m \geqslant n}\left(1-a_m\right) \quad \text { (by independence) } \\ & \leqslant \exp \left(-\sum_{m \geqslant n} a_m\right)=0 \end{aligned}$$
Hence
$$
\mathbb{P}\left(A_n^{\mathrm{c}} \text { eventually }\right)=\mathbb{P}\left(\bigcup_{n \geqslant 1} \bigcap_{m \geqslant n} A_m^{\mathrm{c}}\right)=\lim _{n \rightarrow \infty} \mathbb{P}\left(\bigcap_{m \geqslant n} A_m^{\mathrm{c}}\right)=0
$$
and
$$
\mathbb{P}\left(A_n \text { i.o. }\right)=1-\mathbb{P}\left(A_n^{\mathrm{c}} \text { eventually }\right)=1 \text {. }
$$