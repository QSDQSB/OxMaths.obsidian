---
aliases: [d-system, Dynkin class]
tag: [PMM]
---

## Definition
A collection of sets $\mathscr{M}$ is called a [[λ-system]] if
- $\Omega \in \mathscr{M}$,
- if $A, B \in \mathscr{M}$ with $A \subseteq B$ then $B \backslash A \in \mathscr{M}$,
- if $\left\{A_n\right\}_{n \geqslant 1} \subseteq \mathscr{M}$ with $A_n \subseteq A_{n+1}$ for all $n \geqslant 1$ then $\bigcup_{n \geqslant 1} A_n \in \mathscr{M}$.

## Lemma 1.11
A collection of sets $\mathscr{F}$ is a $\sigma$-algebra if and only if $\mathscr{F}$ is both a [[π-system]] and a [[λ-system]].

### Proof
Clearly a $\sigma$-algebra is both a $\pi$-system and a $\lambda$-system so it remains to establish the converse. Let $\mathscr{F}$ be both a $\pi$-system and a $\lambda$-system. Let $A, B \in \mathscr{F}$. Then, since $\Omega \in \mathscr{F}$, we also have $A^{\mathrm{c}}=\Omega \backslash A \in \mathscr{F}$ and further
$$
A \cup B=\Omega \backslash\left(A^{\mathrm{c}} \cap B^{\mathrm{c}}\right) \in \mathscr{F} .
$$
Finally, let $\left\{A_n\right\}_{n \geqslant 1} \subseteq \mathscr{F}$ be a sequence of sets in $\mathscr{F}$. Then
$$
\bigcup_{n \geqslant 1} A_n=\bigcup_{n \geqslant 1} \bigcup_{k=1}^n A_k \in \mathscr{F}
$$
by the properties of $\lambda$-sets as the sequence $B_n=\bigcup_{k=1}^n A_k$ is increasing.


## π−λ systems Lemma
Let $\mathscr{M}$ be a $\lambda$-system and $\mathscr{A}$ be a $\pi$-system. Then,
$$
\mathscr{A} \subseteq \mathscr{M} \Longrightarrow \sigma(\mathscr{A}) \subseteq \mathscr{M} .
$$
### Proof
Let $\lambda(\mathscr{A})$ denote the intersection of all $\lambda$-systems containing $\mathscr{A}$. Then, in analogy to Lemma $1.3, \lambda(\mathscr{A})$ itself is a $\lambda$-system, it is the smallest $\lambda$-system containing $\mathscr{A}$. In particular, $\lambda(\mathscr{A}) \subseteq \mathscr{M}$. Naturally, a $\sigma$-algebra is by definition a $\lambda$-system. If we show that $\lambda(\mathscr{A})$ is itself a $\sigma$-algebra it will imply that $\lambda(\mathscr{A})=\sigma(\mathscr{A})$ and the proof will be complete. By [[#Lemma 1.11]], it suffices to show that $\lambda(\mathscr{A})$ is a $\pi$-system.

Let $\mathscr{C}=\{A \in \lambda(\mathscr{A}): A \cap C \in \lambda(\mathscr{A}) \forall C \in \mathscr{A}\}$. We first show that $\mathscr{C}$ is a $\lambda$-system. Clearly, $\Omega \in \mathscr{C}$. Let $A, B \in \mathscr{C}$ with $A \subseteq B$. Then $(B \backslash A) \cap C=B \cap C \backslash A \cap C \in \lambda(\mathscr{A})$ for all $C \in \mathscr{A}$ so that $B \backslash A \in \mathscr{C}$. Finally, if $A_n$ is an increasing sequence in $\mathscr{C}$ and $A=\bigcup_{n \geqslant 1} A_n$ then $A \cap C=\bigcup_{n \geqslant 1} A_n \cap C \in \lambda(\mathscr{A})$ for all $C \in \mathscr{A}$ and hence $A \in \mathscr{C}$. By definition, $\mathscr{C} \subseteq \lambda(\mathscr{A})$ and, since $\mathscr{A}$ is a $\pi$-system, also $\mathscr{A} \subseteq \mathscr{C}$. It follows that $\mathscr{C}=\lambda(\mathscr{A})$.

Now let $\mathscr{D}=\{A \in \lambda(\mathscr{A}): A \cap C \in \lambda(\mathscr{A}) \forall C \in \lambda(\mathscr{A})\}$. As above, we can easily show that $\mathscr{D}$ inherits the $\lambda$-system structure from $\lambda(\mathscr{A})$. Further, $\mathscr{C}=\lambda(\mathscr{A})$ above implies that $\mathscr{A} \subseteq \mathscr{D}$. Minimality of $\lambda(\mathscr{A})$ again implies that $\mathscr{D}=\lambda(\mathscr{A})$ and hence $\lambda(\mathscr{A})$ is a $\pi$-system.

>If two measures coincide on a π-system then they coincide on the σ-algebra it generates.

