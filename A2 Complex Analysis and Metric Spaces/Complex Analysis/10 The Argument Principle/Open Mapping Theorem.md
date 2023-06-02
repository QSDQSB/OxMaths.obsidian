#ComplexAnalysis 

```ad-theorem
title: Open mapping theorem
Suppose that $f: U \rightarrow \mathbb{C}$ is [[holomorphic]] and non-constant on a domain $U$. Then for any [[open]] set $V \subset U$ the set $f(V)$ is also open.

```

## Proof
Suppose that $w_{0} \in f(V)$, say $f\left(z_{0}\right)=w_{0}$. Then $g(z)=f(z)-w_{0}$ has a zero at $z_{0}$ which, since $f$ is nonconstant, is **isolated**. Thus we may find an $r>0$ such that $g(z) \neq 0$ on $\bar{B}\left(z_{0}, r\right) \backslash\left\{z_{0}\right\} \subset U$ and in particular since $\partial B\left(z_{0}, r\right)$ is [[Compact]], we have $|g(z)| \geq \delta>0$ on $\partial B\left(z_{0}, r\right)$.
But then if $\left|w-w_{0}\right|<\delta$ it follows $\left|w-w_{0}\right|<|g(z)|$ on $\partial B\left(z_{0}, r\right)$, hence by [[Rouche's Theorem]], since $g(z)$ has a zero in $B\left(z_{0}, r\right)$ it follows $h(z)=g(z)+\left(w_{0}-\right.$ $w)=f(z)-w$ does also, that is, $f(z)$ takes the value $w$ in $B\left(z_{0}, r\right)$. Thus $B\left(w_{0}, \delta\right) \subseteq f\left(B\left(z_{0}, r\right)\right)$ and hence $f(U)$ is [[Open]] as required.