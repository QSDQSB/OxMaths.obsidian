---
aliases: [BC1]
tag: [PMM]
---
## Theorem
```ad-theorem
title: The First Borel–Cantelli Lemma
If $\sum_{n=1}^{\infty} \mathbb{P}\left(A_n\right)<\infty$ then $\mathbb{P}\left(A_n\right.$ i.o. $)=0$.
```

### Proof
Let $G_n=\bigcup_{m \geqslant n} A_m$. Then
$$
\mathbb{P}\left(G_n\right) \leqslant \sum_{m=n}^{\infty} \mathbb{P}\left(A_m\right)
$$
and $G_n \downarrow G=\limsup _{n \rightarrow \infty} A_n$, so by [[Measure Space (PMM)#Proposition 2.3|Proposition 2.3]], $\mathbb{P}\left(G_n\right) \downarrow \mathbb{P}(G)$.
Since $\sum_{n=1}^{\infty} \mathbb{P}\left(A_n\right)<\infty$, we have that
$$
\sum_{m=n}^{\infty} \mathbb{P}\left(A_m\right) \rightarrow 0 \quad \text { as } n \rightarrow \infty,
$$
and so
$$
\mathbb{P}\left(\limsup _{n \rightarrow \infty} A_n\right)=\lim _{n \rightarrow \infty} \mathbb{P}\left(G_n\right)=0
$$
as required.