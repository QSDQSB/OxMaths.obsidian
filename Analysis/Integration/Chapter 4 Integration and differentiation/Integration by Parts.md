## Integration by Parts
#Analysis 
### Proposition 4.5
Suppose that $f, g:[a, b] \rightarrow \mathbb{R}$ are [[continuous]] functions, differentiable on $(a, b)$. Suppose that the derivatives $f^{\prime}, g^{\prime}$ are [[integrable]] on $(a, b) .$
Then $f g^{\prime}$ and $f^{\prime} g$ are integrable on $(a, b)$, and
$$
\int_{a}^{b} f g^{\prime}=f(b) g(b)-f(a) g(a)-\int_{a}^{b} f^{\prime} g.
$$

### Proof
We use the [[Second Fundamental Theorem of Calculus]], applied to the function $F=f g$. We know from basic differential calculus that $F$ is differentiable and $F^{\prime}=f^{\prime} g+f g^{\prime}$. By [[Integrable#Proposit ion 1 19]] and the assumption that $f^{\prime}, g^{\prime}$ are integrable, $F^{\prime}$ is integrable on $(a, b)$. Applying the fundamental theorem gives
$$
\int_{a}^{b} F^{\prime}=F(b)-F(a).
$$
