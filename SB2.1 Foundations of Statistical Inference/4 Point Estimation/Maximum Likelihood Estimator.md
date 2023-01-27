---
aliases: [MLE, maximum likelihood estimate]
tag: [Statistics, FOSI]
---
## Definition
```ad-definition
title: MLE
An [[Estimate|estimator]] $T$ is called a maximum likelihood estimator $(M L E)$ for $\theta$ if
$$
L(T(x), x)=\max _{\theta \in \Theta} L(\theta, x) \quad \forall x \in \mathcal{X},
$$
and is denoted by $\widehat{\theta}_{\mathrm{MLE}}$.
```

## MLE for exponential families
```ad-theorem
title: Lemma 4.6
Consider a $k$-parameter [[exponential family]] $\mathcal{P}=$ $\{f(\cdot ; \eta): \eta\}$ in natural parameterisation
$$
L(\eta ; x)=\exp \left\{\sum_{j=1}^k \eta_j T_j(x)-B(\eta)\right\} h(x)
$$
Then any MLE of $\phi$ satisfies,
$$
T_j(x)=\frac{\partial B}{\partial \eta_i}\left(\widehat{\eta}_{M L E}\right), \quad j=1, \ldots, k .
$$
If $\mathcal{P}$ is strictly $k$-parameter and (4.2) admits a solution, then it is unique.
```
### Proof
The first statement follows trivially from [[Natural Parameter Space#Theorem 1.15]]. For the second statement, also follows by [[Natural Parameter Space#Theorem 1.15]] note that
$$
\operatorname{Cov}_\eta(T)=\left(\frac{\partial^2}{\partial \eta_i \eta_j} B(\eta)\right)_{i j} .
$$
By Propositions 1.9, 1.10, $\operatorname{Cov}_\eta(T)$ is strictly positive definite. Therefore the negative log-likelihood is strictly concave and therefore any local maximum is also a global maximum.