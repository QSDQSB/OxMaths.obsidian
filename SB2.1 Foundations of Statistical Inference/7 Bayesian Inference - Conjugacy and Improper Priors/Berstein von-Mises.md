---
tag: [FOSI]
---
## Berstein von-Mises
Suppose $X=\left(X_1, \cdots, X_n\right) \stackrel{\text { iid }}{\sim} f(\cdot ; \theta)$ and that the following conditions hold:
- $\Theta \subset \mathbb{R}^d$ and the prior density $\pi$ is continous and positive at $\theta_0$
- If $\theta \rightarrow \log f(x ; \theta)$ is $\mathcal{C}^2$ and $\exists \delta>0$ s.t.
$$
E_X\left(\sup _{\left|\theta^{\prime}-\theta\right|<\delta}\left|\frac{\partial^2 \log f(X ; \theta)}{\partial \theta^2}\right|\right)<+\infty, \quad E_X\left(\left|\frac{\partial \log f(X ; \theta)}{\partial \theta}\right|\right)<+\infty
$$
- We have posterior [[Consistency]] at $\theta_0$
$$
\forall \varepsilon>0, \quad \Pi\left(\left|\theta-\theta_0\right|>\varepsilon \mid X\right) \stackrel{P_{\theta_0}}{\rightarrow} 0
$$

Then the posterior is asymptotically Gaussian : $\varphi\left(\cdot ; \mu, \sigma^2\right) \equiv \mathcal{N}\left(\mu, \sigma^2\right)$
$$
\int_{\Theta}\left|\pi(\theta \mid X)-\varphi\left(\theta ; \widehat{\theta}, I\left(\theta_0\right)^{-1} / n\right)\right| d \theta \stackrel{P_{\theta_0}}{\rightarrow} 0, \quad \widehat{\theta}=\theta_0+I\left(\theta_0\right)^{-1} S\left(\theta_0 ; x\right)
$$