---
aliases: [radii of convergence]
---
## Radius of Convergence
#ComplexAnalysis 

### Definition
Let $\sum_{n=0}^{\infty} a_{n} z^{n}$ be a power series, and let $S$ be the set of $z \in \mathbb{C}$ at which it converges. The [[radius of convergence]] of the power series is $\sup \{|z|: z \in S\}$, or $\infty$ if the set $S$ is unbounded.

```ad-note
$S$ is always non-empty since $0 \in S$.
```

### Proposition 3.16
Let $\sum_{n=0} a_{n} z^{n}$ be a power series, let $S$ be the subset of $\mathbb{C}$ on which it converges and let $R$ be its [[radius of convergence]]. Then we have
$$
B(0, R) \subseteq S \subseteq \bar{B}(0, R)
$$
The series converges absolutely on $B(0, R)$ and if $0 \leq r<R$ then it converges uniformly on $\bar{B}(0, r)$. Moreover, we have
$$
\frac{1}{R}=\limsup _{n}\left|a_{n}\right|^{1 / n}.
$$

#### Lemma 3.17
Let $\sum_{n=0}^{\infty} a_{n} z^{n}$ and $\sum_{n=0}^{\infty} b_{n} z^{n}$ be power series with [[Radius of Convergence|radii of convergence]] $R_{1}$ and $R_{2}$ respectively. For $|z|<\min \left(R_{1}, R_{2}\right)$, write $s(z), t(z)$ for the functions to which these series converge.
1) The power series $\sum_{n=0}^{\infty}\left(a_{n}+b_{n}\right) z^{n}$ converges in $|z|<\min \left(R_{1}, R_{2}\right)$, to $s(z)+t(z)$.
2) The power series $\sum_{n=0}^{\infty}\left(\sum_{k+l=n} a_{k} b_{l}\right) z^{n}$ converges in $|z|<\min \left(R_{1}, R_{2}\right)$, to $s(z) t(z)$.

### Proposition 3.18: Differentiation of power series
Let $\sum_{n=0}^{\infty} a_{n} z^{n}$ be a power series, with [[radius of convergence]] $R$. Let $s(z)$ be the function to which this series converges on $B(0, R)$. Then power series $t(z)=\sum_{n=1}^{\infty} n a_{n} z^{n-1}$ also has radius of convergence $R$ and on $B(0, R)$ the power series $s$ is [[complex differentiable]] with $s^{\prime}(z)=t(z)$. In particular, a power series is ***infinitely*** [[complex differentiable]] within its [[radius of convergence]].