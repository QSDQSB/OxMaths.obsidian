## Motion on a surface of revolution under gravity
#Dynamics 
### 5.3.1 [[Cylindrical Polar Coordinates]]
![Figure 11 | 400](Dynamics_46.png)

Cylindrical polar coordinates are $(r, \theta, z) .$ The relationship between cylindrical polars and cartesians $(x, y, z)$ is given by (Figure 11$)$
$$
x=r \cos \theta, \quad y=r \sin \theta, \quad z=z.
$$
The position vector is given by
$$
\mathbf{r}=r \mathbf{e}_{r}+z \mathbf{e}_{z},
$$
where $\mathbf{e}_{z}=\mathbf{k}$ is the unit vector in the direction of increasing $z$.
Note that now $|\mathbf{r}| \neq r$. By Pythagoras' theorem we have instead $|\mathbf{r}|=\left(r^{2}+z^{2}\right)^{1 / 2}$. The particle's $\color{orange}\text{velocity}$ is
$$
\dot{\mathbf{r}}=\dot{r} \mathbf{e}_{r}+r \dot{\theta} \mathbf{e}_{\theta}+\dot{z} \mathbf{e}_{z}
$$

The $\color{orange}\text{acceleration}$ is
$$
\ddot{\mathbf{r}}=\left(\ddot{r}-r \dot{\theta}^{2}\right) \mathbf{e}_{r}+\frac{1}{r} \frac{\mathrm{d}}{\mathrm{d} t}\left(r^{2} \dot{\theta}\right) \mathbf{e}_{\theta}+\ddot{z} \mathbf{e}_{z}.
$$
These are the same as in plane polar coordinates but with the simple Cartesian terms relating to $z$ as $\mathbf{e}_z$ does not vary in space.

---
### 5.3.2 A mass $m$ moving under gravity on a smooth surface of revolution
![Figure 12 | 400](Dynamics_47.png)
<center style="font-size:14px;color:#03a4f2;text-decoration:underline"> Figure 12: A particle on a surface of revolution about the z-axis. The surface is given by z = H(r). The forces acting on the particle are mg (weight) and N, the normal reaction.</center>

Consider a mass $m$ moving under gravity on a frictionless smooth surface of revolution, as in Fig. 12, with height $z$ given by $z=H(r)$.
When there is no friction the only force exerted by the surface on the particle is the normal reaction force $\mathbf{N}$ perpendicular to the surface. The total force on the particle is therefore
$$\mathbf{F}=-m g \mathbf{e}_{z}+\mathbf{N}.$$
The surface of revolution or "bowl" has $z$ as a symmetry axis, i.e. its equation is $r=r(z)$ rather than $r=r(z, \theta) .$ Since this is independent of $\theta$ the resulting surface will be invariant under rotation about the $z$ axis, which rotates the $\theta$ coordinate. This also implies that $\mathbf{e}_{\theta}$ is tangent to the surface at every point, and hence in particular we have $\mathbf{N} \cdot \mathbf{e}_{\theta}=0$
Newton's second law thus reads
$$
m\left[\left(\ddot{r}-r \dot{\theta}^{2}\right) \mathbf{e}_{r}+\frac{1}{r} \frac{\mathrm{d}}{\mathrm{d} t}\left(r^{2} \dot{\theta}\right) \mathbf{e}_{\theta}+\ddot{z} \mathbf{e}_{z}\right]=m \ddot{\mathbf{r}}=\mathbf{F}=-m g \mathbf{e}_{z}+\mathbf{N}
\quad\color{yellow}\text{(5.21)}
$$
Since **there is no $\theta$-component of force** we have
$$
0=\mathbf{e}_{\theta} \cdot m \ddot{\mathbf{r}}=\frac{m}{r} \frac{\mathrm{d}}{\mathrm{d} t}\left(r^{2} \dot{\theta}\right),
$$
so that $m r^{2} \dot{\theta}=m h=$ constant, where $h=r^{2} \dot{\theta}$ by definition. Hence
$$
\mathbf{e}_{z} \cdot(\mathbf{r} \wedge m \dot{\mathbf{r}})=\mathbf{e}_{z} \cdot\left(\left(r \mathbf{e}_{r}+z \mathbf{e}_{z}\right) \wedge\left(\dot{r} \mathbf{e}_{r}+r \dot{\theta} \mathbf{e}_{\theta}+\dot{z} \mathbf{e}_{z}\right)\right)=m r^{2} \dot{\theta}=m h=\text { Const },
$$
and there is **conservation of [[angular momentum]]** about the $z$-axis.

