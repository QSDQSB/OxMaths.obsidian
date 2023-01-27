## Definition
The [[Natural Parameter Space]] is defined to be
$$
\Xi:=\left\{\eta=\left(\eta_1, \ldots, \eta_n\right): \int h(x) \exp \left[\sum_{i=1}^n \eta_i T_i(x)\right] \mathrm{d} x<\infty\right\}
$$
i.e. the set of $\eta$ for which we can define $B(\eta):=\log \int h(x) \exp \left[\sum_{i=1}^n \eta_i T_i(x)\right] \mathrm{d} x$ so that
$$
\tilde{f}(x ; \eta)=e^{-B(\eta)} h(x) \exp \left[\sum_{i=1}^n \eta_i T_i(x)\right]
$$
is a pdf/pmf on $\mathcal{X}$.

>Observe that you we always have $\eta(\Theta) \subset \Xi$.

## Theorem 1.13
```ad-theorem
title: Theorem 1.13
The [[natural parameter space]] $\Xi$ of a strictly $k$-parameter [[exponential family]] is convex and contains a non-empty $k$-dimensional ball.
```
### Proof
Take $\eta, \eta^{\prime} \in \Xi$ and let $\alpha \in(0,1)$. Define $B(\eta)=\log \int \exp \left(\sum_i \eta_i T_i(x)\right) h(x) \mathrm{d} x$. Then
$B\left(\alpha \eta+(1-\alpha) \eta^{\prime}\right)=\log \int \exp \left(\alpha \sum_i \eta_i T_i(x)+(1-\alpha) \sum_i \eta_i^{\prime} T_i(x)\right) h(x) \mathrm{d} x$
$=\log \int\left[\exp \left(\sum_i \eta_i T_i(x)\right) h(x)\right]^\alpha\left[\exp \left(\sum_i \eta_i^{\prime} T_i(x)\right) h(x)\right]^{1-\alpha} \mathrm{d} x$
$\leqslant \log \left(\int \exp \left(\sum_i \eta_i T_i(x)\right) h(x) \mathrm{d} x\right)^\alpha\left(\int \exp \left(\sum_i \eta_i^{\prime} T_i(x)\right) h(x) \mathrm{d} x\right)^{1-\alpha}$
by Hölder's inequality
$=\alpha B(\eta)+(1-\alpha) B\left(\eta^{\prime}\right)<\infty$.
Notice that if $\Xi$ is contained in a $(k-1)$-dimensional subspace, then so would $\eta(\Theta) \subset \Xi$, which is impossible since $\left\{\theta \mapsto \eta_i(\theta): i=1, \ldots, k\right\}$ are affinely independent. Therefore $\Xi$ is not contained in any $(k-1)$-dimensional subspace and must therefore contain $k+1$ points, say $\xi_1, \ldots, \xi_{k+1}$, not all lying in the same $(k-1)$-subspace; since $\Xi$ is convex it must also contain the convex hull of these points; since they don't all lie in the same $(k-1)$-subspace $\Xi$ contain a non-empty, open $k$-dimensional ball.

## Theorem 1.15
```ad-theorem
title: Theorem 1.15
Let $\mathcal{P}$ be a [[strictly k-parameter]] [[exponential family]] with [[natural parameter space]] $\Xi$. Then for all $\eta \in \operatorname{Int}(\Xi)$ :
1) all moments of $T$ (with respect to $f(x ; \eta)$ ) exist;
2) $\mathbb{E}_\eta\left[T_i(X)\right]=\frac{\partial}{\partial \eta_i} B(\eta) \forall i$; and
3) $\operatorname{Cov}_\eta\left(T_i, T_j\right)=\frac{\partial^2}{\partial \eta_i \partial \eta_j} B(\eta)\,\, \forall i, j$.
```
### Proof
Recall that
$$
\exp (B(\eta))=\int \exp \left(\sum_{i=1}^k \eta_i T_i(x)\right) h(x) \mathrm{d} x .
$$
Then for $s=\left(s_1, \ldots, s_k\right)$ consider the moment generating function of $T(X)$, when $X \sim P_\eta$,
$$
\begin{aligned}
M_{T(X)}(s) &=\mathbb{E}_\eta\left[\exp \left(\sum_{i=1}^k s_i T_i(X)\right)\right] \\
&=\int \exp \left(\sum_{i=1}^k\left(\eta_i+s_i\right) T_i(X)-B(\eta)\right) h(x) \mathrm{d} x \\
&=\exp \{B(\eta+s)-B(\eta)\} .
\end{aligned}
$$
Since by assumption $\eta \in \operatorname{lnt}(\Xi)$, there exists a $\delta>0$, such that for all $y \in B(\eta, \delta)$ we have $y \in \Xi$ and therefore for all $|s|<\delta$ we have
$$
M_{T(X)}(s)=\exp [-B(\eta)+B(\eta+s)]<\infty .
$$
This implies all moments are finite.

For the other two parts, start by differentiating $\exp (B(\eta))$ to get
$$
\frac{\partial \exp (B(\eta))}{\partial \eta_1}=\lim _{s \rightarrow 0} \frac{1}{s} \int \exp \left(\sum_{i=1}^k \eta_i T_i(X)\right)\left[\exp \left(s T_1(x)\right)-1\right] h(x) \mathrm{d} x
$$
$$
\exp (B(\eta)) \frac{\partial B(\eta)}{\partial \eta_1}=\int \exp \left(\sum_{i=1}^k \eta_i T_i(X)\right) T_1(x) h(x) \mathrm{d} x
$$
$$
\frac{\partial B(\eta)}{\partial \eta_1}=\mathbb{E}_\eta\left[T_1(X)\right] \text {, }
$$
where the differentiation under the integral sign may be justified by dominated convergence. The last statement follows by differentiating once more.