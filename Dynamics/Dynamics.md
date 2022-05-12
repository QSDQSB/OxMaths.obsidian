# Prelims Dynamics
#Subject 
## Chapter 1 Newtonian Mechanics
### 1.1 Space and Time
#### Reference Frame
Definition A [[Reference Frame]] $\mathcal{S}$ is specified by a choice of origin $O$, together with a set of perpendicular (right handed) 3D Cartesian coordinate axes at $O$.
[[Inertial Reference Frame]]

#### Point Particle
A point particle is an idealised object, modelled as being located at position $\mathbf{r}(t)$ at time $t$ relative to a reference frame.

#### Definition of Velocity, Speed and Acceleration
$\begin{aligned} \text { Velocity } &=\mathbf{v}=\frac{\mathrm{d} \mathbf{r}}{\mathrm{d} t}=\dot{\mathbf{r}}=\left(\frac{\mathrm{d} x}{\mathrm{~d} t}, \frac{\mathrm{d} y}{\mathrm{~d} t}, \frac{\mathrm{d} z}{\mathrm{~d} t}\right)=(\dot{x}, \dot{y}, \dot{z}) \\ \text { Speed } &=v=|\mathbf{v}|=\left(\dot{x}^{2}+\dot{y}^{2}+\dot{z}^{2}\right)^{1/2} \\ \text { Acceleration } &=\mathbf{a}=\frac{\mathrm{d} \mathbf{v}}{\mathrm{d} t}=\frac{\mathrm{d}^{2} \mathbf{r}}{\mathrm{d} t^{2}}=\ddot{\mathbf{r}}=\left(\frac{\mathrm{d}^{2} x}{\mathrm{~d} t^{2}}, \frac{\mathrm{d}^{2} y}{\mathrm{~d} t^{2}}, \frac{\mathrm{d}^{2} z}{\mathrm{~d} t^{2}}\right)=(\ddot{x}, \ddot{y}, \ddot{z}) \end{aligned}$

