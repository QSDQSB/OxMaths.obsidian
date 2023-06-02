#ComplexAnalysis 

```ad-theorem
title: Inverse function theorem
Suppose that $f: U \rightarrow \mathbb{C}$ is injective and [[holomorphic]] and that $f^{\prime}(z) \neq 0$ for all $z \in U$. If $g: f(U) \rightarrow U$ is the inverse of $f$, then $g$ is [[holomorphic]] with $g^{\prime}(w)=1 / f^{\prime}(g(w))$.
```
^theorem

### Proof
By the [[Open Mapping Theorem]], the function $g$ is continuous, indeed if $V$ is open in $f(U)$ then $g^{-1}(V)=f(V)$ is open by that theorem. To see that $g$ is [[Holomorphic]], fix $w_{0} \in f(U)$ and let $z_{0}=g\left(w_{0}\right)$. Note that since $g$ and $f$ are continuous, if $w \rightarrow w_{0}$ then $f(w) \rightarrow z_{0}$. Writing $z=f(w)$ we have
$$
\lim _{w \rightarrow w_{0}} \frac{g(w)-g\left(w_{0}\right)}{w-w_{0}}=\lim _{z \rightarrow z_{0}} \frac{z-z_{0}}{f(z)-f\left(z_{0}\right)}=1 / f^{\prime}\left(z_{0}\right)
$$
as required.