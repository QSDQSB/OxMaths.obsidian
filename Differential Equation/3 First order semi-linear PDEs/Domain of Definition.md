# Domain of Definition
#DE 

## Bounded Initial Data
In general the initial curve could be bounded or semi-infinite. The solution surface is swept out by the characteristics through the initial curve, so the solution will be defined in the region swept out by the projections of the characteristics through the initial curve. In particular if the initial curve is bounded, the domain of definition will be bounded by the projections of the characteristics through the end points of the initial curve.
## Blow up
The [[method of characteristics]] reduces the [[First Order Semilinear PDE#^The-PDE|PDE]] to a system of ODEs. As we have already seen nonlinear ODEs can give rise to solutions which blow up, so the same must be true of non linear PDEs, even if those that are semi-linear.
## Explicit solution
We want $z$ as a function of $x$ and $y$, so we need to be able to eliminate $t$ and $s$ in favour of $x$ and $y$, at least in principle. For this, recall
$$
J(s, t)=\frac{\partial(x, y)}{\partial(t, s)}=\operatorname{det}\left(\begin{array}{ll}
x_{t} & y_{t} \\
x_{s} & y_{s}
\end{array}\right)
$$
Now if
$$
x=x(t, s), \text { and } y=y(t, s)
$$
are continuously differentiable functions of $t$ and $s$ in a neighbourhood of a point, then a sufficient condition to be able to find unique continuously differentiable functions
$$
t=t(x, y) \text { and } s=s(x, y)
$$
in some neighbourhood of the point, is that $J$ be **non-zero** at the point. We can then substitute into $z=z(t, s)$ to get
$$
z=z(t(x, y), s(x, y))=f(x, y)
$$

Thus we require first that $J(s, 0) \neq 0$ on the initial curve. If this is so, then the problem has a unique explicit solution, at least close to the initial curve. Then, we can continue to extend the solution away from the curve so long as $J \neq 0$ and the solution does not blow up.
***This fails if the data curve touches a characteristic projection.*** For
$$
J(s, 0)=\operatorname{det}\left(\begin{array}{ll}
x_{t} & y_{t} \\
x_{s} & y_{s}
\end{array}\right)=\operatorname{det}\left(\begin{array}{cc}
P & Q \\
x_{s} & y_{s}
\end{array}\right)
$$
So if, for some $s, J(s, 0)=0$ then, if a dash denotes differentiation with respect to $s$ on $\gamma_{0}=(x(s), y(s), 0)$, we have
$$
P(x, y) y^{\prime}-Q(x, y) x^{\prime}=0
$$
so the data curve is tangent to the projection of the characteristic at that point.