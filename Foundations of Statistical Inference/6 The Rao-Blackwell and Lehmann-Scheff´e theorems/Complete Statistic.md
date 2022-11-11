---
aliases: [complete]
---
## Definition
A statistical model $\left\{P_\theta: \theta \in \Theta\right\}$ is called [[Complete Statistic|complete]] if for any $h: \mathcal{X} \rightarrow \mathbb{R}$,
$$
\mathbb{E}_\theta[h(X)]=0 \forall \theta \in \Theta \Longrightarrow \mathbb{P}_\theta(h(X)=0)=1 \quad \forall \theta \in \Theta .
$$
A [[statistic]] $T$ is called [[complete]] if the model $\left\{P_\theta^T: \theta \in \Theta\right\}$ is [[complete]], i.e.
$$
\mathbb{E}_\theta[h(T)]=0 \forall \theta \in \Theta \Longrightarrow \mathbb{P}_\theta(h(T)=0)=1 \forall \theta \in \Theta .
$$

## Completeness of Exponential Families
```ad-theorem
title: Completeness for exponential families
If $\mathcal{P}$ is a [[Full Rank|full-rank]] [[strictly k-parameter]] [[exponential family]] then the natural observation $T(x)=\left(T_1(x), \ldots, T_k(x)\right)$ is [[sufficient]] and [[Complete Statistic|complete]].
```
>Proof in Page 37

```ad-warning
title: A complete sufficient statistic doesn't always exist
Suppose $X \sim \mathcal{U}(\theta, \theta+1), \theta \in \mathbb{R}$. Then $T(X)=X$ is clearly a [[sufficient]] statistic. By considering the likelihood ratios, it is not difficult to establish that $T$ is also [[Minimal Sufficient|minimal]].

Now suppose that $\tilde{T}$ is a [[sufficient]] [[statistic]]. By minimality of $T$ we know that there exists a function $g$ such that $x=T(x)=g \circ \tilde{T}(x)$. Consider then the function $t \mapsto \sin (2 \pi g(t))$. We have
$$
\begin{aligned}
\mathbb{E}_\theta[\sin (2 \pi g(\tilde{T}))] &=\int_\theta^{\theta+1} \sin (2 \pi g \circ \tilde{T}(x)) \mathrm{d} x \\
&=\int_\theta^{\theta+1} \sin (2 \pi x) \mathrm{d} x=0
\end{aligned}
$$
for all $\theta$. However
$$
\mathbb{P}_\theta[\sin (2 \pi g(\tilde{T}))=0]=\mathbb{P}_\theta[\sin (2 \pi X)=0]=0,
$$
and thus $\tilde{T}$ cannot be [[complete]]. Since $\tilde{T}$ was any [[sufficient]] [[statistic]], we conclude that the model admits no [[sufficient]] [[Complete Statistic|complete]] statistics.
```

