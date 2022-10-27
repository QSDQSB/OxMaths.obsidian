---
aliases: [Gerschgorin's 1st Theorem, Gerschgorin's 2nd Theorem, Gerschgorin]
---
# Gerschgorin's Theorem
#NumericalAnalysis 

## Gerschgorin's 1st Theorem
```ad-theorem
title: Gerschgorin's Theorem
Suppose that $A=\left\{a_{i j}\right\}_{1 \leq i, j \leq n} \in \mathbb{R}^{n \times n}$, and $\lambda$ is an eigenvalue of $A$. Then, $\lambda$ lies in the union of the Gerschgorin discs
$$
D_{i}=\left\{z \in \mathbb{C}\,|\, \left| a_{i i}-z\right|\leq \sum_{\substack{j \neq i \\ j=1}}^{n}| a_{i j} \mid\right\}, i=1, \ldots, n .
$$
```
### Proof
If $\lambda$ is an eigenvalue of $A \in \mathbb{R}^{n \times n}$, then there exists an eigenvector $x \in \mathbb{R}^{n}$ with $A x=\lambda x, x \neq 0$, i.e.,
$$
\sum_{j=1}^{n} a_{i j} x_{j}=\lambda x_{i}, \quad i=1, \ldots, n
$$
Suppose that $\left|x_{k}\right| \geq\left|x_{\ell}\right|, \ell=1, \ldots, n$, i.e., "$x_{k}$ is the largest entry".
Then the $k$ th row of $A x=\lambda x$ gives $\sum_{j=1}^{n} a_{k j} x_{j}=\lambda x_{k}$, or
$$
\left(a_{k k}-\lambda\right) x_{k}=-\sum_{\substack{j \neq k \\ j=1}}^{n} a_{k j} x_{j} .
$$
Dividing by $x_{k}$, (which, we know, is $\neq 0$ ) and taking absolute values,

$$\left|a_{k k}-\lambda\right|=\left|\sum_{\substack{j \neq k \\ j=1}}^{n} a_{k j} \frac{x_{j}}{x_{k}}\right|\leq \sum_{\substack{j \neq k \\ j=1}}^{n}\left|a_{k j}\right|\left|\frac{x_{j}}{x_{k}}\right| \leq \sum_{\substack{j \neq k \\ j=1}}^{n}\left|a_{k j}\right|$$

## Gerschogorin's 2nd Theorem
```ad-theorem
title: Gerschgorin's 2nd Theorem
If any union of $\ell$ (say) discs is disjoint from the other discs, then it contains $\ell$ eigenvalues.
```

### Proof
Consider $$B(\theta)=\theta A+(1-\theta) D,$$where $D=\operatorname{diag}(A)$, the diagonal matrix whose diagonal entries are those from $A$. As $\theta$ varies from 0 to $1, B(\theta)$ has entries that vary continuously from $B(0)=D$ to $B(1)=A$.

Hence the eigenvalues $\lambda(\theta)$ vary continuously by Ostrowski's theorem. The Gerschgorin discs of $B(0)=D$ are points (the diagonal entries), which are clearly the eigenvalues of $D$.

As $\theta$ increases the Gerschgorin discs of $B(\theta)$ increase in radius about these same points as centres. Thus if $A=B(1)$ has a disjoint set of $\ell$ Gerschgorin discs by continuity of the eigenvalues it must contain exactly $\ell$ eigenvalues (as they can't jump!).