## Path of the Comet
#Dynamics 

A posteriori, taking the limit $T \rightarrow \infty$ after all other calculations are completed, and noting $R \rightarrow \infty, \alpha \rightarrow 0$ in this limit, we have the [[Path of the Comet]] is given by
$$
u(\theta)=\frac{\kappa}{m p^{2} v^{2}}(1-\cos \theta)+\frac{1}{p} \sin \theta.
\quad\color{yellow}\text{(6.41)}
$$
![Figure 16 |400](Dynamics_65.png)
>**(Figure 16)** The actual path of the comet. The origin is at the Sun (large black dot), with the $\theta=0$ axis horizontal, to the right (one should understand the dotted lines as extending to infinity).

#TBV 
### The Angle of Deflection
The comet asymptotes to infinity at angles given by $u=1 / r=0$. This gives
$$
\frac{\kappa}{m p^{2} v^{2}}(1-\cos \theta)+\frac{1}{p} \sin \theta=0.
\quad\color{yellow}\text{(6.42)}
$$
Using double angle formulas we may rewrite this as
$$
\frac{\kappa}{m p^{2} v^{2}} \sin ^{2} \frac{\theta}{2}+\frac{1}{p} \sin \frac{\theta}{2} \cos \frac{\theta}{2}=0.
\quad\color{yellow}\text{(6.43)}
$$
Clearly one solution is $\theta=0,$ corresponding to the $t=-T \rightarrow-\infty$ limit by construction.
We are thus interested in the other solution, which satisfies
$$
\frac{\kappa}{m p^{2} v^{2}} \sin \frac{\theta}{2}+\frac{1}{p} \cos \frac{\theta}{2}=0
\quad\color{yellow}\text{(6.44)}
$$

and hence
$$
\tan \frac{\theta}{2}=-\frac{m p v^{2}}{\kappa}
$$
Noting the deflection depicted in Figure 16 , we set $\theta=2 \pi-2 \delta$. Using
$$
\tan (\pi-\delta)=-\tan \delta,
$$
we thus have
$$
\tan \delta=\frac{m p v^{2}}{\kappa}=\frac{p v^{2}}{G_{N} M_{S}}.
$$
Here in the second equality we have inserted the value $\kappa=G_{N} M_{S} m,$ where $M_{S}$ is the mass of the Sun.

As illustrated in [Figure 16](Path%20of%20the%20Comet.md) the comet comes in at an angle $\theta=0$, goes past the Sun and proceeds to infinity at an angle $2 \pi-2 \delta$. Noting that no deflection would correspond to an outward asymptote with angle $\pi,$ it follows that the comet is **deflected** through an angle
$$
\color{pink}
(2 \pi-2 \delta)-\pi=\pi-2 \delta=\pi-2 \tan ^{-1}\left(\frac{p v^{2}}{G_{N} M_{S}}\right).
$$
