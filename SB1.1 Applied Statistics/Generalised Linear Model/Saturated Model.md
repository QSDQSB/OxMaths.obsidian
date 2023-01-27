#AppliedStats 

## Saturated Model
This model "unlinks" the $\theta_i$.

in our $\beta$-model the $\theta_i$ are bound by the constraint $g\left(\mu_i\right)=\mathbf{x}_i^T \beta$ on the means but in the saturated model we remove this constraint and instead we have one parameter $\theta_i^{(s)}$ for each response $y_i$

so the MLE $\widehat{\theta}_i^{(s)}$ in the saturated model is just $\widehat{\theta}_i^{(s)}=\arg \max _{\theta_i} f\left(y_i ; \theta_i\right)$.

- The saturated log-likelihood is the maximised value of the log-likelihood for the [[Saturated Model]]: so it is $\ell\left(\widehat{\theta}^{(s)} ; y\right)$