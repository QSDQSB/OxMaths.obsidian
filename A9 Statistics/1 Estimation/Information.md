---
aliases: [Fisher information]
---
## Observed Information
```ad-definition
In a model with scalar parameter $\theta$ and log-likelihood $\ell(\theta)$, the ==observed information== $J(\theta)$ is defined by
$$
\Large
J(\theta)=-\frac{d^{2} \ell}{d \theta^{2}} .
$$
When $\theta=\left(\theta_{1}, \ldots, \theta_{p}\right)$ the observed information matrix is a $p \times p$ matrix $J(\theta)$ whose $(j, k)$ element is
$$
J(\theta)_{j k}=-\frac{\partial^{2} \ell}{\partial \theta_{j} \partial \theta_{k}}
$$
```

^bd40d0

Suppose we expand $\ell(\theta)$ in a Taylor series about $\widehat{\theta}$ :
$$
\ell(\theta) \approx \ell(\widehat{\theta})+(\theta-\widehat{\theta}) \ell^{\prime}(\widehat{\theta})+\frac{1}{2}(\theta-\widehat{\theta})^{2} \ell^{\prime \prime}(\widehat{\theta}) .
$$
Assuming $\ell^{\prime}(\widehat{\theta})=0$ we have
$$
\ell(\theta) \approx \ell(\widehat{\theta})-\frac{1}{2}(\theta-\widehat{\theta})^{2} J(\widehat{\theta})
$$
## Fisher Information
```ad-definition
title: Fisher Information
In a model with scalar parameter $\theta$, the expected or ==Fisher information== is defined by
$$
I(\theta)=E\left(-\frac{d^{2} \ell}{d \theta^{2}}\right) .
$$
When $\theta=\left(\theta_{1}, \ldots, \theta_{p}\right)$ the expected or Fisher information matrix is a $p \times p$ matrix $I(\theta)$ whose $(j, k)$ element is
$$
I(\theta)_{j k}=E\left(-\frac{\partial^{2} \ell(\theta)}{\partial \theta_{j} \partial \theta_{k}}\right) .
$$
This matrix is symmetric.
```

```ad-note
1) When calculating $I(\theta)$ we treat $\ell$ as $\ell(\theta ; \mathbf{X})$ and take expectations over $\mathbf{X}$ (see the example below), e.g. in the scalar case
$$
I(\theta)=E\left(-\frac{d^{2} \ell(\theta ; \mathbf{X})}{d \theta^{2}}\right)
$$
where the expectation is over $\mathbf{X}$.
2) If $X_{1}, \ldots, X_{n}$ are iid from $f(x ; \theta)$ then $I(\theta)=n \times i(\theta)$ where $i(\theta)$ is the expected information in a sample of size 1 . That is, in the scalar case,
$$
\ell(\theta ; \mathbf{X})=\log \left(\prod_{j=1}^{n} f\left(X_{j} ; \theta\right)\right)=\sum_{j=1}^{n} \log f\left(X_{j} ; \theta\right)
$$
and so
$$
I(\theta)=\sum_{j=1}^{n} E\left(-\frac{d^{2} \log f\left(X_{j} ; \theta\right)}{d \theta^{2}}\right)=n \times i(\theta)
$$
where
$$
i(\theta)=E\left(-\frac{d^{2} \log f\left(X_{1} ; \theta\right)}{d \theta^{2}}\right)
$$
```

## Properties of MLEs
$$\Large
\widehat{\theta} \stackrel{\mathrm{D}}{\approx} N\left(\theta, I(\theta)^{-1}\right)$$
### Invariance  Property of MLEs
If $\hat{\theta}$ is the $M L E$ of $\theta$, then for any function $\tau(\theta)$, the $M L E$ of $\tau(\theta)$ is $\tau(\hat{\theta})$.
#### Proof
Let $\hat{\eta}$ denote the value that maximizes $L^{*}(\eta \mid \mathbf{x})$. We must show that $L^{*}(\eta \mid \mathbf{x})=L^{*}[\tau(\hat{\theta}) \mid \mathbf{x}]$.
Since by definition of $L^{*}$, the maxima of $L$ and $L^{*}$ coincide. We have
$$
\begin{aligned}
L^{*}(\hat{\eta} \mid \mathbf{x}) &=\sup _{\eta} \sup _{\{\theta: \tau(\theta)=\eta\}} L(\theta \mid \mathbf{x}) \\
&=\sup _{\theta} L(\theta \mid \mathbf{x}) \\
&=L(\hat{\theta} \mid \mathbf{x})
\end{aligned}
$$
Furthermore,
$$
L(\hat{\theta} \mid \mathbf{x})=\sup _{\{\theta: \tau(\theta)=\tau(\hat{\theta})\}} L(\theta \mid \mathbf{x})=L^{*}(\tau(\hat{\theta}) \mid \mathbf{x})
$$
Hence $L^{*}(\hat{\eta} \mid \mathbf{x})=L^{*}[\tau(\hat{\theta}) \mid \mathbf{x}]$ and that $\tau(\hat{\theta})$ is the MLE of $\tau(\theta)$

### Iterative calculation of $\hat{\theta}$
```note-blue
We will assume it is not examinable. 
```
Suppose $\theta^{(0)}$ is an initial guess for $\hat{\theta}$. Then
$$
0=\frac{d \ell}{d \theta}(\widehat{\theta}) \approx \frac{d \ell}{d \theta}\left(\theta^{(0)}\right)+\left(\widehat{\theta}-\theta^{(0)}\right) \frac{d^{2} \ell}{d \theta^{2}}\left(\theta^{(0)}\right)
$$
Rearranging,
$$
\widehat{\theta} \approx \theta^{(0)}+\frac{U\left(\theta^{(0)}\right)}{J\left(\theta^{(0)}\right)}
$$
where $U(\theta)=\frac{d \ell}{d \theta}$ is called the score function.
So we can start at $\theta^{(0)}$ and iterate to find $\widehat{\theta}$ using
$$
\theta^{(n+1)}=\theta^{(n)}+J\left(\theta^{(n)}\right)^{-1} U\left(\theta^{(n)}\right), \quad n \geqslant 0
$$
An alternative is to replace $J\left(\theta^{(n)}\right)$ by $I\left(\theta^{(n)}\right)$ and this is known as "Fisher scoring".

### Asymptotic Normality of $\hat{\theta}$
Let $\theta$ be a scalar and consider the MLE $\widehat{\theta}=\widehat{\theta}(\mathbf{X})$, a random variable. Subject to regularity conditions,
$$
\Large
\{I(\theta)\}^{1 / 2}(\widehat{\theta}-\theta) \stackrel{D}{\rightarrow} N(0,1)
$$
as sample size $n \rightarrow \infty$. Note that on the LHS, both $I(\theta)$ and $\hat{\theta}$ depend on $n$. Here $\stackrel{D}{\rightarrow}$ means "converges in distribution".
So for large $n$ we have
$$
\Large
\widehat{\theta} \stackrel{\mathrm{D}}{\approx} N\left(\theta, I(\theta)^{-1}\right)
$$
---