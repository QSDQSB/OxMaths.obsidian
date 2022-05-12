## Non-Zero Temperature Conditions
#FSPDE 

```ad-question
Consider the heat equation
$$
\frac{\partial T}{\partial t}=\kappa \frac{\partial^{2} T}{\partial x^{2}} \text { for } 0<x<L, t>0
$$
with conditions
$$
T(0,t)=T_1,\quad T(L,t)=T_2, \quad T(x,0)=f(x)
$$

```

>The problem here is that **separation of variables will no longer work** on this problem because the boundary conditions are no longer *homogeneous*. Recall that separation of variables will only work if both the partial differential equation and the boundary conditions are linear and homogeneous. So, we’re going to need to deal with the boundary conditions in some way before we actually try and solve this.

### Equilibrium Temperature
We should expect that as $t\to\infty$, $T(x)=T_E(x)$ where $T_E(x)$ is called the `equilibrium temperature`. It should satisfy the boundary condition and the heat equation. And solving the ODE we can see that $$T_E(x) = T_1 + {T_2-T_1\over L}x$$

$T_E(x)$ satisfies the heat equation (and the conditions), then suppose $T(x,t)$ is the general solution to the heat equation (with conditions), $T(x,t)-T_E(x)$ also satisfies the heat equation, and moreover, a modified condition which becomes a homogeneous case that enables us to apply [[Fourier's Method]].