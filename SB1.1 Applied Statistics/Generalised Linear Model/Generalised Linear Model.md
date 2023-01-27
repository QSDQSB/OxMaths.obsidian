---
aliases: [GLM]
tag: [AppliedStats]
---

## The Inference

```ad-definition
title: Inference
We have the observations $\left(y_i, \mathbf{x}_i\right), i=1, \ldots, n$
- $f\left(y_i ; \theta_i, \phi\right)=\exp \left\{\frac{y_i \theta_i-\kappa\left(\theta_i\right)}{\phi}+c\left(y_i ; \phi\right)\right\}$ ([[Exponential Dispersion Family]])
- We have $\mu_i=E\left(Y_i\right)=\kappa^{\prime}\left(\theta_i\right)$ and hence $\theta_i=\theta\left(\mu_i\right)$,
>e.g. $\theta_i=\log \mu_i$ for the Poisson distribution.
- We specify the linear predictor as $\eta_i=\mathbf{x}_i^T \beta=g\left(\mu_i\right) . g$ is [[link function]].
- Therefore,  $\theta_i=\theta\left(\mu_i\right)=\theta\left(\eta_i\right)=\theta\left(\mathbf{x}_i^T \beta\right)$.
- $f\left(y_i ; \theta_i, \phi\right)=f\left(y_i ; \mathbf{x}_i, \beta, \phi\right)=\exp \left\{\frac{y_i \theta\left(\mathbf{x}_i^T \beta\right)-\kappa\left(\theta\left(\mathbf{x}_i^T \beta\right)\right)}{\phi}+c\left(y_i ; \phi\right)\right\}$
- Canonical link, $\theta\left(\mathbf{x}_i^T \beta\right)=\mathbf{x}_i^T \beta$.
- So we now have just $p$ parameters $\beta_1, \ldots, \beta_p$ in the GLM, if $\phi$ is known.
- Since $\mu_i=E\left(Y_i\right)=g^{-1}\left(\mathbf{x}_i^T \beta\right)$ we are back to the situation with $p$ explanatory variables $\mathbf{x}_i=\left(x_{i 1}, \ldots, x_{i p}\right)^T$ for the $i$ th response, and if $\beta_j>0$ then the mean $\mu_i$ increases as $x_{i j}$ increases.
```

---

## Moments: E(Y) and Var(Y)

$$
1=\int \exp \left\{\frac{y \theta-\kappa(\theta)}{\phi}+c(y ; \phi)\right\} d y
$$
where $\int$ means $\sum$ in the discrete case.
Differentiate w.r.t. $\theta$ :
$$
\begin{aligned}
0 &=\int \frac{1}{\phi}\left(y-\kappa^{\prime}(\theta)\right) \exp \{\ldots\} d y \\
&=\frac{1}{\phi}\left(E(Y)-\kappa^{\prime}(\theta)\right),
\end{aligned}
$$
where $$\kappa^{\prime}(\theta)=\frac{d \kappa(\theta)}{d \theta}$$
Letting $\mu(\theta)=E(Y)$, we obtain $$\mu(\theta)=E(Y)=\kappa^{\prime}(\theta).$$

Differentiating a second time:
$$
\begin{aligned}
0 &=\int\left\{\frac{1}{\phi}\left(-\kappa^{\prime \prime}(\theta)\right)+\frac{1}{\phi^2}\left(y-\kappa^{\prime}(\theta)\right)^2\right\} \exp \{\ldots\} d y \\
&=-\frac{\kappa^{\prime \prime}(\theta)}{\phi}+\frac{1}{\phi^2} \operatorname{var}(Y)
\end{aligned}
$$
where $\kappa^{\prime \prime}(\theta)=\frac{d^2 \kappa(\theta)}{d \theta^2}$.
Hence $$\operatorname{var}(Y)=\phi \kappa^{\prime \prime}(\theta).$$

### Variance Function
We define a variance function $V(\mu)$ by
$$
\operatorname{var}(Y)=\phi V(\mu)
$$
Using $\operatorname{var}(Y)=\phi \kappa^{\prime \prime}(\theta)$, we have $V(\mu)=\kappa^{\prime \prime}\left(\kappa^{\prime-1}(\mu)\right)$.

## MLE for Y
The $Y_i$ are independently distributed. Given the observations $\left(y_i, \mathbf{x}_i\right)$, $i=1, \ldots, n$, the log-likelihood function for $\beta$ is
$$
\ell(\beta)=\sum_{i=1}^n\left\{\frac{y_i \theta_i-\kappa\left(\theta_i\right)}{\phi}+c\left(y_i ; \phi\right)\right\}=\sum_{i=1}^n \ell_i(\beta)
$$
where $\ell_i(\beta)=\log f\left(y_i ; \theta_i, \phi\right)$, and $\theta_i=\theta\left(\mathbf{x}_i^T \beta\right)$.
The [[Maximum Likelihood Estimator|MLE]] for $\beta, \widehat{\beta}=\arg \max _\beta \ell(\beta)$, is the solution to the $p$ score equations
$$
\frac{\partial \ell}{\partial \beta_j}=0, \quad j=1, \ldots, p .
$$
There is no closed form for the [[Maximum Likelihood Estimator|MLE]]. MLEs can be computed numerically using the Newton-Raphson algorithm or the Fisher scoring algorithm.

