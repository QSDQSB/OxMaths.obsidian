#Probability 
## Definition
Let $\left(X_{n, r}\right)_{n, r \geqslant 1}$ be an infinite array of independent identically distributed random variables, each with the same distribution as $X$, where
$$
\mathbb{P}[X=k]=p_k, \quad k=0,1,2, \ldots
$$
The sequence $\left(Z_n\right)_{n \geqslant 0}$ of random variables defined by
1. $Z_0=1$,
2. $Z_n=X_{n, 1}+\cdots+X_{n, Z_{n-1}}$ for $n \geqslant 1$
is the [[Galton-Watson branching process]] (started from a single ancestor) with offspring distribution X.