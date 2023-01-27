#InfoTheory 
## Theorem
```ad-theorem
title: Jensen's Inequality
Let $X$ be a real-valued random variable such that $\mathbb{E}[X]$ exists. If $\phi: \mathbb{R} \longrightarrow \mathbb{R}$ is a **convex** function such that $\mathbb{E}[|\phi(X)|]<+\infty$, then
$$
\phi(\mathbb{E}[X]) \leq \mathbb{E}[\phi(X)]
$$
If $\phi$ is **strictly convex**, then the equality holds iff $X$ is constant with probability one.
```
