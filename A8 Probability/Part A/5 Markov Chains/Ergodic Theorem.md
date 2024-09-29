#Probability 
## Theorem 6.4 (Convergence to equilibrium)
Suppose $P$ is irreducible and aperiodic, with stationary distribution $\pi$. If $\left(X_n, n \geq 0\right)$ is a Markov chain with transition matrix $P$ and any initial distribution, then for all $j \in I$,
$$
\mathbb{P}\left(X_n=j\right) \rightarrow \pi_j \text { as } n \rightarrow \infty .
$$

In particular,
$$
p_{i j}^{(n)} \rightarrow \pi_j \text { as } n \rightarrow \infty, \text { for all } i \text { and } j \text {. }
$$
## Theorem 6.5
```ad-theorem
title: Ergodic Theorem
Let transition matrix $P$ be irreducible. Let $V_i(n)$ be the number of visits to state $i$ before time $n$, that is
$$
V_i(n)=\sum_{r=0}^{n-1} \mathbf{1}\left\{X_r=i\right\} .
$$
Then for any initial distribution, and for all $i \in I$,
$$
\frac{V_i(n)}{n} \rightarrow \frac{1}{m_i} \text { almost surely, as } n \rightarrow \infty .
$$
That is,
$$
\mathbb{P}\left(\frac{V_i(n)}{n} \rightarrow \frac{1}{m_i} \text { as } n \rightarrow \infty\right)=1
$$
```
