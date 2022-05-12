## Centralizer
#Groups 
### Definition
Let $G$ be a group and $a \in G$. The [[centralizer]] of $a$ in $G$ is a set ==$C_{G}(a)=\{g \in G: a g=g a\}$==. [[Centralizer]] is a [[subgroup]] of G.

>Let $n_{1}, n_{2}, \ldots, n_{k}$ be the distinct lengths of the cycles of $\sigma$ (including 1 if there are fixed points) and suppose that there are $m_{i}$ cycles of length $n_{i} .$ Then the [[centralizer]] of $\sigma$ can permute the cycles of the same length. Its order is $\prod_{i=1}^{k} n_{i}^{m_{i}} m_{i} !$

### Finding Centralizers in $\large\bf S_n$
Consider the centralizers of $\sigma\in S_n$. 
- We firstly notice that, $\forall \pi$ that is [[disjoint]] with $\sigma$, $\pi^{-1}\sigma\pi=\sigma.$ (By communativity of disjoint cycles: [[Disjoint#Proposition 8]])
- Secondly, $\forall n\in \mathbb{Z}$, $\sigma^n$ is conjugate to $\sigma$.


#Q Thus, conjugation may only permute cycles of the _same_ length in the representation.

#TODO (https://math.stackexchange.com/questions/208790/centralizer-of-a-given-element-in-s-n?rq=1)

---
![[Orbit-Stabilizer Theorem#Example 280]]