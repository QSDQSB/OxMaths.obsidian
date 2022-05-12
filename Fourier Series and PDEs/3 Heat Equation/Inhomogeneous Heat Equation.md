## Inhomogeneous Heat Equation
#FSPDE 
### Condition
Consider the IBVP for the temperature $T(x, t)$ in a rod of length $L$ given by the inhomogeneous heat equation
$$
\rho c_{v} \frac{\partial T}{\partial t}=k \frac{\partial^{2} T}{\partial x^{2}}+Q(x, t) \quad \text { for } \quad 0<x<L, t>0
\quad\color{yellow}\text{(3.76)} 
$$
with the inhomogeneous Neumann boundary conditions
$$
-k T_{x}(0, t)=q_{L}(t), \quad-k T_{x}(L, t)=-q_{R}(t) \text { for } t>0
\quad\color{yellow}\text{(3.77)}
$$
and the initial condition
$$
T(x, 0)=f(x) \text { for } \quad 0<x<L
\quad\color{yellow}\text{(3.78)}
$$
where $Q(x, t)$ is the rate of volumetric heating, $q_{L}(t)$ is the heat flux into the left-hand end, $q_{R}(t)$ is the heat flux into the right-hand end and $f(x)$ is the initial temperature profile, each of these functions being prescribed.

- [[Uniqueness Theorem]] could be used.
- Integrating (3.76) across the rod and applying the boundary conditions (3.77), we find that
$$
\frac{\mathrm{d}}{\mathrm{d} t} \int_{0}^{L} \rho c_{v} T(x, t) \mathrm{d} x=q_{L}(t)+q_{R}(t)+\int_{0}^{L} Q(x, t) \mathrm{d} x
\quad\color{yellow}\text{(3.79)}
$$
which is an expression representing global **conservation of energy**: the `thermal energy stored in the rod` increases or decreases at` the net rate at which thermal energy is supplied to the rod by the heat flux through its ends` and by `volumetric heating`.

