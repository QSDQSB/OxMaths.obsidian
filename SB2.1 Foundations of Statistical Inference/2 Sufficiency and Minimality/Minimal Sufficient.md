## Definition
A [[Statistic]] is [[Minimal Sufficient]] if it can be expressed as a function of any other [[Sufficient]] [[Statistic]].

## Theorem 2.5
```ad-theorem
title: Theorem 2.5
A [[statistic]] $T$ is [[minimal sufficient]] if and only if
$$
T(x)=T(y) \Longleftrightarrow \frac{f(y ; \theta)}{f(x ; \theta)} \text { is independent of } \theta \text {. }
$$
```
### Proof
#### ($\Longleftarrow$) 
Suppose $T$ is a statistic such that $T(x)=T(y)$ if and only if $\frac{f(y ; \theta)}{f(x ; \theta)}$ is equal to some $k(x, y)$ independent of $\theta$.

**Sufficiency**. In the discrete case,
$$
\begin{aligned}
f(x \mid t, \theta)=\mathbb{P}_\theta(X=x \mid T=t)=\frac{\mathbb{P}_\theta(X=x)}{\mathbb{P}_\theta(T=t)} &=\frac{f(x ; \theta)}{\sum_{y: T(y)=t} f(y ; \theta)} \\
&=\frac{f(x ; \theta)}{\sum_{y: T(y)=t} f(x ; \theta) k(x, y)} \\
&=\left(\sum_{y: T(y)=t} k(x, y)\right)^{-1}
\end{aligned}
$$
which is independent of $\theta$, so $T$ is sufficient. For the continuous case, replace the sum with an integral.

**Minimality**. Now suppose $U: \mathcal{X} \mapsto \mathcal{U}$ is another [[Sufficient]] [[Statistic]] and that $U(x)=U(y)$ for some $x, y$. Since $U$ is [[Sufficient]], by the factorisation criterion we have
$$
\frac{f(y ; \theta)}{f(x ; \theta)}=\frac{g(U(y), \theta) h(y)}{g(U(x), \theta) h(x)}=\frac{h(y)}{h(x)}
$$
which is independent of $\theta$. So by hypothesis, $T(x)=T(y)$ and hence $\Pi_U$ is finer than $\Pi_T$, where $\Pi_U, \Pi_T$ be the partitions induced by $U, T$ respectively. We now show that $T$ must be a function of $U$. Without loss of generality we assume that
$$
\mathcal{U}=\bigcup_{A \in \Pi_U}\{U(x): x \in A\}, \quad \mathcal{T}=\bigcup_{B \in \Pi_T}\{T(x): x \in B\} .
$$
We define a function $\phi: \mathcal{U} \mapsto \mathcal{T}$ as follows: for each $u \in \mathcal{U}$, there exists an $A \in \Pi_U$ such that $u=U(x)$ for all $x \in A$ and a $t \in \mathcal{T}$ such that for all $x \in A, T(x)=t$; let $\phi(u)=t$. In this way $T(x)=\phi(U(x))$ Hence $T$ is minimal sufficient.

#### ($\Longrightarrow$)
Conversely, suppose $T$ is minimal sufficient. Take $x, y$ such that $T(x)=T(y)$. Then by the factorisation criterion,
$$
\frac{f(y ; \theta)}{f(x ; \theta)}=\frac{g(T(y), \theta) h(y)}{g(T(x), \theta) h(x)}=\frac{h(y)}{h(x)}
$$
which does not depend on $\theta$. (Note this only used the sufficiency of $T$.)
For the other direction, we need to show that if $f(x ; \theta) / f(y ; \theta)$ is independent of $\theta$ then $T(x)=T(y)$. Start by writing $x \sim y$ whenever $f(x ; \theta)=k(x, y) f(y ; \theta)$ for all $\theta$ (for some function $k(x, y)$ ). It is easy to check that this is an [[equivalence relation]]. For each equivalence class $[x]$ choose a representative $\bar{x}$ and define $G$ to be the representative function (i.e. $G(y)=\bar{x}$ for all $y \in[x])$. So $G$ is a [[Statistic]] constant on the equivalence classes. It is also [[Sufficient]], by the factorisation criterion, since $f(x ; \theta)=k(x, \bar{x}) f(\bar{x} ; \theta)=k(x, G(x)) f(G(x) ; \theta)$ for all $x$. So $T$ is a function of $G$ (by minimality) and hence is also constant on the equivalence classes, meaning $x \sim y \Longrightarrow T(x)=T(y)$.