#### Exercise
> Use the equations of motion to determine the [[Angular Momentum]] in the $z$-direction, as a function of $r,$ for a particle rotating around the surface with $\dot{r}=0.$

We have the [[Angular Momentum]] in the $z$-direction is $m h=m r^{2} \dot{\theta}$ and $\dot{z}=0$ as $z=H(r)$ and $\dot{r}=0 .$ Thus $\ddot{z}=\ddot{r}=0$ and we have the equation of motion reduces
to
$$
0=-r \dot{\theta}^{2} \mathbf{e}_{r}+g \mathbf{e}_{z}-\frac{\mathbf{N}}{m}=-\frac{h^{2}}{r^{3}} \mathbf{e}_{r}+g \mathbf{e}_{z}-\frac{\mathbf{N}}{m},    
\quad\color{yellow}\text{(5.22)}
$$
Resolving in any direction other than a tangential one will be complicated by components of $\mathbf{N}$. We have resolved in the $\mathbf{e}_{\theta}$ direction already, so we need to resolve using another independent tangent vector.
We have $f(r, z, \theta)=z-H(r)=0$ on the surface so a normal is 
> The gradient in [[Cylindrical Polar Coordinates]] is $\nabla f=\frac{\partial f}{\partial r} \mathbf{e}_{r}+\frac{1}{r} \frac{\partial f}{\partial \theta} \mathbf{e}_{\theta}+\frac{\partial f}{\partial z} \mathbf{e}_{z}$.

$$
\mathbf{n}=\nabla 
f=\mathbf{e}_{z}-H^{\prime}(r) \mathbf{e}_{r},
\quad\color{yellow}\text{(5.23)}
$$
and hence
$$
\mathbf{t}=H^{\prime}(r) \mathbf{e}_{z}+\mathbf{e}_{r}
$$
is a tangent vector perpendicular to both the normal and $\mathbf{e}_\theta$.
Resolving in this direction will eliminate the normal reaction force $\mathbf{N}$ and gives
$$
0=\mathbf{t} \cdot\left[-\frac{h^{2}}{r^{3}} \mathbf{e}_{r}+g \mathbf{e}_{z}-\frac{\mathbf{N}}{m}\right]=-\frac{h^{2}}{r^{3}}+g H^{\prime}(r),
\quad\color{yellow}\text{(5.24)}
$$
and hence the [[angular momentum]] is $\color{pink} m h=m\left(g H^{\prime}(r) r^{3}\right)^{1 / 2}$.
#### Aside
Resolving
$$
m\left[\left(\ddot{r}-r \dot{\theta}^{2}\right) \mathbf{e}_{r}+\frac{1}{r} \frac{\mathrm{d}}{\mathrm{d} t}\left(r^{2} \dot{\theta}\right) \mathbf{e}_{\theta}+\ddot{z} \mathbf{e}_{z}\right]=m \ddot{\mathbf{r}}=\mathbf{F}=-m g \mathbf{e}_{z}+\mathbf{N}
$$
in the $\mathbf{t}$ direction and eliminating $z$ via $z=H(r)$ and eliminating $\dot{\theta}$ using $r^{2} \dot{\theta}=h$ will generate an equation of motion for $r(t)$ for any general motion. If this is required, it can usually be derived more easily via the conservation of energy.

---
### 5.3.3 Conservation of Energy
From [[conservation of energy]] we have
$$
E=\frac{1}{2} m|\dot{\mathbf{r}}|^{2}+m g z=\text { constant }.
$$
#### The equation of motion for r(t)
In cylindrical polars
$$
\dot{\mathbf{r}}^{2}=\dot{\mathbf{r}} \cdot \dot{\mathbf{r}}=\left|\dot{r} \mathbf{e}_{r}+r \dot{\theta} \mathbf{e}_{\theta}+\dot{z} \mathbf{e}_{z}\right|^{2}=\dot{r}^{2}+r^{2} \dot{\theta}^{2}+\dot{z}^{2}
\quad\color{yellow}\text{(5.27)}
$$
while $\dot{\theta}=h / r^{2}(t)$ and $z=H(r(t))$, so that $\dot{z}=H^{\prime}(r) \dot{r}$ by the [[chain rule]].
Hence
$$
E=\frac{1}{2} m\left[\dot{r}^{2}+\frac{h^{2}}{r^{2}}+\left(H^{\prime}(r)\right)^{2} \dot{r}^{2}\right]+m g H(r)
\quad\color{yellow}\text{(5.28)}
$$

