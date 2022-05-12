## Trace
#LA 
### Definition
For $A=\left(a_{i j}\right) \in M_{n}(\mathbb{R})$, the [[trace]] $\operatorname{tr}(A)$ is defined to the sum $\sum_{i=1}^{n} a_{i i}$ of the diagonal entries.

$$\operatorname{tr}(A B)=\sum_{i}(A B)_{i, i}=\sum_{i, j} A_{i, j} B_{i, j}=\operatorname{tr}(B A)\text{ for }A, B \in M_{n}(\mathbb{R}).$$
For $T: V \rightarrow V$ a linear transformation the [[trace]] $\operatorname{tr}(T)$ is defined to be $\operatorname{tr}(A)$ where $A$ is any matrix for $T$.

That this is well-defined follows since (using notation from the proof of Proposition 1.16) we have
$$
\operatorname{tr}\left(P^{-1} A P\right)=\operatorname{tr}\left(P^{-1}(A P)\right)=\operatorname{tr}\left((A P) P^{-1}\right)=\operatorname{tr}\left(A\left(P P^{-1}\right)\right)=\operatorname{tr}(A)
$$
### Corollary 2.10
Let $A \in M_{n}(\mathbb{C})$ have eigenvalues $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n} \in \mathbb{C}$ (not necessarily distinct).
Then $\operatorname{tr}(A)=\lambda_{1}+\lambda_{2}+\cdots+\lambda_{n}$ and $\operatorname{det}(A)=\lambda_{1} \cdots \lambda_{n}$ (and likewise for transformations $\left.T\right)$.
Proof. Over $\mathbb{C}$ we have $\chi_{A}(x)=\prod_{i=1}^{n}\left(\lambda_{i}-x\right)=(-1)^{n} \prod_{i=1}^{n}\left(x-\lambda_{i}\right)$ and
$$
\prod_{i=1}^{n}\left(x-\lambda_{i}\right)=x^{n}-\sum_{i=1}^{n} \lambda_{i} x^{n-1}+\cdots+(-1)^{n} \prod_{i=1}^{n} \lambda_{i}
$$