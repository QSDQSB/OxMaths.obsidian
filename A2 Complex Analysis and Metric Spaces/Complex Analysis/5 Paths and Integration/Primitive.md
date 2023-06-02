#ComplexAnalysis 

## Definition
Let $U \subseteq \mathbb{C}$ be an open set and let $f: U \rightarrow \mathbb{C}$ be a continuous function. If there exists a [[Complex Differentiable|differentiable]] function $F: U \rightarrow \mathbb{C}$ with $F^{\prime}(z)=$ $f(z)$ then we say $F$ is a [[Primitive]] for $f$ on $U$.

## Example 6.1
Let $f: \mathbb{C}^{\times} \rightarrow \mathbb{C}^{\times}$ be the function $f(z)=1 / z$. Then $f$ does not have a [[Primitive]] on $\mathbb{C}^{\times}$. Indeed if $\gamma:[0,1] \rightarrow \mathbb{C}$ is the [[Path]] $\gamma(t)=\exp (2 \pi i t)$. Then
$$
\int_{\gamma} f(z) d z=\int_{0}^{1} f(\gamma(t)) \gamma^{\prime}(t) d t=\int_{0}^{1} \frac{1}{\exp (2 \pi i t)} \cdot(2 \pi i \exp (2 \pi i t)) d t=2 \pi i
$$
Since the [[Path]] $\gamma$ is closed, this integral would have to be zero if $f(z)$ has a [[Primitive]] in an open set containing $\gamma^{*}$, thus $f(z)$ has no primitive on $\mathbb{C}^{\times}$as claimed.