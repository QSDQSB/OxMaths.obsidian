## Order
#Groups 
### Definition: Order of a Group
The [[order]] of a group $(G, *)$ is the cardinality $|G|$ of the set $G$. 
If $|G|$ is finite, then we say that $G$ is a [[finite group]].
### Definition: Order of an Element
Let $G$ be a [[group]], take $g\in G$. We define the [[order]] of $g$, $o(g)$, to be the **smallest positive integer** $k$ such that $g^k=e$. If no such integer $k$ exists, then we say $g$ has $\textit{infinite order}.$

#### Corollary 36
![[Lagrange's Theorem#Corollary 36]]

#### Corollary 37
>Let p be prime. Let $G$ be a finite group with [[order]] p. Then $G$ is [[cyclic]].
- [[Lagrange's Theorem#Corollary 37]]

#### Corollary 155
>Let $G$ be a group of **prime** order. Then $G$ has no subgroups and hence is cyclic.
- [[Lagrange's Theorem#Corollary 155]]
#### Proposition 135
>If $g \in G$ and $\mathrm{o}(g)$ is finite, then $g^{n}=e$ if and only if $\mathrm{o}(g) \mid n$.

**Proof**.
- If $n=k \mathrm{o}(g)$ then
$$
g^{n}=\left(g^{\mathrm{o}(g)}\right)^{k}=e^{k}=e .
$$
- Conversely, if $g^{n}=e$ then, by the [[division algorithm]], there are integers $q, r$ such that $n=$ $q \mathrm{o}(g)+r$ where $0 \leqslant r<\mathrm{o}(g)$. Then
$$
g^{r}=g^{n-q \circ(g)}=g^{n}\left(g^{\mathrm{o}(g)}\right)^{-q}=e .
$$
By the minimality of $\mathrm{o}(\mathrm{g})$ then $r=0$ and so $n=q \mathrm{o}(\mathrm{g})$.
#### Corollary 162
>Let $G$ be a group with even order. Then $G$ has an element of **order** 2.
### Theorem 167: Group of order<=7
> See [[Isomorphism#Theorem 167]]

Up to [[Isomorphism]], the groups of [[order]] $\leqslant 7$ are:
- Order $2: C_{2}$
- Order $3: C_{3}$
Order 4: $C_{4}$ or $C_{2} \times C_{2} \cong V_{4}$
- Order $5: C_{5}$
- Order $6: C_{6}$ or $S_{3} \cong D_{6}$
- Order $7: C_{7}$
---
### Corollary 173
Let $\phi: G \rightarrow H$ be a [[homomorphism]] between groups and let $g \in G$. Then $\mathrm{o}(\phi(g))$ divides $\mathrm{o}(\mathrm{g})$.
> See [[Homomorphism#Corollary 173]]



---
https://crypto.stanford.edu/pbc/notes/group/ordereight.html

---
### Cauchy's Theorem
![[Orbit-Stabilizer Theorem#Cauchy's Theorem]]