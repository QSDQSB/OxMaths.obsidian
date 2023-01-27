#AppliedStats 

## Definition
The [[Scaled Deviance]] $D(y)$ for our [[Generalised Linear Model|GLM]] is related to the log-likelihood:
$$
D(y)=2\left(\ell\left(\widehat{\theta}^{(s)} ; y\right)-\ell(\widehat{\beta} ; y)\right) .
$$
This is of course a [[Likelihood ratio test|LRT]] statistic, comparing the [[Saturated Model]] with the GLM of interest, and $D(y) \geqslant 0$.

In general, $D(y)$ depends on $\phi$, and the deviance itself is given by deviance $=\phi D(y)$, but as in the binomial and Poisson models we consider $\phi=1$, this distinction is immaterial.

### Null Scaled Deviance
The null (scaled) deviance $D^{(0)}(y)$ is defined as
$$
D^{(0)}(y)=2\left(\ell\left(\widehat{\theta}^{(s)} ; y\right)-\ell\left(\widehat{\theta}^{(0)} ; y\right)\right) .
$$