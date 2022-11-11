---
aliases: [consistent in probability, consistent in MSE, strongly consistent]
tag: [FOSI]
---
## Definition
Let $X_1, \ldots, X_n \stackrel{\text { iid }}{\sim} f(\cdot ; \theta)$ and consider the family of [[Estimate|estimators]] $\widehat{\theta}_n=T_n\left(X_{1: n}\right)$. We say that $T_n\left(X_{1: n}\right)$ is
- *consistent in probability* if for all $\varepsilon>0$
$$
\lim _{n \rightarrow \infty} \mathbb{P}_\theta\left[\left\|T_n\left(X_{1: n}\right)-\theta\right\|>\varepsilon\right] \rightarrow 0 ;
$$
- *consistent in [[Mean Squared Error|MSE]]* if
$$
\lim _{n \rightarrow \infty} \operatorname{MSE}_\theta\left(T_n ; \theta\right) \rightarrow 0
$$
- *strongly consistent* if
$$
\left.\quad \lim _{n \rightarrow \infty} T_n\left(X_{1: n}\right) \rightarrow \theta\right), \quad \mathbb{P}_\theta \text {-almost surely. }
$$
