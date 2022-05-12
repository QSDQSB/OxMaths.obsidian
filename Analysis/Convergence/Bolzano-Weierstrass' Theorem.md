## Bolzano-Weierstrass' Theorem
#Analysis #ComplexAnalysis 

### Definition
A bounded sequence in $\mathbb{R}$ (or in $\mathbb{C}$) has a subsequence which converges to some number. That is a bounded sequence of numbers possesses a convergent subsequence. 

### Corollary 1.1.7
A bounded sequence ($z_n$) in $\mathbb{R}$ (or in $\mathbb{C}$) converges to a limit l if and only if every convergent subsequence of ($z_n$) has the same limit.
#### Proof
##### ➡️ Necessity
Proved in Analysis I: any subsequence of a convergent sequence tends to the same limit.
##### ⬅️ Sufficiency
Assume by contradiction: Suppose that ($z_n$) were divergent. Since it is bounded, by [[Bolzano-Weierstrass' Theorem]] we can extract a subsequence ($z_{n_k}$) from ($z_n$) which converges to some number $l_1$. Let $(y_n)\equiv(z_n)\backslash(z_{n_k})$ which must be a subsequence otherwise ($z_n$) converges to $l_1$. If ($y_n$) did not tend to $l_1$, then there is $\varepsilon>0$ such that for every $j\in\mathbb{N}$, there is an integer $n_j>j$ such that $$ |y_{n_j}-l_1|\geq\varepsilon.$$
[*which is the contrapositive to that $y_n\rightarrow l_1$*]. Since ($y_{n_j}$) is bounded, according to [[Bolzano-Weierstrass' Theorem]], there is a convergent subsequence ($z_{n_k}^\prime$) of ($y_{n_j}$), so that $\lim z_{n_k}^\prime=l_2$ for some $l_2$. Since
$$|z_{n_k}^\prime-l_1|\geq\varepsilon\,\,\,\,\forall k,$$
which yields that
$$\lim_{k\rightarrow\infty}|z_{n_k}^\prime-l_1|=|l_2-l_1|\geq\varepsilon>0.$$
Therefore $l_1\not=l_2$. Contradicted.

> If you cannot prove a statement directly, then formulate the [[contrapositive]], and prove it is wrong. #useful

