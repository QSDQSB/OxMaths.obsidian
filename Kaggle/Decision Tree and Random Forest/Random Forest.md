---
aliases: [random forests]
---

- _Random forests_ are a modification of [[Bootstrap Aggregating|bagged]] [[Decision Tree|decision trees]] that build a large collection of _de-correlated_ trees to further improve predictive performance.
- [[Bootstrap Aggregating|Bagging]] trees introduces a random component into the tree building process by building many trees on bootstrapped copies of the training data.

## Reducing Correlation
while growing a [[decision tree]] during the [[Bootstrap Aggregating|bagging]] process, random forests perform _split-variable randomization_ where each time a split is to be performed, the search for the split variable is limited to a **random subset** of $m_{try}$ of the original $p$ features.

>Typical values for $m_{try}$: $m={p\over3}$ for regression, $m=\sqrt{p}$ for classification.

## Hyperparameters
-   The number of trees in the forest
-   The number of features to consider at any given split: $m_{try}$
-   The complexity of each tree
-   The sampling scheme
-   The splitting rule to use during tree construction
### Number of Trees
 the number of trees needs to be sufficiently large to stabilize the error rate. A good rule of thumb is to start with **10 times** the number of features.
 ![](https://bradleyboehmke.github.io/HOML/09-random-forest_files/figure-html/tuning-trees-1.png)

### $m_{try}$
- when there are **fewer** relevant predictors (e.g., noisy data) a **higher** value of $m_{try}$ tends to perform better because it makes it more likely to select those features with the strongest signal.
- When there are **many** relevant predictors, a **lower** $m_{try}$ might perform better.

> WHY NOT USE [[Grid Search]]?