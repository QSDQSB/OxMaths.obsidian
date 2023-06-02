---
aliases: [sample mean, sample variance]
---
#Statistics 

Let $X_{1}, \ldots, X_{n} \stackrel{\text { iid }}{\sim} N\left(\mu, \sigma^{2}\right)$
Consider 
- $\bar{X}=\frac{1}{n} \sum_{i=1}^{n} X_{i}$, the [[Sample Mean and Sample Variance|sample mean]]
- $S^{2}=\frac{1}{n-1} \sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}$, the [[Sample Mean and Sample Variance|sample variance]].

## Theorem 2.4
```ad-theorem
$\bar{X}$ and $S^{2}$ are independent and their marginal distributions are given by
- $$\bar{X} \sim N\left(\mu, \frac{\sigma^{2}}{n}\right)$$
- $$\frac{(n-1) S^{2}}{\sigma^{2}} \sim \chi_{n-1}^{2}$$
```

> ![[chi-square distribution#Definition]]

### Proof
Let $Z_{i}=\left(X_{i}-\mu\right) / \sigma, i=1, \ldots, n$. Then $Z_{1}, \ldots, Z_{n} \stackrel{\text { iid }}{\sim} N(0,1)$, so have joint pdf
$$
f(\mathbf{z})=\prod_{i=1}^{n} \frac{1}{\sqrt{2 \pi}} e^{-z_{i}^{2} / 2}=(2 \pi)^{-n / 2} e^{-\sum_{i} z_{i}^{2} / 2}, \quad \mathbf{z} \in \mathbb{R}^{n}
$$
`transformation from Z to Y`
Consider a transformation of variables from $\mathbf{Z}=\left(Z_{1}, \ldots, Z_{n}\right)^{T}$ to $\mathbf{Y}=\left(Y_{1}, \ldots, Y_{n}\right)^{T}$. Let $\mathbf{z}=\left(z_{1}, \ldots, z_{n}\right)^{T}, \mathbf{y}=\left(y_{1}, \ldots, y_{n}\right)^{T}$, and let $\mathbf{y}=A \mathbf{z}$ where $A$ is an orthogonal $n \times n$ matrix whose first row is $\left(\frac{1}{\sqrt{n}}, \ldots, \frac{1}{\sqrt{n}}\right)$.

Since $\mathbf{z}=A^{T} \mathbf{y}$, we have $\partial z_{i} / \partial y_{j}=a_{j i}$ and hence the Jacobian is $J=J\left(y_{1}, \ldots, y_{n}\right)=$ $\operatorname{det}\left(A^{T}\right)$, hence $|J|=1$.

`Y~N(0,1)`
We have
$$
\sum_{i=1}^{n} y_{i}^{2}=\mathbf{y}^{T} \mathbf{y}=\mathbf{z}^{T} A^{T} A \mathbf{z}=\mathbf{z}^{T} \mathbf{z}=\sum_{i=1}^{n} z_{i}^{2}
$$
Hence the pdf of $\mathbf{Y}$ is
$$
\begin{aligned}
g(\mathbf{y}) &=f(A^T\mathbf{y}) \cdot|J| \\
&=(2 \pi)^{-n / 2} e^{-\sum_{i} y_{i}^{2} / 2} \cdot 1
\end{aligned}
$$
Hence $Y_{1}, \ldots, Y_{n} \stackrel{\text { idd }}{\sim} N(0,1)$.
`Y1`
Now
$$
Y_{1}=(\text { first row of } A) \times \mathbf{Z}=\frac{1}{\sqrt{n}} \sum_{i=1}^{n} Z_{i}=\sqrt{n} \bar{Z}
$$
and then
$$
\sum_{i=1}^{n}\left(Z_{i}-\bar{Z}\right)^{2}=\sum_{i=1}^{n} Z_{i}^{2}-n \bar{Z}^{2}=\sum_{i=1}^{n} Y_{i}^{2}-Y_{1}^{2}=\sum_{i=2}^{n} Y_{i}^{2} .
$$
>
So we have shown that
>- $Y_{1}, \ldots, Y_{n}$ are independent
 >- $\bar{Z}$ is a function of $Y_{1}$ only
 >-  $\sum_{i=1}^{n}\left(Z_{i}-\bar{Z}\right)^{2}$ is a function of $Y_{2}, \ldots, Y_{n}$ only

and hence $\bar{Z}$ and $\sum_{i=1}^{n}\left(Z_{i}-\bar{Z}\right)^{2}$ are independent.

Therefore $\bar{X}$ and $S^{2}$ are independent since $\bar{X}=\sigma \bar{Z}+\mu$ and $S^{2}=\frac{\sigma^{2}}{n-1} \sum_{i=1}^{n}\left(Z_{i}-\bar{Z}\right)^{2}$.

Finally 
- $Y_{1} \sim N(0,1)$, so $\bar{X}=\sigma \bar{Z}+\mu=\frac{\sigma}{\sqrt{n}} Y_{1}+\mu \sim N\left(\mu, \frac{\sigma^{2}}{n}\right)$.
- $\frac{(n-1) S^{2}}{\sigma^{2}}=\sum_{i=1}^{n}\left(Z_{i}-\bar{Z}\right)^{2}=\sum_{i=2}^{n} Y_{i}^{2} \sim \chi_{n-1}^{2}$.

So for $X_{1}, \ldots, X_{n} \stackrel{\text { iid }}{\sim} N\left(\mu, \sigma^{2}\right)$ we have, independently,
$$
\frac{\bar{X}-\mu}{\sigma / \sqrt{n}} \sim N(0,1) \quad \text { and } \quad \frac{(n-1) S^{2}}{\sigma^{2}} \sim \chi_{n-1}^{2}
$$

## Sample Mean and Sample Variance to t-distribution
$$\Large \frac{\bar{X}-\mu}{S / \sqrt{n}} \sim t_{n-1}$$
^tn-1

![[t-distribution]]
