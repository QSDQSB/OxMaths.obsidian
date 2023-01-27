---
aliases: [fundamental theorem of calculus]
---
## Fundamental Theorem of Calculus (Complex Version)
#ComplexAnalysis 

### Theorem
```ad-theorem
title: Fundamental Theorem of Calculus (Complex Version)
Let $U \subseteq \mathbb{C}$ be open and let $f: U \rightarrow \mathbb{C}$ be a continuous function. If $F: U \rightarrow \mathbb{C}$ is a [[primitive]] for $f$ and $\gamma:[a, b] \rightarrow U$ is a [piecewise $C^{1}$](Path%20Differentiable) [[path]] in $U$ then we have
$$
\int_{\gamma} f(z) d z=F(\gamma(b))-F(\gamma(a))
$$
In particular the [[Complex Path Integral|integral]] of such a function $f$ around any closed path is zero.
```
^theorem

#### Proof
First suppose that $\gamma$ is $C^{1} .$ Then we have
$$
\begin{aligned}
\int_{\gamma} f(z) d z &=\int_{\gamma} F^{\prime}(z) d z=\int_{a}^{b} F^{\prime}(\gamma(t)) \gamma^{\prime}(t) d t \\
&=\int_{a}^{b} \frac{d}{d t}(F \circ \gamma)(t) d t \\
&=F(\gamma(b))-F(\gamma(a))
\end{aligned}
$$
where in second line we used the [[Complex Differentiable#Lemma 5.18: Chain Rule]] and in the last line we used the [[Second Fundamental Theorem of Calculus]] on the real and imaginary parts of $F \circ \gamma$.

If $\gamma$ is only piecewise $C^{1}$, then take a partition $a=a_{0}<a_{1}<\ldots<a_{k}=$ $b$ such that $\gamma$ is $C^{1}$ on $\left[a_{i}, a_{i+1}\right]$ for each $i \in\{0,1, \ldots, k-1\} .$ Then we obtain a telescoping sum:
$$
\begin{aligned}
\int_{\gamma} f(z) &=\int_{a}^{b} f(\gamma(t)) \gamma^{\prime}(t) d t \\
&=\sum_{i=0}^{k-1} \int_{a_{i}}^{a_{i+1}} f(\gamma(t)) \gamma^{\prime}(t) d t \\
&=\sum_{i=0}^{k-1}\left(F\left(\gamma\left(a_{i+1}\right)\right)-F\left(\gamma\left(a_{i}\right)\right)\right) \\
&=F(\gamma(b))-F(\gamma(a))
\end{aligned}
$$
Finally, since $\gamma$ is closed precisely when $\gamma(a)=\gamma(b)$ it follows immediately that the [[Complex Path Integral|integral]] of $f$ along a closed path is zero.

### Corollary 5.21
Let $U$ be a domain and let $f: U \rightarrow \mathbb{C}$ be a function with $f^{\prime}(z)=$ 0 for all $z \in U$. Then $f$ is constant.

#### Proof
Pick $z_{0} \in U$. We recall that an open [[Connected]] set of a normed space is [[Path-Connected]] and in fact even ***polygonally connected***, i.e. any two points of the set can be connected by the concatenation of finitely many line segments. It follows that any point $w$ of $U$ can be joined to $z_{0}$ by a piecewise $C^{1}$-[[Path]] $\gamma:[0,1] \rightarrow$ $U$ so that $\gamma(0)=z_{0}$ and $\gamma(1)=w$. Then by [[Complex Fundamental Theorem of Calculus|fundamental theorem of calculus]] we see that
$$
f(w)-f\left(z_{0}\right)=\int_{\gamma} f^{\prime}(z) d z=0
$$
so that $f$ is constant as required.

### Theorem 5.22
If $U$ is a domain (i.e. it is [[Open]] and [[Path-Connected]]) and $f: U \rightarrow$ $\mathbb{C}$ is a continuous function such that for any closed path in $U$ we have $\int_{\gamma} f(z) d z=$ 0 , then $f$ has a [[Primitive]].
#### Proof
Fix $z_{0}$ in $U$, and for any $z \in U$ set
$$
F(z)=\int_{\gamma} f(z) d z
$$
where $\gamma:[a, b] \rightarrow U$ with $\gamma(a)=z_{0}$ and $\gamma(b)=z$.

We claim that $F(z)$ is independent of the choice of $\gamma$. Indeed if $\gamma_{1}, \gamma_{2}$ are two such paths, let $\gamma=\gamma_{1} \star \gamma_{2}^{-}$be the path obtained by concatenating $\gamma_{1}$ and the opposite $\gamma_{2}^{-}$of $\gamma_{2}$ (that is, $\gamma$ traverses the path $\gamma_{1}$ and then goes backward along $\gamma_{2}$ ). Then $\gamma$ is a closed path and so, using Proposition $5.14$ we have
$$
0=\int_{\gamma} f(z) d z=\int_{\gamma_{1}} f(z) d z+\int_{\gamma_{2}^{-}} f(z) d z,
$$
hence since $\int_{\gamma_{2}^{-}} f(z) d z=-\int_{\gamma_{2}} f(z) d z$ we see that $\int_{\gamma_{1}} f(z) d z=\int_{\gamma_{2}} f(z) d z$.

Next we claim that $F$ is [[Complex Differentiable|differentiable]] with $F^{\prime}(z)=f(z)$. To see this, fix $w \in U$ and $\epsilon>0$ such that $B(w, \epsilon) \subseteq U$ and choose a path $\gamma:[a, b] \rightarrow U$ from $z_{0}$ to $w$. If $z_{1} \in B(w, \epsilon) \subseteq U$, then the concatenation of $\gamma$ with the straight-line path $s:[0,1] \rightarrow U$ given by $s(t)=w+t(z-w)$ from $w$ to $z$ is a path $\gamma_{1}$ from $z_{0}$ to $z$. It follows that
$$
\begin{aligned}
F\left(z_{1}\right)-F(w) &=\int_{\gamma_{1}} f(z) d z-\int_{\gamma} f(z) d z \\
&=\left(\int_{\gamma} f(z) d z+\int_{s} f(z) d z\right)-\int_{\gamma} f(z) d z \\
&=\int_{s} f(z) d z .
\end{aligned}
$$

But then we have for $z_{1} \neq w$
$$
\begin{aligned}
\left|\frac{F\left(z_{1}\right)-F(w)}{z_{1}-w}-f(w)\right| &=\mid \frac{1}{z_{1}-w}\left(\int_{0}^{1} f\left(w+t\left(z_{1}-w\right)\left(z_{1}-w\right) d t\right)-f(w) \mid\right.\\
&=\left|\int_{0}^{1}\left(f\left(w+t\left(z_{1}-w\right)\right)-f(w)\right) d t\right| \\
& \leq \sup _{t \in[0,1]}\left|f\left(w+t\left(z_{1}-w\right)\right)-f(w)\right| \\
& \rightarrow 0 \text { as } z_{1} \rightarrow w
\end{aligned}
$$
as $f$ is continuous at $w$. Thus $F$ is [[Complex Differentiable|differentiable]] at $w$ with derivative $F^{\prime}(w)=f(w)$ as claimed.

```ad-note
See the similar idea in [[Cauchy's theorem for a star-like domain]].
```