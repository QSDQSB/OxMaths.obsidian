---
aliases: [IRLS]
tag: [AppliedStats]
---

## The Algorithm
The IRLS algorithm for estimation of the [[Maximum Likelihood Estimator|MLE]] for a [[Generalised Linear Model|GLM]], iterating until convergence:

```ad-algorithm
title: IRLS Algorithm
1. Start with (for example)
$$
\begin{array}{l}
-\mu_i^{(0)}=\bar{y} \text {, so } \eta_i^{(0)}=g\left(\mu_i^{(0)}\right)=g(\bar{y}) \\
-z_i^{(0)}=\eta_i^{(0)}+g^{\prime}(\bar{y})\left(y_i-\bar{y}\right) \\
>W_{i i}^{(0)}=\left(\phi V(\bar{y}) g^{\prime}(\bar{y})^2\right)^{-1} .
\end{array}
$$
2. For $k=0,1,2, \ldots$ :
$$
\begin{aligned}
\beta^{(k+1)} &=\left(X^T W^{(k)} X\right)^{-1} X^T W^{(k)} z^{(k)} \\
\eta^{(k+1)} &=X \beta^{(k+1)}, \quad \mu^{(k+1)}=g^{-1}\left(\eta^{(k+1)}\right) \\
z^{(k+1)} &=\eta^{(k+1)}+g^{\prime}\left(\mu^{(k+1)}\right)\left(y-\mu^{(k+1)}\right) \\
W^{(k+1)} &=\operatorname{diag}\left(\frac{1}{\phi V\left(\mu^{(k+1)}\right) g^{\prime}\left(\mu^{(k+1)}\right)^2}\right)
\end{aligned}
$$
```
^IRLS-algorithm

```ad-example
title: IRLS for Poisson
Recall $\phi=1, \mu=\lambda, V(\mu)=\lambda=\mu, \eta=X \beta$
Using the [[Canonical Link Function|canonical link]]: $g(\mu)=\log (\mu)=\eta, \mu=\exp (\eta), g^{\prime}(\mu)=1 / \mu$.
We then have that:
$$
\begin{aligned}
z &=\eta+g^{\prime}(\mu)(y-\mu) \\
&=\eta+\frac{y-\mu}{\mu} \\
W &=\operatorname{diag}\left(\frac{1}{\phi V(\mu) g^{\prime}(\mu)^2}\right) \\
&=\operatorname{diag}\left(\mu_1, \mu_2, \ldots, \mu_n\right) .
\end{aligned}
$$
```
### IRLS Under Canonical Link Function
Under [[Canonical Link Function|canonical link]], we will have $$V(\mu_i)g'(\mu_i)=1,$$9 then we can simplify $$W_{ii}=\frac{1}{\phi g'(\mu_i)}=\frac{V(\mu_i)}{\phi}.$$ Further, $$z_i=(X\beta)_i+\frac{y_i-\mu_i}{V(\mu_i)}$$
## Limit Distribution and Variance of MLEs
Recall that as $\widehat{\beta}$ is an [[Maximum Likelihood Estimator|MLE]] then, as $n \rightarrow \infty$,
$$
\sqrt{n}(\widehat{\beta}-\beta) \stackrel{d}{\rightarrow} N\left(0,\left(\lim _{n \rightarrow \infty}\left(\frac{1}{n} I\right)\right)^{-1}\right),
$$
and asymptotically, or approximately,
$$
\widehat{\beta} \stackrel{a}{\sim} N\left(\beta, I^{-1}\right) .
$$
For a [[Generalised Linear Model|GLM]] we have seen that $I=X^T W X$.
So we have variances
$$
\operatorname{var}\left(\widehat{\beta_j}\right) \approx I_{j j}^{-1}=\left(X^T W X\right)_{j j}^{-1} .
$$
It follows that, as $n \rightarrow \infty$,
$$
\frac{\widehat{\beta}_j-\beta_j}{\sqrt{I_{j j}^{-1}}} \stackrel{d}{\rightarrow} N(0,1),
$$
and also
$$
\frac{\widehat{\beta}_j-\beta_j}{\sqrt{I_{j j}^{-1}}} \stackrel{d}{\rightarrow} N(0,1),
$$
where in the second case $\widehat{I}_{j j}^{-1}=\widehat{\operatorname{var}}\left(\widehat{\beta}_j\right)$ is calculated using
$$
\widehat{I}=I(\widehat{\beta})=X^T W(\widehat{\beta}) X \text {. }
$$
We can use this result to construct an approximate $1-\alpha$ [[confidence interval]] for $\beta_j$ as
$$
\widehat{\beta_j} \pm z_{\alpha / 2} \sqrt{\widehat{\operatorname{var}}\left(\widehat{\beta_j}\right)},
$$
where $z_{\alpha / 2}$ is the upper $\alpha / 2$ point of the standard normal distribution, e.g. $z_{0.025}=1.96$

This gives us an asymptotic test for $H_0: \beta_j=\delta, \delta \in \mathbb{R}$, as, under the null,
$$
z_j(\delta)=\frac{\widehat{\beta}_j-\delta}{\sqrt{\widehat{\operatorname{var}}\left(\widehat{\beta_j}\right)}}=\frac{\widehat{\beta}_j-\delta}{s e\left(\widehat{\beta}_j\right)} \stackrel{d}{\rightarrow} N(0,1), \quad \text { as } n \rightarrow \infty .
$$
$z_j(\delta)$ is the square root of the **Wald test statistic**.
Standard output in $\mathrm{R}$ presents results for $z_j(0)$, denoted " $\mathrm{z}$ value", and hence is a test for $H_0: \beta_j=0$.
