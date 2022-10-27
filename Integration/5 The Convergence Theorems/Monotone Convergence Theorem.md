---
aliases: [MCT]
---
# Monotone Convergence Theorem
#Integration 


### MCT Version 1
```ad-theorem
title: Monotone Convergence Theorem, Version 1
If $\left(f_{n}\right)$ is an increasing sequence of non-negative [[measurable]] functions and $f=\lim _{n \rightarrow \infty} f_{n}$, then $\int f=\lim _{n \rightarrow \infty} \int f_{n}$
```
#### Proof
Since $f_{n} \leq f$, it is immediate that $\sup _{n} \int f_{n} \leq \int f$.
For the reverse inequality, we consider a simple function $\phi$ such that $0 \leq \phi \leq f$. We have to show that $\int \phi \leq \lim _{n \rightarrow \infty} \int f_{n}$. It then follows from the definition of $\int f$ that $\int f \leq \lim _{n \rightarrow \infty} \int f_{n}$.
Take $\alpha \in(0,1)$, and let
$$
B_{n}=\left\{x: f_{n}(x) \geq \alpha \phi(x)\right\} .
$$
Then $B_{n}$ is measurable (since $f_{n}-\alpha \phi$ is [[measurable]]), $B_{n} \subseteq B_{n+1}$ and $\bigcup_{n=1}^{\infty} B_{n}=\mathbb{R}$ (for each $x$, either $\phi(x)=0$ or $f(x)>\alpha \phi(x))$. Since $\alpha \phi \chi_{B_{n}} \leq f_{n} \chi_{B_{n}} \leq f_{n}$,
$$
\alpha \int_{B_{n}} \phi \leq \int_{\mathbb{R}} f_{n} .
$$
If $\phi=\sum_{i=1}^{k} \beta_{i} \chi_{E_{i}}$, then
$$
\int_{B_{n}} \phi=\sum_{i=1}^{k} \beta_{i} m\left(E_{i} \cap B_{n}\right) \rightarrow \sum_{i=1}^{k} \beta_{i} m\left(E_{i}\right)=\int_{\mathbb{R}} \phi
$$
as $n \rightarrow \infty$, by Proposition 3.2(2). Taking limits in $\left(^{*}\right)$,
$$
\alpha \int_{\mathbb{R}} \phi \leq \lim _{n \rightarrow \infty} \int_{\mathbb{R}} f_{n} .
$$
Letting $\alpha \rightarrow 1-$ gives the required inequality.

### Baby MCT
```ad-theorem
title: Baby MCT
Let $f$ be a non-negative measurable function, $\left(E_{n}\right)$ be an increasing sequence of measurable sets, and $E=\bigcup_{n=1}^{\infty} E_{n}$. Then $f$ is integrable over $E$ if and only if $\sup _{n} \int_{E_{n}} f<\infty$. Then $\int_{E} f=\sup _{n} \int_{E_{n}} f=\lim _{n \rightarrow \infty} \int_{E_{n}} f$.
```
Proof. Apply Theorem $4.2$ with $f_{n}=f \chi_{E_{n}}$, noting that $\chi_{E_{n}} \leq \chi_{E_{n+1}}$ and $f \geq 0$, so $f_{n} \leq f_{n+1}$ and $\chi_{E}(x)=\lim _{n \rightarrow \infty} \chi_{E_{n}}(x)$

### MCT Version 2
```ad-theorem
title: Monotone Convergence Theorem, Version 2
Let $\left(f_{n}\right)$ be a sequence of integrable functions such that:
(1) for each $n, f_{n} \leq f_{n+1}$ a.e.,
(2) $\sup _{n} \int f_{n}<\infty$.
Then $\left(f_{n}\right)$ converges a.e. to an integrable function $f$, and $\int f=\lim _{n \rightarrow \infty} \int f_{n}$.
```