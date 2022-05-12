## The Kepler Problem
#Dynamics 
### Exercise
>Determine the equations of motion for a point particle of mass $m$ in the [conservative](Conservative%20Force) [[central force]] [(6.1)](Inverse%20Square%20Law%20Force) $$\mathbf{F}=F(r) \mathbf{e}_{r}.$$
#### Solution
From [Chapter 4](Angular%20Momentum#Proposition%20Central%20force%20is%20planar%20and%20its%20angular%20momentum%20is%20conserved), we know that the motion of the particle lies in a plane, which without loss is the x-y plane, and we use plane polars $r, \theta$ below in this plane.
We already know from [Chapter 4](Angular%20Momentum#Proposition%20Central%20force%20is%20planar%20and%20its%20angular%20momentum%20is%20conserved) that $\color{pink}mr^{2}\dot{\theta},$ the [z-component of the angular momentum](Angular%20Momentum#Proposition) about the origin, $\mathbf{L}=\mathbf{L}_{O},$ is conserved.
Newton's second law is 
$$
m \ddot{\mathbf{r}}=F(r) \mathbf{e}_{r}
$$
and thus
$$
m\left[\left(\ddot{r}-r \dot{\theta}^{2}\right) \mathbf{e}_{r}+\frac{1}{r} \frac{\mathrm{d}}{\mathrm{d} t}\left(r^{2} \dot{\theta}\right) \mathbf{e}_{\theta}\right]=F(r) \mathbf{e}_{r}
\quad\color{yellow}\text{(6.9)}
$$
Resolving in the $\mathbf{e}_{\theta}, \mathbf{e}_{r}$ directions, we have
$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d} t}\left(r^{2} \dot{\theta}\right) &=0 \quad\color{yellow}\text{(6.10)}
\\
m\left(\ddot{r}-r \dot{\theta}^{2}\right) &=F(r)\quad\color{yellow}\text{(6.11)}

\end{aligned}
$$
and the first equation confirms $m r^{2} \dot{\theta}=m h$ is conserved.
Eliminating $\dot{\theta}$ in terms of $h$ gives
$$
\color{pink}m\left(\ddot{r}-\frac{h^{2}}{r^{3}}\right)=F(r)
\quad\color{yellow}\text{(6.12)}
$$
Solving this gives $r(t),$ and we then have a first order ODE for $\theta(t)$ via $\dot{\theta}=h / r^{2}(t)$ This generates the trajectory, parameterised by time.

