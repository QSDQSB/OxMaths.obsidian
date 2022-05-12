## Two-body Problem
#Dynamics 
### Definition
The two-body problem is a [[closed system]] of two point particles. Newton's second and third laws give
$$
m_{1} \ddot{\mathbf{r}}_{1}=\mathbf{F}_{12}, \quad m_{2} \ddot{\mathbf{r}}_{2}=\mathbf{F}_{21}=-\mathbf{F}_{12}
\quad\color{yellow}\text{(7.13)}
$$
Adding these two equations implies that the [[centre of mass]]
$$
\mathbf{R}_{G}=\frac{m_{1} \mathbf{r}_{1}+m_{2} \mathbf{r}_{2}}{m_{1}+m_{2}}
\quad\color{yellow}\text{(7.14)}
$$
moves with **constant velocity**, as also deduced in the last subsection.
On the other hand, if we define $\mathbf{r} \equiv \mathbf{r}_{1}-\mathbf{r}_{2}$ so that
$$
\mathbf{r}_{1}=\mathbf{R}_{G}+\frac{m_{2}}{m_{1}+m_{2}} \mathbf{r}, \quad \mathbf{r}_{2}=\mathbf{R}_{G}-\frac{m_{1}}{m_{1}+m_{2}} \mathbf{r},
\quad\color{yellow}\text{(7.15)}
$$
then from [$(7.13)$](Two-body%20Problem.md#Definition) we deduce
$$
\ddot{\mathbf{r}}=\ddot{\mathbf{r}}_{1}-\ddot{\mathbf{r}}_{2}=\left(\frac{1}{m_{1}}+\frac{1}{m_{2}}\right) \mathbf{F}_{12}=\frac{m_{1}+m_{2}}{m_{1} m_{2}} \mathbf{F}_{12}.
\quad\color{yellow}\text{(7.16)}
$$
### Definition: Reduced Mass
The reduced mass for the two-body problem is $\mu=\frac{m_{1} m_{2}}{m_{1}+m_{2}}$.
In terms of this the equation of motion $(7.16)$ reads
$$
\mu \ddot{\mathbf{r}}=\mathbf{F}_{12}.
\quad\color{yellow}\text{(7.17)}
$$
#### Example
For the [[inverse square law force]], with $r=|\mathbf{r}|$, we have
$$
\mathbf{F}_{12}=-\frac{\kappa}{\left|\mathbf{r}_{1}-\mathbf{r}_{2}\right|^{3}}\left(\mathbf{r}_{1}-\mathbf{r}_{2}\right)=-\frac{\kappa}{r^{2}} \frac{\mathbf{r}}{r}.
$$
> Therefore we have reduced the two-body problem to a problem for a single particle with position vector $\mathbf{r}(t)$ satisfying [(7.17)](#Definition%20Reduced%20Mass).  The force on the right hand side is then *effectively* an external force.

Having solved this, the solution to the original two-body problem is given by  [(7.15)](#Definition).

---
We may thus view what we did in solving [[the Kepler problem]] in Section $6.2$ in two different ways:

> If we take the mass $m=\mu$ in $(6.8)$, then in [Section $6.2$](The%20Kepler%20Problem#Exercise) we were really solving (7.17) for the two-body problem. This describes the exact internal relative motion of the two bodies.

>
Suppose instead we focus on the case mass $m_{1} \ll m_{2}$, as we implicitly did in [Section $6.2$](The%20Kepler%20Problem#Exercise) on Kepler's problem and planetary orbits.
Without loss, $\mathbf{R}_{G}=\mathbf{0}$ since the centre of mass reference frame is also an inertial reference frame as there is no external force. Hence
>$$\begin{aligned}
\mu \ddot{\mathbf{r}}=-\frac{\kappa}{r^{2}} \frac{\mathbf{r}}{r}, & \mu=m_{1}\left(\frac{1}{1+\frac{m_{1}}{m_{2}}}\right) \simeq m_{1}, \\
\mathbf{r}_{1}=\left(\frac{1}{1+\frac{m_{1}}{m_{2}}}\right) \mathbf{r} \simeq \mathbf{r}, & \mathbf{r}_{2}=-\left(\frac{\frac{m_{1}}{m_{2}}}{1+\frac{m_{1}}{m_{2}}}\right) \mathbf{r} \simeq \mathbf{0}.
\end{aligned}$$
Once $m_{1} / m_{2}$ is sufficiently small, we thus have that the solution in [Section $6.2$](The%20Kepler%20Problem#Exercise), with $m=m_{1}$ the smaller mass and the larger mass at the origin, accurately approximates the two body solution which accommodates Newton's third law and the motion of the larger body.

*What is remarkable about the two-body problem is that the exact solution and approximate solution we have described are mathematically **equivalent**, differing only in which mass to use in Newton's second law.*