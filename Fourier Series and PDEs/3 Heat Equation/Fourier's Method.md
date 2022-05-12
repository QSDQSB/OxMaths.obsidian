## Fourier's Method
#FSPDE  #MostCrucial

Consider the initial boundary value problem for the `temperature` $T(x, t)$ in a metal rod of `length` $L$ given by the heat equation
$$
\frac{\partial T}{\partial t}=\kappa \frac{\partial^{2} T}{\partial x^{2}} \text { for } 0<x<L, t>0, \color{yellow} \quad\text{(3.29)}
$$
^3-29

with the [[Dirichlet boundary condition]]
$$
T(0, t)=0, \quad T(L, t)=0 \quad \text { for } \quad t>0 \color{yellow} \quad\text{(3.30)}
$$
^3-30

and the initial condition
$$
T(x, 0)=f(x) \quad \text { for } \quad 0<x<L \color{yellow} \quad\text{(3.31)}
$$
^3-31

where the initial temperature profile $f(x)$ is given.

---
 `Fourier's Method`
1) Use the method of separation of variables to find the countably infinite set of nontrivial separable solutions satisfying the partial differential equation ![[#^3-29]] and boundary conditions ![[#^3-30]], each containing an arbitrary constant.
2) Use the ***principle of superposition*** - that the sum of any number of solutions of a linear problem is also a solution (assuming convergence) - to form the general series solution that is the infinite sum of the separable solutions.
3) Use the theory of [[Fourier series]] to determine the constants in the general series solution for which it satisfies the initial condition ![[#^3-31]]

---
### Step (I) Find all nontrivial separable solutions of the PDE and BCs
- We begin by seeking a nontrivial separable solution of the form $T=F(x) G(t)$ for which the partial differential equation ![[#^3-29]] gives
$$
F(x) G^{\prime}(t)=\kappa F^{\prime \prime}(x) G(t),
$$
- Separating the variables by assuming $F(x) G(t) \neq 0$ therefore gives
$$
\frac{F^{\prime \prime}(x)}{F(x)}=\frac{G^{\prime}(t)}{\kappa G(t)}
\color{yellow} \quad\text{(3.32)}
$$
- The left-hand side of this expression is independent of $t$, while the right-hand side is independent of $x$. Since the left-hand side is equal to the right-hand side, they must both be independent of $x$ and $t$, and therefore equal to a constant, $-\lambda \in \mathbb{R}$ say.
- The boundary condition at $x=0$ implies that $F(0) G(t)=0$ for $t>0 .$ Since we're seeking solutions $T$ that are nontrivial (i.e. not identically equal to zero), there must exist a time $t>0$ such that $G(t) \neq 0$, and hence we must impose on $F(x)$ the boundary condition $F(0)=0$. Similarly, the boundary condition at $x=L$ implies that $F(L)=0$.
- In summary, we have deduced that $F(x)$ satisfies the boundary value problem given by the ordinary differential equation
$$
-F^{\prime \prime}(x)=\lambda F(x) \text { for } \quad 0<x<L
\color{yellow} \quad\text{(3.33)}
$$
with the boundary conditions
$$
F(0)=0, \quad F(L)=0,
\color{yellow} \quad\text{(3.34)}
$$
where $\lambda \in \mathbb{R}$.
- Now we need to find all $\lambda \in \mathbb{R}$ such that the boundary value problem $(3.33)-(3.34)$ for $F(x)$ has a nontrivial solution.
- Since the general solution of $(3.33)$ is different for (i) $\lambda<0$, (ii) $\lambda=0$ and (iii) $\lambda>0$, there are three cases to consider.
	1) `Case (i)`: $\lambda=-\omega^{2}(\omega>0$ wlog $)$
		If $F^{\prime \prime}-\omega^{2} F=0$, then $F(x)=A \cosh (\omega x)+B \sinh (\omega x)$, where $A, B \in \mathbb{R}$
		The boundary conditions (3.34) then require $A=0, B \sinh (\omega L)=0$, so that $F=0$.
	2) `Case (ii)`: $\lambda=0$
		If $F^{\prime \prime}=0$, then $F(x)=A+B x$, where $A, B \in \mathbb{R}$
		The boundary conditions (3.34) then require $A=0, B L=0$, so that $F=0$.
	3) `Case (iii)`: $\lambda=\omega^{2}(\omega>0$ wlog $)$
		If $F^{\prime \prime}+\omega^{2} F=0$, then $F(x)=A \cos (\omega x)+B \sin (\omega x)$, where $A, B \in \mathbb{R}$.
		The boundary conditions $(3.34)$ then require $A=0, B \sin (\omega L)=0$.
		Since $B \neq 0$ for nontrivial $F$, we must have $\sin \omega L=0$, i.e. $\omega L=n \pi$ for some $n \in \mathbb{N} \backslash\{0\}$.
		
	Hence, the nontrivial solutions of the BVP (3.33)-(3.34) are given for positive integers $n$ by
		$$F(x)=B \sin \left(\frac{n \pi x}{L}\right), \quad \lambda=\frac{n^{2} \pi^{2}}{L^{2}}\color{yellow} \quad\text{(3.35)}
$$ where $B$ is an arbitrary constant.
		Since $G(t)$ satisfies the ordinary differential equation $G^{\prime}=-\lambda \kappa G$, we deduce that
$$
G(t)=C \exp (-\lambda \kappa t) \color{yellow} \quad\text{(3.36)}
$$
where $C \in \mathbb{R}$.
Since $T(x, t)=F(x) G(t)$, we conclude that the nontrivial separable solutions of the heat equation (3.29) that satisfy the boundary conditions (3.30) are given by
$$
T_{n}(x, t)=b_{n} \sin \left(\frac{n \pi x}{L}\right) \exp \left(-\frac{n^{2} \pi^{2} \kappa t}{L^{2}}\right)
\color{yellow} \quad\text{(3.37)}
$$
where $n$ is a positive integer, $b_{n}$ is a constant (equal to $B C$ above) and we have introduced the subscript $n$ on $T_{n}$ and $b_{n}$ to enumerate the countably infinite set of such solutions.

### Step (II) Apply the principle of superposition
Since $(3.29)-(3.30)$ are linear, a formal application of the [[ principle of superposition]] implies that the general series solution is given by
$$
T(x, t)=\sum_{n=1}^{\infty} T_{n}(x, t)=\sum_{n=1}^{\infty} b_{n} \sin \left(\frac{n \pi x}{L}\right) \exp \left(-\frac{n^{2} \pi^{2} \kappa t}{L^{2}}\right) . \color{yellow} \quad\text{(3.38)}
$$

### Step (III) Use the theory of Fourier series to satisfy the IC
The initial condition (3.31) can only be satisfied by the general series solution (3.38) if
$$
f(x)=T(x, 0)=\sum_{n=1}^{\infty} b_{n} \sin \left(\frac{n \pi x}{L}\right) \text { for } 0<x<L \color{yellow} \quad\text{(3.39)}
$$
so that we need to find the Fourier sine series for $f$ on $[0, L]$
The theory of Fourier series implies that the Fourier coefficients $b_{n}$ are given by
$$
b_{n}=\frac{2}{L} \int_{0}^{L} f(x) \sin \left(\frac{n \pi x}{L}\right) \mathrm{d} x \text { for } n \in \mathbb{N} \backslash\{0\}\color{yellow} \quad\text{(3.40)}
$$
Hence, we have derived a solution in the form of an infinite trigonometric series.

```ad-note
Since $T_{n}(x, t)$ decays **exponentially** as $n \rightarrow \infty$ for $t>0$, comparison methods from Analysis II may be used to show that if the Fourier coefficients $b_{n}$ are merely bounded for all $n$, then the general series solution (3.38) has partial derivatives of all orders for $t>0$ that may be computed by term-byterm differentiation. It follows from the [[Fourier convergence theorem]] that if $f$ and $f^{\prime}$ are piecewise continuous on $(0, L)$, then the infinite series solution given by $(3.38)$ and $(3.40)$ is indeed a solution of the initial boundary value problem $(3.29)-(3.31)$. Thus, Fourier's method can accommodate even jump discontinuities in the initial temperature profile, the heat equation acting to instantaneously "smooth" them out.
```

```ad-warning
If the initial temperature profile has a **jump discontinuity**, then the truncated series solution for $T(x, t)$ will exhibit [[Gibb's phenomenon]] at $t=0$, and hence at sufficiently small times $t \ll L^{2} / \kappa$ by continuity. In principle this deficiency can be avoided at some fixed $t>0$ by keeping enough terms. In contrast, the exponential decay of $T_{n}(x, t)$ with $n^{2} \kappa t / L^{2}$ means that the solution will be well approximated by the leading-term $T_{1}(x, t)$ at sufficiently long times $t \gg L^{2} / \kappa$.
```


---

```ad-warning
[[Fourier's Method]] does not work when dealing with a `constant boundary temperature` scenario. In this case we need to shift the data:

![[Heat Equation with Non-Zero Temperature Conditions]]
```