---
aliases: [Taylor series]
---
#ComplexAnalysis 

```ad-theorem
title: Taylor's Theorem
Let $a \in \mathbb{C}, \varepsilon>0$ and let $f: D(a, \varepsilon) \rightarrow \mathbb{C}$ be a holomorphic function. Then there exist unique $c_{n} \in \mathbb{C}$ such that
$$
f(z)=\sum_{n=0}^{\infty} c_{n}(z-a)^{n}, \quad z \in D(a, \varepsilon)
$$
Further
$$
c_{n}=\frac{f^{(n)}(a)}{n !}=\frac{1}{2 \pi i} \int_{\gamma(a, r)} \frac{f(w)}{(w-a)^{n+1}} \mathrm{~d} w \quad(0<r<\varepsilon) .
$$
```
$c_n$  is often referred to as [[Cauchy's Integral Formula#Corollary 7 11 derivative of f z|Cauchy's Formula for Derivatives.]]

## Corollary 225
```ad-theorem
Let $f$ be [[holomorphic]] on a domain $U$. Then $f^{(n)}$ exists and is [[holomorphic]] for all $n \geqslant 0$.
```

### Proof of Corollary 225
Let $a \in U$ and $\varepsilon>0$ such that $D(a, \varepsilon) \subseteq U$. By [[Taylor's Theorem]] we know that $f(z)=$ $\sum_{0}^{\infty} a_{n} z^{n}$ is defined by a power series. From first year analysis we know that a power series defines a [[Complex Differentiable|differentiable]] function on its disc of convergence and that term-by-term differentiation is valid so that $f^{\prime}(z)=\sum_{1}^{\infty} n a_{n} z^{n-1}$ By induction, $f$ has derivatives of all orders.
