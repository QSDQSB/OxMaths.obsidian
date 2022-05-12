## Kepler's Laws
#Dynamics 
#TBV 
### K1
>The path of each planet is an ellipse with the Sun at the focus.
#### Proof of K1
Putting the Sun at the origin, and neglecting all but of one of the planets to consider its trajectory, we thus have shown [[Kepler's Laws#K1]] from Newton’s laws already, from the solution to [[the Kepler problem]].
### K2
>A straight line joining the Sun and a planet sweeps out equal areas in equal times.

#### Proof of K2
Kepler's second law is a simple consequence of conservation of [[angular momentum]].
Recall from conservation of angular momentum we have $r^{2} \dot{\theta}=h=\mathrm{constant} .$
A straight line from the Sun to a planet is simply the position vector $\mathbf{r}(t) .$ In a small time interval $\delta t$, as shown in Figure 17, the planet sweeps out a region $O P Q O$ that is approximately triangular.

In the first instance, with the points $O, P, P^{\prime}, Q, Q^{\prime}$ as given in Figure 17, we consider $\delta r=|O Q|-|O P| \geq 0,$ with $r=|O P|$
Noting the area of the circular sector, of radius $s$, subtending an angle $\psi$ between its radii, is given by $\psi s^{2} / 2,$ we have
$$
\frac{1}{2} r^{2} \delta \theta \leq \delta A \leq \frac{1}{2}(r+\delta r)^{2} \delta \theta.
$$
![Figure 17 | 400](Dynamics_68.png)
>**(Figure 17)** A particle moves from a point $P$ at time $t$ to a point $Q$ at time $t+\delta t$, with the angle subtended at the origin changing by a small amount $\delta \theta$, sweeping out a region $O P Q O,$ of area $\delta A$ as shown in green. Let $r$ denote the distance $|O P|$, with $r+\delta r$ the distance $|O Q|, P^{\prime}$ the point on $O Q$ such that $\left|O P^{\prime}\right|=r$ and $Q^{\prime}$ the point on OP, such that $\left|O Q^{\prime}\right|=r+\delta r$

Dividing by $\delta t$ and taking $\delta t \rightarrow 0$, so that $\delta r \rightarrow 0, \delta \theta \rightarrow 0$, we have
$$
\dot{A}=\frac{1}{2} r^{2} \dot{\theta}=\frac{1}{2} h=\text { constant },
$$
which also holds by an analogous argument when $\delta r<0$.
#### Aside
Being a consequence only of conservation of angular momentum, Kepler's second law holds for any [[central force]] (even non-conservative ones).

### K3
>The square of each planet’s period is proportional to the cube of the semi-major axis of its elliptical orbit.
#### Proof of K3
Recall that the area of an ellipse with semi-major axis $a$ and semi-minor axis $b$ is
$$
A=\pi a b
$$
We know from [[#K2]] that this area is swept out at a **constant** rate $\dot{A}=\frac{1}{2} h .$ Integrating this over one period we obtain
$$
A=\int \mathrm{d} A=\frac{1}{2} h \int \mathrm{d} t=\frac{1}{2} h T.
$$
Thus the square of the period $T$ is
$$
T^{2}=\frac{4 A^{2}}{h^{2}}=\frac{4 \pi^{2} a^{2} b^{2}}{h^{2}}=\frac{4 \pi^{2}}{G_{N} M_{S}} \cdot \frac{b^{2}}{a r_{0}} \cdot a^{3}.
$$
where in the last step we have substituted $h^{2}=\kappa r_{0} / m=G_{N} M_{S} r_{0}$ using [(6.20)](The%20Kepler%20Problem#Proof%20of%20Conic%20Sections) , where $\kappa=G_{N} m M_{S}, m$ is the mass of the planet and $M_{S}$ is the mass of the Sun.
Recall from Eqn (6.24) for the equation of a Kepler problem ellipse, we have
$$
a=\frac{r_{0}}{\left(1-e^{2}\right)}, \quad b=\frac{r_{0}}{\left(1-e^{2}\right)^{1 / 2}},
\quad\color{yellow}\text{(6.51)}
$$
and thus
$$
\frac{b^{2}}{a r_{0}}=1.
$$
Hence
$$
T^{2}=\frac{4 \pi^{2}}{G_{N} M_{S}} a^{3},
\quad\color{yellow}\text{(6.52)}
$$
which is precisely [Kepler's third law](#K3).
