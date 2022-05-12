## Steady 3D Heat Conduction
#FSPDE 

### Conduction
In steady state the **temperature $T$ and volumetric heating $Q$ are independent of time $t$**, so that the heat equation ![[Derivation of 3-D Heat Equation#^3D-Heat-Equation]] reduces to [[Poisson's equation]]

$$
-k \boldsymbol{\nabla}^{2} T=Q
\quad\color{yellow}\text{(5.8)}
$$
^Equation5-8

while conservation of energy ![[Derivation of 3-D Heat Equation#^Equation5-3]] becomes

$$
\iint_{\partial V} \mathbf{q} \cdot \mathbf{n} \mathrm{d} S=\iiint_{V} Q \mathrm{~d} V
\quad\color{yellow}\text{(5.9)}
$$
^Equation5-9

>i.e. the net rate at which thermal energy is supplied to a region by volumetric heating is equal to the net rate at which thermal energy is conducted out though its boundary. This result holds locally for any region $V$, as well as globally for the whole material.


If in addition there is no volumetric heating, so that $Q=0$, Poisson's equation becomes [[Laplace's equation]]
$$
\boldsymbol{\nabla}^{2} T=0
\quad\color{yellow}\text{(5.10)}
$$
while conservation of energy [(5.9)](#^Equation5-9) becomes
$$
\iint_{\partial V} \mathbf{q} \cdot \mathbf{n} \mathrm{d} S=0
\quad\color{yellow}\text{(5.11)}
$$
i.e. the net rate at which thermal energy is conducted though the boundary of any region must vanish.