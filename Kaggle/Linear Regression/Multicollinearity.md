
## Consequences
1. Perfect [[multicollinearity]] makes the design matrix $X$ not full-rank, therefore $X^TX$ not invertible, i.e. the ordinary least square estimator $\hat{\beta}_{O L S}=\left(X^{\top} X\right)^{-1} X^{\top} y$ does not exist.
2. 
## Detection
1.  **Perturbing the data**: [[Multicollinearity]] can be detected by adding random noise to the data, re-running the regression many times, and seeing how much the coefficients change.
2. A formal detection-tolerance or the [variance inflation factor](https://en.wikipedia.org/wiki/Variance_inflation_factor "Variance inflation factor") (VIF) for multicollinearity: $$\text { tolerance }=1-R_j^2, \quad \mathrm{VIF}=\frac{1}{\text { tolerance }}$$where $R_j^2$ is the coefficient of determination of a regression of explanator $j$ on all the other explanators. A *tolerance* of less than $0.20$ or $0.10$, a VIF of $5$ or $10$ and above, or both, indicates a [[multicollinearity]] problem.

## Remedies
1.  ==Avoid dummies== Avoid the [dummy variable](https://en.wikipedia.org/wiki/Dummy_variable_(statistics) "Dummy variable (statistics)") trap; including a dummy variable for every category (e.g., summer, autumn, winter, and spring) and including a constant term in the regression together **guarantee** perfect multicollinearity.
2. ==Use part of data== Use independent subsets of data for estimation, and then apply those estimates to the whole data set. This may result in a slightly higher variance than that of the subsets, but the expectation of the coefficient values should be the same. Observe how much the coefficient values vary.
3. ==Not matter== Leave the model as is, despite multicollinearity. The presence of [[multicollinearity]] doesn't affect the efficiency of extrapolating the fitted model to new data, provided that the predictor variables follow the same pattern of multicollinearity in the new data as in the data on which the regression model is based.
4. ==Drop one variable== Drop one of the variables. An explanatory variable may be dropped to produce a model with significant coefficients. However, this loses information. Omission of a relevant variable results in biased coefficient estimates for the remaining explanatory variables that are correlated with the dropped variable.
5. **Obtain more data**, if possible. This is the preferred solution.
6. Use [[Lasso Regression]]/[[Ridge Regression]]/Principal Component Regression
7. If multicollinearity is caused by lagged values, use a **distributed lag technique**
8. Treat highly linearly related variables as a group and study their group effects