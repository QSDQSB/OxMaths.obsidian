#Statistics 
```ad-theorem
title: Lemma 1.8.
Suppose $X$ is a continuous $R V$ taking values in $(a, b)$, with strictly increasing $c d f F(x)$ for $x \in(a, b)$. Let $Y=F(X)$. Then $Y \sim U(0,1)$.
```
we obtain
$$
X \sim F^{-1}(U)
$$

## Definition
In a [[Q-Q Plot]] we plot the values of $x_{(k)}$ against $F^{-1}(k /(n+1))$, for $k=1, \ldots, n$. So, roughly, a [[Q-Q Plot]] is a plot of observed values of RVs $\left(x_{(k)}\right)$ against their expectations $\left(F^{-1}(k /(n+1))\right)$.

> If the plotted points are a good approximation to the line $y=x$ then it is reasonable to assume the data are a random sample from $F$.

## Normal Q-Q plot
If data $x_{1}, \ldots, x_{n}$ are from a $N\left(\mu, \sigma^{2}\right)$ distribution, for some unknown $\mu$ and $\sigma^{2}$, then we expect, roughly,
$$
F\left(x_{(k)}\right) \approx \frac{k}{n+1}
$$
where $F$ is the cdf of $N\left(\mu, \sigma^{2}\right)$. Now if $Y \sim N\left(\mu, \sigma^{2}\right)$ then
$$
F(y)=P(Y \leqslant y)=P\left(\frac{Y-\mu}{\sigma} \leqslant \frac{y-\mu}{\sigma}\right)=\Phi\left(\frac{y-\mu}{\sigma}\right)
$$
where $\Phi$ is the cdf of $N(0,1)$. So $(1.4)$ is
$$
\Phi\left(\frac{x_{(k)}-\mu}{\sigma}\right) \approx \frac{k}{n+1}
$$
Hence
$$
x_{(k)} \approx \sigma \Phi^{-1}\left(\frac{k}{n+1}\right)+\mu .
$$
So we can plot [$x_{(k)}$](Order%20Statistics.md) against $\Phi^{-1}\left(\frac{k}{n+1}\right), k=1, \ldots, n$, and see if the points lie on an approximate straight line (with gradient $\sigma$, intercept $\mu$).

## Exponential Q-Q plot
The exponential distrbution with mean $\mu$ has $\operatorname{cdf} F(x)=1-e^{-x / \mu}, x>0$. If data $x_{1}, \ldots, x_{n}$ have this distribution (with $\mu$ unknown) then we expect, roughly,
$$
F\left(x_{(k)}\right) \approx \frac{k}{n+1}
$$
with $F$ as above. So
$$
1-e^{-x_{(k)} / \mu} \approx \frac{k}{n+1}
$$
hence
$$
x_{(k)} \approx-\mu \log \left(1-\frac{k}{n+1}\right) .
$$
So we can plot $x_{(k)}$ against $-\log \left(1-\frac{k}{n+1}\right)$ and see if the points lie on an approximate straight line (with gradient $\mu$, intercept 0$)$.

## Pareto Q-Q plot
The Pareto distribution has cdf
$$
F(x)=\left\{\begin{array}{ll}
0 & \text { if } x<\alpha \\
1-\left(\frac{\alpha}{x}\right)^{\theta} & \text { if } x \geqslant \alpha
\end{array}\right.
$$
with parameters $\alpha, \theta>0$. If data $x_{1}, \ldots, x_{n}$ have this distribution (with $\alpha, \theta$ unknown) then we expect, roughly,
$$
F\left(x_{(k)}\right) \approx \frac{k}{n+1}
$$
with $F$ as above. So
$$
1-\left(\frac{\alpha}{x_{(k)}}\right)^{\theta} \approx \frac{k}{n+1}
$$
hence
$$
\log x_{(k)} \approx \log \alpha-\frac{1}{\theta} \log \left(1-\frac{k}{n+1}\right) .
$$
So we can plot $\log x_{(k)}$ against $-\log \left(1-\frac{k}{n+1}\right)$ and see if the points lie on an approximate straight line (with gradient $1 / \theta$, intercept $\log \alpha)$.