> For GLMs, the Fisher scoring algorithm is equivalent to an Iteratively Reweighted Least Squares (IRLS) algorithm.

```ad-algorithm
title: Newton-Raphson Algorithm to find MLE
start at some $\beta^{(0)}$ and iterate until convergence using
$$
\beta^{(k+1)}=\beta^{(k)}+\left.J^{-1} \frac{\partial \ell}{\partial \beta}\right|_{\beta^{(k)}}
$$
Here
- $-\frac{\partial \ell}{\partial \beta}$ is the column vector of partial derivatives $\frac{\partial \ell}{\partial \beta}=\left(\frac{\partial \ell}{\partial \beta_1}, \ldots, \frac{\partial \ell}{\partial \beta_p}\right)^T$
- $J$ is the $p \times p$ [[observed information]] matrix, with $(r, j)$ element $-\frac{\partial^2 \ell}{\partial \beta_r \partial \beta_j}$
and in (4.1) both $J^{-1}$ and $\frac{\partial \ell}{\partial \beta}$ are evaluated at $\beta=\beta^{(k)}$.
>We can write $J$ as $J=-\frac{\partial^2 \ell}{\partial \beta \partial \beta^T}$.

> $\beta$ is a column vector and $\beta \beta^T$ is a matrix, so the notation $\frac{\partial \ell}{\partial \beta}$ and $-\frac{\partial^2 \ell}{\partial \beta \partial \beta^T}$ makes sense.
```


```ad-algorithm
title: Fisher Scoring Algorithm
The Fisher scoring algorithm replaces $J$ by $I$ to give the iterations:
$$
\beta^{(k+1)}=\beta^{(k)}+\left.I^{-1} \frac{\partial \ell}{\partial \beta}\right|_{\beta^{(k)}}
$$
where $I$ is the [[Fisher information]] matrix
$$
I=E(J)=E\left(-\frac{\partial^2 \ell}{\partial \beta \partial \beta^T}\right)=-E\left(\frac{\partial^2 \ell}{\partial \beta \partial \beta^T}\right)
$$

Continue on [[#Iteratively Reweighted Least Squares]]
```
^Fisher-scoring-algorithm

### Equivalence of Two Algorithms in Canonical Link
When the link function is canonical link function in our GLM, we will have the methods of scoring and Newton-Raphson being identical.

#### Proof
不知道为什么iPad粘贴不上来了 下次想起来再粘贴吧

### Finding MLE in GLM
For a GLM we can simplify things a bit:
$$
\begin{aligned}
\frac{\partial \ell}{\partial \beta_j} &=\sum_{i=1}^n \frac{\partial \ell_i}{\partial \beta_j}=\sum_{i=1}^n \frac{\partial \ell_i}{\partial \eta_i} \frac{\partial \eta_i}{\partial \beta_j} \\
&=\sum_{i=1}^n \frac{\partial \ell_i}{\partial \theta_i} \frac{d \theta_i}{d \eta_i} x_{i j} \\
&=\sum_{i=1}^n \frac{y_i-\kappa^{\prime}\left(\theta_i\right)}{\phi} \frac{d \theta_i}{d \eta_i} x_{i j} \\
&=\sum_{i=1}^n \frac{y_i-\mu_i}{\phi V\left(\mu_i\right) g^{\prime}\left(\mu_i\right)} x_{i j}
\end{aligned}
$$
where we have used the chain rule several times.

As $\eta_i=g\left(\mu_i\right)$, we have $d \eta_i / d \mu_i=g^{\prime}\left(\mu_i\right)$ and so $d \mu_i / d \eta_i=1 / g^{\prime}\left(\mu_i\right)$. Hence
$$
\frac{d \theta_i}{d \eta_i}=\frac{d \theta_i}{d \mu_i} \frac{d \mu_i}{d \eta_i}=\frac{1}{V\left(\mu_i\right)} \frac{1}{g^{\prime}\left(\mu_i\right)}
$$
using $\frac{d \theta}{d \mu}=\frac{1}{V(\mu)}$.

