#AppliedStats 

The null model is the model where $\beta_2=\cdots=\beta_p=0$. (only one parameter)

- and where we have just an intercept in the linear predictor: $g\left(\mu_i\right)=\beta_1$ for all $i$
- so the means are all equal and we have single common natural parameter $\theta$
- let $\widehat{\theta}^{(0)}$ be the [[Maximum Likelihood Estimator|MLE]] for the natural parameter of the null model.
- where $\widehat{\theta}^{(s)}=\left(\widehat{\theta}_1^{(s)}, \ldots, \widehat{\theta}_n^{(s)}\right)^T$ and $y=\left(y_1, \ldots, y_n\right)^T$

###  Null Log-Likelihood
The null log-likelihood is the maximised value of the log-likelihood for the null model: so it is $\ell\left(\widehat{\theta}^{(0)} ; y\right)$ where $\widehat{\theta}^{(0)}$ is a scalar and $y=\left(y_1, \ldots, y_n\right)^T$.