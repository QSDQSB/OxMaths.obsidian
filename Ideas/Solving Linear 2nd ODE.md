## Solving Linear 2nd ODE
#Calculus 
For an equation or the form $$\frac{d^{2} y(x)}{d x^{2}}+\frac{d y(x)}{d x} f(x)+y(x) g(x)=F(x),$$the substitution$$\Large y(x)=\exp \left(-\int {f(x) \over 2} d x\right) v(x)$$ will eliminate the first order term.
Sometimes this can lead to a simpler equation to solve.

```ad-example
$$
x\frac{\mathrm{d}^{2} y}{\mathrm{~d} x^{2}}+2(x-1) \frac{\mathrm{d} y}{\mathrm{~d} x}-2\left(\frac{x-1}{x}\right) y=0
$$
Suppose $x\not=0$, then in this case
$$
f(x)=2{x-1\over x}
$$
So
$$
-\int {f(x) \over 2} d x=-\int(1-{1\over x})dx = \log x - x
$$
So $$\exp\left(-\int{f(x)\over 2}dx\right)={x\over e^x}.$$
Setting $$y(x)={x\over e^x}v(x)$$ Then
$$
\begin{aligned}
y'  &= {x\over e^x}v'(x) + v(x)\left( {1-x\over e^x} \right) \\
y'' &= 2\left( {1-x\over e^x} \right)v'(x)+{x\over e^x}v''(x)+v(x)\left(  x-2\over e^x	 \right)
\end{aligned}
$$
And the equation becomes
...
```
