For a set $\Omega$, we let $\mathscr{P}(\Omega)$ be the power set of $\Omega$, i.e., the set of all subsets of $\Omega$.
## Definition
Let $\Omega$ be a set and let $\mathscr{A} \subseteq \mathscr{P}(\Omega)$ be a collection of subsets of $\Omega$.
1. We say that $\mathscr{A}$ is an [[algebra]] if $\emptyset \in \mathscr{A}$ and for all $A, B \in \mathscr{A}, A^{\mathrm{c}}=\Omega \backslash A \in \mathscr{A}$ and $A \cup B \in \mathscr{A}$.
2. We say that $\mathscr{A}$ is a [[σ-algebra]] (or a $\sigma$-field) if $\emptyset \in \mathscr{A}, A \in \mathscr{A}$ implies $A^{\mathrm{c}} \in \mathscr{A}$, and for all sequences $\left(A_n\right)_{n \geqslant 1}$ of elements of $\mathscr{A}, \bigcup_{n=1}^{\infty} A_n \in \mathscr{A}$.

```ad-note
Since intersections can be built up from complements and unions, an algebra is a collections of sets which is closed under finite set operations. A $\sigma$-algebra is a collection of sets which is closed under countable set operations.
```
## Lemma 1.3
Let I be an index set and $\left\{\mathscr{F}_i: i \in I\right\}$ a collection of $\sigma$-algebras. Then
$$
\mathscr{F}:=\bigcap_{i \in I} \mathscr{F}_i=\left\{A \subseteq \Omega: A \in \mathscr{F}_i \text { for all } i \in I\right\}
$$
is a $\sigma$-algebra.