This is the first integral of the equation for $r(t)$. Thus differentiate in time for the equation of motion for $r(t)$. Thus on factoring a $m \dot{r}$ we have
$$
m \dot{r}\left\{\left[1+\left(H^{\prime}(r)\right)^{2}\right] \ddot{r}+H^{\prime}(r) H^{\prime \prime}(r) \dot{r}^{2}-\frac{h^{2}}{r^{3}}+g H^{\prime}(r)\right\}=0
\quad\color{yellow}\text{(5.29)}
$$
Providing $\dot{r} \neq 0$, dividing by $m \dot{r}$ gives
$$
\left\{\left[1+\left(H^{\prime}(r)\right)^{2}\right] \ddot{r}+H^{\prime}(r) H^{\prime \prime}(r) \dot{r}^{2}-\frac{h^{2}}{r^{3}}+g H^{\prime}(r)\right\}=0
\quad\color{yellow}\text{(5.30)}
$$
the equation of motion for $r(t)$.
#### Aside
If $\dot{r}$ is zero at a point in time, Eqn (5.30) is still valid at this point by the continuity of all of its terms. Eqn (5.30) still holds if $\dot{r}=0$ all time, as may be confirmed by comparison with the final identity of Eqn (5.24) and as expected since the trajectory with $\dot{r}=0$ is the limit of a trajectory where $\dot{r}$ is small but not zero.

#### Example (Motion on a paraboloid)
>A particle moves under gravity on the smooth inside surface of the paraboloid $z=r^{2} / 4 a=H(r) .$ Initially it is at a height $z=a$ and is projected horizontally with speed $v$ along the surface of the paraboloid. Show that the particle moves between two heights in the subsequent motion, and find them.

##### Solution
At $t=0, z=a$. Since $r^{2}=4 a z$ (the particle is on the paraboloid), initially $r=2 a$. Also
$$
\left.\begin{array}{rl}
r \dot{\theta}= & v \\
\dot{r}= & 0 \\
\dot{z}= & 0
\end{array}\right\} \text { at } t=0
$$
where Fig. $8 \mathrm{~b}$ in particular highlights $r \dot{\theta}=v$. Thus
$$
h=r^{2} \dot{\theta}=r \times r \dot{\theta}=2 a v
$$
Conservation of energy, on use of the initial conditions, gives
$$
\frac{1}{2} m \dot{\mathbf{r}}^{2}+m g z=\text { constant }=\frac{1}{2} m v^{2}+m g a
$$
Thus
$$
\frac{1}{2}\left(\dot{r}^{2}+r^{2} \dot{\theta}^{2}+\dot{z}^{2}\right)+g z=\frac{1}{2} v^{2}+g a
$$
Eliminate $\dot{\theta}$ and $r$ to get a first order differential equation for $z(t)$ only, as we are interested in heights of the motion.
We have
$$
r=2 \sqrt{a z}, \quad \dot{r}=\sqrt{\frac{a}{z}} \dot{z}
$$
Substituting into (5.32) using $\dot{\theta}=h / r^{2},$ and eliminating $r$ for $z,$ gives
$$
\frac{1}{2}\left[\left(1+\frac{a}{z}\right) \dot{z}^{2}+\frac{4 a^{2} v^{2}}{4 a z}\right]+g z=\frac{1}{2} v^{2}+g a
$$
and thus
$$
\frac{1}{2}\left(1+\frac{a}{z}\right) \dot{z}^{2}=\frac{1}{2} v^{2}\left(1-\frac{a}{z}\right)+g(a-z)=\frac{g}{z}(z-a)\left(\frac{v^{2}}{2 g}-z\right)
$$
Since $z>0$ and $\dot{z}^{2} \geq 0$ it follows that
$$
\left(\frac{v^{2}}{2 g}-z\right)(z-a) \geq 0
$$
Therefore the particle always stays between the two heights $z=a$ and $z=v^{2} / 2 g$, at which $\dot{z}=0$

In particular the particle is confined to $z \geq a$ if $v^{2}>2 g a,$ or to $z \leq a$ if $v^{2}<2 g a$ or to the horizontal circle $z=a$ if $v^{2}=2 g a$.
