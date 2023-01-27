# Unsupervised Learning
#ML #Statistics 
## Encoder, decoder and autoencoder
![[Encoder, Decoder and Autoencoder]]
```ad-info
title: Objective of Interest in Unsupervised Learning
1. **Dimensionality reduction and visualisation**: the objective is to reduce the dimension of the data and find a lower-dimensional representation of the data example $x_{i}$; the object of interest is the latent representation $z_{i} \in \mathbb{R}^{K}$ where $K<<p$
2. **Data compression**: The matrix X has $n \times p$ elements; this requires a lot of memory if $p$ is large; if the parameter $\theta$ of the [[Encoder, Decoder and Autoencoder|autoencoder]] is of dimension $p_{\theta}$, storing $\left(z_{1}, \ldots, z_{n}\right)$ and $\theta$ instead of $\mathbf{X}$ only requires storing $n \times K+p_{\theta}$ parameters which is typically smaller than $n \times p$.
3. **Clustering**: In clustering, $z_{i} \in\{1, \ldots, K\}$ represents the cluster membership of the data example $x_{i}$ to one of $K$ different groups.
4. **Restoration**: If we assume that the data $x_{i}$ are composed of the signal of interest with some added noise/perturbation, $z_{i}$ may be interpreted as the signal part, and the reconstructed example $\widehat{x}_{i}$ as the filtered/restored example, where the noise has been removed. The object of interest is therefore the [[Encoder, Decoder and Autoencoder|autoencoder]] $h_{\theta}$ that filters/restores the example $x_{i}$
```

## Empirical Risk Minimisation
### Loss Function
In order to quantify the error between the original example $x_{i}$ and its *reconstruction* $\widehat{x}_{i}$, we introduce a loss function $L: \mathbb{R}^{p} \times \mathbb{R}^{p} \rightarrow \mathbb{R}_{+}$such that $L\left(x_{i}, \widehat{x}_{i}\right)$ is a measure of the discrepancy between the example and its reconstruction. For unsupervised learning, we will focus on the squared loss function
$$
L\left(x_{i}, \widehat{x}_{i}\right)=\left\|x_{i}-\widehat{x}_{i}\right\|^{2}=\sum_{j=1}^{p}\left(x_{i j}-\widehat{x}_{i j}\right)^{2}
$$
### Risk
```ad-definition
title: Risk (unsupervised learning)
Let $h_{\theta}$ be an autoencoder, and $L$ a loss function. The risk of $h_{\theta}$ under the loss $L$ is given by
$$
R\left(h_{\theta}\right)=\mathbb{E}\left[L\left(X, h_{\theta}(X)\right)\right]
$$
where the expectation is taken with respect to the random variable $X$.
```
The risk corresponds to the expected reconstruction loss/error of an autoencoder $h_{\theta}$. The optimal parameter $\theta^{*}$ under the loss $L$ is the parameter minimising the risk:
$$
\theta^{*}=\underset{\theta \in \Theta}{\arg \min } R\left(h_{\theta}\right) .
$$
> $\arg\min$ just means the **parameter** that minimise something, nothing to do with argument.


### Empirical Risk
The true distribution of $X$ being unknown, we cannot compute the true risk $R$, nor find $\theta^{*}$. We use instead, the ==empirical risk==, defined as
$$
\widehat{R}_{n}\left(h_{\theta}\right)=\frac{1}{n} \sum_{i=1}^{n} L\left(x_{i}, h_{\theta}\left(x_{i}\right)\right) .
$$
The empirical risk is the average reconstruction loss over the dataset. The empirical risk minimiser is defined as
$$
\widehat{\theta}=\underset{\theta \in \Theta}{\arg \min } \widehat{R}_{n}\left(h_{\theta}\right) .
$$

```ad-example
title: An Example of Autoencoder and Risk
For $\theta \in\{1, \ldots, p\}, K=1$, consider the encoder and decoder
- The `encoder`: $z_{i}=\operatorname{enc}_{\theta}\left(x_{i}\right) =x_{i \theta}$
- The `decoder`: $\operatorname{dec}_{\theta}\left(z_{i}\right) =(0,0,\ldots, \underbrace{z_{i}}_{\text {coordinate } \theta}, 0, \ldots, 0)^{\top}$
- The `loss`:  $L\left(x_{i}, h_{\theta}\left(x_{i}\right)\right)=\sum_{j \neq \theta} x_{i j}^{2}$

Assume that $X$ has mean $\mu$ and covariance matrix $\Sigma$.
- The `risk`: $$R\left(h_{\theta}\right)=\sum_{j \neq \theta} \mathbb{E}\left(X_{j}^{2}\right)=\sum_{j \neq c} \Sigma_{j j}+\mu_{j}^{2}=\left(\sum_{j=1}^{p}\left(\Sigma_{j j}+\mu_{j}^{2}\right)\right)-\left(\Sigma_{\theta \theta}+\mu_{\theta}^{2}\right)$$
- The `optimal parameter`: $\theta^{*}=\underset{j=1, \ldots, p}{\arg \max } \Sigma_{j j}+\mu_{j}^{2}$
- The `empirical risk`: $$\widehat{R}_{n}\left(h_{\theta}\right)=\frac{1}{n} \sum_{i=1}^{n} \sum_{j \neq \theta} x_{i j}^{2}=\left(\frac{1}{n} \sum_{i=1}^{n} \sum_{j=1}^{p} x_{i j}^{2}\right)-\frac{1}{n} \sum_{i=1}^{n} x_{i \theta}^{2}$$
- The `empirical risk minimiser`: $\widehat{\theta}=\underset{j=1, \ldots, p}{\arg \max } \sum_{i=1}^{n} x_{i j}^{2}$
```

## Principal Component Analysis
![[Principal Component Analysis]]