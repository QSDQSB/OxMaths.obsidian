## Boundary Value Problem in Cartesian Coordinates
#FSPDE 

#### Answer
![[#^General-Series-Solution]]![[#^Fourier-Coefficients]]

### The Problem
An infinite straight metal rod has a rectangular cross-section whose sides are of length $a$ and $b$. The temperature $T(x, y)$ in each cross-section satisfies the boundary value problem given by Laplace's equation
$$
\frac{\partial^{2} T}{\partial x^{2}}+\frac{\partial^{2} T}{\partial y^{2}}=0 \quad \text { for } \quad 0<x<a, 0<y<b,
\quad\color{yellow}\text{(5.22)}
$$
with the [[Dirichlet boundary condition]]
$$
\begin{array}{ll}
T(0, y)=0 & \text { for } \quad 0<y<b, 
\quad&\color{yellow}\text{(5.23)}
\\
T(a, y)=0 & \text { for } \quad 0<y<b, 
\quad&\color{yellow}\text{(5.24)}
\\
T(x, 0)=0 & \text { for } \quad 0<x<a,
\quad&\color{yellow}\text{(5.25)}
\\
T(x, b)=f(x) & \text { for } \quad 0<x<a,
\quad&\color{yellow}\text{(5.26)}
\end{array}
$$
where $f(x)$ is the prescribed temperature at which the top face of the rod is held.

### The Solution
We will construct a solution using [[Fourier's Method]].

###### `Step I` Find all nontrivial separable solutions of the PDE and homogeneous BCs

We begin by finding all nontrivial separable solutions of [[Laplace's equation]] (5.22) and the homogeneous boundary conditions $(5.23)-(5.25)$.

Substituting $T(x, y)=F(x) G(y)$ into $(5.22)$ and dividing through by $F(x) G(y) \neq 0$ gives
$$
\frac{F^{\prime \prime}(x)}{F(x)}=-\frac{G^{\prime \prime}(y)}{G(y)}
\quad\color{yellow}\text{(5.27)}
$$
The left-hand side of this expression is independent of $y$, while the right-hand side is independent of $x$. Since the left-hand side is equal to the right-hand side, they must both be independent of $x$ and $y$, and therefore equal to a constant, $-\lambda \in \mathbb{R}$ say.

Hence, $-F^{\prime \prime}=\lambda F$ for $0<x<a$, with $(5.23)$ and $(5.24)$ giving the boundary conditions $F(0)=0$ and $F(a)=0$ for nontrivial $G$.

We solved this problem for $F$ in [$\S 3.4$](Fourier's%20Method) : the nontrivial solutions are given for positive integers $n$ by

>$$
F(x)=B \sin \left(\frac{n \pi x}{a}\right) \quad \lambda=\left(\frac{n \pi}{a}\right)^{2}
\quad\color{yellow}\text{(5.28)}
>$$

where $B$ is an arbitrary constant.

Since $G^{\prime \prime}-\lambda G=0$, the corresponding solution for $G(y)$ that satisfies $(5.25)$ is given by

>$$
G=C \sinh \left(\frac{n \pi y}{a}\right),
\quad\color{yellow}\text{(5.29)}
>$$

==Why can this also be '$G=C\sinh(1-y)$'?== #TODO
where $C$ is an arbitrary constant.

Hence, the nontrivial separable solutions of $(5.22)$ subject to $(5.23)-(5.25)$ are given for positive integers $n$ by

>$$
\large\bf
\color{}
T_{n}(x, y)=b_{n} \sin \left(\frac{n \pi x}{a}\right) \sinh \left(\frac{n \pi y}{a}\right),
\quad\color{yellow}\text{(5.30)}
>$$

where $b_{n}=B C$ are real constants and we have introduced the subscript $n$ on $T_{n}$ and $b_{n}$ to enumerate the countably infinite set of such solutions.

>In contrast to the wave equation for which the nontrivial separable solutions are the product of trigonometric functions in $x$ and trigonometric functions in $t$, the nontrivial separable solutions of Laplace's equation are products of trigonometric functions in $x$ with hyperbolic functions in $y$ or vice versa.

###### `Step II` Apply the principle of superposition
Since $(5.22)-(5.25)$ are linear, we can superimpose the separable solutions ***(assuming convergence)*** to obtain the general series solution

>$$
\large
T(x, y)=\sum_{n=1}^{\infty} T_{n}(x, y)=\sum_{n=1}^{\infty} b_{n} \sin \left(\frac{n \pi x}{a}\right) \sinh \left(\frac{n \pi y}{a}\right) .
>$$
^General-Series-Solution

###### `Step III` Use the theory of Fourier series to satisfy the inhomogeneous BC
The boundary condition $(5.26)$ on the top side can only be satisfied if
$$
f(x)=\sum_{n=1}^{\infty} b_{n} \sinh \left(\frac{n \pi b}{a}\right) \sin \left(\frac{n \pi x}{a}\right) \quad \text { for } 0<x<a
$$
so that the theory of Fourier series gives

>$$
\large
b_{n} \sinh \left(\frac{n \pi b}{a}\right)=\frac{2}{a} \int_{0}^{a} f(x) \sin \left(\frac{n \pi x}{a}\right) \mathrm{d} x
>$$
^Fourier-Coefficients

for positive integers $n$.

>Remark: If $f$ satisfies the conditions of the [[Fourier Convergence Theorem]], then it may be shown that the infinite series solution given by $(5.31)$ and $(5.33)$ is termwise infinitely differentiable with respect to $x$ and $y$ inside the rectangular domain $0<x<a, 0<y<b$, so that it satisfies [[Laplace's equation]] there. #Q

```ad-example
If the boundary data is given by ==$f(x)=T^{*}(1-|2 x / a-1|)$==, where ==$T^{*}$== is a constant temperature, then (5.31) and (5.33) give the Fourier coefficients
$$
T(x, y)=\frac{8 T^{*}}{\pi^{2}} \sum_{m=0}^{\infty} \frac{(-1)^{m} \sin ((2 m+1) \pi x / a) \sinh ((2 m+1) \pi y / a)}{(2 m+1)^{2} \sinh ((2 m+1) \pi b / a)}.
$$
```


