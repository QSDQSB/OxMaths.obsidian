# Gauss Quadrature
#NumericalAnalysis 

## Quadrature Formula
$$\int_{a}^{b} w(x) f(x) \mathrm{d} x \approx \sum_{j=0}^{n} w_{j} f\left(x_{j}\right) \quad\color{yellow}\text{(1)}$$

## Quadrature Weight
The [[Lagrange Interpolating Polynomial]]
$$
p_{n}=\sum_{j=0}^{n} f\left(x_{j}\right) L_{n, j} \in \Pi_{n}
$$
is unique, so $f \in \Pi_{n} \Longrightarrow p_{n} \equiv f$ whatever interpolation points are used, and moreover
$$
\int_{a}^{b} w(x) f(x) \mathrm{d} x=\int_{a}^{b} w(x) p_{n}(x) \mathrm{d} x=\sum_{j=0}^{n} w_{j} f\left(x_{j}\right)
$$
exactly, where
$$
\Large
w_{j}=\int_{a}^{b} w(x) L_{n, j}(x) \mathrm{d} x
\quad\color{yellow}\text{(2)}
$$
```ad-theorem
Suppose that $x_{0}<x_{1}<\cdots<x_{n}$ are the roots of the $n+1$-st degree [[Gram–Schmidt Orthogonalization Procedure|orthogonal polynomial]] $\phi_{n+1}$ with respect to the inner product
$$
\langle g, h\rangle=\int_{a}^{b} w(x) g(x) h(x) \mathrm{d} x .
$$
Then, the ==quadrature formula== (1) with ==weights== (2) is exact whenever $f \in \Pi_{2 n+1}$.
```
### Proof
Let $p \in \Pi_{2 n+1}$. Then by the Division Algorithm $p(x)=q(x) \phi_{n+1}(x)+r(x)$ with $q, r \in \Pi_{n}$. So
$$
\int_{a}^{b} w(x) p(x) \mathrm{d} x=\int_{a}^{b} w(x) q(x) \phi_{n+1}(x) \mathrm{d} x+\int_{a}^{b} w(x) r(x) \mathrm{d} x=\sum_{j=0}^{n} w_{j} r\left(x_{j}\right)
\quad\color{yellow}\text{(3)}
$$
since the integral involving $q \in \Pi_{n}$ is zero by the lemma above and the other is integrated exactly since $r \in \Pi_{n}$. Finally $p\left(x_{j}\right)=q\left(x_{j}\right) \phi_{n+1}\left(x_{j}\right)+r\left(x_{j}\right)=r\left(x_{j}\right)$ for $j=0,1, \ldots, n$ as the $x_{j}$ are the roots of $\phi_{n+1}$. So (3) gives
$$
\int_{a}^{b} w(x) p(x) \mathrm{d} x=\sum_{j=0}^{n} w_{j} p\left(x_{j}\right)
$$
where $w_{j}$ is given by (2) whenever $p \in \Pi_{2 n+1}$.

### Transformation of Interval
Note that by the linear change of variable $t=(2 x-a-b) /(b-a)$, which maps $[a, b] \rightarrow$ $[-1,1]$, we can evaluate for example
$$
\int_{a}^{b} f(x) \mathrm{d} x=\int_{-1}^{1} f\left(\frac{(b-a) t+b+a}{2}\right) \frac{b-a}{2} \mathrm{~d} t \simeq \frac{b-a}{2} \sum_{j=0}^{n} w_{j} f\left(\frac{b-a}{2} t_{j}+\frac{b+a}{2}\right)
$$


### Error in Gauss quadrature
Suppose that $f^{(2 n+2)}$ is continuous on $(a, b)$. Then
$$
\int_{a}^{b} w(x) f(x) \mathrm{d} x=\sum_{j=0}^{n} w_{j} f\left(x_{j}\right)+\frac{f^{(2 n+2)}(\eta)}{(2 n+2) !} \int_{a}^{b} w(x) \prod_{j=0}^{n}\left(x-x_{j}\right)^{2} \mathrm{~d} x
$$
for some $\eta \in(a, b)$.