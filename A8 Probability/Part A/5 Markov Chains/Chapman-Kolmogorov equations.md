#Probability 
![[Markov chain#Notations]]
### Theorem 5.2: Chapman-Kolmogorov equations
- (i) $p_{i k}^{(n+m)}=\sum_{j \in I} p_{i j}^{(n)} p_{j k}^{(m)}$.
- (ii) $p_{i j}^{(n)}=\left(P^{n}\right)_{i, j}$

Here $P^{n}$ is the $n$th power of the [[Transition matrix]].
>As ever, matrix multiplication is given by $(A B)_{i, j}=\sum_{k}(A)_{i, k}(B)_{k, j}$, whether the matrices are finite or infinite.

#### Proof
(i) We condition on $X_{n}$, i.e. we consider the [[partition]] $\left\{X_{n}=j\right\}, j \in I$, and use [[the Law of Total Probability]]:
$$
\begin{aligned}
\mathbb{P}\left(X_{n+m}=k \mid X_{0}=i\right) &=\sum_{j} \mathbb{P}\left(X_{n}=j \mid X_{0}=i\right) \mathbb{P}\left(X_{n+m}=k \mid X_{n}=j, X_{0}=i\right) \\
&=\sum_{j} \mathbb{P}\left(X_{n}=j \mid X_{0}=i\right) \mathbb{P}\left(X_{n+m}=k \mid X_{n}=j\right)
\end{aligned}
$$
(using the [[Markov Property]])
$$
=\sum_{j} p_{i j}^{(n)} p_{j k}^{(m)}
$$
(ii) For $n=1$, this holds by definition of $P$. Inductively, if this holds for any $n \geq 1$,
$$
p_{i k}^{(n+1)}=\sum_{j} p_{i j}^{(n)} p_{j k}^{(1)}=\sum_{j}\left(P^{n}\right)_{i, j}(P)_{j, k}=\left(P^{n} P\right)_{i, k}=\left(P^{n+1}\right)_{i, k}
$$