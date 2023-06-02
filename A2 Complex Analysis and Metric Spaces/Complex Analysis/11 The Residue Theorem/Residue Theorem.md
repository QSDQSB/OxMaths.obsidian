#ComplexAnalysis #MostCrucial 

```ad-theorem
title: [[Residue]] theorem
Suppose that $U$ is an [[open]] set in $\mathbb{C}$ and $\gamma$ is a [[path]] whose [[inside]] is contained in $U$, so that for all $z \notin U$ we have $I(\gamma, z)=0$. Then if $S \subset U$ is a finite set such that $S \cap \gamma^{*}=\emptyset$ and $f$ is a [[holomorphic]] function on $U \backslash S$ we have
$$
\frac{1}{2 \pi i} \int_{\gamma} f(z) d z=\sum_{a \in S} I(\gamma, a) \operatorname{Res}_{a}(f)
$$
```
^theorem

### Proof
For each $a \in S$ let $P_{a}(f)(z)=\sum_{n=-1}^{-\infty} c_{n}(a)(z-a)^{n}$ be the principal part of $f$ at $a$, a [[Holomorphic]] function on $\mathbb{C} \backslash\{a\}$. Then by definition of $P_{a}(f)$, the difference $f-P_{a}(f)$ is holomorphic at $a \in S$, and thus $g(z)=$ $f(z)-\sum_{a \in S} P_{a}(f)$ is [[Holomorphic]] on all of $U$. But then by Theorem $9.11$ we see that $\int_{\gamma} g(z) d z=0$, so that
$$
\int_{\gamma} f(z) d z=\sum_{a \in S} \int_{\gamma} P_{a}(f)(z) d z
$$
But by the proof of Theorem 9.17, the series $P_{a}(f)$ converges uniformly on $\gamma^{*}$ so that
$$
\begin{aligned}
\int_{\gamma} P_{a}(f) d z &=\int_{\gamma} \sum_{n=-1}^{-\infty} c_{n}(a)(z-a)^{n}=\sum_{n=1}^{\infty} \int_{\gamma} \frac{c_{-n}(a) d z}{(z-a)^{n}} \\
&=\int_{\gamma} \frac{c_{-1}(a) d z}{z-a}=I(\gamma, a) \operatorname{Res}_{a}(f),
\end{aligned}
$$
since for $n>1$ the function $(z-a)^{-n}$ has a [[Primitive]] on $\mathbb{C} \backslash\{a\}$. The result follows.
### Jordan's Lemma
![[Jordan's Lemma#^theorem]]