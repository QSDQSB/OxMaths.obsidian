# Method of Characteristics
#DE 
Suppose we are given the solution $z$ of ![[First Order Semilinear PDE#^The-PDE]] along a curve $\gamma_{0}$ (the data curve) in the $(x, y)$-plane. This produces a curve $\gamma$ in space (the initial curve):
$$
\begin{aligned}
\gamma(s) &=(x(s), y(s), z(s)) \\
\gamma_0(s) &=(x(s), y(s), 0)
\end{aligned}
$$


```ad-algorithm
`(i)`	Parametrise $\gamma$ as $(x(s), y(s), z(s))$.
`(ii)`	Solve
$$
\begin{array}{l}
\frac{\partial x}{\partial t}=P \\
\frac{\partial y}{\partial t}=Q \\
\frac{\partial z}{\partial t}=R
\end{array}
$$
for $(x(t, s), y(t, s), z(t, s))$ with data $x(0, s)=x(s) ; y(0, s)=y(s) ; z(0, s)=z(s)$
```
---
### Examples
```ad-example
Solve $$y \frac{\partial z}{\partial x}+\frac{\partial z}{\partial y}=z$$ with $z(x, 0)=x$ for $1 \leq x \leq 2$.

---
Say $\gamma(s)=(s, 0, s)$, for $1 \leq s \leq 2$, and then solve the characteristic equations with this as data at $t=0$
$$
\begin{array}{c}
x=B t+\frac{t^{2}}{2}+A ; \quad x(0, s)=A=s \\
y=B+t ; \quad y(0, s)=B=0 \\
z=C e^{t} ; \quad z(0, s)=C=s
\end{array}
$$
So, $C=s, B=0, A=s$ and the parametric form of the solution is
$$
\left.\begin{array}{l}
x=s+\frac{1}{2} t^{2} \\
y=t \\
z=s e^{t}
\end{array}\right\}
$$
for $1 \leq s \leq 2$.
```