---
aliases: [chain rule]
---
#ComplexAnalysis 

## Chain Rule (for Path)
Let [$\gamma$](Path.md) $:[c, d] \rightarrow \mathbb{C}$ and $s:[a, b] \rightarrow[c, d]$ and suppose that $s$ is differentiable at $t_{0}$ and $\gamma$ is [[Path Differentiable|differentiable]] at $s_{0}=s\left(t_{0}\right)$. Then $\gamma \circ s$ is **differentiable** at $t_{0}$ with derivative
$$
(\gamma \circ s)^{\prime}\left(t_{0}\right)=s^{\prime}\left(t_{0}\right) \cdot \gamma^{\prime}\left(s\left(t_{0}\right)\right)
$$

### Proof
Let $\epsilon:[c, d] \rightarrow \mathbb{C}$ be given by $\epsilon\left(s_{0}\right)=0$ and
$$
\gamma(x)=\gamma\left(s_{0}\right)+\gamma^{\prime}\left(s_{0}\right)\left(x-s_{0}\right)+\left(x-s_{0}\right) \epsilon(x)
$$
(so that this equation holds for all $x \in[c, d]$ ), then $\epsilon(x) \rightarrow 0$ as $x \rightarrow s_{0}$ by the definition of $\gamma^{\prime}\left(s_{0}\right)$, i.e. $\epsilon$ is continuous at $t_{0}$. Substituting $x=s(t)$ into this we see that for all $t \neq t_{0}$ we have
$$
\frac{\gamma(s(t))-\gamma\left(s_{0}\right)}{t-t_{0}}=\frac{s(t)-s\left(t_{0}\right)}{t-t_{0}}\left(\gamma^{\prime}(s(t))+\epsilon(s(t))\right)
$$
Now $s(t)$ is continuous at $t_{0}$ since it is differentiable there hence $\epsilon(s(t)) \rightarrow 0$ as $t \rightarrow t_{0}$, thus taking the limit as $t \rightarrow t_{0}$ we see that
$$
(\gamma \circ s)^{\prime}\left(t_{0}\right)=s^{\prime}\left(t_{0}\right)\left(\gamma^{\prime}\left(s_{0}\right)+0\right)=s^{\prime}\left(t_{0}\right) \gamma^{\prime}\left(s\left(t_{0}\right)\right)
$$
as required.

![[Complex Chain Rule#Chain Rule]]