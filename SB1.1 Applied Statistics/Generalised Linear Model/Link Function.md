#AppliedStats 

## Definition
Consider the link between stochastic and deterministic: let $\mu_i=E\left(Y_i\right)$, then
- LM: $\mu_i=\eta_i$
- GLM: $g\left(\mu_i\right)=\eta_i$.

$g$ is called the link function, it's a smooth invertible (increasing) function of the mean $\mu_i$
The linear predictor $\eta_i=\mathbf{x}_i^T \beta$ can take any value in $\mathbb{R}$:
$g$ and $g^{-1}$ are such that $\mu_i=g^{-1}\left(\eta_i\right)$ takes only appropriate values for $\mu_i$.

---
For example, $g^{-1}: \mathbb{R} \rightarrow[0,1]$ in Bernoulli case where $\mu_i$ is a probability $\left(\pi_i\right)$, and in this case $g:[0,1] \rightarrow \mathbb{R}$.

