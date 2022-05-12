## Equivalence Relation
#Groups 
### Definition
Let $\sim$ be a relation on a set $S$. We say that $\sim$ is an [[equivalence relation]] if
- $\sim$ is reflexive (that is, $a \sim a$ for all $a \in S)$.
- $\sim$ is symmetric (that is, if $a \sim b$ then $b \sim a)$.
- $\sim$ is transitive (that is, if $a \sim b$ and $b \sim c$, then $a \sim c)$.

#### Example
- $S=G L_{n}(\mathbb{R})$, with $A \sim B$ if and only if there is $P \in$ $G L_{n}(\mathbb{R})$ with $A=P^{-1} B P$.
- $S$ is a group, with $x \sim y$ if and only if $x=y$ or $x=y^{-1}$.

### Proposition 25
Let $n \geq 2$ be an integer. Define a relation $\sim$ on $\mathbb{Z}$ by $a \sim b$ if and only if $a-b$ is a multiple of $n$. Then $\sim$ is an [[equivalence relation]].
#### Proof
Take $a, b, c \in \mathbb{Z}$.
- reflexive: $a-a$ is a multiple of $n$.
- symmetric: if $n$ divides $a-b$ then $n$ divides $b-a$.
- transitive: if $n$ divides $a-b$ and $b-c$, say $a-b=k n$ and $b-c=\ln$ where $k, l \in \mathbb{Z}$, then $a-c=(a-b)+(b-c)=(k+l) n$ so $n$ divides $a-c$.

### Definition: Congruence Modulo
The equivalence relation in [[#Proposition 25]] is called **congruence modulo n**.

### Definition: Conjugacy
> Let $G$ be a group. We say that $g_{1}, g_{2} \in G$ are [conjugate](Conjugacy) if there is $h \in G$ with $g_{1}=h^{-1} g_{2} h$. [[Conjugacy]] in $G$ is an [[equivalence relation]].

### Definition: Equivalence Class
Let $\sim$ be an [[equivalence relation]] on a set $S$. For $a \in S$, we define the [[equivalence class]] of $a$, written $[a]$ or $\bar{a}$, to be the set $\{b \in S: a \sim b\}$. "all the things related to $a$."

### Lemma 160
Let $G$ be a group. Then the relation $\sim$ on $G$ defined by
$$
x \sim y \Longleftrightarrow x=y \text { or } x=y^{-1}
$$
is an [[equivalence relation]]. The equivalence classes are generally of the form $\bar{x}=\left\{x, x^{-1}\right\}$ unless $x$ is self-inverse in which case $\bar{x}=\{x\}$.
#### Proof
==Reflexive==	Of course $\forall x\in G,x=x$, so $x\sim x$.
==Symmetric==	If $x\sim y$, then either $x=y$, or $x=y^{-1}$, then $x^{-1}xy=x^{-1}y^{-1}y\Rightarrow y=x^{-1}$. Either way $y\sim x$.
==Transitive==	If $x\sim y$, $y\sim z$, then among one of four situations, each of whom can we have $x\sim z$.
>What is the equivalence class of a fixed element $x ?$ If $x \neq x^{-1}$, then the equivalence class is $[x]=\left\{x, x^{-1}\right\} .$ If $x$ is self-inverse (that is, has order 1 or 2 ), then $[x]=\{x\}$.

