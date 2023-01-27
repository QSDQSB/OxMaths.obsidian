
#ML 

In ridge regression, the cost function is altered by adding a penalty equivalent to square of the magnitude of the coefficients.

$$\sum_{i=1}^M\left(y_i-\hat{y}_i\right)^2=\sum_{i=1}^M\left(y_i-\sum_{j=0}^p w_j \times x_{i j}\right)^2+\lambda \sum_{j=0}^p w_j^2$$

So ridge regression puts constraint on the coefficients (w). The penalty term (lambda) regularizes the coefficients such that if the coefficients take large values the optimization function is penalized. So, ridge regression shrinks the coefficients and it **helps to reduce the model complexity and [[multicollinearity]].**

- Must scale your predictors before applying Ridge.
- leads to robust regression, less sensitive to **noise** in the data

## Choosing $\lambda$
To find the ideal lambda, we calculate the [[Mean Squared Error|MSE]] on the validation set using a sequence of possible $\lambda$ values. We can set up a  function `getRidgeLambda` that tries a sequence of $\lambda$ values on the holdout training set, and checks the [[Mean Squared Error|MSE]] on the validation set. It returns the ideal parameter $\lambda$, which we will then use to fit our whole training data with.