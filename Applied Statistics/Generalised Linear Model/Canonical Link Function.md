---
aliases: [canonical link]
tags: [AppliedStats] 
---
Recall that we have both $\eta=\eta(\theta)$ and $\theta=\theta(\eta)$. One particularly simple possibility is that $\theta=\eta$.
## Definition

```ad-definition
title: Canonical Link Function
The canonical [[link function]] is the $g$ for which $\eta=g(\mu)=\theta$. As
$$
\theta=\kappa^{\prime-1}(\mu)
$$
it follows that $\eta=\theta$ if $g=\kappa^{\prime-1}$.
```

^definition-cannonical-link-function

```ad-example
title: Canonical link of Binomial distribution
$Y \sim \operatorname{Binomial}(m, \pi)$, for which $\kappa(\theta)=m \log \left(1+e^\theta\right)$
$$
\begin{aligned}
\mu &=E(Y)=\kappa^{\prime}(\theta)=m \frac{e^\theta}{1+e^\theta}=m \pi \\
V(\mu) &=\kappa^{\prime \prime}(\theta)=m\left[\frac{\exp (\theta)}{1+\exp (\theta)}-\frac{\exp (\theta) \exp (\theta)}{(1+\exp (\theta))^2}\right] \\
&=m \pi(1-\pi) \\
&=\frac{\mu(m-\mu)}{m} .
\end{aligned}
$$
For the canonical link: $\theta=\eta=g(\mu)=\kappa^{\prime-1}(\mu)$.
From above $\mu=\kappa^{\prime}(\theta)=m \frac{e^\theta}{1+e^\theta}$, so solving this for $\theta$ will give us $\kappa^{\prime-1}=g$ the canonical link.
Solving: $\theta=\log \frac{\mu}{m-\mu}\left(=\log \frac{\pi}{1-\pi}\right)$.
Hence canonical link $$g(\mu)=\log \frac{\mu}{m-\mu},$$ (and then $\left.\pi=\frac{e^\eta}{1+e^\eta}\right)$.
```


In our models we have $\eta_i=\mathbf{x}_i^T \beta$, and if we specify in the binomial model
$$
\pi_i=\frac{\exp \left(\mathbf{x}_i^T \beta\right)}{1+\exp \left(\mathbf{x}_i^T \beta\right)},
$$
and in the Poisson model
$$
\lambda_i=\exp \left(\mathbf{x}_i^T \beta\right),
$$
then these are canonical link GLM specifications.