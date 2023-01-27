---
aliases: [maximal probability of error, arithmetic error]
---
## Definition
Let $(c, d)$ be a $(m, n)$-channel code for a $D M C(\mathcal{X}, M, \mathcal{Y})$. Set
$$
\varepsilon_i=\mathbb{P}(d(\mathbf{Y}) \neq i \mid c(i)=\mathbf{X}) \text { for } i=1, \cdots, m,
$$
where $\mathbf{X}=\left(X_1, \cdots, X_n\right)$ and $\mathbf{Y}=\left(Y_1, \cdots, Y_n\right)$ with $\left\{\left(X_i, Y_i\right)\right\}_{i=1, \cdots, n}$ consisting of i.i.d. copies of random variables $(X, Y)$ that realise the [[Discrete Memoryless Channel|DMC]]. We say that the channel code has
1) a maximal probability of error $\varepsilon_{\max }:=\max _{i \in\{1, \cdots, m\}} \varepsilon_i$
2) an arithmetic error $\bar{\varepsilon}:=\frac{1}{m} \sum_{i=1}^m \varepsilon_i$.
