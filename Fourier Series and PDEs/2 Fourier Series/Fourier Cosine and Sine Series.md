## Fourier Cosine and Sine Series
#FSPDE 
Let $f:\mathbb{R}\to\mathbb{R}$ be $2\pi$-periodic and integrable on $[-\pi,\pi]$ so that the Fourier coefficients exist.

### f is even
$$

\begin{aligned}
a_{n} &= \frac{2}{\pi} \int_{0}^{\pi} f(x) \cos (n x) \mathrm{d} x \quad \text { for } n \in \mathbb{N} \\
b_{n} &= 0 \quad\text { for } n \in \mathbb{N} \backslash\{0\} 
\\
\\
f(x) &\sim \frac{a_{0}}{2}+\sum_{n=1}^{\infty} a_{n} \cos (n x). \end{aligned}
$$
``i.e. f has a Fourier cosine series.``

### f is odd
$$
\begin{aligned}
a_{n}&=0 \quad \text { for } n \in \mathbb{N} \\
b_{n}&=\frac{2}{\pi} \int_{0}^{\pi} f(x) \sin (n x) \mathrm{d} x \quad \text { for } n \in \mathbb{N} \backslash\{0\} \\
f(x) &\sim \sum_{n=1}^{\infty} b_{n} \sin (n x)
\end{aligned}
$$
``Fourier sine series``

---
```ad-note
Integration by parts twice gives:
$$\left[u v^{\prime}-u^{\prime} v\right]_{a}^{b}=\int_{a}^{b}\left(u v^{\prime}-u^{\prime} v\right)^{\prime} \mathrm{d} x=\int_{a}^{b} u v^{\prime \prime}-u^{\prime \prime} v \mathrm{~d} x$$
```

- Check that $a_n\to 0$ and $b_n\to 0$ as $n\to\infty$. This is a direct consequence of [[Riemann-Lebesgue Lemma]].