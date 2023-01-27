## Derivation of 3D Heat Equation
#FSPDE 

![[#^3D-Heat-Equation]]

### Preliminaries
#### [[Divergence Theorem]]
Let $V$ be a region of $\mathbb{R}^{3}$ with a piecewise smooth boundary $\partial V .$ Let $\mathbf{F}(x, y, z)$ be a vector field with **continuous** first-order partial derivatives on $V \cup \partial V$. Then

$$
\iiint_{V} \boldsymbol{\nabla} \cdot \mathbf{F} \mathrm{d} V=\iint_{\partial V} \mathbf{F} \cdot \mathbf{n} \mathrm{d} S,
\quad\color{yellow}\text{(5.1)}
$$
^Equation5-1

where $\mathbf{n}$ is the outward pointing unit normal to $\partial V$.

#### [[Green's Theorem]] in the plane
Let $R$ be a region in the $(x, y)$-plane, whose boundary $\partial R$ is a piecewise smooth simple closed curve. Let $\mathbf{G}(x, y)$ be a vector field with [[Continuous]] first-order partial derivatives on $R \cup \partial R$. Then

$$
\iint_{R} \boldsymbol{\nabla} \cdot \mathbf{G} \mathrm{d} x \mathrm{~d} y=\int_{\partial R} \mathbf{G} \cdot \mathbf{n} \mathrm{d} s,
\quad\color{yellow}\text{(5.2)}
$$
^Equation5-2

where $\mathbf{n}$ is the outward pointing unit normal to $\partial R$ in the $(x, y)$-plane.

### Derivation
- Let ==$T(\mathbf{x}, t)$== be the `absolute temperature` in a **rigid** isotropic conducting material $(e . g .$ metal), with constant density $\rho$ and specific heat $c_{v}$.
- Let ==$\mathbf{q}(\mathbf{x}, t)$== be the `heat flux` vector, so that $\mathbf{q} \cdot \mathbf{n} \mathrm{d} S$ is the **rate** at which thermal energy is transported through a surface element $\mathrm{d} S$ in the direction of the unit normal $\mathbf{n}$ that orients it.
- Let $R$ be a fixed region in the conducting material whose boundary $\partial R$ has outward pointing unit normal $\mathbf{n}$, as in the statement of the [[Divergence Theorem]].

We suppose that the material is heated volumetrically at a prescribed rate ==$Q(\mathbf{x}, t)$== per unit volume, so that **conservation of thermal energy** in $V$ is given by
$$
\underbrace{\frac{\mathrm{d}}{\mathrm{d} t} \iiint_{V} \rho c_{v} T \mathrm{~d} V}_{(1)}=\underbrace{\iint_{\partial V} \mathbf{q} \cdot(-\mathbf{n}) \mathrm{d} S}_{(2)}+\underbrace{\iiint_{V} Q \mathrm{~d} V}_{(3)}
\quad\color{yellow}\text{(5.3)}
$$
^Equation5-3

where ==(1)== is the time rate of change of the thermal energy in $V$, ==(2)== is the net rate at which thermal energy enters $V$ through $\partial V$ and ==(3)== is the net rate of volumetric heating of $V$.
- Assuming $T_{t}$ to be continuous on $V \cup \partial V$, so that we can differentiate under the integral sign in term (1).
- Applying the [[Divergence Theorem]] ![[#^Equation5-1]] with ==$\mathbf{F}=\mathbf{q}$== to term (2), we obtain

$$
\iiint_{V} \rho c_{v} \frac{\partial T}{\partial t}+\nabla \cdot \mathbf{q}-Q \mathrm{~d} V=0.
\quad\color{yellow}\text{(5.4)}
$$
^Equation5-4

- Since $V$ is arbitrary, the integrand in (5.4) must vanish if it is continuous(This is by [[Divergence Theorem#Lemma 107]]), so we obtain the PDE relating the time rate of change of the temperature, the divergence of the heat flux vector and the rate of volumetric heating $Q$.

$$
\rho c_{v} \frac{\partial T}{\partial t}+\nabla \cdot \mathbf{q}=Q
\quad\color{yellow}\text{(5.5)}
$$
^Equation5-5

- A closed model for heat conduction is obtained by prescribing a constitutive law relating the heat flux vector $\mathbf{q}$ and the temperature $T$. [[Fourier's Law]] states that thermal energy is transported down the temperature gradient, with

$$
\mathbf{q}=-k \nabla T
\quad\color{yellow}\text{(5.6)}
$$
^Equation5-6

where $k$ is the constant thermal conductivity.
- Recall from Introductory Calculus that $-\nabla T$ points in the direction in which $T$ decreases most rapidly.

- Substituting [(5.6)](#^Equation5-6) into [(5.5)](#^Equation5-5), we deduce that $T$ satisfies the three-dimensional inhomogeneous or forced heat equation given by

$$
\large
\rho c_{v} \frac{\partial T}{\partial t}=k \boldsymbol{\nabla}^{2} T+Q
\quad\color{yellow}\text{(5.7)}
$$
^3D-Heat-Equation

### Steady State
[[Steady 3-D Heat Conduction]]
[[Steady 2-D Heat Conduction]]