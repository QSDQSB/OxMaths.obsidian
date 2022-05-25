---
aliases: [simple pole]
---
# Pole
#ComplexAnalysis 

## Definition
$a$ is said to be a [[pole]] of order $k$ if $c_{-k} \neq 0$ and $c_{n}=0$ for all $n<-k$.

![[Removable Singularity#Proposition 246]]

## Proposition 248 (Residues at Simple Poles)
Suppose that $f(z)$ has a [[Pole|simple pole]] at a. Then
$$
\operatorname{res}(f(z) ; a)=\lim _{z \rightarrow a}(z-a) f(z) .
$$
If $f(z)=g(z) / h(z)$, where $g$ and $h$ are [[holomorphic]] at a and $h$ has a simple zero at $a$, then
$$
\operatorname{res}(f(z) ; a)=\frac{g(a)}{h^{\prime}(a)} .
$$

## Proposition 249 (Residues at Overt Multiple Poles)
Suppose that
$$
f(z)=\frac{g(z)}{(z-a)^{n}} \quad \text { where } g \text { is holomorphic at } a \text { and } g(a) \neq 0
$$
(so that $g$ has an overt pole of order $n$ at a). Then
$$
\operatorname{res}(f(z) ; a)=\frac{g^{(n-1)}(a)}{(n-1) !}
$$