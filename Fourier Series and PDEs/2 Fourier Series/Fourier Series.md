# Fourier Series For Functions of Period 2$\Large\pi$
#FSPDE 
## The Expansion for f
Let $f: \mathbb{R} \rightarrow \mathbb{R}$ be a periodic function of period $2 \pi$. 
$$
\large
f(x)=\frac{a_{0}}{2}+\sum_{n=1}^{\infty}\left(a_{n} \cos (n x)+b_{n} \sin (n x)\right) \text { for } x \in \mathbb{R}
$$

^30cd22

where $a_{0}, a_{1}, \ldots$ and $b_{1}, b_{2}, \ldots$ are constants.
#### Fourier Coefficients
![[#^Coefficient-a0]]![[#^series-expression]]

https://www.wolframalpha.com/input/?i=integrate+x%5E2*sin%28nx%29+dx+from+0+to+pi

---
## Finding the Sequences
### Finding a0
Suppose [[#The Expansion for f]] is true and that __we can integrate it term-by-term over a period__, so that
$$
\int_{-\pi}^{\pi} f(x) \mathrm{d} x=\frac{1}{2} a_{0} \int_{-\pi}^{\pi} \mathrm{d} x+\sum_{n=1}^{\infty}\left(a_{n} \int_{-\pi}^{\pi} \cos (n x) \mathrm{d} x+b_{n} \int_{-\pi}^{\pi} \sin (n x) \mathrm{d} x\right)
$$
Since, for positive integers $n$,
$$
\int_{-\pi}^{\pi} \mathrm{d} x=2 \pi, \quad \int_{-\pi}^{\pi} \cos (n x) \mathrm{d} x=0, \quad \int_{-\pi}^{\pi} \sin (n x) \mathrm{d} x=0
$$
we must have

---
$$
\large
a_{0}=\frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \mathrm{d} x
$$
^Coefficient-a0

which determines $a_{0}$ in terms of $f$.
### Finding Others
Fixing $m \in \mathbb{N} \backslash\{0\}$, multiplying ![[#^30cd22]] by $\cos (m x)$ and ***assuming that the orders of summation and integration may be interchanged***, we obtain
$$
\begin{aligned}
\int_{-\pi}^{\pi} f(x) \cos (m x) \mathrm{d} x=& \frac{1}{2} a_{0} \int_{-\pi}^{\pi} \cos (m x) \mathrm{d} x \\
&+\sum_{n=1}^{\infty}\left(a_{n} \int_{-\pi}^{\pi} \cos (m x) \cos (n x) \mathrm{d} x+b_{n} \int_{-\pi}^{\pi} \cos (m x) \sin (n x) \mathrm{d} x\right)
\end{aligned}
$$
Using the [[orthogonality relations]], we deduce that
$$
\int_{-\pi}^{\pi} f(x) \cos (m x) \mathrm{d} x=\frac{1}{2} a_{0} \cdot 0+\sum_{n=1}^{\infty}\left(a_{n} \pi \delta_{m n}+b_{n} \cdot 0\right)=\pi a_{m}
$$
so that


```ad-important
$$
\large
a_{m}=\frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos (m x) \mathrm{d} x \text { for } m \in \mathbb{N} \backslash\{0\} .
$$
$$
\large
b_{m}=\frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin (m x) \mathrm{d} x\text{ for } m \in \mathbb{N} \backslash\{0\}.
$$
```
^series-expression


```ad-example
![[Fourier Cosine and Sine Series]]
```

```ad-warning
![[Fourier Convergence Theorem]]
```
---


[[Periodic Functions]][[Even-odd Functions]][[Orthogonality Relations]]