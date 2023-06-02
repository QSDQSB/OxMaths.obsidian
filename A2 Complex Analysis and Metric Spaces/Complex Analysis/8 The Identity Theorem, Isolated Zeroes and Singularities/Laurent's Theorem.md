---
aliases: [Laurent's series]
---
#ComplexAnalysis 

## Theorem 238
```ad-theorem
title: Laurent's Theorem
Let $f$ be [[holomorphic]] on the annulus
$$
A=\{z \in \mathbb{C}: R<|z-a|<S\} .
$$
Then there exist unique $c_{k}(k \in \mathbb{Z})$ such that
$$
f(z)=\sum_{k=-\infty}^{\infty} c_{k}(z-a)^{k} \quad(z \in A)
$$
```
^Laurent-theorem

where

$$
\Large
c_{k}=\frac{1}{2 \pi i} \int_{\gamma(a, r)} \frac{f(w)}{(w-a)^{k+1}} \mathrm{~d} w \quad(R<r<S) .
$$
^Laurent-Series


### Proof
It is too long. I suggest I give up. Let  us pretend Panos will not examine it.

### Relation to Cauchy Integral Formula
Note that ![[Cauchy's Integral Formula#Corollary 7 11 derivative of f z]]

## Calculating the Laurent series expansion
To calculate the [[Laurent's Theorem|Laurent's series]] we use the standard and modified geometric series which are
$$
\Large
\frac{1}{1-z}=\left\{\begin{array}{cc}
\sum_{n=0}^{\infty} z^{n}, & |z|<1 \\
-\sum_{n=1}^{\infty} \frac{1}{z^{n}}, & |z|>1
\end{array}\right.
$$

```ad-example
Determine the Laurent series for
$$
f(z)=\frac{1}{(z+5)}
$$
that are valid in the regions
(i) $\{z:|z|<5\}$, and (ii) $\{z:|z|>5\}$.
---

$$f(z)=\frac{1}{5\left(1+\frac{z}{5}\right)}=\frac{1}{5\left(1-\left(-\frac{z}{5}\right)\right)}$$

$$f(z)=\frac{1}{5\left(1-\left(-\frac{z}{5}\right)\right)}=\left\{\begin{array}{c}\frac{1}{5} \sum_{n=0}^{\infty}\left(-\frac{z}{5}\right)^{n}, \quad|z|<5 \\ -\frac{1}{5} \sum_{n=1}^{\infty} \frac{1}{\left(-\frac{z}{5}\right)^{n}}, \quad|z|>5\end{array}\right.$$
Hence, for part (i) the series expansion is
$$
f(z)=\frac{1}{5} \sum_{n=0}^{\infty}\left(-\frac{z}{5}\right)^{n}=\frac{1}{5} \sum_{n=0}^{\infty} \frac{(-1)^{n} z^{n}}{5^{n}}=\sum_{n=0}^{\infty} \frac{(-1)^{n} z^{n}}{5^{n+1}}, \quad|z|<5
$$
which is a [[Taylor's Theorem|Taylor series]]. And for part (ii) the series expansion is
$$
f(z)=-\frac{1}{5} \sum_{n=1}^{\infty} \frac{1}{\left(-\frac{z}{5}\right)^{n}}=-\frac{1}{5} \sum_{n=1}^{\infty} \frac{(-1)^{n} 5^{n}}{z^{n}}=-\sum_{n=1}^{\infty} \frac{(-1)^{n} 5^{n-1}}{z^{n}}, \quad|z|>5
$$
```

```ad-summary
- First check to see if you need to make a substitution for the region you are working with, a substitution is useful if the region is not centred on $z=0$.
- Then you will need to manipulate the function into a form where you can use the series expansions. This may involve splitting by partial fractions first.
- Find the series expansions for each of the fractions you have in your function within the specified region, then substitute these back into your function.
- Finally, simplify the function and, if you made a substitution, change it back into the original variable.

[Source](https://sym.lboro.ac.uk/resources/Handout-Laurent.pdf)
```