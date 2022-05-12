# Collection Trinity Term 2021
#ProblemSheet 
### Pure
#### Linear Algebra & Group Theory
4. Let $G$ be a finite group and let $|G|$ be the number of elements in $G$.
	(a) [9 marks] Prove each of the following implications and give a counterexample showing that the converse implication is false:
		(i) if $|G|$ is a prime then $G$ is cyclic;
		(ii) if $G$ is cyclic then $G$ is abelian;
		(iii) if every non-trivial element of $G$ has order 2 then $G$ is abelian;
		(iv) if every non-trivial element of $G$ has order 2 and $|G|>2$ then $G$ has a subgroup isomorphic to $C_{2} \times C_{2}$ (You may use [[Lagrange's Theorem]].)
	(b) [6 marks] Classify all groups of order $\leqslant 6$ up to [[isomorphism]] (giving brief reasons). Which of them are isomorphic to subgroups of $S_{4} ?$
	(c) [5 marks] Give a geometric description of all subgroups of $S_{4}$ of order $\leqslant 6$ as groups of symmetries of the tetrahedron. (You may assume that the group of all symmetries of the tetrahedron is isomorphic to $S_{4}$.)
#### Analysis
5. Let $E$ be an interval in $\mathbb{R}$.
(a) [5 marks]
	(i) What does it mean for a sequence of functions $f_{n}: E \rightarrow \mathbb{R}$ to converge uniformly to a function $f: E \rightarrow \mathbb{R} ?$
	(ii) Find a sequence of continuous functions $f_{n}: \mathbb{R} \rightarrow \mathbb{R}$ such that both of the following hold:
			(1) for each $x \in \mathbb{R}, f_{n}(x) \rightarrow 0$ as $n \rightarrow \infty$, and
			(2) $f_{n}(1 / n)=1$ for each positive integer $n$.
Do your functions converge uniformly to the function that is identically zero?
(b) [7 marks] Suppose that a sequence of continuous functions $f_{n}: E \rightarrow \mathbb{R}$ converges uniformly to $f: E \rightarrow \mathbb{R}$ and let $\left(x_{n}\right)$ be a sequence of real numbers converging to $x$, where $x \in E$ and each $x_{n} \in E$. Show that $f_{n}\left(x_{n}\right)$ converges to $f(x)$. 
*(Any standard theorems about uniform convergence may be quoted without proof.)*
(c) [8 marks] Hence, or otherwise, prove that
$$
\sum_{m=1}^{n} \frac{1}{m}\left(\frac{1}{2}+\frac{1}{n}\right)^{m} \rightarrow \log 2
$$
as $n \rightarrow \infty$.
*(You may use any results about power series, provided you quote them clearly. You may also quote the power series of any standard functions.)*
6. (a) [11 marks] Let $a, b \in \mathbb{R}$ with $a<b$, and let $f:(a, b) \rightarrow \mathbb{R}$ be a function.
(i) Define ' $f$ is differentiable at $x_{0} \in(a, b)$ '.
(ii) Prove that if $f$ is differentiable at $x_{0} \in(a, b)$ then $f$ is continuous at $x_{0}$.
(iii) Prove that the function
$$
\phi(x):=\left\{\begin{array}{ll}
x^{2} & \text { if } x \in \mathbb{Q} \\
0 & \text { otherwise }
\end{array}\right.
$$
is differentiable at 0 but not differentiable at any other point. [You may assume every interval contains both rationals and irrationals.]
(b) [9 marks] State the [[Mean Value Theorem]]. Let the function $h: \mathbb{R} \rightarrow \mathbb{R}$ be differentiable at every point, and suppose that $h(0)=0, h(2)=0$, and $\left|h^{\prime}(x)\right| \leqslant 1$ for all $x$. Prove that
(i) $h(1) \leqslant 1$;
(ii) $h(1) \neq 1$.
7. (a) [8 marks] The function $f: \mathbb{R} \rightarrow \mathbb{R}$ is twice differentiable and $a, b$ are distinct real numbers. The function $h(x)$ is defined by
$$
h(x)=f(b)-f(x)-(b-x) f^{\prime}(x)+\frac{K(b-x)^{2}}{2}
$$
where the real constant $K$ is chosen so that $h(a)=0$.
By applying Rolle's Theorem to the function $h$, or otherwise, show that there is a real number $c$ lying strictly between $a$ and $b$ such that
$$
f(b)=f(a)+(b-a) f^{\prime}(a)+\frac{(b-a)^{2}}{2} f^{\prime \prime}(c)
$$
(b) [7 marks] Suppose now that $f^{\prime \prime}(x) \geqslant 0$ for all $x \in \mathbb{R}$. Show that for all $a \in \mathbb{R}$ and all positive $h$ we have
$$
f(a+h)-f(a) \geqslant f(a)-f(a-h)
$$
(c) [5 marks] Show also that if, in addition, $f$ is bounded on $\mathbb{R}$, then $f$ is a constant function.

### Applied
7. (a) [9 marks] Find the volume of the finite region enclosed between the surface
$$
y=1-x^{2}-4 z^{2}
$$
and the plane $y=0$.
(b) [11 marks] Use [[Green's Theorem]] to show that the area enclosed by the epicycloid
$$
x(\phi)=4 \cos \phi-\cos 4 \phi, \quad y(\phi)=4 \sin \phi-\sin 4 \phi \quad \text { for } 0 \leqslant \phi \leqslant 2 \pi
$$
equals to $20 \pi$.

8. (a) [10 marks] By a suitable rotation of co-ordinates, or otherwise, evaluate
$$
\int(a x+b y+c z)^{4} \mathrm{~d} V
$$
taken over the region $x^{2}+y^{2}+z^{2} \leqslant 1$, where $a, b, c$ are positive constants.
(b) [10 marks] A sequence of integrals of a function $f$ are defined by the recurrence
$$
F_{0}(x)=f(x) \text { and } F_{n}(x)=\int_{0}^{x} F_{n-1}(y) \mathrm{d} y
$$
for $n \geqslant 1$. By changing the order of integration show that
$$
F_{2}(x)=\int_{0}^{x}(x-y) f(y) \mathrm{d} y
$$
and, more generally, that
$$
F_{n}(x)=\int_{0}^{x} \frac{(x-y)^{n-1}}{(n-1) !} f(y) \mathrm{d} y
$$

9. (a) [14 marks]
(i) Given that [[Laplace's equation]] in [[Plane Polar Coordinates]] $(r, \theta)$ is
$$
\frac{\partial^{2} T}{\partial r^{2}}+\frac{1}{r} \frac{\partial T}{\partial r}+\frac{1}{r^{2}} \frac{\partial^{2} T}{\partial \theta^{2}}=0
$$
verify that $r^{n} \sin n \theta$ and $r^{-n} \sin n \theta$ are solutions, for any positive integer $n$.
(ii) Suppose that $T(x, y)$ satisfies [[Laplace's equation]] $T_{x x}+T_{y y}=0$ in a region $S$ bounded by a simple closed curve $C$, and that $T=f(x, y)$ on $C$, where $f$ is a given function. Use [[Green's theorem]]
$$
\int_{S}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}\right) \mathrm{d} x \mathrm{~d} y=\int_{C}(P \mathrm{~d} y-Q \mathrm{~d} x)
$$
for suitably chosen $P$ and $Q$, to show that $T(x, y)$ is unique.
(b) [6 marks] Suppose $T(r, \theta)$ satisfies Laplace's equation in the circular region $r \leqslant a$. Find $T(r, \theta)$ if $T=\sin ^{3} \theta$ on $r=a$.
# Solutions
## Solutions to Pure
### Ana7
#### Ana7(a)
As $f$ is differentiable, $h$ is also differentiable:
$$
\begin{aligned}
	h'(x) & = -f'(x)-(b-x)f''(x)+f'(x)-{2k(b-x)\over2} \\
	& = (x-b)f''(x)+k(x-b).
\end{aligned}
$$
 $h(a)=0$, so 
$$f(b)-f(a)-(b-a)f'(a)+{k(b-a)^2\over2}=0.\quad\quad\color{yellow} \text{(1)}$$
 As $h(a)=h(b)=0$, by [[Rolle's Theorem]], *(w.l.o.g suppose $a<b$)* 
 $$\exists c\in(a,b) \text{ such that } h'(c)=0.$$
 Then 
 $$(c-b)f''(c)+k(c-b)=0 \Rightarrow f''(c)=-k.$$
 Then by (1) $$f(b)-f(a)-(b-a)f'(a)-{f''(c)(b-a)^2\over2}=0,$$ so $f(b)=f(a)+(b-a)f'(a)+{(b-a)^2\over2}f''(c)$.
 #### Ana7(b)
 
## Solutions to Applied
### MVC7
#### MVC7(a)
$$
\begin{aligned}
V &= \iiint \mathrm{d}y\mathrm{d}x\mathrm{d}z \\
&= \iint_{x^2+4z^2\leq1}\int_0^{1-x^2-4z^2}\mathrm{d}y\mathrm{d}x\mathrm{d}z \\
&= \iint 1-x^2-4z^2\mathrm{d}x\mathrm{d}z \\
\end{aligned}
$$
Let $x=r\cos\theta, 2z=r\sin\theta$, then

$$
\begin{aligned}
\frac{\partial(x.z)}{\partial{r.\theta}} &= 
\left|
	\begin{array}{cc}
	\cos\theta & -r\sin\theta \\
	{1\over2}\sin\theta & {1\over2}r\cos\theta
	\end{array}
\right|\\
&={1\over2}r(\cos^2\theta+\sin^2\theta)={1\over2}r.
\\
\end{aligned}
$$
$$
\begin{aligned}
\text{So } V&=\iint_{r^2\leq1}(1-r^2\cos^2\theta-r^2\sin^2\theta)\times{1\over2}r\mathrm{d}r\mathrm{d}\theta \\
&=\int_0^{2\pi}\int_0^1 {1\over2}r-{1\over2}r^3\mathrm{d}r\mathrm{d}\theta \\
&= \left[{1\over4}r^2-{1\over8}r^5\right]_0^1\times 2\pi \\
&={1\over4}\pi
\end{aligned}
$$

#### 7(b)
By [[Green's Theorem]], taking $p=0$ and $q=y$:
$$
\begin{aligned}
A &=\iint_D\mathrm{d}A \\
& = -\int_Cy\mathrm{d}x \\
& = -\int_Cyx'\mathrm{d}\phi \\
& = -\int_0^{2\pi}(4\sin\phi-\sin4\phi)(-4\sin\phi+4\sin4\phi)\mathrm{d}\phi \\
& = -\int_0^{2\pi}\left( -16\sin^2\phi-4\sin^24\phi+20\sin\phi\sin4\phi\right)\mathrm{d}\phi \\
& = \int_0^{2\pi} \left( 16({1\over2}-{1\over2}\cos2\phi)+4({1\over2}-{1\over2}\cos8\phi)+10(\cos3\phi-\cos5\phi)\right)\mathrm{d}\phi \\
& = 10\times 2\pi = 20\pi
\end{aligned}
$$

### MVC8
#### MVC8(a)
By a proper rotation, construct an orthonormal basis $(X,Y,Z)$ where 
$$\vec v_1=\frac{(a,b,c)}{\sqrt{a^2+b^2+c^2}}$$
then 
$$
	\int_\text{unit ball} (ax+by+cz)^4 \mathrm{d}V 
$$
$$
\begin{aligned}
	& =\int_\text{unit ball} \left[ (a,b,c) \cdot \vec r \right]^4 \mathrm{d}V \\
	& = \int_\text{unit ball} (a^2+b^2+c^2)^2X^4 \mathrm{d}V \quad (\text{as }\vec r\cdot \vec v_1 = X)\\
	
	& = \int_\text{unit ball} (a^2+b^2+c^2)^2X^4 \mathrm{d}X\mathrm{d}Y\mathrm{d}Z.
\end{aligned}
$$
Use [[Spherical Polar Coordinates]], let $x=r\cos\phi$, then
$$\int _\text{unit ball} X^4 \mathrm{d}X\mathrm{d}Y\mathrm{d}Z$$
$$
\begin{aligned}
& = \int_0^{2\pi}\int_0^\pi\int_0^1r^4\cos^4\phi(r^2\sin\phi)\mathrm{d}r\mathrm{d}\phi\mathrm{d}\theta \\

& = 2\pi\int_0^\pi {1\over7}\cos^4\phi\sin\phi \mathrm{d}\phi \\
& = 2\pi\cdot{1\over7}\cdot{2\over5}={4\over35}\pi.
\end{aligned}
$$
So $\int_\text{unit ball} (ax+by+cz)^4 \mathrm{d}V={4\over35}\pi(a^2+b^2+c^2)^2$.

### MVC9
#### MVC9(a)
	(i)
If $T=r^{n} \sin n \theta$, then
$$
\begin{aligned} 
& T_{r}=n r^{n-1} \sin(n \theta)\\
& T_{\theta\theta}=-n^{2}r^{n} \sin(n \theta)\\
& T_{rr}=n(n-1)r^{n-2} \sin(n \theta) \\ 
\text {Then}\quad & T_{r r}+\frac{1}{r} T r+\frac{1}{r^{2}} T_{\theta\theta} \\
& =n(n-1) r^{n-2} \sin n \theta+n r^{n-2} \sin n \theta-n^{2} r^{n-2} \sin n \theta \\ 
& =r^{n-2} \sin n \theta\left(n(n-1)+n-n^{2}\right) \\ 
& =0 \\
\\
\Rightarrow \quad &T=r^{n} \sin n \theta \text { is a solution for Laplace's equation in polar coordinates.} \end{aligned}
$$
Similarly for $T=r^{-n} \sin n \theta$.

	(ii)
Say $T_1$, $T_2$ satisfy Laplace's equation, and let $W=T_1-T_2$, then
- $W_{xx}+W_{yy}=0$, i.e. $W$ satisfy Laplace's equation.
- $W=0$ on $C$, as $W=T_1-T_2=f-f=0$ on $C$.

Take $p=W\cdot W_x$, $q=W\cdot W_y$, then
- $p$, $q$ have first-order derivatives, as $W\cdot W_{x \text{ or }y}$ being differentiable because $W_{xx \text{ or } yy}$ exists.
- $p_x+q_y=W_x^2+W_{xx}+W_y^2+W_{yy}=W_x^2+W_y^2$.
- $\int_C(p,q)\cdot \vec{\bf n}\mathrm{~d}s=0$, as $W=0$ on $C$.

So we may apply [[Green's Theorem]] to obtain
$$\iint_{S} P_{x}+q_{y} \mathrm{~d} A=\int_{C}(p, q) \cdot \vec{\bf n} \mathrm{~d} s=0$$
So $W_x=W_y=0$, meaning that $W$ is a constant.
As $W=0$ on $C$, $W:=0$ in $S$.
Hence the uniqueness.

#### MVC9(b)
Take $$T={3\over 4a}r\sin\theta-{1\over 4a^3}r^3\sin3\theta.$$ Then T satisfies the boundary condition, and by [[#9 a]] $T$ satisfies [[Laplace's Equation]] and $T$ is unique.