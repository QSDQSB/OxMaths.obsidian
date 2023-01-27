#InfoTheory 
## Theorem
```ad-theorem
title: Fano's inequality
Let $X, Y$ be discrete random variables taking values in $\mathcal{X}$. Then
$$
H(X \mid Y) \leq H\left(\mathbf{1}_{X \neq Y}\right)+\mathbb{P}(X \neq Y) \log (|\mathcal{X}|-1)
$$
```
### Proof
Set $Z=\mathbf{1}_{X \neq Y}$ and note that [$H(Z \mid X, Y)=0$](Conditional%20Entropy.md). Now
$$
\begin{aligned}
H(X \mid Y) &=H(X \mid Y)+H(Z \mid X, Y) \\
&=H(X, Z \mid Y) \\
&=H(Z \mid Y)+H(X \mid Y, Z) \\
& \leq H(Z)+H(X \mid Y, Z) \\
&=H(Z)+\sum_{y \in \mathcal{X}}[\mathbb{P}(Y=y, Z=0) H(X \mid Y=y, Z=0)+P(Y=y, Z=1) H(X \mid Y=y, Z=1)]
\end{aligned}
$$
Now $\{Y=y, Z=0\}$ implies $\{X=y\}$, hence $H(X \mid Y=y, Z=0)=0$. On the other hand, $\{Y=y, Z=1\}$ implies that $\{X \in \mathcal{X} \backslash\{y\}\}$ which contains $|\mathcal{X}|-1$ elements. Therefore,
$$
H(X \mid Y=y, Z=1) \leq \log (|\mathcal{X}|-1)
$$
It follows that
$$
\begin{aligned}
H(X \mid Y) & \leq H(Z)+\sum_{y \in \mathcal{X}} \mathbb{P}(Y=y, Z=1) H(X \mid Y=y, Z=1) \\
& \leq H(Z)+\mathbb{P}(Z=1) \log (|\mathcal{X}|-1)
\end{aligned}
$$
### Corollary 1.18
$$H(X \mid Y) \leq 1+\mathbb{P}(X \neq Y) \log (|\mathcal{X}|-1).$$