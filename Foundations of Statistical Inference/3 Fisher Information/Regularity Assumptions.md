---
aliases: [Regs 2-4, Regs 1-4, Regs 1-3]
---
## One-Dimensional Case
### Reg 1
The distributions $\{f(\cdot, \theta): \theta \in \Theta\}$ have common support, so that $\mathcal{A}=\{x: f(x, \theta)>0\}$ is independent of $\theta$.

### Reg 2
$\Theta \subseteq \mathbb{R}$ is an open interval (finite or infinite).

### Reg 3
For all $x \in \mathcal{A}$ and for all $\theta \in \Theta$, the derivative $\partial_\theta f(x, \theta)$ exists and is finite. Furthermore, for each $\theta \in \Theta$, there exists a neighborhood $I \subset \Theta$ and an integrable function $g_I(x)$ such that
$$
\left|\partial_\theta f(x, \theta)\right| \leqslant g_I(x), \quad \forall \theta \in I, \forall x \in \mathcal{A}
$$
### Reg 4
The log-likelihood $\ell$ is twice-differentiable for all $x \in \mathcal{A}, \theta \in \Theta$, and $$\frac{\partial^2}{\partial \theta^2} \int_{\mathcal{A}} f(x, \theta) \mathrm{d} x=\int_{\mathcal{A}} \frac{\partial^2}{\partial \theta^2} f(x, \theta) \mathrm{d} x$$ for **continuous** distributions, or $$\frac{\partial^2}{\partial \theta^2} \sum_{x \in \mathcal{A}} f(x, \theta) \mathrm{d} x=\sum_{x \in \mathcal{A}} \frac{\partial^2}{\partial \theta^2} f(x, \theta) \mathrm{d} x$$ for **discrete** distributions for all $\theta \in \Theta$.

## Multivariate Case
![[#Reg 1]]
### Reg 2'
$\Theta \subseteq \mathbb{R}^k$ is an open set.

### Reg 3'
For all $x \in \mathcal{A}$ and for all $\theta \in \Theta$, the partial derivatives of $L(\theta, x)$ exist and are finite.

### Reg 4'
All second order partial derivatives of log-likelihood $\ell$ exist and they can all be commuted with summation/integration over $\mathcal{A}$.