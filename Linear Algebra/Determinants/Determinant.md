## Determinant
#LA 
Let $M_{n}(\mathbb{R})$ be the set of $n \times n$ matrices with real entries. For $A \in M_{n}(\mathbb{R})$ it will be convenien this section and occasionally elsewhere to write
$$
A=\left[\mathbf{a}_{1}, \cdots, \mathbf{a}_{n}\right]
$$
where $\mathbf{a}_{i}(1 \leq i \leq n)$ are the columns.
### Definition
A mapping $D: M_{n}(\mathbb{R}) \rightarrow \mathbb{R}$ is **determinantal** if it is
- **Multilinear** in the columns:
$D\left[\cdots, \mathbf{b}_{i}+\mathbf{c}_{i}, \cdots\right]=D\left[\cdots, \mathbf{b}_{i}, \cdots\right]+D\left[\cdots, \mathbf{c}_{i}, \cdots\right]$
$D\left[\cdots, \lambda \mathbf{a}_{i}, \cdots\right] \quad=\lambda D\left[\cdots, \mathbf{a}_{i}, \cdots\right]$ for $\lambda \in \mathbb{R}.$
- **Alternating**:
$D\left[\cdots, \mathbf{a}_{i}, \mathbf{a}_{i+1}, \cdots\right]=0$ when $\mathbf{a}_{i}=\mathbf{a}_{i+1}$
- and $D\left(I_{n}\right)=1$ for $I_{n}$ the $n \times n$ *identity* matrix.

### Proposition 1.2
Let $D: M_{n}(\mathbb{R}) \rightarrow \mathbb{R}$ be a determinantal map. Then
1) $D\left[\cdots, \mathbf{a}_{i}, \mathbf{a}_{i+1} \cdots\right]=-D\left[\cdots, \mathbf{a}_{i+1}, \mathbf{a}_{i}, \cdots\right]$.
2) $D\left[\cdots, \mathbf{a}_{i}, \cdots, \mathbf{a}_{j} \cdots\right]=0$ when $\mathbf{a}_{i}=\mathbf{a}_{j}, i \neq j$.
3) $\quad D\left[\cdots, \mathbf{a}_{i}, \cdots, \mathbf{a}_{j} \cdots\right]=-D\left[\cdots, \mathbf{a}_{j}, \cdots, \mathbf{a}_{i}, \cdots\right]$ when $i \neq j$.
#### Proof
#TODO 

