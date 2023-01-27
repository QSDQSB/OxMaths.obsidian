---
aliases: [LRT]
---
#Statistics 

We now consider testing
- the null hypothesis $H_{0}: \theta \in \Theta_{0}$
- against the general alternative $H_{1}: \theta \in \Theta$.

So now $H_{0}$ is a special case of $H_{1}$ : we say that the statistical model under $H_{0}$ is "nested within" $H_{1}$ (i.e. $\Theta_{0} \subset \Theta$).

The ==likelihood ratio== $\lambda(\mathbf{x})$ is defined by
$$
\lambda(\mathbf{x})=\frac{\sup _{\theta \in \Theta_{0}} L(\theta ; \mathbf{x})}{\sup _{\theta \in \Theta} L(\theta ; \mathbf{x})}
\quad\color{yellow}\text{(3.4)}
$$
^Equation3-4

A ==(generalised) likelihood ratio test (LRT)== of $H_{0}$ against $H_{1}$ has [[Neyman–Pearson lemma|critical region]] of the form $C=\{\mathbf{x}: \lambda(\mathbf{x}) \leqslant k\}$, where $k$ is a constant.
For a test of size $\alpha$ we must choose $k$ so that
$$
\sup _{\theta \in \Theta_{0}} P(\lambda(\mathbf{X}) \leqslant k \mid \theta)=\alpha .
$$
So in principle we must look at the distribution of $\lambda(\mathbf{X})$, or use an approximation, to determine $k$. In practice this means either 
1) we simplify the inequality $\lambda(\mathbf{X}) \leqslant k$ to an inequality in terms of a function of $\mathbf{X}$ whose distribution we know exactly (see the next example), or
2) we use the approximate [$\chi^{2}$-distribution](chi-square%20distribution.md) of $-2 \log \lambda(\mathbf{X})$ (see further below).

```ad-example
title: Example 3.9.
Suppose $X_{1}, \ldots, X_{n} \stackrel{\text { iid }}{\sim} N\left(\mu, \sigma^{2}\right)$, where $\mu$ and $\sigma^{2}$ are unknown. Consider testing
- $H_{0}: \mu=\mu_{0}$, with any $\sigma^{2}>0$
- against $H_{1}: \mu \in(-\infty, \infty)$, with any $\sigma^{2}>0$.
Here the likelihood is
$$
L\left(\mu, \sigma^{2}\right)=\left(2 \pi \sigma^{2}\right)^{-n / 2} \exp \left[-\frac{1}{2 \sigma^{2}} \sum\left(x_{i}-\mu\right)^{2}\right]
$$
For the numerator of (3.4) we maximise $L$ over $\sigma^{2}$ with $\mu=\mu_{0}$ fixed. The maximum is at $\sigma^{2}=\widehat{\sigma}_{0}^{2}=\frac{1}{n} \sum\left(x_{i}-\mu_{0}\right)^{2}$.

For the denominator of [(3.4)](#^Equation3-4) we maximise $L$ over $\mu$ and $\sigma^{2}$. The maximum is at $\mu=\widehat{\mu}=\bar{x}$, $\sigma^{2}=\widehat{\sigma}^{2}=\frac{1}{n} \sum\left(x_{i}-\bar{x}\right)^{2}$
Subsituting these values into the likelihood we obtain
$$
\begin{aligned}
\lambda(\mathbf{x}) &=\frac{L\left(\mu_{0}, \widehat{\sigma}_{0}^{2}\right)}{L\left(\widehat{\mu}, \widehat{\sigma}^{2}\right)} \\
&=\frac{\left[\frac{2 \pi}{n} \sum\left(x_{i}-\mu_{0}\right)^{2}\right]^{-n / 2} e^{-n / 2}}{\left[\frac{2 \pi}{n} \sum\left(x_{i}-\bar{x}\right)^{2}\right]^{-n / 2} e^{-n / 2}} \\
&=\left[\frac{\sum\left(x_{i}-\mu_{0}\right)^{2}}{\sum\left(x_{i}-\bar{x}\right)^{2}}\right]^{-n / 2} .
\end{aligned}
$$
Now note that $\sum\left(x_{i}-\mu_{0}\right)^{2}=\sum\left(x_{i}-\bar{x}\right)^{2}+n\left(\bar{x}-\mu_{0}\right)^{2}$. (To see this write $\sum\left(x_{i}-\mu_{0}\right)^{2}=$ $\sum\left\{\left(x_{i}-\bar{x}\right)+\left(\bar{x}-\mu_{0}\right)\right\}^{2}$, expand the RHS and then simplify.) Then substituting into the expression for $\lambda(\mathbf{x})$ gives
$$
\lambda(\mathbf{x})=\left[1+\frac{n\left(\bar{x}-\mu_{0}\right)^{2}}{\sum\left(x_{i}-\bar{x}\right)^{2}}\right]^{-n / 2}
$$

So the test is:
$$
\text { reject } \begin{aligned}
H_{0} & \Longleftrightarrow \lambda(\mathbf{x}) \leqslant k \\
& \Longleftrightarrow\left|\frac{\bar{x}-\mu_{0}}{s / \sqrt{n}}\right| \geqslant k_{1} .
\end{aligned}
$$
This is the familiar $t$-test, so we know that we should take $k_{1}=t_{n-1}(\alpha / 2)$ for a test of size $\alpha$ (i.e. we know the exact distribution of a function of $\lambda(\mathbf{x})$ ).
```

