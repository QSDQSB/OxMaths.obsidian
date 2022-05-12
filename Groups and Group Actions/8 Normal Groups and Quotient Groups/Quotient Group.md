## Quotient Group
#Groups 
### Proposition 215
Let $H \leqslant G$.
- The binary operation $*$ on [$G / H$](Coset) given by
$$
\left(g_{1} H\right) *\left(g_{2} H\right)=\left(g_{1} g_{2}\right) H
$$
is well-defined if and only if $H \triangleleft G$.
- If $H \triangleleft G$ then $(G / H, *)$ is a group.

#### Proof
##### (a)
- Suppose that $H \triangleleft G$. Say $g_{1} H=k_{1} H$ and $g_{2} H=k_{2} H$, by [[Coset Equality Test]] so that $k_{1}^{-1} g_{1} \in H$ and $k_{2}^{-1} g_{2} \in H .$ We wish to show $\left(g_{1} g_{2}\right) H=\left(k_{1} k_{2}\right) H .$ Note
$$
\begin{aligned}
\left(g_{1} g_{2}\right) H=\left(k_{1} k_{2}\right) H & \Longleftrightarrow\left(k_{1} k_{2}\right)^{-1}\left(g_{1} g_{2}\right) \in H \\
& \Longleftrightarrow k_{2}^{-1} k_{1}^{-1} g_{1} g_{2} \in H \\
& \Longleftrightarrow k_{2}^{-1}\left(k_{1}^{-1} g_{1}\right) k_{2}\left(k_{2}^{-1} g_{2}\right) \in H
\end{aligned}
$$
We have already noted that $k_{2}^{-1} g_{2} \in H$ and $k_{1}^{-1} g_{1} \in H ;$ as $H$ is normal then $k_{2}^{-1}\left(k_{1}^{-1} g_{1}\right) k_{2} \in H$ also.
- Conversely, suppose that $*$ is well-defined. Let $h \in H$ and $g \in G$. Then
$$
\begin{aligned}
\left(g^{-1} h g\right) H &=\left(g^{-1} H\right) *(h H) *(g H) \\
&=\left(g^{-1} H\right) *(e H) *(g H) \\
&=\left(g^{-1} e g\right) H \\
&=e H=H
\end{aligned}
$$
and in particular $g^{-1} h g \in H .$ That is, $H$ is a normal subgroup of $G$.
##### (b)
Suppose now that $H \triangleleft G$. Then part (i) has shown that $*$ is a well-defined binary operation on $G / H .$ Further $*$ is clearly associative as $G$ 's group operation is ==associative==. Finally, we note that for any $g \in G$,
$$
(e H) *(g H)=g H=(g H) *(e H)
$$
and hence $e H=H$ is the ==identity== element of $G / H$ and for any $g \in G$
$$
\left(g^{-1} H\right) *(g H)=e H=\left(g^{-1} H\right) *(g H)
$$
so that
$$
(g H)^{-1}=g^{-1} H \text { in } G / H .
$$

### Definition
If $H \triangleleft G$ then $(G / H, *)$ is called the [[quotient group]].

### Examples
#### Example 220
Let $G=\mathbb{Z}$ and $H=n \mathbb{Z}$ then
$$
\mathbb{Z} / n \mathbb{Z}=\{0+n \mathbb{Z}, 1+n \mathbb{Z}, \ldots,(n-1)+n \mathbb{Z}\}
$$
and can naturally be identified with $\mathbb{Z}_{n}=\{\overline{0}, \overline{1}, \ldots, \overline{n-1}\}$, the integers $\bmod n$.
#### Example 221
Let $G=S_{n}$ and $H=A_{n}$. Then
$$
S_{n} / A_{n}=\left\{A_{n}, S_{n} \backslash A_{n}\right\}=\{\text { evens, odds}\} \cong C_{2}
$$
#### Example 222
Let $G=D_{2 n}$ and $H=\langle r\rangle .$ Then $D_{2 n} /\langle r\rangle \cong C_{2}$. We have "modded out" by so much that all that remains is a memory of whether the group element kept the polygon the same side up or flipped the polygon over.
#### Example 223
Let $G=\mathbb{C}^{*}$ and $H=S^{1}$. Then
$$
\mathbb{C}^{*} / S^{1} \cong(0, \infty)
$$
and this time we essentially "modded out" any details about argument with all elements on the circle $|z|=r$ being made equivalent to $r$.

#### Example 224
As a further example
$$
S_{4} / V_{4} \cong S_{3}
$$
[[GG_Sheet6]]

#### Example 225
Let $G=A G L(n, \mathbb{R})$ denote the group of **affine maps**
$$
f(\mathbf{x})=A \mathbf{x}+\mathbf{b}, \quad A \in G L(n, \mathbb{R}) \text { and } \mathbf{b} \in \mathbb{R}^{n}
$$
and $T$ denote the subgroup of translations $t(\mathbf{x})=\mathbf{x}+\mathbf{c}$. Then $T \triangleleft G$ and $G / T \cong G L(n, \mathbb{R}) .$
**Solution**. This follows as
$$
f^{-1} t f(\mathbf{x})=f^{-1} t(A \mathbf{x}+\mathbf{b})=f^{-1}(A \mathbf{x}+\mathbf{b}+\mathbf{c})=A^{-1}((A \mathbf{x}+\mathbf{b}+\mathbf{c})-\mathbf{b})=\mathbf{x}+A^{-1} \mathbf{c}
$$
and we can naturally identify $f T$ with $A$ to show the isomorphism $G / T \cong G L(n, \mathbb{R})$.

#### Example 226
Let $n=2 k$ be even and let $G=D_{2 n}$ and $H=Z\left(D_{2 n}\right)=\left\{e, r^{k}\right\}$ noting that $r^{k}$ is a half turn. Then
$$
D_{2 n} /\left\langle r^{k}\right\rangle=\left\{\bar{e}, \bar{r}, \bar{r}^{2}, \ldots \bar{r}^{k-1}, \bar{s}, \bar{r} \bar{s}, \ldots, \bar{r}^{k-1} \bar{s}\right\}
$$
where
$$
\bar{r}^{k}=\bar{s}^{2}=\bar{e} \quad \text { and } \quad \bar{s} \bar{r}=\bar{r}^{-1} \bar{s}
$$
which is a presentation of $D_{n}$ when $k \geqslant 3$ and is a presentation of $V_{4}$ when $k=2 .$ So