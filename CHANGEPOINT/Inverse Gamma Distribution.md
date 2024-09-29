Assuming $\mu$ is fixed, then the conjugate prior for $\sigma^2$ is an inverse Gamma distribution:
$$
z \mid \alpha, \beta \sim \operatorname{IG}(\alpha, \beta) \quad P(z \mid \alpha, \beta)=\frac{\beta^\alpha}{\Gamma(\alpha)} z^{-\alpha-1} \exp \left(-\frac{\beta}{z}\right)
$$

For the posterior we get another inverse Gamma:
$$
\begin{aligned}
P\left(\sigma^2 \mid \alpha, \beta\right) & \propto\left(\sigma^2\right)^{-\left(\alpha+\frac{n}{2}\right)-1} \exp \left(-\frac{\beta+\frac{1}{2} \sum\left(x_i-\mu\right)}{\sigma^2}\right) \\
& \propto\left(\sigma^2\right)^{-\alpha_{\text {post }}-1} \exp \left(-\frac{\beta_{\text {post }}}{\sigma^2}\right)
\end{aligned}
$$

Lemma 7. If $x_i \mid \mu, \sigma^2 \sim \mathcal{N}\left(\mu, \sigma^2\right)$ i.i.d.and $\sigma^2 \sim \operatorname{IG}(\alpha, \beta)$. Then:
$$
\sigma^2 \mid x_1, x_2, \cdots, x_n \sim \color{orange}\operatorname{IG}\left(\alpha+\frac{n}{2}, \beta+\frac{1}{2} \sum\left(x_i-\mu\right)\right)
$$