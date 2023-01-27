#InfoTheory 
## Definition
Let $X$ be a discrete random variable taking values in $\mathcal{X}$ with $p m f p_X, p(\cdot \mid x)$ and $q(\cdot \mid x)$ are two (conditional on the parameter $x$ ) pmfs on $\mathcal{X}$ for any $x \in \mathcal{X}$. The [[divergence]] between $p(\cdot \mid X)$ and $q(\cdot \mid X)$ conditioned on $p_X$ (also known as [[Conditional Divergence]], conditional Kullback-Leibler divergence, condition relative [[Entropy]]) is defined as
$$
D\left(p_{Y \mid X} \| q_{Y \mid X} \mid p_X\right)=\sum_{x \in \mathcal{X}} p_X(x) D\left(p_{Y_1 \mid X=x} \| q_{Y_2 \mid X=x}\right)
$$
where random variables $X$, $Y$, $Y_1$, $Y_2$ are all constructed, such that $$p_{Y \mid X}(y \mid x)=p(y \mid x)=p_{Y_1 \mid X}(y \mid x),$$$$q_{Y \mid X}(y \mid x)=q(y \mid x)=p_{Y_2 \mid X}(y \mid x)$$
Above can be written as
$$
D\left(p_{Y \mid X} \| q_{Y \mid X} \mid p_X\right)=\mathbb{E}\left[D\left(p_{Y_1 \mid X}(\cdot \mid X) \| p_{Y_2 \mid X}(\cdot \mid X)\right)\right]
$$


