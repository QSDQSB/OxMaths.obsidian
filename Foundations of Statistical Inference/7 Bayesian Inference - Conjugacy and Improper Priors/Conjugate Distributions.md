---
aliases: [conjugate, conjugacy]
tag: [FOSI]
---

## Definition

Consider a model $(L(\theta, x))_{\theta \in \Theta, x \in \mathcal{X}}$ We say that a family of prior distributions $\left(\pi_\gamma\right)_{\gamma \in \Gamma}$ is [[Conjugate Distributions|conjugate]] if for all $\gamma \in \Gamma$ and $x \in \mathcal{X}$, there exists $\gamma(x) \in \Theta$ such that $\pi_\gamma(\cdot \mid x)=\pi_{\gamma(x)}(\cdot)$.

We say the prior and the posterior are conjugate distributions, and the prior is a conjugate prior for the likelihood $L$.

```ad-attention
a [[Conjugate Distributions|conjugate]] prior is a prior which, when combined with the likelihood, produces a posterior distribution in the same [[exponential family]] as the prior.
```

## Conjugate priors for exponential families

Suppose
$$
L(\theta, x)=h(x) \exp \left\{\sum_{i=1}^k \eta_i(\theta) T_i(x)-B(\theta)\right\}
$$
defines a k-parameter [[exponential family]]. Then the distributions of the form
$$
\pi_\gamma(\theta) \propto \exp \left\{\gamma_0 B(\theta)+\sum_{i=1}^k \gamma_i \eta_i(\theta)\right\}
$$
for parameters $\gamma=\left(\gamma_0, \gamma_1, \ldots, \gamma_k\right)$ are a [[Conjugate Distributions|conjugate]] prior family.