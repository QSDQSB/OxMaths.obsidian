## Uniqueness Theorem
#FSPDE 

### Intro
In the last section we considered the IBVP for the temperature $T(x, t)$ given by the heat equation
$$
\frac{\partial T}{\partial t}=\kappa \frac{\partial^{2} T}{\partial x^{2}} \quad \text { for } \quad 0<x<L, t>0
$$
with the homogeneous [[Dirichlet boundary condition]]
$$
T(0, t)=0, \quad T(L, t)=0 \quad \text { for } \quad t>0
$$
and the initial condition
$$
T(x, 0)=f(x) \quad \text { for } \quad 0<x<L
$$
where the initial temperature profile $f(x)$ is given.
### The Theorem
>The IBVP described in ![[#Intro]] has at most one solution.
#### Proof
Our strategy is to show that the** difference between any two solutions must vanish.**
Suppose that $T(x, t)$ and $\widetilde{T}(x, t)$ are solutions to [[#Intro]] and let $W(x, t)=T(x, t)-\widetilde{T}(x, t)$.
- By linearity, equations in ![[#Intro]] imply that $W(x, t)$ satisfies the heat equation
$$
\frac{\partial W}{\partial t}=\frac{\partial T}{\partial t}-\frac{\partial \widetilde{T}}{\partial t}=\kappa \frac{\partial^{2} T}{\partial x^{2}}-\kappa \frac{\partial^{2} \widetilde{T}}{\partial x^{2}}=\kappa \frac{\partial^{2} W}{\partial x^{2}} \quad \text { for } \quad 0<x<L, t>0,
\color{yellow} \quad\text{(3.48)}
$$
with the boundary conditions
$$
W(0, t)=T(0, t)-\widetilde{T}(0, t)=0, \quad W(L, t)=T(L, t)-\widetilde{T}(L, t)=0 \quad \text { for } \quad t>0
$$
and the initial condition
$$
W(x, 0)=T(x, 0)-\widetilde{T}(x, 0)=f(x)-f(x)=0 \quad \text { for } \quad 0<x<L
\color{yellow} \quad\text{(3.50)}
$$
- The trick is to analyse the integral $I(t)$ defined by
$$
I(t):=\frac{1}{2} \int_{0}^{L} W(x, t)^{2} \mathrm{~d} x
\color{yellow} \quad\text{(3.51)}
$$
- Evidently $I(t) \geq 0$ for $t \geq 0$ and $I(0)=0$ by $(3.50)$

But, for $t>0$
$$
\frac{\mathrm{d} I}{\mathrm{~d} t}=\int_{0}^{L} W \frac{\partial W}{\partial t} \mathrm{~d} x
$$
(by [[Leibniz's Integral Rule]])
$$
=\int_{0}^{L} W \kappa \frac{\partial^{2} W}{\partial x^{2}} \mathrm{~d} x
$$
(by (3.48))
$$
=\left[\kappa W \frac{\partial W}{\partial x}\right]_{x=0}^{x=L}-\kappa \int_{0}^{L} \frac{\partial W}{\partial x} \frac{\partial W}{\partial x} \mathrm{~d} x
$$
(by integration by parts)
$$
=-\kappa \int_{0}^{L}\left(\frac{\partial W}{\partial x}\right)^{2} \mathrm{~d} x
$$
(by (3.49))
$$
\leq 0
$$
which means that $I(t)$ cannot increase, so that $I(t) \leq I(0)=0$ for $t \geq 0$. 

Since $I(t) \geq 0$ and $I(t) \leq 0$ for $t \geq 0$, we deduce that $I(t)=0$ for $t \geq 0$, and hence that $W(x, t)=0$ for $0 \leq x \leq L, t \geq 0$ (assuming continuity of $W$ there).

> The proof works for any boundary conditions for which it is possible to show that
>$$
\left[\kappa W \frac{\partial W}{\partial x}\right]_{x=0}^{x=L} \leq 0
>$$
Examples include inhomogeneous [[Dirichlet Boundary Condition]] and [[Neumann boundary condition]].