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

There is an accuracy score metric for classifications. Check [[Adaboost#EXAMPLE CODE]]