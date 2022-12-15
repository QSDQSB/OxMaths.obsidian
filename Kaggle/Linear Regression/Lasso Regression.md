---
aliases: [lasso penalty]
---
==Least Absolute Shrinkage and Selection Operator==

> https://towardsdatascience.com/from-linear-regression-to-ridge-regression-the-lasso-and-the-elastic-net-4eaecaf5f7e6


The cost function for Lasso (least absolute shrinkage and selection operator) regression can be written as

$$\sum_{i=1}^M\left(y_i-\hat{y}_i\right)^2=\sum_{i=1}^M\left(y_i-\sum_{j=0}^p w_j \times x_{i j}\right)^2+\lambda \sum_{j=0}^p\left|w_j\right|$$

The only difference is instead of taking the square of the coefficients, magnitudes are taken into account. This type of regularization (L1) can lead to zero coefficients i.e. some of the features are completely neglected for the evaluation of output. **So Lasso regression not only helps in reducing over-fitting but it can help us in feature selection.**

- The derivative of the cost function has **no closed form** (due to the `L1` loss on the weights)
### Dimension Reduction
Linear Programming
![](https://miro.medium.com/max/1400/1*Jd03Hyt2bpEv1r7UijLlpg.webp)