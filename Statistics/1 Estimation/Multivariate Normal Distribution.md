#Statistics 

The vector $y=\left(y_1, \ldots, y_k\right)^T$ has a multivariate normal distribution if $y$ can be written as
$$
y=A z+\mu
$$
where the $k$-vector $\mu$ and the $k \times k$ matrix $A$ are constant, and where $z=\left(z_1, \ldots, z_k\right)^T$ with $z_1, \ldots, z_k \stackrel{\mathrm{iid}}{\sim} N(0,1)$

Here $E(z)=0$ and $\operatorname{var}(z)=I_k$. So $y$ has mean vector $E(y)=\mu$ and covariance matrix $\operatorname{var}(y)=\Sigma$, where $\Sigma=A A^T$, because:
$$
\begin{aligned}
E(y) & =A E(z)+\mu=\mu \\
\operatorname{var}(y) & =A \operatorname{var}(z) A^T=A A^T .
\end{aligned}
$$
We say that $y$ is (multivariate) normal with mean $\mu$ and covariance $\Sigma$, and we write $y \sim N(\mu, \Sigma)$ or $y \sim N_k(\mu, \Sigma)$.
- Let $B$ be a matrix, and $b$ a vector, of constants. If $y \sim N(\mu, \Sigma)$ then $B y+b \sim$ $N\left(B \mu+b, B \Sigma B^T\right)$, i.e. linear combinations of $y$ are also normal.
Let $\operatorname{det} \Sigma$ denote the determinant of $\Sigma$. Then $\operatorname{det} \Sigma=\operatorname{det}\left(A A^T\right)=(\operatorname{det} A)^2 \geqslant 0$.
- If $\operatorname{det} \Sigma=0$ then the normal distribution of $y$ is called singular and no probability density function exists.
- If $\operatorname{det} \Sigma>0$ then the density of $y$ is
$$
f(y)=\frac{1}{(2 \pi)^{k / 2}(\operatorname{det} \Sigma)^{1 / 2}} \exp \left\{-\frac{1}{2}(y-\mu)^T \Sigma^{-1}(y-\mu)\right\}, \quad y \in \mathbb{R}^k
$$