## Group Action
#Groups 

### Definition: Left Action
 The left [[action]] of a group $G$ on a set $S$ is a map
$$
\rho: G \times S \rightarrow S
$$
such that:
- $\rho(e, s)=s$ for all $s \in S$
- $\rho(g, \rho(h, s))=\rho(g h, s)$ for all $s \in S$ and $g, h \in G$.

```ad-comment
We will normally write ==$g \cdot s$==***(The point that s is moved to by g)*** for $\rho(g, s)$ and so (i) and (ii) above would now read as:
- $e \cdot s=s$ for all $s \in S$;
- $g \cdot(h \cdot s)=(g h) \cdot s$ for all $s \in S$ and $g, h \in G$.
```

#### Examples 

`Matrix-Vector Multiplication Action`
- The group $G L(n, \mathbb{R})$ acts on $\mathbb{R}^{n}$ by
$$
A \cdot \mathbf{v}=A \mathbf{v} \quad \text { for } \quad A \in G L(n, \mathbb{R}) \text { and } \mathbf{v} \in \mathbb{R}^{n}
$$
as
$$
I_{n} \mathbf{v}=\mathbf{v} \quad \text { and } \quad(A B) \mathbf{v}=A(B \mathbf{v}) \quad \text { for } \mathbf{v} \in \mathbb{R}^{n}, A, B \in G L(n, \mathbb{R})
$$
^Example-251

`Matrix-Conjugation Action`
- The group $G L(n, \mathbb{R})$ acts on the set $M_{n n}(\mathbb{R})$ of real $n \times n$ matrices by **[[conjugation]]**
$$
A \cdot M=A M A^{-1}
$$
We can verify that this is a left action by noting
$I_{n} \cdot M=I_{n} M I_{n}^{-1}=M \quad$ and $\quad(A B) \cdot M=(A B) M(A B)^{-1}=A\left(B M B^{-1}\right) A^{-1}=A \cdot(B \cdot M)$
^Example-252

`Invertible-Matrix Multiplication`
- Another action of $G L(n, \mathbb{R})$ on the set $M_{n n}(\mathbb{R})$ is given by
$$
A \cdot M=A M
$$
^Example-253

`Symmetry-Group Action`
- Let $S$ be a polygon in $\mathbb{R}^{2}$ or a polyhedron in $\mathbb{R}^{3} .$ Then the **symmetry group** of $S$ - those isometries $g$ that satisfy $g(S)=S$ - acts naturally on $S .$ The symmetry group can separately be considered as acting on the set of vertices of the polyhedron, or edges, or faces.
^Example-254

`Affine Transformation Action`
- Let $S$ denote the set of triangles in $\mathbb{R}^{2}$ and let
$$
\begin{array}{l}
G_{1}=\left\{\mathbf{v} \mapsto A \mathbf{v}+\mathbf{b}: A \in G L(2, \mathbb{R}), \mathbf{b} \in \mathbb{R}^{2}\right\} \\
G_{2}=\left\{\mathbf{v} \mapsto A \mathbf{v}+\mathbf{b}: A \in O(2), \mathbf{b} \in \mathbb{R}^{2}\right\}
\end{array}
$$
That is, $G_{1}$ is the group of affine transformations of the plane and $G_{2}$ is the group of isometries of the plane. Then $G_{1}$ and $G_{2}$ act naturally on $S$ by $g \cdot \Delta=g(\Delta)$.
^Example-255

And then there are various examples where a group acts on itself or subsets of itself in a natural way.

`Identity...? Action`
- Let $G$ be a group. Then we have a left action of $G$ on itself by $g \cdot h=g h$ for $g, h \in G$
^Example-256

`Group-Conjugation Action`
- Let $G$ be a group. Then we have a left action of $G$ on itself by conjugation $-$ that is
$$
g \cdot h=g h g^{-1}
$$
We clearly have $e\cdot g=g$ and
$$
g \cdot(k \cdot h)=g \cdot\left(k h k^{-1}\right)=g k h k^{-1} g^{-1}=(g k) h(g k)^{-1}=(g k) \cdot h
$$
^Example-257

`Coset Action`
- Let $H$ be a (not necessarily normal) subgroup of a group $G$ and let $G / H$ denote the set of left cosets of $H .$ Then there is a left action of $G$ on $G / H$ by
$$
g_{1} \cdot\left(g_{2} H\right)=\left(g_{1} g_{2}\right) H
$$
^Example-258

### Definition: Right Action
A right action of a group $G$ on a set $S$ is a map
$$
\rho: S \times G \rightarrow S
$$
such that:
(i) $\rho(s, e)=s$ for all $s \in S$
(ii) $\rho(\rho(s, h), g)=\rho(s, h g)$ for all $s \in S$ and $g, h \in G$.

### Orbit
![[Orbit]]

### Stabilizer
![[Stabilizer]]
