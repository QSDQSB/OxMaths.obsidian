## Orthogonality Relations
#FSPDE
Let $m$ and $n$ be positive integers. Then we have the orthogonality relations:
$$
\begin{array}{|l|}
\hline \int_{-\pi}^{\pi} \cos (m x) \cos (n x) \mathrm{d} x=\pi \delta_{m n} \\
\hline \int_{-\pi}^{\pi} \cos (m x) \sin (n x) \mathrm{d} x=0 \\
\hline \int_{-\pi}^{\pi} \sin (m x) \sin (n x) \mathrm{d} x=\pi \delta_{m n}\\
\hline
\end{array}
$$
where $\delta_{m n}$ is Kronecker's delta defined by
$$
\delta_{m n}=\left\{\begin{array}{ll}
0 & \text { for } m \neq n \\
1 & \text { for } m=n
\end{array}\right.
$$

### Proof
Since the integrand in $(2.8)$ is even, for $m \neq n$,
$$
\begin{aligned}
\int_{-\pi}^{\pi} \cos (m x) \cos (n x) \mathrm{d} x &=\int_{0}^{\pi} 2 \cos (m x) \cos (n x) \mathrm{d} x \\
&=\int_{0}^{\pi} \cos ((m+n) x)+\cos ((m-n) x) \mathrm{d} x \\
&=\left[\frac{\sin ((m+n) x)}{m+n}+\frac{\sin ((m-n) x)}{m-n}\right]_{0}^{\pi} \\
&=0 .
\end{aligned}
$$
If $m=n$, we have instead
$$
\begin{aligned}
\int_{-\pi}^{\pi} \cos (m x) \cos (n x) \mathrm{d} x &=\int_{0}^{\pi} 2 \cos ^{2}(n x) \mathrm{d} x \\
&=\int_{0}^{\pi} 1+\cos (2 n x) \mathrm{d} x \\
&=\left[x+\frac{\sin (2 n x)}{2 n}\right]_{0}^{\pi} \\
&=\pi .
\end{aligned}
$$