## Theorem 2.6
```ad-theorem
title: Theorem 2.6
Suppose the functions $f(x ; \theta)=\exp \left[\sum_{j=1}^k \eta_j(\theta) T_j(x)-B(\theta)\right] h(x)$ form a [[strictly k-parameter]] [[exponential family]]. Let $X=\left(X_1, \ldots, X_n\right)$, where $X_1, \ldots, X_n \sim f(x, \theta)$ are i.i.d. Then: $T_{(n)}=\left(\sum_{i=1}^n T_1\left(X_i\right), \ldots, \sum_{i=1}^n T_k\left(X_i\right)\right)$ is [[minimal sufficient]].
```
^Theorem2-6

### Proof
Just note that
$$
\frac{f\left(\left(x_1, \ldots, x_n\right) ; \theta\right)}{f\left(\left(y_1, \ldots, y_n\right) ; \theta\right)}=\frac{\prod_{i=1}^n h\left(x_i\right)}{\prod_{i=1}^n h\left(y_i\right)} \exp \left[\sum_{j=1}^k \eta_j(\theta)\left(\sum_{i=1}^n T_j\left(x_i\right)-\sum_{i=1}^n T_j\left(y_i\right)\right)\right]
$$
which is independent of $\theta$ if and only if $\sum_{i=1}^n T_j\left(x_i\right)=\sum_{i=1}^n T_j\left(y_i\right)$ for all $j=1, \ldots, k$.


```ad-example
title: Minimal Sufficient of Normal Distribution
Let $X=\left(X_1, \ldots, X_n\right)$ be a sample of i.i.d. $\mathcal{N}\left(\mu, \sigma^2\right)$-distributed random variables. For the parameter $\theta=\left(\mu, \sigma^2\right) \in \mathbb{R} \times \mathbb{R}_{+}$, we have
$$
\begin{aligned}
\frac{f(x ; \theta)}{f(y ; \theta)} &=\frac{\left(2 \pi \sigma^2\right)^{-n / 2} \exp \left(-\frac{1}{2 \sigma^2} \sum_{i=1}^n\left(x_i-\mu\right)^2\right)}{\left(2 \pi \sigma^2\right)^{-n / 2} \exp \left(-\frac{1}{2 \sigma^2} \sum_{i=1}^n\left(y_i-\mu\right)^2\right)} \\
&=\exp \left(-\frac{1}{2 \sigma^2}\left(\sum_{i=1}^n x_i^2-\sum_{i=1}^n y_i^2-2 \mu\left(\sum_{i=1}^n x_i-\sum_{i=1}^n y_i\right)\right)\right)
\end{aligned}
$$
This ratio is independent of $\theta$ if and only if $\sum_{i=1}^n x_i=\sum_{i=1}^n y_i$ and $\sum_{i=1}^n x_i^2=\sum_{i=1}^n y_i^2$. Thus $T(X)=\sum X_i, \sum X_i^2$ is minimal sufficient.
Note that $\bar{x}=\frac{1}{n} \sum x_i=\frac{T_1(x)}{n}$ and $S^2=\frac{1}{n-1} \sum\left(x_i-\bar{x}\right)^2=\frac{1}{n-1}\left(\sum x_i^2-n \bar{x}^2\right)=\frac{1}{n-1}\left(T_2(x)-\right.$ $\left.\frac{1}{n} T_1(x)^2\right)$ are in one-to-one correspondence with $T(x)$, and hence $\left(\bar{X}, S^2\right)$ is also minimal sufficient for $\theta$.
```