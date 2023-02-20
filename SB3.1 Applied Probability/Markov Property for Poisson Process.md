---
aliases: [Markov property]
tags: [Probability]
---
```ad-seealso
[[Markov Property]]
```
## Theorem 2.3
Let $X=\left(X_t\right)_{t \geq 0}$ be a [[Poisson process]] of rate $\lambda$ started from 0. Fix $t \geq 0$. Then, given $X_t=k,\left(X_r\right)_{r \leq t}$ and $\left(X_{t+s}\right)_{s \geq 0}$ are independent and $\left(X_{t+s}\right)_{s \geq 0}$ is a [[Poisson process]] of rate $\lambda$ started from $k$.

### Proof of Theorem 2.3
Set $\tilde{X}_s=X_{t+s}$. Conditional on $X_t=k$, the holding times of $\left(\tilde{X}_s\right)_{s \geq 0}$ are $\tilde{Z}_1, \tilde{Z}_2, \ldots$ where
$$
\tilde{Z}_1=T_{k+1}-t=Z_{k+1}-\left(t-T_k\right), \quad \tilde{Z}_n=Z_{k+n}, \quad n \geq 2 .
$$
Note that $Z_1, Z_2, \ldots \stackrel{\text { i.i.d. }}{\sim} \operatorname{Exp}(\lambda)$. We have
$$
\left\{X_t=k\right\}=\left\{T_k \leq t<T_{k+1}\right\}=\left\{T_k \leq t\right\} \cap\left\{Z_{k+1}>t-T_k\right\} .
$$
By the extended memoryless property, conditionally on $Z_{k+1}>t-T_k$ we have that $\tilde{Z}_1=$ $Z_{k+1}-\left(t-T_k\right) \sim \operatorname{Exp}(\lambda)$ independently of $T_k$. Furthermore, $Z_{k+2}, Z_{k+3}, \ldots$ are i.i.d. $\operatorname{Exp}(\lambda)$ independent of $Z_1, Z_2, \ldots Z_k$. It follows that, given $X_t=k, \tilde{Z}_1, \tilde{Z}_2, \ldots$ are i.i.d. $\operatorname{Exp}(\lambda)$ and independent of $Z_1, Z_2, \ldots Z_k$.
Since, given $X_t=k$,
$$
\begin{array}{l}
X_r=\#\left\{1 \leq n \leq k: \sum_{i=1}^n Z_i \leq r\right\}, \quad r \leq t \\
\tilde{X}_s=k+\#\left\{n \geq 1: \sum_{i=1}^n \tilde{Z}_i \leq s\right\}, \quad s \geq 0
\end{array}
$$
we see that $\left(X_r\right)_{r \leq t}$ and $\left(\tilde{X}_s\right)_{s \geq 0}$ are conditionally [[independent]], and that $\left(\tilde{X}_s\right)_{s \geq 0}$ is a $\operatorname{PP}(\lambda)$ started from $k$.