We can then write the score vector as
$$
\frac{\partial \ell}{\partial \beta}=\sum_{i=1}^n \frac{y_i-\mu_i}{\phi V\left(\mu_i\right) g^{\prime}\left(\mu_i\right)} \mathbf{x}_i=X^T u
$$
where $u=\left(u_1, \ldots, u_n\right)^T$ and where
$$
u_i=\frac{y_i-\mu_i}{\phi V\left(\mu_i\right) g^{\prime}\left(\mu_i\right)} .
$$
Taking transposes:
$$
\frac{\partial \ell}{\partial \beta^T}=u^T X .
$$
Therefore
$$
\frac{\partial^2 \ell}{\partial \beta \partial \beta^T}=\frac{\partial}{\partial \beta} \frac{\partial \ell}{\partial \beta^T}=\frac{\partial u^T}{\partial \beta} X .
$$

#### Fisher Information Matrix
The [[Fisher Information]] matrix $I$ is then given by
$$
I=-E\left(\frac{\partial^2 \ell}{\partial \beta \partial \beta^T}\right)=X^T W X,
$$
where $W$ is a $n \times n$ diagonal matrix, with its diagonal elements equal to
$$
W_{i i}=\frac{1}{\phi V\left(\mu_i\right) g^{\prime}\left(\mu_i\right)^2} \text {. }
$$
##### Proof
We had
$$
\frac{\partial \ell}{\partial \beta}=X^T u ; u_i=\frac{y_i-\mu_i}{\phi V\left(\mu_i\right) g^{\prime}\left(\mu_i\right)},
$$
and
$$
\begin{aligned}
\frac{\partial u_i}{\partial \beta_j} &=\frac{\partial u_i}{\partial \mu_i} \frac{d \mu_i}{d \eta_i} \frac{\partial \eta_i}{\partial \beta_j}=\frac{\partial u_i}{\partial \mu_i} \frac{1}{g^{\prime}\left(\mu_i\right)} x_{i j} \\
&=-\frac{1}{\phi V\left(\mu_i\right) g^{\prime}\left(\mu_i\right)} \frac{1}{g^{\prime}\left(\mu_i\right)} x_{i j}-\left(y_i-\mu_i\right) s\left(\mu_i\right) x_{i j}
\end{aligned}
$$
where $$s\left(\mu_i\right)=\frac{\frac{\partial}{\partial \mu_i}\left(\phi V\left(\mu_i\right) g^{\prime}\left(\mu_i\right)\right)}{\left(\phi V\left(\mu_i\right) g^{\prime}\left(\mu_i\right)\right)^2 g^{\prime}\left(\mu_i\right)}.$$

As $E\left(Y_i-\mu_i\right)=0$, (for [[Fisher Information]], we replace $y_i$ by $Y_i$ and take the expectation), it follows that
$$
-E\left(\frac{\partial u_i}{\partial \beta}\right)=\frac{1}{\phi V\left(\mu_i\right) g^{\prime}\left(\mu_i\right)^2} \mathbf{x}_i .
$$
Hence
$$
\begin{array}{l}
-E\left(\frac{\partial u^T}{\partial \beta}\right)=-E\left(\frac{\partial u_1}{\partial \beta}, \ldots, \frac{\partial u_n}{\partial \beta}\right),\\
=\left[\mathbf{x}_1, \ldots, \mathbf{x}_n\right]\left[\begin{array}{ccc}
\frac{1}{\phi V\left(\mu_1\right) g^{\prime}\left(\mu_1\right)^2} & 0 & 0 \\
0 & \ddots & 0 \\
0 & 0 & \frac{1}{\phi V\left(\mu_n\right) g^{\prime}\left(\mu_n\right)^2}
\end{array}\right]=X^T W \text {, }
\end{array}
$$
and so
$$
I=-E\left(\frac{\partial^2 \ell}{\partial \beta \partial \beta^T}\right)=-E\left(\frac{\partial u^T}{\partial \beta} X\right)=X^T W X .
$$

