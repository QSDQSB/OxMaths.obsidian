## Rigid Bodies
#Dynamics 
### Definition
A [[rigid body]] may be defined as any distribution of mass for which the distance between any two points is fixed.

A simple model for this is to take a finite number of point particles, as in section $7.1$, but with the constraint that the position vectors $\mathbf{r}_{I}(I=1, \ldots, N)$ satisfy
$$
\left|\mathbf{r}_{I}-\mathbf{r}_{J}\right|=c_{I J}, \text { constant, }
$$
thus ensuring that the body retains its size, shape and distribution of mass.
One might imagine the $\mathbf{r}_{I}$ as the positions of atoms in a solid, with the constraints arising from inter-molecular forces. We assume these constraint forces satisfy the strong form of Newton's third law.

Choose a point $O$ that is fixed in the body. For example, in the point particle model this could be one of the particles, although as we shall see below it will often be convenient to take this to be the centre of mass. We denote the position vector of $O$ as $\mathbf{x}=\mathbf{x}(t)$, where this is measured from the origin $\hat{O}$ of the inertial frame $\hat{\mathcal{S}}$. We may then write
$$
\mathbf{R}_{I}=\mathbf{x}+\mathbf{r}_{I}, \quad I=1, \ldots, N
$$
so that $\mathbf{R}_{I}$ and $\mathbf{r}_{I}$ are the positions of the body particles, as measured from $\hat{O}$ and $O$, respectively. See Figure 21 .

### Definition: Rest Frame
The rest frame $\mathcal{S}$ of the rigid body is a reference frame, with origin $O$, with respect to which the $\mathbf{r}_{I}$ are fixed (at rest), i.e.
$$
\left(\frac{\mathrm{d} \mathbf{r}_{I}}{\mathrm{~d} t}\right)_{\mathcal{S}}=\mathbf{0} \quad \text { for all } \quad I=1, \ldots, N .
$$

#### Aside
The existence of [[rest frame]] is really equivalent to what we mean by a rigid body in the first place. Provided the matter distribution is not all along a line, *the rest frame is defined uniquely by the body, up to a constant rotation of its axes and a translation of the origin by a constant vector (relative to $\mathcal{S})$.*
Using Eqn. (8.7) we then have the important result that
$$
\dot{\mathbf{R}}_{I}=\dot{\mathbf{x}}+\dot{\mathbf{r}}_{I}=\mathbf{v}_{O}+\boldsymbol{\omega} \wedge \mathbf{r}_{I}
$$
Here $\mathbf{v}_{O}=\dot{\mathbf{x}}$ is the velocity of $O$, as measured in the inertial frame $\hat{\mathcal{S}}$, while $\boldsymbol{\omega}$ is the angular velocity of the rest frame $\mathcal{S}$ with respect to $\hat{\mathcal{S}}$.

As we already mentioned, a natural choice for $O$ is the [[centre of mass]] $G$ of the body. This means that $\mathbf{x}=\mathbf{R}_{G}$, in the notation of section $7.1$

With $\mathbf{R}_{I}=\mathbf{R}_{G}+\mathbf{r}_{I}$ the position vectors of the particles relative to the inertial frame origin, so that $\mathbf{r}_{I} \rightarrow \mathbf{R}_{I}$ in the definition of the centre of mass, we have
$$
\mathbf{R}_{G}=\frac{1}{M} \sum_{I=1}^{N} m_{I} \mathbf{R}_{I}=\frac{1}{M} \sum_{I=1}^{N} m_{I}\left(\mathbf{R}_{G}+\mathbf{r}_{I}\right)=\mathbf{R}_{G}+\frac{1}{M} \sum_{I=1}^{N} m_{I} \mathbf{r}_{I}
$$
Hence
$$
\sum_{I=1}^{N} m_{I} \mathbf{r}_{I}=\mathbf{0}
$$

 

>We take the origin of the general reference to be the rigid body centre of mass, $O=G$, unless otherwise stated.

#### Linear Momentum
We already know from Eqn $(7.3)$ that $\mathbf{P}=M \dot{\mathbf{R}}_{G}=M \mathbf{v}_{G}$, but it is interesting to see this explicitly for a rigid body:
$\mathbf{P}=\sum_{I=1}^{N} m_{I} \dot{\mathbf{R}}_{I}=\sum_{I=1}^{N} m_{I}\left(\dot{\mathbf{R}}_{G}+\boldsymbol{\omega} \wedge \mathbf{r}_{I}\right)=M \dot{\mathbf{R}}_{G}+\boldsymbol{\omega} \wedge\left(\sum_{I=1}^{N} m_{I} \mathbf{r}_{I}\right)=M \dot{\mathbf{R}}_{G}$
>the total momentum is the same as if all the mass, M, was at the centre of mass G.

