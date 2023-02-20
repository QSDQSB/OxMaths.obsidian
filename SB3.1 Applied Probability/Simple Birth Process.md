#Probability 
## Definition
Let $\left(\lambda_n\right)_{n \geq 0}$ be a sequence such that $0 \leq \lambda_n<\infty$ for all $n \geq 0$. Fix $k \in \mathbb{N}$ and let $Z_1, Z_2, \ldots$ be [[independent]] random variables such that $Z_n \sim \operatorname{Exp}\left(\lambda_{k+n-1}\right)$ for $n \geq 1$. Then the process $\left(X_t\right)_{t \geq 0}$ defined by
$$
X_t=k+\#\left\{n \geq 1: \sum_{i=1}^n Z_i \leq t\right\}
$$
is called a [[simple birth process]], started from $k$.

### Proposition 3.3

```ad-theorem
title: Competing Exponentials
Let $E_1, E_2, \ldots, E_n$ be independent and identically distributed $\operatorname{Exp}(\lambda)$ random variables, thought of as the times until $n$ alarm clocks ring. Then
$$
M:=\min \left\{E_1, E_2, \ldots, E_n\right\},
$$
the time until the first clock rings, has $\operatorname{Exp}(n \lambda)$ distribution. Let $K$ be the index of the first clock to ring. Then $K$ is uniformly distributed on $\{1,2, \ldots, n\}$ and conditionally on $K=k$, the random variables $M$ and $\left\{E_j-M: j \neq k\right\}$ are independent and $E_j-M \sim \operatorname{Exp}(\lambda)$.
```

[[Simple birth process]] has the [[Markov property]].