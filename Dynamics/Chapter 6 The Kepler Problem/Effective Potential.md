## Effective Potential
#Dynamics 
### Definition
#TBV 
The **effective potential** (also known as **effective [[potential energy]]**) combines multiple, perhaps opposing, effects into a single potential. In its basic form, it is the sum of the 'opposing' [centrifugal](https://en.wikipedia.org/wiki/Centrifugal_force "Centrifugal force") potential energy with the potential energy of a dynamical system. It may be used to determine the orbits of planets (both Newtonian and *relativistic*) and to perform semi-classical atomic calculations, and often allows problems to be reduced to fewer dimensions.
$$V_{\mathrm{eff}}(r)=V(r)+\frac{m h^{2}}{2 r^{2}}.
\quad\color{yellow}\text{(6.29)}
$$
We have [(6.12)](The%20Kepler%20Problem) may be written in the form
$$
m \ddot{r}=-\frac{\mathrm{d} V_{\mathrm{eff}}}{\mathrm{d} r}.
\quad\color{yellow}\text{(6.30)}
$$

The equation of motion (6.30) now has the structure of motion in **one dimension**, with an effective potential energy $V_{\text {eff }}.$

Furthermore, as may be deduced from the original equation of motion [(6.12)](The%20Kepler%20Problem) via the techniques of Section (3.1), the energy
$$
\begin{aligned}
E &=\frac{1}{2} m|\dot{\mathbf{r}}|^{2}+V(r)=\frac{1}{2} m\left(\dot{r}^{2}+r^{2} \dot{\theta}^{2}\right)+V(r) \quad\color{yellow}\text{(6.31)}\\
&=\frac{1}{2} m\left(\dot{r}^{2}+\frac{h^{2}}{r^{2}}\right)+V(r)=\frac{1}{2} m \dot{r}^{2}+V_{\mathrm{eff}}(r)
\end{aligned}
$$
is conserved, where $h=r^{2} \dot{\theta}$ has been used.
![Figure 14 | 400](Dynamics_61.png)
>Figure 14: The effective potential $V_{\text {eff }}(r)$ for the Kepler inverse square law force problem, where $V_{\text {eff }}$ has a unique local minimum at $r=r_{0}$.

For [[the Kepler problem]] we have $V(r)=-\kappa / r,$ the [[Effective Potential]] is shown in Figure 14 .
A solution with $r=r_{0}$ constant has $\ddot{r}=0,$ and thus from (6.30)$r_{0}$ is a turning point of the [[Effective Potential]].
One may easily check that
$$
\frac{\mathrm{d} V_{\mathrm{eff}}}{\mathrm{d} r}\left(r_{0}\right)=0 \quad \Longrightarrow \quad r_{0}=\frac{m h^{2}}{\kappa} .
$$
Of course the circular trajectory $r=r_{0}$ constant is consistent with the general solution (6.20) with eccentricity $e=0$.

Being a local minimum of the [[effective potential]] also means that this circular orbit is **stable** to small perturbations of $r$, as we learned in section $3.3 .$