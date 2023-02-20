#OptimisationforDS 
## Definition
$f: \mathbb{R}^n \rightarrow \mathbb{R}$ is strongly [[convex]] with modulus of convexity $\gamma>0$ if for all $\alpha \in[0,1]$ and $x, y \in \mathbb{R}^n$,
$$
f((1-\alpha) x+\alpha y) \leq(1-\alpha) f(x)+\alpha f(y)-\frac{1}{2} \gamma \alpha(1-\alpha)\|x-y\|^2
$$

## Proposition 3
If $f: \mathbb{R}^n \rightarrow \mathbb{R}$ is [[strongly convex]], then there exists a unique global minimiser.