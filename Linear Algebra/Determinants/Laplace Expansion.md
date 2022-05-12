## Laplace Expansion
#LA 
 Let $A=\left(a_{i j}\right) \in M_{n}(\mathbb{R})$. Write $A_{i j}$ for the $(n-1) \times(n-1)$ matrix obtained from $A$ by deleting the $i$ th row and $j$ th column. Fix $i$ with $1 \leq i \leq n .$ Define
$$
D_{n}(A):=(-1)^{i+1} a_{i 1} D_{n-1}\left(A_{i 1}\right)+\cdots+(-1)^{i+n} a_{i n} D_{n-1}\left(A_{i n}\right)
$$
Here the $D_{n-1}(\cdot)$ on the righthand side is our determinantal function on $(n-1) \times(n-1)$ matrices, already defined by induction. We show $D_{n}$ is determinantal on $n \times n$ matrices.
