## Permutation Matrix
#Groups 
### Definition
An $n \times n$ matrix is a [[Permutation Matrix]] if each row and each column contains exactly one entry that is 1 , with all other entries 0 .
>Take $\sigma \in S_{n}$. We obtain a corresponding [[Permutation Matrix]] $P_{\sigma}$ by specifying that the nonzero entry in row $i$ is a 1 in column $i \sigma$. So $P_{\sigma}$ has $i, j$ entry $\delta_{i \sigma, j}$. Note that $P_{\sigma}$ genuinely is a permutation matrix.

### Lemma 13
>If $\sigma, \tau \in S_{n}$, then $P_{\sigma \tau}=P_{\sigma} P_{\tau}$.

#### Proof
The $i, j$ entry of $P_{\sigma} P_{\tau}$ is
$$
\begin{aligned}
\left(P_{\sigma} P_{\tau}\right)_{i, j} &=\sum_{k=1}^{n}\left(P_{\sigma}\right)_{i, k}\left(P_{\tau}\right)_{k, j} 
\quad\text{(definition of matrix multiplication)}
\\
&=\sum_{k=1}^{n} \delta_{i \sigma, k} \delta_{k \tau, j} \\
&=\delta_{i \sigma \tau, j} \\
&=\left(P_{\sigma \tau}\right)_{i, j}.
\end{aligned}
$$
### Lemma 14
>If $\sigma \in S_{n}$ is a transposition, then $\operatorname{det}\left(P_{\sigma}\right)=-1 .$

#### Proof
Say $\sigma=(i j)$. Then $P_{\sigma}$ is $I_{n}$ with rows $i$ and $j$ swapped,
$$
\text { so } \operatorname{det}\left(P_{\sigma}\right)=-\operatorname{det}\left(I_{n}\right)=-1.
$$
### Definition: Odd/Even Permutation
A [[Permutation]] is **odd** (resp. **even**) if it can be written as a product of an **odd** (resp. **even**) number of [transpositions](Transposition).

### Theorem 15
1) Any [[Permutation]] in $S_{n}$ can be written as a product of [transpositions](Transposition).
2) $A$ [[Permutation]] cannot be both **even** and **odd**.
#### Proof
(i) Any [[Permutation]] in $S_{n}$ can be written as a product of [[Disjoint]] cycles [(Theorem 9)](Disjoint.md#Theorem%209), so we concentrate on an arbitrary cycle $\left(\begin{array}{llll}a_{1} & a_{2} & \ldots & a_{k}\end{array}\right)$
We have
$$
\left(\begin{array}{llll}
a_{1} & a_{2} & \ldots & a_{k}
\end{array}\right)=\left(\begin{array}{ll}
a_{1} & a_{2}
\end{array}\right)\left(\begin{array}{ll}
a_{1} & a_{3}
\end{array}\right) \cdots\left(a_{1} a_{k}\right)
$$
(ii) Say $\sigma=\tau_{1} \cdots \tau_{k}$ where $\tau_{1}, \ldots, \tau_{k}$ are transpositions.
Then
$$
\operatorname{det}\left(P_{\sigma}\right)=\operatorname{det}\left(P_{\tau_{1}} \cdots P_{\tau_{k}}\right) \text { by Lemma } 13
$$
$=\operatorname{det}\left(P_{\tau_{1}}\right) \cdots \operatorname{det}\left(P_{\tau_{k}}\right)$ as det multiplicative
$$
=(-1)^{k}.
$$
(by [[Permutation Matrix#Lemma 14]]).

So $\sigma$ cannot be both even and odd.

> A [[Cycle]] is **odd** if and only if it has **even** length.

> A [[Permutation]] is **even** if and only if its [[Cycle Type]] has an **even** number of cycles of **even** length.

> $\sigma$ is **even** if and only if $\det(P_\sigma)=1.$

### Definition: Alternating Group
For $n \geq 1$, define $A_{n}:=\left\{\sigma \in S_{n}: \sigma\right.$ is even $\}$, the $n^{\text {th }}$ [[Alternating Group]].