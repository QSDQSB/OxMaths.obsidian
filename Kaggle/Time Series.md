```py
# add time index (dummy)
df['Time'] = np.arange(len(tunnel.index)) 
# add time lag
df['Lag_1'] = df['Hardcover'].shift(1)
# note that if we regress on one-dimension `X`, then we need to capture X as 2D array:
X = df.loc[:,['columns']]
```
## Moving Average
```py
moving_average = tunnel.rolling(
    window=365,       # 365-day window
    center=True,      # puts the average at the center of the window
    min_periods=183,  # choose about half the window size
).mean()
```
## Time Dummy by `DeterministicProcess`
```py
from statsmodels.tsa.deterministic import DeterministicProcess

dp = DeterministicProcess(
    index=tunnel.index,  # dates from the training data
    constant=True,       # dummy feature for the bias (y_intercept)
    order=1,             # the time dummy (trend)
    drop=True,           # drop terms if necessary to avoid collinearity
)
# `in_sample` creates features for the dates given in the `index` argument
X = dp.in_sample()
##################
from sklearn.linear_model import LinearRegression
y = tunnel["NumVehicles"]  # the target
# The intercept is the same as the `const` feature from
# DeterministicProcess. LinearRegression behaves badly with duplicated
# features, so we need to be sure to exclude it here.
model = LinearRegression(fit_intercept=False)
model.fit(X, y)
y_pred = pd.Series(model.predict(X), index=X.index)
```
### Making Predictions with `DeterministicProcess`
```py
X = dp.out_of_sample(steps=30)
y_fore = pd.Series(model.predict(X), index=X.index)
```