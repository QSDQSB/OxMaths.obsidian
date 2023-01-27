#FOSI 

## Theorem
Let $T$ be a [[Sufficient]] and [[Complete Statistic|complete]] [[Statistic]] for the statistical model $\mathcal{P}$ and let $\widehat{\gamma}$ be an unbiased [[Estimate|estimator]] for $\gamma=g(\theta) \in \mathbb{R}^k$.

Then $$\widehat{\gamma}_T=\mathbb{E}_\theta[\widehat{\gamma} \mid T]$$ is an [[Minimum Variance Unbiased Estimator|MVUE]] for $\gamma$.

### Proof
Let $\tilde{\gamma}$ be another unbiased estimator of $\gamma$. Then $\tilde{\gamma}_T=\mathbb{E}_\theta[\tilde{\gamma} \mid T]$ is also an unbiased estimator. By definition $\tilde{\gamma}_T, \widehat{\gamma}_T$ are both functions of $T$, independent of $\theta$ by sufficiency, so we can define $f(T):=\tilde{\gamma}_T-\widehat{\gamma}_T$. Since both are unbiased estimators of $\gamma$ we have that $\mathbb{E}_\theta[f(T)]=0$ for all $\theta$ and since $T$ is [[Complete Statistic|complete]] we have that $f(T)=0 P_\theta$ almost surely for all $\theta$. This proves that $\tilde{\gamma}_T=\widehat{\gamma}_T$ a.s. and therefore that for all $\theta$
$$
\operatorname{Cov}_\theta\left(\widehat{\gamma}_T\right)=\operatorname{Cov}_\theta\left(\tilde{\gamma}_T\right) \preceq \operatorname{Cov}_\theta(\tilde{\gamma}),
$$
where the inequality follows from the [[Rao-Blackwell Theorem]]. Since $\tilde{\gamma}$ was arbitrary the result follows.