### Theorem 1.3
> A [determinantal](#Definition) map $D$ exists.

#### Proof 
#TODO #Induction
We prove this by induction on $n$. For $n=1$ define $D((\lambda)):=\lambda$, which has the right properties.

Assume we have proved the existence of a determinantal map $D_{n-1}$ for dimension $n-1$ where $n \geq 2$. We want to prove the existence of a determinantal map $D_{n}$ for dimension $n$. Let $A=\left(a_{i j}\right) \in M_{n}(\mathbb{R})$. Write $A_{i j}$ for the $(n-1) \times(n-1)$ matrix obtained from $A$ by deleting the $i$ th row and $j$ th column. Fix $i$ with $1 \leq i \leq n .$ Define
$$
D_{n}(A):=(-1)^{i+1} a_{i 1} D_{n-1}\left(A_{i 1}\right)+\cdots+(-1)^{i+n} a_{i n} D_{n-1}\left(A_{i n}\right)
$$
Here the $D_{n-1}(\cdot)$ on the righthand side is our determinantal function on $(n-1) \times(n-1)$ matrices, already defined by induction. We show $D_{n}$ is determinantal on $n \times n$ matrices.
View $D_{n}$ as a function of the $k$ th column, and consider any term
$$
(-1)^{i+j} a_{i j} D_{n-1}\left(A_{i j}\right)
$$
If $j \neq k$ then $a_{i j}$ does not depend on the $k$ th column and $D_{n-1}\left(A_{i j}\right)$ depends linearly on the $k$ th column. If $j=k$ the $a_{i j}$ depends linearly on the $k$ th column, and $D_{n-1}\left(A_{i j}\right)$ does not depend on the $k$ th column. In any case our term depends linearly on the $k$ th column. Since $D_{n}(A)$ is the sum of such terms, it depends linearly on the $k$ th column and so is multilinear.
### Definition: Permutation & Transposition
Let $n \in \mathbb{N}$. A [[permutation]] $\sigma$ is a bijective map from the set $\{1,2, \cdots, n\}$ itself. The set of all such permutations is denoted $S_{n}$. An element $\sigma \in S_{n}$ which switches two elements $1 \leq i<j \leq n$ and fixes the others is called a **transposition**.
- From *[[Groups and Group Actions/3 Permutations/Disjoint#Theorem 9]]:*
>every [[permutation]] can be written (*not uniquely*) as a sequence of transpositions.

### Sign of $\sigma$
So let $D: M_{n}(\mathbb{R}) \rightarrow \mathbb{R}$ be some determinantal map. For $A=\left(a_{i j}\right)=\left[\mathbf{a}_{1}, \cdots, \mathbf{a}_{n}\right] \in M_{n}(\mathbb{R})$ write
$$
\begin{array}{ccc}
\mathbf{a}_{1} & = & a_{11} \mathbf{e}_{1}+\cdots a_{n 1} \mathbf{e}_{n} \\
\vdots & \vdots & \vdots \\
\mathbf{a}_{n} & = & a_{1 n} \mathbf{e}_{1}+\cdots a_{n n} \mathbf{e}_{n}
\end{array}
$$
where $\mathbf{e}_{i}$ is the $n \times 1$ vector with 1 in the $i$ th position and zero elsewhere.
Then by multilinearity and using the second alternating property in [[#Proposition 1.2]] we have
$$
D\left[\mathbf{a}_{1}, \cdots, \mathbf{a}_{n}\right]=\sum_{\sigma} a_{\sigma(1), 1} \cdots a_{\sigma(n), n} D\left[\mathbf{e}_{\sigma(1)}, \cdots, \mathbf{e}_{\sigma(n)}\right]
$$
Here the sum is over $S_{n}$ - determinants on matrices with two equal columns vanish. Now write $\sigma$ as a product of $t$, say, transpositions and "unshuffle" the columns in $\left[\mathbf{e}_{\sigma(1)}, \cdots, \mathbf{e}_{\sigma(n)}\right]$ keeping track of the effect on $D$ using the third alternating property in [[#Proposition 1.2]]. We find
$$
D\left[\mathbf{e}_{\sigma(1)}, \cdots, \mathbf{e}_{\sigma(n)}\right]=(-1)^{t} D\left[\mathbf{e}_{1}, \cdots, \mathbf{e}_{n}\right]=(-1)^{t} D\left(I_{n}\right)=(-1)^{t} .
$$
Observe that the value $(-1)^{t}$ must be independent of how one wrote $\sigma$ as a product of transpositions:
it is called the **sign** of $\sigma$ and written $\color{yellow}\operatorname{sign}(\sigma)$.
So we find
$$
D\left[\mathbf{a}_{1}, \cdots, \mathbf{a}_{n}\right]=\sum_{\sigma \in S_{n}} \operatorname{sign}(\sigma) a_{\sigma(1), 1} \cdots a_{\sigma(n), n}
$$
But this equation gives $D$ explicitly as a multivariable polynomial in the entries $a_{i j}$, and so shows $D$ is **unique**. We have proved:
### Theorem 1.6
For each $n \in \mathbb{N}$ there exists a unique determinantal function $D: M_{n}(\mathbb{R}) \rightarrow \mathbb{R}$ and it is given explicitly by the expansion (2). We write this unique function as $\operatorname{det}(\cdot)$ or sometimes $|\cdot|$.
Note that det satisfies equation (1), since it is the unique determinantal function - we say here we are computing det by expanding along the $i$ th row ([[Laplace Expansion]]).

### Lemma 1.8
For $\sigma \in S_{n}$, we have $\operatorname{sign}(\sigma)=\operatorname{sign}\left(\sigma^{-1}\right) .$ (Note $\sigma$ is a bijection so has an inverse.)
#### Proof
Follows since $\sigma \circ \sigma^{-1}$ is the identify map, which can be written as a sequence of 0 transpositions, an even number.

### Proposition 1.9
>$\operatorname{det}(A)=\operatorname{det}\left(A^{T}\right)$.

#### Proof
Follows from the expansion formula (2), [[#Lemma 1.8]], and the fact that as $\sigma$ varies over $S_{n}$ so does $\sigma^{-1}$ :
$$
\operatorname{det}\left(A^{T}\right)=\sum_{\sigma \in S_{n}} \operatorname{sign}(\sigma) a_{1, \sigma(1)} \cdots a_{n, \sigma(n)}=\sum_{\sigma \in S_{n}} \operatorname{sign}(\sigma) a_{\sigma^{-1}(1), 1} \cdots a_{\sigma^{-1}(n), n}
$$
$$
\sum_{\sigma^{-1} \in S_{n}} \operatorname{sign}\left(\sigma^{-1}\right) a_{\sigma^{-1}(1), 1} \cdots a_{\sigma^{-1}(n), n}=\operatorname{det}(A)
$$

### Corollary 1.10
The map det: $M_{n}(\mathbb{R}) \rightarrow \mathbb{R}$ is multilinear and alternating in the rows of a matrix.
### Corollary 1.11
One has
$$
\operatorname{det}(A)=\sum_{\sigma \in S_{n}} \operatorname{sign}(\sigma) a_{1, \sigma(1)} \cdots a_{n, \sigma(n)}
$$

### Theorem 1.12
Let $A, B \in M_{n}(\mathbb{R})$. Then
(i) $\operatorname{det}(A) \neq 0 \Leftrightarrow A$ is [[invertible]].
(ii) $\operatorname{det}(A B)=\operatorname{det}(A) \operatorname{det}(B)$.
