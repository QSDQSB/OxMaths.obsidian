# Delta Method
#Statistics 

#### Prerequisite
$$\frac{\bar{X}-\mu}{\sigma / \sqrt{n}} \stackrel{\mathrm{D}}{\approx} N(0,1)$$
## Idea: Taylor Expansion Around Mean 
Taylor series expansion of $g(\bar{X})$ about $g(\mu)$ gives
$$
g(\bar{X}) \approx g(\mu)+(\bar{X}-\mu) g^{\prime}(\mu)
$$
By the [[weak law of large numbers]] we know that $\bar{X}$ approaches $\mu$ as $n \rightarrow \infty$. Hence we take the Taylor expansion of $g(\bar{X})$ about $g(\mu)$. The first term $g(\mu)$ is a term of order 1 , it is just a constant independent of $n$. The next term is $(\bar{X}-\mu) g^{\prime}(\mu)$ : by the CLT the $\bar{X}-\mu$ part is of order $n^{-1 / 2}$, and $g^{\prime}(\mu)$ is a constant, an order 1 term, so this whole term is of order $n^{-1 / 2}-$ so is small compared to the initial $g(\mu)$ term.

Taking the expectation, and the variance, of each side of (1.1),
$$
\Large
\begin{array}{c}
E[g(\bar{X})] \approx g(\mu)+g^{\prime}(\mu) E[(\bar{X}-\mu)]=g(\mu) \\
\operatorname{var}[g(\bar{X})] \approx \operatorname{var}\left[g^{\prime}(\mu)(\bar{X}-\mu)\right]=g^{\prime}(\mu)^{2} \operatorname{var}(\bar{X})=\frac{g^{\prime}(\mu)^{2} \sigma^{2}}{n}
\end{array}
$$
since $E(\bar{X})=\mu$ and $\operatorname{var}(\bar{X})=\sigma^{2} / n$.

## Asymptotic Distribution
$$\Large g(\bar{X}) \stackrel{\mathrm{D}}{\approx} N\left(g(\mu), \frac{g^{\prime}(\mu)^{2} \sigma^{2}}{n}\right)$$
We say that this is the *asymptotic distribution* of $g(\bar{X})$, and we call $g(\mu)$ the *asymptotic mean* and $g^{\prime}(\mu)^{2} \sigma^{2} / n$ the *asymptotic variance*.


## Delta Method for General Estimators
The [[Delta Method]] is not restricted to functions of $\bar{X}$. Suppose we have some *estimator* $T$, and that we are interested in the *estimator* $g(T)$. Let $E(T)=\mu_{T}$ and $\operatorname{var}(T)=\sigma_{T}^{2}$. Then Taylor series expansion of $g(T)$ about $g\left(\mu_{T}\right)$ gives
$$
g(T) \approx g\left(\mu_{T}\right)+\left(T-\mu_{T}\right) g^{\prime}\left(\mu_{T}\right) .
$$
So again taking expectations, and variances, we get $E[g(T)] \approx g\left(\mu_{T}\right)$ and $\operatorname{var}[g(T)] \approx$ $g^{\prime}\left(\mu_{T}\right)^{2} \sigma_{T}^{2}$, and if $T$ is approximately normal then $g(T)$ is also approximately normal.