---
aliases: [MSE]
tag: [FOSI,AppliedStats]
---
## Definition
The [[mean squared error]] (MSE) of an [[Estimate|estimator]] $T$ for $g(\theta)$ is defined as
$$
\operatorname{MSE}_\theta(T)=\mathbb{E}_\theta\left[(T-g(\theta))^2\right] .
$$
(This is also often called the quadratic loss function.)
## Proposition 4.8
In general, for an [[Estimate|estimator]] $T$ for $g(\theta)$,
$$
\operatorname{MSE}_\theta(T)=\operatorname{Var}_\theta(T)+\underbrace{\left(\mathbb{E}_\theta[T]-g(\theta)\right)^2}_{\text {bias }^2} .
$$
In particular, if $T$ is [[Bias|unbiased]], $\operatorname{MSE}_\theta(T)=\operatorname{Var}_\theta(T)$.