## Histogram
```python
sns.histplot(data=e,stat="percent",binwidth=2,discrete=False)
```
#### Parameters
1. `stat` str Aggregate statistic to compute in each bin.
-   `count`: show the number of observations in each bin
-   `frequency`: show the number of observations divided by the bin width
-   `probability` or `proportion`: normalize such that bar heights sum to 1
-   `percent`: normalize such that bar heights sum to 100
-   `density`: normalize such that the total area of the histogram equals 1
2. `binwidth` number or pair of numbers
Width of each bin, overrides `bins` but can be used with `binrange`.
1. `bins=30` number of bins in total
2. `binrange` pair of numbers or a pair of pairs
Lowest and highest value for bin edges; can be used either with `bins` or `binwidth`. Defaults to data extremes.
5. `discrete` bool
If `True`, default to `binwidth=1` and draw the bars so that they are centered on their corresponding data points. This avoids “gaps” that may otherwise appear when using discrete (integer) data.
6. `cumulative` bool
If `True`, plot the cumulative counts as bins increase.
1. `kde=True` add a kernel density estimate to smooth the histogram, providing complementary information about the shape of the distribution
2. `hue` multiple histogram plots in one plot
	```python
	sns.histplot(data=penguins, x="length", hue="species")
	```
	Use `multiple="stack/dodge"` to stack them. Also try `element="step/poly"` `common_norm=False
3. `log_scale=True` to scale skewed data.
4. When both `x` and `y` are assigned, a bivariate histogram is computed and shown as a `heatmap`.

### Correlation Matrix Plot
```py
plt.matshow(data.corr())
plt.show;
```

```py
fig, ax = plt.subplots(figsize=(18,12))
ax = sns.heatmap(data.corr(),vmin = -1, vmax = 1, center = 0,annot = True, cmap='BrBG')
```