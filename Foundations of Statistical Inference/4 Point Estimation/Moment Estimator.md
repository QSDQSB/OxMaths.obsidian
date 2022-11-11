#FOSI 

Suppose $\left(X_1, \ldots, X_n\right)$ is a sample of i.i.d. $P_\theta$-distributed random variables, where $\theta \in \Theta$ is the parameter. In general if $X \sim P_\theta$, then the moments $m_r=\mathbb{E}_\theta\left[X^r\right]$ for $r=1,2, \ldots$ depend on $\theta$.

Assume there exists a function $h$ such that $\gamma=h\left(m_1, \ldots, m_r\right)$
## Definition
For each $k=1, \ldots, r$ let $\widehat{m}_k=\frac{1}{n} \sum_{i=1}^n X_i^k$. Then the [[moment estimator]] for $\gamma$ is defined as
$$
\widehat{\gamma}_{\mathrm{MME}}=h\left(\widehat{m}_1, \ldots, \widehat{m}_r\right)
$$