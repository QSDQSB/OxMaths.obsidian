#NumericalAnalysis 
```ad-theorem
title: Singular Value Decomposition
Every matrix $A \in \mathbb{R}^{m \times n}$ with $m \geq n$ can be written as
$$
\Large
A=U \Sigma V^{T}
$$
where $U \in \mathbb{R}^{m \times n}$ and $V \in \mathbb{R}^{n \times n}$ are matrices with orthonormal columns, i.e., $U^{T} U=I_{n}$ and $V^{T} V=I_{n}=V V^{T}$ ( $V$ is square orthogonal; note that $\left.U U^{T} \neq I_{m}\right)$, and
$$
\Sigma=\left[\begin{array}{ccc}
\sigma_{1} & & \\
& \ddots & \\
& & \sigma_{n}
\end{array}\right]\left(=\operatorname{diag}\left(\sigma_{1}, \ldots, \sigma_{n}\right)\right)
$$
is a diagonal matrix with nonnegative diagonal entries. In short, the SVD is a decomposition of $A$ into a product of 'orthonormal-diagonal-orthogonal' matrices; when $A$ is square $m=n$, 'orthogonal-diagonal-orthogonal'.
```