[[Change detection in autoregressive time series.pdf]]
## Model Assumptions
Let observations $\left\{Y_i\right\}$ have structure
$$\large
Y_i-\mu=\varphi_1\left(Y_{i-1}-\mu\right)+\ldots+\varphi_p\left(Y_{i-p}-\mu\right)+\varepsilon_i, \quad i \geqslant p+1
$$
with $\left\{\varepsilon_i\right\}$ i.i.d. white noise sequence, $E\left(\varepsilon_1\right)=\sigma^2$, and $\xi=\left(\mu, \sigma^2, \varphi_1, \ldots, \varphi_p\right)^t$ the vector of parameters.

### Efficient Score Vector

- Given the first $k$ observations

The efficient score vector $\nabla \xi \ell_k\left(Y_1, \ldots\right.$, $\left.Y_k ; \xi\right)=\nabla \xi \ell_k(\xi)$ are
$$
\large
\begin{aligned}
\frac{\partial}{\partial \mu} \ell_k(\xi) & =\frac{1-\sum_{j=1}^p \varphi_j}{\sigma^2} \sum_{i=1}^k\left[Y_i-\mu-\sum_{j=1}^p \varphi_j\left(Y_{i-j}-\mu\right)\right] \\
\frac{\partial}{\partial \sigma^2} \ell_k(\xi) & =-\frac{k}{2 \sigma^2}+\frac{1}{2 \sigma^4} \sum_{i=1}^k\left[Y_i-\mu-\sum_{j=1}^p \varphi_j\left(Y_{i-j}-\mu\right)\right]^2, \\
\frac{\partial}{\partial \varphi_s} \ell_k(\xi) & =\frac{1}{\sigma^2} \sum_{i=1}^k\left[Y_i-\mu-\sum_{j=1}^p \varphi_j\left(Y_{i-j}-\mu\right)\right]\left(Y_{i-s}-\mu\right), \quad s=1, \ldots, p,
\end{aligned}
$$
#### Information Matrix
$$I(\xi)=I\left(\mu, \sigma^2, \varphi_1, \ldots, \varphi_p\right)=\left(\begin{array}{ccc}\frac{\left(1-\sum_{j=1}^p \varphi_j\right)^2}{\sigma^2} & 0 & 0 \\ 0 & \frac{1}{2 \sigma^4} & 0 \\ 0 & 0 & \frac{1}{\sigma^2} \Gamma\end{array}\right)$$
- $\Gamma$ is the covariance matrix of vector $\left(Y_1, \ldots, Y_p\right)$.

## Testing a Change
- (From Brownian bridge) we get the asymptotic independence of the components of the transformed efficient score vector. Hence we need to define the test **component-wise** only.
- For simultaneous test-for-change in $d$ parameters, to have an overall level of significance $\alpha$, we use $\alpha^*=1-(1-\alpha)^{1 / d}$ for each component.
```ad-note
title: Brownian bridge
Denote the Brownian bridge $$\large\widehat{\mathbf{B}}(u)=n^{-1 / 2} I^{-1 / 2}\left(\widehat{\xi}_n\right)\left(\begin{array}{c}\frac{\partial}{\partial \mu} \ell_{[n u]}\left(\widehat{\xi}_n\right) \\ \frac{\partial}{\partial \sigma^2} \ell_{[n u]}\left(\widehat{\xi}_n\right) \\ \nabla_{\varphi} \ell_{[n u]}\left(\widehat{\xi}_n\right)\end{array}\right)$$
```
We assume that there is a change in $\xi_j, 1 \leqslant j \leqslant p+2$, at $\tau=[\rho n], 0<\rho<1$.
#### Maximum Likelihood Estimator for $\tau$
The estimators $\hat{\mu}_n, \widehat{\sigma}_n^2$, and $\widehat{\boldsymbol{\varphi}}_n$, that are the solutions of the $p+2$ equations $\frac{\partial}{\partial \xi_j} \ell_n(\xi)=0$, $j=1, \ldots, p+2$.
For the two one-sided tests, the MLE of $\tau$ is
$$
\widehat{\tau}_n=\min _k\left\{\frac{\partial}{\partial \xi_j} \ell_k\left(\widehat{\xi}_n\right)=\max _{1<m \leqslant n} \frac{\partial}{\partial \xi_j} \ell_m\left(\widehat{\xi}_n\right)\right\}.
$$
for the two-sided test,
$$
\widehat{\tau}_n=\min _k\left\{\left|\frac{\partial}{\partial \xi_j} \ell_k\left(\widehat{\xi}_n\right)\right|=\max _{1<m \leqslant n}\left|\frac{\partial}{\partial \xi_j} \ell_m\left(\widehat{\xi}_n\right)\right|\right\}
$$

### Change only in $\mu$
If there is change in the mean only from $\mu_1$ to $\mu_2, \mu_1>\mu_2$, at $\tau=[\rho n], 0<\rho<1$, then for the asymptotic distribution of the test statistic we have
$$
\begin{aligned}
& n^{-1 / 2} \sigma_*^{-1}\left[\max _{1<k \leqslant n} \frac{\partial}{\partial \mu} \ell_k\left(\widehat{\xi}_n\right)-\frac{1-\sum_{j=1}^p \widehat{\varphi}_{j n}}{\widehat{\varphi}_n^2} \tau(1-\rho)\left(\mu_1-\mu_2\right)\right] \rightarrow^{\mathcal{D}} N(0,1), \\
& \text { as } n \rightarrow \infty, \quad \text { where } \sigma_*^2=\frac{\left(1-\sum_{j=1}^p \widehat{\varphi}_{j n}\right)^2}{\widehat{\varphi}_n^2} \rho .
\end{aligned}
$$
