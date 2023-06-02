#NumericalAnalysis 

## Pre-Multiplication of Lower-Triangular Matrix
The basic operation of Gaussian Elimination, row $i \leftarrow$ row $i+\lambda *$ row $j$, can be achieved by pre-multiplication by a special lower-triangular matrix
$$
\Large
M(i, j, \lambda)=
I+\left[\begin{array}{lll}0 & 0 & 0 \\ 0 & \lambda & 0 \\ 0 & 0 & 0\end{array}\right] \leftarrow i
$$
```note-green
⬆️lambda下面应该有个j。但是我不会加。
```


where $I$ is the identity matrix.

```ad-example
$n=4$,
$$
M(3,2, \lambda)=\left[\begin{array}{llll}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & \lambda & 1 & 0 \\
0 & 0 & 0 & 1
\end{array}\right] \text { and } M(3,2, \lambda)\left[\begin{array}{l}
a \\
b \\
c \\
d
\end{array}\right]=\left[\begin{array}{c}
a \\
b \\
\lambda b+c \\
d
\end{array}\right]
$$
```
### Lemma
If $i \neq j,(M(i, j, \lambda))^{-1}=M(i, j,-\lambda)$.

### Multiplying the Multiplier Matrices
for $n=3, A=M\left(2,1, l_{21}\right) \cdot M\left(3,1, l_{31}\right) \cdot M\left(3,2, l_{32}\right) \cdot U$, where
$$
M\left(2,1, l_{21}\right) \cdot M\left(3,1, l_{31}\right) \cdot M\left(3,2, l_{32}\right)=\left[\begin{array}{ccc}
1 & 0 & 0 \\
l_{21} & 1 & 0 \\
l_{31} & l_{32} & 1
\end{array}\right]=L=\left(L_{\text {(lower triangular) }}\right)
$$
This is true for general $n$.

```ad-theorem
title: GE can be represented by LU factorisation
For any dimension $n$, GE can be expressed as $A=L U$, where $U$ is upper triangular resulting from GE, and $L$ is unit lower triangular (lower triangular with ones on the diagonal) with $l_{i j}=$ multiplier used to create the zero in the $(i, j)$ th position.
```

```ad-algorithm
title: Gauss Elimination
1) factorize $A=L U \quad\left(\approx \frac{1}{3} n^{3}\right.$ adds $+\approx \frac{1}{3} n^{3}$ mults$)$
2) solve $A x=b$ by
	1) solving $L y=b$ (forward substitution)
	2) and then $U x=y$ (back substitution)
```
## Pivoting
GE or LU can $\color{red}\text{fail}$ if the pivot $a_{i i}=0$. For example, if
$$
A=\left[\begin{array}{ll}
0 & 1 \\
1 & 0
\end{array}\right]
$$
GE fails at the first step.

However, we are free to reorder the equations (i.e., the rows) into any order we like. For example, the equations
$$
\begin{array}{l}
0 \cdot x_{1}+1 \cdot x_{2}=1 \\
1 \cdot x_{1}+0 \cdot x_{2}=2
\end{array} \quad \text { and } \quad \begin{array}{l}
1 \cdot x_{1}+0 \cdot x_{2}=2 \\
0 \cdot x_{1}+1 \cdot x_{2}=1
\end{array}
$$
are the same, but their matrices
$$
\left[\begin{array}{ll}
0 & 1 \\
1 & 0
\end{array}\right] \text { and }\left[\begin{array}{ll}
1 & 0 \\
0 & 1
\end{array}\right]
$$
have had their rows reordered: GE fails for the first but succeeds for the second $\Longrightarrow$ better to interchange the rows and then apply GE.

### Partial pivoting
when creating the zeros in the $j$ th column, find
$$
\left|a_{k j}\right|=\max \left(\left|a_{j j}\right|,\left|a_{j+1 j}\right|, \ldots,\left|a_{n j}\right|\right)
$$
then swap (interchange) rows $j$ and $k$.


```ad-theorem
GE with partial pivoting cannot fail if $A$ is nonsingular.
```
#### Proof
If $A$ is the first matrix above at the $j$ th stage,
$$
\operatorname{det}[A]=a_{11} \cdots a_{j-1 j-1} \cdot \operatorname{det}\left[\begin{array}{ccccc}
a_{j j} & \cdot & \cdot & \cdot & a_{j n} \\
\cdot & \cdot & \cdot & \cdot & \cdot \\
a_{k j} & \cdot & \cdot & \cdot & a_{k n} \\
\cdot & \cdot & \cdot & \cdot & \cdot \\
a_{n j} & \cdot & \cdot & \cdot & a_{n n}
\end{array}\right]
$$
Hence $\operatorname{det}[A]=0$ if $a_{j j}=\cdots=a_{k j}=\cdots=a_{n j}=0$. Thus if the pivot $a_{k, j}$ is zero, $A$ is singular. So if $A$ is nonsingular, all of the pivots are nonzero.

```ad-note
Note: actually $a_{n n}$ can be zero and an LU factorization still exist.
```
## Permutation matrix
$P$ has the same rows as the identity matrix, but in the pivoted order. So
$$
\Large
P A=L U
$$
represents the factorization-equivalent to GE with partial pivoting. E.g.,
$$
\left[\begin{array}{lll}
0 & 1 & 0 \\
0 & 0 & 1 \\
1 & 0 & 0
\end{array}\right] A
$$
has the 2 nd row of $A$ first, the 3 rd row of $A$ second and the 1st row of $A$ last.