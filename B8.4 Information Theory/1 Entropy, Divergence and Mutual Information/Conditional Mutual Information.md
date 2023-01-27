#InfoTheory 
## Definition
Let $X, Y, Z$ be discrete random variables taking values in $\mathcal{X}$. The [[Conditional Mutual Information]] $I(X ; Y \mid Z)$ (conditioned on $Z)$ between $X$ and $Y$ is defined as
$$
I(X ; Y \mid Z):=H(X \mid Z)-H(X \mid Y, Z)
$$
Again, we can write this as $I(X ; Y \mid Z)=\mathbb{E}\left[\log \left(\frac{p_{X, Y \mid Z}(X, Y)}{p_{X \mid Z}(X) p_{Y \mid Z}(Y)}\right)\right]$, by which we can see that $I(X ; Y \mid Z)=$ $I(Y ; X \mid Z)$.