### Change from  numerical/str to categorical
```py
X.FullBath = pd.Categorical(X.FullBath)
```
### Get Number of Unique Elements 
```py
# Get number of unique entries in each column with categorical data
object_nunique = list(map(lambda col: X_train[col].nunique(), object_cols))
d = dict(zip(object_cols, object_nunique))

# Print number of unique entries by column, in ascending order
sorted(d.items(), key=lambda x: x[1])
```
##### Select Categorical Columns with Cardinality >10
```py
high_cardinality_numcols = X_train.loc[:,X_train.nunique()>10].select_dtypes(include=['object']).shape[1]

```
### To Simply Drop Cats
```python
# Drop columns in training and validation data
drop_X_train = X_train.select_dtypes(exclude=['object'])
drop_X_valid = X_valid.select_dtypes(exclude=['object'])
```
### Ordinal Encoding
**Ordinal encoding** assigns each unique value to a different integer.
```py
from sklearn.preprocessing import OrdinalEncoder

label_X_train = X_train.copy()
label_X_valid = X_valid.copy()

# Apply ordinal encoder to each column with categorical data
ordinal_encoder = OrdinalEncoder()
label_X_train[object_cols] = ordinal_encoder.fit_transform(X_train[object_cols])
label_X_valid[object_cols] = ordinal_encoder.transform(X_valid[object_cols])

print("MAE from Approach 2 (Ordinal Encoding):") 
print(score_dataset(label_X_train, label_X_valid, y_train, y_valid))
```

### Adding columns to dataset
As `OrdinalEncoder` returns an nparray, we cannot use concat.
```py
label_X_train[good_label_cols] = ordinal_encoder.fit_transform(X_train[good_label_cols]) # Your code here
label_X_valid[good_label_cols] = ordinal_encoder.transform(X_valid[good_label_cols])
```
### Check the validity of categorical columns
```py
object_cols = [col for col in X_train.columns if X_train[col].dtype == "object"]

good_label_cols = [col for col in object_cols if 
                   set(X_valid[col]).issubset(set(X_train[col]))]

bad_label_cols = list(set(object_cols)-set(good_label_cols))
```

### One-Hot Encoding # DO THIS!
**One-hot encoding** creates new columns indicating the presence (or absence) of each possible value in the original data. 

We use the [`OneHotEncoder`](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html) class from scikit-learn to get one-hot encodings. There are a number of parameters that can be used to customise its behaviour.

-   We set `handle_unknown='ignore'` to avoid errors when the validation data contains classes that aren't represented in the training data, and
-   setting `sparse=False` ensures that the encoded columns are returned as a numpy array (instead of a sparse matrix).

To use the encoder, we supply only the categorical columns that we want to be one-hot encoded. For instance, to encode the training data, we supply `X_train[object_cols]`. (`object_cols` in the code cell below is a list of the column names with categorical data, and so `X_train[object_cols]` contains all of the categorical data in the training set.)
```py
from sklearn.preprocessing import OneHotEncoder

# Apply one-hot encoder to each column with categorical data
OH_encoder = OneHotEncoder(handle_unknown='ignore', sparse=False)
OH_cols_train = pd.DataFrame(OH_encoder.fit_transform(X_train[object_cols]))
OH_cols_valid = pd.DataFrame(OH_encoder.transform(X_valid[object_cols]))

# One-hot encoding removed index; put it back
OH_cols_train.index = X_train.index
OH_cols_valid.index = X_valid.index

# Remove categorical columns (will replace with one-hot encoding)
num_X_train = X_train.drop(object_cols, axis=1)
num_X_valid = X_valid.drop(object_cols, axis=1)

# Add one-hot encoded columns to numerical features
OH_X_train = pd.concat([num_X_train, OH_cols_train], axis=1)
OH_X_valid = pd.concat([num_X_valid, OH_cols_valid], axis=1)

print("MAE from Approach 3 (One-Hot Encoding):") 
print(score_dataset(OH_X_train, OH_X_valid, y_train, y_valid))
```
#### Code: Check Categorical Columns
```py
s = (X_train.dtypes == 'object')
object_cols = list(s[s].index)

print("Categorical variables:")
print(object_cols)
```