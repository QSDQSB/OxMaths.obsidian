---
aliases: [differentiable]
---
#ComplexAnalysis 

## Definition
Let $a \in \mathbb{C}$, and suppose that $f: U \rightarrow \mathbb{C}$ is a function, where $U$ is a neighbourhood of $a .$ In particular, $f$ is defined on some ball $B(a, \eta)$. Then we say that $f$ is [[Complex Differentiable]] at $a$ if
$$
\lim _{z \rightarrow a} \frac{f(z)-f(a)}{z-a}
$$
exists. If the limit exists, we write $f^{\prime}(a)$ for it and call this the derivative of $f$ at $a$.

## Lemma 3.3
Let a $\in \mathbb{C}$, let $U$ be a [[Neighbourhood]] of a and let $f: U \rightarrow \mathbb{C}$. Then $f$ is [[Complex Differentiable|differentiable]] at a, with derivative $f^{\prime}(a)$, if and only if we have
$$
f(z)=f(a)+f^{\prime}(a)(z-a)+\varepsilon(z)(z-a)
$$
where $\varepsilon(z) \rightarrow 0$ as $z \rightarrow a .$

---

## Lemma 3.8
Suppose $f: \mathbb{C} \rightarrow \mathbb{C}$ is [[Holomorphic]] and that $f^{\prime}$ is identically zero Then $f$ is constant.

#### Proof
Let the components of $f$ be $(u, v)$. By [[Cauchy-Riemann equations]], the partial derivative $\partial_{x} u$ exists and is zero. This means that, for fixed $y$, the function $x \mapsto u(x, y)$ is differentiable with derivative zero. By the real-variable version of the lemma we are trying to prove (which is a simple consequence of the [[mean value theorem]]) we see that $u(x, y)$ is constant as a function of $x$, for fixed $y$. Similarly, since $\partial_{y} u$ exists and is zero, $u(x, y)$ is constant as a function of $y$, for fixed $x$. Therefore, for arbitrary $(x, y)$ and $\left(x^{\prime}, y^{\prime}\right)$ we have $u(x, y)=u\left(x^{\prime}, y\right)=u\left(x^{\prime}, y^{\prime}\right)$, which means that $u$ is constant. By an identical argument, $v$ is constant.

![[Complex Chain Rule]]