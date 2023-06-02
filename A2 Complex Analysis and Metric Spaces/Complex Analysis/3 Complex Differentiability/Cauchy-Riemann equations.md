#ComplexAnalysis 

```ad-theorem
title: Cauchy-Riemann equation
Let $a \in \mathbb{C}$, let $U$ be a neighbourhood of a and let $f: U \rightarrow \mathbb{C}$ be a function which is [[complex differentiable]] at a. Let $u, v: \mathbb{R}^{2} \rightarrow \mathbb{R}$ be the components of $f$. Then the four partial derivatives $\partial_{x} u$, $\partial_{y} u, \partial_{x} v, \partial_{y} v$ exist at a. Moreover, we have the [[Cauchy-Riemann equations]]
$$
\partial_{x} u=\partial_{y} v, \quad \partial_{x} v=-\partial_{y} u
$$
and $$f^{\prime}(a)=\partial_{x} u(a)+i \partial_{x} v(a)$$
```
^theorem

```ad-example
>The function $f(z)=\bar{z}$ is not [[Complex Differentiable|differentiable]] anywhere.

**Proof**. Let $u, v: \mathbb{R}^{2} \rightarrow \mathbb{R}$ be the components of $f$. Then clearly $u(x, y)=x$, $v(x, y)=-y$ and so $\partial_{x} u=1, \partial_{y} u=0, \partial_{x} v=0, \partial_{y} v=-1$. Thus $\partial_{x} u$ is never equal to $\partial_{y} v$, so the [[Cauchy-Riemann equations]] are never satisfied.
```

## Theorem 3.9
Suppose that $U \subseteq \mathbb{C}$ is open and that $f: U \rightarrow \mathbb{C}$ is a function. Let the components of $f$ be $(u, v)$, where $u, v: \mathbb{R}^{2} \rightarrow \mathbb{R}$. Suppose that all four partial derivatives $\partial_{x} u, \partial_{y} u, \partial_{x} v, \partial_{y} v$ exist, are continuous in $\dot{U}$, and satisfy the [[Cauchy-Riemann equations|Cauchy-Riemann equations]]. Then $f$ is [[Holomorphic]] on $U$, with derivative $\partial_{x} u+i \partial_{x} v$.

## Proposition 148
(Goursat) Given $f: U \rightarrow \mathbb{C}$, let $u=\operatorname{Re} f, v=\operatorname{Im} f$. Suppose that $u_{x}, u_{y}, v_{x}, v_{y}$ exist, are continuous and satisfy the Cauchy-Riemann Equations at $z \in U$. Then $f$ is differentiable at $z$.

Proof Let $z=x+i y \in U$ and $\varepsilon>0$ be such that $D(z, \varepsilon) \subseteq U$. Let $h=p+i q$ where $|h|<\varepsilon$. Then $(f(z+h)-f(z)) / h$ equals
$$
\begin{aligned}
& \frac{p}{h}\left(\frac{u(x+p, y+q)-u(x, y+q)+i v(x+p, y+q)-i v(x, y+q)}{p}\right) \\
&+\frac{q}{h}\left(\frac{u(x, y+q)-u(x, y)+i v(x, y+q)-i v(x, y)}{q}\right) \\
=& \frac{p}{h}\left(u_{x}\left(x+\theta_{1} p, y+q\right)+i v_{x}\left(x+\theta_{2} p, y+q\right)\right)+\frac{q}{h}\left(u_{y}\left(x, y+\theta_{3} q\right)+i v_{y}\left(x, y+\theta_{4} q\right)\right)
\end{aligned}
$$
by the [[Mean value Theorem]] and where each $\theta_{i} \in(0,1)$. Using the [[Cauchy-Riemann equations]], the above can be rewritten as
$$
\frac{\left[p u_{x}\left(x+\theta_{1} p, y+q\right)+i q u_{x}\left(x, y+\theta_{4} q\right)\right]}{p+i q}+\frac{i\left[p v_{x}\left(x+\theta_{2} p, y+q\right)+i q v_{x}\left(x, y+\theta_{3} q\right)\right]}{p+i q} .
$$
Finally, using the continuity of $u_{x}$ and $v_{x}$ we see that
$$
f^{\prime}(z)=\lim _{h \rightarrow 0}\left(\frac{f(z+h)-f(z)}{h}\right)=u_{x}(x, y)+i v_{x}(x, y)
$$
exists.

---

## Examples
We can use [[Cauchy-Riemann equations]] to prove non-differentiability: Try $f(z)=|z|.$
