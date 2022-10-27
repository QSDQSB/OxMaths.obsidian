# Tonelli's Theorem
#Integration 
```ad-theorem
title: Tonelli's Theorem
Let $f: \mathbb{R}^{2} \rightarrow \mathbb{R}$ be a [[measurable]] function, and suppose that either of the following repeated integrals is finite:
$$
\int_{\mathbb{R}}\left(\int_{\mathbb{R}}|f(x, y)| d x\right) d y, \quad \int_{\mathbb{R}}\left(\int_{\mathbb{R}}|f(x, y)| d y\right) d x .
$$
Then $f$ is integrable. Hence, [[Fubini's Theorem]] is applicable to both $f$ and $|f|$.
```

### Proof
Apply Theorem $7.1$ to get that $\int_{\mathbb{R}^{2}}|f|<\infty$. Then $f \in \mathcal{L}^{1}\left(\mathbb{R}^{2}\right)$, by Proposition $4.8(2) .$