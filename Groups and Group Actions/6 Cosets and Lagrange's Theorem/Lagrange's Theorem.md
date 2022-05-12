## Lagrange's Theorem
#Groups 
>Let $G$ be a [[finite group]] and let $H$ be a [[subgroup]] of $G .$ Then $|H|\mid|G|$. 
>*"The [[order]] of a subgroup divides the order of the group."*

### Proof 

#### Claim. The left [cosets](Coset) of $H$ [[partition]] $G$.
***Proof***
- Non-empty: we have $g \in g H$ so $g H \neq \emptyset$ for all $g \in G$.
- Cover: since $g \in g H$ for all $g \in G$, we have $\bigcup_{g \in G} g H=G$.
- Pairwise disjoint: take $g_{1}, g_{2} \in G$. 
Suppose $g \in g_{1} H \cap g_{2} H .$  Then there are $h_{1}, h_{2} \in H$ with $g=g_{1} h_{1}=g_{2} h_{2}$, so $g_{2}^{-1} g_{1}=h_{2} h_{1}^{-1} \in H$. By [[coset equality test]] we have $g_{1} H=g_{2} H$. So $g_{1} H=g_{2} H$ or $g_{1} H \cap g_{2} H=\emptyset$.
#### Claim.  Each left [[coset]] of H has the same *size* as H.
***Proof***
Take $g \in G$. Define
$$
\begin{aligned}
f: H & \rightarrow g H \\
h & \mapsto g h.
\end{aligned}
$$
This is a [[bijection]] (it has inverse $\left.\tilde{g} \mapsto g^{-1} \tilde{g}\right)$.
So $|H|=|g H|$.
Then
$$
|G|=|G / H| \times|H|, \text { so }|H|\mid| G|.
$$
---
>We can define a relation $\sim$ on $G$ via $g_{1} \sim g_{2}$ if and only if $g_{2}^{-1} g_{1} \in$ $H$. We can check that $\sim$ is an equivalence relation on $G$, and that the equivalence classes are precisely the left cosets of $H$ in $G$. This gives an alternative proof that the cosets partition $G$.

$\color{red}\rm\textbf{ There is not a converse to Lagrange’s Theorem.}$

>**Example** Since 13 is prime, the only subgroups of $\left(\mathbb{Z}_{13},+\right)$ are $\{\overline{0}\}$ and $\mathbb{Z}_{13}$.

### Lemma 35
>Let $G$ be a finite group. Take $g \in G$. Then $g$ has finite order.
#### Proof
Consider $g, g^{2}, g^{3}, \ldots$ These are all in the finite set $G$, and so there are positive integers $r$ and $s$ with $r<s$ and $g^{r}=g^{s}$. Then $e=g^{s-r}$, so the order of $g$ is finite (and is at most $s-r)$.

### Corollary 36
>Let $G$ be a finite group. Take $g \in G$. Then $o(g)\mid| G |$. 
>"the [[order]] of an element divides the [[order]] of the group."

