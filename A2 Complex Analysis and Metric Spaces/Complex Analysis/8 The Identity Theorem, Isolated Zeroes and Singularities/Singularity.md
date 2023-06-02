---
aliases: [singular, isolated singularity, singularities]
---
#ComplexAnalysis 

## Definition
```ad-definition
title: Singularity
Let $f: U \rightarrow \mathbb{C}$ be a function, where $U$ is open. We say that $z_{0} \in \bar{U}$ is a regular point of $f$ if $f$ is [[holomorphic]] at $z_{0}$. Otherwise we say that $z_{0}$ is [[Singularity|singular]].
```
```ad-definition
title: Isolated Singularity
We say that $z_{0}$ is an [[Singularity|isolated singularity]] if $f$ is [[holomorphic]] on $B\left(z_{0}, r\right) \backslash\left\{z_{0}\right\}$ for some $r>0$.
```
## Proposition 8.1.
Let $U$ be an open set and suppose that $g: U \rightarrow \mathbb{C}$ is [[Holomorphic]] on $U$. Let $S=\{z \in U: g(z)=0\}$. If $z_{0} \in S$ then
- either $z_{0}$ is isolated in $S$ (so that $g$ is non-zero in some disk about $z_{0}$ except at $z_{0}$ itself)
- or $g=0$ on a [[Neighbourhood]] of $z_{0}$.

In the former case there is a unique integer $k>0$ and [[Holomorphic]] function $g_{1}$ such that $g(z)=\left(z-z_{0}\right)^{k} g_{1}(z)$ where $g_{1}\left(z_{0}\right) \neq 0$.

### Proof
Pick any $z_{0} \in U$ with $g\left(z_{0}\right)=0$. Since $g$ is [[Analytic]] at $z_{0}$, if we pick $r>0$ such that $\bar{B}\left(z_{0}, r\right) \subseteq U$, then we may write
$$
g(z)=\sum_{k=0}^{\infty} c_{k}\left(z-z_{0}\right)^{k},
$$
for all $z \in B\left(z_{0}, r\right) \subseteq U$, where the coeficients $c_{k}$ are given as ![[Cauchy's Integral Formula#^Laurent-series]]

Now if $c_{k}=0$ for all $k$, it follows that $g(z)=0$ for all $z \in B(0, r)$. Otherwise, we set $k=\min \left\{n \in \mathbb{N}: c_{n} \neq 0\right\}$ (where since $g\left(z_{0}\right)=0$ we have $c_{0}=0$ so that $k \geq 1$). Then if we let $g_{1}(z)=\left(z-z_{0}\right)^{-k} g(z)$, clearly $g_{1}(z)$ is [[Holomorphic]] on $U \backslash\left\{z_{0}\right\}$, but since in $B\left(z_{0}, r\right)$ we have we have $g_{1}(z)=\sum_{n=0}^{\infty} c_{k+n}\left(z-z_{0}\right)^{n}$, it follows if we set $g_{1}\left(z_{0}\right)=c_{k} \neq 0$ then $g_{1}$ becomes a [[Holomorphic]] function on all of $U$. 

Since $g_{1}$ is continuous at $z_{0}$ and $g_{1}\left(z_{0}\right) \neq 0$, there is an $\epsilon>0$ such that $g_{1}(z) \neq 0$ for all $z \in B\left(z_{0}, \epsilon\right)$. But $\left(z-z_{0}\right)^{k}$ vanishes only at $z_{0}$, hence it follows that $g(z)=\left(z-z_{0}\right)^{k} g_{1}(z)$ is non-zero on $B(a, \epsilon) \backslash\left\{z_{0}\right\}$, so that $z_{0}$ is isolated.

Finally, to see that $k$ is unique, suppose that $g(z)=\left(z-z_{0}\right)^{k} g_{1}(z)=$ $\left(z-z_{0}\right)^l g_{2}(z)$ say with $g_{1}\left(z_{0}\right)$ and $g_{2}\left(z_{0}\right)$ both nonzero. If $k<l$ then $g(z) /(z-$ $\left.z_{0}\right)^{k}=\left(z-z_{0}\right)^{l-k} g_{2}(z)$ for all $z \neq z_{0}$, hence as $z \rightarrow z_{0}$ we have $g(z) /(z-$ $\left.z_{0}\right)^{k} \rightarrow 0$, which contradicts the assumption that $g_{1}(z) \neq 0$. By symmetry we also cannot have $k>l$ so $k=l$ as required.