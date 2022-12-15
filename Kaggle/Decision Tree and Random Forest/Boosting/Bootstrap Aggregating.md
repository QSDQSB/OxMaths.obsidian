---
aliases: [bagging]
---
_Bootstrap aggregating_ (bagging) prediction models is a general method for fitting multiple versions of a prediction model and then combining (or ensembling) them into an aggregated prediction.

Bagging is a fairly straight forward algorithm in which $b$ bootstrap copies of the original training data are created, the regression or classification algorithm (commonly referred to as the _base learner_) is applied to each bootstrap sample and, in the regression context, new predictions are made by **averaging** the predictions together from the individual base learners.

- Because of the aggregation process, bagging effectively reduces the variance of an individual base learner (i.e., averaging reduces variance)
- Bagging does not always improve upon an individual base learner.
- Bagging improves the prediction accuracy for high variance (and low bias) models at the expense of interpretability and computational speed.
- ==Problem== he trees in bagging are not completely independent of each other since all the original features are considered at every split of every tree. Rather, trees from different bootstrap samples typically have similar structure to each other (especially at the top of the tree) due to any underlying strong relationships.