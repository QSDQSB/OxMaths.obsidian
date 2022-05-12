## Inverse
#Groups 
### Definition
Let $*$ be a [[Binary Operation]] on a set $S$, with [[Identity]] e. Take $a \in S$. We say that $b \in S$ is an [[Inverse]] for $a$ if $a * b=e=b * a .$
### Proposition 2: Uniqueness of Inverse
Let $*$ be an [[Associative]] [[Binary Operation]] on a set $S$, with identity $e$. Take $a \in S$. If a has an inverse, then the [[Inverse]] is unique. 
#### Proof
Let $b, b^{\prime}$ be inverses of $a$. Then
$$
\begin{aligned}
b^{\prime} *(a * b) &=b^{\prime} * e=b^{\prime} \\
\text { and }\left(b^{\prime} * a\right) * b &=e * b=b,
\end{aligned}
$$
but $*$ is associative so these are equal, so $b=b^{\prime}$.