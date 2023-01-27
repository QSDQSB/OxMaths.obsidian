---
aliases: [decision trees]
---
#ML
## Splitting Feature
Different measures (**Information Gain**, **Gini Index**, **Gain ratio**) are used for determining the best possible split at each node of the decision tree.

As the splitting process proceeds, we wish more samples within each node to belong to a single class, that is, increasing the **purity** of each node.

One of the most commonly used measures for purity is information [[Entropy]], or simply [[Entropy]].
### Information Gain
Suppose that the discrete feature $a$ has $V$ possible values $\left\{a^1, a^2, \ldots, a^V\right\}$. Then, splitting the data set $D$ by feature $a$ produces $V$ child nodes, where the $v$th child node $D^v$ includes all samples in $D$ taking the value $a^v$ for feature $a$. Then, the [[Entropy]] of $D^v$ can be calculated using (4.1). Since there are different numbers of samples in the child nodes, a weight $\left|D^v\right| /|D|$ is assigned to reflect the importance of each node, that is, the greater the number of samples, the greater the impact of the branch node. Then, the **information gain** of splitting the data set $D$ with feature $a$ is calculated as
$$
\operatorname{Gain}(D, a)=\operatorname{Ent}(D)-\sum_{v=1}^V \frac{\left|D^v\right|}{|D|} \operatorname{Ent}\left(D^v\right) .
$$
In general, the higher the information gain, the more purity improvement we can expect by splitting $D$ with feature $a$. Therefore, information gain can be used for split selection, that is, using $a_*=\underset{a \in A \operatorname{Gain}(D, a)}{\arg \max }$ as the splitting feature.
> Machine Learning, P83 contains an example of separating.

```ad-error
title: Bias of Information Gain
It turns out that the information gain criterion is *biased toward features with more possible values*. To reduce this bias, the renowned decision tree algorithm employs **gain ratio** to select features instead of employing information gain.
```
### Gain Ratio
The **gain ratio** of feature $a$ is defined as
$$
\text { Gain ratio }(D, a)=\frac{\operatorname{Gain}(D, a)}{\operatorname{IV}(a)},
$$
where
$$
\operatorname{IV}(a)=-\sum_{v=1}^V \frac{\left|D^v\right|}{|D|} \log _2 \frac{\left|D^v\right|}{|D|}
$$
is called the *intrinsic value* of feature $a$. $\operatorname{IV}(a)$ is large when feature $a$ has **many** possible values (i.e., large $V$).

In contrast to information gain, the gain ratio is biased toward features with **fewer possible values**.

#### Combination of Information Gain and Gain Ratio

```ad-algorithm
title: Heuristic Method
==(Quinlan 1993)== selecting the feature with the highest gain ratio from the set of candidate features with an information gain above the average.
```

### Gini Index
Gini value of data set $D$ is defined as
$$
\begin{aligned}
\operatorname{Gini}(D) & =\sum_{k=1}^{|\mathcal{Y}|} \sum_{k^{\prime} \neq k} p_k p_{k^{\prime}} \\
& =1-\sum_{k=1}^{|\mathcal{Y}|} p_k^2 .
\end{aligned}
$$
Intuitively, $\operatorname{Gini}(D)$ represents the **likelihood** of two samples we randomly selected from data set $D$ belonging to **different** classes.

The lower the $\operatorname{Gini}(D)$, the higher the purity of data set $D$.

The **Gini index** of feature $a$ is:

$$\operatorname{Gini index }(D, a)=\sum_{v=1}^V \frac{\left|D^v\right|}{|D|} \operatorname{Gini}\left(D^v\right)$$
Given a candidate feature set $A$, we select the feature with the **lowest** Gini index as the splitting feature, that is, $a_*=$ $\arg \min _{a \in A} \operatorname{Gini index} (D, a)$.
#### Gini Impurity
$$\boldsymbol{G}=\sum_{i=1}^c[p(i) *(1-p(i))]$$
Gini Gain = original Gini impurity - weighted Gini impurities

_higher the Gini Gain is better the split._

---
Classification Error $(\mathrm{CE})=1-\max \left[p_i\right]$
Where, $\mathrm{k}$ is the number of classes