#### Proof
Note that $\langle g\rangle=\left\{e, g, g^{2}, \ldots, g^{o(g)-1}\right\}$ is a subgroup of $G$ with order $o(g)$. Now apply [Lagrange](Lagrange's%20Theorem).

### Corollary 37
>Let p be prime. Let $G$ be a finite group with [[order]] p. Then $G$ is [[cyclic]].

#### Proof
Take $g \in G \backslash\{e\}$. Then $o(g)$ divides $p$ and is not 1, so $o(g)=p$. So $g$ is a generator of $G$.
>This proof shows that any non-identity element [generates](Generator) $G$.

### Corollary 38
Let $G$ be a finite group. Take $g \in G$. Then $g^{|G|}=e$.
> **Proof**. From [[#Corollary 36]] and [[#Corollary 37]].

### Fermat's Little Theorem
[[Fermat's Little Theorem]]
>Let $p$ be prime. Let a be an integer coprime to $p$. Then $a^{p-1} \equiv 1(\bmod p)$.

**Proof**. $\left(\mathbb{Z}_{p}^{\times}, \times\right)$ is a group of order $p-1$. Apply [[#Corollary 38]].
### Fermat-Euler Theorem
Let $n \geq 2$ be an integer. Let a be an integer coprime to n. Define the Euler totient function $\phi$ via
$$
\begin{array}{r}
\phi(n):=|\{k \in \mathbb{N}: 1 \leq k \leq n, \operatorname{hcf}(k, n)=1\}| . \\
\text { Then } a^{\phi(n)} \equiv 1(\bmod n)
\end{array}
$$
>**Proof**. [$\left(\mathbb{Z}_{n}^{\times}, x\right)$](Group%20Notations) is a group of [[order]] $\phi(n)$. Apply [[#Corollary 38]] .


>The ***Euler totient function*** $\phi$ has many interesting properties. One special case is that if $p$ is prime, then $\phi(p)=p-1$, so Fermat's Little Theorem is a special case of the Fermat-Euler theorem.


### Corollary 155
>Let $G$ be a group of **prime** order. Then $G$ has no subgroups and hence is cyclic.
#### Proof
Proof. Let $g \in G$ with $g \neq e$. Then o $(g) \neq 1$ and yet $\mathrm{o}(g)$ divides $p$, so o $(g)=p$. Hence $|\langle g\rangle|=p .$ That is $\langle g\rangle=G$ and $G$ is cyclic.

### Lemma 160
Let $G$ be a group. Then the relation $\sim$ on $G$ defined by
$$
x \sim y \Longleftrightarrow x=y \text { or } x=y^{-1}
$$
is an [[equivalence relation]]. The equivalence classes are generally of the form $\bar{x}=\left\{x, x^{-1}\right\}$ unless $x$ is self-inverse in which case $\bar{x}=\{x\}$.
>See [[Equivalence Relation#Lemma 160]]
### Wilson's Theorem
If $p$ is a prime then
$$
(p-1) !=-1 \quad \bmod p.
$$
#### Proof
- If $p=2$ then this just says $1=-1 \bmod 2$ which is true. 
- Assume $p \geqslant 3$. Consider the self-inverse elements in $\mathbb{Z}_{p}^{*}$. We see
`Why? Is it because |p| is odd, then ...?`
`There are only two kinds of inverses: self-inverse, and the usual unique inverse? And we pair them up?` #Solved
$$
\bar{x}=\bar{x}^{-1} \Longleftrightarrow \bar{x}^{2}=1 \Longleftrightarrow(\bar{x}-\overline{1})(\bar{x}+\overline{1})=\overline{0} \Longleftrightarrow \bar{x}=\overline{1} \text { or } \bar{x}=-\overline{1}
$$
as $\mathbb{Z}_{p}$ is a field. So the only singleton equivalence classes of $\sim$ (the equivalence relation defined in [[#Lemma 160]]) are $\{\overline{1}\}$ and $\{-\overline{1}\}$ with all others being of the form $\left\{\bar{x}, \bar{x}^{-1}\right\}$. As the equivalence classes partition $\mathbb{Z}_{p}^{*}$ then
$$\large (p-1) !=\prod_{\bar{k} \in \mathbb{Z}_{p}^{*}} \bar{k}=\prod_{\begin{array}{c}\text { equivalence } \\ \text { classes }\end{array}} \underset{\begin{array}{c}\text { equivalence } \\ \text { class }\end{array}}{\bar{k}=\overline{1} \times(-\overline{1})} \times \prod_{\begin{array}{c}\text { doubleton } \\ \text { equivalenne } \\ \text { classes }\end{array}} \bar{k}=-\overline{1}$$ as the contribution to the product from each doubleton equivalence class is $\bar{x} \times \bar{x}^{-1}=\overline{1}$.

### Corollary 162
>Let $G$ be a group with even order. Then $G$ has an element of **order** $2$.

#### Proof
Consider the equivalence relation on $G$ defined in [[#Lemma 160]]. If there are $m$ doubleton equivalence classes and $n$ singleton equivalence classes, then we have
$$
2 m+n=|G|
$$
as the equivalence classes partition $|G| .$(See [[#Claim The left cosets Coset of H partition G]]) As $|G|$ is even then $n$ is even but we also know $n \geqslant 1$ as $e$ is self-inverse. So, in fact, $n \geqslant 2$ and there is a non-identity element $x$ which satisfies $x=x^{-1}$ or equivalently $x^{2}=e$ so that o $(x)=2$

### Theorem 163
>Let $G$ be a finite group with $|G|=2 p$ where $p \geqslant 3$ is prime. Then $G$ is [[Isomorphism|Isomorphic]] to [$C_{2 p}$ ](Cyclic%20Group) or [$D_{2 p}$](Dihedral%20Group).

#### Proof
Assume that $G$ is not [[cyclic]]. The possible orders of elements in $G$ are 1 (the identity $e$) or 2 or $p$. As $|G|=2 p$ is even then there is an element $x \in G$ of order 2. ([[#Corollary 162]]). Further [if $g^{2}=e$ for all $g \in G$ then $G \cong\left(\mathbb{Z}_{2}\right)^{n}$ for some $n$](GG_Sheet4#^3802d7), which is not possible here and hence there is an element $y \in G$ of [[order]] $p$. As $x$ has order 2 and $y, y^{2}, \ldots, y^{p-1}$ have order $p$ then $x \notin\langle y\rangle .$ Hence $G=\langle y\rangle \cup x\langle y\rangle$ or more expansively
$$
G=\left\{e, y, y^{2}, \ldots, y^{p-1}, x, x y, x y^{2}, \ldots, x y^{p-1}\right\}.
$$
Now the product $y x$ is somewhere amongst $G .$ If $y x=y^{i}$ we arrive at a similar contradiction to before. So $y x=x y^{j}$ for some $1 \leqslant j<p$. Then
$$
(y x)^{2}=y x y x=(y x)\left(x y^{j}\right)=y^{j+1} ; \quad(y x)^{3}=\left(x y^{j}\right)(y x)^{2}=x y^{2 j+1} ;
$$
until more generally we find that $(y x)^{2 k}=y^{k(j+1)}$ and that $(y x)^{2 k+1}=x y^{k j+k+j}$. So $y x$ has an **even** order and $o(y x)=2$. In particular it follows that $j=p-1$. Hence
$$
G=\left\langle x, y: x^{2}=y^{p}=e, y x=x y^{p-1}\right\rangle
$$
which is a presentation for $D_{2 p} .$ We can think of $x$ as reflection in a given axis and $y$ as clockwise rotation through $2 \pi / p$.