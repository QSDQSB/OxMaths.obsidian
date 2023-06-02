#ComplexAnalysis 

## Definition
Let $U \subseteq \mathbb{C}$ be an [[Open]] set. Let $f: U \rightarrow \mathbb{C}$ be a function. If $f$ is [[Complex Differentiable]] at every $a \in U$, we say that $f$ is [[Holomorphic]] on $U$.

---
![[Cauchy-Riemann equations#^theorem]]

---

## Corollary 225
```ad-theorem
title: Corollary 225
Let $f$ be holomorphic on a domain $U$. Then $f^{(n)}$ exists and is [[holomorphic]] for all $n \geqslant 0$.
```
^Corollary-225

### Proof of Corollary 225
Let $a \in U$ and $\varepsilon>0$ such that $D(a, \varepsilon) \subseteq U$. By [[Taylor's Theorem]] we know that $f(z)=$ $\sum_{0}^{\infty} a_{n} z^{n}$ is defined by a power series. From first year analysis we know that a power series defines a [[Complex Differentiable|differentiable]] function on its disc of convergence and that term-by-term differentiation is valid so that $f^{\prime}(z)=\sum_{1}^{\infty} n a_{n} z^{n-1}$ By induction, $f$ has derivatives of all orders. ^fe473e