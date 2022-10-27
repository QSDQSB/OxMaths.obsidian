## Definition
```ad-definition
title: Fisher Information
When [[Regularity Assumptions|Regs 1-3]] are satisfied, we define the [[Fisher information]] to be
$$
I_X(\theta)=\operatorname{Var}_\theta[S(\theta, X)]=\mathbb{E}_\theta\left[\left(\ell^{\prime}(\theta, X)^2\right]\right.
$$
```
## Theorem 3.7
```ad-theorem
title: Theorem 3.7
Under [[Regularity Assumptions|Regs 1-4]],
$$
I_X(\theta)=-\mathbb{E}_\theta\left[\ell^{\prime \prime}(\theta, X)\right]=\mathbb{E}_\theta[J(\theta ; X)] .
$$
```
### Proof

In the continuous case,
$$
\ell^{\prime \prime}(\theta, x)=\frac{\partial^2}{\partial \theta^2} \log f(x, \theta)=\frac{\partial}{\partial \theta} \frac{\frac{\partial}{\partial \theta} f(x, \theta)}{f(x, \theta)}=\frac{\left(\frac{\partial^2}{\partial \theta^2} f\right) f-\left(\frac{\partial}{\partial \theta} f\right)^2}{f^2}=\frac{\frac{\partial^2}{\partial \theta^2} f}{f}-\left(\frac{\frac{\partial}{\partial \theta} f}{f}\right)^2
$$
By `Reg 4`,
$$
\mathbb{E}_\theta\left[\left(\frac{\partial^2}{\partial \theta^2} f\right) / f\right]=\int_{\mathcal{A}}\left(\frac{\partial^2}{\partial \theta^2} f\right) / f \cdot f \mathrm{~d} x=\int_{\mathcal{A}} \frac{\partial^2}{\partial \theta^2} f \mathrm{~d} x=\frac{\partial^2}{\partial \theta^2} \int_{\mathcal{A}} f \mathrm{~d} x=0
$$
and thus
$$
-\mathbb{E}_\theta\left[\ell^{\prime \prime}(\theta, X)\right]=\mathbb{E}_\theta\left[\left(\frac{\partial}{\partial \theta} f(X, \theta) / f\right)^2\right]=\mathbb{E}_\theta\left[\left(\ell^{\prime}(\theta, X)\right)^2\right] .
$$
The discrete case is similar.

## Properties of the Fisher information
### Information grows with sample size
If $X$ and $Y$ are independent random variables, then
$$
I_{(X, Y)}(\theta)=I_X(\theta)+I_Y(\theta) .
$$
In particular, if $Z=\left(X_1, \ldots, X_n\right)$ where the $X_i$ are i.i.d. copies of $X$, then $I_Z(\theta)=n I_X(\theta)$.
### Reparametrisation
If $\theta=h(\xi)$ where $h$ is differentiable, then the Fisher information of $X$ about $\xi$ is
$$
I_X^*(\xi)=I_X(h(\xi))\left[h^{\prime}(\xi)\right]^2 .
$$
#### Proof
(for the second statement) The log-likelihood w.r.t. $\mathbb{P}_{h(\xi)}$ is $\ell^*(\xi)=\ln p(x ; h(\xi))$ thus the score function is
$$
S^*(\xi ; x)=\frac{\partial}{\partial \xi} \ln p(x ; h(\xi))=\left.\frac{\partial}{\partial \theta} \ln p(x ; \theta)\right|_{\theta=h(\xi)} h^{\prime}(\xi)
$$
and so
$$
\operatorname{Var}_{\xi} S^*(\xi, X)=\operatorname{Var}_{\xi}\left(S(h(\xi), X) h^{\prime}(\xi)\right)=I_X(h(\xi))\left[h^{\prime}(\xi)\right]^2
$$

## Observed Fisher Information
Supposing Regs 1, 2', $3^{\prime}, 4^{\prime}$ hold, define the *observed Fisher information matrix* $J$ by $J(\theta, x)_{j r}=-\frac{\partial^2 \ell(\theta, x)}{\partial \theta_j \partial \theta_r}$ for $j, r=1, \ldots, k$. Then
$$
I_X(\theta)=\mathbb{E}_\theta[J(\theta, X)]
$$