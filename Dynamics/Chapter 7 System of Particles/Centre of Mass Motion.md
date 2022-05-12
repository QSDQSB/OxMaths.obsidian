## Centre of Mass Motion
#Dynamics 
#### Notation: Inertial Frame
>We will always denote our [inertial frame](Inertial%20Reference%20Frame), in which we write down Newton's second law, as $\color{pink}\hat{\mathcal{S}}$, with origin $\hat{O}$.
### Motion of Many Particles
Consider a system of $N$ point particles. With respect to an inertial frame $\hat{\mathcal{S}},$ we denote the position vector of the $I$ th particle from $\hat{O}$ by $\mathbf{r}_{I},$ which has mass $m_{I}$ and hence linear momentum $\mathbf{p}_{I}=m_{I} \dot{\mathbf{r}}_{I}, I=1, \ldots, N$.
We suppose that particle $J$ exerts a force $\mathbf{F}_{I J}$ on particle $I,$ for $I \neq J .$ Newton's third law immediately tells us that $\mathbf{F}_{J I}=-\mathbf{F}_{I J}$ for each $I \neq J$.
Without loss set $\mathbf{F}_{I I}=\mathbf{0}$.
On the other hand Newton's second law for particle $I$ reads
$$
m_{I} \ddot{\mathbf{r}}_{I}=\dot{\mathbf{p}}_{I}=\mathbf{F}_{I}=\mathbf{F}_{I}^{\mathrm{ext}}+\sum_{J \neq I} \mathbf{F}_{I J}
\quad\color{yellow}\text{(7.1)}
$$
Here we have included an *external force* $\mathbf{F}_{I}^{\mathrm{ext}},$ i.e. a force acting on particle $I$ that is not due to the other $N-1$ particles in the system. We refer to the $\mathbf{F}_{I J}$ as *internal forces*.

#### Aside
When considering a single particle, the force $\mathbf{F}=\mathbf{F}^{\text {ext }}$ in Newton's second law is by definition always external.

### Definition: Centre of Mass
The [[centre of mass]] of the system of particles is the point $G,$ with position vector
$$
\mathbf{R}_{G} \equiv \frac{1}{M} \sum_{I=1}^{N} m_{I} \mathbf{r}_{I},
\quad\color{yellow}\text{(7.2)}
$$
where $M=\sum_{I=1}^{N} m_{I}$ is the total mass. Similarly the total momentum of the system is
$$
\mathbf{P} \equiv \sum_{I=1}^{N} \mathbf{p}_{I}=M \dot{\mathbf{R}}_{G}.
\quad\color{yellow}\text{(7.3)}
$$
### Theorem
>The [centre of mass](Centre%20of%20Mass%20Motion.md#Definition%20Centre%20of%20Mass) of the system behaves like a point particle of mass $M$ acted on by the *total external force*. In particular,** the dynamics of the centre of mass is independent of the internal forces.**

#### Proof
We have
$$
M \ddot{\mathbf{R}}_{G}=\dot{\mathbf{P}}=\sum_{I=1}^{N} \dot{\mathbf{p}}_{I}=\sum_{I=1}^{N}\left(\mathbf{F}_{I}^{\mathrm{ext}}+\sum_{J \neq I} \mathbf{F}_{I J}\right).
\quad\color{yellow}\text{(7.4)}
$$
However, due to Newton's third law $\mathbf{F}_{I J}=-\mathbf{F}_{J I}$, the $N(N-1)$ terms in the sum
$$
\sum_{I=1}^{N} \sum_{J \neq I} \mathbf{F}_{I J}=\mathbf{0},
\quad\color{yellow}\text{(7.5)}
$$
cancel pairwise.
Thus (7.4) becomes
$$
M \ddot{\mathbf{R}}_{G}=\dot{\mathbf{P}}=\sum_{I=1}^{N} \mathbf{F}_{I}^{\mathrm{ext}}=\mathbf{F}^{\mathrm{ext}},
\quad\color{yellow}\text{(7.6)}
$$
where $\mathbf{F}^{\text {ext }}$ is by definition the* total external force*.
> This result explains why we can often so accurately model objects as point particles, even when they manifestly are not. Whatever internal forces are acting within our object, for example holding it together, they will cancel out of the centre of mass motion. In most of the problems we have studied we have really been modelling the centre of mass motion of an object, and applying Newton’s second law in the form [(7.6)](#Proof).
### Definition: Closed System
A [[closed system]] is one in which all forces are internal, acting between the constituents of the system. That is, $\mathbf{F}_{I}^{\mathrm{ext}}=\mathbf{0}, I=1, \ldots, N$.

>**For a closed system**
>- the total momentum is conserved, $\dot{\mathbf{P}}=\mathbf{0}$. 
>- the centre of mass moves with constant velocity $\dot{\mathbf{R}}_{G}=\text{constant}$. 
Without loss, we may then take the centre of mass to be $\mathbf{R}_{G}=\mathbf{0}$, the origin of our [[inertial reference frame]].

### Definition: Centre of Mass Reference Frame
A [[Centre of Mass Reference Frame]] has its origin at the centre of mass, $\mathbf{R}_{G}=\mathbf{0} .$ When $\mathbf{F}^{\mathbf{e x t}}=\mathbf{0}$, this is also an inertial reference frame.

### Definition: Total Angular Momentum
The [[Total Angular Momentum]] $\mathbf{L}=\mathbf{L}_{P}$ of the system about a point $P$ is
$$
\mathbf{L}_{P}=\sum_{I=1}^{N}\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge \mathbf{p}_{I}
$$
where $P$ has position vector $\mathbf{x}$ from the origin $\hat{O}$. That is, $\mathbf{L}$ is the vector sum of the angular momenta $\mathbf{L}_{I}=\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge \mathbf{p}_{I}$ for each particle $I$ about $P$.
