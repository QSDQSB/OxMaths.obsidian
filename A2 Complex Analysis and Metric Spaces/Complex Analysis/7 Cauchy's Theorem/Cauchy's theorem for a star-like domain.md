#ComplexAnalysis 

```ad-theorem
title: Cauchy's theorem for a star-like domain
Let $U$ be a star-like domain. Then if $f: U \rightarrow \mathbb{C}$ is [[holomorphic]] and $\gamma:[a, b] \rightarrow U$ is a closed path in $U$ we have
$$
\int_{\gamma} f(z) d z=0 .
$$
```
^theorem

### Proof
The proof proceeds similarly to the proof of [[Complex Fundamental Theorem of Calculus#Theorem 5 22]]: by [[Complex Fundamental Theorem of Calculus]] it suffices to show that $f$ has a [[Primitive]] in $U$. To show this, let $z_{0} \in U$ be a point for which the line segment from $z_{0}$ to every $z \in U$ lies in $U$. Let $\gamma_{z}=z_{0}+t\left(z-z_{0}\right)$ be a parametrization of this curve, and define
$$
F(z)=\int_{\gamma_{z}} f(\zeta) d \zeta
$$

We claim that $F$ is a [[Primitive]] for $f$ on $U$. Indeed pick $\epsilon>0$ such that $B(z, \epsilon) \subseteq U$. Then if $w \in B(z, \epsilon)$ note that the triangle $T$ with vertices $z_{0}, z, w$ lies entirely in $U$ by the assumption that $U$ is star-like with respect to $z_{0}$. It follows from [[Cauchy's theorem for a triangle]] that $\int_{T} f(\zeta) d \zeta=0$, and hence if $\eta(t)=$ $w+t(z-w)$ is the straight-line path going from $w$ to $z$ (so that $T$ is the concatenation of $\gamma_{w}, \eta$ and $\left.\gamma_{z}^{-}\right)$we have
$$
\begin{aligned}
\left|\frac{F(z)-F(w)}{z-w}-f(z)\right| &=\left|\int_{\eta} \frac{f(\zeta)}{z-w} d \zeta-f(z)\right| \\
&=\left|\int_{0}^{1} f(w+t(z-w)) d t-f(z)\right| \\
&=\mid \int_{0}^{1}(f(w+t(z-w))-f(z) d t \mid\\
& \leq \sup _{t \in[0,1]}|f(w+t(z-w))-f(z)|
\end{aligned}
$$
which, since $f$ is continuous at $w$, tends to zero as $w \rightarrow z$ so that $F^{\prime}(z)=f(z)$ as required.