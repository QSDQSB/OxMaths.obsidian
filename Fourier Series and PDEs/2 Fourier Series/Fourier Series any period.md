#FSPDE 
### Definition
Let $f: \mathbb{R} \rightarrow \mathbb{R}$ be $2 L$ -periodic and integrable on $[-L, L]$. Then, regardless of whether or not it converges, the Fourier series for $f$ is defined to be the infinite series given by
$$
\frac{a_{0}}{2}+\sum_{n=1}^{\infty}\left(a_{n} \cos \left(\frac{n \pi x}{L}\right)+b_{n} \sin \left(\frac{n \pi x}{L}\right)\right)
$$
for $x \in \mathbb{R}$, where the Fourier coefficients of $f$ are given by
$$
\begin{array}{ll}
a_{n} & =\frac{1}{L} \int_{-L}^{L} f(x) \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x & (n \in \mathbb{N}), \\
b_{n} & =\frac{1}{L} \int_{-L}^{L} f(x) \sin \left(\frac{n \pi x}{L}\right) \mathrm{d} x & (n \in \mathbb{N} \backslash\{0\})
\end{array}
$$