---
aliases: [gradient boosting machines, GBM, GB, boosting]
---
[🍳](https://bradleyboehmke.github.io/HOML/gbm.html#ref-freund1999adaptive)

Whereas [[Random Forest|random forests]] build an ensemble of deep independent trees, GBMs build an ensemble of shallow trees in sequence with each tree learning and improving on the previous one.

### Main Idea
The main idea of boosting is to add new models to the ensemble **_sequentially_**. In essence, boosting attacks the bias-variance-tradeoff by starting with a _weak_ model (e.g., a [[decision tree]] with only a few splits) and sequentially _boosts_ its performance by continuing to build new trees, where each new tree in the sequence tries to fix up where the previous one made the biggest mistakes (i.e., each new tree in the sequence will focus on the training rows where the previous tree had the largest prediction errors)

![](https://bradleyboehmke.github.io/HOML/images/boosted-trees-process.png)

#### Base Learners
Boosting is a framework that iteratively improves _any_ weak learning model. In practice however, boosted algorithms almost always use [[Decision Tree|decision trees]] as the base learner.

#### Weak Models Training
- A weak model is one whose error rate is only slightly better than random guessing.
- With regards to decision trees, shallow trees (i.e., trees with relatively few splits) represent a weak learner. In boosting, trees with 1–6 splits are most common.

#### Sequential Training
Boosted trees are grown sequentially; each tree is grown using information from previously grown trees to improve performance.

1. Fit a decision tree to the data: $F_1(x)=y$,
2. We then fit the next decision tree to the residuals of the previous: $h_1(x)=y-F_1(x)$,
3. Add this new tree to our algorithm: $F_2(x)=F_1(x)+h_1(x)$,
4. Fit the next decision tree to the residuals of $F_2: h_2(x)=y-F_2(x)$,
5. Add this new tree to our algorithm: $F_3(x)=F_2(x)+h_2(x)$
6. Continue this process until some mechanism (i.e. cross validation) tells us to stop.
### Dropout
Dropout is an alternative approach to reduce overfitting and can loosely be described as regularization.
- When constructing a GBM, the first few trees added at the beginning of the ensemble typically dominate the model performance while trees added later typically improve the prediction for only a small subset of the feature space. 
- This often increases the risk of overfitting and the idea of **dropout** is to build an ensemble by **randomly dropping trees** in the boosting sequence. This is commonly referred to as `DART`.
- `DART` refers to _Dropout Additive Regression Trees_. The percentage of dropouts is another regularization parameter.
## ![[Gradient Descent]]
