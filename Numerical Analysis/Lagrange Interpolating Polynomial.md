---
aliases: [interpolating polynomial]
---
# Lagrange Interpolating Polynomial
#NumericalAnalysis

## Lagrange Interpolating Polynomial
### Existence 
$\exists p_{n} \in \Pi_{n}$ such that $p_{n}\left(x_{i}\right)=f_{i}$ for $i=0,1, \ldots, n$.
#### Proof
Consider, for $k=0,1, \ldots, n$, the "cardinal polynomial"
$$
L_{n, k}(x)=\frac{\left(x-x_{0}\right) \cdots\left(x-x_{k-1}\right)\left(x-x_{k+1}\right) \cdots\left(x-x_{n}\right)}{\left(x_{k}-x_{0}\right) \cdots\left(x_{k}-x_{k-1}\right)\left(x_{k}-x_{k+1}\right) \cdots\left(x_{k}-x_{n}\right)} \in \Pi_{n} .
$$
Then $L_{n, k}\left(x_{i}\right)=\delta_{i k}$, that is,
$$
L_{n, k}\left(x_{i}\right)=0 \text { for } i=0, \ldots, k-1, k+1, \ldots, n \text { and } L_{n, k}\left(x_{k}\right)=1 \text {. }
$$
So now define

$$
\Large
p_{n}(x)=\sum_{k=0}^{n} f_{k} L_{n, k}(x) \in \Pi_{n}
$$
^Lagrange-polynomial

### Uniqueness
The [[Lagrange Interpolating Polynomial|interpolating polynomial]] of degree $\leq n$ is unique.
#### Proof
Consider two interpolating polynomials $p_{n}, q_{n} \in \Pi_{n}$. Their difference $d_{n}=p_{n}-q_{n} \in$ $\Pi_{n}$ satisfies $d_{n}\left(x_{k}\right)=0$ for $k=0,1, \ldots, n$. i.e., $d_{n}$ is a polynomial of degree at most $n$ but has at least $n+1$ distinct roots. Algebra $\Longrightarrow d_{n} \equiv 0 \Longrightarrow p_{n}=q_{n}$.

## Error
Suppose that $f(x)$ has at least $n+1$ smooth derivatives in the interval $\left(x_{0}, x_{n}\right)$. Let $f_{k}=f\left(x_{k}\right)$ for $k=0,1, \ldots, n$, and let $p_{n}$ be the [[Lagrange interpolating polynomial]] for the data $\left(x_{k}, f_{k}\right), k=0,1, \ldots, n$.
How large can the ==error== $f(x)-p_{n}(x)$ be on the interval $\left[x_{0}, x_{n}\right]$ ?