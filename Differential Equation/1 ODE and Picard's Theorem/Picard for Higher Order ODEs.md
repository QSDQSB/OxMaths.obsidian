#DE 

Consider just an IVP for linear second-order ODEs
$$
y^{\prime \prime}+p(x) y^{\prime}+q(x) y=r(x)
$$
with initial data
$$
y(a)=b \quad y^{\prime}(a)=c
$$
and $p, q, r$ [[Continuous]] for $|x-a| \leq h$
To reduce this to a first-order system, introduce $z=y^{\prime}$ and write
$$
\begin{array}{c}
y^{\prime}=z:=f_{1}(x, y, z) \\
z^{\prime}=-p z-q y+r:=f_{2}(x, y, z)
\end{array}
$$
with data $y(a)=b, \quad z(a)=c$.

This is precisely in the form to which the previous section applies, and it's easy to check that the global [[Differential Equation/1 ODE and Picard's Theorem/Lipschitz]] condition is satisfied, so we get
### Theorem 1.8. ( Picard for second-order linear ODEs)
With the assumptions as above, the solution exists for $|x-a| \leq h$, and is unique.