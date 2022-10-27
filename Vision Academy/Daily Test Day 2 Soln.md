# Daily Test Day 2 Solutions
## 1
`TBO84`
For $y=\frac{\ln (x)}{x}$ the maximum occurs at $\left(e, \frac{1}{e}\right)$ and if we take logs and rearrange the given equation we see it is equivalent to $\frac{\ln (b)}{b}=\frac{\ln (a)}{a}$. From the graph we can deduce the only integer solution is when a $=2$ and by inspection we see $b=4$.

![](https://cdn.mathpix.com/snip/images/LhxZw1zyR2mVtYfclU0yT_q_KvZebNkkxlb-kvAhllI.original.fullsize.png)
## 2

$x=-2$ or $x\geq2$. Answer easily deduced by discussing ranges of $x$.

## 3
1) LHS $>0>$ RHS for all $x$ and so there are no real roots.
2) LHS $\geqslant 256>243 \geqslant$ RHS.
3) $\mathrm{LHS} \geqslant 0 \geqslant \mathrm{RHS}$ with equality only at $x=0$ which is a double root.

## 4
`TBO81`
To start if we let $y=0$ then we deduce that $f(0)=1$. If $x=y=1$ then we see $f(2)=(f(1))^{2}$ and if we continue in this manner and let $x=2$ and $y=1$ we see that $f(3)=(f(1))^{3}$. It is not difficult to see that this pattern continues and for $n$ an integer we have that $\mathrm{f}(\mathrm{n})=(\mathrm{f}(1))^{\mathrm{n}}$. To see that the same result holds for $\mathrm{n}$ a rational number we simply write $1=$ $\frac{q}{q}=\frac{1}{q}+\ldots+\frac{1}{q}$ which leads us to deduce $f(1)=\left(f\left(\frac{1}{q}\right)\right)^{q}$ and hence $f\left(\frac{1}{q}\right)=(f(1))^{\frac{1}{q}}$. In turn if we write $\frac{p}{q}=$ $\frac{1}{q}+\ldots+\frac{1}{q}$ we see that $f\left(\frac{p}{q}\right)=(f(1))^{\frac{p}{q}}$ as required. To show that $f(n)>0$ for all n we write $n=\frac{n}{2}+\frac{n}{2}$ which then implies $f(n)=f\left(\frac{n}{2}\right) f\left(\frac{n}{2}\right)=\left(f\left(\frac{n}{2}\right)\right)^{2}$ which is clearly always positive.

## 5

Note that $\int \frac{1}{e^{x}+1} d x=x-\log \left(e^{x}+1\right)$ as ${1\over e^x+1}=1-{e^x\over e^x+1}$. Thus $$\int_{0}^{1} \frac{1}{e^{x}+1} d x=1+\log (2)-\log (1+e).$$
## 6
$\pi^2\over 4$, take $a={\pi\over2}, g(x)=x,f(x)=\textrm{the rest of the integrand}$.