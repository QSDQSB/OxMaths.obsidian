---
aliases: [permutation group]
---
## Permutation
#Groups 
### Definition
A [[Permutation]] of $S$ is a [[bijection]] $S\to S$. The set of permutations of $S$ is written $\operatorname{Sym}(s)$.
Given a positive integer $n$, we write $S_n$ for $\operatorname{Sym}({1,2,\ldots,n})$.
>The convention is that for $\sigma, \tau \in S_{n}$ and $k \in$ $\{1,2, \ldots, n\}$, we write $k \sigma$ for $\sigma(k)$ and $k \sigma \tau$ for $\tau(\sigma(k))$. That is, we *write permutations on the right*.

### Theorem 7
1) $\operatorname{Sym}(S)$ is a group under composition, called the symmetry group of $S$.
2) If $|S| \geq 3$, then $\operatorname{Sym}(S)$ is non-[[Abelian]].
3) $\left|S_{n}\right|=n !$.

#### Proof
(ii) Let $x_{1}, x_{2}, x_{3}$ be three distinct elements of $S$.
We seek to find two elements of $\operatorname{Sym}(S)$ that don't commute.
Define
$$
\begin{aligned}
f: & x_{1} \mapsto x_{2} \\
x_{2} & \mapsto x_{1}
\end{aligned}
$$
$x \mapsto x$ for other $x$
and
$$
\begin{aligned}
g: & x_{2}  \mapsto x_{3} \\
& x_{3}  \mapsto x_{2} \\
& x  \mapsto x \text { for other } x 
\end{aligned}
$$
Then $f, g \in \operatorname{Sym}(S)$
and $x_{1} g f=x_{1} f=x_{2}$ while $x_{1} f g=x_{2} g=x_{3}$
so $f g \neq g f$.
(iii) To specify $f \in S_{n}$, we say what $f$ does to each of $1,2, \ldots, n$.
There are $n$ possibilities for $1 f$,
and $f$ is injective so there are $n-1$ possibilities for $2 f$, and so on.
This gives $n !$ possibilities for $f$.

### Proposition 8
Let $\alpha=\left(a_{1} \ldots a_{k}\right)$ and $\beta=\left(b_{1} \ldots b_{l}\right)$ be [[Disjoint]] cycles. Then $\alpha$ and $\beta$ **[commute](Communative)**.

### [Theorem 9](Disjoint.md#Theorem%209)
Every permutation in $S_n$ can be written as a product of disjoint cycles. Moreover, this product is unique up to cycling elements without cycles and permuting the order of the cycles.

### Definition: Cycle Type
For a given [[Permutation]] $\sigma\in S_n$, [[Disjoint#Theorem 9]] shows that the lengths of the cycles of $\sigma$ (written as a product of disjoint cycles) are well-defined. This is called the **cycle type** of $\sigma$.

### Proposition 10
Let $\pi \in S_{n}$ be written as $\pi=\sigma_{1} \sigma_{2} \cdots \sigma_{k}$ as a product of [[Disjoint]] cycles. For $1 \leq i \leq k$, let $l_{i}$ be the length of $\sigma_{i}$. Then the [[Order]] of $\pi$ is $\operatorname{lcm}\left(l_{1}, \ldots, l_{k}\right)$. 
>"[[Cycle Type]] determines [[Order]]".

### Definition: Conjugate
We say that two permutations $\sigma, \tau \in S_{n}$ are [[Conjugate]] if there is some $\rho \in S_{n}$ with $\sigma=\rho^{-1} \tau \rho$.
#### Lemma 11
Let $\left(a_{1} a_{2} \ldots a_{k}\right)$ be a cycle in $S_{n}$, and take $\sigma \in S_{n} .$ Then
$$
\sigma^{-1}\left(\begin{array}{llll}
a_{1} & a_{2} & \ldots & a_{k}
\end{array}\right) \sigma=\left(\begin{array}{llll}
a_{1} \sigma & a_{2} \sigma & \ldots & a_{k} \sigma
\end{array}\right).
$$
### Lemma 11
Let $\left(a_{1} a_{2} \ldots a_{k}\right)$ be a [[Cycle]] in $S_{n}$, and take $\sigma \in S_{n} .$ Then
$$
\sigma^{-1}\left(\begin{array}{llll}
a_{1} & a_{2} & \ldots & a_{k}
\end{array}\right) \sigma=\left(\begin{array}{llll}
a_{1} \sigma & a_{2} \sigma & \ldots & a_{k} \sigma
\end{array}\right).
$$
### Theorem 12
Let $\sigma, \tau \in S_{n} .$ They are [[Conjugate]] if and only if they have the same [[Cycle Type]].

### Definition: Permutation Matrix
An $n \times n$ matrix is a [[Permutation Matrix]] if each row and each column contains exactly one entry that is 1 , with all other entries 0 .

### $\large \bf S_n / A_n \cong C_2$
![[Quotient Group#Example 221]]