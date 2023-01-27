## Definition
A family $\mathcal{P}=\left\{P_\theta: \theta \in \Theta\right\}$ of probabilities (pmf or pdf) on some set $\mathcal{X}$, indexed by $\theta$ is called an [[Exponential Family]] if there exists $k \in \mathbb{N}$, functions $\eta_1, \ldots, \eta_k, B: \Theta \mapsto \mathbb{R}$, statistics $T_1, \ldots, T_k: \mathcal{X} \mapsto \mathbb{R}$ and a non-negative real-valued function $h$ on $\mathcal{X}$ such that the $\mathrm{pdf} / \mathrm{pmfs}$ $p(x ; \theta)$ of $P_\theta$ have the form
$$
\Large
p(x ; \theta)=\exp \left[\sum_{i=1}^k \eta_i(\theta) T_i(x)-B(\theta)\right] h(x)
$$

## Theorem 1.17
```ad-theorem
title: Theorem 1.17
1) If $X_1, \ldots, X_n$ is a sample of independent r.v.s with distributions belonging to an exponential family, then the joint distribution of the vector $\mathbf{X}=\left(X_1, \ldots, X_n\right)$ is an element of an exponential family.
2) If $\mathbf{X}=\left(X_1, \ldots, X_n\right)$ are i.i.d. samples from a $k$-parameter exponential distribution of the form (1.1) with functions $\eta=\left(\eta_1, \ldots, \eta_k\right)$ and $T=\left(T_1, \ldots, T_k\right)$, then the distribution of $\mathbf{X}$ belongs to a a k-parameter [[exponential family]] with natural observation $T_{(n)}(\mathbf{x}):=\sum_{i=1}^n T\left(x_i\right)$.
```

![[Minimal Sufficient#^Theorem2-6]]