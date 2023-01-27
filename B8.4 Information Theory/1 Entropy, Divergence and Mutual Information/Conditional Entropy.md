#InfoTheory 
## Definition
Let $X, Y$ be discrete random variables taking values in $\mathcal{X}$. The [[Conditional Entropy]] of $Y$ given $X$ is defined as
$$
H(Y \mid X)=-\sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{X}} \mathbb{P}(X=x, Y=y) \log (\mathbb{P}(Y=y \mid X=x)
$$
In analogy to [[Entropy]], it holds that
$$
\begin{aligned}
H(Y \mid X) &=-\sum_{x \in \mathcal{X}} \mathbb{P}(X=x) \sum_{y \in \mathcal{X}} \mathbb{P}(Y=y \mid X=x) \log (\mathbb{P}(Y=y \mid X=x)\\
&=-\sum_{x \in \mathcal{X}} \mathbb{P}(X=x) \mathbb{E}\left[\log \left(p_{Y \mid X=x}(Y)\right]\right.\\
&=-\mathbb{E}\left[\log \left(p_{Y \mid X}(Y)\right] .\right.
\end{aligned}
$$
An intuitive way to think about $H(X \mid Y)$ is as the average surprise we have about $Y$ after having observed $X$ (e.g. if $Y=X$ there's no surprise).

