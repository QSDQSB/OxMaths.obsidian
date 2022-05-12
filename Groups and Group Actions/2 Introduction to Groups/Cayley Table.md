## Cayley Table
#Groups 
### Definition
Let $G=\left\{g_{1}, g_{2}, \ldots, g_{n}\right\}$ be a [[Finite Group]]. The Cayley table, or group table, of $G$ is a square $n \times n$ grid in which the entry in row $i$ and column $j$ is $g_{i} * g_{j}$

### Remark
$G$ is [[Abelian]] if and only if its [[Cayley Table]] is symmetrical about the $\backslash$ (top left to bottom right) diagonal.

### Proposition 6
A Cayley table is a [[Latin square]]: each element appears exactly once in each row and in each column.
#### Proof
Let $G$ be a finite group, take $g \in G$. Define
$$
\begin{aligned}
f_{g}: G & \rightarrow G \\
g^{\prime} & \mapsto g g^{\prime} .
\end{aligned}
$$
This is a bijection (its inverse is $\left.g^{\prime} \mapsto g^{-1} g^{\prime}\right)$. So the entries in the row corresponding to $g$ are precisely the elements of $G$ in some order, each appearing exactly once. Similarly for columns.e