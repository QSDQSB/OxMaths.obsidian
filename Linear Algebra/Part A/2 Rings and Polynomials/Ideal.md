---
tags: [LA]
---
## Ideal
### Definition
A non-empty subset $I$ of a [[ring]] $R$ is an [[ideal]] if for all $s, t \in I$ and $r \in R$ we have
$$
s-t \in I \text { and } s r, r s \in I.
$$

---
```ad-example
- $m \mathbb{Z}$ is an ideal in $\mathbb{Z}$. Indeed, every ideal in $\mathbb{Z}$ is of this form. [To prove this, let $m$ be the smallest non-zero integer in the ideal $I$ and prove that $I=m \mathbb{Z} .$ ]
- The set of diagonal matrices in $M_{n}(\mathbb{R})$ is closed under addition and multiplication (i.e. it is a **subring**) but for $n>1$ is ***not*** an [[ideal]].
```

>Ideals are to rings what [normal subgroups](Normal%20Subgroup) are to groups in the sense that the set of additive cosets $R / I$ inherit a ring structure from $R$ if $I$ is an ideal. For $r, r^{\prime} \in R$ define $$(r+I)+\left(r^{\prime}+I\right):=\left(r+r^{\prime}\right)+I \text { and }(r+I)\left(r^{\prime}+I\right):=r r^{\prime}+I$$

---
![[First Isomorphism Theorem#First Isomorphism Theorem for Rings]]