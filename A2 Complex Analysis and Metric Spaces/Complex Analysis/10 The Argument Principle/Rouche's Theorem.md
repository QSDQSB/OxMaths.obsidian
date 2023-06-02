#ComplexAnalysis 

```ad-theorem
title: Rouche's Theorem
Suppose that $f$ and $g$ are [[holomorphic]] functions on an open set $U$ in $\mathbb{C}$ and $\bar{B}(a, r) \subset U$. If $|f(z)|>|g(z)|$ for all $z \in$ $\partial B(a, r)$ then $f$ and $f+g$ have the same change in argument around $\partial B(a, r)$, and hence the same number of zeros in $B(a, r)$ (counted with multiplicities).
```
^theorem

## Proof
Let $\gamma(t)=a+r e^{2 \pi i t}$ be a parametrization of the [[Boundary]] circle of $B(a, r)$. We need to show that $(f+g) / f=1+g / f$ has the same number of zeros as poles (Note that $f(z) \neq 0$ on $\partial B(a, r)$ since $|f(z)|>|g(z)|$.) But by the [[Argument Principle]], this number is the [[Winding Number]] of $\Gamma(t)=$ $h(\gamma(t))$ about zero, where $h(z)=1+g(z) / f(z)$. Since, by assumption, for $z \in \gamma^{*}$ we have $|g(z)|<|f(z)|$ and so $|g(z) / f(z)|<1$, the image of $\Gamma$ lies entirely in $B(1,1)$ and thus in the half-plane $\{z: \Re(z)>0\}$. Hence picking a [[Branch]] of Log defined on this half-plane, we see that the [[Complex Path Integral|integral]] [
$$\int_{\Gamma} \frac{d z}{z}=\log (h(\gamma(1))-\log (h(\gamma(0))=0
$$
as required.
```ad-remark
title: Remark 10.6
[[Rouche's theorem]] can be useful in counting the number of zeros of a function $f$-one tries to find an approximation to $f$ whose zeros are easier to count and then by Rouche's theorem obtain information about the zeros of $f$. Just as for the [[argument principle]] above, it also holds for closed paths which having [[winding number]] 1 about their [[inside]].
```