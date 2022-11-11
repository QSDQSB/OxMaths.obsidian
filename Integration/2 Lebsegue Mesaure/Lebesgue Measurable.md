---
aliases: [measurable]
tags: [Integration]
---

### Definition
A subset $E$ of $\mathbb{R}$ is said to be [[Lebesgue Measurable|Lebesgue measurable]] if
$$
m^{*}(A)=m^{*}(A \cap E)+m^{*}(A \backslash E)
$$
for all subsets $A$ of $\mathbb{R} .$ Here, $A \backslash E=A \cap(\mathbb{R} \backslash E)$.

Let $\Large\mathcal{M}_{\text {Leb }}$ be the set of all [[Lebesgue Measurable|Lebesgue measurable]] subsets of $\mathbb{R}$.

### Proposition 2.5
1. If $E$ is [[null]] then $E \in \mathcal{M}_{\text {Leb }}$.
2. If $I$ is any interval, then $I \in \mathcal{M}_{\text {Leb. }}$.
3. If $E \in \mathcal{M}_{\mathrm{Leb}}$, then $\mathbb{R} \backslash E \in \mathcal{M}_{\mathrm{Leb}} .$
4. If $E_{n} \in \mathcal{M}_{\mathrm{Leb}}$ for $n=1,2, \ldots$, then $\bigcup_{n=1}^{\infty} E_{n} \in \mathcal{M}_{\mathrm{Leb}}$.
5. If $E_{n} \in \mathcal{M}_{\mathrm{Leb}}$ for $n=1,2, \ldots$ and $E_{n} \cap E_{k}=\emptyset$ whenever $n \neq k$, then $m^{*}\left(\bigcup_{n=1}^{\infty} E_{n}\right)=$ $\sum_{n=1}^{\infty} m^{*}\left(E_{n}\right)$.

#### Corollary 2.6
All open subsets, and all closed subsets of $\mathbb{R}$, are [[Lebesgue Measurable|Lebesgue measurable]].
>Proof. Any open subset of $\mathbb{R}$ is a countable union of intervals.

---
For $E \in \mathcal{M}_{\text {Leb }}$, we shall write $m(E)$ for $m^{*}(E) .$ Then $m: \mathcal{M}_{\text {Leb }} \rightarrow[0, \infty]$ is **countably additive**.