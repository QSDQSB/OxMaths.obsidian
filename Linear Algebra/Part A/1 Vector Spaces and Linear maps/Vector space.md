## Vector Space
#LA 
### Definition
A [[vector space]] $V$ over a [[Field]] $\mathbb{F}$ is an [[abelian]] group $(V,+, 0)$ together with a scalar multiplication $\mathbb{F} \times V \rightarrow V$ such that for all $a, b \in \mathbb{F}, v, w \in V$ 
1) $a(v+w)=a v+a w$
2) $(a+b) v=a v+b v$
3) $(a b) v=a(b v)$
4) $1 \cdot v=v$

---
Let $V$ be a vector space over $\mathbb{F}$.

1) A set $S \subseteq V$ is [[linearly independent]] if whenever $a_{1}, \cdots, a_{n} \in \mathbb{F}$, and $s_{1}, \cdots, s_{n} \in S$
$$
a_{1} s_{1}+\cdots+a_{n} s_{n}=0 \Rightarrow a_{1}=\cdots=a_{n}=0
$$
2) A set $S \subseteq V$ is **spanning** if for all $v \in V$ there exists $a_{1}, \cdots, a_{n} \in \mathbb{F}$ and $s_{1}, \cdots, s_{n} \in S$ with
$$
v=a_{1} s_{1}+\cdots+a_{n} s_{n}
$$
3) A set $\mathcal{B} \subseteq V$ is a **basis** of $V$ if $\mathcal{B}$ is spanning and linearly independent. The size of $\mathcal{B}$ is the dimension of $V$.

---
```ad-example
- $V=\mathbb{F}[x]$ with standard basis $\left\{1, x, x^{2}, \cdots\right\}$
- Let $$V=\mathbb{R}^{\mathbb{N}}=\left\{\left(a_{1}, a_{2}, a_{3}, \cdots\right) \mid a_{i} \in \mathbb{R}\right\}$$
Then $S=\left\{e_{1}, e_{2}, \cdots\right\}$ where $e_{1}=(1,0,0, \cdots), \cdots$, is linearly independent but its span $W$ is a proper subset of $V$. 
>(What is an example of an element in $V$ but not in $W ?$ )

- Let $\operatorname{Hom}(V, W)$ be the set of linear maps from $V$ to $W$. For $a \in \mathbb{F}, v \in V$, and $S, T \in$ $\operatorname{Hom}(V, W)$ define:
$$
\begin{aligned}
(a T)(v) &:=a(T(v)) \\
(T+S)(v) &:=T(v)+S(v)
\end{aligned}
$$
With these definitions $\operatorname{Hom}(V, W)$ is a vector space over $\mathbb{F}$.
```

![[Isomorphism#Definition Isomorphism in Linear Algebra]]