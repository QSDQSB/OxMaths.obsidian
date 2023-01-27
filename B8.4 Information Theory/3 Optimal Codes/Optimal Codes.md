---
aliases: [optimal, optimal code]
---
## Definition
We call a symbol code $c: \mathcal{X} \longrightarrow \mathcal{Y}^*$ optimal for a random variable $X$ with pmf $p$ on $\mathcal{X}$ and a finite set $\mathcal{Y}$, if it minimises $\mathbb{E}\left[\left|c^{\prime}(X)\right|\right]$ among all [[Classes of Codes|uniquely decodable]] codes $c^{\prime}: \mathcal{X} \longrightarrow \mathcal{Y}^*$.

In view of [[Kraft-McMillan inequality]], given a set $\mathcal{Y}$ a code $c: \mathcal{X} \longrightarrow \mathcal{Y}^*$ is optimal if it solves the constraint minimisation problem
$$
\begin{array}{ll}
\text { Minimise } & \sum_{x \in \mathcal{X}} p(x) l_x \\
\text { s.t. } & \sum_{x: p(x)>0} d^{-l_x} \leq 1 \text { and }\left(l_x\right)_{x \in \mathcal{X}} \subset \mathbb{N}
\end{array}
$$

### Lagrange Multiplier
Let us first neglect the integer constraint $l_x \in \mathbb{N}$ and assume $\sum d^{-l_x}=1$. This in turn is a simple optimisation problem that can be solved using Lagrangian multipliers, i.e. differentiating
$$
\sum_{x \in \mathcal{X}} p(x) l_x-\lambda\left(\sum_{x \in \mathcal{X}} d^{-l_x}-1\right)
$$
after $l_x$ and setting the derivative to 0 gives $$l_x=-\log _d(p(x))$$ and it remains to verify that this is indeed a minimum. This would give (still ignoring the integer constraint) an expected length $$\mathbb{E}[|c(X)|]=-\sum p(x) \log _d(p(x))=H_d(X).$$
## Theorem 3.9: Source coding for symbol codes

Let $X$ be a random variable taking values in a finite set $\mathcal{X}$ and $c$ a [[Classes of Codes|uniquely decodable]], $d$-ary source code. Then
$$
H_d(X) \leq \mathbb{E}[|c(X)|]
$$
and the equality holds iff $|c(x)|=-\log _d(\mathbb{P}(X=x))$.

### Proof
Set $l_x:=c(x)$ and $q(x)=\frac{d^{-l_x}}{\sum_{x \in \mathcal{X}}^{d^{-l_x}}}$, we have,
$$
\begin{aligned}
\mathbb{E}[|c(X)|]-H_d(X) & =\sum_{x \in \mathcal{X}} p(x) l_x+\sum_{x \in \mathcal{X}} p(x) \log _d(p(x)) \\
& =-\sum_{x \in \mathcal{X}} p(x) \log _d\left(d^{-l_x}\right)+\sum_{x \in \mathcal{X}} p(x) \log _d(p(x)) \\
& =-\sum_{x \in \mathcal{X}} p(x) \log _d\left(q(x) \sum_{x^{\prime} \in \mathcal{X}} d^{-l_{x^{\prime}}}\right)+\sum_{x \in \mathcal{X}} p(x) \log _d(p(x)) \\
& =-\sum_{x \in \mathcal{X}} p(x) \log _d\left(\sum_{x^{\prime} \in \mathcal{X}} d^{-l_{x^{\prime}}}\right)+\sum_{x \in \mathcal{X}} p(x) \log _d\left(\frac{p(x)}{q(x)}\right) \\
& =-\log _b\left(\sum_{x^{\prime} \in \mathcal{X}} d^{-l_{x^{\prime}}}\right)+D_d(p \| q) \\
& \geq 0,
\end{aligned}
$$
where used that by [[Kraft-McMillan inequality|Kraft-McMillan]]  $\sum_{x^{\prime} \in \mathcal{X}} d^{-l_{x^{\prime}}} \leq 1$ and that [[Divergence (Info Theory)|divergence]] is nonnegative. Note that the equality holds iff $\sum_{x^{\prime} \in \mathcal{X}} d^{-l_{x^{\prime}}}=1$ and $D(p \| q)=0$. Since $D(p \| q)=0$ implies $p=q$, the result follows by definition of $q$.

### Proposition 3.10
Let $X$ be a random variable taking values in a finite set $\mathcal{X}$ and $\mathcal{Y}$ a d-ary set. There exists an optimal code $c^*$ and
$$
H_d(X) \leq \mathbb{E}\left[\left|c^*(X)\right|\right]<H_d(X)+1 .
$$
#### Proof of Proposition 3.10
Set $l_x:=\left\lceil-\log _d(p(x))\right\rceil$ and note that $$\sum_{x \in \mathcal{X}} d^{-l_x} \leq \sum_{x \in \mathcal{X}} d^{-\left(-\log _d(p(x))\right)}=\sum_{x \in \mathcal{X}} p(x)=1.$$ Hence, by [[Kraft-McMillan inequality]] there exists a (not necessarily optimal) prefix code $c$ with word lengths $\left(l_x\right)_{x \in \mathcal{X}}$. Now by definition
$$
-\log _d(p(x)) \leq l_x<-\log _d(p(x))+1,
$$
so conclude by multiplying this inequality with $p(x)$ and taking summing over $x \in \mathcal{X}$ to get (3.2.2). There are countably many [[Classes of Codes|prefix codes]] with expected length less than a given finite number, so we can sort them by expected length and take a code that achieves the minimum. The optimal code can only have an expected length less or equal to that of $c$.
