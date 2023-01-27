#ML 

Also in [[Time Series#Moving Average]]

>记得加`.mean()`，不然得到的type是一个`rolling`。
```py
trend = food_sales.rolling(
	window=12,center=True,min_periods=4)
	.mean()
# plot
ax = food_sales.plot(**plot_params, alpha=0.5) # this is to plot the original data
ax = trend.plot(ax=ax, linewidth=3)
```