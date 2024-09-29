---
aliases: [MCMC, Metropolis-Hastings, Metropolis-Hastings algorithm, MH-MCMC]
---
#Statistics 
```ad-remark
The [[Metropolis Hastings Markov Chain Monte Carlo algorithm]] (or [[Metropolis Hastings Markov Chain Monte Carlo algorithm|MCMC]], for short) is an algorithm for simulating a [[Markov Chain]] with any given equilibrium distribution.
```

## Theorem 8.1
(i) If there is a probability mass function $\pi(i), i \in \Omega$ satisfying $\pi(i) \geq 0, \sum_{i \in \Omega} \pi(i)=1$ and
$$
\pi(i) P_{i, j}=\pi(j) P_{j, i} \quad \text { for all pairs } i, j \in \Omega,
$$
then $\pi=\pi P$ so $\pi$ is **stationary** for $P$.

(ii) If in addition $p^{(0)}=\pi$ then $P^{\prime}=P$ and the chain is *reversible* with respect to $\pi$.

## Theorem 8.2.
If $\left\{X_{t}\right\}_{t=0}^{\infty}$ is an irreducible and aperiodic Markov chain on a finite space of states $\Omega$, with stationary distribution $p$ then, as $n \rightarrow \infty$, for any bounded function $f: \Omega \rightarrow R$,
$$
\frac{1}{n} \sum_{t=0}^{n-1} f\left(X_{t}\right) \rightarrow E_{p}(f(X))
$$
```ad-note
The convergence is **almost surely**, which already implies convergence in probability.
```
## Metropolis-Hastings MCMC algorithm
- We will start with simulation of $\operatorname{rv} X$ on a finite state space. Let $p(x)=\tilde{p}(x) / Z_{p}$ be the pmf on finite state space $\Omega=\{1,2, \ldots, m\}$.
- We will call $p$ the (pmf of the) target distribution. This is the one we want to sample.
- Fix a 'proposal' [[Transition matrix]] $q(y \mid x)$. We will use the notation $Y \sim q(\cdot \mid x)$ to $\operatorname{mean} \operatorname{Pr}(Y=y \mid X=x)=$ $q(y \mid x)$


```ad-algorithm
==$p$== is a given p.m.f. of the target distribution.
==$\tilde{p}$== is an unnormalised p.m.f., with $Z_{p}$ being its normalising factor
==$q(x\mid y)$== is a proposal distribution, something arbitrarily chosen, as long as it has the same probability space as $p$. 
(**Quote**: $\color{green}\text{Anything irreducible will do.}$)

#### Algorithm 8.1
If $X_{t}=x$, then $X_{t+1}$ is determined in the following way.
1. Let $Y \sim q(\cdot \mid x)$ and $U \sim U(0,1)$. Simulate $Y=y$ and $U=u$.
2. If
$$
u \leq \min \left\{1, \frac{\tilde{p}(y) q(x \mid y)}{\tilde{p}(x) q(y \mid x)}\right\}
$$
set $X_{t+1}=y$, otherwise set $X_{t+1}=x$.
```
^MCMC-Algorithm

In order to run this [[Markov chain]] simulation we need to specify a `start state` $X_{0}=x_{0}$ and a `proposal mechanism` $q(y \mid x)$. We then repeat steps 1 and 2 of algorithm $8.1$ to generate a sequence $X_{0}, X_{1}, X_{2}, \ldots, X_{n}$, and these are our correlated samples distributed according to $p$.
### Corollary 8.4.
If the [[Markov chain]] $X_{0}, X_{1}, X_{2}, \ldots$ simulated by Algorithm 8.1 is irreducible and aperiodic, then, for any bounded function $f: \Omega \rightarrow R$
$$
\frac{1}{n} \sum_{t=0}^{n-1} f\left(X_{t}\right) \rightarrow E_{p}(f(X))
$$
with convergence as for the [[Ergodic Theorem]].

