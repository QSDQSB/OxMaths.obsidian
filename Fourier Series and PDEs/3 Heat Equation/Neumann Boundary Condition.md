## Homogeneous Neumann Boundary Condition
#FSPDE 

### Condition
Consider the IBVP for the temperature $T(x, t)$ given by the heat equation
$$
\frac{\partial T}{\partial t}=\kappa \frac{\partial^{2} T}{\partial x^{2}} \quad \text { for } \quad 0<x<L, t>0
\color{yellow} \quad\text{(3.66)}
$$
with the homogeneous Neumann boundary conditions
$$
\frac{\partial T}{\partial x}(0, t)=0, \quad \frac{\partial T}{\partial x}(L, t)=0 \quad \text { for } \quad t>0
\color{yellow} \quad\text{(3.67)}
$$
and the initial condition
$$
T(x, 0)=f(x) \quad \text { for } \quad 0<x<L .
\color{yellow} \quad\text{(3.68)}
$$

#### Thermally Insulated
>The ends of the rod are ***thermally insulated*** because the `heat flux` $q=-k \partial T / \partial x$ vanishes there.

### Solution
[[Fourier's method]] is applied to show #TODO that the solution is given by
$$
T(x, t)=\frac{a_{0}}{2}+\sum_{n=1}^{\infty} a_{n} \cos \left(\frac{n \pi x}{L}\right) \exp \left(-\frac{n^{2} \pi^{2} \kappa t}{L^{2}}\right)
$$
where the constants $a_{n}$ are the Fourier coefficients of the Fourier cosine series for $f$ given by
$$
a_{n}=\frac{2}{L} \int_{0}^{L} f(x) \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x
$$

#### Notes
1) The constant separable and steady-state solution $T=a_{0} / 2$ of $(3.66)-(3.67)$ comes from the case in which the separation constant is zero.
2) The [[Uniqueness Theorem]] may be adapted to show that the IBVP $(3.66)-(3.68)$ has no more than one solution.
3) Integrating (3.66) from $x=0$ to $x=L$ and applying the boundary conditions $(3.67)$, we find that
$$
\frac{\mathrm{d}}{\mathrm{d} t} \int_{0}^{L} \rho c_{v} T(x, t) \mathrm{d} x=\left[k \frac{\partial T}{\partial x}\right]_{x=0}^{x=L}=0
\quad\color{yellow}\text{(3.71)}
$$
which is an expression representing global *conservation of energy*: the thermal energy stored in the rod is constant because all of its surfaces are insulated. Integrating (3.71) and applying the initial condition $(3.68)$ gives
$$
\int_{0}^{L} \rho c_{v} T(x, t) \mathrm{d} x=\int_{0}^{L} \rho c_{v} f(x) \mathrm{d} x \text { for } t>0
$$
an expression that may be derived directly from the solution (3.69) assuming that the orders of summation and integration may be interchanged.
4) The exponentially decaying modes in (3.69) imply that the temperature
$$
T(x, t) \rightarrow \frac{a_{0}}{2}=\frac{1}{L} \int_{0}^{L} f(x) \mathrm{d} x \text { as } t \rightarrow \infty
$$
i.e. the temperature tends to the mean of the initial temperature profile. This is because the rod is insulated so that heat conduction acts to drive the temperature toward the steady-state solution in which $T$ is spatially uniform.

## Inhomogeneous Neumann Boundary Condition
Inhomogeneous [[Neumann Boundary Condition]] prescribes the **outward normal derivative** of the dependent variable on the boundary (here proportional to the heat flux $q=-k T_{x}$ by [[Fourier's Law]]), e.g.
$$
-\frac{\partial T}{\partial x}(0, t)=\phi(t), \quad \frac{\partial T}{\partial x}(L, t)=\psi(t) \quad \text { for } t>0,
$$
where the functions $\phi(t)$ and $\psi(t)$ are given.

### Definition: Outward Normal Derivative
The outward normal derivative of $T$ on the boundary is equal to the **directional derivative** in the direction of the outward pointing unit normal, i.e. $-\boldsymbol{i} \cdot \boldsymbol{\nabla} T=-T_{x}$ on $x=0$ and $\boldsymbol{i} \cdot \boldsymbol{\nabla} T=T_{x}$ on $x=L$.


