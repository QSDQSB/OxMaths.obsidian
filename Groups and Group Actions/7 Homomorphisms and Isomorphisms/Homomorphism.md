## Homomorphism
#Groups 
### Definition
Let $G$ and $H$ be groups. A [[homomorphism]] $\phi: G \rightarrow H$ is a map such that
$$
\phi\left(g_{1} *_{G} g_{2}\right)=\phi\left(g_{1}\right) *_{H} \phi\left(g_{2}\right) \quad \text { for all } g_{1}, g_{2} \in G.
$$
Hence an [[isomorphism]] between $G$ and $H$ is simply a bijective homomorphism.
- An [[automorphism]] of a group $G$ is an [[Isomorphism]] from $G$ to $G$. The automorphisms of $G$ form a group $\operatorname{Aut}(G)$ under composition. (Exercise Sheet 5, Question 5). 
- An ***endomorphism*** of $G$ is a [[homomorphism]] from $G$ to $G$. 
- (Rarely used) A **monomorphism** is an injective homomorphism
- an **epimorphism** is a surjective [[homomorphism]].
#### Homomorphism Examples
##### Example 174
The map $\phi: \mathbb{Z} \rightarrow \mathbb{Z}_{n}$ given by $\phi(n)=\bar{n}$ is a [[homomorphism]] as
$$
\overline{m+n}=\bar{m}+\bar{n} .
$$
##### Example 175
If $H$ is a subgroup of $G$ then **inclusion** $\iota: H \rightarrow G$ given by $\iota(h)=h$ is a homomorphism.
`inclusion: ‘treated’ as an element of B`
##### Example 176
For any groups $G, H$ the map $\phi: G \rightarrow H$ given by $\phi(g)=e_{H}$ is a group homomorphism.
`zero map?`
##### Example 177
Let $G_{1}$ and $G_{2}$ be groups. Then the maps
$$
\pi_{1}: G_{1} \times G_{2} \rightarrow G_{1}, \quad\left(g_{1}, g_{2}\right) \mapsto g_{1} \quad \text { and } \quad \pi_{2}: G_{1} \times G_{2} \rightarrow G_{2}, \quad\left(g_{1}, g_{2}\right) \mapsto g_{2}
$$
are homomorphisms.
`废话`
##### Example 178
The map $\operatorname{sgn}: S_{n} \rightarrow\{\pm 1\}$ given by
$$
\operatorname{sgn}(\sigma)=\left\{\begin{array}{cc}
1 & \text { if } \sigma \text { is even } \\
-1 & \text { if } \sigma \text { is odd }
\end{array}\right.
$$
is a homomorphism: as, for $\sigma, \tau \in S_{n}$, we have $\operatorname{sgn}(\sigma \tau)=\operatorname{sgn}(\sigma) \operatorname{sgn}(\tau)$.
`the 'sign' map`
##### Example 179
The map det: $G L(n, \mathbb{R}) \rightarrow \mathbb{R}^{*}$ is a homomorphism as, for $n \times n$ matrices $A, B$ we have $\operatorname{det}(A B)=\operatorname{det} A \operatorname{det} B$
`determinantal map. R*: non-zero`
##### Example 180
The map trace: $M_{n}(\mathbb{R}) \rightarrow \mathbb{R}$ is a homomorphism as, for $n \times n$ matrices $A, B$ we have trace $(A+B)=\operatorname{trace} A+\operatorname{trace} B$.
##### Example 181
The map $\log :(0, \infty) \rightarrow \mathbb{R}$ is a homomorphism as for $x, y>0$ we have $\log (x y)=\log x+\log y .$ In fact, being a bijection, this is an isomorphism.
`Doesn't it need to describe '*' and '+'?`
##### Example 182
The map $\phi: \mathbb{R} \rightarrow S^{1}$ given by $\phi(x)=e^{i x}$ is a surjective homomorphism as $e^{i(x+y)}=e^{i x} e^{i y}$
`S1: complex number of modulus 1 under multiplication`
##### Example 183
The map $\phi: \mathbb{C}^{*} \rightarrow \mathbb{R}^{*}$ given by $\phi(z)=|z|$ is a group homomorphism as $|z w|=$ $|z||w|$ for $z, w \neq 0$.
`non-zero modulus map`
##### Example 184
The map $\phi: \mathbb{R}^{*} \rightarrow \mathbb{R}^{*}$ given by $\phi(x)=x^{2}$ is a group homomorphism as $(x y)^{2}=$ $x^{2} y^{2}$
##### Remark 185
More generally $\phi: G \rightarrow G$ given by $\phi(g)=g^{2}$ is a [[homomorphism]] if and only if $G$ is [[abelian]].
###### Proof
$(\Rightarrow):$ Say $\phi$ is a homomorphism, then $\forall g_1,g_2\in G$, we have 
$$
\begin{aligned}
(g_1*g_2)^2&=\phi(g_1 *g_2)=\phi(g_1)*\phi(g_2)=g_1^2*g_2^2 \\
g_1*g_2*g_1*g_2&=g_1*g_1*g_2*g_2 \\
g_2*g_1&=g_1*g_2,\qquad\quad\quad \left(\forall g_1,g_2\in G\right) \\
\end{aligned}
$$
Hence Abelian.
$(\Leftarrow):$ Say $G$ is Abelian, then similarly...

---
>Homomorphisms in group theory have many properties akin to linear maps in linear algebra.

### Proposition 172
Let $\phi: G \rightarrow H$ be a [[homomorphism]] between groups and let $g \in G, n \in \mathbb{Z}$. Then
1) $\phi\left(e_{G}\right)=e_{H}$
2) $\phi\left(g^{-1}\right)=(\phi(g))^{-1}$
3) $\phi\left(g^{n}\right)=(\phi(g))^{n}$

