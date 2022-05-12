## Normal Frequency
#Dynamics 
$$
\lambda^{2}=\frac{1}{2}\left(a+d \pm \sqrt{(a+d)^{2}-4(a d-b c)}\right). \quad\color{yellow}\textbf{(3.37)}
$$
### Definition
If all solutions for $\lambda=\pm\lambda_{\pm}$ given by [(3.37)](Equilibrium%20Point) are **pure imaginary**, we write $\lambda=\pm i\omega_{\pm}$ where $\omega_\pm>0$ are called the [[Normal Frequency]] of the system.

Writing $\mathrm{e}^{\lambda t}=\mathrm{e}^{\pm \mathrm{i} \omega_{\pm} t}$ in terms of trigonometric functions, the linearized solution is
$$
\left(\begin{array}{l}
\xi(t) \\
\eta(t)
\end{array}\right)=\left(\begin{array}{l}
\alpha_{+} \\
\beta_{+}
\end{array}\right) \cos \left(\omega_{+} t+\phi_{+}\right)+\left(\begin{array}{c}
\alpha_{-} \\
\beta_{-}
\end{array}\right) \cos \left(\omega_{-} t+\phi_{-}\right),\quad\color{yellow}\textbf{(3.38)}
$$
where $\left(\begin{array}{c}\alpha_{\pm} \\\beta_{\pm}\end{array}\right)$ are the eigenvectors corresponding to the eigenvalues $\lambda_{\pm}^{2},$ respectively, and $\phi_{\pm}$ are constants.
A [[normal mode]] is defined to be the solution for a given eigenvector.

#### Example
>Consider two particles of mass $m$ attached to three identical springs with spring constant $k,$ as shown in Figure 7. In the upper plot, the springs are in equilibrium and all at their natural length $l$. The system is characterised by $x, y,$ as shown with the associated tension forces in the lower plot.
Show that $x=y=0$ is the only [[Equilibrium Point]], find the equations of motion, determine the normal frequencies and find the general solution.

![Figure 7|640](Dynamics_28.png)
<center style="font-size:14px;color:#03a4f2;text-decoration:underline"> 
Figure 7: The system of masses and springs. <br>The upper diagram shows the equilibrium configuration, with all springs at natural length l. <br>In the lower diagram the horizontal displacements x and y of the two masses from their equilibrium positions are shown, together with the various Hooke’s law forces.</center> 

##### Solution

By Hooke's law the forces shown in Figure 7 are
$$\mathbf{F}_{1}=-k x \mathbf{i}, \quad \mathbf{F}_{2}=k(y-x)\mathbf{i} \quad \text { (Left Particle), } \quad \mathbf{F}_{3}=-k y \mathbf{i}
$$
with $-\mathbf{F}_{2}$ on the Right Particle given by $-k(y-x)\mathbf{i}$.
Resolving Newton's second law in the $x$-direction for each particle thus gives
$$
\begin{array}{l}
m \ddot{x}=-k x+k(y-x)=k(y-2 x), \\
m \ddot{y}=-k(y-x)-k y=k(x-2 y) .
\end{array}
\quad \text{(3.40)}
$$
**We see that the equations are already linear, and that there is a unique equilibrium point at $x=y=0$.**
> linear➡️解唯一; (0,0)是解 ➡️unique equilibrium at (0,0).

Thus in this case we may identify $x=\xi, y=\eta$. In matrix form (3.40) reads
$$
\left(\begin{array}{l}
\ddot{x} \\
\ddot{y}
\end{array}\right)=\left(\begin{array}{cc}
-\frac{2 k}{m} & \frac{k}{m} \\
\frac{k}{m} & -\frac{2 k}{m}
\end{array}\right)\left(\begin{array}{l}
x \\
y
\end{array}\right).
\quad\color{yellow}\textbf{(3.41)}
$$
The characteristic equation is
$$
0=\operatorname{det}\left[\left(\begin{array}{cc}
\lambda^{2}+\frac{2 k}{m} & -\frac{k}{m} \\
-\frac{k}{m} & \lambda^{2}+\frac{2 k}{m}
\end{array}\right)\right]=\left(\lambda^{2}+\frac{2 k}{m}\right)^{2}-\left(\frac{k}{m}\right)^{2},
$$
and hence
$$
\lambda^{2}=\frac{k}{m}(-2 \pm 1). \quad\color{yellow}\textbf{(3.43)}
$$
Thus
$$
\lambda=\pm \mathrm{i} \sqrt{\frac{k}{m}}, \quad \pm \mathrm{i} \sqrt{\frac{3 k}{m}} .
$$
and the linearized modes (3.34) are oscillatory with normal frequencies
$$
\omega_{+}=\sqrt{\frac{k}{m}}, \quad \omega_{-}=\sqrt{\frac{3 k}{m}}
\quad\color{yellow}\textbf{(3.45)}
$$

The two values of $\lambda^{2}$ in (3.43) correspond to the two eigenvectors $(1,\pm 1)^{\mathrm{T}}$ of the matrix in (3.41), respectively. Hence the general solution is
$$
\left(\begin{array}{l}
x(t) \\
y(t)
\end{array}\right)=\left(\begin{array}{l}
1 \\
1
\end{array}\right) P \cos \left(\sqrt{\frac{k}{m}} t+\varphi\right)+\left(\begin{array}{c}
1 \\
-1
\end{array}\right) Q \cos \left(\sqrt{\frac{3 k}{m}} t+\psi\right)
$$
where $P, Q, \varphi$ and $\psi$ are constants. The lower frequency $\omega_{+}$ normal mode has the two masses oscillating together, while the higher frequency $\omega_{-}$ normal mode has the two masses oscillating in opposite directions.

#### Aside
Near a stable equilibrium point, the system behaves like two independent one-dimensional harmonic oscillators, of frequencies $\omega_{\pm}$.