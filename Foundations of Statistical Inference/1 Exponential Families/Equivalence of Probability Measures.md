---
aliases: [equivalent]
---
## Definition
Two probability measures $\mathbb{P}$ and $\mathbb{Q}$ are said to be **[[Equivalence of Probability Measures|equivalent]]** if we have $\mathbb{P}(N)=0$ iff $\mathbb{Q}(N)=0$. 

If $\mathcal{P}=\{p(x ; \theta): \theta \in \Theta\}$ is an [[exponential family]], then all $p(\cdot ; \theta)$ are [[Equivalence of Probability Measures|equivalent]].
### Proof
Take $\theta_1 \neq \theta_2 \in \Theta$ and suppose $\mathbb{P}_{\theta_1}(N)=0$. Write $\mathbf{1}_N$ for the indicator function of $N$.
$$
\mathbb{P}_{\theta_1}(N)=e^{-B\left(\theta_1\right)} \int \exp \left(\sum_j \eta_j\left(\theta_1\right) T_j(x)\right) h(x) \mathbf{1}_N(x) d x=0
$$
This implies that $h(x) \mathbf{1}_N(x)=0$ for Lebesgue almost all $x$ and therefore that
$$
\mathbb{P}_\theta(N)=e^{-B(\theta)} \int \exp \left(\sum_j \eta_j(\theta) T_j(x)\right) h(x) \mathbf{1}_N(x) d x=0
$$
for arbitrary $\theta \in \Theta$.