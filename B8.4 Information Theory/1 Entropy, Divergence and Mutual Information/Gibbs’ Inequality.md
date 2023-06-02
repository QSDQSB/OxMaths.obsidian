#InfoTheory 
```ad-theorem
title: Gibb's inequality
Let $p$ and $q$ be pmfs on $\mathcal{X}$. Then
$$
-\sum_{x \in \mathcal{X}} p(x) \log (p(x)) \leq-\sum_{x \in \mathcal{X}} p(x) \log (q(x))
$$
and the equality holds if and only if (iff) $p=q$.
```
### Proof
Denote $X$ a r.v. following the pmf $p$.
$$
\begin{aligned}
\sum_{x \in \mathcal{X}} p(x) \log \left(\frac{p(x)}{q(x)}\right) &=\mathbb{E}\left[-\log \left(\frac{q(X)}{p(X)}\right)\right] \\
& \geq-\log \left(\mathbb{E}\left[\frac{q(X)}{p(X)}\right]\right) \\
&=-\log \left(\sum_{x \in \mathcal{X}} p(x) \frac{q(x)}{p(x)}\right) \\
&=-\log (1)=0
\end{aligned}
$$
where the inequality follows by [[Jensen's Inequality]] applied to $f(x)=-\log (x)$ (a strictly [[convex]] function). Note that by Jensen's equality holds iff $\frac{q(x)}{p(x)}$ is constant.