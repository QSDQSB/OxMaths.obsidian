## Simple Pendulum
#Dynamics 
Consider the [[Simple Pendulum]]. This consists of a mass $m$ fixed to the end of a light (**negligible** mass) rod of length $l$. The other end of the rod is hinged smoothly at a point $O$ and is free to swing in a vertical plane under gravity, Fig. 10.

The rod constrains the mass $m$ to move on a circle of radius $l$ in the $(z, x)$ plane, centred on the pivot point $O$. The constraint space in this case is hence a circle. 
![Figure 10 | 200](Dynamics_42.png)
<center style="font-size:14px;color:#03a4f2;text-decoration:underline">Figure 10: A simple pendulum.</center> 

The [[constraint force]] for the motion is the tension $\mathbb{T}$ in the rod.
Given that the motion will lie on a circle, it is useful to introduce polar coordinates in the $(z, x)$ plane: $z=-l \cos \theta, x=l \sin \theta .$ The corresponding unit vectors are
$$
\mathbf{e}_{r}=-\cos \theta \mathbf{k}+\sin \theta \mathbf{i}, \quad \mathbf{e}_{\theta}=\sin \theta \mathbf{k}+\cos \theta \mathbf{i} .
$$
As in [(4.4)](Planar%20Motion%20in%20Polar%20Coordinates) we again have $\dot{\mathbf{e}}_{r}=\dot{\theta} \mathbf{e}_{\theta}, \dot{\mathbf{e}}_{\theta}=-\dot{\theta} \mathbf{e}_{r}$.
It follows that the velocity and acceleration are again given by (Eqns. [(4.5)](Planar%20Motion%20in%20Polar%20Coordinates),[(4.6)](Planar%20Motion%20in%20Polar%20Coordinates))
$$
\dot{\mathbf{r}}=\dot{r} \mathbf{e}_{r}+r \dot{\theta} \mathbf{e}_{\theta}, \quad \ddot{\mathbf{r}}=\left(\ddot{r}-r \dot{\theta}^{2}\right) \mathbf{e}_{r}+\frac{1}{r} \frac{\mathrm{d}}{\mathrm{d} t}\left(r^{2} \dot{\theta}\right) \mathbf{e}_{\theta},
$$
where $\mathbf{r}=(z, x)$.
The forces acting on the mass $m$ are gravity and the constraint force: in the notation of section 5.1 we have
$$
\mathbf{F}_{0}=-m g \mathbf{k}, \quad \mathbf{N}=-\mathbb{T} \mathbf{e}_{r},
$$
where the total force acting is $\mathbf{F}=\mathbf{F}_{0}+\mathbf{N}$.
Newton's second law is a **vector equation**. Resolving in the $\mathbf{e}_{\theta}$ direction gives
$$
\frac{m}{r} \frac{\mathrm{d}}{\mathrm{d} t}\left(r^{2} \dot{\theta}\right)=m \ddot{\mathbf{r}} \cdot \mathbf{e}_{\theta}=\mathbf{F} \cdot \mathbf{e}_{\theta}=-m g \sin \theta.
\quad\color{yellow}\text{(5.9)}
$$
However, here $r=l$ is constant, so that (5.9) reads $m \ddot{\theta}=-m g \sin \theta,$ which rearranges to
$$
\ddot{\theta}=-\frac{g}{l} \sin \theta.
\quad\color{yellow}\text{(5.10)}
$$
<center style="font-size:14px;color:#03a4f2;text-decoration:underline">The equation of motion for the simple pendulum.</center> 

> $r=l$ is a constant, so $\ddot{\mathbf{r}}=(\mathbf{0},\ddot{\theta}).$

Resolving in the $\mathbf{e}_{r}$ direction gives
$$
-m l \dot{\theta}^{2}=m \ddot{r}-m \dot{\theta}^{2}=m \ddot{\mathbf{r}} \cdot \mathbf{e}_{r}=\mathbf{F} \cdot \mathbf{e}_{r}=m g \cos \theta-\mathbb{T}.
$$
Thus
$$
\mathbb{T}=m l \dot{\theta}^{2}+m g \cos \theta.
\quad\color{yellow}\text{(5.12)}
$$
This says that the tension $\mathbb{T}$ balances the component of the weight along the rod $mg \cos \theta,$ and the centripetal force $m l \dot{\theta}^{2}$ for circular motion about the origin $O$.
We cannot solve the equation of motion (5.10) in closed form, as simple as it looks, but we can look at the equilibrium configurations, and conservation of energy.

