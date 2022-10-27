# Gibbs Sampling
#Statistics 
```ad-algorithm
title: Systematic Scan Gibbs Sampler Algorithm
1. Let $p$ be the target pmf with conditional $p\left(x_{j}^{t} \mid x_{-j}^{t}\right)$ for $x$ with $d$ dimensions
2. Draw $X^{0}$ from some initial distribution
3. For $t=1,2, \ldots, n-1$ :
	- 3.1 Assume $X^{t-1}=x^{t-1}$, and set $X^{t}=x^{t-1}$
	- 3.2 For $k=1$ to $d$ :
	- 3.2.1 Sample $X_{k}^{t}$ from $p\left(x_{k}^{t} \mid x_{-k}^{t}\right)$ and set $x_{k}^{t}=X_{k}^{t}$.
```

> We could cycle through the coordinates in any order we like.

```ad-algorithm
title: Random Scan Gibbs Sampler Algorithm
1. Let $p$ be the target pmf with conditional $p\left(x_{j}^{t} \mid x_{-j}^{t}\right)$ for $x$ with $d$ dimensions
2. Draw $X^{0}$ from some initial distribution (e.g. $X^{0}=x^{0}$ )
3. For $t=1,2, \ldots, n-1$ : set $X^{t}=x^{t-1}$
3.1 Sample $I \sim$ Unif $\{1, \ldots, d\}$;
3.2 Sample $X_{l}^{t}$ from $p\left(x_{l}^{t} \mid x_{-l}^{t}\right)$ and set $x_{I}^{t}=X_{l}^{t}$.
```
