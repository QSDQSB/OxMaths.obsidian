## Poisson's Integral Formula
#FSPDE 

---
![[#^Poisson-Formula]]

---

```ad-description
Consider the boundary value problem for $T$ given by
$$
\boldsymbol{\nabla}^{2} T=0 \quad \text { in } \quad r<a
$$
with
$$
T(a, \theta)=f(\theta) \quad \text { for } \quad-\pi<\theta \leq \pi,
\quad\color{yellow}\text{(5.62)}
$$
where $a$ is a constant radius and the temperature profile $f$ is given.
```
#### Answer
![[#^Series-Solution]]![[#^Fourier-Coefficients]]

#### Solution
As in [[Laplace's BVP in Polar Coordinates#Example 2]], the general series solution is given by ![[Laplace's BVP in Polar Coordinates#^General-Series-Solution]] but with $B_{0}=0$ and $B_{n}=D_{n}=0$ for positive integers $n$.

Replacing $A_{0}$ with $A_{0} / 2$ for algebraic convenience, we have

---
$$
T(r, \theta)=\frac{A_{0}}{2}+\sum_{n=1}^{\infty}\left(A_{n} r^{n} \cos n \theta+C_{n} r^{n} \sin n \theta\right) .
\quad\color{yellow}\text{(5.63)}
$$
^Series-Solution

---

The boundary condition (5.62) can only be satisfied if
$$
f(\phi)=\frac{A_{0}}{2}+\sum_{n=1}^{\infty}\left(A_{n} a^{n} \cos (n \phi)+C_{n} a^{n} \sin (n \phi)\right) \text { for }-\pi<\phi \leq \pi
\quad\color{yellow}\text{(5.64)}
$$
where we replaced the dummy variable $\theta$ with $\phi$ in anticipation of the following analysis.
The theory of Fourier series then gives the Fourier coefficients

---
$$
\begin{array}{l}
a^{n} A_{n}=\frac{1}{\pi} \int_{-\pi}^{\pi} f(\phi) \cos (n \phi) \mathrm{d} \phi \quad&\text { for } n \in \mathbb{N}, 
&\quad\color{yellow}\text{(5.65)}
\\
a^{n} C_{n}=\frac{1}{\pi} \int_{-\pi}^{\pi} f(\phi) \sin (n \phi) \mathrm{d} \phi \quad&\text { for } n \in \mathbb{N} \backslash\{0\} .
&\quad\color{yellow}\text{(5.66)}
\end{array}
$$
^Fourier-Coefficients

---
>While these integral expressions can evaluated in simple cases (such as in Example 2), it is a remarkable fact that the series solution may be summed for a wide class of functions $f$ (namely those that are sufficiently regular that the following analysis is valid).

We being by substituting the [[#^Fourier-Coefficients]] into the [[#^Series-Solution]] and ==assuming that the orders of summation and integration may be interchanged==, $v i z$
$$
\small
\begin{aligned}
T(r, \theta) &=\frac{1}{2 \pi} \int_{-\pi}^{\pi} f(\phi) \mathrm{d} \phi+\sum_{n=1}^{\infty}\left(\frac{1}{\pi} \int_{-\pi}^{\pi}\left(\frac{r}{a}\right)^{n}[\cos (n \theta) \cos (n \phi)+\sin (n \theta) \sin (n \phi)] f(\phi) \mathrm{d} \phi\right) \\
&=\frac{1}{\pi} \int_{-\pi}^{\pi}\left(\frac{1}{2}+\sum_{n=1}^{\infty}\left(\frac{r}{a}\right)^{n} \cos n(\theta-\phi)\right) f(\phi) \mathrm{d} \phi .
\quad\color{yellow}\text{(5.67)}
\end{aligned}
$$

Let $\alpha=\theta-\phi$ and $z=\frac{r}{a} \mathrm{e}^{\mathrm{i}\alpha}$, then
$$
\small
\begin{aligned}
\frac{1}{2}+\sum_{n=1}^{\infty}\left(\frac{r}{a}\right)^{n} \cos n \alpha &=\operatorname{Re}\left(\frac{1}{2}+\sum_{n=1}^{\infty}\left(\frac{r}{a}\right)^{n} \mathrm{e}^{\mathrm{i} n \alpha}\right) \\
&=\operatorname{Re}\left(\frac{1}{2}+\sum_{n=1}^{\infty} z^{n}\right) \\
&=\operatorname{Re}\left(\frac{1}{2} \frac{1+z}{1-z}\right) \\
&=\operatorname{Re}\left(\frac{1}{2} \frac{a+r \mathrm{e}^{\mathrm{i} \alpha}}{a-r \mathrm{e}^{\mathrm{i} \alpha}}\right) \\
&=\operatorname{Re}\left(\frac{1}{2} \frac{(a+r \cos \alpha+\mathrm{i} r \sin \alpha)(a-r \cos \alpha+\mathrm{i} r \sin \alpha)}{(a-r \cos \alpha-\mathrm{i} r \sin \alpha)(a-r \cos \alpha+\mathrm{i} r \sin \alpha)}\right) \\
&=\frac{1}{2} \frac{(a+r \cos \alpha)(a-r \cos \alpha)+(\mathrm{i} r \sin \alpha)^{2}}{(a-r \cos \alpha)^{2}+(r \sin \alpha)^{2}} \\
&=\frac{a^{2}-r^{2}}{2\left(a^{2}-2 a r \cos \alpha+r^{2}\right)}
\quad\color{yellow}\text{(5.68)}
\end{aligned}
$$
where the summation of the geometric series in the third equality is valid for $|z|<1$, i.e. $0 \leq r<a$.

Substituting $(5.68)$ into $(5.67)$, we obtain [[Poisson's Integral Formula]] in the form

$$
T(r, \theta)=\frac{\left(a^{2}-r^{2}\right)}{2 \pi} \int_{-\pi}^{\pi} \frac{f(\phi) \mathrm{d} \phi}{a^{2}-2 a r \cos (\theta-\phi)+r^{2}}
$$
^Poisson-Formula

which is valid for $0 \leq r<a$.

```ad-note
The value of $T$ at the centre of the disc is given by
$$
T(0, \theta)=\frac{1}{2 \pi} \int_{0}^{2 \pi} f(\phi) \mathrm{d} \phi
\quad\color{yellow}\text{(5.70)}
$$
which is the **mean value** of $T$ over the boundary.
```

```ad-remark
More generally, we can now see that if $T$ satisfies [[Laplace's equation]] in some region $R$ and if $D(x, y, a)$ is a disk inside $R$ with centre $(x, y)$ and radius $a$, then
$$
T(x, y)=\frac{1}{2 \pi a} \int_{\partial D(x, y, a)} T \mathrm{~d} s
$$
where $\partial D(x, y, a)$ is the boundary of $D(x, y, a)$ and ==$\mathrm{d} s$== an element of *arclength*. That the *`mean value over a circle is equal to its value at the centre`* is called the ==mean-value property of Laplace's equation== and has important consequences.

For example, it explains why solutions of Laplace's equation are infinitely differentiable, since local averages over a circle vary smoothly as the circle moves.
[[Mean-Value Property of Laplace's Equation]]
```