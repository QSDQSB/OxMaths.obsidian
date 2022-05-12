## Boundary Value Problem in Polar Coordinates
#FSPDE 
#### Answer
![[#^General-Series-Solution]]

Recall that in plane polar coordinates $(r, \theta)$, Laplace's equation for $T(r, \theta)$ becomes

$$
\frac{\partial^{2} T}{\partial r^{2}}+\frac{1}{r} \frac{\partial T}{\partial r}+\frac{1}{r^{2}} \frac{\partial^{2} T}{\partial \theta^{2}}=0 \text { for } r>0 .
\quad\color{yellow}\text{(5.35)}
$$
^Laplace-Equation-in-Polar

### Fourier's Method
We start by finding all nontrivial separable solutions of the form $T(r, \theta)=F(r) G(\theta)$.

Since $T$ is a single-valued function of position on $r>0$, we require $G(\theta)$ to be $2 \pi$-periodic.

Substituting $T(r, \theta)=F(r) G(\theta)$ into $(5.35)$ we obtain
$$
F^{\prime \prime} G+\frac{1}{r} F^{\prime} G+\frac{1}{r^{2}} F G^{\prime \prime}=0 .
\quad\color{yellow}\text{(5.36)}
$$
Separating the variables by dividing through by $F(r) G(\theta) / r^{2} \neq 0$ gives

$$
\frac{r^{2} F^{\prime \prime}(r)+r F^{\prime}(r)}{F(r)}=-\frac{G^{\prime \prime}(\theta)}{G(\theta)}
\quad\color{yellow}\text{(5.37)}
$$

- The left-hand side of this expression is independent of $\theta$, while the right-hand side is independent of $r$. Since the left-hand side is equal to the right-hand side, they must both be independent of $r$ and $\theta$, and therefore equal to a constant, ==$\lambda \in \mathbb{R}$== say.

Hence, we need to find all $\lambda \in \mathbb{R}$ for which $G^{\prime \prime}(\theta)+\lambda G(\theta)=0$ has a nontrivial, $2 \pi$-periodic, solution $G(\theta)$. There are three cases to consider.

###### ❌Case (i) $\lambda=-\omega^{2}$($\omega>0$ wlog) 
If $G^{\prime \prime}-\omega^{2} G=0$, then $G(\theta)=A \cosh \omega \theta+B \sinh \omega \theta$, where $A, B \in \mathbb{R}$. If $G$ is $2 \pi$-periodic, then $G(0)=G(\pm 2 \pi)$, which implies $$A=A \cosh 2 \pi \omega \pm B \sinh 2 \pi \omega$$ so that $A(\cosh 2 \pi \omega-1)=0$ and $B \sinh 2 \pi \omega=0$, giving $A=B=0$ and $G=0$.
###### ✅Case (ii) $\lambda=0$
- If $G^{\prime \prime}=0$, then $G(\theta)=A+B \theta$, where $A, B \in \mathbb{R}$.
- If $G$ is $2 \pi$-periodic, then $B=0$, but arbitrary $A$ is admissible.

For $\lambda=0, r^{2} F^{\prime \prime}+r F^{\prime}=0$, so $\left(r F^{\prime}\right)^{\prime}=0$, giving $r=c+d \log r$ for $r>0$, where $c, d \in \mathbb{R}$.

We conclude that for $\lambda=0$ there is a nontrivial, $2 \pi$-periodic, separable solution in $r>0$ of the form
$$
\large
T_{0}=A_{0}+B_{0} \log r
\quad\color{yellow}\text{(5.38)}
$$
where $A_{0}=c A$ and $B_{0}=d A$ are real constants. Since the solution $(5.38)$ is independent of $\theta$ it is called the *cylindrically-symmetric* solution of $(5.35)$.

###### ✅Case (iii) $\lambda=\omega^{2}$($\omega>0$ wlog)
- If $G^{\prime \prime}+\omega^{2} G=0$, then $G(\theta)=R \cos (\omega \theta+\Phi)$, where $R, \Phi \in \mathbb{R}$.

- If $G$ is nontrivial, then $R \neq 0$ and $G$ has prime period $p=2 \pi / \omega$. Hence, $G$ can only be nontrivial and $2 \pi$-periodic if there exists a positive integer $n$ such that $n p=2\pi$, i.e. $\omega=n$ for some positive integer $n$, which the graph of $G$ would reveal to be a geometrically obvious result.

In anticipation of the need to write the solution in the form of a Fourier series, we write the resulting solution for $\omega=n$ in the form $G(\theta)=A \cos n \theta+B \sin n \theta$, where $A=R \cos \Phi, B=-R \sin \Phi$ are arbitrary real constants.

If $\lambda=\omega^{2}=n^{2}$, then we obtain for $F(r)$ Euler's ODE in the form
$$
r^{2} F^{\prime \prime}+r F^{\prime}-n^{2} F=0 \text { for } r>0.
\quad\color{yellow}\text{(5.39)}
$$
We derive the general solution of this ODE by making the change of variable $r=e^{t}, F(r)=W(t) .$ By the chain rule,
$$
\frac{\mathrm{d} W}{\mathrm{~d} t}=\frac{\mathrm{d} F}{\mathrm{~d} r} \frac{\mathrm{d} r}{\mathrm{~d} t}=r \frac{\mathrm{d} F}{\mathrm{~d} r}
\quad\color{yellow}\text{(5.40)}
$$
so that
$$
\frac{\mathrm{d}^{2} W}{\mathrm{~d} t^{2}}=\frac{\mathrm{d}}{\mathrm{d} r}\left(r \frac{\mathrm{d} F}{\mathrm{~d} r}\right) \frac{\mathrm{d} r}{\mathrm{~d} t}=r \frac{\mathrm{d}}{\mathrm{d} r}\left(r \frac{\mathrm{d} F}{\mathrm{~d} r}\right)=r^{2} F^{\prime \prime}+r F^{\prime}=n^{2} F=n^{2} W
\quad\color{yellow}\text{(5.41)}
$$
Hence, $W=C e^{n t}+D e^{-n t}$, where $C, D \in \mathbb{R}$, and we conclude that the general solution for $F(r)$ is given by
$$
F(r)=C r^{n}+D r^{-n}
\quad\color{yellow}\text{(5.42)}
$$


We conclude that for $\lambda=\omega^{2}$ there are a countably infinite set of nontrivial, $2 \pi$ -periodic, separable solution in $r>0$ given for positive integers $n$ by
$$
T_{n}=\left(A_{n} r^{b}+B_{n} r^{-n}\right) \cos n \theta+\left(C_{n} r^{n}+D_{n} r^{-n}\right) \sin n \theta
\quad\color{yellow}\text{(5.43)}
$$
where $A_{n}=A C, B_{n}=A D, C_{n}=B C, D_{n}=B D$ are real constants and we have introduced the subscript $n$ on $T_{n}$ and these constants to enumerate the countably infinite set of such solutions.

Superimposing the nontrivial, separable solutions in $r>0$, namely $(5.38)$ and $(5.43)$, we obtain the general series solution
```
```
---

`5.44`$$T(r,\theta)=A_{0}+B_{0}\log r+\sum_{n=1}^{\infty}\left(\left(A_{n} r^{n}+B_{n} r^{-n}\right) \cos n \theta+\left(C_{n} r^{n}+D_{n} r^{-n}\right) \sin n \theta\right)$$^General-Series-Solution

---
```
```

```ad-warning
The solutions $\log r, r^{-n} \cos n \theta$ and $r^{-n} \sin n \theta$ are **unbounded** as $r \rightarrow 0+$, and hence ==not defined at $r=0$==. This means that these solutions are not admissible if the origin belongs to the domain in which $T$ is defined.
```

### Example 1
```ad-description
Consider the boundary value problem for $T$ given by
$$
\boldsymbol{\nabla}^{2} T=0 \quad \text { in } \quad a<r<b
$$
with
$$
T=T_{0}^{\star} \quad \text { on } \quad r=a, \quad T=T_{1}^{\star} \quad \text { on } \quad r=b
$$
where $a$ and $b$ are constant radii, while $T_{0}^{\star}$ and $T_{1}^{\star}$ are constant temperatures.
```
#### Solution
It follows from $(5.45)$ that the general series solution $(5.44)$ pertains, so that the boundary conditions (5.46) can only be satisfied if

---
$$
\begin{array}{l}
T_{0}^{\star}=A_{0}+B_{0} \log a+\sum_{n=1}^{\infty}\left(\left(A_{n} a^{n}+B_{n} a^{-n}\right) \cos n \theta+\left(C_{n} a^{n}+D_{n} a^{-n}\right) \sin n \theta\right) \\
T_{1}^{\star}=A_{0}+B_{0} \log b+\sum_{n=1}^{\infty}\left(\left(A_{n} b^{n}+B_{n} b^{-n}\right) \cos n \theta+\left(C_{n} b^{n}+D_{n} b^{-n}\right) \sin n \theta\right)
\end{array}
$$

---
for $-\pi<\theta \leq \pi$, say.
Since the Fourier coefficients of a Fourier series are unique, we can equate them on the left- and right-hand sides of these equalities to obtain, for positive integers $n$,
$$
\left[\begin{array}{cc}
1 & \log a \\
1 & \log b
\end{array}\right]\left[\begin{array}{l}
A_{0} \\
B_{0}
\end{array}\right]=\left[\begin{array}{c}
T_{0}^{\star} \\
T_{1}^{\star}
\end{array}\right], \quad\left[\begin{array}{ll}
a^{n} & a^{-n} \\
b^{n} & b^{-n}
\end{array}\right]\left[\begin{array}{l}
A_{n} \\
B_{n}
\end{array}\right]=\left[\begin{array}{l}
0 \\
0
\end{array}\right], \quad\left[\begin{array}{ll}
a^{n} & a^{-n} \\
b^{n} & b^{-n}
\end{array}\right]\left[\begin{array}{l}
C_{n} \\
D_{n}
\end{array}\right]=\left[\begin{array}{l}
0 \\
0
\end{array}\right],
$$
giving, since $a<b$,
$$
\left[\begin{array}{c}
A_{0} \\
B_{0}
\end{array}\right]=\frac{1}{\log \left(\frac{b}{a}\right)}\left[\begin{array}{cc}
\log b & -\log a \\
-1 & 1
\end{array}\right]\left[\begin{array}{l}
T_{0}^{\star} \\
T_{1}^{\star}
\end{array}\right], \quad\left[\begin{array}{l}
A_{n} \\
B_{n}
\end{array}\right]=\left[\begin{array}{l}
0 \\
0
\end{array}\right], \quad\left[\begin{array}{l}
C_{n} \\
D_{n}
\end{array}\right]=\left[\begin{array}{l}
0 \\
0
\end{array}\right]
$$
so that
$$
T=\frac{T_{0}^{\star} \log b-T_{1}^{\star} \log a}{\log (b / a)}+\frac{T_{1}^{\star}-T_{0}^{\star}}{\log \left(\frac{b}{a}\right)} \log r
\quad\color{yellow}\text{(5.51)}
$$
i.e. a *cylindrically symmetric solution*.
```ad-remark
The solution $(5.51)$ may be written in the form
$$
\frac{T}{T_{0}^{\star}}=\frac{\log (r / b)}{\log (a / b)}+\frac{T_{1}^{\star}}{T_{0}^{\star}} \frac{\log (r / a)}{\log (b / a)}
\quad\color{yellow}\text{(5.52)}
$$
Since all of the fractions in this expression are dimensionless, it is dimensionally correct.
```
```ad-remark
We could have sought a circularly-symmetric solution $T=T(r)$ from the outset because the boundary data is independent of $\theta$. However, the method above generalises to $T_{0}^{\star}$ and $T_{1}^{\star}$ being functions of $\theta$.
```

### Example 2
```ad-description
Consider the boundary value problem for $T$ given by
$$
\boldsymbol{\nabla}^{2} T=0 \quad \text { in } \quad r<a
\quad\color{yellow}\text{(5.53)}
$$
with
$$
T(a, \theta)=T^{\star} \sin ^{3} \theta \quad \text { for } \quad-\pi<\theta \leq \pi
\quad\color{yellow}\text{(5.54)}
$$
where $a$ is a constant radius and $T^{\star}$ is a constant temperature.
```

Since $T$ satisfies [[Laplace's equation]] in $r<a$, it must be twice differentiable with respect to $x$ and $y$ in a neighbourhood of the origin, and **therefore continuous and ==bounded== at the origin.**

Hence, the general series solution ![[#^General-Series-Solution]] pertains, but with $B_{0}=0$ and $B_{n}=D_{n}=0$ for positive integers $n$(`by boundedness`).

The boundary condition $(5.54)$ can only be satisfied if
$$
T^{\star} \sin ^{3} \theta=A_{n}+\sum_{n=1}^{\infty}\left(A_{n} a^{n} \cos n \theta+C_{n} a^{n} \sin n \theta\right) \quad \text { for } \quad-\pi<\theta \leq \pi
\quad\color{yellow}\text{(5.55)}
$$
Since the Fourier series for the left-hand side of this expression is given by the identity
$$
T^{\star} \sin ^{3} \theta=\frac{3 T^{\star}}{4} \sin \theta-\frac{T^{\star}}{4} \sin 3 \theta
\quad\color{yellow}\text{(5.56)}
$$
we can equate Fourier coefficients to deduce that
$$
C_{1} a=\frac{3 T^{\star}}{4}, C_{3} a^{3}=-\frac{T^{\star}}{4}
\quad\color{yellow}\text{(5.57)}
$$
while the remainder must vanish. Hence, a solution is given by

---
$$
T=\frac{3 T^{\star}}{4}\left(\frac{r}{a}\right) \sin \theta-\frac{T^{\star}}{4}\left(\frac{r}{a}\right)^{3} \sin 3 \theta.
\quad\color{yellow}\text{(5.58)}
$$
^Example2-Solution

---
```ad-question
>What is the heat flux out of the disc through $r=a$ ?

`Answer`	The heat flux vector $\boldsymbol{q}=-k \boldsymbol{\nabla} T$ (according to [[Fourier's Law]]) and we need the component in the direction of the outward pointing unit normal $\boldsymbol{n}=\boldsymbol{e}_{r}$ to the boundary $r=a$, namely
$$
\left.\boldsymbol{q} \cdot \boldsymbol{n}\right|_{r=a}=\left.(-k \boldsymbol{\nabla} T) \cdot \boldsymbol{e}_{r}\right|_{r=a}=-k \frac{\partial T}{\partial r}(a, \theta)=-k\left(\frac{3 T^{\star}}{4 a} \sin \theta-\frac{3 T^{\star}}{4 a} \sin 3 \theta\right)
$$
where in the last equality we substituted the solution $(5.58)$. Since there is no volumetric heating, the net heat flux though $r=a$ must vanish according to [[Steady 2-D Heat Conduction#Robin boundary condition]], i.e.
$$
\int_{r=a} \mathbf{q} \cdot \mathbf{n} \mathrm{d} s=0
$$
which may be verified by substituting for $(5.59)$ and integrating.
```