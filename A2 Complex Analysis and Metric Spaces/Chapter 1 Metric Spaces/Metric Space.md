---
aliases: [metric, metric spaces, metrics]
tags: [ComplexAnalysis]
---
### Definition: Distance Function
```ad-definition
title: Distance Function
Let $X$ be a set. Then a distance function on $X$ is a function $d: X \times X \rightarrow \mathbf{R}$ with the following properties:
- (positivity) $d(x, y) \geqslant 0$ and $d(x, y)=0$ if and only if $x=y$;
- (symmetry) $d(x, y)=d(y, x)$;
- (triangle inequality) if $x, y, z \in X$ then we have $d(x, z) \leqslant d(x, y)+d(y, z)$.
```

### Definition: Metric Space
>The pair $(X, d)$ consisting of a set $X$ together with a distance function $d$ on it is called a [[Metric Space]].

```ad-example
Take $X=\mathbf{R}^{n}$. Then each of the following functions define metrics on $X$.
$$
\begin{aligned}
d_{1}(v, w) &=\sum_{i=1}^{n}\left|v_{i}-w_{i}\right| \\
d_{2}(v, w) &=\left(\sum_{i=1}^{n}\left(v_{i}-w_{i}\right)^{2}\right)^{1 / 2} \\
d_{\infty}(v, w) &=\max _{i \in\{1,2, \ldots, n\}}\left|v_{i}-w_{i}\right| 
\end{aligned}
$$
These are called the ==$\ell^{1}$== - ("ell one"),==$\ell^{2}$== - (or Euclidean) and ==$\ell^{\infty}$-distances== respectively. Of course, the Euclidean distance is the most familiar one.
```

### Lemma 1.2.2: Reverse Triangle Inequality
>Let $x, y, z$ be points in a [[Metric Space]]. Then we have $\mid d(x, y)-$ $d(x, z) \mid \leqslant d(y, z)$.
#### Proof
This is two inequalities in one, namely the inequality $d(x, y)-d(x, z) \leqslant$ $d(y, z)$, and the inequality $d(x, z)-d(x, y) \leqslant d(y, z) .$ Both are instances of (in fact, equivalent to ) the triangle inequality.

---
![[Norm]]


### Lemma 1.3.3: Triangle Inequality
If $x, y \in \mathbf{R}^{n}$ then $\|x+y\|_{2} \leqslant\|x\|_{2}+\|y\|_{2}$.

#### Proof
Since $\|v\|_{2} \geqslant 0$ for all $v \in \mathbf{R}^{n}$ the desired inequality is equivalent to
$$
\|x+y\|_{2}^{2} \leqslant\|x\|_{2}^{2}+2\|x\|_{2}\|y\|_{2}+\|y\|_{2}^{2}
$$
But since $\|x+y\|_{2}^{2}=\langle x+y, x+y\rangle=\|x\|_{2}^{2}+2\langle x, y\rangle+\|y\|_{2}^{2}$, this inequality is immediate from the Cauchy-Schwarz inequality, that is to say the inequality $|\langle x, y\rangle| \leqslant\|x\|_{2}\|y\|_{2}$.

### Examples
![[2-adic Metric]]
![[Projective Space]]