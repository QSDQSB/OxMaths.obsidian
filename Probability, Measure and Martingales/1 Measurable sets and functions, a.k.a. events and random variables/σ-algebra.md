---
aliases: [σ-algebras]
tags: [Integration, PMM]
---
## Definitions
### Definition (Integration)
Let $\Omega$ be any set, and $\mathcal{F} \subseteq \mathcal{P}(\Omega) .$ We say that $\mathcal{F}$ is a [[σ-algebra]] (or $\sigma$-field ) on $\Omega$ if:
1. $\emptyset \in \mathcal{F}$,
2. If $E \in \mathcal{F}$, then $\Omega \backslash E \in \mathcal{F}$,
3. If $E_{n} \in \mathcal{F}$ for $n=1,2, \ldots$, then $\bigcup_{n=1}^{\infty} E_{n} \in \mathcal{F} .$

Then $(\Omega, \mathcal{F})$ is a [[Lebesgue Measurable]] space, and sets in $\mathcal{F}$ are $\mathcal{F}$-measurable. As before, $\bigcap E_{n} \in \mathcal{F}$ if $E_{n} \in \mathcal{F}$ for $n=1,2, \ldots$.
### Definition (PMM)
![[Algebra#^definition-sigma-algebra]]

### Lemma 1.3
Let $I$ be an index set and $\left\{\mathscr{F}_i: i \in I\right\}$ a collection of $\sigma$-algebras. Then
$$
\mathscr{F}:=\bigcap_{i \in I} \mathscr{F}_i=\left\{A \subseteq \Omega: A \in \mathscr{F}_i \text { for all } i \in I\right\}
$$
is a [[σ-algebra]].

![[λ-system#Lemma 1.11]]