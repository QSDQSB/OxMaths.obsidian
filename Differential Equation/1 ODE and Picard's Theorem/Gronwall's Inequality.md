---
aliases: [Gronwall]
---
## Gronwall's Inequality
#DE 

Suppose $A \geq 0$ and $b \geq 0$ are constants and $v$ is a non-negative continuous function satisfying

$$v(x) \leq b+A\left|\int_{a}^{x} v(s) d s\right| \quad\color{yellow}\text{(1.20)}$$
^1-20

then $$v(x) \leq b e^{A|x-a|}.$$

---
#### Proof
We use an integrating factor.
For $x \geq a$ let $V(x)=\int_{a}^{x} v(s) d s$, so that $V^{\prime}(x)=v(x) .$ As $x \geq z$ and $v \geq 0$ also $X(x)$; and we have
$$
V^{\prime}(x) \leq b+A V(x)
$$
Multiply through by the integrating factor $e^{-A x}$ so
$$
\begin{aligned}
\left(V^{\prime}(x)-A V(x)\right) e^{-A x} & \leq b e^{-A x} \text { that is } \\
\frac{d}{d x}\left(V(x) e^{-A x}\right) & \leq b e^{-A x}, \text { so, integrating and noting that } V(a)=0 \\
V(x) e^{-A x} & \leq \int_{a}^{x} b e^{-A s} d s=\frac{b}{A}\left(e^{-A a}-e^{-A x}\right), \text { so } \\
V(x) & \leq \frac{b}{A}\left(e^{A(x-a)}-1\right)
\end{aligned}
$$
Finally, using [(1.20)](#^1-20)
$$
v(x) \leq b+A \int_{a}^{x} v(s) d s=b+A V(x) \leq b+A \frac{b}{A}\left(e^{A(x-a)}-1\right)=b e^{A(x-a)}
$$
Similar for $x\leq a$.

---
### Continuous Dependence
Suppose now that $y$ and $z$ are solutions of the ordinary differential equation $y^{\prime}(x)=$ $f(x, y(x))$ with $y(a)=b$ and $z(a)=c$, where $f$ satisfies conditions [$(\mathbf{P}(\mathbf{i}))$ and $(\mathbf{P}(\mathbf{i i}))$](Picard's%20Theorem.md#Picard%20Existence%20Theorem)] Then
$$
y(x)-z(x)=b-c+\int_{a}^{x}(f(s, y(s))-f(s, z(s)) d s
$$
so setting $v(x)=|y(x)-z(s)|$ (note [[Gronwall's Inequality|Gronwall]] requires $v$ to be non-negative) we get that
$$
|y(x)-z(x)| \leq|b-c|+\left|\int_{a}^{x} L\left| y(s)-z(s)\right|d s\right|
$$
and by [[Gronwall's Inequality]]
$$
|y(x)-z(x)| \leq|b-c| e^{L|x-a|} \leq|b-c| e^{L h}
\quad\color{yellow}\text{(1.21)}
$$
^1-21

Thus we have related $|y(x)-z(x)|$ to $|b-c|$.

We say a solution is continuously dependent on the initial data if we can make $|y(x)-z(x)|$ as small as we like by taking $|b-c|$ small enough. In other words the error in the solution will be small provided the error in the initial data is small enough. To be precise, in this case, solutions are continuously dependent on the initial data for $x \in[a-h, a+h]$ if for all $\epsilon>0$ there exists $\delta>0$ such that if $y$ and $z$ are as above,
$$
|b-c|<\delta \quad \Rightarrow|y(x)-z(x)| \leq \epsilon, \quad \forall x \in[a-h, a+h]
$$
This is clearly true from [(1.21)](#^1-21), because given $\epsilon>0$, we have $|y(x)-z(x)| \leq \epsilon$ whenever $|b-c|<e^{-L h} \epsilon$, so we can take $\delta=e^{-L h} \epsilon$

We could also use this to prove ***uniqueness***. If $y$ and $z$ are solutions with $b=c$, then we get $y(x)=z(x)$ for every $x$ so the solution is unique.