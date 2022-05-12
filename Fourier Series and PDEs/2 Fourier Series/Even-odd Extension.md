#FSPDE 
## Even Extension
The even $2 L$-periodic extension $f_{e}: \mathbb{R} \rightarrow \mathbb{R}$ of $f:[0, L] \rightarrow \mathbb{R}$ is defined by
$$
f_{e}(x)=\left\{\begin{array}{ll}
f(x) & \text { for } 0 \leq x \leq L \\
f(-x) & \text { for }-L<x<0
\end{array}\right.
$$
with $f_{e}(x+2 L)=f_{e}(x)$ for $x \in \mathbb{R}$. The Fourier cosine series for $f:[0, L] \rightarrow \mathbb{R}$ is the Fourier series for $f_{e}$, i.e.
$$
f_{e}(x) \sim \frac{a_{0}}{2}+\sum_{n=1}^{\infty} a_{n} \cos \left(\frac{n \pi x}{L}\right)
$$
where
$$
a_{n}=\frac{1}{L} \int_{-L}^{L} f_{e}(x) \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x=\frac{2}{L} \int_{0}^{L} f(x) \cos \left(\frac{n \pi x}{L}\right) \mathrm{d} x \text { for } n \in \mathbb{N} .
$$

## Odd Extension
The odd $2 L$ -periodic extension $f_{o}: \mathbb{R} \rightarrow \mathbb{R}$ of $f:[0, L] \rightarrow \mathbb{R}$ is defined by
$$
f_{o}(x)=\left\{\begin{array}{ll}
f(x) & \text { for } 0 \leq x \leq L \\
-f(-x) & \text { for }-L<x<0
\end{array}\right.
$$
with $f_{o}(x+2 L)=f_{o}(x)$ for $x \in \mathbb{R}$. The Fourier sine series for $f:[0, L] \rightarrow \mathbb{R}$ is the Fourier series for $f_{o}$, i.e.
$$
f_{o}(x) \sim \sum_{n=1}^{\infty} b_{n} \sin \left(\frac{n \pi x}{L}\right)
$$
where
$$
b_{n}=\frac{1}{L} \int_{-L}^{L} f_{e}(x) \sin \left(\frac{n \pi x}{L}\right) \mathrm{d} x=\frac{2}{L} \int_{0}^{L} f(x) \sin \left(\frac{n \pi x}{L}\right) \mathrm{d} x \quad \text { for } n \in \mathbb{N} \backslash\{0\}
$$

---
- $f_{o}(x)$ is odd for $x / L \in \mathbb{R} \backslash \mathbb{Z}$ and odd $($ on $\mathbb{R})$ if and only if $f(0)=f(L)=0$.
- If $f$ is continuous on $[0, L]$ and $f^{\prime}$ piecewise continuous on $(0, L)$, then the Fourier Convergence Theorem implies that
$$
\begin{array}{r}
\frac{a_{0}}{2}+\sum_{n=1}^{\infty} a_{n} \cos \left(\frac{n \pi x}{L}\right)=f_{e}(x) \text { for } x \in \mathbb{R} \\
\qquad \sum_{n=1}^{\infty} b_{n} \sin \left(\frac{n \pi x}{L}\right)=\left\{\begin{array}{cc}
f_{o}(x) & \text { for } x / L \in \mathbb{R} \backslash \mathbb{Z} \\
0 & \text { for } x / L \in \mathbb{R} \backslash \mathbb{Z} .
\end{array}\right.
\end{array}
$$
