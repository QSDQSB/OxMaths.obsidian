---
aliases: [characteristic, characteristics, characteristic equations]
---
# Characteristic
#DE 

![[First Order Semilinear PDE#^The-PDE]]
Consider the vector $\mathbf{t}=(P, Q, R)$.
## Characteristic Curve

We look for a curve ==$\Gamma$== whose tangent is $\mathbf{t}$. If $\Gamma=(x(t), y(t), z(t))$ in terms of a parameter $t$ this means
$$\left.\begin{array}{ll}\frac{d x}{d t}=P(x, y), & (a) \\ \frac{d y}{d t}=Q(x, y), & (b) \\ \frac{d z}{d t}=R(x, y, z) . & (c)\end{array}\right\}$$
These are the characteristic equations and the curve $\Gamma$ is a characteristic curve or just $a$ characteristic. Given a characteristic $(x(t), y(t), z(t))$, call the curve $(x(t), y(t), 0)$, which lies below it in the $(x, y)$-plane, the characteristic projection or characteristic trace.

### Proposition 3.1.
Suppose that $P(x, y)$ and $Q(x, y)$ are Lipschitz continuous in $x$ and $y$ and $R(x, y, z)$ is continuous and [[Differential Equation/1 ODE and Picard's Theorem/Lipschitz|Lipschitz]] continuous in $z$. Then
1) There is a characteristic projection through each point of the plane, and they can only meet at critical points (ie points where $P$ and $Q$ are both zero).
2) Given a point $p \in \Sigma$, the characteristic through $p$ lies entirely on $\Sigma$.

Thus the solution surface $\Sigma$ is generated by a collection of [[Characteristic Curve|characteristics]].
