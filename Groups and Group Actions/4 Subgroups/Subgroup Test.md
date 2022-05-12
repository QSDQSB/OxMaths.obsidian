## Subgroup Test
#Groups 
### Proposition 17
>Let $G$ be a [[group]]. The subset $H \subseteq G$ is a [[subgroup]] of $G$ if and only if $H$ is non-empty and $h_{1} h_{2}^{-1} \in H$ for all $h_{1}$, $h_{2} \in H$.

#### Proof
##### $(\Rightarrow)$
Assume that $H$ is a subgroup of $G$. Then $e \in H$, so $H$ is non-empty. Also, if $h_{1}, h_{2} \in H$ then $h_{2}^{-1} \in H$ as $H$ contains inverses so $h_{1} h_{2}^{-1} \in H$ as $H$ is closed under the group operation. 
##### $(\Leftarrow)$
Assume that $H$ is non-empty, say $h \in H$, and that $h_{1} h_{2}^{-1} \in H$ for all $h_{1}, h_{2} \in H$:
- Identity: Have $h h^{-1}=e \in H$.
- Inverses: Take $h_{1} \in H .$ Have $e h^{-1}=h_{1}^{-1} \in H$.
- Closure: Take $h_{1}, h_{2} \in H$. Then $h_{2}^{-1} \in H$ so $h_{1}\left(h_{2}^{-1}\right)^{-1}=h_{1} h_{2} \in H$.
- 
So $H \leq G$.
### Proposition 18
Let $G$ be a group. Let $H, K$ be subgroups of $G$. Then $H \cap K$ is a [[subgroup]] of $G$.

>We can extend this to show that for any index set $I$, if $H_{i}$ (for $i \in I)$ are subgroups of a group $G$, then $\bigcap_{i \in I} H_{i}$ is a subgroup of $G$.

### Definition: Generator
Let $G$ be a group. Let $S$ be a subset of $G$. The [[subgroup]] *generated* by $S$, written $\langle S\rangle$, is the smallest subgroup of $G$ that contains $S$, that is,
$$
\langle S\rangle=\bigcap_{S \subseteq H \leq G} H.
$$
The elements of $S$ are called the ***[generators](Generator.md)*** of $\langle S\rangle$.