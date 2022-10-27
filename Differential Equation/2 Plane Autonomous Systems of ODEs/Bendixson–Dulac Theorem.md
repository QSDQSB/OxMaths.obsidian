# Bendixson–Dulac Theorem
#DE 

## The Bendixson–Dulac Theorem
```ad-theorem
Consider the system $\dot{x}=X(x, y), \dot{y}=Y(x, y)$, with $X, Y \in C^{1}$.

If there exists a function $\varphi(x, y) \in C^{1}$ with
$$
\rho:=\frac{\partial}{\partial x}(\varphi X)+\frac{\partial}{\partial y}(\varphi Y)>0
$$
in a simply connected region $R$ then there can be no nontrivial closed trajectories lying entirely in $R$.
```
### Proof
(By nontrivial, I mean I want the trajectory must have an inside i.e. it isn't just a fixed point.) So suppose $C$ is a closed trajectory lying entirely in $R$ and let $D$ be the disc (which also lies entirely in $R$, as $R$ is simply connected) whose boundary is $C$. We apply [[Green's Theorem#Green's Theorem in the Plane]]. Consider the integral
$$
\begin{aligned}
\iint_{D} \rho d x d y &=\iint_{D}\left[\frac{\partial}{\partial x}(\varphi X)+\frac{\partial}{\partial y}(\varphi Y)\right] d x d y \\
&=\oint_{C}-\varphi Y d x+\varphi X d y \\
&=\oint_{C}-\varphi(-\dot{y} d x+\dot{x} d y)
\end{aligned}
$$
But on $C, d x=\dot{x} d t, d y=\dot{y} d t$ so this is zero, which contradicts positivity of $\rho$, so there can be no such $C$.