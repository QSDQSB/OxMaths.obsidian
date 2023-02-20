---
aliases: [Fubini]
tags: [Integration]
---
```ad-theorem
title: Fubini's Theorem
Let $f: \mathbb{R}^{2} \rightarrow \mathbb{R}$ be integrable. Then, for almost all $y$, the function $x \mapsto f(x, y)$ is integrable. Moreover, if $F(y)$ is defined (for almost all y) by $F(y)=\int f(x, y) d x$, then $F$ is integrable, and
$$
\int_{\mathbb{R}^{2}} f(x, y) d(x, y)=\int_{\mathbb{R}}\left(\int_{\mathbb{R}} f(x, y) d x\right) d y .
$$
Similarly,
$$
\int_{\mathbb{R}}\left(\int_{\mathbb{R}} f(x, y) d x\right) d y=\int_{\mathbb{R}^{2}} f(x, y) d(x, y)=\int_{\mathbb{R}}\left(\int_{\mathbb{R}} f(x, y) d y\right) d x
$$
where the first repeated integral exists in the sense described above.
```
###  Proof
Apply Theorem $7.1$ to $f^{+}$and $f^{-}$, using Proposition 4.8(6) to get that $\int_{\mathbb{R}} f^{\pm}(x, y) d x<\infty$ a.e. $(y)$
## Theorem 7.1. (Tonelli)
Let $f: \mathbb{R}^{2} \rightarrow[0, \infty]$ be measurable. Then
(1) $x \mapsto f(x, y)$ is measurable for almost all $y$;
(2) $y \mapsto \int_{\mathbb{R}} f(x, y) d x$ (defined a.e.) is measurable;
(3)
$$
\int_{\mathbb{R}^{2}} f(x, y) d(x, y)=\int_{\mathbb{R}}\left(\int_{\mathbb{R}} f(x, y) d x\right) d y
$$
Now we state two consequences of this in their traditional form.
