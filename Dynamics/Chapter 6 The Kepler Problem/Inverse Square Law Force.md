## Inverse Square Law Force
#Dynamics 
### Proposition
Denote $r=|\mathbf{r}|$ and $\mathbf{e}_r=\mathbf{r}/ r=\hat{\mathbf{r}}$ a unit vector in the direction of $\mathbf{r}$ where the latter is the position vector of a particle. Then forces of the form
$$
\mathbf{F}=F(r) \mathbf{e}_{r}
\quad\color{yellow}\text{(6.1)}
$$
are [conservative](Conservative%20Force) central forces, where the potential $V=V(r)$ depends only on the distance $r$ to the origin.
#### Proof
It is immediate that (6.1) is a [[central force]]. Let $V(r)$ be a function of $$r=\left(x_{1}^{2}+x_{2}^{2}+x_{3}^{2}\right)^{1 / 2},$$ where $\left(x_{1}, x_{2}, x_{3}\right)$ are Cartesian coordinates. Then
$$
-\nabla V=-\left(\frac{\partial V}{\partial x_{1}}, \frac{\partial V}{\partial x_{2}}, \frac{\partial V}{\partial x_{3}}\right)=-\frac{\mathrm{d} V}{\mathrm{~d} r}\left(\frac{x_{1}}{r}, \frac{x_{2}}{r}, \frac{x_{3}}{r}\right)=-\frac{\mathrm{d} V}{\mathrm{~d} r} \mathbf{e}_{r}
\quad\color{yellow}\text{(6.2)}
$$
Then we have $\mathbf{F}$ is [conservative](Conservative%20Force) by setting $V(r)=-\int_{r_{0}}^{r} F(s) \mathrm{d} s$ so that
$$
F(r)=-\frac{\mathrm{d} V}{\mathrm{~d} r}
$$
More specifically, for the remainder of this section we are interested in the following important example:

### Definition: Inverse Square Law Force
The inverse square law force is a [conservative](Conservative%20Force) [[central force]] with
$$
V(r)=-\frac{\kappa}{r}, \quad \mathbf{F}=-\frac{\kappa}{r^{2}} \mathbf{e}_{r}
\quad\color{yellow}\text{(6.4)}
$$
where $\kappa$ is constant, and we have used (6.1) and (6.3) to relate the potential to the force.
