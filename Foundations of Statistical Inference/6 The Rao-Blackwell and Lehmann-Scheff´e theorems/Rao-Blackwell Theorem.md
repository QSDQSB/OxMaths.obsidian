## Theorem
Let $X \sim P_\theta$ and let $T$ be a [[sufficient]] [[statistic]]. Let $\widehat{\gamma}$ be an [[Bias|unbiased]] [[Estimate|estimator]] for $\gamma=g(\theta) \in \mathbb{R}^k$.

Define $\widehat{\gamma}_T=\mathbb{E}_\theta[\widehat{\gamma} \mid T]$. Then:
1. $\widehat{\gamma}_T$ is a function of $T$ alone and does not depend on $\theta$,
2. $\mathbb{E}_\theta\left[\widehat{\gamma}_T\right]=\gamma \forall \theta \in \Theta$,
3. $\operatorname{Cov}_\theta\left(\widehat{\gamma}_T\right) \preceq \operatorname{Cov}_\theta(\widehat{\gamma})$ (which reduces to $\operatorname{Var}_\theta\left(\widehat{\gamma}_T\right) \leqslant \operatorname{Var}_\theta(\widehat{\gamma})$, in the case $k=1$ ).
If $\operatorname{tr}\left(\operatorname{Cov}_\theta(\widehat{\gamma})\right)<\infty$ then $\operatorname{Cov}_\theta\left(\widehat{\gamma}_T\right)=\operatorname{Cov}_\theta(\widehat{\gamma})$ if and only if $\widehat{\gamma}_T=\widehat{\gamma}$ almost surely.

> Intuitively, this says that ‘any [[Bias|unbiased]] estimator can always be improved by a [[sufficient]] statistic. The last statement says that if some unbiased estimator cannot be improved by conditioning on a [[sufficient]] statistics, then the [[Estimate|estimator]] is essentially a function of the [[statistic]].

### Proof
1. Since $T$ is [[sufficient]], $f(x \mid \theta, T)$ is independent of $\theta$, so
$$
\widehat{\gamma}_T=\mathbb{E}_\theta[\widehat{\gamma} \mid T=t]=\int_{\mathcal{X}} \widehat{\gamma}(x) f(x \mid t, \theta) \mathrm{d} x=\int_{\mathcal{X}} \widehat{\gamma}(x) f(x \mid t) \mathrm{d} x
$$
which does not depend on $\theta$.
2. By the unbiasedness of $\widehat{\gamma}$ and the tower property of expectations,
$$
\mathbb{E}_\theta\left[\widehat{\gamma}_T\right]=\mathbb{E}_\theta\left[\mathbb{E}_\theta[\widehat{\gamma} \mid T]\right]=\mathbb{E}_\theta[\widehat{\gamma}]=\gamma .
$$
3. For $k=1$, the result is fairly straightforward:
(6.1)
$\operatorname{Var}_\theta(\widehat{\gamma})=\mathbb{E}_\theta\left[(\widehat{\gamma}-\gamma)^2\right]=\mathbb{E}_\theta\left[\left(\widehat{\gamma}-\widehat{\gamma}_T+\widehat{\gamma}_T-\gamma\right)^2\right]$
(6.2) $\quad=\mathbb{E}_\theta\left[\mathbb{E}_\theta\left[\left(\widehat{\gamma}-\widehat{\gamma}_T+\widehat{\gamma}_T-\gamma\right)^2 \mid T\right]\right]$
(6.3) $\quad=\mathbb{E}_\theta\left[\mathbb{E}_\theta\left[\left(\widehat{\gamma}-\widehat{\gamma}_T\right)^2 \mid T\right]-2 \mathbb{E}_\theta\left[\left(\widehat{\gamma}-\widehat{\gamma}_T\right)\left(\widehat{\gamma}_T-\gamma\right) \mid T\right]+\mathbb{E}_\theta\left[\left(\widehat{\gamma}_T-\gamma\right)^2 \mid T\right]\right.$
(6.4) $\quad=\mathbb{E}_\theta\left[\mathbb{E}_\theta\left[\left(\widehat{\gamma}-\widehat{\gamma}_T\right)^2 \mid T\right]\right]-0+\mathbb{E}_\theta\left[\mathbb{E}_\theta\left[\left(\widehat{\gamma}_T-\gamma\right)^2 \mid T\right]\right]$
(6.5) $\quad=\mathbb{E}_\theta\left[\operatorname{Var}_\theta(\widehat{\gamma} \mid T)\right]+\operatorname{Var}_\theta\left(\widehat{\gamma}_T\right)$
(6.6) $\quad \geqslant \operatorname{Var}_\theta\left(\widehat{\gamma}_T\right)$.
The first term here is clearly nonnegative, and it isn’t too hard to see that the third term is equal to zero. The result follows.