#### Proof
1) We have $\phi\left(e_{G}\right)=\phi\left(e_{G} * e_{G}\right)=\phi\left(e_{G}\right) *_{H}\phi\left(e_{G}\right)$ and applying $\phi\left(e_{G}\right)^{-1}$ to both sides (i) follows. 
2) Note
$$
\phi(g) \phi\left(g^{-1}\right)=\phi\left(g g^{-1}\right)=\phi\left(e_{G}\right)=e_{H}
$$
demonstrating (ii).
3) Note more generally that we can show $\phi\left(g^{n}\right)=(\phi(g))^{n}$ for $n>0$ by **induction** and then for $n=-k<0$ we have
$$
\phi\left(g^{n}\right)=\phi\left(\left(g^{-1}\right)^{k}\right)=\left(\phi\left(g^{-1}\right)\right)^{k}=\left(\phi(g)^{-1}\right)^{k}=\phi(g)^{n} .
$$
### Corollary 173
>Let $\phi: G \rightarrow H$ be a [[homomorphism]] between groups and let $g \in G$. Then $\mathrm{o}(\phi(g))$ divides $\mathrm{o}(\mathrm{g})$.

**Proof**. Note
$$
\phi(g)^{\mathrm{o}(g)}=\phi\left(g^{\mathrm{o}(g)}\right)=\phi\left(e_{G}\right)=e_{H}
$$
In a group, $k^{n}=e$ if and only if $n$ is a multiple of $\mathrm{o}(k)$ (by [[Order#Proposition 135]]).

### Proposition 186
>See [[Isomorphism#Proposition 186]]

Let $a \in G$, a group. [Conjugation](Conjugate) by $a$, i.e. the map $\theta_{a}: G \rightarrow G$ given by $\theta_{a}(g)=a^{-1} g a$ is an [[isomorphism]].

### Proposition 188
>Homomorphisms $\phi: \mathbb{Z} \rightarrow \mathbb{Z}$ are all of the form $\phi(x)=n x$ for some $n \in \mathbb{Z}$.

**Proof**. 
- Certainly, for any $n \in \mathbb{Z}$, we have that $\phi(x)=n x$ is a [[homomorphism]] as
$$
\phi(x+y)=n(x+y)=n x+n y=\phi(x)+\phi(y).
$$
- Conversely, for any [[homomorphism]] $\phi: \mathbb{Z} \rightarrow \mathbb{Z}$, if we set $n=\phi(1)$ then by [[#Proposition 172]](iii) we have for $x>0$
$$
\phi(x)=\phi(\underbrace{1+1+\cdots+1}_{x \text { times }})=\underbrace{\phi(1)+\phi(1)+\cdots+\phi(1)}_{x \text { times }}=n x
$$
and then $\phi(-x)=-\phi(x)=-n x=n(-x)$.

#### Remark 189
==We may determine the homomorphism of a cyclic group $<g>$ by just looking at $\phi(g)$.==
As a crucial aspect of the above proof we have just noted that, if $G$ is a [[cyclic group]] with generator $g$, then any homomorphism from $G$ is entirely determined by the value of $\phi(g)$ as
$$
\phi\left(g^{r}\right)=(\phi(g))^{r} \text { for any } r \in \mathbb{Z} \text { . }
$$
More generally if $g_{1}, \ldots, g_{k}$ are [generators](generator) of a group $G$ then any homomorphism from $G$ is entirely determined by the values $\phi\left(g_{1}\right), \ldots, \phi\left(g_{k}\right)$.

>This result corresponds to the similar result in linear algebra: any linear map $T: V \rightarrow W$ is determined by the values $T$ takes on a **basis** of $V$ (or more generally on a **spanning set**).

---
In a comparable way to linear maps, we can also define the [[kernel]] and [[image]] of a [[homomorphism]]. As one might expect from the study of linear maps, kernels and images in group theory are **subgroups** - in fact, more than this, kernels turn out to be a special type of subgroup.

### Definition: Kernel
>See at [[Kernel and Image (Groups)]]

Let $\phi: G \rightarrow H$ be a homomorphism between groups. Then:
(i) the ***kernel*** of $\phi$, written $\color{yellow}\ker\phi$, equals
$$
\operatorname{ker} \phi=\left\{g \in G: \phi(g)=e_{H}\right\} \subseteq G.
$$
### Definition: Image
(ii) the ***image*** of $\phi$, written $\color{yellow}\operatorname{Im} \phi$, equals
$$
\operatorname{Im} \phi=\{\phi(g): g \in G\} \subseteq H.
$$

---
### Definition: Normal
> See at [[Normal Subgroup]]

Let $G$ be a group and $H$ a subgroup of $G .$ Then $H$ is said to be a [[Normal Subgroup]] of $G$ if
$$
g H=H g \quad \text { for all } g \in G
$$
or equivalently if
$$
g^{-1} h g \in H \quad \text { for all } g \in G, h \in H
$$
If $H$ is a [[normal subgroup]] of $G$ then we write $H \triangleleft G$.
### Proposition 192
Let $\phi: G \rightarrow H$ be a [[homomorphism]] between two groups. Then $\mathrm{ker} \phi \triangleleft G$.
> See at [[normal subgroup#Proposition 192]]

---
`(so-called) understanding homomorphisms via the First Isomorphism Theorem.`
### Proposition 199
A [[homomorphism]] is constant on a [[coset]] of $\ker\phi$ and takes different values on different cosets.
#### Proof
$$
\phi\left(g_{1}\right)=\phi\left(g_{2}\right) \Longleftrightarrow \phi\left(g_{2}^{-1} g_{1}\right)=e_{H} \Longleftrightarrow g_{2}^{-1} g_{1} \in \operatorname{ker} \phi \Longleftrightarrow g_{1} \text { ker } \phi=g_{2} \operatorname{ker} \phi
$$
#### Corollary 200
Let $\phi: G \rightarrow H$ be a [[homomorphism]] between two groups. Then $\phi$ is $1-1$ if and only if $\ker\phi=\left\{e_{G}\right\}$.