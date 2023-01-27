---
aliases: [Lipschitz condition]
---
## Lipschitz
#DE 

### Definition
A function $f(x, y)$ on a rectangle $R$ satisfies a [[Differential Equation/1 ODE and Picard's Theorem/Lipschitz]] condition (with constant $L$ ) if $\exists$ real positive $L$ such that
$$
|f(x, u)-f(x, v)| \leq L|u-v| \text { for all }(x, u) \in R,(x, v) \in R
$$
> This is a new condition on a function, stronger than being [[Continuous]] in the second variable but weaker than being diﬀerentiable.

```ad-note
One way to ensure that $f$ satisfies a Lipschitz condition on $R$ is the following: Suppose that, on $R, f$ is differentiable with respect to $y$, with $\left|f_{y}(x, y)\right| \leq K$ Then for any $(x, u) \in R,(x, v) \in R$ the [[mean value theorem]] (applied to the function $[k-h, k+h] \ni y \mapsto f(x, y))$ gives
$$
|f(x, u)-f(x, v)|=\left|f_{y}(x, w)(u-v)\right| \leq K|u-v|
$$
where $w$ is some intermediate value. So, $f$ clearly satisfies the [[Lipschitz]] condition on such intervals.
```