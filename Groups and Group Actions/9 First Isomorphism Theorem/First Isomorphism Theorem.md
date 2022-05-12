## First Isomorphism Theorem
#Groups 

## Theorem
`(First Isomorphism Theorem, Jordan 1870)`

```ad-important
Let $\phi: G \rightarrow H$ be a [[homomorphism]] between two groups. Then
- (a) $\operatorname{ker}\phi \triangleleft G$ :
- (b) $\operatorname{Im} \phi \leqslant H$;
- (c) the map $g$ ker $\phi \mapsto \phi(g)$ gives an ==[[isomorphism]]==
$$
\frac{G}{\operatorname{ker} \phi} \cong \operatorname{Im} \phi
$$
```

#### Proof
- (a) from ![[Kernel and Image (Groups)#Proposition 192]]
- (b) from ![[Kernel and Image (Groups)#Proposition 193]]

- (c) Consider the map $\bar{\phi}: \frac{G}{\operatorname{ker} \phi} \rightarrow \operatorname{Im} \phi$ given by $g: \operatorname{ker}\phi \mapsto \phi(g)$.
Let $g_{1}, g_{2} \in G$. From [[Homomorphism#Proposition 199]]
$$
\phi\left(g_{1}\right)=\phi\left(g_{2}\right) \Longleftrightarrow g_{1} \text { ker } \phi=g_{2} \operatorname{ker} \phi.
$$
This both shows that $\bar{\phi}$ is well-defined and that $\bar{\phi}$ is $1-1 .$ It is also clear that $\bar{\phi}$ is onto. Finally $\bar{\phi}$ is a [[homomorphism]] as
$$
\bar{\phi}\left(\left(g_{1} \operatorname{ker} \phi\right) *\left(g_{2} \operatorname{ker} \phi\right)\right)=\bar{\phi}\left(\left(g_{1} g_{2}\right) \operatorname{ker} \phi\right)=\phi\left(g_{1} g_{2}\right)=\phi\left(g_{1}\right) \phi\left(g_{2}\right)=\bar{\phi}\left(g_{1} \operatorname{ker} \phi\right) * \bar{\phi}\left(g_{2} \operatorname{ker} \phi\right).
$$

#### Corollary 235
`"Rank-Nullity Theorem" for a group`
Let $\phi: G \rightarrow H$ be a [[homomorphism]] between two groups and assume $G$ is finite. Then
$$
|G|=|\operatorname{ker} \phi| \times|\operatorname{Im} \phi|.
$$

**Proof**. By [[Lagrange's Theorem]] the order of $G/\operatorname{ker} G$  is $|G|/|\operatorname{ker} G|$.

```ad-algorithm
1) Determine the **normal subgroups** $N$ of $G$. (These are the potential kernels.)
2) Determine the number of subgroups in $H$ which are **isomorphic** to $G / N ;$ let's call this number $n(N) .$ (These are the possible images when the kernel is $N .)$
3) For those normal subgroups where $n(N)>0$, determine the **order** of $\operatorname{Aut}(G / N) .$
4) Then the number of homomorphisms from $G$ to $H$ is
$$
\sum_{n(N)>0} n(N) \times|\operatorname{Aut}(G / N)|
$$
To explain this formula, the Isomorphism Theorem tells us that any [[homomorphism]] will map $G$ onto an image which is [[Isomorphism|Isomorphic]] to $G / N$ for some normal subgroup $N$. Conversely, given a subgroup $I \leqslant H$ which is isomorphic to $G / N$ for some normal $N$, there are $|\operatorname{Aut}(G / N)|$ isomorphisms $\iota$ from $G / N$ to $I$ and for each such isomorphism the map
$$
G \stackrel{\pi}{\rightarrow} G / N \stackrel{\iota}{\rightarrow} I
$$

>(where $\pi: G \rightarrow G / N$ is the map $g \mapsto g N)$ will be a homomorphism from $G$ to $H$ with image $I$. This is a very general approach to the problem at hand. In the case of $G$ being cyclic or small, it may well be much easier to focus on some generators of $G$ and consider their possible images, recalling that o $(\phi(g))$ divides o $(g)$ as we did in Example 233. Approaching it that way though, you will of course need to make sure that potential $\phi(g)$ do indeed lead to actual homomorphisms.
```

---
#### Examples
##### Example 236
For $\operatorname{sgn}: S_{n} \rightarrow\{\pm 1\}$, the Isomorphism Theorem reads $S_{n} / A_{n} \cong\{\pm 1\}$.
##### Example 237
For det: $G L(n, \mathbb{R}) \rightarrow \mathbb{R}^{*}$, the Isomorphism Theorem reads
$$
G L(n, \mathbb{R}) / S L(n, \mathbb{R}) \cong \mathbb{R}^{*}
$$
##### Example 238
For projection onto the first coordinate $\pi_{1}: G_{1} \times G_{2} \rightarrow G_{1}$, the Isomorphism Theorem reads $\left(G_{1} \times G_{2}\right) /\left(\{e\} \times G_{2}\right) \cong G_{1}$.
##### Example 239
For $\phi: \mathbb{Z} \rightarrow \mathbb{Z}$ given by $\phi(x)=n x$, then the Isomorphism Theorem reads $\mathbb{Z}=\mathbb{Z} /\{0\} \cong n \mathbb{Z}$
##### Example 240
For $\phi: \mathbb{Z} \rightarrow \mathbb{Z}_{n}$ given by $\phi(x)=\bar{x}$, then the Isomorphism Theorem reads $\mathbb{Z} / n \mathbb{Z} \cong \mathbb{Z}_{n}$
##### Example 241
For $\phi: \mathbb{Z}_{8} \rightarrow \mathbb{Z}_{12}$ given by $\phi(\bar{x})=3 \bar{x}$ then the Isomorphism Theorem reads $\mathbb{Z}_{8} /\langle\overline{4}\rangle \cong\langle\overline{3}\rangle .$
##### Example 242
And for the following [[abelian]] groups, applying the Isomorphism Theorem to the homomorphism $\phi(x)=x^{2}$ gives
$$
S^{1} /\{\pm 1\} \cong S^{1}, \quad \mathbb{Z}_{5} /\{\overline{0}\} \cong \mathbb{Z}_{5}, \quad \mathbb{Z}_{6} /\langle\overline{3}\rangle \cong\langle\overline{2}\rangle .
$$

```ad-example
> How many homomorphisms are there from $S_{3}$ to $C_{4} \times C_{2}$ ?

**Solution**. Take $g$ and $h$ to be generators, respectively, of $C_{4}$ and $C_{2}$. Recall that the normal subgroups of $S_{3}$ are $\{e\}, A_{3}, S_{3}$ (see [[Normal Subgroup#Example 210]]) and we have that
$$
S_{3} /\{e\} \cong S_{3}, \quad S_{3} / A_{3} \cong C_{2}, \quad S_{3} / S_{3} \cong\{e\} .
$$
There are no homomorphisms with kernel $\{e\}$ as $C_{4} \times C_{2}$ has no subgroup isomorphic to $S_{3}$ (which is not abelian).

There are 3 elements in $C_{4} \times C_{2}$ with order 2, namely $(e, h),\left(g^{2}, h\right),\left(g^{2}, e\right)$ and to each of these corresponds a homomorphism with kernel $A_{3}$.

The final homomorphism is the map $\phi(\sigma)=(e, e)$ for all $\sigma \in S_{3}$. In all, then, there are **four** such homomorphisms.
$$
\phi_{1}(\sigma)=\left\{\begin{array}{ll}
(e, e) & \sigma \in A_{3} \\
(\overline{0}, h) & \sigma \notin A_{3}
\end{array}, \quad \phi_{2}(\sigma)=\left\{\begin{array}{ll}
(e, e) & \sigma \in A_{3} \\
\left(g^{2}, h\right) & \sigma \notin A_{3}
\end{array}, \quad \phi_{3}(\sigma)=\left\{\begin{array}{ll}
(e, e) & \sigma \in A_{3} \\
\left(g^{2}, 3\right) & \sigma \notin A_{3}
\end{array}\right.\right.\right.
$$
and $\phi_{4}(\sigma)=(e, e)$ for all $\sigma$.
```

#### $\large \bf A_4$
```ad-example
>How many homomorphisms are there from $A_{4}$ to $S_{3}$ ?

**Solution**. We have seen that the conjugacy classes of $A_{4}$ are $\{e\}$ and
$\{(12)(34),(13)(24),(14)(23)\}, \quad\{(123),(134),(214),(324)\}, \quad\{(132),(143),(124),(234)\}.$
So the normal subgroups of $A_{4}$ are $\{e\}, V_{4}, A_{4}$ and we have that
$$
A_{4} /\{e\} \cong A_{4}, \quad A_{4} / V_{4} \cong C_{3}, \quad A_{4} / A_{4}=\{e\}.
$$
There is no subgroup of $S_{3}$ which is isomorphic to $A_{4}$ and one, namely $A_{3}$, which is isomorph to $C_{3}$

There is obviously one homomorphism with kernel $A_{4}$. And having ker $\phi=V_{4}$ means the $\operatorname{Im} \phi$ is isomorphic to $C_{3}$ and so must be $A_{3} \subseteq S_{3}$. However there are two isomorphisms from $C_{3}$ to $C_{3}$ and so two different ways of wrapping $A_{4} / V_{4}$ onto $A_{3}$ and hence two differer homomorphisms $A_{4} \rightarrow S_{3}$ with image $A_{3}$. Thus in all we have three homomorphisms $A_{4} \rightarrow S$ given by
$$
\phi_{1}(\sigma)=\left\{\begin{array}{cc}
e & \sigma \in V_{4} \\
(123) & \sigma \in(123) V_{4} \\
(132) & \sigma \in(132) V_{4}
\end{array}, \quad \phi_{2}(\sigma)=\left\{\begin{array}{cc}
e & \sigma \in V_{4} \\
(132) & \sigma \in(123) V_{4} \\
(123) & \sigma \in(132) V_{4}
\end{array}, \quad \phi_{3}(\sigma)=e\right.\right.
$$
```
```ad-example
>Show that $\operatorname{Aut}\left(V_{4}\right)$ is isomorphic to $S_{3}$.

**Solution**. If we write $a=(12)(34), b=(13)(24), c=(14)(23)$ then any automorphism of $V_{4}$ must send $e$ to $e$ and $\{a, b, c\}$ to $\{a, b, c\}$. Hence there are at most 6 automorphisms. However if we note $V_{4}$ may be presented as
$$
\left\langle a, b: a^{2}=e=b^{2}, a b=b a\right\rangle=\left\langle b, c: c^{2}=e=b^{2}, b c=c b\right\rangle=\left\langle a, c: a^{2}=e=c^{2}, a c=c a\right\rangle
$$
then we see that there is a symmetry in the roles of $a, b, c$ and so any element of $\operatorname{Sym}\{a, b, c\}$ is indeed an automorphism of $V_{4}$.
```

#### $\large\bf D_8$
```ad-example
>How many homomorphisms are there from $D_{8}$ to $A_{4}$ ?

**Solution**. Recall that the conjugacy classes of $D_{8}$ are
$$
\{e\}, \quad\left\{r, r^{3}\right\}, \quad\left\{r^{2}\right\}, \quad\left\{s, r^{2} s\right\}, \quad\left\{r s, r^{3} s\right\} .
$$
Hence the normal subgroups of $D_{8}$ are
$$
\begin{array}{l}
N_{1}=\{e\}, \quad N_{2}=\left\{e, r^{2}\right\}, \quad N_{3}=\left\{e, r, r^{2}, r^{3}\right\}, \\
N_{4}=\left\{e, s, r^{2}, r^{2} s\right\}, \quad N_{5}=\left\{e, s, r^{2}, r^{2} s\right\}, \quad N_{6}=D_{8}
\end{array}
$$
and we have that (see Example 226 )
$D_{8} / N_{1} \cong D_{8}, \quad D_{8} / N_{2} \cong V_{4}, \quad D_{8} / N_{3} \cong D_{8} / N_{4} \cong D_{8} / N_{5} \cong C_{2}, \quad D_{8} / N_{6} \cong\{e\}$
By Lagrange's Theorem, there is no subgroup of $A_{4}$ which is isomorphic to $D_{8}$. There is one subgroup (namely $V_{4}$ ) which is isomorphic to $V_{4}$ and three subgroups of $A_{4}$ which are isomorphic to $C_{2}($ namely $\langle a\rangle,\langle b\rangle$ and $\langle c\rangle)$. From the previous example we know there are 6 homomorphisms with kernel $N_{2}$ and image $V_{4}$; such an example is
$$
\phi(e)=\phi\left(r^{2}\right)=e, \quad \phi(r)=\phi\left(r^{3}\right)=a,, \quad \phi(s)=\phi\left(r^{2} s\right)=b, \quad \phi(r s)=\phi\left(r^{3} s\right)=c .
$$
There are $3 \times 3=9$ homomorphisms with kernel $N_{3}$ or $N_{4}$ or $N_{5}$ and image $\langle a\rangle$ or $\langle b\rangle$ or $\langle c\rangle$; such an example is
$$
\phi(e)=\phi(s)=\phi\left(r^{2} s\right)=\phi\left(r^{2}\right)=e, \quad \phi(r)=\phi\left(r^{3}\right)=\phi(r s)=\phi\left(r^{3} s\right)=b .
$$
Finally there is the homomorphism with image $\{e\}$. In all then there are $6+9+1=16$ homomorphisms from $D_{8}$ to $A_{4}$.
```


---
### First Isomorphism Theorem for Rings
The kernel $\operatorname{Ker}(\phi):=\phi^{-1}(0)$ of a [[Ring Homomorphism]] $\phi: R \rightarrow S$ is an [[Ideal]], its image $\operatorname{Im}(\phi)$ is a **subring** of $S$, and $\phi$ induces an [[isomorphism]] of rings
$$
R / \operatorname{Ker}(\phi) \cong \operatorname{Im}(\phi).
$$