# Seq
#R
## Generate a Sequence
```R
sq <- seq(from=2, to=length(x), by=2)
new_x <- x[sq]
```

```r
isPr <- function(x) {
	M <- floor(sqrt(x)) out <- TRUE for (i in seq(2, M)) {
		if (x %% i == 0) {
			out <- FALSE
			break
		}
	}
	return(out)
}
```

## Initialize
`numeric(n)` creates a sequence of length n with value 0.
