---
aliases: [AIC]
tag: [ML]
---

AIC $=$ the Akaike information criterion, or "an information criterion".
AIC is defined by
$$
\mathrm{AIC}=-2 \ell\left(\widehat{\beta}, \widehat{\sigma}^2\right)+2 p
$$
That is, minus twice the maximised log-likelihood plus $2 p$, where $p$ is the dimension of $\beta=\left(\beta_1, \ldots, \beta_p\right)$
To use AIC we choose the model which minimises the AIC.
The AIC definition of "minus twice the maximised log-likelihood plus twice the number of parameters" generalises to other settings. In our case of linear models, the equation gives $-2 \ell\left(\widehat{\beta}, \widehat{\sigma}^2\right)=n \log \left(\frac{\text { RSS }}{n}\right)+n$, so we can use
$$
\mathrm{AIC}=n \log \left(\frac{\mathrm{RSS}}{n}\right)+2 p
$$

- AIC balances model complexity against model fit.
- AIC compares on basis of prediction success, it tends to keep variables that other criteria drop.
- The models we compare need not be nested.