## Continuous-Valued Attributes
[Source](https://medium.com/geekculture/handling-continuous-attributes-in-decision-trees-bbc044986621)
### two-way split
-   A comparison bases test condition of the form `attribute >= v` involves the determination of v.
-   It is easy to see that a brute force approach of trying out every single value of the continuous variable is computationally expensive.
-   A better way for identifying the split candidates involves **sorting** the values of the continuous attribute and **taking the midpoint** of the adjacent values in the sorted array.

### multiway split

#### Equal Width
- Converts the continuous data points into `n` categories each of equal width.
- The number of categories is a **hyper-parameter**.
- Sensitive to outliers.
#### Equal Frequency
- The **equal frequency** approach converts the continuous-valued attribute into `n` categories such that each category contains approximately the same number of data points.
#### Clustering
- More sophisticated methods involve the use of unsupervised clustering algorithms to define the optimal categories.

## ![[Pruning]]
---
# Code
## Library Import
```py
import pandas as pd
from sklearn.model_selection import train_test_split
```


## Train/Test Data and Split
```py
X_full = pd.read_csv('../input/train.csv', index_col='Id')
X_test_full = pd.read_csv('../input/test.csv', index_col='Id')

# Obtain target and predictors
y = X_full.SalePrice
features = ['LotArea', 'YearBuilt', '1stFlrSF', '2ndFlrSF', 'FullBath', 'BedroomAbvGr', 'TotRmsAbvGrd']
X = X_full[features].copy()
X_test = X_test_full[features].copy()

# Break off validation set from training data
X_train, X_valid, y_train, y_valid = train_test_split(X, y, train_size=0.8, test_size=0.2, random_state=0)
```

## Random Forest Models
```py
from sklearn.ensemble import RandomForestRegressor
# Define the models
model_1 = RandomForestRegressor(n_estimators=50, random_state=0)

model_2 = RandomForestRegressor(n_estimators=100, random_state=0)

model_3 = RandomForestRegressor(n_estimators=100, criterion='absolute_error', random_state=0)

model_4 = RandomForestRegressor(n_estimators=200, min_samples_split=20, random_state=0)

model_5 = RandomForestRegressor(n_estimators=100, max_depth=7, random_state=0)

models = [model_1, model_2, model_3, model_4, model_5]
```
## Testing MAE
```py
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

# Function for comparing different approaches
def score_dataset(X_train, X_valid, y_train, y_valid):
    model = RandomForestRegressor(n_estimators=100, random_state=0)
    model.fit(X_train, y_train)
    preds = model.predict(X_valid)
    return mean_absolute_error(y_valid, preds)
```
## Missing Data
- **axis** {0 or ‘index’, 1 or ‘columns’}, default 0
- **how** {‘any’, ‘all’}, default ‘any’
- **thresh** int, optional: Require that many non-NA values.
- **inplace** bool, default False: Whether to modify the DataFrame rather than creating a new one.
### To Make the Interviewer Happy
```py
missing_val_count_by_column = (X_train.isnull().sum())

print(missing_val_count_by_column[missing_val_count_by_column > 0])
```

### Methods
```py
cols_with_missing = [col for col in X_train.columns
                     if X_train[col].isnull().any()]
reduced_X_train = X_train.drop(cols_with_missing, axis=1)
reduced_X_valid = X_valid.drop(cols_with_missing, axis=1)
print("MAE from Approach 1 (Drop columns with missing values):")
print(score_dataset(reduced_X_train, reduced_X_valid, y_train, y_valid))
```
use `SimpleImputer` to replace missing values with the mean value along each column.
```py
from sklearn.impute import SimpleImputer

# Imputation
my_imputer = SimpleImputer()
imputed_X_train = pd.DataFrame( my_imputer.fit_transform(X_train))
imputed_X_valid = pd.DataFrame(my_imputer.transform(X_valid))

# Imputation removed column names; put them back
imputed_X_train.columns = X_train.columns
imputed_X_valid.columns = X_valid.columns

print("MAE from Approach 2 (Imputation):")
print(score_dataset(imputed_X_train, imputed_X_valid, y_train, y_valid))
```

We impute the missing values, while also keeping track of which values were imputed.
```py
# Make copy to avoid changing original data (when imputing)
X_train_plus = X_train.copy()
X_valid_plus = X_valid.copy()

# Make new columns indicating what will be imputed
for col in cols_with_missing:
    X_train_plus[col + '_was_missing'] = X_train_plus[col].isnull()
    X_valid_plus[col + '_was_missing'] = X_valid_plus[col].isnull()

# Imputation
my_imputer = SimpleImputer()
imputed_X_train_plus = pd.DataFrame(my_imputer.fit_transform(X_train_plus))
imputed_X_valid_plus = pd.DataFrame(my_imputer.transform(X_valid_plus))

# Imputation removed column names; put them back
imputed_X_train_plus.columns = X_train_plus.columns
imputed_X_valid_plus.columns = X_valid_plus.columns

print("MAE from Approach 3 (An Extension to Imputation):")
print(score_dataset(imputed_X_train_plus, imputed_X_valid_plus, y_train, y_valid))
```