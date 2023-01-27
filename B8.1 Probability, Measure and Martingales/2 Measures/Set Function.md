---
aliases: [countably additive, σ-additive]
tags: [PMM]
---
## Definition
> [!definition] Set Function
> Let $\mathscr{A}$ be a collection of subsets of $\Omega$ containing the empty set $\emptyset$. A set function on $\mathscr{A}$ is a function $\mu: \mathscr{A} \rightarrow[0, \infty]$ with $\mu(\emptyset)=0$. We say that $\mu$ is [[Set Function|countably additive]], or [[Set Function|σ-additive]], if for all sequences $\left(A_n\right)$ of disjoint sets in $\mathscr{A}$ with $\bigcup_{n=1}^{\infty} A_n \in \mathscr{A}$
> $
> \mu\left(\bigcup_{n=1}^{\infty} A_n\right)=\sum_{n=1}^{\infty} \mu\left(A_n\right)
> $
## Measure Space
![[Measure Space#^Definition-PMM]]

## Proposition 2.3
Let $(\Omega, \mathscr{F}, \mu)$ be a measurable space and $A, B, A_n, B_n \in \mathscr{F}, n \geqslant 1$. Then
(i) $A \cap B=\emptyset \Longrightarrow \mu(A \cup B)=\mu(A)+\mu(B)$
(additive)
(ii) $A \subseteq B \Longrightarrow \mu(A) \leqslant \mu(B)$
(increasing)
(iii) $\mu(A \cup B)+\mu(A \cap B)=\mu(A)+\mu(B)$
(iv) $A_n \uparrow A$, then $\mu\left(A_n\right) \uparrow \mu(A)$ as $n \rightarrow \infty$
(continuous from below)
(v) $B_n \downarrow B, \mu\left(B_k\right)<\infty$ for some $k \in \mathbb{N}$, then $\mu\left(B_n\right) \downarrow \mu(B)$ as $n \rightarrow \infty$
(continuous from above)
(vi) $\mu\left(\bigcup_{n \geqslant 1} A_n\right) \leqslant \sum_{n \geqslant 1} \mu\left(A_n\right)$
$(\sigma$-subadditive)
### Lemma 2.4
Let $\mu: \mathscr{A} \rightarrow[0, \infty)$ be an additive set function on an algebra $\mathscr{A}$ taking only finite values. Then $\mu$ is [[Set Function|countably additive]] iff for every sequence $\left(A_n\right)$ of sets in $\mathscr{A}$ with $A_n \downarrow \emptyset$ we have $\mu\left(A_n\right) \rightarrow 0$.