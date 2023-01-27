---
aliases: [Kraft-McMillan]
tags: [InfoTheory]
---

## Theorem 3.5: Kraft-McMillan inequality
1) Let $c: \mathcal{X} \longrightarrow \mathcal{Y}^*$ be uniquely decodable and set $l_x=|c(x)|$. Then
$$
\sum_{x \in \mathcal{X}}|\mathcal{Y}|^{-l_x} \leq 1. \quad\color{yellow}{(3.1.1)}
$$
2) Conversely, given $\left(l_x\right)_{x \in \mathcal{X}} \subset \mathbb{N}$ and a finite set $\mathcal{Y}$ such that the formula holds, there exists a [[Classes of Codes|prefix code]] $c: \mathcal{X} \longrightarrow \mathcal{Y}^*$ such that $|c(x)|=l_x$ for $\forall x \in \mathcal{X}$.

### Proof
Set $d=|\mathcal{Y}|$ and $l_{\max }=\max _{x \in \mathcal{X}}|c(x)|, l_{\min }=\min _{x \in \mathcal{X}}|c(x)|$. If we denote with ==$a(k)$== the number of source sequences mapping to codewords of length $k$, then
$$
\left(\sum_{x \in \mathcal{X}} d^{-|c(x)|}\right)^n=\sum_{k=n * l_{\min }}^{n * l_{\text {max }}} a(k) d^{-k} .
$$
Unique decodability implies $a(k) \leq d^k$, hence $$\sum_{x \in \mathcal{X}} d^{-|c(x)|} \leq\left(n\left(l_{\text {max }}-l_{\text {min }}\right)+1\right)^{1 / n}.$$Letting $n \rightarrow+\infty$ shows the result.

#### Reversely
Let $\left(l_x\right)_{x \in \mathcal{X}}$ be a set of integers that fulfils (3.1.1) and set $\mathcal{Y}$. By relabelling, identify $\mathcal{X}$ as the set $\{1, \cdots,|\mathcal{X}|\} \subset \mathbb{N}$ and assume $l_1 \leq l_2 \leq \cdots \leq l_{|\mathcal{X}|}$. Define $r_m:=\sum_{i=1}^{m-1}|\mathcal{Y}|^{-l_i}$ for any $m \leq|\mathcal{X}|$, which satisfies $r_m \leq 1$ by the assumption. Define $c(m)$ as the first $l_m$ digits in the $|\mathcal{Y}|$-ary expansion| $\mid$ of the real number $r_m \in[0,1)$, that is $\mathrm{c}(m):=y_1 \cdots y_{l_m}$, where
$$
r_m=\sum_{i \geq 1} y_i|\mathcal{Y}|^{-i} .
$$
This must be a prefix code: if not, there exists $m, n$ with $m<n$, and $c(m)$ a prefix of $c(n)$ and therefore the first $l_m$ digits of $r_m$ and $r_n$ in the $|\mathcal{Y}|$-ary expansion coincide which in turn implies $r_n-r_m<|\mathcal{Y}|^{-l_m}$; on the other hand, by the very definition of $r_m$ and $r_n$ we have $r_n-r_m=\sum_{i=m}^{n-1}|\mathcal{Y}|^{-l_i} \geq|\mathcal{Y}|^{-l_m}$, which is a contradiction.