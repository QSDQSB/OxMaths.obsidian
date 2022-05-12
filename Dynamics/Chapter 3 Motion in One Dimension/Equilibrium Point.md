## Equilibrium Point
#Dynamics 
### Definition
An [[equilibrium point]] is a solution to [(3.28)](Coupled%20Oscillations.md) with $x=x_e,\,\,y=y_e$ both constant such that $F(x_e,y_e)=0=G(x_e,y_e)$.
We again linearize the equations of motion. This means that we write $$x=x_e+\xi,\quad y=y_e+\eta,\quad\text{(3.29)}$$
### Determine the stability of an equilibrium point
To determine the stability of such an [[equilibrium point]], we again [linearize the equations of motion](Linearized%20Equation%20of%20Motion). This means that we write
$$x=x_{e}+\xi, \quad y=y_{e}+\eta$$
where $\xi$ and $\eta$ are small, and then Taylor expand the right hand sides of [(3.28)](Coupled%20Oscillations) , leading to
$$
\begin{aligned}
\ddot{\xi} &=F\left(x_{e}+\xi, y_{e}+\eta\right)=F\left(x_{e}, y_{e}\right)+\xi \frac{\partial F}{\partial x}\left(x_{e}, y_{e}\right)+\eta \frac{\partial F}{\partial y}\left(x_{e}, y_{e}\right)+\cdots \\
\ddot{\eta} &=G\left(x_{e}+\xi, y_{e}+\eta\right)=G\left(x_{e}, y_{e}\right)+\xi \frac{\partial G}{\partial x}\left(x_{e}, y_{e}\right)+\eta \frac{\partial G}{\partial y}\left(x_{e}, y_{e}\right)+\cdots
\end{aligned}
$$
where $\cdots$ denote terms of quadratic and higher order in $\xi, \eta .$ The linearized equations of motion are hence
$$
\begin{array}{l}
\ddot{\xi}=a \xi+b \eta \\
\ddot{\eta}=c \xi+d \eta \quad\text{(3.31)}
\end{array}
$$
where we have introduced the constants
$$
\begin{aligned}
a &=\frac{\partial F}{\partial x}\left(x_{e}, y_{e}\right), & b &=\frac{\partial F}{\partial y}\left(x_{e}, y_{e}\right) \\
c &=\frac{\partial G}{\partial x}\left(x_{e}, y_{e}\right), & d &=\frac{\partial G}{\partial y}\left(x_{e}, y_{e}\right)
\end{aligned} 
$$

To solve (3.31), we can differentiate the equation for $\ddot{\xi}$ twice, eliminating $\ddot{\eta}$ using its equation and then eliminating for $\eta$ using the equation for $\ddot{\xi}$. This gives a **fourth order ODE in $\xi$**.

Or it is more convenient to write (3.31) as a matrix equation 
$$
\left(\begin{array}{l}
\ddot{\xi} \\
\ddot{\eta}
\end{array}\right)=\left(\begin{array}{ll}
a & b \\
c & d
\end{array}\right)\left(\begin{array}{l}
\xi \\
\eta
\end{array}\right) .\color{yellow}\quad\text{(3.33)}
$$

We then seek solutions to (3.33) of the form
$$
\left(\begin{array}{l}
\xi(t) \\
\eta(t)
\end{array}\right)=\left(\begin{array}{l}
\alpha \\
\beta
\end{array}\right) \mathrm{e}^{\lambda t} \quad\color{yellow}\text{(3.34)}
$$
where $\alpha, \beta$ and $\lambda$ are constant. Substituting (3.34) into (3.33) and cancelling the overall factor of $\mathrm{e}^{\lambda t}$ gives
$$
\lambda^{2}\left(\begin{array}{l}
\alpha \\
\beta
\end{array}\right)=\left(\begin{array}{ll}
a & b \\
c & d
\end{array}\right)\left(\begin{array}{l}
\alpha \\
\beta
\end{array}\right).
$$
Thus $\lambda^{2}$ is an **[[eigenvalue]]** of $\left(\begin{array}{cc}a & b \\ c & d\end{array}\right),$ with corresponding eigenvector $\left(\begin{array}{l}\alpha \\ \beta\end{array}\right)$.
The characteristic equation is
$$
\operatorname{det}\left[\lambda^{2}\left(\begin{array}{ll}
1 & 0 \\
0 & 1
\end{array}\right)-\left(\begin{array}{ll}
a & b \\
c & d
\end{array}\right)\right]=\lambda^{4}-(a+d) \lambda^{2}+(a d-b c)=0,
$$
which gives the eigenvalues
$$
\lambda^{2}=\frac{1}{2}\left(a+d \pm \sqrt{(a+d)^{2}-4(a d-b c)}\right). \quad\color{yellow}\textbf{(3.37)}
$$
For a general system [(3.28)](Coupled%20Oscillations) the solutions for $\lambda^2$ in (3.37) can be complex, in general also leading to complex $\lambda$. Note there are two roots for $\lambda^2$ and thus four roots for $\lambda$.
#### Remark
If $\lambda$ does not have repeated roots, the general solution is a **linear superposition** (i.e. a weighted linear sum) of the solutions of the form of Eqn. (3.33), where the summation is over all possible roots for $\lambda$. 
#### Remark
If $\lambda$ possesses repeated roots, converting the equations to a fourth order ODE in $\xi$ will often be a convenient way of generating the general solution.
#### Stable and unstable solutions
If $\color{orange}\textbf{any}$ of the four roots for $\lambda$ has positive real part then the solutions have exponential growth and are $\color{red}\textbf{unstable}$. If **all** roots for $\lambda$ have real part less than or equal to zero then the solutions decay or oscillate, and hence are $\color{green}\textbf{stable}$.

### Definition
If all solutions for $\lambda=\pm\lambda_{\pm}$ given by (3.37) are **pure imaginary**, we write $\lambda=\pm i\omega_{\pm}$ where $\omega_\pm>0$ are called the [normal frequencies](Normal%20Frequency) of the system.