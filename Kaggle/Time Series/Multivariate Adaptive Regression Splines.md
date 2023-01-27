---
aliases: [MARS, MARS algorithm]
---
#ML 

https://bradleyboehmke.github.io/HOML/mars.html
## Earth Package

```py
from pyearth import Earth
y = average_sales.copy()
dp = DeterministicProcess(index=y.index, order=1)
X = dp.in_sample()
# Fit a MARS model with `Earth`
model = Earth()
model.fit(X, y)
y_pred = pd.Series(model.predict(X), index=X.index)
```

## Cons of Linear Regression (Adding Polynomial Terms)
Although useful, the typical implementation of *polynomial regression* and step functions require the user to explicitly identify and incorporate which variables should have what specific degree of interaction or at what points of a variable X should cut points be made for the step functions. Considering many data sets today can easily contain 50, 100, or more features, this would require an enormous and unnecessary time commitment from an analyst to determine these explicit non-linear settings.

## Procedure
### Finding a Cutpoint
MARS procedure will first look for the single point across the range of `X`values where two different linear relationships between `Y` and `X` achieve the smallest error (e.g., smallest SSE). What results is known as a **hinge function** $h(x−a)$, where a is the cutpoint value.
### Pruning
This procedure continues until many knots are found, producing a (potentially) highly non-linear prediction equation. Although including many knots may allow us to fit a really good relationship with our training data, it may not generalize very well to new, unseen data. Consequently, once the full set of knots has been identified, we can sequentially remove knots that do not contribute significantly to predictive accuracy. This process is known as “**pruning**” and we can use [[Cross Validation]], as we have with the previous models, to find the optimal number of knots.

## Pros of MARS
1. ==Handle various types of data== MARS naturally handles mixed types of predictors (quantitative and qualitative). MARS considers all possible binary partitions of the categories for a qualitative predictor into two groups. Each group then generates a pair of piecewise indicator functions for the two categories.
2. ==No feature engineering required== MARS also requires minimal feature engineering (e.g., feature scaling) and performs automated feature selection. For example, since MARS scans each predictor to identify a split that improves predictive accuracy, non-informative features will not be chosen.
3. **Highly correlated predictors** do not impede predictive accuracy as much as they do with OLS models.
## Cons of MARS
1. ==Slow to train== Typically slower to train.
2. ==Difficult to interpret== Although correlated predictors do not necessarily impede model performance, they can make model interpretation difficult.
3. ==Second feature not chosen in high correlation case== When two features are nearly perfectly correlated, the algorithm will essentially select the first one it happens to come across when scanning the features. Then, since it randomly selected one, the correlated feature will likely not be included as it adds no additional explanatory power.