## Conservative Force
#Dynamics 
### Definition: Kinetic Energy
The [[Kinetic Energy]] of a point particle with trajectory $\mathbf{r}(t)$ is $$T=\frac12m|\dot{\mathbf{r}}|^2,$$ where $\mathbf{r}(t)$ is the particle's position in an inertial frame.
### Conservation of Energy
The quantity $$E=T+V=\frac12m|\dot{\mathbf{r}}|^2+V(r)\quad\color{yellow}\text{(4.9)}$$ is **conserved** for a point particle trajectory if the force $\mathbf{F}=\mathbf{F}(\mathbf{r})$ takes the form $$\mathbf{F}=-\nabla V.\quad\color{yellow}\text{(4.10)}$$
i.e. in Cartesian coordinates $\mathbf{F}=(-\partial_xV,-\partial_yV,-\partial_zV)$.
#### Proof
>Apply Newton's Second Law and take the dot product of both sides by $\dot{\mathbf{r}}$ (product rule + chain rule).

### Definition: Work done in 3D
The [[work done]] by a force $\mathbf{F}$ in moving a particle from $\mathbf{r}_{1}$ to $\mathbf{r}_{2}$ along a curve $C$ is
$$
W=\int_{C} \mathbf{F} \cdot \mathrm{d} \mathbf{r}
\quad\color{yellow}\text{(4.13)}
$$
In contrast to the definition in 1 dimension (3.3), the line integral (4.13) in higher dimensions depends on the precise curve $C,$ and not just on its endpoints $\mathbf{r}_{1}, \mathbf{r}_{2}$.

If we now suppose that $\mathbf{r}(t)$ is the trajectory of a particle satisfying Newton's second law, starting at position $\mathbf{r}_{1}=\mathbf{r}\left(t_{1}\right)$ and ending at $\mathbf{r}_{2}=\mathbf{r}\left(t_{2}\right),$ then we may write
$$
W=\int_{t_{1}}^{t_{2}} \mathbf{F} \cdot \dot{\mathbf{r}} \mathrm{d} t=m \int_{t_{1}}^{t_{2}} \ddot{\mathbf{r}} \cdot \dot{\mathbf{r}} \mathrm{d} t=\frac{m}{2} \int_{t_{1}}^{t_{2}} \frac{\mathrm{d}}{\mathrm{d} t}|\dot{\mathbf{r}}|^{2} \mathrm{~d} t=T\left(t_{2}\right)-T\left(t_{1}\right)
$$
**Thus, as in one dimension, the work done by the force is the change in kinetic energy.**
Suppose now that the total energy $E$ given by (4.9) is conserved, so that $$E=T\left(t_{1}\right)+V\left(\mathbf{r}_{1}\right)=T\left(t_{2}\right)+V\left(\mathbf{r}_{2}\right).$$ Hence (4.14) implies that
$$
W=\int_{C} \mathbf{F} \cdot \mathrm{d} \mathbf{r}=V\left(\mathbf{r}_{1}\right)-V\left(\mathbf{r}_{2}\right)
$$
The right hand side depends only on the endpoints $\mathbf{r}_{1}, \mathbf{r}_{2}$ of the curve $C$.
Hence **if energy is conserved, then the work done is independent of the choice of curve $C$ connecting $\mathbf{r}_{1}$ to $\mathbf{r}_{2}$.**

In MVC we have proved that if this is true for all curves $C$ then $\mathbf{F}$ takes the form (4.10).

Thus **if energy is always conserved then there is a function $V$ such that $\mathbf{F}=-\nabla V$.**
### Definition: Conservative
A force $\mathbf{F}=\mathbf{F}(\mathbf{r})$ is said to be conservative if there exists a potential energy function $V=V(\mathbf{r})$ such that
$$
\mathbf{F}=-\nabla V.
\quad\color{yellow}\textbf{(4.16)}
$$
> Note that  the potential $V$ is only defined up to an **additive constant**.
#### Examples
(i) Any force of the form $\mathbf{F}=F(|\mathbf{r}|) \mathbf{e}_{r}$ is conservative, where $\mathbf{e}_{r}=\mathbf{r} /|\mathbf{r}|$ (Section 6.1)
(ii) Any constant force $\mathbf{F}_{\text {const }}$ is conservative, with potential $V(\mathbf{r})=-\mathbf{F}_{\text {const }} \cdot \mathbf{r}$. For gravity, $\mathbf{F}=-m g \mathbf{k},$ the corresponding potential function is simply $V(\mathbf{r})=$ $m g \mathbf{k} \cdot \mathbf{r}=m g z.$

#### Theorem
> [[Conservative#Theorem 69]].

(in #MVC) Let $\mathbf{F}: S \rightarrow \mathbb{R}^{3}$ be a vector field, where the domain $S \subset \mathbb{R}^{3}$ is open and path-connected. Then the following three statements are equivalent:
1. $\mathbf{F}$ is conservative, $i$.e. there exists a [potential](Potential%20Energy) $V: S \rightarrow \mathbb{R}$ such that $\mathbf{F}=-\nabla V$.
2. Given any two points $\mathbf{r}_{1}, \mathbf{r}_{2}$ in $S,$ and any curve $C$ in $S$ starting at $\mathbf{r}_{1}$ and ending at $\mathbf{r}_{2},$ then the integral $\int_{C} \mathbf{F} \cdot \mathrm{d} \mathbf{r}$ is independent of the choice of $C$.
3. For any simple **closed** curve $C$ in $S$ we have $\int_{C} \mathbf{F} \cdot \mathrm{d} \mathbf{r}=0.$
It is also shown in #MVC that conservative forces satisfy $\color{yellow}\nabla \wedge \mathbf{F}=\mathbf{0}$.