---
### Solution
#### The Boundary Condition
- We deal first with the boundary conditions: if we let
$$
T(x, t)=S(x, t)+U(x, t)
$$
where
$$
S(x, t)=q_{L}(t) \frac{(x-L)^{2}}{2 k L}+q_{R}(t) \frac{x^{2}}{2 k L}
\quad\color{yellow}\text{(3.81)}
$$
say, is chosen to satisfy the boundary conditions $(3.77)$, then by linearity the initial boundary value problem $(3.76)-(3.78)$ for $T(x, t)$ implies that the initial boundary value problem for $U(x, t)$ is given by
$$
\rho c_{v} \frac{\partial U}{\partial t}=k \frac{\partial^{2} U}{\partial x^{2}}+\widetilde{Q}(x, t) \quad \text { for } \quad 0<x<L, t>0
\quad\color{yellow}\text{(3.82)}
$$
with the homogeneous Neumann boundary conditions
$$
U_{x}(0, t)=0, \quad U_{x}(L, t)=0 \quad \text { for } \quad t>0
$$
and the initial condition
$$
U(x, 0)=\widetilde{f}(x) \text { for } 0<x<L
\quad\color{yellow}\text{(3.84)}
$$
where the functions
$$
\widetilde{Q}(x, t)=Q(x, t)+k \frac{\partial^{2} S}{\partial x^{2}}-\rho c_{v} \frac{\partial S}{\partial t}, \quad \tilde{f}(x)=f(x)-S(x, 0)
$$
are known in terms of $Q(x, t), q_{L}(t), q_{R}(t)$ and $f(x)$.
- Thus, the boundary conditions have been rendered **homogeneous** by 'shifting the data' in the sense that both $q_{L}(t)$ and $q_{R}(t)$ have moved from the boundary conditions $(3.77)$ for $T(x, t)$ into the heat equation (3.82) and initial conditions (3.84) for $U(x, t)$.
- If $\widetilde{Q} \equiv 0$, then we can solve the initial boundary value problem $(3.82)-(3.84)$ for $U(x, t)$ using [[Fourier's method]] as in to obtain the solution
$$
U(x, t)=\frac{a_{0}}{2}+\sum_{n=1}^{\infty} a_{n} \cos \left(\frac{n \pi x}{L}\right) \exp \left(-\frac{n^{2} \pi^{2} k t}{\rho c_{v} L^{2}}\right), \quad a_{n}=\frac{2}{L} \int_{0}^{L} \widetilde{f}(x) \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x
\quad\color{yellow}\text{(3.86)}
$$
where the Fourier coefficients $a_{n}$ have been chosen to satisfy the initial condition $(3.84)$.
The series solution (3.86) for $U(x, t)$ suggests that if $\widetilde{Q}(x, t)$ is not identically zero, then we should seek a solution for $U(x, t)$ in the form of the Fourier cosine series
$$
U(x, t)=\frac{U_{0}(t)}{2}+\sum_{n=1}^{\infty} U_{n}(t) \cos \left(\frac{n \pi x}{L}\right)
$$
in which the Fourier coefficients $U_{n}(t)$ are to be determined.
- From the formulae for the Fourier coefficients of a Fourier cosine series, we deduce that $U_{n}(t)$ are given in terms of $U(x, t)$ by the integral expressions
$$
U_{n}(t)=\frac{2}{L} \int_{0}^{L} U(x, t) \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x .
$$
#### Finding $\large U_n(t)$
Inspired by the proof of the [[uniqueness theorem]] we **differentiate** $U_{n}(t)$ with respect to $t$ to obtain
$$
\rho c_{v} \frac{\mathrm{d} U_{n}}{\mathrm{~d} t}=\frac{2}{L} \int_{0}^{L} \rho c_{v} \frac{\partial U}{\partial t} \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x=\frac{2}{L} \int_{0}^{L}\left(k \frac{\partial^{2} U}{\partial x^{2}}+\widetilde{Q}\right) \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x
\quad\color{yellow}\text{(3.89)}
$$
where we used [[Leibniz's Integral Rule]] in the first equality and the heat equation (3.82) in the second equality. Integrating by parts using the identity
$$
\int_{0}^{L} u v^{\prime \prime}-u^{\prime \prime} v \mathrm{~d} x=\int_{0}^{L}\left(u v^{\prime}-u^{\prime} v\right)^{\prime} \mathrm{d} x=\left[u v^{\prime}-u^{\prime} v\right]_{0}^{L}
\quad\color{yellow}\text{(3.90)}
$$
with $u=U$ and $v=\cos (n \pi x / L)$ gives
$$
\int_{0}^{L} U\left(-\frac{n^{2} \pi^{2}}{L^{2}} \cos \left(\frac{n \pi x}{L}\right)\right)-U_{x x} \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x=\left[U\left(-\frac{n \pi}{L}\right) \sin \left(\frac{n \pi x}{L}\right)-U_{x} \cos \left(\frac{n \pi x}{L}\right)\right]_{0}^{L}=0
$$
by the boundary conditions (3.83), so that
$$
\frac{2}{L} \int_{0}^{L} U_{x x} \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x=-\frac{n^{2} \pi^{2}}{L^{2}} \frac{2}{L} \int_{0}^{L} U \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x=-\frac{n^{2} \pi^{2}}{L^{2}} U_{n}
\quad\color{yellow}\text{(3.91)}
$$
Hence, combining (3.89) and (3.91), we find that $U_{n}(t)$ is governed by the ODE
$$
\rho c_{v} \frac{\mathrm{d} U_{n}}{\mathrm{~d} t}+\frac{k n^{2} \pi^{2}}{L^{2}} U_{n}=\widetilde{Q}_{n}(t) \quad \text { for } \quad t>0
\quad\color{yellow}\text{(3.92)}
$$
where the coefficients of the Fourier cosine series for $\widetilde{Q}(x, t)$ are defined by
$$
\widetilde{Q}_{n}(t)=\frac{2}{L} \int_{0}^{L} \widetilde{Q}(x, t) \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x=\frac{2}{L} \int_{0}^{L}\left(Q(x, t)+k \frac{\partial^{2} S}{\partial x^{2}}-\rho c_{v} \frac{\partial S}{\partial t}\right) \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x .
\quad\color{yellow}\text{(3.93)}
$$

The initial condition (3.84) for $U(x, t)$ implies that the initial condition for $U_{n}(t)$ is given by
$$
U_{n}(0)=\frac{2}{L} \int_{0}^{L} \widetilde{f}(x) \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x=\frac{2}{L} \int_{0}^{L}(f(x)-S(x, 0)) \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x .
\quad\color{yellow}\text{(3.94)}
$$
Using an integrating factor, we find that the solution of $(3.92)$ subject to $(3.94)$ may be written in the form
$$
U_{n}(t)=\left(\frac{1}{\rho c_{v}} \int_{0}^{t} \widetilde{Q}_{n}(s) \mathrm{e}^{\kappa_{n} s} \mathrm{~d} s+U_{n}(0)\right) \mathrm{e}^{-\kappa_{n} t}
\quad\color{yellow}\text{(3.95)}
$$
where $\kappa_{n}=n^{2} \pi^{2} \kappa / L^{2}$ in terms of the thermal diffusivity $\kappa=k /\left(\rho c_{v}\right)$.

---

In summary, we have been able to solve analytically the initial boundary value problem $(3.76)-(3.78)$ for $T(x, t):$ by $(3.80)$ and $(3.87)$, the solution is given by
$$
T(x, t)=S(x, t)+\frac{U_{0}(t)}{2}+\sum_{n=1}^{\infty} U_{n}(t) \cos \left(\frac{n \pi x}{L}\right),
\quad\color{yellow}\text{(3.96)}
$$
where $S(x, t)$ is given by $(3.81)$ and $U_{n}(t)$ by $(3.95)$.

### Notes
- If $\widetilde{Q}(x, t)=0$ in $(3.85)$, then $\widetilde{Q}_{n}(t)=0$ in (3.93) and we recover from (3.94)- (3.95) the solution (3.86) for $U_{n}(t)$ obtained by [[Fourier's method]].
- By (3.81) and (3.96), the total thermal energy in the rod is given by
$$
\int_{0}^{L} \rho c_{v} T(x, t) \mathrm{d} x=\rho c_{v}\left(\frac{L^{2} q_{L}}{6 k}+\frac{L^{2} q_{R}}{6 k}+\frac{L U_{0}(t)}{2}\right)
$$
from which it follows that the ordinary differential equation for $U_{0}(t)$ in $(3.92)$ is equivalent to the expression (3.79) representing global conservation of energy.
- The derivation of the ODE (3.92) for $U_{n}(t)$ may also be accomplished by multiplying the heat equation (3.82) by $\cos (n \pi x / L)$ and integrating from $x=0$ to $x=L$ to obtain
$$
\int_{0}^{L}\left(\rho c_{v} \frac{\partial U}{\partial t}-k \frac{\partial^{2} U}{\partial x^{2}}-\widetilde{Q}(x, t)\right) \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x=0
$$
the ODE then follows upon applying [[Leibniz's integral rule]] to the $U_{t}$ term and integrating by narts the $I_{\text {wo term }}$

```ad-question
`Question`: What are the advantages of expanding $U$ as a Fourier cosine series rather than $T ?$ 

`Answer`: Expanding $T$ as a Fourier cosine series is equivalent to expanding $S$ as a Fourier cosine series in (3.96), which cannot improve the accuracy of the approximate solution that would be obtained by truncation. In general the method of **shifting the data** (to render homogeneous the boundary conditions) results in a solution that converges more rapidly, especially if [[Gibb's phenomenon]] can be avoided by doing so.
```

### Example: Sinusoidal Forcing
>FSPDE Page48
#TODO 

