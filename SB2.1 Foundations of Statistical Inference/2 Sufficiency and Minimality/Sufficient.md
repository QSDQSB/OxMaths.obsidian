## Definition
Suppose $X \sim f(x ; \theta)$ for some parameter $\theta$, A [[Statistic]] $T(X)$ is said to be [[Sufficient]] for $\theta$ if the *conditional distribution* of $X$ given $T$ does not depend on $\theta$. That is,
$$
f(x \mid t, \theta)=f(x \mid t)
$$
```ad-remark
In particular, this means that for any function $g$ the map $\theta \mapsto \mathbb{E}_\theta[g(X) \mid T=t]$ is constant.
```
```ad-example
title: Sum of Successful Trials is Sufficient for Bernoulli
Let $X_1, \ldots, X_n$ be independent $\operatorname{Ber}(p)$ random variables, so that $\mathbb{P}(X=1)=p$ and $\mathbb{P}(X=0)=1-p$, and let $T=\sum_{i=1}^n X_i$, so that $T \sim \operatorname{Bin}(n, p)$. Then, writing $X=\left(X_1, \ldots, X_n\right)$, for any $x \in\{0,1\}^n$ and $t \in\{0, \ldots, n\}$ we have
$$
\begin{aligned}
f(x \mid t, p)=\mathbb{P}(X=x \mid T=t, p) &=\frac{\mathbb{P}(X=x, T=t \mid p)}{\mathbb{P}(T=t \mid p)} \\
&=\frac{\prod_{i=1}^n p^{x_i}(1-p)^{1-x_i}}{\left(\begin{array}{l}
n \\
t
\end{array} p^t(1-p)^{n-t}\right.} \mathbb{1}_{\sum x_i=t} \\
&=\frac{p^t(1-p)^{n-t}}{\left(\begin{array}{l}
n \\
t
\end{array}\right) p^t(1-p)^{n-t}} \mathbb{1}_{\sum x_i=t}=\left(\begin{array}{c}
n \\
t
\end{array}\right)^{-1} \mathbb{1}_{\sum x_i=t},
\end{aligned}
$$
which has no dependence on $p$. So $T$ is sufficient for $p$.

The intuitive meaning of this is that only the number of successes matters for estimating $p$; the order in which successes arrive shouldn't change your guess for $p$.
```

## The Factorisation Criterion
```ad-theorem
title: The Factorisation Criterion
Suppose $X \sim f(x ; \theta)$. Then a [[statistic]] $T(X)$ is [[sufficient]] for $\theta$ *if and only if* $f$ can be written as
$$
f(x ; \theta)=g(T(x), \theta) h(x)
$$
for some non-negative functions $g, h$.
```
### Proof for the discrete case
Suppose $T$ is [[Sufficient]] and write $t=T(x)$. So
$$
f(x ; \theta)=\mathbb{P}_\theta(X=x)=\mathbb{P}_\theta(X=x, T=t)=\mathbb{P}_\theta(X=x \mid T=t) \mathbb{P}_\theta(T=t) .
$$
Then just note that as $T$ is sufficient, $\mathbb{P}_\theta(X=x \mid T=t)=: h(x)$ is independent of $\theta$, and $\mathbb{P}_\theta(T=t)=: g(t, \theta)$ only depends on $t$ and $\theta$.
Conversely, suppose $f(x ; \theta)=g(t, \theta) h(x)$ for some non-negative functions $g, h$. So
$$
\mathbb{P}_\theta(T=t)=\sum_{x: T(x)=t} \mathbb{P}_\theta(X=x)=\sum_{x: T(x)=t} f(x ; \theta)=g(t, \theta) \sum_{x: T(x)=t} h(x) .
$$
Thus $$\mathbb{P}_\theta(X=x \mid T=t)=\frac{\mathbb{P}_\theta(X=x, T=t)}{\mathbb{P}_\theta(T=t)}=\frac{\mathbb{P}_\theta(X=x)}{\mathbb{P}_\theta(T=t)}=\frac{h(x)}{\sum_{y: T(y)=t} h(y)}$$, which has no dependence on $\theta$. So $T$ is [[Sufficient]] for $\theta$.

### Corollary 2.3
Let $\mathcal{P}=\{f(\cdot ; \theta): \theta \in \Theta\}$ be a $k$-parameter exponential family, where
$$
f(x ; \theta)=\exp \left\{\sum_{i=1}^k \eta_i(\theta) T_i(x)-B(x)\right\} h(x) .
$$
Then $\left(T_1(x), \ldots, T_k(x)\right)$ is sufficient for $\theta$.