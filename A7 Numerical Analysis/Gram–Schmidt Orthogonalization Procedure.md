---
aliases: [orthogonal polynomials, orthogonal polynomial]
---
# Gram–Schmidt Orthogonalization Procedure
#NumericalAnalysis 
## Description
the solution of the [[Least-squares Approximation#Normal Equations|normal equations]] $A \alpha=\varphi$ for best [[Least-squares Approximation|Least-Squares Polynomimal Approximation]] would be easy if $A$ were **diagonal**.

Instead of $\left\{1, x, x^{2}, \ldots, x^{n}\right\}$ as a basis for $\Pi_{n}$, suppose we have a basis $\left\{\phi_{0}, \phi_{1}, \ldots, \phi_{n}\right\}$.
Then $p_{n}(x)=\sum_{k=0}^{n} \beta_{k} \phi_{k}(x)$, and the normal equations become
$$
\int_{a}^{b} w(x)\left(f(x)-\sum_{k=0}^{n} \beta_{k} \phi_{k}(x)\right) \phi_{i}(x) \mathrm{d} x=0 \text { for } i=0,1, \ldots, n
$$
So $A$ is diagonal if
$$
\left\langle\phi_{i}, \phi_{k}\right\rangle=\int_{a}^{b} w(x) \phi_{i}(x) \phi_{k}(x) \mathrm{d} x\left\{\begin{array}{ll}
=0 & i \neq k \\
\neq 0 & i=k
\end{array}\right. \text { and }
$$
We can create such a set of orthogonal polynomials
$$
\left\{\phi_{0}, \phi_{1}, \ldots, \phi_{n}, \ldots\right\},
$$
with $\phi_{i} \in \Pi_{i}$ for each $i$, by the Gram-Schmidt procedure, which is based on the following lemma.

### Lemma
Suppose that $\phi_{0}, \ldots, \phi_{k}$, with $\phi_{i} \in \Pi_{i}$ for each $i$, are orthogonal with respect to the inner product $\langle f, g\rangle=\int_{a}^{b} w(x) f(x) g(x) \mathrm{d} x$. Then,
$$
\phi_{k+1}(x)=x^{k+1}-\sum_{i=0}^{k} \lambda_{i} \phi_{i}(x)
$$
satisfies
$$
\large
\begin{array}{c}
\left\langle\phi_{k+1}, \phi_{j}\right\rangle=\int_{a}^{b} w(x) \phi_{k+1}(x) \phi_{j}(x) \mathrm{d} x=0, j=0,1, \ldots, k, \quad \text { with } \\
\lambda_{j}=\frac{\left\langle x^{k+1}, \phi_{j}\right\rangle}{\left\langle\phi_{j}, \phi_{j}\right\rangle}, \quad j=0,1, \ldots, k .
\end{array}
$$

```ad-note
1. The G-S procedure does this successively for $k=0,1, \ldots, n$.
2. $\phi_{k}$ is always of exact degree $k$, so $\left\{\phi_{0}, \ldots, \phi_{\ell}\right\}$ is a basis for $\Pi_{\ell}$, $\forall \ell \geq 0$.
3. $\phi_{k}$ can be normalised to satisfy $\left\langle\phi_{k}, \phi_{k}\right\rangle=1$ or to be monic, or $\ldots$
```

```ad-example
#### Legendre polynomials
The inner product $\color{orange}\langle f, g\rangle=\int_{-1}^{1} f(x) g(x) \mathrm{d} x$ gives orthogonal polynomials called the Legendre polynomials,
$$
\phi_{0}(x) \equiv 1, \quad \phi_{1}(x)=x, \quad \phi_{2}(x)=x^{2}-\frac{1}{3}, \quad \phi_{3}(x)=x^{3}-\frac{3}{5} x, \ldots
$$

#### Chebyshev polynomials
The inner product $\color{orange}\langle f, g\rangle=\int_{-1}^{1} \frac{f(x) g(x)}{\sqrt{1-x^{2}}} \mathrm{~d} x$ gives orthogonal polynomials called the Chebyshev polynomials,
$$
\phi_{0}(x) \equiv 1, \quad \phi_{1}(x)=x, \quad \phi_{2}(x)=2 x^{2}-1, \quad \phi_{3}(x)=4 x^{3}-3 x, \ldots
$$

#### Laguerre polynomials
The inner product $\color{orange}\langle f, g\rangle=\int_{0}^{\infty} \mathrm{e}^{-x} f(x) g(x) \mathrm{d} x$ gives orthogonal polynomials called the Laguerre polynomials,
$$
\begin{array}{c}
\phi_{0}(x) \equiv 1, \quad \phi_{1}(x)=1-x, \quad \phi_{2}(x)=2-4 x+x^{2}, \\
\phi_{3}(x)=6-18 x+9 x^{2}-x^{3}, \ldots
\end{array}
$$
```

### Lemma: Orthogonality for Every Degree < n
Suppose that $\left\{\phi_{0}, \phi_{1}, \ldots, \phi_{k}, \ldots\right\}$ are orthogonal polynomials for a given inner product $\langle\cdot, \cdot\rangle$. Then, $\left\langle\phi_{k}, q\right\rangle=0$ whenever $q \in \Pi_{k-1}$.
#### Proof
This follows since if $q \in \Pi_{k-1}$, then $q(x)=\sum_{i=0}^{k-1} \sigma_{i} \phi_{i}(x)$ for some $\sigma_{i} \in \mathbb{R}, i=$ $0,1, \ldots, k-1$, so
$$
\left\langle\phi_{k}, q\right\rangle=\sum_{i=0}^{k-1} \sigma_{i}\left\langle\phi_{k}, \phi_{i}\right\rangle=0
$$

### Lemma: K distinct Roots in Interval
Let $\left\{\phi_{0}, \phi_{1}, \ldots, \phi_{n}, \ldots\right\}$ be orthogonal polynomials for the inner product $\langle f, g\rangle=$ $\int_{a}^{b} w(x) f(x) g(x) \mathrm{d} x$. Then, for each $k=0,1, \ldots, \phi_{k}$ has $k$ distinct roots in the interval $(a,b)$.
#### Proof
Since $\phi_{0}(x) \equiv$ const. $\neq 0$, the result is trivially true for $k=0$. Suppose that $k \geq 1$ : $\left\langle\phi_{k}, \phi_{0}\right\rangle=\int_{a}^{b} w(x) \phi_{k}(x) \phi_{0}(x) \mathrm{d} x=0$ with $\phi_{0}$ constant implies that $\int_{a}^{b} w(x) \phi_{k}(x) \mathrm{d} x=0$ with $w(x)>0, x \in(a, b)$. Thus $\phi_{k}(x)$ must change sign in $(a, b)$, i.e., $\phi_{k}$ has at least one root in $(a, b)$.

Suppose that there are $\ell$ points $a<r_{1}<r_{2}<\cdots<r_{\ell}<b$ where $\phi_{k}$ changes sign for some $1 \leq \ell \leq k$. Then
$$
q(x)=\prod_{j=1}^{\ell}\left(x-r_{j}\right) \times \text { the sign of } \phi_{k} \text { on }\left(r_{\ell}, b\right)
$$
has the same sign as $\phi_{k}$ on $(a, b)$. Hence
$$
\left\langle\phi_{k}, q\right\rangle=\int_{a}^{b} w(x) \phi_{k}(x) q(x) \mathrm{d} x>0,
$$
and thus it follows from the previous lemma (cf. Lecture 12) that $q$, (which is of degree $\ell)$ must be of degree $\geq k$, i.e., $\ell \geq k$. However, $\phi_{k}$ is of exact degree $k$, and therefore the number of its distinct roots, $\ell$, must be $\leq k$. Hence $\ell=k$, and $\phi_{k}$ has $k$ distinct roots in $(a, b)$