# T-Distribution
#Statistics 

## Definition
Let $Z \sim N(0,1)$ and $Y \sim$ [$\chi_{r}^{2}$](chi-square%20distribution.md) be independent. We say that
$$
T=\frac{Z}{\sqrt{Y / r}}
$$
has a (Student) $t$-distribution with $r$ degrees of freedom. Write $T \sim t_{r}$.

==mean== 0
==variance== $r/ (r-2)$ for $r>2$, $\infty$ for $r<2$.
==pdf== If $T \sim t_{r}$, then the pdf of $\mathrm{T}$ is

$$
f(t) \propto \frac{1}{\left(1+\frac{t^{2}}{r}\right)^{(r+1) / 2}}, \quad-\infty<t<\infty .
$$

As $r \rightarrow \infty$, we have $t_{r} \stackrel{D}{\rightarrow} N(0,1)$.