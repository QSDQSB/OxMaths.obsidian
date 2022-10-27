# Order statistics
#Statistics 

The [[Order Statistics]] of data $x_{1}, \ldots, x_{n}$ are their values in **increasing** order, which we denote $x_{(1)} \leqslant x_{(2)} \leqslant \cdots \leqslant x_{(n)}$.
## Definition
```ad-definition
title: rth order statistic
The ==$r$th order statistic== of the random sample $X_{1}, \ldots, X_{n}$ is the RV $X_{(r)}$ where
$$
X_{(1)} \leqslant X_{(2)} \leqslant \cdots \leqslant X_{(n)}
$$
is the ordered sample.
```
```ad-definition
title: Median
The ==median== (a RV) is
$$
M=\left\{\begin{array}{ll}
X_{\left(\frac{n+1}{2}\right)} & \text { if } n \text { odd } \\
\frac{1}{2}\left(X_{\left(\frac{n}{2}\right)}+X_{\left(\frac{n}{2}+1\right)}\right) & \text { if } n \text { even }
\end{array}\right.
$$
```

## Distribution of rth Order Statistic
### Case: r=n
cdf of $X_{(n)}$ is
$$
\begin{aligned}
F_{(n)}(x) &=P\left(X_{(n)} \leqslant x\right) \\
&=P\left(X_{1} \leqslant x, \ldots, X_{n} \leqslant x\right) \\
&=P\left(X_{1} \leqslant x\right) \ldots P\left(X_{n} \leqslant x\right) \quad \text { by independence } \\
&=F(x)^{n} \quad \text { as each } X_{i} \text { has cdf } F .
\end{aligned}
$$
Then, differentiating, the pdf of $X_{(n)}$ is
$$
f_{(n)}(x)=F_{(n)}^{\prime}(x)=n F(x)^{n-1} f(x) .
$$

### Case: r=1
cdf of $X_{(1)}$ is
$$
\begin{aligned}
F_{(1)}(x) &=P\left(X_{(1)} \leqslant x\right) \\
&=1-P\left(X_{(1)}>x\right) \\
&=1-P\left(X_{1}>x, \ldots, X_{n}>x\right) \\
&=1-P\left(X_{1}>x\right) \ldots P\left(X_{n}>x\right) \quad \text { by independence } \\
&=1-[1-F(x)]^{n}
\end{aligned}
$$
So the pdf of $X_{(1)}$ is
$$
f_{(1)}(x)=F_{(1)}^{\prime}(x)=n[1-F(x)]^{n-1} f(x)
$$
### General Case
```ad-theorem
title: $pdf$ of $X_{(r)}$
The pdf of $X_{(r)}$ is given by
$$
f_{(r)}(x)=\frac{n !}{(r-1) !(n-r) !} F(x)^{r-1}[1-F(x)]^{n-r} f(x) \text {. }
$$
```
#### Proof
By induction. We have shown the result for $r=1$ (and $r=n$ ) above, so assume it is true at $r$.
For all $r$, the cdf $F_{(r)}$ of $X_{(r)}$ is given by
$$
F_{(r)}(x)=P\left(X_{(r)} \leqslant x\right)=\sum_{j=r}^{n}\left(\begin{array}{c}
n \\
j
\end{array}\right) F(x)^{j}[1-F(x)]^{n-j}
$$
i.e. the probability that at least $r$ of the $X_{i}$ are $\leqslant x$.
Hence
$$
F_{(r)}(x)-F_{(r+1)}(x)=\left(\begin{array}{c}
n \\
r
\end{array}\right) F(x)^{r}[1-F(x)]^{n-r}
$$
Differentiating,
$$
\begin{aligned}
f_{(r+1)}(x) &=f_{(r)}(x)-\left(\begin{array}{c}
n \\
r
\end{array}\right) F(x)^{r-1}[1-F(x)]^{n-r-1}[r-n F(x)] f(x) \\
&=\left(\begin{array}{l}
n \\
r
\end{array}\right) F(x)^{r}[1-F(x)]^{n-r-1}(n-r) f(x) \quad \text { using the inductive hypothesis } \\
&=\frac{n !}{r !(n-(r+1)) !} F(x)^{(r+1)-1}[1-F(x)]^{n-(r+1)} f(x)
\end{aligned}
$$
so the result follows by induction.

### Heuristic method to find $f_{(r)}$
Divide $(-\infty, \infty)$ into 3 parts:

$$\begin{array}{ll}(-\infty, x) & \text { the probability of } X_{1} \text { being in this interval is } F(x) \\ {[x, x+\delta x)} & \text { the probability of } X_{1} \text { being in this interval is approx } f(x) \delta x \\ {[x+\delta x, \infty)} & \text { the probability of } X_{1} \text { being in this interval is approx } 1-F(x) .\end{array}$$

For $X_{(r)}$ to be in $[x, x+\delta x)$ we need
$$
\begin{array}{c}
r-1 \text { of the } X_{i} \text { in }(-\infty, x) \\
1 \text { of the } X_{i} \text { in }[x, x+\delta x) \\
n-r \text { of the } X_{i} \text { in }[x+\delta x, \infty)
\end{array}
$$
Approx, this has probability
$$
\frac{n !}{(r-1) ! 1 !(n-r) !} F(x)^{r-1} \cdot f(x) \delta x \cdot[1-F(x)]^{n-r}
$$
Omitting the $\delta x$ gives the density $f_{(r)}(x)$ (i.e. divide by $\delta x$ and let $\left.\delta x \rightarrow 0\right)$.

### Order Statistics of Uniform Distribution
```ad-example
If $U_{(1)}, \ldots, U_{(n)}$ are the order statistics of a random sample of size $n$ from a $U(0,1)$ distribution, then
1) $E\left(U_{(r)}\right)=\frac{r}{n+1}$
2) $\operatorname{var}\left(U_{(r)}\right)=\frac{r}{(n+1)(n+2)}\left(1-\frac{r}{n+1}\right)$.
```