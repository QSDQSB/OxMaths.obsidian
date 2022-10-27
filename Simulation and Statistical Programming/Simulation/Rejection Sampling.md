# Rejection Sampling
#Statistics

Suppose we can find a constant $M$ satisfying $M \geq p(x) / q(x)$ for all $x \in \Omega$. The following 'Rejection algorithm' returns $X \sim p$.

```ad-algorithm
title: Rejection Algorithm
1 Let $Y \sim q$ and $U \sim U(0,1)$. Simulate $Y=y$ and $U=u$.
2 If $u \leq p(y) /(M q(y))$ then stop and return $X=y$, and otherwise, start again at 1.
```
^Rejection

### Protocol
`target`: $f(x)$
`proposal`: $q(x)$
- find $M$ such that ${f_\alpha(x)\over f_Q(x)}\leq M$

## Algorithm
1. Simulate $Y_i \sim Q$ and $U_i \sim U[0,1]$
2. For $U_i\leq {f(Y_i)\over q(Y_i)}/M$, return $X_i=Y_i$

- ==Accept==/==Rejection== $\sim Geom({1\over M})$, with mean $\# \text{trial}=M$
- Unknown normalising constant

```R
p2 = function(n) {
	Y=numeric(n)
	for (i in 1:n) {
		y=1
		F=6/pi^2
		U=runif(1)
		while (U>F) {
			y=y+1
			F=F+6/(y^2*pi^2)
		}
		Y[i]=y
	}
	return(Y)
}
```