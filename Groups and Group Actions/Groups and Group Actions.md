# Group and Group Actions
#Subject
## Group Notations
[[Group Notations]]
## Introduction to Groups
### Definition: Binary Operation
Let $S$ be a set. A [[binary operation]] $*$ in $S$ is a function
$$
\begin{aligned}
*: S \times S & \rightarrow S \\
(a, b) & \mapsto a * b .
\end{aligned}
$$
### Definition: Associative
We say that a binary operation $*$ on a set $S$ is associative if $a *(b * c)=(a * b) * c$  for all $a, b, c \in S.$
### Definition: Identity
Let $*$ be a binary operation on a set $S$. We say that $e \in S$ is an identity element (or identity) if $e * a=a=a * e$ for all $a \in S$.
#### Proposition 1: Uniqueness of Identity
Let $*$ be a binary operation on a non-empty set $S$. If there is an identity $e \in S$, then it is **unique**.
##### Proof
Let $e_{1}, e_{2}$ be identity elements. Then
$$
e_{1} * e_{2}=e_{2} \text { as } e_{1} \text { an identity }
$$
and $e_{1} * e_{2}=e_{1}$ as $e_{2}$ an identity
so $e_{1}=e_{2}$.
### Definition: Inverse
Let $*$ be a binary operation on a set $S$, with identity $e$. Take $a \in S$. We say that $b \in S$ is an Inverse for $a$ if $a * b=e=b * a .$
#### Proposition 2: Uniqueness of Inverse
Let $*$ be an associative binary operation on a set $S$, with $e$. Take $a \in S$. If a has an inverse, then the inverse is unique. 
##### Proof
Let $b, b^{\prime}$ be inverses of $a$. Then
$$
\begin{aligned}
b^{\prime} *(a * b) &=b^{\prime} * e=b^{\prime} \\
\text { and }\left(b^{\prime} * a\right) * b &=e * b=b,
\end{aligned}
$$
but $*$ is associative so these are equal, so $b=b^{\prime}$.
### Definition: Closed
Let $*$ be a binary operation on a set $S$. Let $T$ be a subset of $S$. We say that $T$ is closed under $*$ if $*: T \times T \rightarrow T$ is a binary operation on $T$.

### Definition: Group
A [[Group]] is a set $G$ together with a binary operation $*$ on $G$ such that
1) $*$ is associative;
2) there is an identity;
3) each element of $G$ has an inverse.
#### Proposition 3
Let $G$ be a [[Group]]. Let $g, g_{1}, g_{2}, g_{3} \in G$, let $m, n \in \mathbb{Z}$.Then

1) $\left(g_{1}g_{2}\right)^{-1}=g_{2}^{-1}g_{1}^{-1}$
2) $\left(g^{n}\right)^{-1}=\left(g^{-1}\right)^{n};$
3) $g^{m} g^{n}=g^{m+n}$;
4) $\left(g^{m}\right)^{n}=g^{m n} ;$
5) if $g_{1} g_{2}=g_{1} g_{3}$, then $g_{2}=g_{3}$ ('cancellation on the left');
6) if $g_{1} g_{2}=g_{3} g_{2}$, then $g_{1}=g_{3}$ ('cancellation on the right').

### Definition: Abelian
We say that a [[Group]] $(G, *)$ is [[Abelian]] if $g * g^{\prime}=g^{\prime} * g$ for all $g$, $g^{\prime} \in G$ - that is, if the binary operation $*$ is commutative.

### Definition: Cyclic
We say that a group $G$ is [[Cyclic]] if there is some $g \in G$ such that $G=\left\{g^{n}: n \in \mathbb{Z}\right\}$.
#### Remark
A cyclic group must be **Abelian**, as $g^{n} g^{m}=g^{n+m}=g^{m+n}=g^{m} g^{n}$.

### Definition: Dihedral Group 
Let $P_{n}$ be a regular $n$-gon in the plane (here $n \geq 3$ ). For $n \geq 3$, define the $n^{\text {th }}$ Dihedral Group $D_{2 n}$ to be the set of isometries of the plane that send $P_{n}$ to $P_{n}$. These isometries are called ***symmetries of $P_{n}$***.
#### Proposition 4
Let $P_{n}$ be a regular $n$-gon in the plane. Write $r$ for rotation anticlockwise by $\frac{2 \pi}{n}$ about the centre of $P_{n}$, and s for reflection in an axis of $P_{n}$. Then the symmetries of $P_{n}$ are $e, r, r^{2}, \ldots, r^{n-1}, s, r s, r^{2} s, \ldots, r^{n-1} s$.

