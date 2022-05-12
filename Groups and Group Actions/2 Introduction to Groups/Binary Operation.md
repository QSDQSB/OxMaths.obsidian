## Binary Operation
#Groups 
### Definition
Let $S$ be a set. A [[Binary Operation]] $*$ in $S$ is a function
$$
\begin{aligned}
*: S \times S & \rightarrow S \\
(a, b) & \mapsto a * b .
\end{aligned}
$$
### Example
- $+,-, \times$ on $\mathbb{R}$, but not $\div$ on $\mathbb{R}$
- matrix multiplication on the set $\mathcal{M}_{n}(\mathbb{C})$ of $n \times n$ complex matrices
- min and max on $\mathbb{N}$
- $\circ$, composition of functions, on the set $\operatorname{Sym}(X)$ of bijections from a set $X$ to itself

### Definition: Associative
We say that a [[Binary Operation]] $*$ on a set $S$ is [[Associative]] if
$$
a *(b * c)=(a * b) * c \text { for all } a, b, c \in S
$$
### Definition: Identity 
Let $*$ be a [[Binary Operation]] on a set $S$. We say that $e \in S$ is an [[Identity]] element (or identity) if $e * a=a=a * e$ for all $a \in S$.