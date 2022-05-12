## Partition
#Groups 
### Definition
Let $S$ be a set, let $I$ be an index set. For $i \in I$, let $S_{i}$ be a subset of $S$. We say that the $S_{i}$ (for $\left.i \in I\right)$ [[partition]] $S$ if
- $S_{i} \neq \emptyset$ for all $i \in I$ (**non-empty**);
- $\bigcup_{i \in I} S_{i}=S$ (**cover**);
- $S_{i} \cap S_{j}=\emptyset$ for $i \neq j$ (**pairwise disjoint**).

### Theorem 27
>Let $\sim$ be an [[equivalence relation]] on a set $S$. The [equivalence classes](Equivalence%20Class) of $\sim$ [[partition]] $S$.
#### Proof
##### Non-empty
For any $a \in S$, we have $a \in[a]$ as $\sim$ is reflexive, so each equivalence class is non-empty.
##### Cover
Since $a \in[a]$ for all $a \in S$, certainly $\bigcup[a]=S$.
##### Pairwise Disjoint
Take $a, b \in S .$  (Aim: $[a]=[b]$ or $[a] \cap[b]=\emptyset$ )
Suppose $c \in[a] \cap[b] .$ (Aim: $[a]=[b]$)
Then $a \sim c$ and $b \sim c$, so by symmetry $c \sim b$, so by transitivity $a \sim b$. If $d \in[b]$, then $b \sim d$, so by transitivity $a \sim d$, so $d \in[a] .$ 
So $[b] \subseteq[a]$. Similarly, $[a] \subseteq[b]$.
So either $[a] \cap[b]=\emptyset$ or $[a]=[b]$.

> Given an [[equivalence relation]] on a set $S$, we obtain a [[partition]] of $S$.

### Theorem 28
>Let $P$ be a [[partition]] of a set $S$. For $a \in S$, write $P_{a}$ for the **unique** part in $P$ with $a \in P_{a}$. Define a [relation](Equivalence%20Relation) $\sim$ on $S$ by $a \sim b$ if and only if $b \in P_{a} .$ Then $\sim$ is an [[equivalence relation]].
#### Proof
Take $a, b, c \in S$.
- **reflexive**: we have $a \in P_{a}$ so $a \sim a$.
- **symmetric**: if $a \sim b$ then $b \in P_{a}$, so $b \in P_{a} \cap P_{b}$, so $P_{a} \cap P_{b} \neq \emptyset$, so $P_{a}=P_{b}$, so $a \in P_{b}$, so $b \sim a$.
- **transitive**: if $a \sim b$ and $b \sim c$, then $b \in P_{a} \cap P_{b}$ and so $P_{a}=P_{b}$, but also $c \in P_{b}$, so $c \in P_{a}$ so $a \sim c$.

### Corollary 29
>There is a [[bijection]] between [equivalence relations](Equivalence%20Relation) on a set $S$ and [partitions](Partition) of that same set $S$.
***Proof***. [[#Theorem 27]] gives a map in one direction, and a quick check shows that [[#Theorem 28]] gives the inverse.

[[Binary Operations on Zn]]