### Example: MCMC for Poisson Variates
Use MCMC to simulate **Poisson variates**.

Let $p(x)=\exp (-\lambda) \lambda^{x} / x!$  and $X \sim p$. We need a proposal mechanism which takes us around the space $\Omega=\{0,1,2, \ldots\}$ of $X$. Let
$$
q(y \mid x)=\left\{\begin{array}{cc}
1 / 2 & \text { if } y=x \pm 1 \\
0 & \text { otherwise }
\end{array}\right.
$$
Given $x$ we generate $y$ by tossing a coin and adding or subtracting one. Here is a MCMC algorithm simulating $X_{t} \sim \operatorname{Poisson}(\lambda)$. Start with some arbitrary starting point, for example, $X_{t}=0$.

```ad-algorithm
If $X_{t}=x$ then $X_{t+1}$ is determined in the following way.
- Simulate $V \sim U(0,1)$, and set $y=x+1$ if $V>1 / 2$, otherwise $y=x-1$.
- Simulate $U \sim U(0,1)$.
- If $U \leq \alpha(y \mid x)$ set $X_{t+1}=y$ and otherwise set $X_{t+1}=x$.
- Compute $\alpha$. There are two main cases. If $y=x+1$ then
$$
\begin{aligned}
\alpha(x+1 \mid x) &=\min \left(1, \frac{\tilde{p}(y) q(x \mid y)}{\tilde{p}(x) q(y \mid x)}\right) \\
&=\min \left(1, \frac{\exp (-\lambda) \lambda^{x+1} /(x+1) !}{\exp (-\lambda) \lambda^{x} / x !} \times \frac{1 / 2}{1 / 2}\right) \\
&=\min \left(1, \frac{\lambda}{x+1}\right)
\end{aligned}
$$
If $y=x-1$ then
$$
\alpha(x-1 \mid x)=\min \left(1, \frac{x}{\lambda}\right)
$$

```

```ad-note
We must always check the behavior at the boundary of $\Omega$. What happens if we step outside the set of allowed states? This would happen if $x=0$ and we propose $y=-1$. The simplest way to deal with this is to define $p(-1)=0$ (or in general $p(y)=0$ for $y \notin \Omega)$. Then
$$
\begin{aligned}
\alpha(-1 \mid 0) &=\min \left(1, \frac{\tilde{p}(-1) q(0 \mid-1)}{\tilde{p}(0) q(-1 \mid 0)}\right) \\
&=\min (1,0) \\
&=0
\end{aligned}
$$
so if we propose to leave the space, the acceptance probability is zero, so we reject the candidate and stay where we are.
```

```R
#MCMC simulate X_t according to a Poisson dbn of mean lambda=3. 
lambda<-3
n<-10000
X<-rep(NA,n)
X[1]<-0

for (t in 1:(n-1)) {
	x<-X[t]
	y<-x+2*(runif(1)<=0.5)-1
	if (y>x) { 
		a<-lambda/(x+1) 
	}

	if (y<x & y>=0) {
		a<-x/lambda
	}
	if (y<0) {
		a<-0 
	} 

	U<-runif(1) 
	if (U<=a) {
		X[t+1]<-y 
	} else {
		X[t+1]<-x
	}
} 

> X[1:10] #first 10 states visited
```

## MCMC for state spaces which are not ﬁnite

### Example: MCMC for a standard Normal distribution

==target density==	$\tilde{p}(x) \propto \exp \left(-x^{2} / 2\right)$
==proposal density== $q(y \mid x)=\frac{1}{2 a} \mathbb{I}_{x-a<y<x+a}$, (fix a constant $a > 0$)

```ad-algorithm
title: Algorithm 8.4 for $X_{t} \sim N(0,1)$
Start with with an arbitrary point $X_{0}=0$ say. If $X_{t}=x$ then $X_{t+1}$ is determined in the following way.
- Simulate $V \sim U(0,1)$ iid and set $Y=x+(2 V-1) a$. Simulate $U \sim U(0,1)$.
- If $U \leq \alpha(y \mid x)$ set $X_{t+1}=y$ and otherwise set $X_{t+1}=x$. Here
$$
\begin{aligned}
\alpha(y \mid x) &=\min \left(1, \frac{\tilde{p}(y) q(x \mid y)}{\tilde{p}(x) q(y \mid x)}\right) \\
&=\min \left(1, \exp \left(-y^{2} / 2+x^{2} / 2\right)\right)
\end{aligned}
$$
```

### Example: MCMC for MVN
Here is a [[Metropolis Hastings Markov Chain Monte Carlo algorithm]] simulating ==$X_{t} \sim N(\mu, \Sigma)$==.

```ad-algorithm
title: Algorithm 8.5
Start with with an arbitrary point $X_{0}=(0,0)^{T}$ say in $\mathbb{R}^{2}$. If $X_{t}=x$ then $X_{t+1}$ is determined in the following way.
- Simulate $V_{1}, V_{2} \sim U(0,1)$ iid and set $Y_{1}=x_{1}+\left(2 V_{1}-1\right) a$ and $Y_{2}=$ $x_{2}+\left(2 V_{2}-1\right) a$. Simulate $U \sim U(0,1)$.
- If $U \leq \alpha(y \mid x)$ set $X_{t+1}=y$ and otherwise set $X_{t+1}=x$. Here


$$
\begin{aligned}
\alpha(y \mid x) &=\min \left(1, \frac{\tilde{p}(y) q(x \mid y)}{\tilde{p}(x) q(y \mid x)}\right) \\
&=\min \left(1, \exp \left(-(y-\mu)^{T} \Sigma^{-1}\frac{y-\mu}{2}+(x-\mu)^{T} \Sigma^{-1}\frac{x-\mu}{2}\right)\right)
\end{aligned}
$$

```

## MCMC for Conditional Distributions
It follows that $\tilde{p}(x \mid X \in B)=\tilde{p}(x)$ for $X \in B$ and $\tilde{p}(x \mid X \in B)=0$ for $x \notin B$. 

In other words, the MH ratio of the chain simulating the conditional distribution has just the same $\mathrm{MH}$ ratio as the unconditioned [[Markov chain|chain]], for $x, y$ both in $B$, and if $y$ falls outside $B$ we simply reject it. 

We should check that rejecting candidates in this way does not cost us irreducibility within $B$, but otherwise, things are straightforward.

### Example: MCMC for Conditional Bivariate Normal Distribution
Simulate the bivariate normal distribution $X \sim$ $N(\mu, \Sigma)$ of but conditioned on $|X-(3,3)|<1$.

```ad-algorithm
title: Algorithm 8.6
Start with $X_{0}=(3,3)^{T}$ so the start state satisfies $|X-(3,3)|<1$. If $X_{t}=x$ then $X_{t+1}$ is determined in the following way.
- Simulate $V_{1}, V_{2} \sim U(0,1)$ iid and set $Y_{1}=x_{1}+\left(2 V_{1}-1\right) a$ and $Y_{2}=$ $x_{2}+\left(2 V_{2}-1\right) a$. Simulate $U \sim U(0,1)$.
- If $|Y-(3,3)|<1$ and $U \leq \alpha(y \mid x)$ set $X_{t+1}=y$ and otherwise set $X_{t+1}=x$.

Here
$$
\alpha(y \mid x)=\min \left(1, \frac{\exp \left(-(y-\mu)^{T} \Sigma^{-1}(y-\mu) / 2\right)}{\exp \left(-(x-\mu)^{T} \Sigma^{-1}(x-\mu) / 2\right)}\right)
$$
is unchanged.

We could have put $\tilde{p}(y) \mathbb{I}_{|y-(3,3)|<1}$ in the numerator of the acceptance probability itself. However, what we have done amounts to the same thing.
```