### Definition: Product Group
Given groups $\left(G, *_{G}\right)$ and $\left(H, *_{H}\right)$, we define their Product Group (or product) to be $(G \times H, *)$ with $*$ defined by
$$
\left(g_{1}, h_{1}\right) *\left(g_{2}, h_{2}\right)=\left(g_{1} *_{G} g_{2}, h_{1} *_{H} h_{2}\right).
$$
#### Proposition 5
The operation $*$ just defined makes $(G \times H, *)$ into a group.

### Definition: Subgroup
Let $(G,*)$ be a [[Group]]. We say that a subset $H\subseteq G$ is a subgroup if the restriction of $*$ to $H$ makes $H$ into a group. That is,
- $H$ is closed under $*$ (if $h_1,h_2\in H$ then $h_1h_2\in H$);
- $H$ has an Identity ($e_G\in H$);
- $H$ contains inverses (if $h\in H$ then $h^{-1}\in H$).
### Definition: Order of a Group
The [[Order]] of a group $(G, *)$ is the cardinality $|G|$ of the set $G$. 
If $|G|$ is finite, then we say that $G$ is a [[Finite Group]].
### Definition: Order of an Element
Let $G$ be a [[Group]], take $g\in G$. We define the [[order]] of $g$, $o(g)$, to be the **smallest positive integer** $k$ such that $g^k=e$. If no such integer $k$ exists, then we say $g$ has $\textrm{infinite order}.$
### Definition: Isomorphism
Let $\left(G, *_{G}\right)$ and $\left(H, *_{H}\right)$ be groups. An [[isomorphism]] between $G$ and $H$ is a bijective map $\theta: G \rightarrow H$ such that $\theta\left(g_{1} *_{G} g_{2}\right)=\theta\left(g_{1}\right) *_{H} \theta\left(g_{2}\right)$ for all $g_{1}, g_{2} \in G$.

## Permutations
### Definition: Permutation
>A [[Permutation]] of $S$ is a bijection $S\to S$. The set of permutations of $S$ is written $\operatorname{Sym}(s)$.
#### Theorem 7
1) $\operatorname{Sym}(S)$ is a group under composition, called the symmetry group of $S$.
2) If $|S| \geq 3$, then $\operatorname{Sym}(S)$ is non-[[Abelian]].
3) $\left|S_{n}\right|=n !$.

### Definition: Cycle
A [[Permutation]] $\sigma \in S_{n}$ is a [[cycle]] if there are distinct $a_{1}, \ldots$, $a_{k} \in\{1,2, \ldots, n\}$ such that
$$
\begin{aligned}
a_{i} \sigma &=a_{i+1} &\text { for } 1 \leq i \leq k-1 \\
a_{k} \sigma &=a_{1} \\
 x \sigma &=x & \text { for } x \notin\left\{a_{1}, \ldots, a_{k}\right\}
\end{aligned}
$$
Such a [[Cycle]] has length $k$. We call it a $k$-cycle. We write it as $\left(a_{1} a_{2} \ldots a_{k}\right)$.

### Definition: Disjoint
>The cycles $\left(a_{1} \ldots a_{k}\right)$ and $\left(b_{1} \ldots b_{l}\right)$ are [[Disjoint]] if $a_{i} \neq b_{j}$ for all $i, j$.

### Proposition 8
>Let $\alpha=\left(a_{1} \ldots a_{k}\right)$ and $\beta=\left(b_{1} \ldots b_{l}\right)$ be [[Disjoint]] cycles. Then $\alpha$ and $\beta$ **commute**.

### [Theorem 9](Disjoint.md#Theorem%209)
>Every permutation in $S_n$ can be written as a product of disjoint cycles. Moreover, this product is unique up to cycling elements without cycles and permuting the order of the cycles.

