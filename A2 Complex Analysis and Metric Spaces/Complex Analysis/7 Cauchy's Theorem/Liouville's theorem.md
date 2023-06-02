#ComplexAnalysis 

```ad-theorem
title: Liouville's Theorem
Let $f : \mathbb{C}\to\mathbb{C}$ be an [[entire]] function. If f is **bounded** then it is constant.
```
^theorem

## Proof
Suppose that $|f(z)| \leq M$ for all $z \in \mathbb{C}$. Let $\gamma_{R}(t)=R e^{2 \pi i t}$ be the circular path centred at the origin with radius $R$. Then for $R>|w|$ [[Cauchy's Integral Formula]] shows
$$
\begin{aligned}
|f(w)-f(0)| &=\left|\frac{1}{2 \pi i} \int_{\gamma_{R}} f(z)\left(\frac{1}{z-w}-\frac{1}{z}\right) d z\right| \\
&=\frac{1}{2 \pi}\left|\int_{\gamma_{R}} \frac{w \cdot f(z)}{z(z-w)} d z\right| \\
& \leq \frac{2 \pi R}{2 \pi} \sup _{z:|z|=R}\left|\frac{w \cdot f(z)}{z(z-w)}\right| \\
& \leq R \cdot \frac{M|w|}{R .(R-|w|)}=\frac{M|w|}{R-|w|}
\end{aligned}
$$
Thus letting $R \rightarrow \infty$ we see that $|f(w)-f(0)|=0$, so that $f$ is constant an required.

```ad-remark
[[Liouville's theorem]] is considerably weaker than [[Picard's Little Theorem]] which is off-syllabus, but which states that a non-constant [[holomorphic]] function on $\mathbb{C}$ has image either $\mathbb{C}$ or $\mathbb{C} \backslash\{$ a single value $\}$.
```