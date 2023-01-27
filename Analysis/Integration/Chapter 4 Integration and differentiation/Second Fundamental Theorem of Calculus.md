## Second fundamental theorem of Calculus
#Analysis
>
Suppose that $F:[a, b] \rightarrow \mathbb{R}$ is [[Continuous]] on $[a, b]$ and [[differentiable]] on $(a, b)$. Suppose furthermore that its derivative $F^{\prime}$ is [[integrable]] on $(a, b)$. Then
>$$
\int_{a}^{b} F^{\prime}=F(b)-F(a).
>$$

### Proof
Let $\mathcal{P}$ be a partition, $a=x_{0}<x_{1}<\cdots<x_{n}=b$. We claim that some [[Riemann sum]] $\Sigma\left(F^{\prime} ; \mathcal{P}, \xi\right)$ is equal to $F(b)-F(a) .$ By [[Riemann Sum#Proposition 3 2]] (the harder direction of the equivalence between integrability and limits of Riemann sums), the [[Second Fundamental Theorem of Calculus]] follows immediately from this.

The claim is an almost immediate consequence of the [[mean value theorem]]. By that theorem, we may choose $\xi_{i} \in\left(x_{i-1}, x_{i}\right)$ so that $F^{\prime}\left(\xi_{i}\right)\left(x_{i}-x_{i-1}\right)=F\left(x_{i}\right)-F\left(x_{i-1}\right) .$ Summing from $i=1$ to $n$ gives
$$
\Sigma\left(F^{\prime} ; \mathcal{P}, \xi\right)=\sum_{i=1}^{n}\left(F\left(x_{i}\right)-F\left(x_{i-1}\right)\right)=F(b)-F(a) .
$$


 [[Volterra function]]