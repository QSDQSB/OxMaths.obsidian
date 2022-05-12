## Coupled Oscillations
#Dynamics 
Suppose we have a two dimensional dynamical system, i.e. a system of ODEs, described by $$\ddot{x}=F(x,y),\qquad\ddot{y}=G(x,y),\quad\text{(3.28)}$$
where we shall assume that $F$ and $G$ are suitably smooth and here $x$ and $y$ may be **general variables**, rather than only Cartesian coordinates.

### Definition
An [[Equilibrium Point]] is a solution to (3.28) with $x=x_e,\,\,y=y_e$ both constant such that $F(x_e,y_e)=0=G(x_e,y_e)$.
#### Stable and unstable solutions
$$
\lambda^{2}=\frac{1}{2}\left(a+d \pm \sqrt{(a+d)^{2}-4(a d-b c)}\right). \quad\color{yellow}\textbf{(3.37)}
$$
If $\color{orange}\textbf{any}$ of the four roots for $\lambda$ has positive real part then the solutions have exponential growth and are $\color{red}\textbf{unstable}$. If **all** roots for $\lambda$ have real part less than or equal to zero then the solutions decay or oscillate, and hence are $\color{green}\textbf{stable}$.

