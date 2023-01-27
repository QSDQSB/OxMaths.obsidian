---
aliases: [conformal mapping, conformal map]
---
#ComplexAnalysis 

## Definition
```ad-definition
title: Conformal
Let $U$ be an open subset of $\mathbb{C}$ and suppose that $T: U \rightarrow$ $\mathbb{C}$ (or $\mathbb{S}$) is continuously [[Complex Differentiable|differentiable]] in the real sense (so all its partial derivatives exist and are continuous).

If $\gamma_{1}, \gamma_{2}:[-1,1] \rightarrow U$ are two paths with $z_{0}=\gamma_{1}(0)=\gamma_{2}(0)$ then $\gamma_{1}^{\prime}(0)$ and $\gamma_{2}^{\prime}(0)$ are two tangent vectors at $z_{0}$, and we may consider the angle between them (formally speaking this is the difference of their arguments). 

By our assumption on $T$, the compositions $T \circ \gamma_{1}$ and $T \circ \gamma_{2}$ are $C^{1}$-paths through $T\left(z_{0}\right)$, thus we obtain a pair of tangent vectors at $T\left(z_{0}\right)$.

We say that $T$ is [[conformal]] at $z_{0}$ if for every pair of $C^{1}$ paths $\gamma_{1}, \gamma_{2}$ through $z_{0}$, the angle between their tangent vectors at $z_{0}$ is equal to the angle between the tangent vectors at $T\left(z_{0}\right)$ given by the $C^{1}$ paths $T \circ \gamma_{1}$ and $T \circ \gamma_{2}$.

We say that $T$ is [[conformal]] on $U$ if it is [[conformal]] at every $z \in U$.
```

### Proof
We need to show that $f$ preserves angles at $z_{0}$. Let $\gamma_{1}$ and $\gamma_{2}$ be $C^{1}-$ paths with $\gamma_{1}(0)=\gamma_{2}(0)=z_{0}$. Then we obtain paths $\eta_{1}, \eta_{2}$ through $f\left(z_{0}\right)$ where $\eta_{1}(t)=f\left(\gamma_{1}(t)\right)$ and $\eta_{2}(t)=f\left(\gamma_{2}(t)\right)$. We show that a version of the [[Path's Chain Rule|chain rule]] applies to these compositions. For $i=1,2$ we have
$$
\eta_{i}^{\prime}(0)=\lim _{h \rightarrow 0} \frac{f\left(\gamma_{i}(h)\right)-f(\gamma(0))}{h}=\lim _{h \rightarrow 0} \frac{f\left(\gamma_{i}(h)\right)-f\left(z_{0}\right)}{\gamma_{i}(h)-z_{0}} \cdot \frac{\gamma_{i}(h)-z_{0}}{h}
$$
Clearly for small $h, \gamma_{i}(h) \neq z_{0}$ as $\gamma_{i}^{\prime}(0) \neq 0$ and $\lim _{h \rightarrow 0} \frac{f\left(\gamma_{i}(h)\right)-f\left(z_{0}\right)}{\gamma_{i}(h)-z_{0}}=$ $f^{\prime}\left(z_{0}\right)$. So if we set $f^{\prime}\left(z_{0}\right)=\rho e^{i \theta}$ we have
$$
\eta_{i}^{\prime}(0)=f^{\prime}\left(z_{0}\right) \gamma_{i}^{\prime}(0)=\rho e^{i \theta} \gamma_{i}^{\prime}(0), \quad i=1,2 .
$$
Hence if $\phi_{1}$ and $\phi_{2}$ are the arguments of $\gamma_{1}^{\prime}(0)$ and $\gamma_{2}^{\prime}(0)$, then the arguments of $\eta_{1}^{\prime}(0)$ and $\eta_{2}^{\prime}(0)$ are $\phi_{1}+\theta$ and $\phi_{2}+\theta$ respectively. It follows that the difference between the two pairs of arguments, that is, the angles between the curves at $z_{0}$ and $f\left(z_{0}\right)$, are the same.

For the final part, note that if $f^{\prime}\left(z_{0}\right) \neq 0$ then by the definition of the degree of vanishing, the function $f(z)$ is locally biholomorphic (see the proof of the [[Inverse Function Theorem]]).

### Proposition 12.4: Conformal if non-zero derivative

Let $f: U \rightarrow \mathbb{C}$ be a [[Holomorphic]] map and let $z_{0} \in U$ be such that $f^{\prime}\left(z_{0}\right) \neq 0$. Then $f$ is [[Conformal]] at $z_{0}$. In particular, if $f: U \rightarrow \mathbb{C}$ is has nonvanishing derivative on all of $U$, it is [[Conformal]] on all of $U$ (and locally a biholomorphism).
^Proposition-12-4

```ad-example
The function $f(z)=z^{2}$ has $f^{\prime}(z)$ nonzero everywhere except the origin. It follows $f$ is a conformal map from $\mathbb{C}^{\times}$to itself. Note that the condition that $f^{\prime}(z)$ is non-zero is necessary - if we consider the function $f(z)=z^{2}$ at $z=0, f^{\prime}(z)=2 z$ which vanishes precisely at $z=0$, and it is
```

### Lemma 12.7: Conformality of Möbius transformations
[[Möbius map|Möbius transformations]] are conformal.
#### Proof of Lemma 12.7
As we have already shown, any [[Holomorphic]] map is [[Conformal]] wherever its derivative is nonzero.
For a [[Möbius map]] we have $f(z)=\frac{a z+b}{c z+d}$ and
$$
f^{\prime}(z)=\frac{a d-b c}{(c z+d)^{2}} \neq 0,
$$
for all $z \neq-d / c$, thus $f$ is conformal at each $z \in \mathbb{C} \backslash\{-d / c\}$.

![[Möbius map#^Proposition-12-9]]


## Examples
```ad-example
title: Real Axis to Unit Circle
$$f(z)=\frac{i z+1}{z+i}$$ sends $0\to -i$, $1\to 1$, $\infty\to i$.
```

```ad-example
title: Semicircle to Unit Circle

`First` send semicircle to second quadrant
$$f(z)=\frac{z-1}{z+1}$$
(by taking $\pm1$ to $0,\infty$)

`Second` take second quadrant to half plane $H=\{w \in \mathbb{C}: \Im(w)<0\}$ by $z\mapsto z^2$.

`Third` rotate it to the upper-half plane by timing $e^{-{i\over2}\pi}$

`Fourth` we know we can map a upper-half plane to a circle.
```