## Dirichlet Boundary Condition
#FSPDE 

## Inhomogeneous Dirichlet Boundary Condition
###  Condition
Consider the initial boundary value problem for the temperature $T(x, t)$ given by the heat equation
$$
\frac{\partial T}{\partial t}=\kappa \frac{\partial^{2} T}{\partial x^{2}} \quad \text { for } \quad 0<x<L, t>0
$$
with the inhomogeneous Dirichlet boundary conditions
$$
T(0, t)=T_{L}, \quad T(L, t)=T_{R} \quad \text { for } \quad t>0
$$
and the initial condition
$$
T(x, 0)=f(x) \quad \text { for } \quad 0<x<L
$$
where $T_{L}$ and $T_{R}$ are prescribed constant temperatures, not both zero, and the initial temperature profile $f(x)$ is given.
### Steady State
On physical grounds, we conjecture that $T(x, t) \rightarrow S(x)$ as $t \rightarrow \infty$, where $S(x)$ is the **steady-state** solution of [[#Inhomogeneous Dirichlet Boundary Condition]], which satisfies
$$
0=\kappa \frac{\mathrm{d}^{2} S}{\mathrm{~d} x^{2}} \quad \text { for } \quad 0<x<L,
$$
with $S(0)=T_{L}$ and $S(L)=T_{R}$. Thus, $S(x)$ has the linear temperature profile given by
$$
S(x)=T_{L}\left(1-\frac{x}{L}\right)+T_{R}\left(\frac{x}{L}\right)
$$

### Shifting the Data
We now observe that if we let
$$
T(x, t)=S(x)+U(x, t),
$$
then by linearity $(3.53)-(3.55)$ imply that $U(x, t)$ satisfies the initial boundary value problem given by the heat equation
$$
\frac{\partial U}{\partial t}=\kappa \frac{\partial^{2} U}{\partial x^{2}} \text { for } 0<x<L, t>0
$$
with the homogeneous Dirichlet boundary conditions
$$
U(0, t)=0, \quad U(L, t)=0 \quad \text { for } \quad t>0
$$
and the initial condition
$$
U(x, 0)=f(x)-S(x) \text { for } 0<x<L .
$$
The initial boundary value problem for $U(x, t)$ is amenable to [[Fourier's method]]: we solved it to find the solution given by
$$
U(x, t)=\sum_{n=1}^{\infty} b_{n} \sin \left(\frac{n \pi x}{L}\right) \exp \left(-\frac{n^{2} \pi^{2} \kappa t}{L^{2}}\right)
$$
where
$$
b_{n}=\frac{2}{L} \int_{0}^{L}(f(x)-S(x)) \sin \left(\frac{n \pi x}{L}\right) \mathrm{d} x=\frac{2}{L} \int_{0}^{L} f(x) \sin \left(\frac{n \pi x}{L}\right) \mathrm{d} x-\frac{2}{n \pi}\left(T_{L}-(-1)^{n} T_{R}\right)
$$
which verifies our conjecture that $T(x, t) \rightarrow S(x)$ as $t \rightarrow \infty$ because $U(x, t) \rightarrow 0$ as $t \rightarrow \infty$.