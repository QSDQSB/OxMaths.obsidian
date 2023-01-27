#Statistics #FOSI 

## Definition
We say that a pdf/pmf $\pi$ is an [[Improper Prior]] if it has **infinite mass**:
$$
\int_{\Theta} \pi(\theta) \mathrm{d} \theta=\infty, \quad \pi(\theta) \geqslant 0 \forall \theta \in \Theta
$$
(as usual replacing integrals with sums if necessary).
A posterior distribution $\pi(\theta \mid x)$ can be defined as usual as long as
$$
\int_{\Theta} f(x, \theta) \pi(\theta) \mathrm{d} \theta<\infty
$$