### Equilibria
Notice there are two [[equilibrium]] configurations, where the right hand side of (5.10) is zero: $\theta=0$ and $\theta=\pi$.
The former has the pendulum hanging down vertically, and for small oscillations (i.e. small $\theta$ ) we may approximate $\sin \theta \simeq \theta$. In this linearized approximation (5.10) becomes the simple harmonic motion
$$
\ddot{\theta}=-\omega^{2} \theta, \quad \text { where } \quad \omega^{2}=\frac{g}{l}>0.
\quad\color{yellow}\text{(5.13)}
$$
Thus, as is intuitively obvious, $\theta=0$ is a $\color{green}\text{stable}$ equilibrium.
For small oscillations about this point the pendulum executes [[simple harmonic motion]] with angular frequency $\omega$, so that
$$
\theta(t)=A \sin (\omega t)+B \sin (\omega t)

$$
which has the period
$$
T=2 \frac{\pi}{\omega}=2 \pi \sqrt{\frac{l}{g}}.
\quad\color{yellow}\text{(5.14)}
$$

To consider the second equilibrium position, $\theta=\pi,$ set $\theta=\pi+\xi(t),$ with $\xi(t)$ small, so that $\sin \theta=\sin (\pi+\xi) \simeq-\sin \xi \simeq-\xi .$ This yields
$$
\ddot{\xi}=-\frac{g}{l}(-\xi)=\frac{g}{l} \xi.
$$
The general solution is $\xi(t)=Ce ^{\sqrt{g / l} t}+D e^{-\sqrt{g / l} t},$ and the equilibrium is $\color{red}\text{unstable}$.

### Conservation of Energy
Total energy is conserved, as the gravitational force $\mathbf{F}_{0}=-m g \mathbf{k}$ is [conservative](Conservative%20Force), with potential $V(\mathbf{r})=V(x, y, z)=m g z .$ The total
energy is
$$
E=\frac{1}{2} m|\dot{\mathbf{r}}|^{2}+V(\mathbf{r})=\frac{1}{2} m l^{2} \dot{\theta}^{2}-m g l \cos \theta
\quad\color{yellow}\text{(5.16)}
$$
Thus we have $E \geq-m g l,$ with equality for the stable equilibrium at $\theta=0$. However, if $E>m g l$ then $\cos \theta_{0}=-E / m g l$ has no solution, and hence **$\dot{\theta}$ is never zero**. In this case the system has so much energy that the pendulum swings over the top of the pivot point.
#### Aside
View (5.16) as a first order ODE for $\theta(t)$. Integrating and rearranging gives
$$
\dot{\theta}^2=\frac{2E}{ml^2}+\frac{2g}{l}\cos\theta,
\quad\color{yellow}\text{(5.17)}
$$
which integrates to
$$
t=\pm \int \frac{\mathrm{d} \theta}{\sqrt{2 E / m l^{2}+2(g / l) \cos \theta}}.
\quad\color{yellow}\text{(5.18)}
$$
If we assume that the pendulum starts at $\theta=0$ at time $t=0,$ and reaches a maximum angle of $\theta_{0}>0$ in its swing, then we may compute the period of the swing:
$$
T=4 \int_{0}^{\theta_{0}} \frac{\mathrm{d} \theta}{\sqrt{2 E / m l^{2}+2(g / l) \cos \theta}}=4 \sqrt{\frac{l}{g}} \int_{0}^{\theta_{0}} \frac{\mathrm{d} \theta}{\sqrt{2 \cos \theta-2 \cos \theta_{0}}}.
\quad\color{yellow}\text{(5.19)}
$$
Here we have noted that at the top of the swing $\dot{\theta}=0,$ and hence from (5.17) $\cos \theta_{0}=-E / m g l$.

##### Aside
One can derive the result for small oscillations from (5.19) by making the approximation $\cos\theta\simeq1-\frac12\theta^2$ in the integral.
The integral in (5.19) is an $\color{orange}\text{elliptic integral}$.