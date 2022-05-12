## Orbit-Stabilizer Theorem
#Groups
### Theorem
>Let $G$ be a finite group acting on a set $S$ and let $s \in S .$ Then
>$$
|G|=|\operatorname{Stab}(s)| \times|\operatorname{Orb}(s)|
>$$

### Proof
We shall show that there is a well-defined **bijection** between the cosets of [$\operatorname{Stab}(s)$](Stabilizer) in $G$ and [$\operatorname{Orb}(s)$](Orbit). This will then mean by [[Lagrange's Theorem]] that
>$$\frac{|G|}{|\operatorname{Stab}(s)|}=\# \text { cosets of }\operatorname{Stab}(s)=|\operatorname{Orb}(s)| .$$

We define the map
$$
\phi: G / \operatorname{Stab}(s) \rightarrow \operatorname{Orb}(s) \quad \text { by } \quad \phi(g \operatorname{Stab}(s))=g \cdot s
$$
We first need to show that $\phi$ is well-defined (i.e. that the image of the coset $g \operatorname{Stab}(s)$ is not dependent on the choice of representative $g$ ). Note that
$$
\begin{aligned}
g \operatorname{Stab}(s)=h \operatorname{Stab}(s) & \Longleftrightarrow & h^{-1} g \in \operatorname{Stab}(s) \\
& \Longleftrightarrow & h^{-1} g \cdot s=s \\
& \Longleftrightarrow & g \cdot s=h \cdot s
\end{aligned}
$$
This shows that $\phi$ is indeed well-defined. The reverse implications show that $\phi$ is $1-1$. Finally it is immediately apparent that $\phi$ is onto as every element of $\operatorname{Orb}(s)$ can be written as $g \cdot s$ for some $g$.

```ad-remark
In fact $\phi$ is an isomorphism of actions of G.
If $G$ acts on two sets $S$ and $T$ , an isomorphism of these actions is a bijection $\phi: S\to T$ such that $$\phi(g\cdot s)=g\cdot\phi(s).$$

Note that the size of an orbit must divide the order of the group.
```

### Lagrange's Theorem
`Here don't we need H to be a normal subgroup of G?`
Let $G$ be a group and $H \leqslant G .$ Then $G$ acts on $G / H$ by
$$
g \cdot(k H)=(g k) H .
$$
```ad-note
This is directly from ![[Orbit#Example 271]]
```

#### Proof
With this action
$$
\operatorname{Stab}(H)=H \quad \text { and } \quad \operatorname{Orb}(H)=G / H
$$
By the Orbit-Stabilizer Theorem
$$
|G / H| \times|H|=|G| \text { . }
$$

### Corollary 279
>$o($[[Conjugacy Class]]$)\times$ $o($[[Centralizer]]$) = o(G)$

Let $G$ be a group, $g \in G$ and
$$
\begin{aligned}
C_{G}(g) &=\{h \in G: g h=h g\}=\text { centralizer of } g, \\
C(g) &=\left\{h^{-1} g h: h \in G\right\}=\text { conjugacy class of } g
\end{aligned}
$$
Then
$$
\left|C_{G}(g)\right| \times|C(g)|=|G|.
$$
#### Proof
Consider $G$ acting on itself by **conjugation**:
$$
g \cdot h=g h g^{-1} \text { . }
$$
For $g \in G$
$$
\operatorname{Stab}(g)=\left\{h \in G: h g h^{-1}=g\right\}=C_{G}(g), \quad \operatorname{Orb}(g)=C(g)
$$

#### Example 280
>Determine the number of conjugates of $(123)$ in $A_{5} .$

**Solution**. First we will find $C_{A_{5}}((123))$. We note
$$
\text { (123) } \rho=\rho(123) \Longleftrightarrow(123)=\rho^{-1}(123) \rho=(1 \rho 2 \rho 3 \rho).
$$


As there are three ways of writing (123), the others being (231) and (312), then
$$
1 \rho=1,2 \rho=2,3 \rho=3 \quad \text { or }
$$
$$
1 \rho=2,2 \rho=3,3 \rho=1 \quad \text { or }
$$
$$
 1 \rho=3,2 \rho=1,3 \rho=2 \quad\quad\,
$$
So $1,2,3$ must cycle in one of three ways, **all of them even permutations**. For $\rho$ to be even, it must be the case that $4 \rho=4$ and $5 \rho=5$. Hence $\left|C_{A_{5}}((123))\right|=3$ and
$$
|C((123))|=\frac{\left|A_{5}\right|}{3}=\frac{60}{3}=20
$$
As there are, in all, $\frac{5 \times 4 \times 3}{3}=20$ number of 3-cycles in $A_{5}$ then the [[Conjugacy Class]] of $(123)$ in $A_{5}$ is the entire set of 3-cycles. 
> Compare this with [[Conjugacy Class#Example 86]].

### Example 281
>Show that there are $12$ rotational symmetries of a regular tetrahedron and $24$ of a cube.

**Solution**. Let $G_{T}$ denote the tetrahedral group. A tetrahedron has 4 vertices and $G_{T}$ acts **transitively** on this set. 
- The orbit of a particular vertex $v$ consists of every vertex, then $|\operatorname{Orb}(v)|=4$.
- The stabilizer of a particular vertex $v$ consists of the identity and the two $\pm 120^{\circ}$ rotations about an axis through $v$ and the midpoint of the opposite face. Hence
$$
\left|G_{T}\right|=|\operatorname{Stab}(v)| \times|\operatorname{Orb}(v)|=3 \times 4=12 .
$$

Let $G_{C}$ denote the cube's group. A cube has 8 vertices and $G_{C}$ acts transitively on this set.
- The stabilizer of a particular vertex $v$ consists of the identity and the two $\pm 120^{\circ}$ rotations about the diagonal through $v$ and its opposite vertex. Hence
$$
\left|G_{C}\right|=|\operatorname{Stab}(v)| \times|\operatorname{Orb}(v)|=3 \times 8=24 .
$$

Either of these calculations could as easily have been performed by looking at the actions on edges and faces. Using the faces of a cube, for example, we would have concluded
$$
\left|G_{C}\right|=|\operatorname{Stab}(f)| \times|\operatorname{Orb}(f)|=4 \times 6=24 .
$$
- $|\operatorname{Stab}(f)|$: Fixing a face, then by rotating along the axis crossing through this face, we could have four symmetries.

---

### Proposition 282
>A group $G$ of order $p^{r}$, where $p$ is prime, has a non-trivial [[centre]].

#### Proof
Let $G$ act on itself by **conjugation**.
Recall that the [[centre]] of $G$ is $Z(G)=\{g \in G: h g=g h \forall h \in H\}$ so being in $Z(G)$ is equivalent to being a **singleton** [[orbit]].
There is at least one such orbit, namely $\{e\} .$ By the [[Orbit-Stabilizer Theorem]], all the orbits have size $p^{k}$ for some $0 \leqslant k<r .$ If $N_{k}$ is the number of such orbits then, as the orbits partition $G$ we have
$$
N_{0}+N_{1} p+N_{2} p^{2}+\cdots+N_{r-1} p^{r-1}=p^{r}
$$
and in particular we see that $N_{0}$ is a multiple of $p$. As $N_{0} \geqslant 1$ then there are other singleton orbits, i.e. other elements of $Z(G)$.

### Proposition 283
>A group $G$ of order $p^{2}$ is **isomorphic** to $C_{p^{2}}$ or $C_{p} \times C_{p}$.

#### Proof
If $G$ has an element of order $p^{2}$ then $G \cong C_{p^{2}}$.

If there is no such element, then the nontrivial elements have order $p$. Take a non-trivial element $x$ from the [[centre]] $Z(G)$ and another element $y$ not in $\langle x\rangle$. Then the elements $x^{i} y^{j}(0 \leqslant i, j<p)$ are all distinct as $\langle x\rangle \cap\langle y\rangle=\{e\}$. Further as $x$ is $Z(G)$ then these elements multiply by
$$
x^{i} y^{j} * x^{I} y^{J}=x^{i+I} y^{j+J}
$$
and we see that $G \cong C_{p} \times C_{p}$.

### Example 284
>Let $G$ be a group with three [conjugacy classes](Conjugacy%20Class). Show that $G \cong C_{3}$ or $G \cong S_{3}$.

#### Solution
The [[conjugacy class]] of $e$ is just $\{e\}$. 

Denote the size of the remaining two classes as $c_{1}$ and $c_{2}$. Both $c_{1}$ and $c_{2}$ are factors of $|G|$ and so $|G|=k_{1} c_{1}=k_{2} c_{2}$ for some $k_{1}, k_{2}$. Without any loss of generality we may assume that $k_{1} \leqslant k_{2}$. As the conjugacy classes partition $G$ then
$$
1+c_{1}+c_{2}=k_{1} c_{1}=k_{2} c_{2}
$$
so that
$$
1+c_{2}=\left(k_{1}-1\right) c_{1}, \quad 1+c_{1}=\left(k_{2}-1\right) c_{2}
$$
Eliminating $c_{2}$ and rearranging somewhat, we arrive at
$$
c_{1}=\frac{k_{2}}{\left(k_{1}-1\right)\left(k_{2}-1\right)-1} .
$$
If $k_{1}>3$ then we have the contradiction
$$
\frac{k_{2}}{\left(k_{1}-1\right)\left(k_{2}-1\right)-1}<\frac{k_{2}}{2\left(k_{2}-1\right)-1}=\frac{k_{2}}{2 k_{2}-3}<1 .
$$
If $k_{1}=1$ then $c_{1}=-k_{2}<0$, a further contradiction. So the possibilities are
$$
\begin{array}{lllll}
k_{1}=2, & k_{2}=3, & c_{1}=3, & c_{2}=2, & |G|=6 ; \\
k_{1}=3, & k_{2}=3, & c_{1}=1, & c_{2}=1, & |G|=3
\end{array}
$$
As $C_{6}$ has six conjugacy classes, the first possibility leads to $S_{3}$ only and the second to $C_{3}$.

---
### Cauchy's Theorem
>Let $G$ be a finite group and let $p$ be a prime dividing $|G|$. Then $G$ has an element of [[order]] $p$.

#### Proof
Let $S$ denote the set
$$
S=\left\{\left(g_{1}, g_{2}, \ldots, g_{p}\right) \in G^{p}: g_{1} g_{2} \cdots g_{p}=e\right\}
$$
Note that $|S|=|G|^{p-1}$ as the first $p-1$ elements $g_{1}, \ldots, g_{p-1}$ may be chosen freely from $G$ and then $g_{p}=\left(g_{1} g_{2} \cdots g_{p-1}\right)^{-1}$ is determined. Let $\sigma=(123 \cdots p)$ and note that there is an action of $\langle\sigma\rangle \cong C_{p}$ on $S$ by
$$
\sigma \cdot\left(g_{1}, g_{2}, \ldots, g_{p}\right)=\left(g_{2}, g_{3}, \ldots, g_{p}, g_{1}\right)
$$
as
$$
\begin{aligned}
\left(g_{1}, g_{2}, \ldots, g_{p}\right) \in S \Longleftrightarrow & g_{1} g_{2} \cdots g_{p}=e \\
& \Longleftrightarrow g_{2} \cdots g_{p}=g_{1}^{-1} \\
& \Longleftrightarrow g_{2} \cdots g_{p} g_{1}=e \\
& \Longleftrightarrow\left(g_{2}, g_{3}, \ldots, g_{p}, g_{1}\right) \in S .
\end{aligned}
$$
We consider the orbits of this action. As $|\langle\sigma\rangle|=p$ then, by the Orbit-Stabilizer Theorem, the orbits may have size 1 or $p$.
- If $\left(g_{1}, g_{2}, \ldots, g_{p}\right)$ is in an orbit of size 1 then
$$
\sigma \cdot\left(g_{1}, g_{2}, \ldots, g_{p}\right)=\left(g_{2}, g_{3}, \ldots, g_{p}, g_{1}\right)=\left(g_{1}, g_{2}, \ldots, g_{p}\right)
$$
and hence we see that
$$
g_{1}=g_{2}=\cdots=g_{p} \quad \text { and } \quad\left(g_{1}\right)^{p}=e
$$

We also see that there is at least one singleton orbit, namely $\{(e, e, \ldots, e)\}$. As the orbits partition $S$ then
$$
|S|=k+l p
$$
where $k$ is the number of singleton orbits and $l$ is the number of orbits of size $p$. As $p$ divides $|G|$ then $p$ divides $|S|=|G|^{p-1}$ and hence $p$ divides $k$. From our earlier comment $k \geqslant 1$ and hence there is at least one other singleton orbits besides $\{(e, e, \ldots, e)\}$. Again from our earlien comments, this other singleton orbit is of the form $\{(g, g, \ldots, g)\}$ where $g^{p}=e$.