>Here, it will in fact be easier to solve for the trajectory parameterised by $\theta,$ so we look instead to solve for $r(\theta)$ directly.
It is much easier in practice with central force problems to work with $$u(\theta) \equiv \frac{1}{r(\theta)}.$$
### Proposition: Equation of Motion Parameterised by $\theta$
For a particle moving in a [[central force]], the equations of motion imply that, for $h \neq 0$
$$
\frac{\mathrm{d}^{2} u}{\mathrm{~d} \theta^{2}}+u=-\frac{F(1 / u)}{m h^{2} u^{2}},
\quad\color{yellow}\text{(6.13)}
$$
where $u(\theta)=1 / r(\theta)$ gives the curve traced out by the path of the particle.
#### Proof
We have $\dot{\theta}=h / r^{2}=h u^{2},$ giving
$$
\dot{r}=\frac{\mathrm{d}}{\mathrm{d} t}\left(\frac{1}{u}\right)=-\frac{1}{u^{2}} \dot{\theta} \frac{\mathrm{d} u}{\mathrm{~d} \theta}=-h \frac{\mathrm{d} u}{\mathrm{~d} \theta}
\quad\color{yellow}\text{(6.14)}
$$
Differentiating again:
$$
\ddot{r}=\frac{\mathrm{d}}{\mathrm{d} t}\left(-h \frac{\mathrm{d} u}{\mathrm{~d} \theta}\right)=-h \frac{\mathrm{d}}{\mathrm{d} t}\left(\frac{\mathrm{d} u}{\mathrm{~d} \theta}\right)=-h \dot{\theta} \frac{\mathrm{d}^{2} u}{\mathrm{~d} \theta^{2}}=-h^{2} u^{2} \frac{\mathrm{d}^{2} u}{\mathrm{~d} \theta^{2}}
\quad\color{yellow}\text{(6.15)}
$$
Substituting this into [(6.12)](The%20Kepler%20Problem#Solution) gives
$$
m\left(-h^{2} u^{2} \frac{\mathrm{d}^{2} u}{\mathrm{~d} \theta^{2}}-h^{2} u^{3}\right)=F\left(\frac{1}{u}\right)
\quad\color{yellow}\text{(6.16)}
$$
which rearranges to [(6.13)](#Proposition).
#### Aside
> Eqn [(6.13)](#Proposition) is not valid when $h=r^{2} \dot{\theta}=0 .$ Since $r=0$ is excluded, we have $\dot{\theta}=0$ and straight line motion with $\theta$ constant. Then the parametrization $r=r(\theta)$ does not make sense. Below in this section, we assume $r^{2} \dot{\theta} \neq 0$ and thus, by e.g. [Eqn (4.20)](Angular%20Momentum#Angular%20Momentum%20in%20Polar%20Coordinates), $\mathbf{L}_{O} \neq \mathbf{0}$

^e79a22

### The Kepler Problem
We now examine the central [[inverse square law force]] for a particle of mass $m,$ with $F(r)=-\kappa / r^{2},$ where $\kappa=G_{N} M m>0 ;$ this is the Kepler problem.
#### Theorem: Kepler Problem Trajectories are Conic Sections
For the Kepler problem the particle trajectories with non-zero [[angular momentum]] are conic sections.
##### Proof of Conic Sections
In terms of the variable $u=1/r$ we have $F(r)=-\kappa u^{2}$. Substituting this into [(6.13)](The%20Kepler%20Problem#Proposition) gives
$$
\frac{\mathrm{d}^{2} u}{\mathrm{~d} \theta^{2}}+u=\frac{\kappa}{m h^{2}}
\quad\color{yellow}\text{(6.17)}
$$
**Remarkably, the change of variable has reduced the problem to the same ODE we found for [a particle attached to a linear Hook law spring $(c . f$. equation (2.16)$)$](Spring%20Force.md#Example) which exhibits simple harmonic motion.**
The general solution for $u(\theta)$ is
$$
u(\theta)=\frac{\kappa}{m h^{2}}[1+e \cos (\theta+\phi)],
\quad\color{yellow}\text{(6.18)}
$$
where $e$ and $\phi$ are integration constants.
We can use the freedom to rotate the coordinate system axes #Q to set either $\phi=0$ if $e>0,$ or $\phi=\pi$ if $e<0$ to obtain $$e \cos (\theta+\pi)=-e \cos \theta=|e| \cos \theta ;$$ hence without loss we take $e \geq 0$ and $\phi=0$.
On the other hand, from the Prelims Geometry course we know that the general polar form of a conic may be written as
$$
\frac{r_{0}}{r}=r_{0} u=1+e \cos \theta,
\quad\color{yellow}\text{(6.19)}
$$
where $r_{0}$ is a constant and the origin at $r=0$ is situated at one of the foci. 
Comparing to (6.18) and recalling that $\kappa>0$ we may thus identify
$$
r(\theta)=\frac{r_{0}}{1+e \cos \theta}, \quad \text { where } \quad r_{0}=\frac{m h^{2}}{\kappa}=\frac{h^{2}}{G M}>0.
\quad\color{yellow}\text{(6.20)}
$$
Regarding $G M$ as fixed, the scale parameter $r_{0}$ is thus determined by the specific [[angular momentum]] $h$.
##### Note
The integration constant $e \geq 0$ is the eccentricity of the conic. This is
- an ellipse for $0 \leq e<1,$ with $e=0$ being a circle,
- a parabola for $e=1$,
- a hyperbola for $e>1$.
##### Time dependence
The time dependence may be recovered by solving $\dot{\theta}=h u^{2}(\theta)$, as
$$
h t=\int \frac{\mathrm{d} \theta}{u^{2}(\theta)}=r_{0}^{2} \int \frac{\mathrm{d} \theta}{(1+e \cos \theta)^{2}},
\quad\color{yellow}\text{(6.21)}
$$
which gives $t$ as a function of $\theta$.

#TBV 
### The Effective Potential and Energy
We now reconsider the original equation of motion [(6.12)](#Solution) for $r(t)$ from a context of energy. Recalling that $F(r)=-\mathrm{d}V/\mathrm{d}r$ and defining an [[effective potential]]
$$
V_{\mathrm{eff}}(r)=V(r)+\frac{m h^{2}}{2 r^{2}}
\quad\color{yellow}\text{(6.29)}
$$
we have [(6.12)](#Solution) may be written in the form
$$
m \ddot{r}=-\frac{\mathrm{d} V_{\mathrm{eff}}}{\mathrm{d} r}.
\quad\color{yellow}\text{(6.30)}
$$

###  The Energy, in terms of the eccentricity, [[angular momentum]] and physical parameters
We already have the total energy, $E$ in [(6.31)](Effective%20Potential.md), is conserved. To simplify this expression, given the solution of the equation of motion $(6.18),$ we need $\dot{r},$ which from Eqns. $(6.14),(6.18),$ is given by
$$
\dot{r}=-h \frac{\mathrm{d} u}{\mathrm{~d} \theta}=\frac{h e}{r_{0}} \sin \theta
\quad\color{yellow}\text{(6.33)}
$$
Inserting this and $r=r_{0} /(1+e \cos \theta)$ from Eqn (6.20) into
$$
E=\frac{1}{2} m \dot{r}^{2}-\frac{\kappa}{r}+\frac{m h^{2}}{2 r^{2}}
\quad\color{yellow}\text{(6.34)}
$$
and, using $r_{0}=m h^{2} / \kappa$ from Eqn. (6.32), we find that $E$ is indeed constant:
$$
E=\frac{\left(e^{2}-1\right) \kappa^{2}}{2 m h^{2}}
\quad\color{yellow}\text{(6.35)}
$$
In particular we see that the bound orbits with $0 \leq e<1($ i.e. ellipses) have $E<0$.
This is also clear from the [[effective potential]] in Figure 14: ![Figure 14 | 400](Dynamics_61.png) 
- For $E<0$ the particle moves back and forth between some $r_{\min }$ and $r_{\text {max }},$ and the orbit is bounded, as in the discussion of a general potential in section 3.2 .
- For $e>1$ we have $E>0$ and the particle has a minimum radius, but escapes to infinity. These are the hyperbolic orbits.
- The parabola $e=1$ is the limiting case with zero energy, for which the particle only just escapes to infinity, where the potential for the inverse square law is zero.

### Examples 
#### Example: Geostationary orbit
> A geostationary orbit is a circular orbit in the plane containing the Earth’s equator, which co-rotates with the Earth. Determine the altitude of a satellite of mass $m$ on this geostationary orbit.

##### Solution
The angular velocity of the satellite on the geostationary orbit is the same as that of the Earth's rotation, namely $\dot{\theta}=2 \pi$ radians per day.

Using $h=r_{0}^{2} \dot{\theta}$, with $\kappa=G_{N} M_{E} m,$ where $M_{E}$ is the mass of the Earth, and $m$ the mass of the satellite, Eqn. (6.32) implies the radius satisfies
$$
r_{0}=\frac{m h^{2}}{\kappa}=\frac{r_{0}^{4} \dot{\theta}^{2}}{G_{N} M_{E}}.
$$
and hence
$$
\begin{array}{c}
r_{0}=\left(\frac{G_{N} M_{E}}{\dot{\theta}^{2}}\right)^{1 / 3} \simeq 4.22 \times 10^{7} \mathrm{~m}=42,200 \mathrm{~km}. \\
\text { using } G_{N} \simeq 6.67 \times 10^{-11} \mathrm{Nm}^{2} \mathrm{~kg}^{-2}, M_{E} \simeq 5.97 \times 10^{24} \mathrm{~kg}, \dot{\theta} \simeq 7.27 \times 10^{-5} \mathrm{~s}^{-1}
\end{array}
$$
Noting the radius of the Earth is $r_{E} \simeq 6370 \mathrm{~km}$ we have the altitude of the satellite
is
$$
r_{0}-r_{E} \simeq 35,800 \mathrm{~km}.
$$

### General Solution of the Kepler Problem and the Path of the Comet
The general solution to [[the Kepler problem]] may be written as
$$
u(\theta)=\frac{\kappa}{m h^{2}}+C \cos \theta+D \sin \theta
\quad\color{yellow}\text{(6.39)}
$$
We use the initial conditions (6.38) at $t=-T, \theta=0,$ to determine $C, D$ and hence
$$
u(\theta)=\frac{\kappa}{m p^{2} v^{2}}(1-\cos \theta)+\frac{1}{R} \cos \theta+\frac{1}{p} \cos \alpha \sin \theta
\quad\color{yellow}\text{(6.40)}
$$
This holds for all sufficiently large $T$.

A posteriori, taking the limit $T \rightarrow \infty$ after all other calculations are completed, and noting $R \rightarrow \infty, \alpha \rightarrow 0$ in this limit, we have the [[Path of the Comet]] is given by
$$
u(\theta)=\frac{\kappa}{m p^{2} v^{2}}(1-\cos \theta)+\frac{1}{p} \sin \theta
\quad\color{yellow}\text{(6.41)}
$$
![Figure 16 |400](Dynamics_65.png)
> The actual path of the comet. The origin is at the Sun (large black dot), with the $\theta=0$ axis horizontal, to the right (one should understand the dotted lines as extending to infinity).