### Iteratively Reweighted Least Squares
As
$$
\begin{array}{c}
\frac{\partial \ell}{\partial \beta}=X^T u ; I=X^T W X \\
u_i=\frac{y_i-\mu_i}{\phi V\left(\mu_i\right) g^{\prime}\left(\mu_i\right)} ; W_{i i}=\frac{1}{\phi V\left(\mu_i\right) g^{\prime}\left(\mu_i\right)^2},
\end{array}
$$
the [[#^Fisher-scoring-algorithm |Fisher scoring iteration]] becomes
$$
\begin{aligned}
\beta^{(k+1)} &=\beta^{(k)}+\left.I^{-1} \frac{\partial \ell}{\partial \beta}\right|_{\beta^{(k)}} \\
&=\beta^{(k)}+\left(X^T W^{(k)} X\right)^{-1} X^T u^{(k)} \\
&=\left(X^T W^{(k)} X\right)^{-1} X^T W^{(k)}\left(X \beta^{(k)}+\left(W^{(k)}\right)^{-1} u^{(k)}\right)
\end{aligned}
$$
where $W^{(k)}$ and $u^{(k)}$ are evaluated at $\beta^{(k)}$, with $\mu_i^{(k)}=g^{-1}\left(\mathbf{x}_i^T \beta^{(k)}\right)$,

>e.g. $\mu_i^{(k)}=\exp \left(\mathbf{x}_i^T \beta^{(k)}\right)$ for Poisson model with canonical link.

As
$$
\begin{aligned}
{\left[\left(W^{(k)}\right)^{-1} u^{(k)}\right]_i } &=\phi V\left(\mu_i^{(k)}\right) g^{\prime}\left(\mu_i^{(k)}\right)^2 \frac{y_i-\mu_i^{(k)}}{\phi V\left(\mu_i^{(k)}\right) g^{\prime}\left(\mu_i^{(k)}\right)} \\
&=g^{\prime}\left(\mu_i^{(k)}\right)\left(y_i-\mu_i^{(k)}\right)
\end{aligned}
$$
set
$$
z_i^{(k)}=\left[X \beta^{(k)}\right]_i+g^{\prime}\left(\mu_i^{(k)}\right)\left(y_i-\mu_i^{(k)}\right)=\eta_i^{(k)}+g^{\prime}\left(\mu_i^{(k)}\right)\left(y_i-\mu_i^{(k)}\right)
$$
and $z^{(k)}=\left(z_1^{(k)}, \ldots, z_n^{(k)}\right)^T$, so that
$$
\begin{aligned}
\beta^{(k+1)} &=\left(X^T W^{(k)} X\right)^{-1} X^T W^{(k)}\left(X \beta^{(k)}+\left(W^{(k)}\right)^{-1} u^{(k)}\right) \\
&=\left(X^T W^{(k)} X\right)^{-1} X^T W^{(k)} z^{(k)} .
\end{aligned}
$$
Note that $\beta^{(k+1)}$ is a weighted least squares estimator, regressing $z^{(k)}$ on $X$, with weight matrix $W^{(k)}$.

# Model Selection

> We have already seen how to test the null hypothesis $H_0: \beta_j=0$.
How do we test the null hypothesis that multiple parameters are equal to 0 ? We can use the likelihood ratio test ([[Likelihood ratio test|LRT]]).
- For the normal [[Linear Model]] we managed to get an exact test by writing the [[Likelihood ratio test|LRT]] statistic as a monotone function of a statistic $F$, where $F$ has a distribution we know exactly.
- For GLMs we use the limiting $\chi^2$ distribution of the [[Likelihood ratio test|LRT]] statistic, for $n \rightarrow \infty$, as the approximate, or asymptotic, distribution in finite samples.

## LRT for Model Selection
```ad-algorithm
title: Likelihood Ratio Test for GLM
Partition, wlog,
$$
\mathbf{x}=\left(\begin{array}{l}
\mathbf{x}_{(1)} \\
\mathbf{x}_{(2)}
\end{array}\right) ; \beta=\left(\begin{array}{l}
\beta_{(1)} \\
\beta_{(2)}
\end{array}\right),
$$
with $\beta_{(1)}$ a $(p-k)$-vector and $\beta_{(2)}$ a $k$-vector.
Consider the null hypothesis $H_0: \beta_{(2)}=0$.

Let $\widehat{\beta}$ be the MLE in the unrestricted model with $\eta=\mathbf{x}^T \beta$, with maximised log-likelihood given by $\ell(\widehat{\beta} ; y)$.

Let $\widetilde{\beta}_{(1)}$ be the [[Maximum Likelihood Estimator|MLE]] in the restricted, nested, model with $\eta_r=\mathbf{x}_{(1)}^T \beta_{(1)}$, with maximised log-likelihood given by $\ell\left(\widetilde{\beta}_{(1)} ; y\right)$.

Then, under the null, $H_0: \beta_{(2)}=0$, we have for the [[Likelihood ratio test|LRT]] [[statistic]]
$$
\Lambda(Y)=2\left(\ell(\widehat{\beta} ; Y)-\ell\left(\widetilde{\beta}_{(1)} ; Y\right)\right) \stackrel{d}{\rightarrow} \chi_k^2 .
$$
```

## Wald Test

$$W=\frac{(\widehat{\beta_0})^2}{Var(\widehat{\beta_0})}\stackrel{d}{\rightarrow}N(0,1)\quad \text{ Under }H_0$$

## Saturated and Null Models
![[Saturated Model#Saturated Model]]

## Deviance-based $R^2$
A generalisation to GLM of the standard $R^2$ measure of goodness of ﬁt for the linear model is the deviance based measure given by
$$
R_D^2=1-\frac{D(y)}{D^{(0)}(y)},
$$