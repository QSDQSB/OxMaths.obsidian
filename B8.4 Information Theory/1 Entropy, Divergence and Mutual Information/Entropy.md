#InfoTheory 
## Definition
The [[Entropy]] $H_b(X)$ in base $b$ of a discrete random variable $X$ is defined as
$$
H_b(X)=-\sum_{x \in \mathcal{X}} \mathbb{P}(X=x) \log _b \mathbb{P}(X=x)
$$
- where we use the convention that $0 \times \log _b(0)=0$. For $b=2$ we usually write $H(X)$ instead $H_2(X)$, and write $\log (q)$ instead $\log _2(q)$.
- The choice of base 2 for the logarithm is common (due to computers using two states) but not essen tial. Since $\log (x)=\log _b(x)=\frac{\log _a(x)}{\log _a(b)}$, we have $H_b(X)=\frac{1}{\log _a(b)} H_a(X)$.
- The unit of entropy in base 2 is called a `bit`, in base $e$ `nat`, in base 256 a `byte`. As usual in mathematics, we do not use units but dimension checking is a useful sanity check for many calculations.

### Shannon Information
```ad-note
![[Shannon Information#Definition]]
```
```ad-example
`Entropy is additive.`
title: Entropy of Joint Distributions of Independent Variables
If $X$ is a 2-dim vector in the form $\left(X_1, X_2\right)$ with $X_i \in \mathcal{X}_i$ for $i=1,2$, then
$$
H(X)=H\left(X_1, X_2\right)=-\sum_{x_1 \in \mathcal{X}_1, x_2 \in \mathcal{X}_2} p_{X_1, X_2}\left(x_1, x_2\right) \log \left(p_{X_1, X_2}\left(x_1, x_2\right) .\right.
$$
If additionally, $X_1$ and $X_2$ are independent, i.e., $p_{X_1, X_2}\left(x_1, x_2\right)=p_{X_1}\left(x_1\right) p_{X_2}\left(x_2\right)$, then
$$
H(X)=H\left(X_1\right)+H\left(X_2\right) .
$$
If $X_1$ and $X_2$ are independent and identically distributed (i.i.d.), then
$$
H(X)=2 H\left(X_1\right)=2 H\left(X_2\right)
$$
```