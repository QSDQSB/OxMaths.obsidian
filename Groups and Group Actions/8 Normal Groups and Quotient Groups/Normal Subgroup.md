## Normal Subgroup
#Groups 
### Definition
Let $G$ be a group and $H$ a [[subgroup]] of $G .$ Then $H$ is said to be a [[Normal Subgroup]] of $G$ if
$$
g H=H g \quad \text { for all } g \in G
$$
or equivalently if
$$
g^{-1} h g \in H \quad \text { for all } g \in G, h \in H
$$
If $H$ is a [[Normal Subgroup]] of $G$ then we write ==$H \triangleleft G$==.

>This does `not` mean that $g h=h g$ for all $g \in G$ and $h \in H$ or that $G$ is abelian. Although we can easily see that all subgroups of abelian groups are normal.

>$H$ being a [[normal subgroup]] of $G$ is a property of how $H$ is contained in $G$ and not solely a property of $H$. For example, if we consider $H=\langle(1\,\,2)\rangle \leqslant S_{3}$ then $H$ is normal in $H$ but $H$ is not normal in $S_{3}$.

>In any group $G$, it is the case that $\{e\}$ and $G$ are normal subgroups of $G .$ If these are the only ones then $G$ is said to be [[simple]].

>Note that a subgroup $H \leqslant G$ is **normal** in $G$ if and only if $H$ is a **union** of conjugacy classes.

### Normal Subgroups are unions of [[Conjugacy Class]]es
If $N$ is a normal subgroup of group $G$ and $n \in N$ then $g n g^{-1} \in N$ for every $g \in G$ or equivalently $[n] \subseteq N$ where $[n]:=\left\{g n g^{-1} \mid g \in G\right\}$ is the conjugacy class of $n .$
This tells us that:
$$
N=\bigcup_{n \in N}[n]
$$
If conversely $N$ is a subgroup of group $G$ that satisfies $N=\bigcup_{n \in N}[n]$ then it is immediate that $g n g^{-1} \in N$ for every $n \in N$ and $g \in G$, so the conclusion that $N$ is a normal subgroup is justified.

### Proposition 192
![[Kernel and Image (Groups)#Proposition 192]]

---

### Proposition 207
> Let $H \leqslant G .$ If $|G / H|=2$ then $H \triangleleft G$.

#### Proof
Note that $e H=H=He$. So one left [[coset]] of $H$ is $H$ and one right coset of $H$ is $H$. As there are only two (left or right) cosets, and as (left or right) cosets partition $G$ then the other left coset is $H^{c}$ (the *complement* of $H$ in $G$) and the other right coset is also $H^{c}$. Recall that ==$g H=H$ if and only if $g \in H$== and likewise $H g=H$ if and only if $g \in H$. Hence
$$
\begin{array}{l}
\text { if } g \in H \text { then } g H=H=H g ; \\
\text { if } g \notin H \text { then } g H=H^{c}=H g .
\end{array}
$$
`typo✅ gH=H=Gg` 

### Definition: Centre
![[Centre]]

---
### Examples
#### Example 208
For $n \geqslant 2$, this shows [$A_{n}$](Alternating%20Group) is **normal** in $S_{n}$. Also [$S O(n)$](Special%20Orthogonal%20Group) is normal in $O(n)$.
#### Example 209
$A_{4}$ has no subgroup of order $6$. In particular, Lagrange's Theorem has no converse.
##### Solution
The conjugacy classes of $A_4$ have sizes $1,3,4,4$. If $A_4$ had a subgroup of order $6={1\over2}|A_4|$ then it would be normal and hence a union of conjugacy classes. However no selection of 1,3,3,4 adds up to 6.

#### Example 210
(a) The normal subgroups of $S_{3}$ are $\{e\}, A_{3}$ and $S_{3} .$
(b) The normal subgroups of $S_{4}$ are $\{e\}, V_{4}, A_{4}$ and $S_{4}$.
##### Solution
(a) Recall that a normal subgroup is a union of conjugacy classes. The identity and the 2-cycles do not form a subgroup. The identity and the 3 -cycles form $A_{3}$.
(b) The conjugacy classes $e,(a b),(a b c),(a b c d),(a b)(c d)$ have respective sizes $1,6,8,6,3$. As the order of any subgroup is a factor of 24 , this can only be achieved with these numbers as $$1, \quad 1+3, \quad 1+8+3, \quad 1+6+8+6+3,$$ which correspond to the subgroups $\{e\}, V_{4}, A_{4}$ and $S_{4}$.


>The [[equivalence class]] of e will need to be a [[normal subgroup]].

### Proposition 219
>Let $G$ be a group and $H$ a subset of $G$. Then $H$ is a [[normal subgroup]] of $G$ if and only if it is the **kernel** of some [[homomorphism]] from $G$.

#### Proof
- Suppose that $H$ is the kernel of some [[Homomorphism]] $\phi: G \rightarrow K$. Then $H=\operatorname{ker} \phi$ is a [[normal subgroup]] by [[Kernel and Image (Groups)#Proposition 192]].
- Conversely if $H$ is normal in $G$ then
$$
\pi: G \rightarrow G / H \quad \text { given by } \pi(g)=g H
$$
is a homomorphism with kernel $H$. This follows as
$$
\pi\left(g_{1} g_{2}\right)=\left(g_{1} g_{2}\right) H=\left(g_{1} H\right)\left(g_{2} H\right)=\pi\left(g_{1}\right) \pi\left(g_{2}\right)
$$
and
$$
\pi(g)=H \Longleftrightarrow g H=H \Longleftrightarrow g \in H
$$