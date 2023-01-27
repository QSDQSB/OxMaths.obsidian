#ML 

Extending [[Linear Model|linear regression]] to learning the regressors. In dictionary learning we seek a dictionary $A \in \mathbb{R}^{m \times n}$ and sparse regressors $X \in \mathbb{R}^{n \times p}$ so that the data $Y \in \mathbb{R}^{m \times p}$ can be approximately expressed as $A X \approx Y$. We use $V=\left(\mathbb{R}^{m \times n}, \mathbb{R}^{n \times p}\right)$ as data space and $W=\mathbb{R}^{1 \times p}$ as observation space, with data $D=\left\{y_{\ell}\right\}_{\ell=1}^m$, where $y_{\ell} \in \mathbb{R}^{1 \times p}$ and $p \gg n$. The data fitting model is designed as
$$
\min _{A \in \mathbb{R}^{m \times n}, X \in \mathcal{F}_k(m, p)} \frac{1}{2 m p}\|A X-Y\|_F^2,
$$
where
$$
\mathcal{F}_k(m, p)=\left\{X \in \mathbb{R}^{n \times p}: \sum_{i=1}^n\left|x_{i, j} \neq 0\right| \leq k \quad \forall j=1, \ldots, p\right\}
$$
indicating only $k$ of the the learned regressors from $A$ are used to approximate each column of data in $Y$.