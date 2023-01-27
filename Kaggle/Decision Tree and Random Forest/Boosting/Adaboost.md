#ML 
https://blog.paperspace.com/adaboost-optimizer/

AdaBoost is an ensemble learning method, AdaBoost uses an iterative approach to learn from the mistakes of weak classifiers, and turn them into strong ones.

the **Boosting** algorithm tries to build a strong learner (predictive model) from the mistakes of several weaker models. Boosting basically tries to reduce the bias error which arises when models are not able to identify relevant trends in the data. This happens by evaluating the difference between the predicted value and the actual value.

```ad-algorithm

1. Initially set uniform example weights.
1. for Each base learner do:
	1. Train base learner with a weighted sample.
	2. Test base learner on all data.
	3. Set learner weight with a weighted error.
	4. Set example weights based on ensemble predictions.
end for

```

### EXAMPLE CODE
```python
from sklearn.ensemble import AdaBoostClassifier
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn import metrics
```
```python
iris = datasets.load_iris()
X = iris.data
y = iris.target
print(X)
print(Y)
```
```python
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3) 
```
```python
abc = AdaBoostClassifier(n_estimators=50,
                         learning_rate=1)
```
```python
model = abc.fit(X_train, y_train)
```
```python
print("Accuracy:", metrics.accuracy_score(y_test, y_pred))

Output:
Accuracy:0.8666666666666667
```
### Pros and Cons
#### Pros
AdaBoost is not prone to overfitting though there is no concrete proof for this. It could be because of the reason that parameters are not jointly optimized — stage-wise estimation slows down the learning process.

AdaBoost can be used to improve the accuracy of your weak classifiers hence making it flexible.
#### Cons
Boosting technique learns progressively, it is important to ensure that you have **quality data**. AdaBoost is also extremely sensitive to Noisy data and outliers so if you do plan to use AdaBoost then it is highly recommended to eliminate them.

AdaBoost has also been proven to be slower than XGBoost.