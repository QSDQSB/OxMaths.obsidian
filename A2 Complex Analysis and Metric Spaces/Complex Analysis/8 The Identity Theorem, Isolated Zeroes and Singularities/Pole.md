---
aliases: [simple pole,poles,simple poles]
---
#ComplexAnalysis 

## Definition
```ad-definition
title: Pole (of order k)
$a$ is said to be a [[pole]] of order $k$ if $c_{-k} \neq 0$ and $c_{n}=0$ for all $n<-k$.
```

![[Removable Singularity#Proposition 246]]

## Examples

```ad-example
$$f(z)=\frac{z+1}{z^{3}+1}$$
---

Solution As $z^{3}+1=0$ at $z=-1, e^{\pi i / 3}, e^{-\pi i / 3}$ then these are the [[Singularity|singularities]] of $f$ and they are clearly isolated. Further when $z^{3}+1 \neq 0$ we see
$$

f(z)=\frac{1}{\left(z-e^{\pi i / 3}\right)\left(z-e^{-\pi i / 3}\right)} .
$$
So $f$ has a [[removable singularity]] at $-1$ and simple poles at $e^{\pi i / 3}$ and $e^{-\pi i / 3}$.
```

```ad-example
$$g(z)=\frac{1}{z}-\frac{1}{\sin z}$$
---
Note that
$$
g(z)=\frac{\sin z-z}{z \sin z} .
$$
This has [[Singularity|singularities]] at $z=n \pi$ where $n \in \mathbb{Z}$. At $z=0$ we note
$$
\sin z-z=-\frac{z^{3}}{3 !}+\cdots, \quad z \sin z=z^{2}+\cdots
$$
So $\sin z-z$ has a triple zero and $z \sin z$ has a double zero, so that $g(z)$ has a [[removable singularity]] at $z=0$. At $z=n \pi$ where $n \neq 0$ then $z \sin z$ has a single [[zero]] whilst $\sin z-z \neq 0$. Hence $g(z)$ has a [[Pole|simple pole]].
```

```ad-example
$$h(z)=\frac{1}{e^{1 / z}+1}$$
---
$h(z)$ has a [[singularity]] when $z=0$ and when $e^{1 / z}=-1$, i.e. at $z_{n}=(2 n \pi i)^{-1}$. As $z_{n} \rightarrow 0$ as $n \rightarrow \infty$, then $z=0$ is a non-isolated [[singularity]]. At $z_{n}$, looking at the denominator, we have
$$
\left.\frac{\mathrm{d}}{\mathrm{d} z}\right|_{z=z_{n}}\left(e^{1 / z}-1\right)=\frac{-1}{z_{n}^{2}} e^{1 / z_{n}}=-(2 n \pi i)^{2}(-1)=-4 n^{2} \pi^{2} \neq 0 .
$$
Thus $e^{1 / z}-1$ has a simple [[zero]] at $z=z_{n}$ and hence $h(z)$ has a simple pole at $z=z_{n}$.
```

## Residues at a Pole

### Proposition 248 (Residues at Simple Poles)
Suppose that $f(z)$ has a [[Pole|simple pole]] at a. Then
$$
\operatorname{res}(f(z) ; a)=\lim _{z \rightarrow a}(z-a) f(z) .
$$
If $f(z)=g(z) / h(z)$, where $g$ and $h$ are [[Holomorphic]] at a and $h$ has a simple [[Zero]] at $a$, then
$$
\operatorname{res}(f(z) ; a)=\frac{g(a)}{h^{\prime}(a)} .
$$

### Proposition 249 (Residues at Overt Multiple Poles)
Suppose that
$$
f(z)=\frac{g(z)}{(z-a)^{n}} \quad \text { where } g \text { is holomorphic at } a \text { and } g(a) \neq 0
$$
(so that $g$ has an overt [[Pole]] of order $n$ at a). Then
$$
\operatorname{res}(f(z) ; a)=\frac{g^{(n-1)}(a)}{(n-1) !}
$$