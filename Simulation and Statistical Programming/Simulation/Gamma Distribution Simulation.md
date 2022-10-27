# Gamma Distribution Simulation
#Statistics 

If for $i=1,2,3, \ldots, a, Y_{i}$ are iid rv distributed $Y_{i} \sim \operatorname{Exp}(1)$ (we can simulate these as above) and
$$
X=\beta^{-1} \sum_{i=1}^{a} Y_{i}
$$
then $X \sim \Gamma(a, \beta)$, so now we can simulate Gamma-distributed variates (so long as the shape parameter $a$ is integer $)$. How does this work? The $\operatorname{Gamma}(a, \beta)$ density is
$$
f_{X}(x) \propto x^{a-1} \exp (-x \beta) .
$$
The MGF of a random variable $X$ is $M_{X}(t)=E\left(e^{t X}\right)$ and the MGF of a sum of rv is the product of their MGF's. Since the MGF for $Y_{i} / \beta$ is $1 /(1-t / \beta)$, the MGF of $X$ must be $(1-t / \beta)^{-a}$, and that is the MGF of a $\operatorname{Gamma}(a, \beta) \mathrm{rv}$.