## Dihedral Group
#Groups 
### Definition
Let $P_{n}$ be a regular $n$ -gon in the plane (here $n \geq 3$ ). For $n \geq 3$, define the $n^{\text {th }}$ [[Dihedral Group]] $D_{2 n}$ to be the set of [isometries](Isometry) of the plane that send $P_{n}$ to $P_{n}$. These isometries are called symmetries of $P_{n}$.

### Presentation
$D_{2 n}=\left\langle r, s: r^{n}=e=s^{2}, s r=r^{-1} s\right\rangle .$
### Example
> Write $r$ for the rotation anticlockwise by $2\pi\over3$ about the centre of the triangle, and $s$ for the reflection in the vertical axis. Then $D_6={e,r,r^2,s,rs,r^2s}.$

### Proposition 4
Let $P_{n}$ be a regular $n$-gon in the plane. Write $r$ for rotation anticlockwise by $\frac{2 \pi}{n}$ about the centre of $P_{n}$, and s for reflection in an axis of $P_{n}$. Then the symmetries of $P_{n}$ are $e, r, r^{2}, \ldots, r^{n-1}, s, r s, r^{2} s, \ldots, r^{n-1} s$.
#### Proof
Label the vertices of $P_{n}$ anticlockwise as $1,2, \ldots, n$. Let $f$ be a symmetry of $P_{n}$, and consider $f\left(P_{n}\right)$. 

---
>Case 1 The vertices of $f\left(P_{n}\right)$ are numbered $1,2, \ldots, n$ anticlockwise. 

Say vertex 1 has moved to position $k$ (where $1 \leq k \leq n$. Then applying $\left(r^{-1}\right)^{k-1}$ will return vertex 1 to position 1, and hence all vertices to their starting positions. So $\left(r^{-1}\right)^{k-1} f=e$, so $f=r^{k-1}$.
>Case 2 The vertices of $f\left(P_{n}\right)$ are numbered $1,2, \ldots, n$ clockwise. 

Then $f s$ keeps the vertices in anticlockwise order, so as in Case 1 we have $f s=r^{k-1}$ for some $k(1 \leq k \leq n)$, and then $f=f s^{2}=r^{k-1} s$

---
So the symmetries of $P_{n}$ are contained in the list $e, r, r^{2}, \ldots, r^{n-1}, s, r s$, $r^{2} s, \ldots, r^{n-1} s$
Now $e, r, r^{2}, \ldots, r^{n-1}$ each send vertex 1 to a different position, and hence are all distinct. Similarly, $s, r s, r^{2} s, \ldots, r^{n-1} s$ are all distinct. The former collection leave the vertices in anticlockwise order, whereas the latter switch them to clockwise, so in fact all $2 n$ symmetries are **distinct**.

> Dihedral Group $D_{2n}$ is a [[subgroup]] of $S_n$.

### Theorem 163
>Let $G$ be a finite group with $|G|=2 p$ where $p \geqslant 3$ is prime. Then $G$ is isomorphic to $C_{2 p}$ or $D_{2 p}$.

- See [[Lagrange's Theorem#Theorem 163]]

### Centre of Dihedral Group
![[Centre#Example 214]]

### $\large\bf D_{2 n} /\langle r\rangle \cong C_{2}$
![[Quotient Group#Example 222]]

---
![[First Isomorphism Theorem#\large\bf D_8]]