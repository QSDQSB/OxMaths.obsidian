---
aliases: [Laurent's series]
---

# Laurent's Theorem
#ComplexAnalysis 

## Theorem 238
Let $f$ be [[holomorphic]] on the annulus
$$
A=\{z \in \mathbb{C}: R<|z-a|<S\} .
$$
Then there exist unique $c_{k}(k \in \mathbb{Z})$ such that
$$
f(z)=\sum_{k=-\infty}^{\infty} c_{k}(z-a)^{k} \quad(z \in A)
$$
where

$$
\Large
c_{k}=\frac{1}{2 \pi i} \int_{\gamma(a, r)} \frac{f(w)}{(w-a)^{k+1}} \mathrm{~d} w \quad(R<r<S) .
$$
^Laurent-Series
