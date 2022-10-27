# Least-Squares Problem
#NumericalAnalysis 
```ad-question

$$
\Large
\min _{x}\|A x-b\|, \quad A \in \mathbb{R}^{m \times n}, b \in \mathbb{R}^{m}, m \geq n .
$$
Here $\|y\|:=\sqrt{y_{1}^{2}+y_{2}^{2}+\cdots+y_{m}^{2}}=\sqrt{y^{T} y}$
```
### Solution of least-squares by the QR factorisation:
Let $A=\left[Q \quad Q_{\perp}\right]\left[\begin{array}{l}R \\ 0\end{array}\right]=Q_{F}\left[\begin{array}{l}R \\ 0\end{array}\right]$ be a 'full' [[QR factorisation]], computed e.g. via the [[Householder]] [[QR factorisation]]. We assume $R$ is nonsingular (i.e., $A$ has full column rank); this is a generic condition. Noting that $\left\|Q_{F}^{T} y\right\|=\sqrt{y^{T} Q_{F} Q_{F}^{T} y}=\sqrt{y^{T} y}=\|y\|$ for any vector $y$, we have
$$
\|A x-b\|=\left\|Q_{F}^{T}(A x-b)\right\|=\left\|\left[\begin{array}{c}
R \\
0
\end{array}\right] x-\left[\begin{array}{c}
Q^{T} b \\
Q_{\perp}^{T} b
\end{array}\right]\right\|
$$

The bottom part is $$\Large-Q_{\perp}^{T} b$$, no matter what $x$ is. The top part can be made 0 by taking $$\Large x=R^{-1} Q^{T} b$$ this is therefore the solution.

```ad-algorithm
title: Least-Squares Problem
1. compute the “thin” QR factorization $A = QR$,
2. solve $Rx = Q^T b$ for $x$
	1. which is obtained by backward substitution as $R$ is triangular.

```
