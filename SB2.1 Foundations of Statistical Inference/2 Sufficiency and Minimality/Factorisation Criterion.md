---
aliases: [factorisation lemma]
tag: [FOSI]
---
## The Factorisation Criterion
> [!theorem] The Factorisation Criterion
> Suppose $X \sim f(x ; \theta)$. Then a [[Statistic]] $T(X)$ is [[Sufficient]] for $\theta$ *if and only if* $f$ can be written as
> $$f(x ; \theta)=g(T(x), \theta) h(x)$$
> for some non-negative functions $g, h$.
### Proof for the discrete case
Suppose $T$ is [[Sufficient]] and write $t=T(x)$. So
$$
f(x ; \theta)=\mathbb{P}_\theta(X=x)=\mathbb{P}_\theta(X=x, T=t)=\mathbb{P}_\theta(X=x \mid T=t) \mathbb{P}_\theta(T=t) .
$$
Then just note that as $T$ is [[Sufficient]], $\mathbb{P}_\theta(X=x \mid T=t)=: h(x)$ is independent of $\theta$, and $\mathbb{P}_\theta(T=t)=: g(t, \theta)$ only depends on $t$ and $\theta$.
Conversely, suppose $f(x ; \theta)=g(t, \theta) h(x)$ for some non-negative functions $g, h$. So
$$
\mathbb{P}_\theta(T=t)=\sum_{x: T(x)=t} \mathbb{P}_\theta(X=x)=\sum_{x: T(x)=t} f(x ; \theta)=g(t, \theta) \sum_{x: T(x)=t} h(x) .
$$
Thus $$\mathbb{P}_\theta(X=x \mid T=t)=\frac{\mathbb{P}_\theta(X=x, T=t)}{\mathbb{P}_\theta(T=t)}=\frac{\mathbb{P}_\theta(X=x)}{\mathbb{P}_\theta(T=t)}=\frac{h(x)}{\sum_{y: T(y)=t} h(y)}$$, which has no dependence on $\theta$. So $T$ is [[Sufficient]] for $\theta$.

### Corollary 2.3
Let $\mathcal{P}=\{f(\cdot ; \theta): \theta \in \Theta\}$ be a $k$-parameter [[Exponential Family]], where
$$
f(x ; \theta)=\exp \left\{\sum_{i=1}^k \eta_i(\theta) T_i(x)-B(x)\right\} h(x) .
$$
Then $\left(T_1(x), \ldots, T_k(x)\right)$ is [[Sufficient]] for $\theta$.