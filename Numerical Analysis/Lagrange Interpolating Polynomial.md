---
aliases: [interpolating polynomial]
tags: [NumericalAnalysis]
---

## Existence 
$\exists p_{n} \in \Pi_{n}$ such that $p_{n}\left(x_{i}\right)=f_{i}$ for $i=0,1, \ldots, n$.
### Proof
Consider, for $k=0,1, \ldots, n$, the "cardinal polynomial"
$$
L_{n, k}(x)=\frac{\left(x-x_{0}\right) \cdots\left(x-x_{k-1}\right)\left(x-x_{k+1}\right) \cdots\left(x-x_{n}\right)}{\left(x_{k}-x_{0}\right) \cdots\left(x_{k}-x_{k-1}\right)\left(x_{k}-x_{k+1}\right) \cdots\left(x_{k}-x_{n}\right)} \in \Pi_{n} .
$$
Then $\Large L_{n, k}\left(x_{i}\right)=\delta_{i k}$, that is,
$$
L_{n, k}\left(x_{i}\right)=0 \text { for } i=0, \ldots, k-1, k+1, \ldots, n \text { and } L_{n, k}\left(x_{k}\right)=1 \text {. }
$$
So now define

$$
\Large
p_{n}(x)=\sum_{k=0}^{n} f_{k} L_{n, k}(x) \in \Pi_{n}
$$
^Lagrange-polynomial

## Uniqueness
The [[Lagrange Interpolating Polynomial|interpolating polynomial]] of degree $\leq n$ is unique.
### Proof
Consider two interpolating polynomials $p_{n}, q_{n} \in \Pi_{n}$. Their difference $d_{n}=p_{n}-q_{n} \in$ $\Pi_{n}$ satisfies $d_{n}\left(x_{k}\right)=0$ for $k=0,1, \ldots, n$. i.e., $d_{n}$ is a polynomial of degree at most $n$ but has at least $n+1$ distinct roots. Algebra $\Longrightarrow d_{n} \equiv 0 \Longrightarrow p_{n}=q_{n}$.

## Error
Suppose that $f(x)$ has at least $n+1$ smooth derivatives in the interval $\left(x_{0}, x_{n}\right)$. Let $f_{k}=f\left(x_{k}\right)$ for $k=0,1, \ldots, n$, and let $p_{n}$ be the [[Lagrange interpolating polynomial]] for the data $\left(x_{k}, f_{k}\right), k=0,1, \ldots, n$.
How large can the ==error== $f(x)-p_{n}(x)$ be on the interval $\left[x_{0}, x_{n}\right]$ ?

```ad-theorem

title: Theorem: Error of Lagrange Polynomial
For every $x \in\left[x_{0}, x_{n}\right]$ there exists $\xi=\xi(x) \in\left(x_{0}, x_{n}\right)$ such that
$$
e(x) \stackrel{\text { def }}{=} f(x)-p_{n}(x)=\left(x-x_{0}\right)\left(x-x_{1}\right) \cdots\left(x-x_{n}\right) \frac{f^{(n+1)}(\xi)}{(n+1) !}
$$
where $f^{(n+1)}$ is the $(n+1)$-st derivative of $f$.
```
### Proof
Trivial for $x=x_{k}, k=0,1, \ldots, n$ as $e(x)=0$ by construction.
So suppose $x \neq x_{k}$. Let
$$
\phi(t) \stackrel{\text { def }}{=} e(t)-\frac{e(x)}{\pi(x)} \pi(t)
$$
where
$$
\begin{aligned}
\pi(t) & \stackrel{\text { def }}{=}\left(t-x_{0}\right)\left(t-x_{1}\right) \cdots\left(t-x_{n}\right) \\
&=t^{n+1}-\left(\sum_{i=0}^{n} x_{i}\right) t^{n}+\cdots(-1)^{n+1} x_{0} x_{1} \cdots x_{n} \\
& \in \Pi_{n+1}
\end{aligned}
$$
Now note that $\phi$ vanishes at $n+2$ points $x$ and $x_{k}, k=0,1, \ldots, n . \Longrightarrow \phi^{\prime}$ vanishes at $n+1$ points $\xi_{0}, \ldots, \xi_{n}$ between these points $\Longrightarrow \phi^{\prime \prime}$ vanishes at $n$ points between these new points, and so on until $\phi^{(n+1)}$ vanishes at an (unknown) point $\xi$ in $\left(x_{0}, x_{n}\right)$. But
$$
\phi^{(n+1)}(t)=e^{(n+1)}(t)-\frac{e(x)}{\pi(x)} \pi^{(n+1)}(t)=f^{(n+1)}(t)-\frac{e(x)}{\pi(x)}(n+1) !
$$
since $p_{n}^{(n+1)}(t) \equiv 0$ and because $\pi(t)$ is a monic polynomial of degree $n+1$. The result then follows immediately from this identity since $\phi^{(n+1)}(\xi)=0$.