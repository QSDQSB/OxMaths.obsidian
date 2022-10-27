---
aliases: [sample covariance matrix, total variance]
---
# Covariance Matrix
#Statistics 

Our dataset is an i.i.d. sample $\left(x_{1}, \ldots, x_{n}\right)$ of a random vector $X=\left(X_{1} \ldots X_{p}\right)^{\top}$. Let $\Sigma$ denote the $p$-by- $p$ [[covariance matrix]] of the random vector $X$.

## Property of Covariance Matrix
The [[covariance matrix]] $\Sigma$ is a
- **real and symmetric** matrix, so there exist $p$ eigenvectors $v_{1}^{*}, \ldots, v_{p}^{*}$ that are pairwise orthogonal and $p$ associated eigenvalues $\lambda_{1}^{*} \geq \lambda_{2}^{*} \ldots \geq \lambda_{p}^{*}$ which satisfy the eigenvalue equation $\Sigma v_{i}^{*}=\lambda_{i}^{*} v_{i}^{*}$. In particular, the $p$-by- $p$ matrix $V^{*}=\left(v_{1}^{*}, \ldots, v_{p}^{*}\right)$ is an orthogonal matrix:
$$
V^{*}\left(V^{*}\right)^{\top}=\left(V^{*}\right)^{\top} V^{*}=I_{p} .
$$
- **positive-semidefinite** matrix, so the ***eigenvalues are non-negative***:
$$
\lambda_{i}^{*} \geq 0, \forall i.
$$

## Eigenvalue Decomposition of the Covariance Matrix 
The eigenvalue decomposition of the covariance matrix is given by
$$
\Large
\Sigma=V^{*} \Lambda^{*}\left(V^{*}\right)^{\top}
$$
where $\Lambda^{*}$ is a diagonal matrix with eigenvalues
$$
\lambda_{1}^{*} \geq \lambda_{2}^{*} \geq \cdots \geq \lambda_{p}^{*} \geq 0
$$

## Total Variance
The total variance of the random vector $X$ is
$$
\begin{aligned}
\operatorname{TV}(X) &=\mathbb{E}\left[\sum_{j=1}^{p}\left(X_{j}-\mathbb{E}\left[X_{j}\right]\right)^{2}\right]=\sum_{j=1}^{p} \Sigma_{j j}=\operatorname{trace}(\Sigma) \\
&=\operatorname{trace}\left(V^{*} \Lambda^{*}\left(V^{*}\right)^{\top}\right)=\operatorname{trace}\left(\left(V^{*}\right)^{\top} V^{*} \Lambda^{*}\right)=\operatorname{trace}\left(\Lambda^{*}\right)=\sum_{j=1}^{p} \lambda_{j}^{*}
\end{aligned}
$$

## Sample covariance matrix
Similarly, let $S$ be the sample covariance matrix of the data. Assuming the data have been centered, that is $\sum_{i=1}^{n} x_{i j}=0$ for all $j$, it is defined as
$$
S=\frac{1}{n-1} \sum_{i=1}^{n}\left(x_{i}-\bar{x}\right)\left(x_{i}-\bar{x}\right)^{\top}=\frac{1}{n-1} \sum_{i=1}^{n} x_{i} x_{i}^{\top}=\frac{1}{n-1} \mathbf{X}^{\top} \mathbf{X}
$$

Sample covariance matrix has a similar property to the covariance matrix.