#### Angular momentum
The total [[angular momentum]] about the [[centre of mass]] $O=G$ is by definition
$$
\mathbf{L}_{G}=\sum_{I=1}^{N} \mathbf{r}_{I} \wedge m_{I} \dot{\mathbf{R}}_{I}=\sum_{I=1}^{N} m_{I} \mathbf{r}_{I} \wedge\left(\dot{\mathbf{R}}_{G}+\boldsymbol{\omega} \wedge \mathbf{r}_{I}\right)=\sum_{I=1}^{N} m_{I} \mathbf{r}_{I} \wedge\left(\boldsymbol{\omega} \wedge \mathbf{r}_{I}\right)
$$
Using the vector identity $\mathbf{r}_{I} \wedge\left(\boldsymbol{\omega} \wedge \mathbf{r}_{I}\right)=\left(\mathbf{r}_{I} \cdot \mathbf{r}_{I}\right) \boldsymbol{\omega}-\left(\mathbf{r}_{I} \cdot \boldsymbol{\omega}\right) \mathbf{r}_{I}$, we may write
$$
\mathbf{L}_{G}=\sum_{I=1}^{N} m_{I}\left[\left(\mathbf{r}_{I} \cdot \mathbf{r}_{I}\right) \boldsymbol{\omega}-\left(\mathbf{r}_{I} \cdot \boldsymbol{\omega}\right) \mathbf{r}_{I}\right]
$$

### Inertia Tensor
[[Inertia Tensor]]
### Kinetic energy
The total [[kinetic energy]] of the body, as measured in the inertial frame, is
$$
T=\sum_{I=1}^{N} \frac{1}{2} m_{I}\left|\dot{\mathbf{R}}_{I}\right|^{2}=\frac{1}{2} \sum_{I=1}^{N} m_{I}\left[\left|\dot{\mathbf{R}}_{G}\right|^{2}+2 \dot{\mathbf{R}}_{G} \cdot\left(\boldsymbol{\omega} \wedge \mathbf{r}_{I}\right)+\left(\boldsymbol{\omega} \wedge \mathbf{r}_{I}\right) \cdot\left(\boldsymbol{\omega} \wedge \mathbf{r}_{I}\right)\right]
$$
The middle term on the right hand side is again zero, as $\sum_{I} m_{I} \mathbf{r}_{I}=\mathbf{0}$.
On the other hand we may rewrite the last term using a vector identify and the expression for the inertia tensor
$$
\sum_{I=1}^{N} m_{I}\left(\boldsymbol{\omega} \wedge \mathbf{r}_{I}\right) \cdot\left(\boldsymbol{\omega} \wedge \mathbf{r}_{I}\right)=\sum_{I=1}^{N} m_{I}\left[\mathbf{r}_{I}^{2} \boldsymbol{\omega}^{2}-\left(\mathbf{r}_{I} \cdot \boldsymbol{\omega}\right)^{2}\right]=\boldsymbol{\omega} \cdot \mathbf{L}_{G}
$$
to give
$$
T=\frac{1}{2} M\left|\dot{\mathbf{R}}_{G}\right|^{2}+\frac{1}{2} \boldsymbol{\omega} \cdot \mathbf{L}_{G}
$$
Hence the total kinetic energy is the sum of
>(i) the kinetic energy for the centre of mass motion relative to $\hat{O}$.
> (ii) the rotational kinetic energy about G.

### Rotational Kinetic Energy
The [[rotational kinetic energy]] about the centre of mass $G$ is
$$
T_{\mathrm{rot}}=\frac{1}{2} \boldsymbol{\omega} \cdot \mathbf{L}_{G}=\frac{1}{2} \boldsymbol{\omega}^{\mathrm{T}} \mathcal{I}^{(G)} \boldsymbol{\omega}=\frac{1}{2} \sum_{i, j=1}^{3} \mathcal{I}_{i j}^{(G)} \omega_{i} \omega_{j}
$$

### Continuous Mass Distributions
#### Total Mass
$$M=\iiint_{\text {body }} \rho(\mathbf{r}) \mathrm{d} x \mathrm{~d} y \mathrm{~d} z.$$
#### [[Inertia Tensor]]
$$\mathcal{I}_{i j}=\iiint_{\text {body }} \rho(\mathbf{r})\left[(\mathbf{r} \cdot \mathbf{r}) \delta_{i j}-r_{i} r_{j}\right] \mathrm{d} x \mathrm{~d} y \mathrm{~d} z.$$
Here $\mathbf{r}=\left(r_{1}, r_{2}, r_{3}\right)=(x, y, z)$, so that the last equation more explicitly reads
$$
\mathcal{I}=\iiint_{\mathrm{body}} \rho(\mathbf{r})\left(\begin{array}{ccc}
y^{2}+z^{2} & -x y & -z x \\
-x y & z^{2}+x^{2} & -y z \\
-z x & -y z & x^{2}+y^{2}
\end{array}\right) \mathrm{d} x \mathrm{~d} y \mathrm{~d} z
$$
### Moment of Inertia about an Axis
The moment of inertia about an axis parallel to the unit vector $\mathbf{n}$ through $O$ is $I=\mathbf{n}^{\mathrm{T}} \mathcal{I} \mathbf{n} .$
In particular, the diagonal entries in $(8.18)$ are the moments of inertia about the three axes. The off-diagonal entries are called the products of inertia.