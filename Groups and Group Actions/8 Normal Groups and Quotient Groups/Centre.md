## Centre
#Groups 
### Definition
Let $G$ be a group. The [[centre]] of $G$, denoted $Z(G)$, is the set
$$
Z(G)=\{g \in G: g h=h g \text { for all } h \in G\}.
$$
### Proposition 212
Let $G$ be a group. Then [$Z(G) \triangleleft G$](Normal%20Subgroup).
#### Proof
==non-empty==	Certainly $e h=h=$ he for all $h \in G$ and so $e \in Z(G)$.
==closed==	If $g_{1}, g_{2} \in Z(G)$ and $h \in G$ then $\left(g_{1} g_{2}\right) h=g_{1} h g_{2}=h\left(g_{1} g_{2}\right)$ and so $g_{1} g_{2} \in Z(G)$.
==inverse==	If $g \in Z(G)$ and $h \in G$ then $g h=h g \Longrightarrow h g^{-1}=g^{-1} h$ and so $g^{-1} \in Z(G)$.
==normal==	Finally if $g \in Z(G)$ and $h \in G$, then $h^{-1} g h=h^{-1} h g=g \in Z(G)$.
#### Remark 213
>Note that $g \in Z(G)$ if and only if the **[[conjugacy class]]** of $g$ is $\{g\}$. #Q 

### Example 214
(a) If $n \geqslant 3$ then $Z\left(S_{n}\right)=\{e\}$.
(b) The [[centre]] of $G L(n, F)$ is $\left\{\lambda I_{n}: \lambda \neq 0\right\}$.
(c) The [[centre]] of
[$$D_{2 n}=\left\langle r, s: r^{n}=s^{2}=e, r^{-1} s=sr\right\rangle$$](Dihedral%20Group)
is $\{e\}$ when $n$ is odd and $\left\{e, r^{n / 2}\right\}$ when $n$ is even.

### Centre of Dihedral Group
```ad-description
`Note that here we use a different notation of Dn (instead of D2n)`
Let $n \in \mathbb{N}$ be a natural number such that $n \geq 3$.
Let $D_{n}$ be the dihedral group of order $2 n$, given by:
$$
D_{n}=\left\langle\alpha, \beta: \alpha^{n}=\beta^{2}=e, \beta \alpha \beta=\alpha^{-1}\right\rangle
$$
Let $Z\left(D_{n}\right)$ denote the center of $D_{n}$.
Then:
$$
Z\left(D_{n}\right)=\left\{\begin{array}{ll}
e & : n \text { odd } \\
\left\{e, \alpha^{n / 2}\right\} & : n \text { even }
\end{array}\right.
$$
https://proofwiki.org/wiki/Center_of_Dihedral_Group
```


**Solution**. (a) and (b) will not be proved here. They are tractable but non-trivial exercises. #TODO 
(c) follows from Exercise Sheet 5, Question 3 and [[#Remark 213]].

![[Centralizer]]
![[Orbit-Stabilizer Theorem#Proposition 282]]