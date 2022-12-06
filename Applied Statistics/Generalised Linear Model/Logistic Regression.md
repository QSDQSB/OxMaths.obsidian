---
tag: [AppliedStats]
---

We have $y_i=$ fail$[i]$ and $\mathbf{x}_i^T=\left(x_{i 1}, x_{i 2}\right)=(1$, temp $[i])$. So we have an intercept and one other explanatory variable (temperature).
We model the binary outcomes $Y_i$ as
$$
Y_i \sim \operatorname{Bernoulli}\left(\pi_i\right)
$$
where $\pi_i$ denotes the probability of obtaining $y_i=f$ fail$[i]=1$.

Since $E\left(Y_i\right)=\pi_i$ we have $\mu_i=\pi_i$.
The linear predictor is $\eta_i=\beta_1+\beta_2 x_{i 2}$.

Using the canonical link function, which have previously seen is $g(\mu)=\log \frac{\mu}{1-\mu}$ for binary data (i.e. binomial canonical link with $m=1$ ), we obtain
$$
\pi_i=\frac{\exp \left(\beta_1+\beta_2 x_{i 2}\right)}{1+\exp \left(\beta_1+\beta_2 x_{i 2}\right)} .
$$
This is [[logistic regression]]: we are modelling the probability of $y_i=1$ for a binary response as logistic function of a linear predictor. The logistic function is $e^\eta /\left(1+e^\eta\right)$.
This makes sense: we have a mapping from $\eta_i \in \mathbb{R}$ to $\mu_i=\pi_i \in[0,1]$.