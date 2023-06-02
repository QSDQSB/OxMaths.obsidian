#ComplexAnalysis 

```ad-theorem
title: Argument Principle
Suppose that $U$ is an open set and $f: U \rightarrow$ $\mathbb{C}$ is a [[meromorphic]] function on $U$. If $B(a, r) \subseteq U$ and $N$ is the number of zeros (counted with multiplicity) and $P$ is the number of poles (again counted with multiplicity) of $f$ [[inside]] $B(a, r)$ and $f$ has neither on $\partial B(a, r)$ then
$$
N-P=\frac{1}{2 \pi i} \int_{\gamma} \frac{f^{\prime}(z)}{f(z)} d z
$$
where $\gamma(t)=a+r e^{2 \pi i t}$ is a path with image $\partial B(a, r)$. Moreover this is the [[winding number]] of the path $\Gamma=f \circ \gamma$ about the origin.
```
^theorem

### Proof
It is easy to check that $I(\gamma, z)$ is 1 if $|z-a| \leq 1$ and is 0 otherwise. Since [[#Lemma 10.1]] shows that $f^{\prime}(z) / f(z)$ has simple poles at the zeros and poles of $f$ with residues the corresponding orders the result immediately from [[Residue Theorem#^theorem]].

For the last part, note that the [[Winding Number]] of $\Gamma(t)=f(\gamma(t))$ about zero is just
$$
\int_{f \circ \gamma} d w / w=\int_{0}^{1} \frac{1}{f(\gamma(t))} f^{\prime}(\gamma(t)) \gamma^{\prime}(t) d t=\int_{\gamma} \frac{f^{\prime}(z)}{f(z)} d z
$$

## Lemma 10.1
```ad-theorem
Suppose that $f: U \rightarrow \mathbb{C}$ is a [[meromorphic]] and has a **zero** of order $k$ or a pole of order $k$ at $z_{0} \in U$. Then ==$f^{\prime}(z) / f(z)$== has a [[Pole|simple pole]] at $z_{0}$ with [[residue]] $k$ or $-k$ respectively.
```

### Proof of Lemma 10.1
If $f(z)$ has a zero of order $k$ we have $f(z)=\left(z-z_{0}\right)^{k} g(z)$ where $g(z)$ is [[Holomorphic]] near $z_{0}$ and $g\left(z_{0}\right) \neq 0$. It follows that
$$
f^{\prime}(z) / f(z)=\frac{k}{z-z_{0}}+g^{\prime}(z) / g(z),
$$
and since $g(z) \neq 0$ near $z_{0}$ it follows $g^{\prime}(z) / g(z)$ is [[Holomorphic]] near $z_{0}$, so that the result follows. The case where $f$ has a pole at $z_{0}$ is similar.


## Counting Zeroes
```ad-algorithm
title: Counting Zeroes
 Let $f$ be **[[holomorphic]]** inside and on a positively oriented closed path; assume further than $f$ is non-zero on $\gamma$. Then
$$
\text { number of zeros of } f \text { in } \gamma \text { (counting multiplicities) }=\frac{1}{2 \pi i} \int_{\gamma} \frac{f^{\prime}(z)}{f(z)} \mathrm{d} z
$$
```

### Proof of Counting Zeroes
Let the zeros of $f$ be $a_{1}, \ldots, a_{k}$ with multiplicities $m_{1}, \ldots, m_{k}$. Then $f^{\prime}(z) / f(z)$ is holomorphic inside $\gamma$ except at the $a_{i}$. By [[Taylor's Theorem]] we know that in an open disc $D\left(a_{i}, r_{i}\right)$ around $a_{i}$ we can write
$$
f(z)=\sum_{k=m_{i}}^{\infty} c_{k}\left(z-a_{i}\right)^{k}=\left(z-a_{i}\right)^{m_{i}} \underbrace{\sum_{k=m_{i}}^{\infty} c_{k}\left(z-a_{i}\right)^{k-m_{i}}}_{g(z)}=\left(z-a_{i}\right)^{m_{i}} g(z)
$$
where $g(z)$ is [[Holomorphic]] and $g\left(a_{i}\right) \neq 0$. So in $D^{\prime}\left(a_{i}, r_{i}\right)$ we have
$$
\frac{f^{\prime}(z)}{f(z)}=\frac{m_{i}\left(z-a_{i}\right)^{m_{i}-1} g(z)+\left(z-a_{i}\right)^{m_{i}} g^{\prime}(z)}{\left(z-a_{i}\right)^{m_{i}} g(z)}=\frac{m_{i}}{\left(z-a_{i}\right)}+\frac{g^{\prime}(z)}{g(z)} .
$$
In particular we see that
$$
\frac{f^{\prime}(z)}{f(z)}-\frac{m_{i}}{\left(z-a_{i}\right)}=\frac{g^{\prime}(z)}{g(z)}
$$
is [[Holomorphic]] in $D(a, r)$. So we similarly see that
$$
F(z)=\frac{f^{\prime}(z)}{f(z)}-\sum_{i=1}^{k} \frac{m_{i}}{\left(z-a_{i}\right)}
$$
is [[Holomorphic]] inside and on $\gamma$, having been suitably adjusted at each zero $a_{i}$. By [[Cauchy's Theorem]]
$$
0=\int_{\gamma} F(z) \mathrm{d} z=\int_{\gamma} \frac{f^{\prime}(z)}{f(z)} \mathrm{d} z-\sum_{i=1}^{k}\left(\int_{\gamma} \frac{m_{i}}{\left(z-a_{i}\right)}\right) \mathrm{d} z=\int_{\gamma} \frac{f^{\prime}(z)}{f(z)} \mathrm{d} z-2 \pi i \sum_{i=1}^{k} m_{i}
$$
and the result follows.