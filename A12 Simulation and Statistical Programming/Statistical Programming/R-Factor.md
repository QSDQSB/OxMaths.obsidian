# Factors
#R

Factors are vectors that contain data on categories. The different categories are called levels. For example:

- a factor `Gender` with levels ‘male’ and ‘female’ ;
- a factor `Age` with levels ‘under 25’, ‘25-39’, ‘40-54’, ‘55+’.

```R
> agree <- c("Y", "N", "Y", "Y", "N", "N")
> Agree <- factor(agree)

> Agree
	[1] Y N Y Y N N
	Levels: N Y
```

### Plot data regarding to categories
```R
x <- rnorm(6)
plot(Agree, x)
```