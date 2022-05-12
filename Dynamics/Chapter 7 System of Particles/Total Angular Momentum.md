## Total Angular Momentum
#Dynamics 
### Definition
The total [[angular momentum]] $\mathbf{L}=\mathbf{L}_{P}$ of the system about a point $P$ is
$$
\mathbf{L}_{P}=\sum_{I=1}^{N}\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge \mathbf{p}_{I}
\quad\color{yellow}\text{(7.7)}
$$
where $P$ has position vector $\mathbf{x}$ from the origin $\hat{O}$. That is, $\mathbf{L}$ is the vector sum of the angular momenta $\mathbf{L}_{I}=\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge \mathbf{p}_{I}$ for each particle $I$ about $P$.

As noted previously, Eqn. $(4.18), p_{I}=m_{I} \dot{\mathbf{r}}_{I}$ is the velocity of the particle in the inertial frame, not the velocity relative to $P$, which in general may be moving, $\mathbf{x}=\mathbf{x}(t)$
Using the definition [(7.7)](Total%20Angular%20Momentum.md#Definition) we begin by computing
$$
\begin{aligned}
\dot{\mathbf{L}}_{P} &=\sum_{I=1}^{N}\left[\left(\dot{\mathbf{r}}_{I}-\dot{\mathbf{x}}\right) \wedge \mathbf{p}_{I}+\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge \dot{\mathbf{p}}_{I}\right] \\
&=-\dot{\mathbf{x}} \wedge \mathbf{P}+\sum_{I=1}^{N}\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge \dot{\mathbf{p}}_{I} \\
&=-\dot{\mathbf{x}} \wedge \mathbf{P}+\sum_{I=1}^{N}\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge\left(\mathbf{F}_{I}^{\mathrm{ext}}+\sum_{J \neq I} \mathbf{F}_{I J}\right).
\quad\color{yellow}\text{(7.8)}
\end{aligned}
$$
Here in the second equality we have used $\dot{\mathbf{r}}_{I} \wedge \mathbf{p}_{I}=\dot{\mathbf{r}}_{I} \wedge m_{I} \dot{\mathbf{r}}_{I}=\mathbf{0}$. The third equality uses Newton’s second law [(7.1)](Centre%20of%20Mass%20Motion#Motion%20of%20Many%20Particles).



In $\sum_{I=1}^{N}\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge \sum_{J \neq I} \mathbf{F}_{I J}$ we again have $\frac{1}{2} N(N-1)$ pairs of terms, which look like
$$
\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge \mathbf{F}_{I J}+\left(\mathbf{r}_{J}-\mathbf{x}\right) \wedge \mathbf{F}_{J I}=\left(\mathbf{r}_{I}-\mathbf{r}_{J}\right) \wedge \mathbf{F}_{I J}
\quad\color{yellow}\text{(7.9)}
$$
and we have used Newton's third law. To get any further we need the strong form of [[Newton's third law]]:
### N3 (strong form)
>If particle 1 exerts a force $\mathbf{F}=\mathbf{F}_{21}$ on particle 2 , then particle 2 also exerts a force $\mathbf{F}_{12}=-\mathbf{F}$ on particle $1 .$ In addition, this force acts along the vector connecting particle 1 to particle $2, \mathbf{F}_{12} \propto$ $\left(\mathbf{r}_{1}-\mathbf{r}_{2}\right)$.
![Figure 18 | 300](Dynamics_73.png) <center style="font-size:14px;color:#03a4f2;text-decoration:underline">Figure 18: The strong form of Newton's third law.</center> 

This clearly holds for the [[inverse square law force]]s of Newton (6.5) and Coulomb (6.6), but there are examples that don't satisfy this.
>*Notably the magnetic component of the [[Lorentz force]].*

Returning to (7.9), we see that if the strong form of Newton's third law holds this is zero, and hence $(7.8)$ gives
$$
\dot{\mathbf{L}}_{P}=-\dot{\mathbf{x}} \wedge \mathbf{P}+\sum_{I=1}^{N}\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge \mathbf{F}_{I}^{\mathrm{ext}}=-\dot{\mathbf{x}} \wedge \mathbf{P}+\boldsymbol{\tau}_{P}^{\mathrm{ext}}
\quad\color{yellow}\text{(7.10)}
$$
where $\tau_{P}^{\text {ext }}$ is by definition the total external [[torque]] about $P$, c.f. $(4.22)$.

>There are two special cases where the first term on the right hand side of $(7.10)$ is **zero**:
>1) taking $P=\hat{O}$, the inertial frame origin, giving $\mathbf{x}=\mathbf{0}$.
>2) taking instead [$P=G$](Centre%20of%20Mass) we have $\dot{\mathbf{x}} \wedge \mathbf{P}=\dot{\mathbf{R}}_{G} \wedge \mathbf{P}=\dot{\mathbf{R}}_{G} \wedge M \dot{\mathbf{R}}_{G}=\mathbf{0}$.

We have thus proven:
### Theorem
Provided the strong form of [[Newton's third law]] holds, the rate of change of [[total angular momentum]] about either the [[inertial reference frame]] origin, $\hat{O}$, or the [[centre of mass]], $G$, equals the total external [[torque]] about the same respective point. That is,
$$
\dot{\mathbf{L}}_{\hat{O}}=\tau_{\hat{O}}^{\mathrm{ext}}, \quad \dot{\mathbf{L}}_{G}=\tau_{G}^{\mathrm{ext}}.
\quad\color{yellow}\text{(7.11)}
$$
#### Corollary
>For a [[closed system]] satisfying the strong form of [[Newton's third law]], the [[total angular momentum]] about the origin of an [[inertial reference frame]], or about the [[centre of mass]], is **conserved**.

The main application of [(7.11)](#Theorem) will be to [[rigid body motion]].

---
*In particular the following result will be useful:*
#### Proposition
Consider the system of particles in a uniform gravitational field, with acceleration due to gravity $-g \mathbf{k}$. Assuming this is the only external force acting, the total external [[torque]] about a point $P$ with position vector $\mathbf{x}$ is
$$
\tau_{P}^{\mathrm{ext}}=-\left(\mathbf{R}_{G}-\mathbf{x}\right) \wedge M g \mathbf{k}
\quad\color{yellow}\text{(7.12)}
$$
This is the same as the torque for a particle of mass $M$ at the centre of mass $\mathbf{R}_{G}$ (compare to [$(4.22)$](Torque)). 
In particular, the torque about $G$ (for which $\mathbf{x}=\mathbf{R}_{G}$ ) is zero.
##### Proof
We have
$$
\tau_{P}^{\mathrm{ext}} \equiv \sum_{I=1}^{N}\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge \mathbf{F}_{I}^{\mathrm{ext}}=\sum_{I=1}^{N}\left(\mathbf{r}_{I}-\mathbf{x}\right) \wedge\left(-m_{I} g \mathbf{k}\right)=-\left(\mathbf{R}_{G}-\mathbf{x}\right) \wedge M g \mathbf{k},
$$
where we have used the definitions $M=\sum_{I=1}^{N} m_{I}, M \mathbf{R}_{G}=\sum_{I=1}^{N} m_{I} \mathbf{r}_{I}$ in the final equality.