---
aliases: [extreme gradient boosting]
---
#ML
## Pros of XGBoost
-   **Regularization**: XGBoost offers additional regularization hyperparameters, which we will discuss shortly, that provides added protection against overfitting.
- **Early stopping**: XGBoost implements ***early stopping*** so that we can stop model assessment when additional trees offer no improvement.
- **Parallel Processing**: Since [[gradient boosting]] is sequential in nature it is extremely difficult to parallelise. XGBoost has implemented procedures to support GPU and Spark compatibility which allows you to fit gradient boosting using powerful distributed processing engines.
- 
### Gradient Boosting
**[[Gradient boosting]]** is a method that goes through cycles to iteratively add models into an ensemble.
-   First, we use the current ensemble to generate predictions for each observation in the dataset. To make a prediction, we add the predictions from all models in the ensemble. 
-   These predictions are used to calculate a loss function (like [mean squared error](https://en.wikipedia.org/wiki/Mean_squared_error), for instance).
-   Then, we use the loss function to fit a new model that will be added to the ensemble. Specifically, we determine model parameters so that adding this new model to the ensemble will reduce the loss. (Side note: The "gradient" in "gradient boosting" refers to the fact that we'll use [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent) on the loss function to determine the parameters in this new model.)
-   Finally, we add the new model to ensemble, and ...
```py
from xgboost import XGBRegressor

my_model = XGBRegressor()
my_model.fit(X_train, y_train)
```

```py
from sklearn.metrics import mean_absolute_error

predictions = my_model.predict(X_valid)
print("Mean Absolute Error: " + str(mean_absolute_error(predictions, y_valid)))
```

### Configuration
#### `early_stopping_rounds`

`early_stopping_rounds` offers a way to automatically find the ideal value for `n_estimators`. Early stopping causes the model to stop iterating when the validation score stops improving, even if we aren't at the hard stop for `n_estimators`. It's smart to set a high value for `n_estimators` and then use `early_stopping_rounds` to find the optimal time to stop iterating.

>Setting `early_stopping_rounds=5` is a reasonable choice.

```py
my_model = XGBRegressor(n_estimators=300, 
	learning_rate = 0.05,n_jobs=4,early_stopping_rounds = 5)
my_model.fit(X_train, y_train,
	eval_set=[(X_valid, y_valid)],
	verbose=False)
	#verbose print score every x times
```


#### `learning_rate`

Instead of getting predictions by simply adding up the predictions from each component model, we can multiply the predictions from each model by a small number (known as the **learning rate**) before adding them in.

This means each tree we add to the ensemble helps us less. So, we can set a higher value for `n_estimators`without overfitting. If we use early stopping, the appropriate number of trees will be determined automatically.
Default = 0.1
```py
my_model = XGBRegressor(n_estimators=1000, learning_rate=0.05)
```

#### Others
`n_jobs`: Number of cores