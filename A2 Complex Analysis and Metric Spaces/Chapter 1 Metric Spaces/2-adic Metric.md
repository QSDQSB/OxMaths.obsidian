#ComplexAnalysis  
Let $X=\mathbf{Z}$, and define $d(x, y)$ to be $2^{-m}$, where $2^{m}$ is the largest power of two dividing $x-y$.
### Ultrametric Property
The triangle inequality holds in the following stronger form, known as the *ultrametric property*:
$$
d(x, z) \leqslant \max (d(x, y), d(y, z))
$$
This is just a rephrasing of the statement that if $2^{m}$ divides both $x-y$ and $y-z$, then $2^{m}$ divides $x-z$.

---

This metric is very unlike the usual distance.
For example, $d(999,1000)=1$, whilst $d(0,1000)=\frac{1}{8} !$.

The role of 2 can be replaced by any other prime $p$, and the [[Metric Space|metric]] may also be extended in a natural way to the rationals $\mathbf{Q}$.

```ad-question
Show that $\mathbb{Z}$ with the [[2-adic metric]] is not [[connected]].

---
Consider $B(0,1)$ and $B(1,1)$.
```
