---
aliases: [CRLB]
tag: [FOSI]
---
## Cramer-Rao Lower Bound in 1D
```ad-theorem
title: CRLB in 1D
Suppose [[Regularity Assumptions|Regs 2-4]] hold and that $0<I_X(\theta)<\infty$.Let $\gamma=g(\theta)$ where $g$ is a continuously differentiable real-valued function with $g^{\prime} \neq 0$.

Let $T$ be a [[Minimum Variance Unbiased Estimator|regular]] unbiased estimator of $\gamma$. Then
$$
\Large
\operatorname{Var}_\theta(T) \geqslant \frac{\left|g^{\prime}(\theta)\right|^2}{I_X(\theta)}, \forall \theta \in \Theta
$$
with equality if and only if
$$
T(x)-g(\theta)=\frac{g^{\prime}(\theta) S(\theta, x)}{I_X(\theta)} \quad \forall x \in \mathcal{A} \forall \theta \in \Theta .
$$
```
### Proof
Note that
 $\quad \operatorname{Cov}_\theta(T, S(\theta, X))=\mathbb{E}_\theta[T S(\theta, X)] \quad$ since $\mathbb{E}_\theta(S(\theta, X))=0$
$$
\begin{array}{l}
=\int_{\mathcal{X}} T(x) \frac{\partial \log p(x, \theta)}{\partial \theta} p(x, \theta) \mathrm{d} x \\
=\int_{\mathcal{X}} T(x) \frac{\partial p(x, \theta)}{\partial \theta} \mathrm{d} x \\
=\frac{\partial}{\partial \theta} \int_{\mathcal{X}} T(x) p(x, \theta) \mathrm{d} \theta \quad \text { (note this is where we need } T \text { regular) } \\
=\frac{\partial}{\partial \theta} \mathbb{E}_\theta[T]=g^{\prime}(\theta) .
\end{array}
$$
Now set $c(\theta):=g^{\prime}(\theta) / I_X(\theta)$. Then
$$
\begin{aligned}
0 \leqslant \operatorname{Var}_\theta(T-c(\theta) S(\theta, X)) &=\operatorname{Var}_\theta T+c^2(\theta) \operatorname{Var}_\theta(S(\theta, X))-2 c(\theta) \operatorname{Cov}_\theta(T, S(\theta, X)) \\
&=\operatorname{Var}_\theta T+c^2(\theta) I_X(\theta)-2 c(\theta) g^{\prime}(\theta) \\
&=\operatorname{Var}_\theta(T)-\frac{\left|g^{\prime}(\theta)\right|^2}{I_X(\theta)}
\end{aligned}
$$
which is the CRLB. We have equality if and only if $T-c(\theta) S(\theta, X)$ is almost surely constant, and in that case it must be equal to its expectation $g(\theta)$ :
$$
T(x)-c(\theta) S(\theta, x)=g(\theta) \Longleftrightarrow T(x)-g(\theta)=\frac{S(\theta, x) g^{\prime}(\theta)}{I_X(\theta)} .
$$
```ad-remark
If $T$ attains the [[Cramer-Rao Lower Bound]],
$$
\operatorname{Var}_\theta(T)=\frac{\left|g^{\prime}(\theta)\right|^2}{I_X(\theta)},
$$
then it is clearly a [[Minimum Variance Unbiased Estimator|MVUE]]. There is no guarantee that there exists an estimator which attains the bound.
```
### Corollary 5.4
Suppose that $X \sim f(\cdot ; \theta)$ for $\theta \in \Theta$. Under regularity conditions, if some estimator $\widehat{\gamma}$ of $\gamma=g(\theta)$ attains the CRLB, it follows that $\{f(\cdot ; \theta): \theta\}$ is in some [[exponential family]].
#### Proof
If $\widehat{\gamma}=T(x)$ attains the [[Cramer-Rao Lower Bound|CRLB]] then we know that
$$
T(x)=(\theta)+\frac{g^{\prime}(\theta)}{I_X(\theta)} \frac{\partial}{\partial \theta} \log f(x ; \theta)
$$
Rearranging we have
$$
\frac{\partial}{\partial \theta} \log f(x ; \theta)=(T(x)-\theta) \frac{g^{\prime}(\theta)}{I_X(\theta)} .
$$
By the [[First Fundamental Theorem of Calculus]] we have that
$$
\log f(\theta ; x)=C(x)+\eta(\theta) T(x)-B(\theta)
$$
for some functions $C, \eta, B$ and the conclusion follows.

### Corollary 5.5
Suppose that $\mathbb{E}_\theta[T(X)]=\theta+b(\theta)$ (so that $b(\theta)$ is the bias of $T$) and that $T$ is [[Minimum Variance Unbiased Estimator|regular]]. Then
$$
\operatorname{Var}_\theta(T(X)) \geqslant \frac{\left|1+b^{\prime}(\theta)\right|^2}{I_X(\theta)}
$$

## Cramer-Rao Lower Bound in mD
```ad-theorem
title: CRLB in mD
Suppose Regs $1,2^{\prime}, 3^{\prime}, 4^{\prime}$ hold and that $I_X(\theta)$ is not singular. Then the CRLB is
$$
\operatorname{Cov}_\theta T \succeq\left(D_\theta g\right)(\theta) I_X(\theta)^{-1}\left(D_\theta g\right)(\theta)^t \quad \forall \theta \in \Theta,
$$
where $D_\theta g$ is the Jacobian matrix, so $\left(D_\theta g\right)(\theta)_{i j}=\frac{\partial g_i(\theta)}{\partial \theta_j}$.
```
