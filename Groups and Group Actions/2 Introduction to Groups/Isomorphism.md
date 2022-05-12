---
aliases: [Isomorphism, Isomorphic]
---
## Isomorphism
> See Isomorphism in Linear Algebra: [[#Definition Isomorphism in Linear Algebra]]

#Groups 
### Definition
Let $\left(G, *_{G}\right)$ and $\left(H, *_{H}\right)$ be groups. An [[isomorphism]] between $G$ and $H$ is a bijective map $\theta: G \rightarrow H$ such that $\theta\left(g_{1} *_{G} g_{2}\right)=\theta\left(g_{1}\right) *_{H} \theta\left(g_{2}\right)$ for all $g_{1}, g_{2} \in G$.

If such an isomorphism exists, then we say that $G$ and $H$ are [[Isomorphism|Isomorphic]]. and write $G \cong H$.
```ad-example
- We write $(0, \infty)$ for the set of positive real numbers, which forms a group under multiplication.
- $\mathbb{C}^{*}:=\{z \in \mathbb{C}: z \neq 0\}$, the set of nonzero complex numbers, forms a group under multiplication.
- $S^{1}:=\{z \in \mathbb{C}:|z|=1\}$, the unit circle in the complex plane, forms a group under multiplication.
- For $n \geq 1$, we define $S O(n):=\{A \in O(n): \operatorname{det} A=1\}$ to be the [[Special Orthogonal Group]], of orthogonal matrices with determinant 1 This forms a group under matrix multiplication.
- Let $G$ be a finite group with $|G|=2 p$ where $p \geqslant 3$ is prime. Then $G$ is [[Isomorphism|Isomorphic]] to $C_{2 p}$ or $D_{2 p}$. ***[[Lagrange's Theorem#Theorem 163]]***.
```

#### Theorem 165
Let $G$ be a group with $|G|=p$, a prime. Then $G \cong C_{p}$.
> Same as [[Lagrange's Theorem#Corollary 37]]

#### Theorem 166
Let $G$ be a group with $|G|=2 p$ where $p \geqslant 3$ is prime. Then $G \cong C_{2 p}$ or $G \cong D_{2 p}$.
> Same as [[Lagrange's Theorem#Theorem 163]]

These results are sufficient to demonstrate the following:
### Theorem 167
Up to isomorphism, the groups of [[order]] $\leqslant 7$ are:
- Order $2: C_{2}$
- Order $3: C_{3}$
Order 4: $C_{4}$ or $C_{2} \times C_{2} \cong V_{4}$
- Order $5: C_{5}$
- Order $6: C_{6}$ or $S_{3} \cong D_{6}$
- Order $7: C_{7}$


### Theorem 168
Up to [[isomorphism]], the groups of [[order]] 8 are
$$
C_{8}, \quad C_{2} \times C_{4}, \quad C_{2} \times C_{2} \times C_{2}, \quad D_{8}, \quad Q_{8}
$$

#### Remark 169
We have yet to meet the fifth group $Q_{8}$ which is usually introduced via the quaternions. A [[quaternion]] might be thought of as a four-dimensional version of a complex number.

---
### Proposition 186
>Let $a \in G$, a group. [Conjugation](Conjugacy) by $a$, i.e. the map $\theta_{a}: G \rightarrow G$ given by $\theta_{a}(g)=a^{-1} g a$ is an [[isomorphism]].

**Proof**. Firstly we note $\theta_{a}(g h)=a^{-1} g h a=\left(a^{-1} g a\right)\left(a^{-1} h a\right)=\theta_{a}(g) \theta_{a}(h) .$ Secondly an easy check shows that $\theta_{a^{-1}}=\left(\theta_{a}\right)^{-1}$ and so $\theta_{a}$ is a **bijection**.

### Corollary 187
Let $G$ be a group and $g, h \in G$.
(i) If $g$ and $h$ are conjugate then $\mathrm{o}(g)=\mathrm{o}(h)$. (By [[#Proposition 186]] an isomorphism exists)
(ii) If $g$ and $h$ are conjugate then $g^{-1}$ and $h^{-1}$ are conjugate.

### First Isomorphism Theorem
[[First Isomorphism Theorem#Theorem]]

[[Orbit-Stabilizer Theorem#Proposition 283]]

---
### Definition: Isomorphism in Linear Algebra
A **bijective** linear map is called an [[isomorphism]] of [vector spaces](Vector%20space.md).

```ad-example
- The linear map $T: \mathbb{R}[x] \rightarrow \mathbb{R}[x]$ given by $f(x) \mapsto x f(x)$ is an injection; it defines an [[isomorphism]] from $\mathbb{R}[x]$ to its image $x \mathbb{R}[x]$

- The linear map $T: W \subseteq \mathbb{R}^{\mathbb{N}} \rightarrow \mathbb{R}[x]$ given by
$e_{n}=(0, \cdots, 1,0, \cdots) \mapsto x^{n-1}$ defines an isomorphism.
```

#### Theorem 1.8
The assignment $T \mapsto_{\mathcal{B}^{\prime}}[T]_{\mathcal{B}}$ is an [[isomorphism]] of vector spaces from $\operatorname{Hom}(V, W)$ to the space of $(m \times n)$-matrices over $\mathbb{F}$. It takes composition of maps to multiplication of matrices.
In particular, if $T: V \rightarrow V$ and $\mathcal{B}$ and $\mathcal{B}^{\prime}$ are two different bases with $_{\mathcal{B}}[I d]_{\mathcal{B}^{\prime}}$ the change of basis matrix then:
$$_{\mathcal{B}^{\prime}}[T]_{\mathcal{B}^{\prime}}={\mathcal{B}^{\prime}}[I d]_{\mathcal{B} \mathcal{B}}[T]_{\mathcal{B}} \mathcal{B}[I d]_{\mathcal{B}^{\prime}}$$ with $_{\mathcal{B}}[I d]_{\mathcal{B}^{\prime} \mathcal{B}^{\prime}}[I d]_{\mathcal{B}}={ }_{\mathcal{B}}[I d]_{\mathcal{B}}=I$, the identity matrix.

> When $W=V$ and $\mathcal{B}^{\prime}=\mathcal{B}$, we can reinterpret Theorem $1.8$ to say that $T \mapsto \mathcal{B}[T]_{\mathcal{B}}$ defines a [[ring isomorphism]] from $\operatorname{Hom}(V, V)$ to $M_{n}(\mathbb{F})$ where $n$ is the dimension of $V$.