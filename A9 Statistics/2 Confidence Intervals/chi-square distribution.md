# Chi-square Distribution
#Statistics 
### Definition
Let $Z_{1}, \ldots, Z_{r} \stackrel{\text { iid }}{\sim} N(0,1) .$ We say that $Y=Z_{1}^{2}+\cdots+Z_{r}^{2}$ has the ==$c h i$-squared== distribution with $r$ degrees of freedom. Write $Y \sim \chi_{r}^{2}$.

## Properties
- If $Y \sim \chi_{r}^{2}$, then ==$E(Y)=r$== and ==$\operatorname{var}(Y)=2 r$==
- If $Y_{1} \sim \chi_{r}^{2}$ and $Y_{2} \sim \chi_{s}^{2}$ are independent, then $Y_{1}+Y_{2} \sim \chi_{r+s}^{2} .$

- $\chi_{r}^{2}$ is the same distribution as the $\operatorname{Gamma}\left(\frac{r}{2}, \frac{1}{2}\right)$ distribution, with pdf
$$
f(y)=\frac{1}{2^{r / 2} \Gamma(r / 2)} y^{r / 2-1} e^{-y / 2}, \quad y>0
$$
---
```ad-example
title: Example 2.3
Let $X_{1}, \ldots, X_{n} \stackrel{\mathrm{iid}}{\sim} N\left(0, \sigma^{2}\right) .$ Then $\frac{X_{i}}{\sigma} \sim N(0,1)$ and
$$
\frac{\sum_{i=1}^{n} X_{i}^{2}}{\sigma^{2}} \sim \chi_{n}^{2}
$$
Hence
$$
P\left(c_{1}<\frac{\sum_{i=1}^{n} X_{i}^{2}}{\sigma^{2}}<c_{2}\right)=1-\alpha
$$
where $c_{1}, c_{2}$ are such that $P\left(\chi_{n}^{2}<c_{1}\right)=P\left(\chi_{n}^{2}>c_{2}\right)=\frac{\alpha}{2} .$ So
$$
P\left(\frac{\sum_{i=1}^{n} X_{i}^{2}}{c_{2}}<\sigma^{2}<\frac{\sum_{i=1}^{n} X_{i}^{2}}{c_{1}}\right)=1-\alpha
$$
and we've found a $1-\alpha$ CI for $\sigma^{2}$ (an exact interval).


```

---
$$\Large\overline{X}-\overline{Y} \sim N ( \mu_X-\mu_Y,\frac{\sigma_X^2}{m} + {\sigma_Y^2\over n})$$