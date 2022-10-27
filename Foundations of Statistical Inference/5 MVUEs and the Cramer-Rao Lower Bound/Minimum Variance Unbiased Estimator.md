---
aliases: [MVUE, regular]
tags: [FOSI]
---
## Definition
$T=T\left(X_1, \ldots, X_n\right)$ is the [[minimum variance unbiased estimator]] ([[Minimum Variance Unbiased Estimator|MVUE]]) for $\theta$ (resp. for $g(\theta)$ ) if
- $T$ is unbiased, and
- for all unbiased estimators $\tilde{T}, \operatorname{Var}_\theta(\tilde{T}) \geqslant \operatorname{Var}_\theta(T) \forall \theta \in \Theta$.

The estimator $T$ is furthermore said to be [[Minimum Variance Unbiased Estimator|regular]] if
$$
\int_{\mathcal{A}} T(x) \frac{\partial}{\partial \theta} L(\theta ; x) d x=\frac{\partial}{\partial \theta} \int_{\mathcal{A}} T(x) L(\theta ; x) d x=\frac{\partial}{\partial \theta} \mathbb{E}_\theta[T(X)]
$$