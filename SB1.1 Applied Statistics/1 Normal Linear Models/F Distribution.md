#AppliedStats #ML 
Suppose $U_1 \sim \chi_{d_1}^2$ and $U_2 \sim$ [$\chi_{d_2}^2$](chi-square%20distribution.md) are independent. Then the distribution of
$$
F=\frac{U_1 / d_1}{U_2 / d_2}
$$
is called an $F_{d_1, d_2}$ distribution.
We call $d_1$ and $d_2$ the numerator and denominator degrees of freedom.
### Expectation
The expectation is $$E\left(F_{d_1, d_2}\right)=\frac{d_2}{d_2-2}$$ for $d_2>2$, which is about 1 when $d_2$ is large.