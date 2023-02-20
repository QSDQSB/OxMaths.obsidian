#OptimisationforDS 
## Definition
The [[gradient map]] of model 
$$\min _{x \in \mathbb{R}^n} \phi(x):=f(x)+\lambda \psi(x) \quad\color{yellow}\text{(15)}$$
^Model-15

is the map
$$
\begin{aligned}
G_\alpha: \mathbb{R}^n & \rightarrow \mathbb{R}^n \\
x & \mapsto \frac{1}{\alpha}\left(x-\operatorname{prox}_{\alpha \lambda \psi}(x-\alpha \nabla f(x))\right) .
\end{aligned}
$$
We note that the notion of gradient map allows us to write the [[Proximal Operator|prox]] update $(16)$ as
$$
x^{k+1}=\operatorname{prox}_{\alpha_k \lambda \psi}\left(x^k-\alpha_k \nabla f\left(x^k\right)\right)=x^k-\alpha_k G_{\alpha_k}\left(x^k\right),
$$

## Theorem 5: Convergency Theory
If [[#^Model-15]] has a minimiser $x^*$ and the prox-gradient algorithm is run with constant step length $\alpha_k \equiv 1 / L$ starting from an initial point $x^0$, then
$$
\phi\left(x^k\right)-\phi\left(x^*\right) \leq \frac{L}{2 k}\left\|x^0-x^*\right\|^2, \quad \forall k \geq 1 .
$$