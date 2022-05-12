## Orbit
#Groups 
### Definition
For a group $G$ acting on a set $S$, take $s\in S$, the [[orbit]] of $s$, written ==$\operatorname{Orb}(s)$==, is defined as
$$
\operatorname{Orb}(s)=\{g \cdot s: g \in G\} \subseteq S
$$

>If there is only one orbit then we say that the action is ***transitive***.

`Orbit is a subset of S, and has nothing to do with elements in G.`

---
### Examples
- When $S_{n}$ (right) acts on $\{1,2, \ldots, n\}$ by $\rho(k, \sigma)=k \sigma$ then there is just one orbit. Note that
$$
\operatorname{Stab}(n)=\left\{\sigma \in S_{n}: n \sigma=n\right\}=\operatorname{Sym}\{1,2, \ldots, n-1\} \cong S_{n-1}
$$
^Example-262

- When $S_{n}$ (right) acts on the subsets of $\{1,2, \ldots, n\}$ by $\rho(S, \sigma)=S \sigma$ then there are $n+1$ orbits, one for each possible size of $|S|$ and if $|S|=k$ then
$$
\operatorname{Stab}(S) \cong S_{k} \times S_{n-k}
$$
> See [[GG_Sheet6]]

^Example-263

- When $G L(n, \mathbb{R})$ acts on $\mathbb{R}^{n}$ by $A \cdot \mathbf{v}=A \mathbf{v}$, there are just two orbits $\{\mathbf{0}\}$ and $\mathbb{R}^{n} \backslash\{\mathbf{0}\} .$ If $A \in G L(n, \mathbb{R})$ then $A \mathbf{0}=\mathbf{0}$ whilst if $\mathbf{v} \neq \mathbf{0}$ then $\mathbf{v}$ can be extended to a basis which can be used as the columns of an invertible matrix $A$. Then $A \mathbf{e}_{1}=\mathbf{v}$ where $\mathbf{e}_{1}=(1,0, \ldots, 0)^{T}$.
^Example-264

- When $G L(2, \mathbb{C})$ acts on the set $M_{22}(\mathbb{C})$ of complex $n \times n$ matrices by conjugation
$$
A \cdot M=A M A^{-1}
$$
then the an orbit either has a representative of the form
$$
\left(\begin{array}{ll}
\lambda & 0 \\
0 & \mu
\end{array}\right) \quad \lambda, \mu \in \mathbb{C}
$$
when the matrix is diagonalizable or of the form
$$
\left(\begin{array}{ll}
\lambda & 1 \\
0 & \lambda
\end{array}\right) \quad \lambda \in \mathbb{C}
$$
when the matrix is not diagonalizable.
^Example-265

- Let $S$ be the set of black-or-white colourings of a square's edges. As there are four edges then $|S|=2^{4}=16 .$ The square's symmetry group $D_{8}$ acts naturally on $S$ and there are six orbits with a representative of each orbit listed below
$W W W W, \quad B W W W, \quad B B W W, \quad B W B W, \quad B B B W, \quad B B B B$,
where the edges' colours are listed in clockwise order.
^Example-266

Let $S$ be the set of black-or-white colourings of a cube's faces. As there are six faces then $|S|=2^{6}=64 .$ The cube's rotational symmetry group acts naturally on $S$ and there are 10 orbits with a representative of each orbit listed below:
all white, $\quad 1$ black, $\quad$ 2 opposite black faces, $\quad 2$ adjacent black faces, 3 black faces in a $C, \quad 3$ black faces around a corner. 2 opposite white faces, $\quad$ 2 adjacent white faces, $\quad 1$ white, all black.
^Example-267

- (From [[Action#^Example-255]].) When the affine group group of $\mathbb{R}^{2}$ acts on the set of triangles, then there is just one orbit as any triangle can be taken to any other triangle via an affine map. The orbits when the isometry group acts are the congruence cxlasses, as two triangle are related by an isometry if and only if they are congruent.
^Example-268

- When a group $G$ acts on itself by $g \cdot h=g h$ then the action is transitive and each stabilizer is just $e$.
^Example-269

- When a group $G$ acts on itself by $g \cdot h=g h g^{-1}$ then the **orbit** of $g$ is its [[conjugacy class]] and its stabilizer is the [[centralizer]] $C_{G}(g) .$
^Example-270

#### Example 271
When $H \leqslant G$ and $G$ acts on the set of cosets $G / H$ by $g_{1} \cdot\left(g_{2} H\right)=\left(g_{1} g_{2}\right) H$ then the [[action]] is **transitive** and the stabilizer of $\mathrm{gH}$ is $\mathrm{gHg}^{-1}$ as
$$
k \cdot g H=g H \Longleftrightarrow k g H=g H \Longleftrightarrow g^{-1} k g \in H \Longleftrightarrow k \in g H g^{-1} .
$$

### Proposition 272
> The orbits of an action **partition** the set.

#### Proof
Let $G$ be a group acting on a set $S$. We introduce a binary relation $\sim$ on $S$ by setting. for $s, t \in S$
$s \sim t \Longleftrightarrow$ there exists $g \in G$ such that $g \cdot s=t$
We shall show that $\sim$ is an equivalence relation and that the [[equivalence class]]es are the orbits.
- $\sim$ is reflexive as $s=e \cdot s$ for all $s \in S$;
- $\sim$ is symmetric as
$$
\begin{aligned}
s \sim t & \Longrightarrow & g \cdot s=t \text { for some } g \in G \\
& \Longrightarrow & g^{-1} \cdot t=s \\
& \Longrightarrow & t \sim s .
\end{aligned}
$$
- $\sim$ is transitive as
$$
\begin{aligned}
s \sim t, t \sim u \Longrightarrow & g \cdot s=t \text { and } h \cdot t=u \text { for some } g, h \in G \\
& \Longrightarrow(h g) \cdot s=h \cdot(g \cdot s)=h \cdot t=u \\
& \Longrightarrow s \sim u
\end{aligned}
$$

Hence $\sim$ is an equivalence relation and, in particular, the equivalence classes partition $S .$ For $s \in S$, note that the equivalence class $\bar{s}$ equals
$$
\bar{s}=\{g \cdot s: g \in G\}=\operatorname{Orb}(s).
$$

![[Stabilizer#Proposition 274]]