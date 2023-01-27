## Markov Property
#Probability 

### Memoryless
Markov chains are ***memoryless***. If we know the current state, any information about previous states is irrelevant to the future evolution of the chain. We can say that "the future is [[Independent]] of the past, given the present". This is known as the [[Markov Property]]:
$$
\begin{array}{l}
& \mathbb{P}\left(X_{n+1} \in A_{n+1}, \ldots, X_{n+m} \in A_{n+m} \mid X_{0} \in A_{0}, \ldots, X_{n-1} \in A_{n-1}, X_{n}=i\right) \\
&=\mathbb{P}\left(X_{n+1} \in A_{n+1}, \ldots, X_{n+m} \in A_{n+m} \mid X_{n}=i\right) \\
&=\mathbb{P}\left(X_{1} \in A_{n+1}, \ldots, X_{m} \in A_{n+m} \mid X_{0}=i\right)
\end{array}
$$
for all $A_{0}, \ldots, A_{m+n} \subseteq I$ with $\mathbb{P}\left(X_{0} \in A_{0}, \ldots, X_{n-1} \in A_{n-1}, X_{n}=i\right)>0$

Or equivalently

$\mathbb{P}\left(X_{0} \in A_{0}, \ldots, X_{n-1} \in A_{n-1}, X_{n+1} \in A_{n+1}, \ldots, X_{n+m} \in A_{n+m} \mid X_{n}=i\right)$
$=\mathbb{P}\left(X_{0} \in A_{0}, \ldots, X_{n-1} \in A_{n-1} \mid X_{n}=i\right) \mathbb{P}\left(X_{n+1} \in A_{n+1}, \ldots, X_{n+m} \in A_{n+m} \mid X_{n}=i\right)$ $=\mathbb{P}\left(X_{0} \in A_{0}, \ldots, X_{n-1} \in A_{n-1} \mid X_{n}=i\right) \mathbb{P}\left(X_{1} \in A_{n+1}, \ldots, X_{m} \in A_{n+m} \mid X_{0}=i\right)$