### Proposition 10
>Let $\pi \in S_{n}$ be written as $\pi=\sigma_{1} \sigma_{2} \cdots \sigma_{k}$ as a product of [[Disjoint]] cycles. For $1 \leq i \leq k$, let $l_{i}$ be the length of $\sigma_{i}$. Then the [[Order]] of $\pi$ is $\operatorname{lcm}\left(l_{1}, \ldots, l_{k}\right)$. 
### Definition
>We say that two [permutations](Permutation.md) $\sigma, \tau \in S_{n}$ are [[conjugate]] if there is some $\rho \in S_{n}$ with $\sigma=\rho^{-1} \tau \rho$.
### Lemma 11
Let $\left(a_{1} a_{2} \ldots a_{k}\right)$ be a [[Cycle]] in $S_{n}$, and take $\sigma \in S_{n} .$ Then
$$
\sigma^{-1}\left(\begin{array}{llll}
a_{1} & a_{2} & \ldots & a_{k}
\end{array}\right) \sigma=\left(\begin{array}{llll}
a_{1} \sigma & a_{2} \sigma & \ldots & a_{k} \sigma
\end{array}\right).
$$
### [Theorem 12](Conjugate.md#Theorem%2012)
Let $\sigma, \tau \in S_{n} .$ They are [[conjugate]] if and only if they have the same cycle type.

### Definition: Permutation Matrix
An $n \times n$ matrix is a Permutation Matrix if each row and each column contains exactly one entry that is 1 , with all other entries 0 .

### Lemma 13
>If $\sigma, \tau \in S_{n}$, then $P_{\sigma \tau}=P_{\sigma} P_{\tau}$.

### Lemma 14
>If $\sigma \in S_{n}$ is a transposition, then $\operatorname{det}\left(P_{\sigma}\right)=-1 .$

### Definition: Odd/Even Permutation
>A [[Permutation]] is **odd** (resp. **even**) if it can be written as a product of an **odd** (resp. **even**) number of transpositions.

### Theorem 15
1) Any [[permutation]] in $S_{n}$ can be written as a product of transpositions.
2) $A$ [[permutation]] cannot be both **even** and **odd**.

### Definition: Alternating Group
>For $n \geq 1$, define $A_{n}:=\left\{\sigma \in S_{n}: \sigma\right.$ is even $\}$, the $n^{\text {th }}$ alternating group.

### Proposition 16
1) $A_n$ is a [[subgroup]] of [$S_n$](Permutation.md).
2) For $n\geq3$, the [[order]] of $A_n$ is ${1\over2}n!.$
3) For $n\geq4$, $A_n$ is non-[[Abelian]].

## Subgroups
### Proposition 17(Subgroup Test)
>Let $G$ be a [[Group]]. The subset $H \subseteq G$ is a [[subgroup]] of $G$ if and only if $H$ is non-empty and $h_{1} h_{2}^{-1} \in H$ for all $h_{1}$, $h_{2} \in H$.

### Proposition 18
>Let $G$ be a group. Let $H, K$ be subgroups of $G$. Then $H \cap K$ is a [[subgroup]] of $G$.

### Proposition 19
Let $G$ be a group. Take $g \in G$.
1) We have $\langle g\rangle=\left\{g^{k}: k \in \mathbb{Z}\right\}$.
2) If $g$ has [finite order](Finite%20Group.md), then $\langle g\rangle=\left\{e, g, g^{2}, \ldots, g^{o(g)-1}\right\}$.

### [Theorem 20](Generator.md#Theorem%2020)
Let $G$ be a [[Cyclic]] group, say $G=\langle g\rangle$.
(i) If $G$ is **[finite](Finite%20Group.md)**, with $|G|=n$, then $G \cong C_{n}$.
(ii) If $G$ is **infinite**, then $G \cong \mathbb{Z}$.

### [Theorem 21](Generator.md#Theorem%2021)
>Let $G$ be a [[Cyclic]] group. Let $H$ be a [[subgroup]] of $G$. Then $H$ is [[cyclic]].

### Proposition 22
Let $m, n$ be integers. Let $h, l$ be positive integers such that $\langle m, n\rangle=\langle h\rangle$ and $\langle m\rangle \cap\langle n\rangle=\langle l\rangle .$ Then
1) $h \mid m$ and $h \mid n$ (that is, $h$ is a **common factor** of $m$ and $n$ );
2) there are $a, b \in \mathbb{Z}$ such that $h=a m+b n$ (**Bézout's lemma**);
3) if $d \mid m$ and $d \mid n$, then $d \mid h$ (that is, $h$ is divisible by every common factor of $m$ and $n)$;
4) $m \mid l$ and $n \mid l$ (that is, $l$ is a common multiple of $m$ and $n$ );
5) if $m \mid c$ and $n \mid c$, then $l \mid c$ (that is, any common multiple of $m$ and $n$ is a multiple of $l$ ).

### Lemma 23
Let $G$ be a group, let $g \in G$ be an element with finite order d. We have $g^{k}=e$ if and only if $d \mid k$.

