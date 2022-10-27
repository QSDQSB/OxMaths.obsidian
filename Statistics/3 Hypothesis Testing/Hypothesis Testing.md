# Hypothesis Testing
#Statistics 

Let $X_{1}, \ldots, X_{n}$ be a random sample from $f(x ; \theta)$ where $\theta \in \Theta$ is a scalar or vector parameter.
#### Terminology
==null hypothesis== $H_{0}: \theta \in \Theta_{0}$
==alternative hypothesis== $H_{1}: \theta \in \Theta_{1}$
==test statistic== $t(\mathbf{X})$
==significance level== $p=P\left(t(\mathbf{X}) \geqslant t_{\text {obs }} \mid H_{0}\right)$
==simple== a hypothesis which completely determines $f$
==critical region== $C \subset \mathbb{R}^{n}$ such that if $\mathbf{x} \in C$ then we reject $H_{0}$, otherwise not
==type I error== rejecting $H_{0}$ when $H_{0}$ is true
==type II error== not rejecting $H_{0}$ when $H_{0}$ is false.
==size== of the test: ==type I error== probability $\alpha$; 
- $\alpha=\sup _{\theta \in \Theta_{0}} P(\mathbf{X} \in C \mid \theta)$ if $H_0$ is composite

==power== of the test: $1-\beta=P\left(\right.$ reject $H_{0} \mid H_{1}$ true $)$, the probability of correctly detecting that $H_0$ is false
==power function== $w(\theta)=P\left(\text { reject } H_{0} \mid \theta \text { is the true value}\right)=P(\mathbf{X} \in C \mid \theta)$

## t-test
> Variance is **unknown**.

Suppose $X_{1}, \ldots, X_{n} \stackrel{\text { iid }}{\sim} N\left(\mu, \sigma^{2}\right)$ with $\mu$ and $\sigma^{2}$ unknown.
Let
$$
t_{\mathrm{obs}}=t(\mathbf{x})=\frac{\bar{x}-\mu_{0}}{s / \sqrt{n}} .
$$
The idea is that a small/moderate value of $t_{\text {obs }}$ is consistent with $H_{0}$ (here "small" includes negative values of $\left.t_{\text {obs }}\right)$. Whereas a very large value of $t_{\text {obs }}$ is not consistent with $H_{0}$ and points us towards $H_{1}$ - since $\bar{x}$, and hence $t_{\text {obs }}$, will tend to be larger under $H_{1}$ as $\mu>\mu_{0}$ under $H_{1}$.

> If $H_0$ is true then ==$t(\mathbf{X}) \sim t_{n-1}$==.

Suppose $X_{1}, \ldots, X_{n} \stackrel{\text { iid }}{\sim} N\left(\mu, \sigma^{2}\right)$ and assume both $\mu$ and $\sigma^{2}$ are unknown. Consider testing $H_{0}: \mu=\mu_{0}$ (and $\sigma^{2}$ unknown) against three possible alternatives:
1) $H_{1}: \mu>\mu_{0}\left(\right.$ and $\sigma^{2}$ unknown)
2) $H_{1}^{\prime}: \mu<\mu_{0}$ (and $\sigma^{2}$ unknown)
3) $H_{1}^{\prime \prime}: \mu \neq \mu_{0}$ (and $\sigma^{2}$ unknown).
We can use the test statistic
$$
T=\frac{\bar{X}-\mu_{0}}{S / \sqrt{n}}
$$
If $H_{0}$ is true then $T \sim t_{n-1}$.

Let $t_{\text {obs }}=t(\mathbf{x})=\frac{\bar{x}-\mu_{0}}{s / \sqrt{n}}$ and $t_{0}=\left|t_{\text {obs }}\right|$. Then
1) for the test of $H_{0}$ against $H_{1}$, the $p$-value is $P\left(t_{n-1} \geqslant t_{\mathrm{obs}}\right)$
2) for the test of $H_{0}$ against $H_{1}^{\prime}$, the $p$-value is $P\left(t_{n-1} \leqslant t_{\text {obs }}\right)$
3) for the test of $H_{0}$ against $H_{1}^{\prime \prime}$, the $p$-value is $2 P\left(t_{n-1} \geqslant t_{0}\right)$.

#### P-Value

$$p=P\left(t(\mathbf{X}) \geqslant t_{\text {obs }} \mid H_{0}\right)$$
This value of $p$ is called the $p$-value or `significance level`. 

How small is small for a $p$-value? We might say something like:

$$\begin{array}{ll}p<0.01 & \text { very strong evidence against } H_{0} \\ 0.01<p<0.05 & \text { strong evidence against } H_{0} \\ 0.05<p<0.1 & \text { weak evidence against } H_{0} \\ 0.1<p & \text { litte or no evidence against } H_{0}\end{array}$$

```ad-warning
A large $p$-value is not strong evidence in favour of $H_{0}$. A large $p$-value can occur for two reasons: 

(i) $H_{0}$ is true 
(ii) $H_{0}$ is false but the test has low power.
```

## z-test
> Variance is **known**.

Suppose $X_{1}, \ldots, X_{n} \stackrel{\text { iid }}{\sim} N\left(\mu, \sigma^{2}\right)$, where $\mu$ is unknown and where $\sigma^{2}=\sigma_{0}^{2}$ is known.

Suppose we wish to test $H_{0}: \mu=\mu_{0}$ against $H_{1}: \mu>\mu_{0}$. Then we can use the test statistic
$$
Z=\frac{\bar{X}-\mu_{0}}{\sigma_{0} / \sqrt{n}}
$$
If $H_{0}$ is true then $Z \sim N(0,1)$.
Let
$$
z_{\mathrm{obs}}=\frac{\bar{x}-\mu_{0}}{\sigma_{0} / \sqrt{n}} .
$$
A large value of $z_{\text {obs }}$ casts doubt on the validity of $H_{0}$ and indicates a departure from $H_{0}$ in the direction of $H_{1}$. So the $p$-value for testing $H_{0}$ against $H_{1}$ is
$$
\begin{aligned}
p &=P\left(Z \geqslant z_{\mathrm{obs}} \mid H_{0}\right) \\
&=P\left(N(0,1) \geqslant z_{\mathrm{obs}}\right) \\
&=1-\Phi\left(z_{\mathrm{obs}}\right)
\end{aligned}
$$

### Confidence Interval for µ
Suppose $X_{1}, \ldots, X_{n}$ is a random sample from $N\left(\mu, \sigma^{2}\right)$, where both $\mu$ and $\sigma^{2}$ are unknown.

a $100(1-\alpha) \%$ confidence interval for $\mu$ is given by
$$
\left(\bar{x} \pm \frac{s}{\sqrt{n}} t_{n-1}(\alpha / 2)\right)
$$

## Type Error
$$
\begin{array}{lcc}
\hline & \text { don't reject } H_{0} & \text { reject } H_{0} \\
 H_{0} \text { true } & \checkmark & \text { type I error } \\
H_{0} \text { false } & \text { type II error } & \text{reject H0 when H1 true}\\
\hline
\end{array}
$$
- ==type I== error: rejecting $H_{0}$ when $H_{0}$ is true
- also called the `size` of the test
- ==type II== error: not rejecting $H_{0}$ when $H_{0}$ is false.
- $1-\beta=P\left(\right.$ reject $H_{0} \mid H_{1}$ true $)$ is called the `power` of the test.

