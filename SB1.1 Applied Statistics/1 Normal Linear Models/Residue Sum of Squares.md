---
aliases: [RSS,residual]
---
## Definition
The vector of fitted values $\widehat{y}$, or the predicted response values, or the estimated response values, is defined by $\widehat{y}=X \widehat{\beta}$. So
$$
\widehat{y}=X \widehat{\beta}=X\left(X^T X\right)^{-1} X^T y=H y
$$
So the $i$ th fitted value is $\widehat{y}_i=\mathbf{x}_i^T \widehat{\beta}$.
The vector of residuals $e$ is defined by $e=y-\widehat{y}$.
So the $i$ th [[Residue Sum of Squares|residual]] is $e_i=y_i-\widehat{y}_i$.

The residual sum of squares is $\mathrm{RSS}=e^T e=\sum_{i=1}^n e_i^2$.

```ad-theorem
title: Theorem 1.4
(i) e and $\widehat{y}$ are independent.
(ii) $\widehat{\beta}$ and $R S S$ are independent.
(iii) $R S S \sim \sigma^2 \chi_{n-p}^2$.
```