### [[Groups and Group Actions/4 Subgroups/Chinese Remainder Theorem]]
>Let $m, n$ be coprime positive integers. Then $C_{m} \times C_{n}$ is [[cyclic]], and is [isomorphic](Isomorphism.md) to $C_{m n}$.

## Equivalence Relations
### Definition: Binary Relation
>A [[binary relation]] on a set $S$ is a subset of $S \times S$. For a relation $R \subseteq S \times S$, we write $a R b$ if and only if $(a, b) \in R$.
### Definition: Equivalence Relation
>Let $\sim$ be a relation on a set $S$. We say that $\sim$ is an [[equivalence relation]] if
>- $\sim$ is reflexive (that is, if $a \sim a$ for all $a \in S)$.
>- $\sim$ is symmetric (that is, if $a \sim b$ then $b \sim a)$.
>- $\sim$ is transitive (that is, if $a \sim b$ and $b \sim c$, then $a \sim c)$.

### Proposition 25
>Let $n \geq 2$ be an integer. Define a relation $\sim$ on $\mathbb{Z}$ by $a \sim b$ if and only if $a-b$ is a multiple of $n$. Then $\sim$ is an [[equivalence relation]].

### Proposition 26
>[[Conjugacy]] in $G$ is an [[equivalence relation]].

### Definition: Partition
Let $S$ be a set, let $I$ be an index set. For $i \in I$, let $S_{i}$ be a subset of $S$. We say that the $S_{i}$ (for $\left.i \in I\right)$ [[partition]] $S$ if
- $S_{i} \neq \emptyset$ for all $i \in I$ (non-empty);
- $\bigcup_{i \in I} S_{i}=S$ (cover);
- $S_{i} \cap S_{j}=\emptyset$ for $i \neq j$ (pairwise disjoint).
- 
### Theorem 27
>Let $\sim$ be an [[equivalence relation]] on a set $S$. The [equivalence classes](Equivalence%20Class) of $\sim$ [[partition]] $S$.

### Theorem 28
>Let $P$ be a [[partition]] of a set $S$. For $a \in S$, write $P_{a}$ for the **unique** part in $P$ with $a \in P_{a}$. Define a [relation](Equivalence%20Relation) $\sim$ on $S$ by $a \sim b$ if and only if $b \in P_{a} .$ Then $\sim$ is an [[equivalence relation]].

### Corollary 29
>There is a bijection between [equivalence relations](Equivalence%20Relation) on a set $S$ and [partitions](Partition) of that same set $S$.

### Definition: Binary Operations on $\bf Z_n$
Define binary operations $+$ and $\times$ on $\mathbb{Z}_{n}$ by
$$
\begin{aligned}
\bar{a}+\bar{b} &=\overline{a+b}, \\
\text { and } \bar{a} \times \bar{b} &=\overline{a \times b} .
\end{aligned}
$$
#### Lemma 30
The operations $+$ and $\times$ on $\mathbb{Z}_{n}$ are well-defined.

#### Proposition 31
>$\left(\mathbb{Z}_{n},+\right)$ is an [[Abelian]] group. Moreover, it is [[cyclic]] and ***isomorphic*** to $C_{n}$.
Furthermore, $\times$ is associative and commutative on $\mathbb{Z}_{n}$, and $\times$ is distributive over $+$.

### Proposition 32
>1) Take $\bar{x} \in \mathbb{Z}_{n}$. Then $\bar{x}$ has a multiplicative inverse in $\mathbb{Z}_{n}$ (i.e. there exists $\bar{y} \in \mathbb{Z}_{n}$ with $\bar{x} \bar{y}=\overline{1}$) if and only if $\operatorname{hcf}(x, n)=1$.
2) If $p$ is prime, then $\mathbb{Z}_{p}$ is a field.
3) Let $\mathbb{Z}_{n}^{\times}=\left\{\bar{x} \in \mathbb{Z}_{n}: \bar{x}\right.\text{ has a multiplicative inverse}\}$ be the set of units in $\mathbb{Z}_{n}$. Then $\mathbb{Z}_{n}^{\times}$ is a group under multiplication.

## Cosets and Lagrange's Theorem
### Definition: Coset
Let $G$ be a group, let $H$ be a subgroup of $G$. A ***left [[coset]]*** of $H$ in $G$ is a set $g H:=\{g h: h \in H\}$ where $g \in G$. The set of left cosets of $H$ in $G$ is denoted $G / H$. The cardinality of this set is called the **index** of $H$ in
G. A ***right [[coset]]*** of $H$ in $G$ is a set $H g:=\{h g: h \in H\}$ where $g \in G$.

