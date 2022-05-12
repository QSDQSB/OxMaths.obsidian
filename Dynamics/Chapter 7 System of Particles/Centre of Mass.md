## Centre of Mass
#Dynamics 
### Definition
The [[Centre of Mass]] of the system of particles is the point $G,$ with position vector
$$
\mathbf{R}_{G} \equiv \frac{1}{M} \sum_{I=1}^{N} m_{I} \mathbf{r}_{I},
\quad\color{yellow}\text{(7.2)}
$$
where $M=\sum_{I=1}^{N} m_{I}$ is the total mass. Similarly the total momentum of the system is
$$
\mathbf{P} \equiv \sum_{I=1}^{N} \mathbf{p}_{I}=M \dot{\mathbf{R}}_{G}.
\quad\color{yellow}\text{(7.3)}
$$
#MVC 
### Definition:MVC
The [[centre of mass]] of a body occupying a region $R$ and with density $\rho(\mathbf{r})$ at the point with position vector $\mathbf{r}$ is
$$
\overline{\mathbf{r}}=(\bar{x}, \bar{y}, \bar{z})=\frac{1}{M} \iiint_{R} \mathbf{r} \rho(\mathbf{r}) \mathrm{d} V.
$$
### Example 27
Find the centre of mass of a uniform **octant**.
$$
\left\{(x, y, z): x^{2}+y^{2}+z^{2}<a^{2}, x, y, z>0\right\} .
$$
**Solution.** By symmetry, the [[centre of mass]] lies at a point $(\bar{x}, \bar{x}, \bar{x})$. Let $\rho$ denote the density of the hemisphere. Then its mass is $\frac{1}{6} \pi a^{3} \rho$ and
$$
\begin{aligned}
\bar{x} &=\frac{6}{\pi a^{3} \rho} \int_{r=0}^{a} \int_{\phi=0}^{\pi / 2} \int_{\theta=0}^{\theta=\pi / 2}(r \sin \theta \cos \phi)\left(\rho r^{2} \sin \theta\right) \mathrm{d} \theta \mathrm{d} \phi \mathrm{d} r \\
&=\frac{6}{\pi a^{3}}\left(\int_{r=0}^{a} r^{3} \mathrm{~d} r\right)\left(\int_{\theta=0}^{\theta=\pi / 2} \sin ^{2} \theta \mathrm{d} \theta\right)\left(\int_{\phi=0}^{\phi=\pi / 2} \cos \phi \mathrm{d} \phi\right) \\
&=\frac{6}{\pi a^{3}} \times\left[\frac{r^{4}}{4}\right]_{0}^{a} \times\left[\frac{\theta}{2}+\frac{\sin 2 \theta}{4}\right]_{0}^{\pi / 2} \times[\sin \phi]_{0}^{\pi / 2} \\
&=\frac{6}{\pi a^{3}} \times \frac{a^{4}}{4} \times \frac{\pi}{4} \times 1 \\
&=\frac{3 a}{8} .
\end{aligned}
$$