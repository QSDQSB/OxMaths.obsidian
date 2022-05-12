## Rotating Frames
#Dynamics 
There will be two [reference frames](Reference%20Frame) throughout this section:
>A fixed reference inertial frame $\hat{\mathcal{S}}$ : this has origin $\hat{O}$ and fixed coordinate axes with corresponding right handed Cartesian basis vectors $\hat{\mathbf{e}}_{i}, i=1,2,3$.

>A general reference frame $\mathcal{S}$, with origin $O$ at position vector $\mathbf{x}$ relative to $\hat{O}$ and right handed Cartesian coordinate axes associated with the basis vectors $\mathbf{e}_{i}, i=1,2,3$. Typically in these sections $\mathbf{e}_{i}, i=1,2,3$ will be rotating relative to the axes of $\hat{\mathcal{S}}$.

Newton's laws of motion are written in the [[inertial reference frame]] $\hat{\mathcal{S}}$, also sometimes referred as the* laboratory frame*, though the laws of motion may then be subsequently be modified so as to be relative to the axes of the non-inertial reference frame $\mathcal{S}$.
Without loss we can take the origin of inertial reference frame, $\hat{O}$, to be fixed. The Cartesian axes are also **time-independent** so that that the Cartesian basis vectors $\hat{\mathbf{e}}_{i}$ are independent of time,
$$
\frac{\mathrm{d}}{\mathrm{d} t} \hat{\mathbf{e}}_{i}=\mathbf{0}, \quad i=1,2,3.
$$
For example, when [[Rigid Body]] are introduced, the frame $\mathcal{S}$ will be chosen to rotate with the body, and thus the Cartesian basis vectors $\left\{\mathbf{e}_{i}\right\}$ will rotate relative to the [[inertial reference frame]], with non-zero time derivatives.

Thus, we may write the Cartesian [[Orthonormal Basis]] vectors $\left\{\mathbf{e}_{i}\right\}$ of the frame $\mathcal{S}$ as
$$
\mathbf{e}_{i}(t)=\sum_{j=1}^{3} \mathcal{R}_{i j}(t) \hat{\mathbf{e}}_{j}, \quad i=1,2,3.
\quad\color{yellow}\text{(8.1)}
$$
![Figure 19 | 450](Dynamics_78.png)
>**(Figure 19)** The reference frame $\hat{\mathcal{S}}$ is a fixed inertial reference frame, and Newton's laws of motion are written in this reference frame. With respect to $\hat{\mathcal{S}}$, a general reference frame $\mathcal{S}$ has origin $O$ at position vector $\mathbf{x}=\mathbf{x}(t)$ as measured from $\hat{O}$, and its coordinate axes may be rotating, so that $\mathbf{e}_{i}=\mathbf{e}_{i}(t)$.

>*The fact that both bases are orthonormal and right handed means that $\mathcal{R}=\left(\mathcal{R}_{i j}\right)$ is an orthogonal rotation matrix. The main result of this subsection is:*

### Proposition
There is a (unique) vector $\boldsymbol{\omega}=\boldsymbol{\omega}(t)$ such that
$$
\dot{\mathbf{e}}_{i}=\boldsymbol{\omega} \wedge \mathbf{e}_{i}, \quad i=1,2,3.
\quad\color{yellow}\text{(8.2)}
$$
$\boldsymbol{\omega}=\boldsymbol{\omega}(t)$ is called the** angular velocity **of the frame $\mathcal{S}$ with respect to fixed inertial frame $\hat{\mathcal{S}}$.

>This result is lectured in extensive detail in Section 5, Video 11 of Prelims Geometry.

#### Proof
Take the time derivative of $(8.1)$ to find
$$
\dot{\mathbf{e}}_{i}=\sum_{j=1}^{3} \dot{\mathcal{R}}_{i j} \hat{\mathbf{e}}_{j}=\sum_{j, k=1}^{3} \dot{\mathcal{R}}_{i j} \mathcal{R}_{k j} \mathbf{e}_{k}=\sum_{k=1}^{3}\left(\dot{\mathcal{R}} \mathcal{R}^{\mathrm{T}}\right)_{i k} \mathbf{e}_{k},
\quad\color{yellow}\text{(8.3)}
$$
where in the second equality we have used the fact that $\mathcal{R}$ is orthogonal, and hence $\mathcal{R}^{-1}=\mathcal{R}^{\mathrm{T}}$.
Noting $\mathcal{R} \mathcal{R}^{T}=\mathcal{I}$, the identity, we have $\dot{\mathcal{R}} \mathcal{R}^{T}+\mathcal{R} \dot{\mathcal{R}}^{T}=\mathbf{0}$, and hence
$$
\dot{\mathcal{R}} \mathcal{R}^{T}=-\mathcal{R} \dot{\mathcal{R}}^{T}=-\left(\dot{\mathcal{R}} \mathcal{R}^{T}\right)^{T}.
$$
Hence $\left(\dot{\mathcal{R}} \mathcal{R}^{\mathrm{T}}\right)$ is an anti-symmetric matrix, so we can write
$$
\dot{\mathcal{R}} \mathcal{R}^{\mathrm{T}}=\left(\begin{array}{ccc}
0 & \omega_{3} & -\omega_{2} \\
-\omega_{3} & 0 & \omega_{1} \\
\omega_{2} & -\omega_{1} & 0
\end{array}\right).
$$
Then $(8.3)$ is equivalent to $(8.2)$ with $\omega=\left(\omega_{1}, \omega_{2}, \omega_{3}\right)$ as may be confirmed by comparing the expressions after expanding. For example both give
$$
\dot{\mathrm{e}}_{1}=\omega_{3} \mathbf{e}_{2}-\omega_{2} \mathbf{e}_{3}.
$$

