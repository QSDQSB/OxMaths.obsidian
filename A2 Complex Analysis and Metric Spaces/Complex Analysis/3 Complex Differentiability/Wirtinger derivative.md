---
aliases: [Wirtinger derivatives]
---
#ComplexAnalysis 

## Definition
Let $f: U \rightarrow \mathbb{C}$ be a function with components $(u, v)$, and suppose that the partial derivatives of these exist. Then we define the [[Wirtinger derivative|Wirtinger derivatives]] by
$$
\partial_{z} f:=\frac{1}{2}\left(\partial_{x}-i \partial_{y}\right) u+i \frac{1}{2}\left(\partial_{x}-i \partial_{y}\right) v
$$
and
$$
\partial_{\bar{z}} f:=\frac{1}{2}\left(\partial_{x}+i \partial_{y}\right) u+i \frac{1}{2}\left(\partial_{x}+i \partial_{y}\right) v
$$

## Lemma 3.11
Let $U$ be an open subset of $\mathbb{C}$ and let $f: U \rightarrow \mathbb{C}$. Then $f$ satisfies the [[Cauchy-Riemann equations|Cauchy-Riemann equations]] if and only if $\partial_{\bar{z}} f=0$.