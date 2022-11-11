---
aliases: [measure space, measurable space]
tag: [PMM]
---
## Definition 2.2
A [[Measure Space (PMM)|measure space]] is a triple $(\Omega, \mathscr{F}, \mu)$ where $\Omega$ is a set, $\mathscr{F}$ is a [[σ-algebra]] on $\Omega$ and $\mu: \mathscr{F} \rightarrow[0, \infty]$ is a [[Set Function|countably additive]] set function. Then $\mu$ is a [[measure]] on $(\Omega, \mathscr{F})$.

### Proposition 2.3
Let $(\Omega, \mathscr{F}, \mu)$ be a measurable space and $A, B, A_n, B_n \in \mathscr{F}, n \geqslant 1$. Then

1) $A \cap B=\emptyset \Longrightarrow \mu(A \cup B)=\mu(A)+\mu(B)$ `additive`
2) $A \subseteq B \Longrightarrow \mu(A) \leqslant \mu(B)$ `increasing`
3) $\mu(A \cup B)+\mu(A \cap B)=\mu(A)+\mu(B)$
4) $A_n \uparrow A$, then $\mu\left(A_n\right) \uparrow \mu(A)$ as $n \rightarrow \infty$ `continuous from below`
5) $B_n \downarrow B, \mu\left(B_k\right)<\infty$ for some $k \in \mathbb{N}$, then $\mu\left(B_n\right) \downarrow \mu(B)$ as $n \rightarrow \infty$ `continuous from above`
6) $\mu\left(\bigcup_{n \geqslant 1} A_n\right) \leqslant \sum_{n \geqslant 1} \mu\left(A_n\right)$ `σ-subadditive`