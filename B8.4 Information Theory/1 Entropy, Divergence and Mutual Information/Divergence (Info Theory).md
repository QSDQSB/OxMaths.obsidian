---
aliases: [divergence]
---
#InfoTheory 
## Definition
Let $p$ and $q$ be pmfs on $\mathcal{X}$. We call
$$
D(p \| q)=\sum_{x \in \mathcal{X}} p(x) \log \left(\frac{p(x)}{q(x)}\right)
$$
the [[Divergence (Info Theory)|divergence]] between $p$ and $q$ and set by convention
- $0 \times \log (0)=0$ 
- $D(p \| q)=\infty$ if $\exists x \in X$ such that $q(x)=0, p(x)>0$.
>Divergence is also known as information divergence, Kullback-Leibler divergence, relative [[Entropy]].

Note that, given $X \sim p$ (which means the pmf of $X$ is $p$)
$$
\begin{aligned}
D(p \| q) &=\mathbb{E}\left[\log \left(\frac{p(X)}{q(X)}\right)\right] \\
&=\mathbb{E}\left[\log \left(\frac{1}{q(X)}\right)\right]-\mathbb{E}\left[\log \left(\frac{1}{p(X)}\right)\right] \\
&=\mathbb{E}\left[\log \left(\frac{1}{q(X)}\right)\right]-H(X)
\end{aligned}
$$
---

```ad-hint
We can think of [[divergence]] as the **cost** we incur if we use the distribution $q$ to *encode* a random variable $X$ with distribution $p$.
```
## Properties of Divergence
```ad-theorem
title: Properties
Let $(X, Y)$ and $(\hat{X}, \hat{Y})$ be 2-dim discrete random variables taking values in $\mathcal{X} \times \mathcal{Y}$. Then
1) ==Information inequality== $D\left(p_X \| p_{\hat{X}}\right) \geq 0$ with equality holds iff $p_X=p_{\hat{X}}$.
2) ==Chain rule== $D\left(p_{X, Y} \| p_{\hat{X}, \hat{Y}}\right)=D\left(p_{Y \mid X} \| p_{\hat{Y} \mid \hat{X}} \mid p_X\right)+D\left(p_X \| p_{\hat{X}}\right)$.
3) $D\left(p_{X, Y} \| p_{\hat{X}, \hat{Y}}\right) \geq D\left(p_X \| p_{\hat{X}}\right)$.
4) $D\left(p_{Y \mid X} \| p_{\hat{Y} \mid \hat{X}} \mid p_X\right)=D\left(p_X p_{Y \mid X} \| p_X p_{\hat{Y} \mid \hat{X}}\right)$
5) ==Convexity== For pmfs $p_1, p_2, q_1, q_2$, we have $$D\left(\lambda p_1+(1-\lambda) p_2 \| \lambda q_1+(1-\lambda) q_2\right) \leq \lambda D\left(p_1 \| q_1\right)+(1-\lambda) D\left(p_2 \| q_2\right)$$ for $\forall \lambda \in[0,1]$
```
### Proof
1) follows from Gibbs' inequality.

2) follows from
$$
\begin{aligned}
D\left(p_{X, Y} \| p_{\hat{X}, \hat{Y}}\right) &=\sum_{x \in \mathcal{X}, y \in \mathcal{Y}} p_{X, Y}(x, y) \log \left(\frac{p_{X, Y}(x, y)}{p_{\hat{X}, \hat{Y}}(x, y)}\right) \\
&=\sum_{x \in \mathcal{X}, y \in \mathcal{Y}} p_{X, Y}(x, y) \log \left(\frac{p_X(x) p_{Y \mid X}(y \mid x)}{p_{\hat{X}}(x) p_{\hat{Y} \mid \hat{X}}(y \mid x)}\right) \\
&=\sum_{x \in \mathcal{X}, y \in \mathcal{Y}} p_{X, Y}(x, y) \log \left(\frac{p_{Y \mid X}(y \mid x)}{p_{\hat{Y} \mid \hat{X}}(y \mid x)}\right)+\sum_{x \in \mathcal{X}, y \in \mathcal{Y}} p_{X, Y}(x, y) \log \left(\frac{p_X(x)}{p_{\hat{X}}(x)}\right) \\
&=\sum_{x \in \mathcal{X}} p_X(x) \sum_{y \in \mathcal{Y}} p_{Y \mid X}(y \mid x) \log \left(\frac{p_{Y \mid X}(y \mid x)}{p_{\hat{Y} \mid \hat{X}}(y \mid x)}\right)+D\left(p_X \| p_{\hat{X}}\right) \\
&=\sum_{x \in \mathcal{X}} p_X(x) D\left(p_{Y \mid X} \| p_{\hat{Y} \mid \hat{X}}\right)+D\left(p_X \| p_{\hat{X}}\right) \\
&\left.=D\left(p_{Y \mid X} \| p_{\hat{Y} \mid \hat{X}}\right) \mid p_X\right)+D\left(p_X \| p_{\hat{X}}\right) .
\end{aligned}
$$
3) With Point (2), and the fact $D\left(p_1 \| p_2 \mid p\right) \geq 0$ for any pmf's $p_1, p_2, q$, we have Point (3).
4) follows since$$\begin{aligned}
D\left(p_{Y \mid X} \| p_{\hat{Y} \mid \hat{X}} \mid p_X\right) &=\sum_{x \in \mathcal{X}} p_X(x) \sum_{y \in \mathcal{Y}} p_{Y \mid X}(y \mid x) \log \left(\frac{p_{Y \mid X}(y \mid x)}{p_{\hat{Y} \mid \hat{X}}(y \mid x)}\right) \\
&=\mathbb{E}\left[\log \left(\frac{p_{Y \mid X}(Y \mid X)}{p_{\hat{Y} \mid \hat{X}}(Y \mid X)}\right)\right] \\
&=\mathbb{E}\left[\log \left(\frac{p_X(X) p_{Y \mid X}(Y \mid X)}{p_X(X) p_{\hat{Y} \mid \hat{X}}(Y \mid X)}\right)\right] \\
&=D\left(p_X p_{Y \mid X} \| p_X p_{\hat{Y} \mid \hat{X}}\right)
\end{aligned}$$
5) We just need to apply [[Log Sum Inequality]] to
$$
\left(\lambda p_1+(1-\lambda) p_2\right) \log \left(\frac{\lambda p_1+(1-\lambda) p_2}{\lambda q_1+(1-\lambda) q_2}\right)
$$
and sum over $x \in \mathcal{X}$.