# Hermite Interpolating Polynomial
#NumericalAnalysis 
```ad-question
Given data $f_{i}$ and $g_{i}$ at distinct $x_{i}, i=0,1, \ldots, n$, with $x_{0}<x_{1}<$ $\cdots<x_{n}$, find a polynomial $p$ such that $p\left(x_{i}\right)=f_{i}$ and $p^{\prime}\left(x_{i}\right)=g_{i}$.
```
```ad-theorem
There is a unique polynomial $p_{2 n+1} \in \Pi_{2 n+1}$ such that $p_{2 n+1}\left(x_{i}\right)=f_{i}$ and $p_{2 n+1}^{\prime}\left(x_{i}\right)=g_{i}$ for $i=0,1, \ldots, n$.
```


### Construction
Given $L_{n, k}(x)$ in $(1)$, let
$$
\Large
\begin{aligned}
H_{n, k}(x) &=\left[L_{n, k}(x)\right]^{2}\left(1-2\left(x-x_{k}\right) L_{n, k}^{\prime}\left(x_{k}\right)\right) \\
\text { and } K_{n, k}(x) &=\left[L_{n, k}(x)\right]^{2}\left(x-x_{k}\right)
\end{aligned}
$$
Then
$$
p_{2 n+1}(x)=\sum_{k=0}^{n}\left[f_{k} H_{n, k}(x)+g_{k} K_{n, k}(x)\right]
$$
interpolates the data as required. The polynomial (4) is called the Hermite interpolating polynomial. Note that $H_{n, k}\left(x_{i}\right)=\delta_{i k}$ and $H_{n, k}^{\prime}\left(x_{i}\right)=0$, and $K_{n, k}\left(x_{i}\right)=0, K_{n, k}^{\prime}\left(x_{i}\right)=\delta_{i k}$.

```ad-theorem
Let $p_{2 n+1}$ be the Hermite interpolating polynomial in the case where $f_{i}=f\left(x_{i}\right)$ and $g_{i}=f^{\prime}\left(x_{i}\right)$ and $f$ has at least $2 n+2$ smooth derivatives. Then, for every $x \in\left[x_{0}, x_{n}\right]$,
$$
f(x)-p_{2 n+1}(x)=\left[\left(x-x_{0}\right)\left(x-x_{1}\right) \cdots\left(x-x_{n}\right)\right]^{2} \frac{f^{(2 n+2)}(\xi)}{(2 n+2) !},
$$
where $\xi \in\left(x_{0}, x_{n}\right)$ and $f^{(2 n+2)}$ is the $(2 n+2)$ nd derivative of $f$.
```
