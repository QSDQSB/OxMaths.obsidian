#ComplexAnalysis 

![[#^ComplexLogarithm]]
## Proposition 168
(a) Any $z \in \mathbb{C} \backslash(-\infty, 0]$ can be written as $z=r e^{i \theta}$ where $r>0, \theta \in(-\pi, \pi)$ in a unique fashion.
(b) The function $L: \mathbb{C} \backslash(-\infty, 0] \rightarrow \mathbb{C}$ given by

$$\Large L(z)=\log r+i \theta$$
^ComplexLogarithm

satisfies $\exp (L(z))=z$ and is [[Holomorphic]] with $L^{\prime}(z)=1 / z$.

### Proof
(a) follows from choosing $r=|z|$ and $\theta=\arg z$, which takes a unique principal value in the given range.
For (b) we firstly note that
$$
\exp (L(z))=e^{\log r} e^{i \theta}=r e^{i \theta}=z
$$
and that
$$
u(x, y)=\log \sqrt{x^{2}+y^{2}}=\frac{1}{2} \log \left(x^{2}+y^{2}\right) ; \quad v(x, y)=\tan ^{-1}(y / x)
$$
(at least when $x>0$ ). Then
$$
\begin{array}{l}
u_{x}=\frac{x}{x^{2}+y^{2}} ; \quad v_{y}=\frac{\frac{1}{x}}{1+\frac{y^{2}}{x^{2}}}=\frac{x}{x^{2}+y^{2}} \\
u_{y}=\frac{y}{x^{2}+y^{2}} ; \quad v_{x}=\frac{-\frac{y^{2}}{x^{2}}}{1+\frac{y^{2}}{x^{2}}}=\frac{-y}{x^{2}+y^{2}}
\end{array}
$$
So the [[Cauchy-Riemann equations]] are satisfied, and $u_{x}, u_{y}, v_{x}, v_{y}$ are clearly continuous, so by Proposition 148 we have that $L$ is [[Holomorphic]]. Further
$$
L^{\prime}(z)=u_{x}+i v_{x}=\frac{x-i y}{x^{2}+y^{2}}=\frac{1}{x+i y}=\frac{1}{z} .
$$
(Some care should really be taken with different formulas for argument separately for $y>0$ and $y<0$ but all the above follows in a near-identical fashion.)

```ad-note
Note that
$$
L(z w) \neq L(z)+L(w) \quad z, w \in \mathbb{C} \backslash(-\infty, 0]
$$
in general. In fact it might even be the case that $L(z w)$ is not defined (e.g. $z=w=i$ ) Or we may find cases like $z=w=e^{3 \pi i / 4}$ where
$$
L(z w)=-\pi i / 2 \neq 3 \pi i / 2=L(z)+L(w) .
$$
Of course what has happened is that zw has in effect moved into the domain of a different [[holomorphic]] [[branch]].
```

## Proposition 177
For $z, w, a, b \in \mathbb{C}$ with $z, w \neq 0$
1) $[\log z]+[\log w]=[\log (z w)]$;
2) $\left[z^{a}\right] \cdot\left[w^{a}\right]=\left[(z w)^{a}\right]$
3) in general $\left[z^{a}\right] \cdot\left[z^{b}\right]$ does not equal $\left[z^{a+b}\right]$.