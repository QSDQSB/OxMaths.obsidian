## Definition
A family $\mathcal{P}=\{p(x ; \theta): \theta \in \Theta\}$ of probabilities (pmf or pdf) indexed by $\theta$ is called a [[curved exponential family]] if there exists $q<k \in \mathbb{N}$, real-valued functions $\eta_1, \ldots, \eta_k$ and $B$ on $\Theta \subseteq \mathbb{R}^q$, real-valued statistics $T_1, \ldots, T_k$ and a non-negative real-valued function $h$ on $\mathcal{X}$ such that
1. $\exists \theta: \operatorname{Cov}_\theta T$ is positive definite
2. the pdf/pmfs $p(x ; \theta)$ have the form
$$
p(x ; \theta)=\exp \left[\sum_{i=1}^k \eta_i(\theta) T_i(x)-B(\theta)\right] h(x).
$$

```ad-note
Positive-definiteness of the covariance matrix guarantees that $k$ is not an arbitrary large number. In fact it guarantees that the [[exponential family]] is strictly $k$-parameter, although the parameter space forms a lower-dimensional, non-linear submanifold of the natural parameter space.
```
```ad-example
title: Normal Distribution of Mean µ and Variance µ^2
Let the statistical model be the class of all normal distributions with $N\left(\mu, \mu^2\right)$ where $\mu$ is unknown and $\mu \neq 0$ with parameter $\theta=\mu \in \mathbb{R}^*$.
$$
\small
p(x ; \theta)=\frac{1}{\sqrt{2 \pi} \mu} \exp \left\{-\frac{(x-\mu)^2}{2 \mu^2}\right\}=\frac{1}{\sqrt{2 \pi} \mu} \exp \left\{\frac{\left(-x^2+2 x \mu-\mu^2\right.}{2 \mu^2}\right\}=\frac{1}{\sqrt{2 \pi} \mu} \exp \left\{--\frac{x^2}{2 \mu^2}+\frac{x}{\mu}-\frac{1}{2}\right\}
$$
We thus have
$$
T_1(x)=x, T_2(x)=x^2, \eta_1(\theta)=\mu^{-1}, \eta_2(\theta)=-\mu^{-2} / 2 .
$$
This examples satisfies the definition of Curved Exponential families because the parameter $\theta$ is one dimensional but results in a 2-parameter exponential family. The covariance matrix can be calculated with the known moments
$$
\operatorname{Cov}_\theta T=\left(\begin{array}{cc}
\mu^2 & 2 \mu^3 \\
2 \mu^3 & 6 \mu^4
\end{array}\right)
$$
The covariance matrix is shown to be positive definite for all $\theta \in \Theta$ (the determinant is $2 \mu^6>0$ ). We see that $T_1$ and $T_2$ are $\mathcal{P}$-affine independent and the familly is strictly 2-parameters (the $\eta_i$ are constrained, but not linearly).
```

```ad-example
Suppose $X_1 \sim \mathcal{N}(\theta, 1)$ and $X_2 \sim \mathcal{N}\left(\frac{1}{\theta}, 1\right)$ are independent. Their joint distribution has log-density
$$
\begin{aligned}
\log f(x ; \theta) &=-\frac{\left(x_1-\theta\right)^2}{2}-\frac{\left(x_2-\frac{1}{\theta}\right)^2}{2}+\text { constant } \\
&=x_1 \theta+x_2 \frac{1}{\theta}-\frac{\theta^2}{2}-\frac{\theta^{-2}}{2}+\text { terms in }\left(x_1, x_2\right) \text { alone, }
\end{aligned}
$$
so that $\eta_1=\theta, \eta_2=\frac{1}{\theta}, T_1=x_1$ and $T_2=x_2$. This is a $(2,1)$-curved family.
```