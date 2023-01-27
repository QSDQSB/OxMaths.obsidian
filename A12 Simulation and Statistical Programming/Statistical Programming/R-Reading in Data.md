# Reading in Data
#Statistics 

## read.table
```R

hd <- read.table("hellung.txt", header=TRUE)
```
## Extract Data

```R
dim(hd)
	[1] 51 3 
names(hd)
	[1] "glucose" "conc" "diameter"
length(hd)
	[1] 3
## extract a list
hd$diameter[1:10]
## matrix
hd[3:4,]
## subset
retval <- subset(data, Department == "chemistry")  # This will extract the student details who are in Biochemistry department 
```

## Summary
```R
str(hd)

summary(hd)
```

## With
The `with()` command can be used to allow access to the data frame’s environment.
```R
with(hd, plot(log(conc), diameter))
```

## Applying functions over data, and subsetting
```R
apply(hd, 2, max)
mean(hd$diameter[hd$glucose==1])
hd[hd$conc > 550000,]
```

## Setting Values and Modifying Data Frames
```R
hd[1,3] <- 21
hd$random1 <- rnorm(51)

head(hd, 3)

## alternative
hd <- cbind(hd, random2 = rnorm(51))
```

---
## Missing Value
> Missing values are represented in R as `NA`.

>Use `na.rm=TRUE` to remove the NA columns.
```R
mean(x, na.rm=TRUE)
```

## Other Summaries
mean(), median() sd(), var(), cov(), cor() range(), quantile(), summary() min(), max(), pmin(), pmax() which.max(), which.min() sum(), cumsum(), cumprod()