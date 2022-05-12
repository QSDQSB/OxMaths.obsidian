---
aliases: [fundamental theorem of calculus]
---
## Fundamental Theorem of Calculus (Complex Version)
#ComplexAnalysis 

### Theorem
Let $U \subseteq \mathbb{C}$ be open and let $f: U \rightarrow \mathbb{C}$ be a continuous function. If $F: U \rightarrow \mathbb{C}$ is a [[primitive]] for $f$ and $\gamma:[a, b] \rightarrow U$ is a [piecewise $C^{1}$](Path%20Differentiable) [[path]] in $U$ then we have
$$
\int_{\gamma} f(z) d z=F(\gamma(b))-F(\gamma(a))
$$
In particular the integral of such a function $f$ around any [[Groups and Group Actions/2 Introduction to Groups/Closed]] path is zero.

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
Finally, since $\gamma$ is closed precisely when $\gamma(a)=\gamma(b)$ it follows immediately that the integral of $f$ along a closed path is zero.

### Corollary 5.21
Let $U$ be a domain and let $f: U \rightarrow \mathbb{C}$ be a function with $f^{\prime}(z)=$ 0 for all $z \in U$. Then $f$ is constant.

#### Proof
Pick $z_{0} \in U$. We recall that an open [[connected]] set of a normed space is [[path-connected]] and in fact even ***polygonally connected***, i.e. any two points of the set can be connected by the concatenation of finitely many line segments. It follows that any point $w$ of $U$ can be joined to $z_{0}$ by a piecewise $C^{1}$-path $\gamma:[0,1] \rightarrow$ $U$ so that $\gamma(0)=z_{0}$ and $\gamma(1)=w$. Then by [[Complex Fundamental Theorem of Calculus|fundamental theorem of calculus]] we see that
$$
f(w)-f\left(z_{0}\right)=\int_{\gamma} f^{\prime}(z) d z=0
$$
so that $f$ is constant as required.

### Theorem 5.22
If $U$ is a domain (i.e. it is [[open]] and [[path-connected]]) and $f: U \rightarrow$ $\mathbb{C}$ is a continuous function such that for any closed path in $U$ we have $\int_{\gamma} f(z) d z=$ 0 , then $f$ has a [[primitive]].
#### Proof
Fix $z_{0}$ in $U$, and for any $z \in U$ set
$$
F(z)=\int_{\gamma} f(z) d z
$$
where $\gamma:[a, b] \rightarrow U$ with $\gamma(a)=z_{0}$ and $\gamma(b)=z$.
PROOF #TODO 