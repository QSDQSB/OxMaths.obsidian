---
aliases: [stochastic matrix]
---
## Transition Matrix
#Probability 

The Markov **transition matrix** $P=\left(p_{i j}\right)_{i, j \in I}$.

---
$P$ is a square (maybe infinite) matrix, whose rows and columns are indexed by $I . P$ is a [[stochastic matrix]] which means that all its entries are non-negative and every row sums to 1 . Equivalently, every row of $P$ is a probability distribution. The $i$ th row of $P$ is the distribution of $X_{n+1}$ given $X_{n}=i$.

---
Every Markov transition matrix has 1 as an [[eigenvalue]].

---
`here a different notation is used, where the transition matrix is taken by its transpose.`
### Stochastic Matrix
Lets call a vector with non-negative entries $p_{k}$ for which all the $p_{k}$ add up to 1 a ***stochastic vector***. For a [[Transition matrix|stochastic matrix]], every column is a stochastic vector.

#### Theorem: Invariance of stochasticity under stochastic matrix
>If $p$ is a stochastic vector and $A$ is a stochastic matrix, then $A p$ is a stochastic vector.

##### Proof
Let $v_{1}, . .,, v_{n}$ be the column vectors of $A$. Then
$$
A p=\left[\begin{array}{c}
p_{1} \\
p_{2} \\
\ldots \\
p_{n}
\end{array}\right]=p_{1} v_{1}+\ldots+v_{n} v_{n}
$$
If we sum this up we get $p_{1}+p_{2}+\ldots+p_{n}=1$

#### Eigenvalue of Markov matrices
>A [[Transition matrix]] $A$ always has an [[eigenvalue]] 1 . All other eigenvalues are in absolute value smaller or equal to 1 .

##### Proof
For the transpose matrix $A^{T}$, the sum of the row vectors is equal to $1 .$ The matrix $A^{T}$ therefore has the eigenvector
$$
\left[\begin{array}{c}
1 \\
1 \\
\cdots \\
1
\end{array}\right]
$$
Because $A$ and $A^{T}$ have the same determinant also $A-\lambda I_{n}$ and $A^{T}-\lambda I_{n}$ have the same determinant so that the eigenvalues of $A$ and $A^{T}$ are the same. With $A^{T}$ having an eigenvalue 1 also $A$ has an eigenvalue 1.

Assume now that $v$ is an eigenvector with an eigenvalue $|\lambda|>1$. Then $A^{n} v=|\lambda|^{n} v$ has exponentially growing length for $n \rightarrow \infty$. This implies that there is for large $n$ one coefficient $\left[A^{n}\right]_{i j}$ which is larger than $1 .$ But $A^{n}$ is a stochastic matrix (see homework) and has all entries $\leq 1 .$ The assumption of an eigenvalue larger than 1 can not be valid.

```ad-example
$$
A=\left[\begin{array}{ll}
0 & 0 \\
1 & 1
\end{array}\right]
$$
shows that a Markov matrix can have zero eigenvalues and determinant.

---
$$
A=\left[\begin{array}{ll}
0 & 1 \\
1 & 0
\end{array}\right]
$$
shows that a Markov matrix can have negative eigenvalues. and determinant.

---
$$
A=\left[\begin{array}{ll}
1 & 0 \\
0 & 1
\end{array}\right]
$$
shows that a Markov matrix can have several eigenvalues 1 .

---
If all entries are positive and $A$ is a $2 \times 2$ Markov matrix, then there is only one eigenvalue 1 and one eigenvalue smaller than $1 .$
$$
A=\left[\begin{array}{cc}
a & b \\
1-a & 1-b
\end{array}\right]
$$
Proof: we have seen that there is one eigenvalue 1 because $A^{T}$ has $[1,1]^{T}$ as an eigenvector. The trace of $A$ is $1+a-b$ which is smaller than 2 . Because the trace is the sum of the eigenvalues, the second eigenvalue is smaller than $1 .$

---
$$
A=\left[\begin{array}{lll}
0 & 1 & 0 \\
0 & 0 & 1 \\
1 & 0 & 0
\end{array}\right]
$$
shows that a Markov matrix can have complex eigenvalues and that Markov matrices can be orthogonal.
```
^Examples