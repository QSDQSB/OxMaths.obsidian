# Pandas
#ML #Python
```python
import panda as pd
```
## Reading CSV
```python
pd.read_csv(file_path)
reviews=pd.read_csv(".csv",
					index_col=0)
					# Make the first column as index
dataFrame.to_csv("path.csv")

```

## DataFrame
### Creating a Dataframe
```python
pd.DataFrame({'Yes': [50, 21], 'No': [131, 2]})

fruit_sales = pd.DataFrame([[35,21],[41,34]],
						   columns=['Apples','Bananas'],
						   index=['2017 Sales','2018 Sales'])
```
$$
\begin{array}{rrr} 
& \text { Apples } & \text { Bananas } \\
\hline 2017 \text { Sales } & 35 & 21 \\
2018 \text { Sales } & 41 & 34
\end{array}
$$
```ad-example
Create a variable `ingredients` with a Series that looks like
- Flour: 4 cups
- Milk: 1 cup
- Eggs: 2 large
- Spam: 1 can
- Name: Dinner, dtype: object
```python
ingredients = pd.Series(
				['4 cups', '1 cup', '2 large','1 can'],
				index=['Flour','Milk','Eggs','Spam'],
				name='Dinner')
```
### Index-based Selection
#### Select First Row
```python
reviews.iloc[0]
```
#### Select First Column
```python
reviews.iloc[:, 0]
reviews.iloc[:3, 0] # First three elements of the first column
reviews.iloc[[1,4,7,8,11], 0] # Pass a list
reviews.iloc[-5:] # The last five elements
```


### Other Attributes and Operations
1. use `shape` attribute to check how large the resulting DataFrame is.
2. `describe()` method shows the summary of DataFrame.
3. `columns` attribute shows the column names.
4. `df = df.dropna(axis=0)` drops the empty column. 
	1. `axis=0` means selecting object across **rows** vertically
	2. `axis=1` means selecting object across **columns** horizontally
5. We can access the property of a DataFrame in two ways: 
	1. `DF.propertyname`
	2. `DF[propertyname]`
