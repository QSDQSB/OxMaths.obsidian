---
aliases: [linear regression, regression]
tags: [ML]
---
## Definition
In a linear model we model the random variable response $Y=y$ as a linear function of the explanatory variables $x_1, \ldots, x_p$, plus a normal error:
$$
y=\beta_1 x_1+\beta_2 x_2+\cdots+\beta_p x_p+\epsilon
$$
where $\epsilon \sim N\left(0, \sigma^2\right)$

### Assumptions
1. we have $n$ observations $y_1, y_2, \ldots, y_n$ from this model
2. and associated with observation $y_i$ is a vector $\mathbf{x}_i=\left(x_{i 1}, x_{i 2}, \ldots, x_{i p}\right)$ of the values of the $p$ explanatory variables for observation $i$, for $i=1,2, \ldots, n$.
3. So we assume that
$$
y_i=x_{i 1} \beta_1+x_{i 2} \beta_2+\cdots+x_{i p} \beta_p+\epsilon_i, \quad i=1, \ldots, n
$$
where $\epsilon_1, \epsilon_2, \ldots, \epsilon_n \stackrel{\text { iid }}{\sim} N\left(0, \sigma^2\right)$.

## Tests
### Testing a single parameter
Suppose we want to test the *significance* of a single parameter $\beta_j$. That is, we want to test $H_0: \beta_j=0$ against $H_1: \beta_j \neq 0$ for one particular value of $j$, where $1 \leqslant j \leqslant p$.