## Coset
#Groups 
### Definition
Let $G$ be a [[group]], let $H$ be a [[subgroup]] of $G$. A *left [[coset]]* of $H$ in $G$ is a set $g H:=\{g h: h \in H\}$ where $g \in G$. The set of left cosets of $H$ in $G$ is denoted ==$G / H$==. The cardinality of this set is called the ***index*** of $H$ in G. A *right [[coset]]* of $H$ in $G$ is a set $H g:=\{h g: h \in H\}$ where $g \in G$.
> If G is [[Abelian]], then left cosets and right cosets are the same thing.

#### Example
$G=\mathbb{Z}, H=n \mathbb{Z}$. The left coset of $r$ is $r+n \mathbb{Z}$ (note that we write this coset additively, because the group operation is addition).

The cosets (left and right as $G$ is [[Abelian]]) are $n \mathbb{Z}, 1+n \mathbb{Z}, \ldots,(n-1)+n \mathbb{Z}$. This looks a lot like $\mathbb{Z}_{n} \ldots$.

### Lemma 33 ([[Coset equality test]])
> Let $H$ be a subgroup of a group $G$. Take $g_{1}, g_{2} \in G .$ We have $g_{1} H=g_{2} H$ if and only if $g_{2}^{-1} g_{1} \in H .$

### Theorem 34 ([[Lagrange's Theorem]])
>Let $G$ be a [[finite group]] and let $H$ be a subgroup of $G .$ Then $|H|\mid|G|$. 
>*"The [[order]] of a subgroup divides the [[order]] of the group."*

---
> $g H=H$ if and only if $g \in H$