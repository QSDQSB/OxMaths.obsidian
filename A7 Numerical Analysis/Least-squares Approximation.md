---
aliases: [best polynomial approximation, best approximation, Least-Squares Polynomimal Approximation]
---
# Least-squares Polynomial Approximation
#NumericalAnalysis 

## Description
Aim to find the [[Least-squares Approximation|best polynomial approximation]] to $f \in \mathrm{L}_{w}^{2}(a, b)$, i.e., find $p_{n} \in \Pi_{n}$ for which
$$
\left\|f-p_{n}\right\|_{2} \leq\|f-q\|_{2} \quad \forall q \in \Pi_{n} .
$$
Seeking $p_{n}$ in the form $p_{n}(x)=\sum_{k=0}^{n} \alpha_{k} x^{k}$ then results in the minimization problem
$$
\min _{\left(\alpha_{0}, \ldots, \alpha_{n}\right)} \int_{a}^{b} w(x)\left[f(x)-\sum_{k=0}^{n} \alpha_{k} x^{k}\right]^{2} \mathrm{~d} x
$$
## Prerequisite
### Cauchy-Schwarz inequality
Suppose that $V$ is an inner-product space with inner product $\langle\cdot, \cdot\rangle$ and [[Norm]] $\|\cdot\|$ defined by this inner product. For any $u, v \in V$,
$$
|\langle u, v\rangle| \leq\|u\|\|v\| .
$$
#### Proof
For every $\lambda \in \mathbb{R}$,
$$
0 \leq\langle u-\lambda v, u-\lambda v\rangle=\|u\|^{2}-2 \lambda\langle u, v\rangle+\lambda^{2}\|v\|^{2}=\phi(\lambda)
$$
which is a quadratic in $\lambda$. The minimizer of $\phi$ is at $\lambda_{*}=\langle u, v\rangle /\|v\|^{2}$, and thus since $\phi\left(\lambda_{*}\right) \geq 0,\|u\|^{2}-\langle u, v\rangle^{2} /\|v\|^{2} \geq 0$, which gives the required inequality.

### Triangle Inequality
Suppose that $V$ is an inner-product space with inner product $\langle\cdot, \cdot\rangle$ and [[Norm]] $\|\cdot\|$ defined by this inner product. For any $u, v \in V$,
$$
\|u+v\| \leq\|u\|+\|v\|
$$
#### Proof
Note that
$$
\|u+v\|^{2}=\langle u+v, u+v\rangle=\|u\|^{2}+2\langle u, v\rangle+\|v\|^{2} .
$$
Hence, by the [[#Cauchy-Schwarz inequality]],
$$
\|u+v\|^{2} \leq\|u\|^{2}+2\|u\|\|v\|+\|v\|^{2}=(\|u\|+\|v\|)^{2} .
$$
Taking square-roots yields
$$
\|u+v\| \leq\|u\|+\|v\|
$$

## Least-Squares Approximation
> For the problem of least-squares approximation, $\langle f, g\rangle=\int_{a}^{b} w(x) f(x) g(x) \mathrm{d} x$ and $\|f\|_{2}^{2}=$ $\langle f, f\rangle$ where $w(x)>0$ on $(a, b)$.

### Theorem: Least-Squares Approximations are Orthogonal 
If $f \in \mathrm{L}_{w}^{2}(a, b)$ and $p_{n} \in \Pi_{n}$ is such that
$$
\left\langle f-p_{n}, r\right\rangle=0 \quad \forall r \in \Pi_{n},
$$
then
$$
\left\|f-p_{n}\right\|_{2} \leq\|f-r\|_{2} \quad \forall r \in \Pi_{n}
$$
i.e., $p_{n}$ is a best (weighted) [[Least-squares Approximation]] to $f$ on $[a, b]$.

#### Proof
$$
\begin{aligned}
\left\|f-p_{n}\right\|_{2}^{2}=&\left\langle f-p_{n}, f-p_{n}\right\rangle \\
=&\left\langle f-p_{n}, f-r\right\rangle+\left\langle f-p_{n}, r-p_{n}\right\rangle \quad \forall r \in \Pi_{n} \\
& \text { Since } r-p_{n} \in \Pi_{n} \text { the assumption (1) implies that } \\
=&\left\langle f-p_{n}, f-r\right\rangle \\
\leq &\left\|f-p_{n}\right\|_{2}\|f-r\|_{2} \text { by the Cauchy-Schwarz inequality. }
\end{aligned}
$$
Dividing both sides by $\left\|f-p_{n}\right\|_{2}$ gives the required result.

```ad-note
By considering $\|f-(p+\epsilon q)\|^{2}$ where $\epsilon \in \mathbb{R}, q \in \Pi_{n}$, show that if $p \in \Pi_{n}$ is a best approximation to $f$ in this norm with associated inner product $\langle\cdot, \cdot\rangle$ then $\langle f-p, q\rangle=0$ for any $q \in \Pi_{n}$.
```

```ad-remark
find $p_{n}(x)=\sum_{k=0}^{n} \alpha_{k} x^{k}$ such that
$$\int_{a}^{b} w(x)\left(f-\sum_{k=0}^{n} \alpha_{k} x^{k}\right) x^{i} \mathrm{~d} x=0 \quad\text{for}\quad i=0,1, \ldots, n$$
```
### Normal Equations
The matrix equation
$$
\Large
A \alpha=\varphi,
$$
to determine the coefficients $\alpha=\left(\alpha_{0}, \alpha_{1}, \ldots, \alpha_{n}\right)^{\mathrm{T}}$, where $A=\left\{a_{i, k}, i, k=0,1, \ldots, n\right\}$, $\varphi=\left(f_{0}, f_{1}, \ldots, f_{n}\right)^{\mathrm{T}}$
$$
\Large
a_{i, k}=\int_{a}^{b} w(x) x^{k+i} \mathrm{~d} x \text { and } f_{i}=\int_{a}^{b} w(x) f(x) x^{i} \mathrm{~d} x
$$

### Theorem: Uniqueness of Least-Square Approximation
>The coefficient matrix $A$ is nonsingular.
#### Proof
Suppose not $\Longrightarrow \exists \alpha \neq 0$ with $A \alpha=0 \Longrightarrow \alpha^{\mathrm{T}} A \alpha=0$
$$
\Longleftrightarrow \sum_{i=0}^{n} \alpha_{i}(A \alpha)_{i}=0 \Longleftrightarrow \sum_{i=0}^{n} \alpha_{i} \sum_{k=0}^{n} a_{i k} \alpha_{k}=0
$$
and using the definition $a_{i k}=\int_{a}^{b} w(x) x^{k} x^{i} \mathrm{~d} x$
$$
\Longleftrightarrow \sum_{i=0}^{n} \alpha_{i} \sum_{k=0}^{n}\left(\int_{a}^{b} w(x) x^{k} x^{i} \mathrm{~d} x\right) \alpha_{k}=0
$$
Rearranging gives
$$
\int_{a}^{b} w(x)\left(\sum_{i=0}^{n} \alpha_{i} x^{i}\right)\left(\sum_{k=0}^{n} \alpha_{k} x^{k}\right) \mathrm{d} x=0 \text { or } \int_{a}^{b} w(x)\left(\sum_{i=0}^{n} \alpha_{i} x^{i}\right)^{2} \mathrm{~d} x=0
$$
which implies that $\sum_{i=0}^{n} \alpha_{i} x^{i}=0$ and thus $\alpha_{i}=0$ for $i=0,1, \ldots, n$. This contradicts the initial supposition, and thus $A$ is nonsingular.