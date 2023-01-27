# Apply
#Probability  

> Returns a vector or array or list of values obtained by applying a function to margins of an array or matrix.
```R
apply(X, MARGIN, FUN)
```
- `x`: an array or matrix
- `MARGIN`:  take a value or range between 1 and 2 to define where to apply the function:
	- `MARGIN=1`: the manipulation is performed on ==rows==
	- `MARGIN=2`: the manipulation is performed on ==columns==
	- `MARGIN=c(1,2)`: the manipulation is performed on rows and columns
- `FUN`: tells which function to apply. Built functions like mean, median, sum, min, max and even user-defined functions can be applied>

## Examples
```R
U <- matrix(rexp(a*n),a,n);
X <- apply(U,2,'sum')/b
```

![](https://www.guru99.com/images/r_programming/032918_0401_applysapply1.png)
