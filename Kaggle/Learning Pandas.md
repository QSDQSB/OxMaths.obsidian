# Learning Pandas
> Course from Kaggle
> [Pandas User Guide](https://pandas.pydata.org/pandas-docs/stable/user_guide/index.html#user-guide)

## DataFrame

### Creating a New Dataframe
Consider a `DataFrame` as a python dictionary of column vectors.
```py
pd.DataFrame({'Bob': ['I liked it.', 'It was awful.'], 'Sue': ['Pretty good.', 'Bland.']})
```
#### `index` Attribute
The `index` attribute names the row.
```py
pd.DataFrame({'Bob': ['I liked it.', 'It was awful.'],

'Sue': ['Pretty good.', 'Bland.']},

index=['Product A', 'Product B'])
```
### Combine
#### Concat
The simplest combining method is `concat()`. Given a list of elements, this function will smush those elements together along an axis.

This is useful when we have data in different DataFrame or Series objects but having the same fields (==columns==).
```py
pd.concat([canadian_youtube, british_youtube])
```
#### Join
`join()` lets you combine different DataFrame objects which have an index in common.

```py
left = canadian_youtube.set_index(['title', 'trending_date'])
right = british_youtube.set_index(['title', 'trending_date'])

left.join(right, lsuffix='_CAN', rsuffix='_UK')
```

### Series
 A `series` is a single column of a `DataFrame`. You can use `index` attribute, and a single name `name`.
  
 ### DataFrame Commands

 #### Describe

```py
 df.describe()
```

#### Rename
```py
reviews.rename(columns={'points': 'score'})
reviews.rename(index={0: 'firstEntry', 1: 'secondEntry'})
reviews.rename_axis("wines", axis='rows').rename_axis("fields", axis='columns') # rename axis

```
### Selections
#### Index-Based Selection
Pandas indexing works in one of two paradigms. The first is **index-based selection**: selecting data based on its numerical position in the data. `iloc` follows this paradigm.

To select the first ==row== of data in a DataFrame, we may use the following:
```py
reviews.iloc[0]
```
Both `loc` and `iloc` are row-first, column-second. This is the opposite of what we do in native Python, which is column-first, row-second.

To get a ==column== with `iloc`, we can do the following:
```py
reviews.iloc[:, 0]
reviews.iloc[:3, 0] # 这个地方是从0选到2，in total 3
reviews.iloc[[0, 1, 2], 0]
reviews.iloc[-5:] # start counting forwards from the _end_ of the values. So for example here are the last five elements of the dataset.
```
#### Index-Based Selection
```py
reviews.loc[:, ['taster_name', 'taster_twitter_handle', 'points']]
reviews.loc[0, 'country']
reviews.loc[reviews.country == 'Italy']
```

#### Conditional Selection
```py
reviews.loc[(reviews.country == 'Italy') & (reviews.points >= 90)]
# '|' for or
reviews.loc[reviews.country.isin(['Italy', 'France'])]
reviews.loc[reviews.price.notnull()]
reviews.loc[0:9,'description'] #这里是0选到9

```
### Assigning Values
```py
reviews['index_backwards'] = range(len(reviews), 0, -1) # assign with an iterable of values

```

### Mapping
>Note that `map()` and `apply()` return new, transformed Series and DataFrames, respectively. They don't modify the original data they're called on.
#### Map
`map()` returns a new `Series` where all the values have been transformed by your function.
```py
reviews.points.map(lambda p: p - review_points_mean)

```
#### Apply
`apply()` is the equivalent method if we want to transform a whole `DataFrame` by calling a custom method on each row.
```py
def remean_points(row):
    row.points = row.points - review_points_mean
    return row

reviews.apply(remean_points, axis='columns')
```
`example 2`
```py
def scoring(x):
    if x.country=='Canada' or x.points>=95:
        return(3)
    elif x.points<85:
        return(1)
    else:
        return(2)
star_ratings = reviews.apply(scoring, axis='columns')
```
If we had called `reviews.apply()` with `axis='index'`, then instead of passing a function to transform each row, we would need to give a function to transform each _column_.

### Group
`groupby`
```py
reviews.groupby('points').points.count()
reviews.groupby('points').price.min()
reviews.groupby('point').size() # Series of sizes of each group
reviews.groupby('winery').apply(lambda df: df.title.iloc[0])
#	Out[4]:
#	winery
#	1+1=3                          1+1=3 NV Rosé Sparkling (Cava)
#	10 Knots                 10 Knots 2010 Viognier (Paso Robles)
#	                                  ...                        
#	àMaurice    àMaurice 2013 Fred Estate Syrah (Walla Walla V...
#	Štoka                         Štoka 2009 Izbrani Teran (Kras)
#	Length: 16757, dtype: object

reviews.groupby(['country', 'province']).apply(lambda df: df.loc[df.points.idxmax()])
------
reviewer_mean_ratings = reviews.groupby('taster_name').points.mean()
```


#### Agg
`agg` aggregate using one or more operations over the specified axis.
```py
df.agg(['sum', 'min'])
df.agg("mean", axis="columns")
```
##### Index Reset
Group actions sometimes generate multi-index, and sometimes we need to convert it back to a regular index:
```py
countries_reviewed.reset_index()
```

### Sort
```py
countries_reviewed.sort_values(by='len')
countries_reviewed.sort_values(by='len', ascending=False) # descending
countries_reviewed.sort_values(by=['country', 'len']) # sort by more than one value

best_rating_per_price = reviews.groupby('price').points.max().sort_index()
# first group by price, then find greatest point in each price group, then sort by price.
```
To sort by index values, use the companion method `sort_index()`. This method has the same arguments and default order:

### Missing Values
```py
reviews[pd.isnull(reviews.country)] # select missing values
reviews.region_2.fillna("Unknown") # fill with unknown
n_missing_prices = reviews.price.isnull().sum() # count no. of missing values
```
### Other Basics
Data types, Replacing values,
 ```py
df.T # transpose
df.price.dtype # data type
df.dtypes
reviews.points.astype('float64') # convert type
reviews.taster_twitter_handle.replace("@kerinokeefe", "@kerino") # replace value
DataFrame.count(axis=0, level=None, numeric_only=False)
DataFrame.std
DataFrame.cumsum
reviews.taster_name.unique() # return an array of unique values
reviews.taster_name.value_counts() # return a series
fr = reviews.description.str.contains('fruity').sum() # to check the number of Series that contains sth
```
#### Reading CSVs
```py
wine_reviews = pd.read_csv("../input/wine-reviews/winemag-data-130k-v2.csv")
```
- `shape` attribute describes how large the `DataFrame` is
```py
wine_reviews.shape
(129971, 14)
```
- To make pandas use that column for the index (instead of creating a new one from scratch), we can specify an `index_col`.
```py
wine_reviews = pd.read_csv("../input/wine-reviews/winemag-data-130k-v2.csv", index_col=0)
```
- `head` method displays the first five rows.
```py
wine_reviews.head()
wine_reviews.tail()
```
