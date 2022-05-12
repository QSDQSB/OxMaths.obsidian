## Uniqueness Theorem
#FSPDE 

```ad-remark
#TutorialNotes

Remember to **claim** that the graph is `path-connected`.

```
### Uniqueness of Dirichlet problem
>Consider the Dirichlet problem for $T(x, y)$ given by $$-k \nabla^{2} T=Q \quad \text { in } R\quad\color{yellow}\text{(5.72)}$$with$$T=f \quad\text { on } \partial R\quad\color{yellow}\text{(5.73)}$$ where $R$ is a *path-connected* region as in the statement of [[Green's theorem]] in the plane, $Q$ is a given function on $R$ and $f$ is a given function on $\partial R$.

Then the boundary value problem has at most one solution.

#### Proof

Let ==$W$== be the difference between two solutions, then $(5.72)-(5.73)$ imply
$$
\boldsymbol{\nabla}^{2} W=0 \quad \text { in } R
\quad\color{yellow}\text{(5.74)}
$$
with
$$
W=0 \text { on } \partial R
\quad\color{yellow}\text{(5.75)}
$$
The trick is to apply [[Green's theorem]] in the plane ![[Derivation of 3-D Heat Equation#^Equation5-2]] with ==$\boldsymbol{F}=W \boldsymbol{\nabla} W$== to obtain the integral identify
$$
\iint_{R} \nabla \cdot(W \nabla W) \mathrm{d} x \mathrm{~d} y=\int_{\partial R}(W \nabla W) \cdot \boldsymbol{n} \mathrm{d} s
\quad\color{yellow}\text{(5.76)}
$$

Since $\boldsymbol{\nabla}^{2} W=0$ in $R$
$$
\boldsymbol{\nabla} \cdot(W \boldsymbol{\nabla} W)=W \boldsymbol{\nabla}^{2} W+\boldsymbol{\nabla} W \cdot \boldsymbol{\nabla} W=|\boldsymbol{\nabla} W|^{2} \quad \text { in } R
\quad\color{yellow}\text{(5.77)}
$$

Since $W=0$ on $\partial R$
$$
W \nabla W \cdot \boldsymbol{n}=0 \quad \text { on } \partial R
\quad\color{yellow}\text{(5.78)}
$$

Substituting $(5.77)-(5.78)$, the integral identity $(5.76)$ becomes
$$
\iint_{R}|\boldsymbol{\nabla} W|^{2} \mathrm{~d} x \mathrm{~d} y=0
\quad\color{yellow}\text{(5.79)}
$$

***Assuming*** $\boldsymbol{\nabla} W$ is continuous on $R \cup \partial R,(5.79)$ implies that $\boldsymbol{\nabla} W=\mathbf{0}$ on $R$, so that $W$ is constant on $R$ because $R$ is path connected.

But $W=0$ on $\partial R$, so assuming $W$ is continuous on $R \cup \partial R$, the constant must vanish, and we deduce that $W=0$ on $R \cup \partial R$.


### Uniqueness of Neumann problem
Consider the **Neumann problem** for $T(x, y)$ given by
$$
k \boldsymbol{\nabla}^{2} T+Q=0 \quad \text { in } \quad R
\quad\color{yellow}\text{(5.80)}
$$
with
$$
-k \frac{\partial T}{\partial n}=q \quad \text { on } \quad \partial R
\quad\color{yellow}\text{(5.81)}
$$
where $R$ is a bounded and path-connected region as in the statement of Green's theorem in the plane, $Q$ is a given function on $R$ and $q$ is a given function on $\partial R$. Then the boundary value problem has no solution unless $Q$ and $q$ satisfy the solvability condition
$$
\iint_{R} Q \mathrm{~d} x \mathrm{~d} y=\int_{\partial R} q \mathrm{~d} s
\quad\color{yellow}\text{(5.82)}
$$
When a solution exists, it is not unique: any two solutions differ by a constant.

#### Proof
Suppose there is a solution $T$, then
$$
\iint_{R} Q \mathrm{~d} x \mathrm{~d} y=-\frac{1}{k} \iint_{R} \boldsymbol{\nabla} \cdot \nabla T \mathrm{~d} x \mathrm{~d} y=-\frac{1}{k} \iint_{\partial R} \boldsymbol{n} \cdot \boldsymbol{\nabla} T \mathrm{~d} s=-\frac{1}{k} \int_{\partial R} \frac{\partial T}{\partial n} \mathrm{~d} s=\int_{\partial R} q \mathrm{~d} s
\quad\color{yellow}\text{(5.83)}
$$
where we used $(5.80)$ in the first equality, [[Green's theorem]] in the plane $(5.2)$ with ==$\boldsymbol{F}=\boldsymbol{\nabla} T$== in the second equality and $(5.81)$ in the final equality.

Now let $W$ be the difference between two solutions, so that linearity gives
$$
\boldsymbol{\nabla}^{2} W=0 \quad \text { in } \quad R
\quad\color{yellow}\text{(5.84)}
$$
with
$$
\frac{\partial W}{\partial n}=0 \text { on } \partial R
\quad\color{yellow}\text{(5.85)}
$$

Then, as in the uniqueness proof for the Dirichlet problem,
$$
\begin{aligned}
\iint_{R}|\nabla W|^{2} \mathrm{~d} x \mathrm{~d} y &=\iint_{R} W \boldsymbol{\nabla}^{2} W+\boldsymbol{\nabla} W \cdot \boldsymbol{\nabla} W \mathrm{~d} x \mathrm{~d} y \\
&=\iint_{R} \boldsymbol{\nabla} \cdot(W \boldsymbol{\nabla} W) \mathrm{d} x \mathrm{~d} y \\
&=\int_{\partial R} W \nabla W \cdot \boldsymbol{n} \mathrm{d} s \\
&=\int_{\partial R} W \frac{\partial W}{\partial n} \mathrm{~d} s \\
&=0, \quad\color{yellow}\text{(5.86)}
\end{aligned}
$$
where we used (5.84) in the first equality, [[Green's theorem]] in the plane $(5.2)$ with $\boldsymbol{F}=W \boldsymbol{\nabla} W$ in the second equality and $(5.85)$ in the final equality.

Assuming $\boldsymbol{\nabla} W$ is continuous on $R \cup \partial R,(5.86)$ implies that $\boldsymbol{\nabla} W=\mathbf{0}$ on $R$, so that $W$ is constant on $R$ because $R$ is path connected. Hence, $W$ is constant on $R \cup \partial R$, assuming $W$ is continuous there
i.e. any two solutions differ by a constant.

>The solvability condition $(5.83)$ is precisely the global energy balance expressed in $(5.21)$.