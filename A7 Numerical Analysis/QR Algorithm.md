# QR Algorithm
#NumericalAnalysis 
[](http://pi.math.cornell.edu/~web6140/TopTenAlgorithms/QRalgorithm.html#The-unshifted-QR-algorithm)

### Unshifted QR Algorithm
John Francis' idea in 1961 for computing the eigenvalues of A is (without any bells or whistles) surprisingly simple. We will refer to this as the *unshifted* [[QR Algorithm]]. It looks like this:

$$
\begin{aligned} 
&\text{Set $A_0 = A$,}\\ 
&\text{for k = 1,2,... (until convergence)}\\
&\quad\text{Compute $A_{k-1} = Q_kR_k$}\\
&\quad\text{Set $A_k = R_kQ_k$}\\
&\text{end} 
\end{aligned}
$$
That is, compute the QR factorization of $A$, then reverse the factors, then compute the QR factorization of the result, before reversing the factors, and so on.

It turns out that the sequence $A_0$,$A_1$,…, have the same eigenvalues and for any large integer $K$ the matrix $A_K$ is usually close to being upper-triangular. Since the eigenvalues of an upper-triangular matrix lie on its diagonal, the iteration above will allow us to read off the eigenvalues of $A$ from the diagonal entries of $A_K$. Once we have the eigenvalues, the eigenvectors can be computed, for example, by an inverse power iteration.

For example, below we take a random 100×100 matrix and plot the sparsity pattern of the matrix $A_{1000}$.

```matlab
# unshift QR algorithm:
using PyPlot
A = rand(100,100); 

for k = 1:1000
    (Q,R) = qr(A)
    A = R*Q
end
spy(abs(A).>1e-4)
```

### When Unshifted QR Algorithm Does Not Converge
The sequence $A_0,A_1,\cdots,$ computed by the [[#unshifted QR algorithm]] above does not always converge. For example, consider the matrix
$$A = A_0 = \begin{bmatrix}0 &1\\ 1 & 0 \end{bmatrix}.$$

In this example, $A_k=A_0$ for all $k$ and the [[#unshift QR algorithm]] is stagnate.

## Why It Usually Converge  to An Upper-triangular Matrix

