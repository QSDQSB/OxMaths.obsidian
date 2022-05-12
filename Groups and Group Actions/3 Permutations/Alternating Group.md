## Alternating Group
#Groups 
### Definition
For $n \geq 1$, define $A_{n}:=\left\{\sigma \in S_{n}: \sigma\right.$ is even$\}$, the $n^{\text {th }}$ [[Alternating Group]].

### Proposition 16
1) [$A_n$](Alternating%20Group.md) is a [[subgroup]] of [$S_n$](Permutation.md).
2) For $n\geq3$, the **order** of $A_n$ is ${1\over2}n!.$
3) For $n\geq4$, $A_n$ is **non-Abelian**.

#### Proof
 ##### (i)
 - **Closure**: Take $\sigma, \tau \in A_{n}$, so $\sigma$ and $\tau$ are even. Then $\operatorname{det}\left(P_{\sigma}\right)=\operatorname{det}\left(P_{\tau}\right)=1\quad\text{(Theorem 15)}$
$$
\text { so } \operatorname{det}\left(P_{\sigma \tau}\right)=\operatorname{det}\left(P_{\sigma} P_{\tau}\right)=\operatorname{det}\left(P_{\sigma}\right) \operatorname{det}\left(P_{\tau}\right)=1, \text { (Lemma 13) }$$ 
so $\sigma\tau$ is even so $\sigma \tau \in A_{n}$.
- **Identity**: Note that $e$ (the identity permutation) is a product of 0 transpositions and hence even, so $e \in A_{n}$.
- **Inverses**: Take $\sigma \in A_{n}$. Then
$$
\begin{aligned}
\operatorname{det}\left(P_{\sigma} P_{\sigma^{-1}}\right) &=\operatorname{det}\left(P_{\sigma}\right) \operatorname{det}\left(P_{\sigma^{-1}}\right) \\
&=\operatorname{det}\left(P_{\sigma^{-1}}\right)
\end{aligned}
$$
but also
$$
\begin{aligned}
\operatorname{det}\left(P_{\sigma} P_{\sigma^{-1}}\right) &=\operatorname{det}\left(I_{n}\right) =1
\end{aligned}
$$
so $\sigma^{-1}$ is even so $\sigma^{-1} \in A_{n}$
So $A_{n} \leq S_{n}$.

##### (ii)
Define
$$
\begin{aligned}
f: A_{n} & \rightarrow S_{n} \backslash A_{n} \\
\sigma & \mapsto(12) \sigma.
\end{aligned}
$$
Note that $f$ is [[well-defined]]: if $\sigma$ is **even**, then $(12) \sigma$ is **odd**.
And $f$ is a [[bijection]]: it has **inverse** $\sigma \mapsto(12) \sigma$.
$$
\text { So }\left|A_{n}\right|=\left|S_{n} \backslash A_{n}\right|=\left|S_{n}\right|-\left|A_{n}\right|, \text { so }\left|A_{n}\right|=\frac{1}{2}\left|S_{n}\right|=\frac{1}{2} n !
$$
(iii) For $n \geq 4,(123)$ and $(124)$ are elements of $A_{n}$.
Now
$$
\begin{aligned}
\text{(1 2 3)(1 2 4)} & = \text{(1 4)(2 3)} \\
\text{while (1 2 4)(1 2 3)} & = \text{(1 3)(2 4)},
\end{aligned}
$$
so $A_{n}$ is non-[[Abelian]].

>In $S_{n}$, two permutations are [[conjugate]] if and only if they have the same [[Cycle Type]]. This is not true in $A_{n}.$ If two elements are [[conjugate]] in $A_{n}$, then they are [[conjugate]] in $S_{n}$ and so have the same [[Cycle Type]]. But it is possible for two elements of $A_{n}$ to have the same [[Cycle Type]] without being [[Conjugate]] in $A_{n} .$ 

>For example, $\text{(1 2 3)}$ and $\text{(1 3 2)}$ are not [[conjugate]] in $A_{4}$.


- The map sgn: $S_{n} \rightarrow\{\pm 1\}$ has kernel $A_{n}$ and image $\{\pm 1\}$. ==See at [[Kernel and Image (Groups)#Example 195]]==

### Conjugacy Class of $\large \bf A_4$
[[Conjugacy class]] of $A_{4}$ are $\{e\}$, $\{(12)(34),(13)(24),(14)(23)\}$, $\{(123),(134),(214),(324)\}$, $\{(132),(143),(124),(234)\}$.
> See application of this in First Isomorphic Theorem [[First Isomorphism Theorem#large bf A_4]]