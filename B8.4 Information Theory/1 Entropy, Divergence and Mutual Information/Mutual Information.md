#InfoTheory 
## Definition
Let $X, Y$ be discrete random variables taking values in $\mathcal{X}$ and $\mathcal{Y}$ respectively. The [[Mutual Information]] $I(X ; Y)$ between $X$ and $Y$ is defined as
$$
\left.I(X ; Y)=\sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} \mathbb{P}(X=x, Y=y) \log \left(\frac{\mathbb{P}(X=x, Y=y)}{\mathbb{P}(X=x) \mathbb{P}(Y=y}\right)\right)
$$
Denote with $p_{X, Y}, p_X, p_Y$ the pmfs of $(X, Y), X$ and $Y$. Then
$$
I(X ; Y)=D\left(p_{X, Y} \| p_X p_Y\right)
$$

1. we can regard the mutual information as a measure on how much dependence there is between two random variables.
2. Unlike covariance $\operatorname{Cov}(X, Y)=\mathbb{E}[(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])]$, the [[Mutual Information]] $I(X ; Y)$ takes into account higher order dependence (not just second order dependence).
3. Another way to think about mutual information is in terms of entropies
$$
I(X ; Y)=\mathbb{E}\left[\log \left(\frac{p_{X, Y}(X, Y)}{p_X(X) p_Y(Y)}\right)\right]=H(X)+H(Y)-H(X, Y).
$$
