# Matrix
#R
## Assigning values to a matrix
```R
# initialise
M <- matrix(NA,n,p)

M <- matrix(data=1:9,nrow=3,ncol=3,byrow=TRUE)

M[-1, -1, drop=FALSE]
	# access all but first column and first row
```
`byrow`: default `FALSE`.

## Adding and Removing Rows/Columns
We can add row or column using `rbind()` and `cbind()` function respectively. Similarly, it can be removed through reassignment.

```R
> cbind(x, c(1, 2, 3))    # add column
[,1] [,2] [,3] [,4]
[1,]    0    0    7    1
[2,]    0   10    8    2
[3,]    0    6    9    3

> rbind(x,c(1,2,3))    # add row
[,1] [,2] [,3]
[1,]    0    0    7
[2,]    0   10    8
[3,]    0    6    9
[4,]    1    2    3

> x <- x[1:2,]   # remove last row
```
## Basic Operations
```R
> t(x)    
	# transpose a matrix
> det(x)
	# return error if not a square matrix
```
## Turning a list into matrix
```R
> x <- c(1,2,3,4,5,6)
> x
[1] 1 2 3 4 5 6
> class(x)
[1] "numeric"
> dim(x) <- c(2,3)
> x
[,1] [,2] [,3]
[1,]    1    3    5
[2,]    2    4    6
> class(x)
[1] "matrix"
```
## Property: drop=FALSE
if the matrix returned after indexing is a row matrix or column matrix, the result is given as a vector.

```R
> x[1,]
[1] 1 4 7
> class(x[1,])
[1] "integer"
```

This behavior can be avoided by using the argument `drop = FALSE` while indexing.

```R
> x[1,,drop=FALSE]  
	# now the result is a 1X3 matrix rather than a vector
[,1] [,2] [,3]
[1,]    1    4    7
> class(x[1,,drop=FALSE])
[1] "matrix"
```
