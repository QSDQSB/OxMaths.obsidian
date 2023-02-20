#Probability 

## Definition
Consider a [[simple birth process]] $X$ with rates $\left(\lambda_n\right)_{n \geq 0}$ started from $k \in \mathbb{N}$, and let $T_n=\inf \left\{t \geq 0: X_t=k+n\right\}$ for $n \geq 1$. Let $T_{\infty}=\lim _{n \rightarrow \infty} T_n=\sum_{i=1}^{\infty} Z_i$ (where we allow $\infty$ as a possible value for the limit). Then we say [[explosion]] is possible if $\mathbb{P}\left(T_{\infty}<\infty\right)>0$.

## Theorem 3.7
```ad-theorem
title: Criterion for Explosion Possibility
Let $X$ be a [[simple birth process]] started from $k$.
1) If $\sum_{i=k}^{\infty} \frac{1}{\lambda_i}<\infty$ then $\mathbb{P}\left(T_{\infty}<\infty\right)=1$ i.e. [[explosion]] occurs with probability 1.
2) If $\sum_{i=k}^{\infty} \frac{1}{\lambda_i}=\infty$ then $\mathbb{P}\left(T_{\infty}<\infty\right)=0$ i.e. the probability that [[explosion]] occurs is 0 .
```
### Proof of Theorem 3.7
Without loss of generality, we shall suppose that $k=0$ (otherwise, simply shift the indices).
1) We have
$$
\mathbb{E}\left[T_{\infty}\right]=\mathbb{E}\left[\sum_{i=1}^{\infty} Z_i\right]=\sum_{i=1}^{\infty} \mathbb{E}\left[Z_i\right]=\sum_{i=1}^{\infty} \frac{1}{\lambda_i},
$$
where we may interchange the sum and expectation by Tonelli's theorem. Since the series is finite, $\mathbb{E}\left[T_{\infty}\right]<\infty$, which implies that $\mathbb{P}\left(T_{\infty}<\infty\right)=1$.
2) Note that $\mathbb{P}\left(T_{\infty}<\infty\right)=0$ iff $\mathbb{P}\left(T_{\infty}=\infty\right)=1$, and that the latter is implied by $\mathbb{E}\left[e^{-T_{\infty}}\right]=$ 0 . Now for any $n$,
$$
\mathbb{E}\left[e^{-T_{\infty}}\right] \leq \mathbb{E}\left[\exp \left(-\sum_{i=1}^n Z_i\right)\right]=\prod_{i=1}^n \mathbb{E}\left[\exp \left(-Z_i\right)\right]
$$