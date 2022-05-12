## A Boundary Value Problem for Poisson's Equation
#FSPDE 

```ad-question
An infinite straight metal rod of constant `thermal conductivity` ==$k$== has a square cross-section whose sides are of length ==$L$==. The temperature ==$T(x, y)$== in each cross-section ==$R$==$=\{(x, y): 0<x, y<L\}$ satisfies the boundary value problem given by [[Poisson's equation]]
$$
-k\left(\frac{\partial^{2} T}{\partial x^{2}}+\frac{\partial^{2} T}{\partial y^{2}}\right)=Q \quad \text { in } R
\quad\color{yellow}\text{(5.94)}
$$
with the [[Dirichlet boundary condition]]
$$
T=0 \quad \text { on } \partial R
\quad\color{yellow}\text{(5.95)}
$$
where the `rate of volumetric heating` ==$Q(x, y)$== is given on $R$.
```

### Solution
- We may construct a solution using [[Fourier series]], as follows.

Motivated by the success of the expansion $(4.68)$ in $\S 4.7$ and the form of the boundary conditions (5.95), we suppose that $T(x, y)$ may be expanded as the Fourier sine series
$$
T(x, y)=\sum_{m=1}^{\infty} T_{m}(y) \sin \left(\frac{m \pi x}{L}\right)
\quad\color{yellow}\text{(5.96)}
$$
where for positive integers $m$ the Fourier coefficients are given by
$$
T_{m}(y)=\frac{2}{L} \int_{0}^{L} T(x, y) \sin \left(\frac{m \pi x}{L}\right) \mathrm{d} x
\quad\color{yellow}\text{(5.97)}
$$
Suppose further that for each positive integer $m, T_{m}(y)$ may be expanded as the Fourier sine series
$$
T_{m}(y)=\sum_{n=1}^{\infty} B_{m n} \sin \left(\frac{n \pi y}{L}\right)
\quad\color{yellow}\text{(5.98)}
$$
where for positive integers $n$ the Fourier coefficients are given by
$$
B_{m n}=\frac{2}{L} \int_{0}^{L} T_{m}(y) \sin \left(\frac{n \pi y}{L}\right) \mathrm{d} y
\quad\color{yellow}\text{(5.99)}
$$
Substituting $(5.98)$ into $(5.96)$ and $(5.97)$ into $(5.99)$, we see that we are seeking a solution for $T(x, y)$ in the form of the *doubly-infinite Fourier sine series*
$$
T(x, y)=\sum_{m, n=1}^{\infty} B_{m n} \sin \left(\frac{m \pi x}{L}\right) \sin \left(\frac{n \pi y}{L}\right)
\quad\color{yellow}\text{(5.100)}
$$
where the Fourier coefficients are given for positive integers $m$ and $n$ by
$$
B_{m n}=\left(\frac{2}{L}\right)^{2} \int_{0}^{L} \int_{0}^{L} T(x, y) \sin \left(\frac{m \pi x}{L}\right) \sin \left(\frac{n \pi y}{L}\right) \mathrm{d} x \mathrm{~d} y
\quad\color{yellow}\text{(5.101)}
$$
Evidently (5.100) satisfies the boundary conditions (5.95).
To determine the dependence of the Fourier coefficients $B_{m n}$ on $Q(x, y)$, we multiply [[Poisson's equation]] (5.94) by $\sin (m \pi x / L) \sin (n \pi y / L)$ and integrate over $R$ to obtain
$$
\int_{0}^{L} \int_{0}^{L}\left(\frac{\partial^{2} T}{\partial x^{2}}+\frac{\partial^{2} T}{\partial y^{2}}+\frac{Q}{k}\right) \sin \left(\frac{m \pi x}{L}\right) \sin \left(\frac{n \pi y}{L}\right) \mathrm{d} x \mathrm{~d} y=0
\quad\color{yellow}\text{(5.102)}
$$

Integrating by parts using the boundary conditions (5.95) gives
$$
\begin{array}{l}
\int_{0}^{L} \frac{\partial^{2} T}{\partial x^{2}} \sin \left(\frac{m \pi x}{L}\right) \mathrm{d} x=-\frac{m^{2} \pi^{2}}{L^{2}} \int_{0}^{L} T \sin \left(\frac{m \pi x}{L}\right) \mathrm{d} x 
\quad\color{yellow}\text{(5.103)}
\\
\int_{0}^{L} \frac{\partial^{2} T}{\partial y^{2}} \sin \left(\frac{n \pi y}{L}\right) \mathrm{d} x=-\frac{n^{2} \pi^{2}}{L^{2}} \int_{0}^{L} T \sin \left(\frac{n \pi y}{L}\right) \mathrm{d} x
\quad\color{yellow}\text{(5.104)}
\end{array}
$$

Substituting $(5.103)-(5.104)$ into $(5.102)$ gives
$$
\int_{0}^{L} \int_{0}^{L}\left(-\frac{m^{2} \pi^{2}}{L^{2}} T-\frac{n^{2} \pi^{2}}{L^{2}} T+\frac{Q}{k}\right) \sin \left(\frac{m \pi x}{L}\right) \sin \left(\frac{n \pi y}{L}\right) \mathrm{d} x \mathrm{~d} y=0
\quad\color{yellow}\text{(5.105)}
$$
so that
$$
B_{m n}=\frac{L^{2} Q_{m n}}{k \pi^{2}\left(m^{2}+n^{2}\right)}
\quad\color{yellow}\text{(5.106)}
$$
where the Fourier coefficients of the doubly-infinite Fourier sine series for $Q(x, y)$ are defined by
$$
Q_{m n}=\left(\frac{2}{L}\right)^{2} \int_{0}^{L} \int_{0}^{L} Q(x, y) \sin \left(\frac{m \pi x}{L}\right) \sin \left(\frac{n \pi y}{L}\right) \mathrm{d} x \mathrm{~d} y .
\quad\color{yellow}\text{(5.107)}
$$
Hence, the solution of the boundary value problem $(5.94)-(5.95)$ is given by $(5.100)$ with $B_{m n}$ given in terms of $Q(x, y)$ by $(5.106)$ and $(5.107)$.