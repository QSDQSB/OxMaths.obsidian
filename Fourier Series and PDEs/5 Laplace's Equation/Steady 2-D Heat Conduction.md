## Steady 2D Heat Conduction
#FSPDE 
- Setting $T=T(x, y)$ and $Q=Q(x, y)$, where $(x, y)$ are Cartesian coordinates, we obtain from ![[Steady 3-D Heat Conduction#^Equation5-8]] Poisson's equation in the plane,

$$
-k\left(\frac{\partial^{2} T}{\partial x^{2}}+\frac{\partial^{2} T}{\partial y^{2}}\right)=Q
\quad\color{yellow}\text{(5.12)}
$$
^Equation5-12

- In the absence of volumetric heating, we recover from (5.12) [[Laplace's equation]] in the plane,
$$
\frac{\partial^{2} T}{\partial x^{2}}+\frac{\partial^{2} T}{\partial y^{2}}=0
\quad\color{yellow}\text{(5.13)}
$$
- In terms of [[plane polar coordinates]] $(r, \theta)$ defined by $(x, y)=(r \cos \theta, r \sin \theta),(5.13)$ becomes
$$
\frac{\partial^{2} T}{\partial r^{2}}+\frac{1}{r} \frac{\partial T}{\partial r}+\frac{1}{r^{2}} \frac{\partial^{2} T}{\partial \theta^{2}}=0 \quad \text { for } \quad r>0
$$

- We will use [[Fourier's Method]] to construct solutions to boundary value problems for [[Laplace's Equation]].
- If Laplace's equation holds in some region $R$, as in the statement of [[Green's Theorem]] in the plane, then we will need to prescribe a boundary condition on the boundary $\partial R$ of $R$.

### Definition: Outward Normal Derivative
The outward normal derivative of $T$ on the boundary $\partial R$ is the directional derivative of $T$ in the direction of the outward pointing unit normal $\boldsymbol{n}$ to $\partial R$, and hence given by
$$
\frac{\partial T}{\partial n}=\boldsymbol{n} \cdot \boldsymbol{\nabla} T \quad \text { on } \partial R
\quad\color{yellow}\text{(5.15)}
$$
### Common boundary conditions for Laplace's equation and Poisson's equation
#### [[Dirichlet boundary condition]]
in which the temperature is prescribed on the boundary,
$$
T=f \quad \text { on } \partial R
\quad\color{yellow}\text{(5.16)}
$$

#### [[Neumann boundary condition]]
>in which the outward normal derivative of the temperature (or equivalently the heat flux $\mathbf{q} \cdot \mathbf{n}=-k \partial T / \partial n)$ is prescribed on the boundary,
>$$
\frac{\partial T}{\partial n}=-\frac{q}{k} \quad \text { on } \partial R\quad\color{yellow}\text{(5.17)}
>$$

#### [[Robin boundary condition]]
in which a linear relationship between the temperature and its outward normal derivative is prescribed on the boundary,
$$
\frac{\partial T}{\partial n}+\alpha T=\beta \quad \text { on } \partial R
\quad\color{yellow}\text{(5.18)}
$$

---
>here the functions $f, q, \alpha$ and $\beta$ in $(5.16)-(5.18)$ are prescribed on the boundary $\partial R$.

```ad-remark
Since ![[#^Equation5-12]] is equivalent to $$\boldsymbol{\nabla} \cdot \mathbf{q}=Q$$ by [[Fourier's law]], [[Green's Theorem]] in the plane with $\mathbf{F}=\mathbf{q}$ implies that
$$
\int_{\partial R} \mathbf{q} \cdot \mathbf{n} \mathrm{d} s=\iint_{R} \boldsymbol{\nabla} \cdot \mathbf{q} \mathrm{d} x \mathrm{~d} y=\iint_{R} Q \mathrm{~d} x \mathrm{~d} y
$$
which is the two-dimensional version of ![[Steady 3-D Heat Conduction#^Equation5-9]] and has two important consequences:
1) if $Q=0$, then the net heat flux through the boundary (per unit distance in the $z$ -direction) must vanish, i.e.

$$
\int_{\partial R} \mathbf{q} \cdot \mathbf{n} \mathrm{d} s=0
\quad\color{yellow}\text{(5.20)}
$$

2) if we impose the ![[#Neumann boundary condition]], then there can only be a steady-state solution if the net heat flux though the boundary equals the net rate of volumetric heating (per unit distance in the $z$-direction), i.e.
$$
\int_{\partial R} q \mathrm{~d} s=\iint_{R} Q \mathrm{~d} x \mathrm{~d} y
$$
since otherwise the temperature must change.

`If this two things are not equal then the temperature inside will keep changing => No steady state.`
```
