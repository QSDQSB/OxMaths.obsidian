#ComplexAnalysis 

## Definition
$a$ is said to be a [[Removable Singularity]] of $f$ if $c_{n}=0$ for all $n<0$, where ![[Laurent's Theorem#^Laurent-Series]]
## Proposition 246
Let $f, g: U \rightarrow \mathbb{C}$ be holomorphic and $a \in U$. Suppose that $f$ has a zero of order $m$ at $a$ and $g$ has a zero of order $n$ at $a$. Then
$$
f / g \text { has }\left\{\begin{array}{cl}
\text { a pole of order } n-m \text { at } a & \text { if } m<n, \\
\text { a removable singularity at } a & \text { if } m \geqslant n .
\end{array}\right.
$$
### Proof
Given the hypotheses, $f(z)=(z-a)^{m} F(z)$ and $g(z)=(z-a)^{n} G(z)$ where $F$ and $G$ are [[Holomorphic]] on $U$ and $F(a) \neq 0 \neq G(a)$. Hence
$$
\frac{f(z)}{g(z)}=(z-a)^{m-n} \frac{F(z)}{G(z)} \quad(z \neq a)
$$
where $F / G$ is [[Holomorphic]] about $a$ and non-zero. The result follows. Note that if $m \geqslant n$ then there is still a [[Singularity]] at $a$ as the function is undefined, but that if this [[Singularity]] were removed then $f / g$ would have a zero of order $m-n$ at $a$.