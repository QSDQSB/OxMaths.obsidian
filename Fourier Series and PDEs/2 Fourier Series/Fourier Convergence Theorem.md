## Fourier Convergence Theorem
#FSPDE 
Taking the right-hand limit of $f$ at $c$ to be $$f\left(c_{+}\right)=\lim _{h \rightarrow 0 \atop h>0} f(c+h)$$, and the left-hand limit of $f$ at $c$ to be $$f\left(c_{-}\right)=\lim _{h \rightarrow 0 \atop h<0} f(c+h)$$

### Definition: Piecewise Continuous
$f$ is ***piecewise continuous*** on $(a, b) \subseteq \mathbb{R}$ if there exists a finite number of points $x_{1}, \ldots, x_{m} \in$ $\mathbb{R}$ with $a=x_{1}<x_{2}<\ldots<x_{m}=b$ such that
1) $f$ is defined and [[Continuous]] on $\left(x_{k}, x_{k+1}\right)$ for all $k=1, \ldots, m-1 ;$
2) $f\left(x_{k+}\right)$ exists for $k=1, \ldots, m-1$;
3) $f\left(x_{k-}\right)$ exists for $k=2, \ldots, m$.

### Theorem
`Fourier Convergence Theorem`	Let $f: \mathbb{R} \rightarrow \mathbb{R}$ be $2 \pi$ -periodic, with $f$ and $f^{\prime}$ piecewise continuous on $(-\pi, \pi)$. Then, the Fourier coefficients
$$
\begin{array}{l}
a_{n}=\frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos (n x) \mathrm{d} x \quad(n \in \mathbb{N}), \\
b_{n}=\frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin (n x) \mathrm{d} x \quad(n \in \mathbb{N} \backslash\{0\})
\end{array}
$$
exist, and
$$
\frac{1}{2}\left(f\left(x_{+}\right)+f\left(x_{-}\right)\right)=\frac{a_{0}}{2}+\sum_{n=1}^{\infty}\left(a_{n} \cos (n x)+b_{n} \sin (n x)\right) \text { for } x \in \mathbb{R} .
$$

```ad-note
- The partial sums of the Fourier series are defined for $N \in \mathbb{N} \backslash\{0\}$ by
$$
S_{N}(x)=\frac{a_{0}}{2}+\sum_{n=1}^{N}\left(a_{n} \cos (n x)+b_{n} \sin (n x)\right) \quad \text { for } x \in \mathbb{R}
$$
The theorem states that the partial sums converge pointwise in the sense that
$$
\lim _{N \rightarrow \infty} S_{N}(x)=\frac{1}{2}\left(f\left(x_{+}\right)+f\left(x_{-}\right)\right) \text {for } x \in \mathbb{R}
$$
- If $f$ has a jump discontinuity at $x$, so that $f\left(x_{+}\right) \neq f\left(x_{-}\right)$, then the Fourier series converges to $\left(f\left(x_{+}\right)+f\left(x_{-}\right)\right) / 2$, i.e. the average of the left- and right-hand limits of $f$ at $x$.
- If $f$ is continuous at $x$, then $f\left(x_{-}\right)=f(x)=f\left(x_{+}\right)$ and the Fourier series converges to $f(x)$
- If we redefined $f$ to be equal to the average of its left- and right-hand limits at each of its jump discontinuities, then the Fourier series would converge instead to $f$ on $\mathbb{R}$.
- If $f$ is defined only on $e . g .(-\pi, \pi]$, then the Fourier Convergence Theorem holds for its $2 \pi$ -periodic extension.
(6) The Fourier Convergence Theorem implies that
$$
\begin{array}{l}
\frac{1}{2}\left(g\left(x_{+}\right)+g\left(x_{-}\right)\right)=\frac{a_{0}}{2}+\sum_{n=1}^{\infty} a_{n} \cos (n x) \text { for } x \in \mathbb{R} \\
\frac{1}{2}\left(h\left(x_{+}\right)+h\left(x_{-}\right)\right)=\sum_{n=1}^{\infty} b_{n} \sin (n x) \text { for } x \in \mathbb{R}
\end{array}
$$
where $g: \mathbb{R} \rightarrow \mathbb{R}$ is the even part of $f$ and $h: \mathbb{R} \rightarrow \mathbb{R}$ is the odd part of $f$ defined in $(2.5)$.
```