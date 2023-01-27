## Definition
When [[Regularity Assumptions|Regs 1-3]] are satisfied, for $x \in \mathcal{A}$ we define the [[Score Function]]
$$
S(\theta, x)=\ell^{\prime}(\theta, x)=\frac{\partial \log L(\theta, x)}{\partial \theta} .
$$

When [[Regularity Assumptions|Regs 1, 2', 3']] are satisfied, we define the [[Score Function]] to be
$$
S(\theta, x)=\nabla_\theta \ell(\theta, x)=\left(\frac{\partial}{\partial \theta_1} \ell(\theta, x), \ldots, \frac{\partial}{\partial \theta_k} \ell(\theta, x)\right)^{\top} .
$$

## Theorem 3.4
Under [[Regularity Assumptions|Regs 1-3]],
$$
\mathbb{E}_\theta S(\theta, X)=0,\,\, \forall \theta \in \Theta .
$$
### Proof
In the continuous case,
$$
\small
\mathbb{E}_\theta[S(\theta, X)]=\int_{\mathcal{A}} \ell^{\prime}(\theta, x) f(x, \theta) \mathrm{d} x=\int_{\mathcal{A}} \frac{\frac{\partial}{\partial \theta} f(x, \theta)}{f(x, \theta)} f(x, \theta) \mathrm{d} x=\frac{\partial}{\partial \theta} \int_{\mathcal{A}} f(x, \theta) \mathrm{d} x=\frac{\partial}{\partial \theta} 1=0 .
$$
The discrete case is similar.

