## Planar Motion in Polar Coordinates
#Dynamics 
![Figure 8| 600](Dynamics_31.png)
$$x=r\cos\theta,\quad y=r\sin\theta,$$
$$r=\sqrt{x^2+y^2},\quad\theta=\tan^{-1}y/x,\quad r\geq0,\quad \theta\in[0,2\pi)$$
### Definition
- $\mathbf{e}_r$ is the unit vector in direction of increasing $r$.
- $\mathbf{e}_\theta$ is the unit vector in direction of increasing $\theta$.

Hence 
$$
\mathbf{e}_{r}=\cos \theta \mathbf{i}+\sin \theta \mathbf{j}, \quad \mathbf{e}_{\theta}=-\sin \theta \mathbf{i}+\cos \theta \mathbf{j}, \quad \mathbf{e}_{r} \cdot \mathbf{e}_{\theta}=0. 
\quad\color{yellow}\text{(4.2)}
$$
Except at the origin, $\left\{\mathbf{e}_{r}, \mathbf{e}_{\theta}\right\}$ form an orthonormal basis - it is important to note that $\mathbf{e}_{r}, \mathbf{e}_{\theta}$ vary in space and, in particular, are functions of $\theta$.
The position of a particle is given by
$$
\mathbf{r}=(x, y)=r \mathbf{e}_{r}
$$
For a time-dependent trajectory $\mathbf{r}(t)$ of the particle we thus have
$$
\dot{\mathbf{r}}=\dot{r} \mathbf{e}_{r}+r \dot{\mathbf{e}}_{r}
\quad\color{yellow}\text{(4.3)}
$$
But from (4.2) we have
$$
\begin{aligned}
\dot{\mathbf{e}}_{r} &=-\dot{\theta} \sin \theta \mathbf{i}+\dot{\theta} \cos \theta \mathbf{j} &=\dot{\theta} \mathbf{e}_{\theta} \\
\dot{\mathbf{e}}_{\theta} &=-\dot{\theta} \cos \theta \mathbf{i}-\dot{\theta} \sin \theta \mathbf{j} &=-\dot{\theta} \mathbf{e}_{r}
\end{aligned}
\quad\color{yellow}\text{(4.4)}
$$
Hence we have the velocity of the particle can be written as (Figure 8b).
$$
\dot{\mathbf{r}}=\dot{r} \mathbf{e}_{r}+r \dot{\theta} \mathbf{e}_{\theta}
\quad\color{yellow}\text{(4.5)}
$$
where $\dot{\theta}$ is referred to as the [[angular velocity]] of the particle.
The second term has arisen because $\left\{\mathbf{e}_{r}, \mathbf{e}_{\theta}\right\}$ depend on $\theta$ and thus inherit the time-dependence of $\theta(t)$ on the trajectory $\mathbf{r}(t)$

We may find the analogous expression for acceleration by taking another time derivative, using (4.4)
$$
\begin{aligned}
\ddot{\mathbf{r}} &=\ddot{r} \mathbf{e}_{r}+\dot{r} \dot{\mathbf{e}}_{r}+\dot{r} \dot{\theta} \mathbf{e}_{\theta}+r \ddot{\theta} \mathbf{e}_{\theta}+r \dot{\theta} \dot{\mathbf{e}}_{\theta} \\
&=\left(\ddot{r}-r \dot{\theta}^{2}\right) \mathbf{e}_{r}+(2 \dot{r} \dot{\theta}+r \ddot{\theta}) \mathbf{e}_{\theta} \\
&=\left(\ddot{r}-r \dot{\theta}^{2}\right) \mathbf{e}_{r}+\frac{1}{r} \frac{\mathrm{d}}{\mathrm{d} t}\left(r^{2} \dot{\theta}\right) \mathbf{e}_{\theta}
\end{aligned}
\quad\color{yellow}\text{(4.6)}
$$
> Use $2\dot{r}\dot{\theta}+r\ddot{\theta}={1\over r}{\frac{\mathrm{d}}{\mathrm{d} t}\left(r^{2} \dot{\theta}\right)}$ in the final equality.

### Example: Uniform Circular Motion
> 
Consider a particle moving in a circle of radius $R$, centre the origin $O$, at constant speed $v$. $r=R=\text{constant}$ so we have $\dot{r}=0$. Thus (From 4.5) $$\dot{\mathbf{r}}=R\dot{\theta}\mathbf{e}_\theta.$$ This is tangent to the circle with speed $v=|\dot{\mathbf{r}}|$, hence $v=R|\dot{\theta}|$ and the angular speed $|\dot{\theta}|=\frac{v}{R}$ is constant. 
Then $\ddot{\theta}=\ddot{r}=0$, thus from (4.6) the acceleration is $$\ddot{\mathbf{r}}=-R\dot{\theta}^2\mathbf{e}_r=-\frac{v^2}{r}\mathbf{e}_r,\quad\color{yellow}\text{(4.8)}$$
so $\color{orange}\text{acceleration in circular motion is }\frac{v^2}{r} \text{ towards the centre of the circle }O$.

By Newton's second law, we need a force of magnitude $F=mv^2/R=mR\dot{\theta}^2$ directed towards the origin - this is called the **centripetal force**.