### Coset Equality Test
> Let $H$ be a subgroup of a group $G$. Take $g_{1}, g_{2} \in G .$ We have $g_{1} H=g_{2} H$ if and only if $g_{2}^{-1} g_{1} \in H .$

### [[Lagrange's Theorem]]
>Let $G$ be a finite group and let $H$ be a subgroup of $G .$ Then $|H|\mid|G|$. 

### Lemma 35
>Let $G$ be a finite group. Take $g \in G$. Then $g$ has finite order.

### Corollary 36
>Let $G$ be a finite group. Take $g \in G$. Then $o(g)\mid| G |$. 

### Corollary 37
>Let p be prime. Let $G$ be a finite group with [[order]] p. Then $G$ is [[cyclic]].

### Corollary 38
Let $G$ be a finite group. Take $g \in G$. Then $g^{|G|}=e$.

### Theorem 39 (Fermat's Little Theorem). 
>Let $p$ be prime. Let a be an integer coprime to $p$. Then $a^{p-1} \equiv 1(\bmod p)$.

### Theorem 40 (Fermat-Euler Theorem)
Let $n \geq 2$ be an integer. Let a be an integer coprime to n. Define the Euler totient function $\phi$ via
$$
\begin{array}{r}
\phi(n):=|\{k \in \mathbb{N}: 1 \leq k \leq n, \operatorname{hcf}(k, n)=1\}| . \\
\text { Then } a^{\phi(n)} \equiv 1(\bmod n)
\end{array}
$$

## Homomorphisms and Isomorphisms
### Definition: Homomorphism
Let $G$ and $H$ be groups. A [[homomorphism]] $\phi: G \rightarrow H$ is a map such that
$$
\phi\left(g_{1} *_{G} g_{2}\right)=\phi\left(g_{1}\right) *_{H} \phi\left(g_{2}\right) \quad \text { for all } g_{1}, g_{2} \in G.
$$
#### Proposition 186
>See [[Isomorphism#Proposition 186]]

Let $a \in G$, a group. [Conjugation](Conjugacy) by $a$, i.e. the map $\theta_{a}: G \rightarrow G$ given by $\theta_{a}(g)=a^{-1} g a$ is an [[isomorphism]].
#### Proposition 199
A [[homomorphism]] is constant on a [[coset]] of $\ker\phi$ and takes different values on different cosets.
##### Corollary 200
Let $\phi: G \rightarrow H$ be a [[homomorphism]] between two groups. Then $\phi$ is $1-1$ if and only if $\ker\phi=\left\{e_{G}\right\}$.
### Definition: Normal
Let $G$ be a group and $H$ a subgroup of $G$. Then $H$ is said to be a [[Normal Subgroup]] of $G$ if
$$
g H=H g \quad \text { for all } g \in G
$$
or equivalently if
$$
g^{-1} h g \in H \quad \text { for all } g \in G, h \in H
$$
If $H$ is a [[Normal Subgroup]] of $G$ then we write ==$H \triangleleft G$==.
### Definition: [[Kernel and Image (Groups)]]
#### Proposition 192
`Kernel is a normal subgroup.`
>Let $\phi: G \rightarrow H$ be a [[homomorphism]] between two groups. Then $\mathrm{ker} \phi \triangleleft G$.

### Definition: Centre
Let $G$ be a group. The [[centre]] of $G$, denoted $Z(G)$, is the set
$$
Z(G)=\{g \in G: g h=h g \text { for all } h \in G\}.
$$
#### Proposition 212
Let $G$ be a group. Then $Z(G) \triangleleft G$.
#### Remark 213
>Note that $g \in Z(G)$ if and only if the** [[Conjugacy Class]]** of $g$ is $\{g\}$.

### Definition: Quotient Group
If $H \triangleleft G$ then $(G / H, *)$ is called the [[quotient group]].
#### Proposition 215
Let $H \leqslant G$.
- The binary operation $*$ on $G / H$ given by
$$
\left(g_{1} H\right) *\left(g_{2} H\right)=\left(g_{1} g_{2}\right) H
$$
is well-defined if and only if $H \triangleleft G$.
- If $H \triangleleft G$ then $(G / H, *)$ is a group.
### First Isomorphism Theorem
![[First Isomorphism Theorem#Theorem]]

### Group Actions
![[Action]]

### Orbit-Stabilizer Theorem
![[Orbit-Stabilizer Theorem]]