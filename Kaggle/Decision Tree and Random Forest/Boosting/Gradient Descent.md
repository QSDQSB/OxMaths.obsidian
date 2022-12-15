[[Gradient Boosting]] is considered a **_gradient descent_** algorithm.

-  The general idea of gradient descent is to tweak parameter(s) iteratively in order to minimise a cost function.
- Gradient descent can be performed on any loss function that is differentiable.
- An important parameter in gradient descent is the size of the steps which is controlled by the ___learning rate___.

### Stochastic Gradient Descent
not all cost functions are _convex_ (i.e., bowl shaped). There may be local minimas, plateaus, and other irregular terrain of the loss function that makes finding the global minimum difficult. **_Stochastic gradient descent_** can help us address this problem by sampling a fraction of the training observations and growing the next tree using that subsample. This makes the algorithm faster but the stochastic nature of random sampling also adds some **random nature** in descending the loss function’s gradient. ![](https://bradleyboehmke.github.io/HOML/10-gradient-boosting_files/figure-html/stochastic-gradient-descent-fig-1.png)