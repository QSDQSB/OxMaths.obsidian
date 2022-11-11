---
aliases: [predictive distribution]
tag: [FOSI]
---

## Definition
If $X_1, \ldots, X_n, X_{n+1}$ are i.i.d. obsevations from the distribution $f(x, \theta)$, with prior $\pi(\theta)$, then the [[posterior predictive distribution]] is
$$
f\left(x_{n+1} \mid x\right)=\int_{\Theta} f\left(x_{n+1}, \theta\right) \pi(\theta \mid x) \mathrm{d} \theta
$$
where here $x=\left(x_1, \ldots, x_n\right)$.