---
This formula, $\dot{\mathbf{e}}_{i}=\boldsymbol{\omega} \wedge \mathbf{e}_{i}(i=1,2,3)$, is most useful for modifying the equations of motion for use in rotating non-inertial reference frames.

To proceed, we suppose for simplicity that the two origins coincide for all time, so that $O=\hat{O}$ and the reference frame $\mathcal{S}$ is thus rotating relative to the inertial frame, $\hat{\mathcal{S}}$
We have two Cartesian bases, $\left\{\mathbf{e}_{i}\right\}$ and $\left\{\hat{\mathbf{e}}_{i}\right\}$, and we may expand the same vector $\mathbf{r}$ in both bases as
$$
\mathbf{r}=\sum_{i=1}^{3} r_{i} \mathbf{e}_{i}=\sum_{i=1}^{3} \hat{r}_{i} \hat{\mathbf{e}}_{i}
$$
Here $r_{i}$ are the components of $\mathbf{r}$ in the reference frame $\mathcal{S}$, while $\hat{r}_{i}$ are the components in the reference frame $\hat{\mathcal{S}}$.
The velocity of the particle is
$$
\begin{aligned}
\dot{\mathbf{r}} &=\sum_{i=1}^{3} \frac{\mathrm{d} \hat{r}_{i}}{\mathrm{~d} t} \hat{\mathbf{e}}_{i}=\sum_{i=1}^{3}\left(\dot{r}_{i} \mathbf{e}_{i}+r_{i} \dot{\mathbf{e}}_{i}\right)=\sum_{i=1}^{3} \dot{r}_{i} \mathbf{e}_{i}+\sum_{i=1}^{3} r_{i} \boldsymbol{\omega} \wedge \mathbf{e}_{i} \\
&=\left(\frac{\mathrm{d} \mathbf{r}}{\mathrm{d} t}\right)_{\mathcal{S}}+\boldsymbol{\omega} \wedge \mathbf{r},\quad\color{yellow}\text{(8.5)}
\end{aligned}
$$
where we have introduced:

### Definition: Time Derivative
The **[[time derivative]]** of $\mathbf{r}=\mathbf{r}(t)$, as would be measured by an observer co-rotating with the frame $\mathcal{S}$, is
$$
\left(\frac{\mathrm{d} \mathbf{r}}{\mathrm{d} t}\right)_{\mathcal{S}} \equiv \dot{r}_{1} \mathbf{e}_{1}+\dot{r}_{2} \mathbf{e}_{2}+\dot{r}_{3} \mathbf{e}_{3}.
$$
That is, we differentiate the components of $\mathbf{r}$ in the orthonormal basis $\left\{\mathbf{e}_{i}\right\}$ for $\mathcal{S}$.
One should always clarify the meaning of "i' when there are two general reference frames being used. We will `always` mean the time derivative in the inertial reference frame $\hat{\mathcal{S}}$ and hence we have shown:
### Proposition: The Coriolis formula
$$
\dot{\mathbf{r}}=\sum_{i=1}^{3} \frac{\mathrm{d} \hat{r}_{i}}{\mathrm{~d} t} \hat{\mathbf{e}}_{i} \equiv\left(\frac{\mathrm{d} \mathbf{r}}{\mathrm{d} t}\right)_{\hat{\mathcal{S}}}=\left(\frac{\mathrm{d} \mathbf{r}}{\mathrm{d} t}\right)_{\mathcal{S}}+\boldsymbol{\omega} \wedge \mathbf{r}.
\quad\color{yellow}\text{(8.6)}
$$
where $\boldsymbol{\omega}$ is the angular velocity of $\mathcal{S}$ relative to $\hat{\mathcal{S}}$.
For rigid body dynamics we will be interested in the velocity of points $\mathbf{r}$ that are fixed relative to the rotating frame $\mathcal{S}$. By definition this means that the first term on the right hand side of $(8.6)$ is zero, and hence we may simply write
$$
\dot{\mathbf{r}} \equiv\left(\frac{\mathrm{d} \mathbf{r}}{\mathrm{d} t}\right)_{\hat{\mathcal{S}}}=\boldsymbol{\omega} \wedge \mathbf{r}.
\quad\color{yellow}\text{(8.7)}
$$

### Definition
In general we may write $\boldsymbol{\omega}=\omega \mathbf{n}$, where $\omega=\omega(t)$ is the angular velocity, and $\mathbf{n}=\mathbf{n}(t)$ is of unit magnitude and the instantaneous axis of rotation.

Note For $\omega>0$, the direction of rotation is given by the right hand rule (point your right thumb in the direction of $\mathbf{n}$ and the direction of rotation is that of your right hand fingers, from proximal to distal).

In particular for [[Cylindrical Polar Coordinates]] with $\boldsymbol{\omega}=\omega \mathbf{k}$, the rotation is about the direction $\mathbf{k}$ with $\dot{\theta}=\omega$.