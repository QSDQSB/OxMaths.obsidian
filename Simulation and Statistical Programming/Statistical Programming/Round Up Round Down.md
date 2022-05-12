# Round Up Round Down
#R 

## Round
```R
round(1.27, digits = 1)
	#[1] 1.3
```

`round` does not round up in case of `0.5`.

## Round Up
```R
X <- ceiling(log(U)/log(1-p))
```

## Round Down
```R
floor(1.27)
	#[1] 1
trunc(1.27)
	#[1] 1
```