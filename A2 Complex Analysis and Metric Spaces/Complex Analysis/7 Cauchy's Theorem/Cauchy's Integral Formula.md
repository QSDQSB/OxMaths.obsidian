#ComplexAnalysis 
## Theorem 7.8.

```ad-theorem
title: Cauchy's Integral Formula
Suppose that $f: U \rightarrow \mathbb{C}$ is a [[holomorphic]] function on an open set $U$ which contains the disc $\bar{B}(a, r)$. Then for all $w \in B(a, r)$ we have
$$
f(w)=\frac{1}{2 \pi i} \int_{\gamma} \frac{f(z)}{z-w} d z,
$$
where $\gamma$ is the [[path]] $t \mapsto a+r e^{2 \pi i t}$.
```
^formula

### Proof

<img src="https://cdn.mathpix.com/snip/images/sdkbJHQiM2mOxX2nVbZTo3hbKblGyfDHOpdFYxzBY7c.original.fullsize.png" width=250px />

Fix $w \in B(a, r)$. We use the contours $\Gamma_{1}$ and $\Gamma_{2}$ as shown in Figure 3 (where $\Gamma_{1}$ follows the direction of the blue arrows, and $\Gamma_{2}$ the directions of the red arrows). These paths join the circular contours $\gamma(a, r)$ and $\gamma(w, \epsilon)^{-}$ where $\epsilon$ is small enough to lie in the interior of $B(a, r)$. By the additivity properties of path integrals, the contributions of the line segments cancel so that
$$
\int_{\Gamma_{1}} \frac{f(z)}{z-w} d z+\int_{\Gamma_{2}} \frac{f(z)}{z-w} d z=\int_{\gamma(a, r)} \frac{f(z)}{z-w} d z-\int_{\gamma(w, \epsilon)} \frac{f(z)}{z-w} d z
$$
On the other hand, each of $\Gamma_{1}, \Gamma_{2}$ lies in a [[Primitive]] domain in which $f /(z-$ $w)$ is [[Holomorphic]] - indeed by the quotient rule, $f(z) /(z-w)$ is holomophic on $U \backslash\{w\}$ - so each of the integrals on the left-hand side vanish, and hence
$$
\frac{1}{2 \pi i} \int_{\gamma(a, r)} \frac{f(z)}{z-w} d z=\frac{1}{2 \pi i} \int_{\gamma(w, \epsilon)} \frac{f(z)}{z-w} d z .
$$

Thus we can replace the [[Complex Path Integral|integral]] over the circle $\gamma(a, r)$ with an integral over an arbtitrary small circle centred at $w$ itself. But for such a small circle,
$$
\begin{aligned}
\frac{1}{2 \pi i} \int_{\gamma(w, \epsilon)} \frac{f(z)}{z-w} d z &=\frac{1}{2 \pi i} \int_{\gamma(w, \epsilon)} \frac{f(z)-f(w)}{z-w} d z+\frac{f(w)}{2 \pi i} \int_{\gamma(w, \epsilon)} \frac{d z}{z-w} . \\
&=\frac{1}{2 \pi i} \int_{\gamma(w, \epsilon)} \frac{f(z)-f(w)}{z-w} d z+f(w) I(\gamma(w, \epsilon), w) \\
&=\frac{1}{2 \pi i} \int_{\gamma(w, \epsilon)} \frac{f(z)-f(w)}{z-w} d z+f(w)
\end{aligned}
$$
But since $f$ is complex differentiable at $z=w$, the term $(f(z)-f(w)) /(z-w)$ is bounded as $\epsilon \rightarrow 0$, so that by the [[Estimation Lemma]] its [[Complex Path Integral|integral]] over $\gamma(w, \epsilon)$ tends to zero. Thus as $\epsilon \rightarrow 0$ the [[Complex Path Integral]] around $\gamma(w, \epsilon)$ tends to $f(w)$. But since it is also equal to $(2 \pi i)^{-1} \int_{\gamma(a, r)} f(z) /(z-w) d z$, which is independent of $\epsilon$, we conclude that it must in fact be equal to $f(w)$. The result follows.

## Corollary 7.11: derivative of f(z)
If $f: U \rightarrow \mathbb{C}$ is [[Holomorphic]] on an open set $U$, then for any $z_{0} \in U, f(z)$ is equal to its [[Taylor's Theorem|Taylor series]] at $z_{0}$ and the [[Taylor's Theorem|Taylor series]] converges on any open disk centred at $z_{0}$ lying in $U$. Moreover the derivatives of $f$ at $z_{0}$ are given by
$$
\Large
f^{(n)}\left(z_{0}\right)=\frac{n !}{2 \pi i} \int_{\gamma(a, r)} \frac{f(z)}{\left(z-z_{0}\right)^{n+1}} d z
$$

> Define $c_n$ to be
> 
$$c_n=\frac{1}{2 \pi i} \int_{\gamma(a, r)} \frac{f(z)}{\left(z-z_{0}\right)^{n+1}} d z$$
^Laurent-series

For any $a \in \mathbb{C}, r \in \mathbb{R}_{>0}$ with $z_{0} \in B(a, r)$.
**Proof.** This follows immediately from  [[Cauchy's Integral Formula]], the proof of [[Winding Number#Proposition 6.7]], and Remark 6.8.