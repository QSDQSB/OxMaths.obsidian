---
aliases: [PCA]
---
# Principal Component Analysis
#ML #Statistics 
## Overview
PCA finds an orthogonal basis (principal components) $v_{1}, v_{2}, \ldots, v_{p}$ such that:
- The first principal component (PC) $v_{1}$ is the direction of **greatest variance** of the data.
- The $j$-th PC $v_{j}$ is the direction orthogonal to $v_{1}, v_{2}, \ldots, v_{j-1}$ of greatest variance, for $j=2, \ldots, p$.

The $K$-dimensional representation of the data item $x_{i}$ is the vector of projections of $x_{i}$ onto the first $K$ PCs:
$$
z_{i}=V_{1: K}^{\top} x_{i}=\left(v_{1}^{\top} x_{i}, \ldots, v_{K}^{\top} x_{i}\right)^{\top} \in \mathbb{R}^{K}
$$
where $V_{1: K}=\left(v_{1}, \ldots, v_{K}\right)$ is an $p$-by-$K$ matrix. The reconstructed $x_{i}$ is
$$
\widehat{x}_{i}=V_{1: K} z_{i}=V_{1: K} V_{1: K}^{\top} x_{i}
$$
### Encoder, Decoder, Autoencoder and Empirical Risk Minimiser
or a general orthonormal $p$-by-$K$ matrix $A$, denote $\operatorname{enc}_{A}$ and $\operatorname{dec}_{A}$ the linear [[Encoder, Decoder and Autoencoder|encoder]] and [[Encoder, Decoder and Autoencoder|decoder]] defined by
$$
\begin{aligned}
\operatorname{enc}_{A}\left(x_{i}\right) &=A^{\top} x_{i} \\
\operatorname{dec}_{A}\left(z_{i}\right) &=A z_{i}
\end{aligned}
$$
let $h_{A}\left(x_{i}\right)=A A^{\top} x_{i}$ be the associated linear [[Encoder, Decoder and Autoencoder|autoencoder]]. The matrix $V_{1: K}$ is an empirical risk minimiser for the class of linear [[Encoder, Decoder and Autoencoder|autoencoder]] $h_{A}$ under the squared loss:
$$
V_{1: K} \in \underset{A \in \mathcal{A}}{\arg \min } \frac{1}{n} \sum_{i=1}^{n}\left\|x_{i}-h_{A}\left(x_{i}\right)\right\|^{2}
$$
where $\mathcal{A}$ is the set of $p$-by-$K$ orthonormal matrices.

### Covariance Matrix
![[Covariance Matrix]]

## Population PCs
### First PC
We seek a derived scalar variable $Z_{1}$ of the form
$$
Z_{1}=a_{1}^{\top} X=a_{11} X_{1}+a_{12} X_{2}+\cdots+a_{1 p} X_{p}
$$
where $a_{1}=\left(a_{11}, \ldots, a_{1 p}\right)^{\top} \in \mathbb{R}^{p}$ is a unit-norm vector.

For any fixed vector $a_{1}$
$$
\large
\operatorname{var}\left(Z_{1}\right)=\operatorname{var}\left(a_{1}^{\top} X\right)=a_{1}^{\top} \Sigma a_{1}
$$
The (population) first principal component $v_{1}^{*}$ is the unit-norm vector $a_{1}$ that maximises $\operatorname{var}\left(Z_{1}\right)$, that is
$$
v_{1}^{*}=\underset{a_{1} \in \mathbb{R}^{p}}{\arg \max } a_{1}^{\top} \Sigma a_{1} \quad \text { subject to: } a_{1}^{\top} a_{1}=1 .
$$
#### Finding First PC
The Lagrangian of the problem is given by:
$$
\mathcal{L}\left(a_{1}, \gamma_{1}\right)=a_{1}^{\top} \Sigma a_{1}-\gamma_{1}\left(a_{1}^{\top} a_{1}-1\right)
$$
The corresponding vector of partial derivatives is
$$
\frac{\partial \mathcal{L}\left(a_{1}, \gamma_{1}\right)}{\partial a_{1}}=2 \Sigma a_{1}-2 \gamma_{1} a_{1}
$$
Setting this to zero gives $$\Sigma a_{1}=\gamma_{1} a_{1}.$$We recognize the eigenvector equation, i.e. $a_{1}$ must be an eigenvector of $\Sigma$ and the dual variable $\gamma_{1}$ is the corresponding eigenvalue. Since $a_{1}^{\top} \Sigma a_{1}=\gamma_{1} a_{1}^{\top} a_{1}=\gamma_{1}$, the first PC must be the eigenvector $v_{1}^{*}$ associated with the **largest eigenvalue** $\lambda_{1}^{*}$ of $\Sigma$. We therefore have
$$
\operatorname{var}\left(Z_{1}\right)=\lambda_{1}^{*}
$$
### Second and subsequent PCs
The problem: find the vector $a_{2}$ that maximises $\operatorname{var}\left(Z_{2}\right)=a_{2}^{\top} \Sigma a_{2}$. Let
$$
v_{2}^{*}=\underset{a_{2} \in \mathbb{R}^{p}}{\arg \max } a_{2}^{\top} \Sigma a_{2} \quad \text { subject to: } a_{2}^{\top} a_{2}=1 \text { and } a_{2}^{\top} v_{1}^{*}=0.
$$
>(Following a similar procedure)

$a_{2}$ must be an eigenvector of $\Sigma$ with corresponding eigenvalue $\gamma_{2}$, where $\gamma_{2}$ is the quantity we wish to maximise. The second $\mathrm{PC}$ is therefore the **second** eigenvector $v_{2}^{*}$ of $\Sigma$, with corresponding **second highest eigenvalue** $\lambda_{2}^{*}$. We have
$$
\operatorname{var}\left(Z_{2}\right)=\lambda_{2}^{*}
$$
By induction, we conclude that the population PCs $v_{1}^{*}, \ldots, v_{p}^{*}$ are the $p$ eigenvectors of $\Sigma$, with associated eigenvalues $\lambda_{1}^{*} \geq \lambda_{2}^{*} \geq \ldots \geq \lambda_{p}^{*} \geq 0$. The PCs are orthogonal.