---
### 1.2 Newton's Laws
- [[Momentum]]
- [[Newton's First Law]]
- [[Newton's Second Law]]
- [[Newton's Third Law]]

---
### 1.3 Galilean transformation
#### Definition
An inertial reference frame is a frame that is not undergoing acceleration.
#### [[Inertial Reference Frame]] is not unique.
##### Transformations of an inertial reference frame
- spatial translations, $\mathbf{r}^{\prime}=\mathbf{r}-\mathbf{x},$ where $\mathbf{x}$ is a constant vector, 
- constant rotations, $\mathbf{r}^{\prime}=\mathcal{R} \mathbf{r},$ where $\mathcal{R}$ is a constant $3\times3$ rotation matrix, 
- Galilean boosts, $\mathbf{r}^{\prime}=\mathbf{r}-\mathbf{u} t,$ where $\mathbf{u}$ is a constant velocity.
#### Galilean transformation group
Any combination of the above transformations thus maps an [[Inertial Reference Frame]] to another inertial frame, generating the Galilean transformation group.
Physics is invariant under Galilean transformations: The laws of motion are the same in any inertial frame. This is know as Galileo's principle of relativity.

---
### 1.4 Dimensions
#### Fundamental dimensions in Mechanics
$$[length] = \textbf{L},\quad [time]=\textbf{T},\quad[mass]=\textbf M,\quad [electric\,\, charge]=\textbf Q.$$

## Chapter 2 Forces and Dynamics: A First Look
### 2.1 Examples of forces
#### 2.1.1 Gravity
1. In an inertial frame fixed on the Earth's surface, with $z$ pointing up, Newton's second law becomes
$$
m_{g} \mathbf{g}=-m_{g} g \mathbf{k}=\mathbf{F}=m_{I} \ddot{\mathbf{r}}=m_{I} \ddot{z} \mathbf{k},
$$
where $m_I=m$ is the inertial mass.

2. The gravitational force on the Earth due to the Sun is $$\textbf{F}=-\frac{Gm_1m_2}{r^2}\textbf{e}_r$$ where $m_1$ and $m_2$ are the masses of the Sun and Earth respectively, $\textbf{r}$ is the position vector of the Earth relative to the centre of the Sun, with magnitude $r$ and in the direction of the unit vector $\textbf{e}_r$. $G$ is the universal gravitational constant ($G = 6.67 × 10^{−11} m^3 kg^{−1} s^{−2}$).

####  2.1.2 Normal Reaction Force and Friction
When a particle rests on a table, it experiences a force $m\textbf{g}$ due to gravity. This is balanced exactly by a normal reaction force, often denoted $\textbf{N}$, and ultimately of electrostatic origin.
If the particle is slides across the table, or is acted on by a force tangential to the table top, friction can be generated which tends to act to oppose this motion and force.

#### 2.1.3 Fluid drag
A particle moving through a fluid (such as air or water) experiences a drag force. Usually this is taken to act in the direction $-\mathbf{v}$, where $\mathbf{v}$ is the particle velocity.
For example, [[Stokes' law]] for a small sphere moving through a viscous liquid says the drag force is
$$
\mathbf{F}=-6 \pi \mu R \mathbf{v},
$$
where $\mu$ is the [[dynamic viscosity]] of the liquid, $R$ is the radius of the sphere.
A quadratic drag often holds for streamlined shapes such as aerofoils(翼型), whence
$$
\mathbf{F}=-D|\dot{\mathbf{r}}| \dot{\mathbf{r}},
$$
where the constant $D>0$ and depends on the geometry of the aerofoil and the fluid density.
##### Example (Linear Drag)
Consider a particle falling under gravity with a linear drag force, $\mathbf{F}=-b \mathbf{v},$ with $b>0$. The particle is released from rest at time $t=0$ Determine its trajectory and terminal velocity.

#### 2.1.4 [[Spring Force]]
A spring is fixed at one end and attached to a particle at the other. The particle will experience a force, $\mathbf{F}$, directed along the line of the spring with a magnitude that depends on the extension of the spring from its equilibrium length.
Hooke's linear law states that the force is proportional to the extension, so that
$$
\mathbf{F}=-k(x-l) \mathbf{t}
$$
where $\mathbf{t}$ is the unit vector along the spring pointing towards the particle, $x$ is the length of the spring, $l$ is the equilibrium length, and $k$ is the spring constant.

####  2.1.5 Charged particle in electric and magnetic fields
For a charged particle moving in an electric field the force on the particle is the Lorentz force, given by
$$
\mathbf{F}=e \mathbf{E}+e \mathbf{v} \wedge \mathbf{B}
$$
where $e$ is the charge on the particle, $\mathbf{E}$ is the electric field, $\mathbf{v}$ is the velocity of the particle, and $\mathbf{B}$ is the magnetic induction.
##### Example (Charged particle moving in a constant magnetic field)
Ignoring gravity, determine the trajectory of a particle of charge $q$ moving in constant magnetic field $\textbf{B}$.
###### Solution
Without loss, we take the initial location of the particle at time $t=0$ to be the origin. We also denote its initial velocity by $\textbf V$. From Newton's Second Law the equations of motion are: $$m\ddot{\textbf{r}}=q\dot{\textbf{r}}\wedge\textbf{B},\quad\textbf{r}(0)=\textbf{0},\quad\dot{\textbf{r}}(0)=\textbf{v}.$$
Integrating and using the initial conditions, $$m\dot{\textbf{r}}=q\textbf{r}\wedge\textbf{B}+m\textbf{V}$$
Without a loss of generosity we suppose $\textbf{B}=(0,0,B),\quad\textbf{V}=(V_1,0,V_3),\quad b>0$ so that
$$\begin{aligned} m\dot{x}&=qBy+mV_1 \\ m\dot{y}&=-qBx \\ m\dot{z}&=mV_3\end{aligned}$$
Hence $$\begin{aligned} z&=V_3t, \\ m\ddot{x}&=qB\dot{y}=-\frac{q^2B^2}{m}x.\end{aligned}$$
So $\ddot{x}=\frac{q^2B^2}{m^2}x$.
Let $\omega=qB/m$, then $\ddot{x}=-\omega^2x,$
Noting $x(0)=0$ and $\dot{x}(0)=0$, thus $x={V_1\over\omega}\sin(\omega t)$. Therefore,
$$\begin{aligned} y(t)&=\frac{m}{qB}\dot{x}-\frac{mV_1}{qB}=\frac{mV_1}{qB}(\cos(\omega t)-1) \\&= \frac{V_1}{\omega}(\cos(\omega t)-1).\end{aligned}$$

$\therefore\textbf{r}(t)=\left(\frac{V_{1}}{\omega} \sin (\omega t), \frac{V_{1}}{\omega}(\cos (\omega t)-1),V_{3} t\right),\quad  \omega=qB/m.$

---
## Chapter 3 Motion in One Dimension
### 3.1 Energy
- [[Kinetic Energy]]
- [[Potential Energy]]
#### 3.1.1 [[Conservation of Energy]]
#### 3.1.2 Work
[[Work done]]

---
### 3.2 Motion in a General Potential
Rearranging the equation for conservation of energy, (3.2), gives us $$\dot{x}^{2}=\frac{2}{m}(E-V(x)).$$
This is a first order ODE, which we can in principle solve as $$t=\pm \int \frac{\mathrm{d} x}{\left(\frac{2}{m}(E-V(x))\right)^{1/ 2}}.$$
for $t$ as a function of $x$. We then invert to find $x(t)$.

*This is often **of limited utility** in practice; apart from in very simple problems, we often cannot determine the integral nor invert.*

#### Example (Quadratic potential - the simple harmonic oscillator)
With $V(x)=$ $kx^{2}/2,$ which gives Hooke's law after a constant translation of $x,$ we have Newton's second law reduces to
$$
\ddot{x}+\omega^{2} x=0
$$
with $\omega^{2}=k / m$. This is the equation of motion for a simple harmonic oscillator.
Use$$t=\pm \int \frac{\mathrm{d} x}{\omega \sqrt{\frac{2 E}{m \omega^{2}}-x^{2}}}, $$
We may solve this by making the substitution $$x=\sqrt{\frac{2 E}{m \omega^{2}}} \cos \theta,$$ which gives $$t=\mp \int \frac{1}{\omega} \mathrm{d} \theta \quad \Longrightarrow \quad t-t_{0}=\mp \frac{1}{\omega} \cos ^{-1}\left(\frac{x}{\sqrt{2 E / m \omega^{2}}}\right).$$
Here $t_{0}$ is an integration constant. The solution is hence simple harmonic motion $$x(t)=\sqrt{\frac{2 E}{m \omega^{2}}} \cos \left[\omega\left(t-t_{0}\right)\right].$$
Notice that in this case it is much easier to solve the second order equation of motion, than to integrate the first order conservation of energy equation.


---
### 3.3 Motion near Equilibrium
An [[Equilibrium]] configuration is a solution to Newton's second law (3.1) with $x=x_{e}=$ constant. Since this implies $\ddot{x}=0$ for all time $t,$ Newton's second law implies that $F\left(x_{e}\right)=0,$ and there is no net force acting on the particle.

When there is a potential with $F=-\mathrm{d} V / \mathrm{d} x=-V^{\prime}$ then the equilibrium point $x_{e}$ is a critical point of the potential $V(x)$, with $V^{\prime}\left(x_{e}\right)=0$.

#### Motion near an equilibrium point $x=x_e$
Expanding Newton's second law around $x=x_e$, assuming $F(x)$ is suitably smooth and using $F\left(x_{e}\right)=0$ yields
$$
\begin{aligned}
m \ddot{x}&= F(x)=F\left(x_{e}\right)+\left(x-x_{e}\right) F^{\prime}\left(x_{e}\right)+O\left(\left(x-x_{e}\right)^{2}\right) \qquad \textbf{(3.14)}
\\
&=\left(x-x_{e}\right) F^{\prime}\left(x_{e}\right)+O\left(\left(x-x_{e}\right)^{2}\right) \\
\end{aligned}
$$
where $O\left(\left(x-x_{e}\right)^{2}\right)$ means higher order terms, which are not larger than $$\text { Constant }\times\left(x-x_{e}\right)^{2}$$
for $x$ sufficiently close to $x_{e}$.

#### Linearized Equation of Motion
We change variables to $\xi \equiv x-x_{e},$ so that the equilibrium point is now at $\xi=0$.
Assuming we are sufficiently close to the latter, so that the higher order terms in [(3.14)](Equilibrium.md) are small, we have the approximate linear differential equation for $\xi$ : $$m \ddot{\xi}=F^{\prime}\left(x_{e}\right) \xi \qquad\text{(3.16)}$$  
##### Definition
Equation (3.16) is called the [[Linearized Equation of Motion]] and its solutions are labelled as Linearized Solutions.
For any point of equilibrium in one spatial dimension there are three qualitatively different cases for the behaviour of the linearized solutions, depending on the sign of the constant $$K \equiv-F^{\prime}\left(x_{e}\right).\qquad\text{(3.17)}$$

- $K>0$
With $\omega=\sqrt{K / m}>0$ we have the simple harmonic oscillator equation $$\ddot{\xi}+\omega^{2} \xi=0.$$
The general solution is $\xi(t)=A \cos (\omega t+\phi)$ and $\xi=0$ is a point of `stable equilibrium`.
For amplitude $A$ small enough so that it is consistent to ignore the higher order terms in the expansion of the force [(3.14)](Equilibrium.md), the system executes small oscillations around the equilibrium point.
The frequency of these oscillations is $\omega$.
- $K<0$
With $p=\sqrt{-K / m}>0$. the linearized equation of motion *(3.16)* now reads
$$\ddot{\xi}-p^{2} \xi=0$$
with general solution $$\xi(t)=A \mathrm{e}^{p t}+B \mathrm{e}^{-p t}.$$
where $A$ and $B$ are integration constants.
A generic small displacement and small velocity for the system at time $t=0$ will have both $A$ and $B$ non-zero, and the solution grows exponentially with $t,$ for both $t>0$ and $t<0$
Such equilibria are hence termed `unstable`.
The higher order terms in the Taylor expansion, which we ignored, quickly become relevant.
- $K=0$
Finally, if $K=0$ the first two terms in the Taylor expansion in [(3.14)](Equilibrium.md) are zero, and we need to expand to higher order to determine what happens.
---
### 3.4 [[Coupled Oscillations]]
#### Definition: Equilibrium Point
An [[equilibrium point]] is a solution to [(3.28)](Coupled%20Oscillations.md) with $x=x_e,\,\,y=y_e$ both constant such that $F(x_e,y_e)=0=G(x_e,y_e)$.
$$
\lambda^{2}=\frac{1}{2}\left(a+d \pm \sqrt{(a+d)^{2}-4(a d-b c)}\right). \quad\color{yellow}\textbf{(3.37)}
$$
#### Definition: Normal Frequency
If all solutions for $\lambda=\pm\lambda_{\pm}$ given by [(3.37)](Equilibrium%20Point) are **pure imaginary**, we write $\lambda=\pm i\omega_{\pm}$ where $\omega_\pm>0$ are called the [normal frequencies](Normal%20Frequency) of the system.

## Chapter 4 Motion in Higher Dimensions
In this section we introduce velocity and acceleration in plane polar coordinates and angular momentum, together with conservative forces, central forces.
The dynamics for each of these two types of force leads to a conserved quantity, i.e. a quantity that is constant during the motion.

---
### 4.1 [[Planar Motion in Polar Coordinates]]
![Figure 8| 600](Dynamics_31.png)
$$x=r\cos\theta,\quad y=r\sin\theta,$$
$$r=\sqrt{x^2+y^2},\quad\theta=\tan^{-1}y/x,\quad r\geq0,\quad \theta\in[0,2\pi)$$
#### Definition
- $\mathbf{e}_r$ is the unit vector in direction of increasing $r$.
- $\mathbf{e}_\theta$ is the unit vector in direction of increasing $\theta$.

Hence 
$$
\mathbf{e}_{r}=\cos \theta \mathbf{i}+\sin \theta \mathbf{j}, \quad \mathbf{e}_{\theta}=-\sin \theta \mathbf{i}+\cos \theta \mathbf{j}, \quad \mathbf{e}_{r} \cdot \mathbf{e}_{\theta}=0. 
\quad\color{yellow}\text{(4.2)}
$$
Except at the origin, $\left\{\mathbf{e}_{r}, \mathbf{e}_{\theta}\right\}$ form an orthonormal basis - note that $\mathbf{e}_{r}, \mathbf{e}_{\theta}$ are functions of $\theta$.
The position of a particle is given by
$$
\mathbf{r}=(x, y)=r \mathbf{e}_{r}
$$
The velocity of the particle $r(t)$ can be written as 
$$
\dot{\mathbf{r}}=\dot{r} \mathbf{e}_{r}+r \dot{\theta} \mathbf{e}_{\theta}.
\quad\color{yellow}\text{(4.5)}
$$
The acceleration of the particle $r(t)$ can be written as
$$
\ddot{\mathbf{r}} 
=\left(\ddot{r}-r \dot{\theta}^{2}\right) \mathbf{e}_{r}+\frac{1}{r} \frac{\mathrm{d}}{\mathrm{d} t}\left(r^{2} \dot{\theta}\right) \mathbf{e}_{\theta}.
\quad\color{yellow}\text{(4.6)}
$$

---
### 4.2 [[Conservative Force]]
#### Definition: Conservative
A force $\mathbf{F}=\mathbf{F}(\mathbf{r})$ is said to be [conservative](Conservative%20Force) if there exists a potential energy function $V=V(\mathbf{r})$ such that
$$
\mathbf{F}=-\nabla V.
$$
##### Theorem
(in #MVC) Let $\mathbf{F}: S \rightarrow \mathbb{R}^{3}$ be a vector field, where the domain $S \subset \mathbb{R}^{3}$ is open and [[Path-Connected]]. Then the following three statements are equivalent:
1. $\mathbf{F}$ is conservative, $i$.e. there exists a [potential](Potential%20Energy) $V: S \rightarrow \mathbb{R}$ such that $\mathbf{F}=-\nabla V$.
2. Given any two points $\mathbf{r}_{1}, \mathbf{r}_{2}$ in $S,$ and any curve $C$ in $S$ starting at $\mathbf{r}_{1}$ and ending at $\mathbf{r}_{2},$ then the integral $\int_{C} \mathbf{F} \cdot \mathrm{d} \mathbf{r}$ is independent of the choice of $C$.
3. For any simple **closed** curve $C$ in $S$ we have $\int_{C} \mathbf{F} \cdot \mathrm{d} \mathbf{r}=0.$
It is also shown in #MVC that conservative forces satisfy $\nabla \wedge \mathbf{F}=\mathbf{0}$.

---
### 4.3 Central Forces and Angular Momentum
#### Definition: Central Force
A force that is always directed along the line joining a particle to a fixed position in an inertial frame is called a [[central force]].
#### Definition: Angular Momentum
The [[angular momentum]] $\mathbf{L}=\mathbf{L}_{P}$ of a particle about a point $P$ in an inertial frame is the moment of linear momentum $\mathbf{p}=m \dot{\mathbf{r}}$ about $P$. That is,
$$
\mathbf{L}_{P} \equiv(\mathbf{r}-\mathbf{x}) \wedge \mathbf{p}=(\mathbf{r}-\mathbf{x}) \wedge m \dot{\mathbf{r}}
$$
Here $\mathbf{x}$ is the position vector of the point $P,$ while $\mathbf{r}$ is the position of the particle (both measured from the origin $O)$.

## Chapter 5 Constrained Systems
### 5.1 Constrained Forces
#### Assumption:  The constraint force $\mathbf{N}$ is always perpendicular to the constraint space.
By definition #Q the velocity of the particle $\dot{\mathbf{r}}$ is always tangent to the constraint space, we have $\mathbf{N} \cdot \dot{\mathbf{r}}=0.$
The work done by the force $\mathbf{N}$ when the particle moves along a curve $C$ in the constraint space is defined as definition ([Eqn.(4.13))](Conservative%20Force)).
$$
W=\int_{C} \mathbf{N} \cdot \mathrm{d} \mathbf{r}=\int \mathbf{N} \cdot \dot{\mathbf{r}} \mathrm{d} t=0
$$
Thus such constraint forces do no work during the constrained motion of the particle.
> It is assumed there is **no component of the constraint force tangent to the constraint space**. Thus the assumption also requires the **absence of friction** with the surface associated with the constraint force.
#### [[Conservation of Energy Theorem ]] (Constrained Motion)
Suppose that the force $\mathbf{F}_{0}=-\nabla V$ is conservative, with potential $V=V(\mathbf{r}).$ Then the total energy $E=$ $T+V$ for the constrained motion of a point particle is conserved.

---
### 5.2 The [[Simple Pendulum]]
[[Simple Pendulum]]

---
### 5.3 Motion on a surface of revolution under gravity
[[Motion on a surface of revolution under gravity]]

## Chapter 6 The Kepler Problem
### 6.1 Inverse Square Law Forces and Potentials
#### Definition: Inverse Square Law Force
The [[inverse square law force]] is a [conservative](Conservative%20Force) [[central force]] with
$$
V(r)=-\frac{\kappa}{r}, \quad \mathbf{F}=-\frac{\kappa}{r^{2}} \mathbf{e}_{r}
\quad\color{yellow}\text{(6.4)}
$$
where $\kappa$ is constant, and we have used (6.1) and (6.3) to relate the potential to the force.
#### [[Newton's Law of Universal Gravitation]]
The gravitational force on a point particle at position $\mathbf{r}_{1}$ due to a point particle at position $\mathbf{r}_{2}$ is given by
$$
\mathbf{F}=\mathbf{F}_{12}=-G_{N} \frac{m_{1} m_{2}}{\left|\mathbf{r}_{1}-\mathbf{r}_{2}\right|^{2}} \frac{\left(\mathbf{r}_{1}-\mathbf{r}_{2}\right)}{\left|\mathbf{r}_{1}-\mathbf{r}_{2}\right|}=-G_{N} \frac{m_{1} m_{2}}{\left|\mathbf{r}_{1}-\mathbf{r}_{2}\right|^{2}} \hat{\mathbf{r}}_{12}
\quad\color{yellow}\text{(6.5)}
$$
Here $m_{1}, m_{2}$ are the (gravitational) masses of the two particles, we have defined the unit vector $\hat{\mathbf{r}}_{12}=\left(\mathbf{r}_{1}-\mathbf{r}_{2}\right)/\left|\mathbf{r}_{1}-\mathbf{r}_{2}\right|.$
$G_{N}\simeq6.67\times10^{-11} \mathrm{~N} \mathrm{~m}^{2} \mathrm{~kg}^{-2}$ is Newton's gravitational constant.

---
### 6.2 The Kepler Problem and Planetary Orbits
[[The Kepler Problem]]


---
### 6.3 Kepler's Laws
[[Kepler's Laws]]
>**K1**: The path of each planet is an ellipse with the Sun at the focus.
>**K2**: A straight line joining the Sun and a planet sweeps out equal areas in equal times.
>**K3**: The square of each planet’s period is proportional to the cube of the semi-major axis of its elliptical orbit.

## Chapter 7 System of Particles
### 7.1 Centre of Mass Motion
[[Centre of Mass Motion]]
#### Closed System
A [[closed system]] is one in which all forces are internal, acting between the constituents of the system. That is, $\mathbf{F}_{I}^{\mathrm{ext}}=\mathbf{0}, I=1, \ldots, N$.
#### Definition: Total Angular Momentum
The [[total angular momentum]] $\mathbf{L}=\mathbf{L}_{P}$ of the system about a point $P$ is
$$
\mathbf{L}_{P}=\sum_{I=1}^{N}\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge \mathbf{p}_{I}
\quad\color{yellow}\text{(7.7)}
$$
where $P$ has position vector $\mathbf{x}$ from the origin $\hat{O}$. That is, $\mathbf{L}$ is the vector sum of the angular momenta $\mathbf{L}_{I}=\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge \mathbf{p}_{I}$ for each particle $I$ about $P$.

As noted previously, Eqn. $(4.18), p_{I}=m_{I} \dot{\mathbf{r}}_{I}$ is the velocity of the particle in the inertial frame, not the velocity relative to $P$, which in general may be moving, $\mathbf{x}=\mathbf{x}(t)$

---
### 7.2 The Two-body Problem
The [[Two-body Problem]] is a [[closed system]] of two point particles. 

## Chapter 8 Rotating Frames and Rigid Bodies
### 8.1 Rotating Frames
[[Rotating Frames]]