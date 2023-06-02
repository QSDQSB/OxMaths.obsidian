#ComplexAnalysis 

```ad-theorem
title: Riemann's Removable Singularity Theorem
Suppose that $U$ is an open subset of $\mathbb{C}$ and $z_{0} \in U$. If $f: U \backslash\left\{z_{0}\right\} \rightarrow \mathbb{C}$ is [[holomorphic]] and *bounded* near $z_{0}$, then $f$ **extends** to a [[holomorphic]] function on all of $U$.
```

### Proof
Define $h(z)$ by
$$
h(z)=\left\{\begin{array}{cc}
\left(z-z_{0}\right)^{2} f(z), & z \neq 0 \\
0, & z=z_{0}
\end{array}\right.
$$
Then clearly $h(z)$ is [[Holomorphic]] on $U \backslash\left\{z_{0}\right\}$, using the fact that $f$ is and standard rules for complex differentiablility. On the other hand, at $z=z_{0}$ we see directly that
$$
\frac{h(z)-h\left(z_{0}\right)}{z-z_{0}}=\left(z-z_{0}\right) f(z) \rightarrow 0
$$
as $z \rightarrow z_{0}$ since $f$ is bounded near $z_{0}$ by assumption. It follows that $h$ is in fact [[Holomorphic]] everywhere in $U$. But then if we chose $r>0$ is such that $\bar{B}\left(z_{0}, r\right) \subset U$, then by [[Cauchy's Integral Formula#Corollary 7.11 derivative of f(z)]] $h(z)$ is equal to its [[Taylor's Theorem|Taylor series]] centred at $z_{0}$, thus
$$
h(z)=\sum_{k=0}^{\infty} a_{k}\left(z-z_{0}\right)^{k} .
$$
But since we have $h\left(z_{0}\right)=h^{\prime}\left(z_{0}\right)=0$ we see $a_{0}=a_{1}=0$, and hence $\sum_{k=0}^{\infty} a_{k+2}\left(z-z_{0}\right)^{k}$ defines a [[Holomorphic]] function in $B\left(z_{0}, r\right)$. Since this clearly agrees with $f(z)$ on $B\left(z_{0}, r\right) \backslash\{0\}$, we see that by redefining $f\left(z_{0}\right)=$ $a_{2}$, we can extend $f$ to a [[Holomorphic]] function on all of $U$ as required.