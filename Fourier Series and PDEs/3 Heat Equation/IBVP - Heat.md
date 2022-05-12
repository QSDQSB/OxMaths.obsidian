## Initial Boundary Value Problems
#FSPDE 

```ad-example
Suppose the metal is at room temperature $T_{0} \approx 300 \mathrm{~K}$ when some large ice blocks at their melting temperature $T^{*} \approx 273 \mathrm{~K}$ are held instantaneously against each end of the rod at time $t=0$. We encode this setup into a mathematical model, as follows:
- the temperature $T(x, t)$ satisfies the heat equation (3.10) inside the rod, so that
$$
\frac{\partial T}{\partial t}=\kappa \frac{\partial^{2} T}{\partial x^{2}} \text { for } 0<x<L, t>0
$$
- the effect of the ice blocks on the rod are modelled through the boundary conditions
$$
T(0, t)=T^{*}, \quad T(L, t)=T^{*} \quad \text { for } t>0
$$
- the initial state of the temperature in the rod is fed into the initial condition
$$
T(x, 0)=T_{0} \quad \text { for } 0<x<L
$$
```

## Other Common IBVP
- [[Neumann Boundary Condition]]
- [[Robin Boundary Condition]]