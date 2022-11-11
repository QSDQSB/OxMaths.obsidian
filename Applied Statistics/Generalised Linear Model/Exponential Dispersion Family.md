#AppliedStats 

## Definition
An [[exponential dispersion family]] has a pdf/pmf of the form
$$
f(y ; \theta, \phi)=\exp \left\{\frac{y \theta-\kappa(\theta)}{\phi}+c(y ; \phi)\right\} .
$$
In general the parameters $\theta$ and $\phi$ are unknown, `dispersion parameter` $\phi>0$.

> The case $\phi=1$ gives a natural [[exponential family]] (with natural parameter $\theta$). We will mostly deal with binomial and Poisson models where $\phi=1$.

```ad-example
title: Poisson Distribution
$Y \sim \operatorname{Poisson}(\lambda)$
$$
\begin{aligned}
P(Y=y) &=\frac{\lambda^y \exp (-\lambda)}{y !} \\
&=\exp (y \log \lambda-\lambda-\log (y !)) \\
&=\exp \left\{\frac{y \theta-\kappa(\theta)}{\phi}+c(y ; \phi)\right\}
\end{aligned}
$$
```