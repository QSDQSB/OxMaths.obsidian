#ComplexAnalysis 

## Definition
Let $X$ be a [[Metric Space]], and let $Z \subseteq X$. Let $z \in Z$. We say $Z$ is a [[Neighbourhood]] of $z$ if some [[Open]] ball about $z$ is contained in $Z$: that is, if there is some $\delta>0$ such that $B(z, \delta) \subseteq Z$.

> There is no requirement that a neighbourhood itself be an open set.

## Proposition 4.3.2
Let $X, Y$ be metric spaces and let $f: X \rightarrow Y$ be a map. If $a \in X$ then $f$ is [[Continuous]] at a if and only if for every neighbourhood $N \subseteq Y$ of $f(a)$, the preimage $f^{-1}(N)$ is a neighbourhood of $a \in X$.

## Proposition 4.3.3
Let $X, Y$ be metric spaces and let $f: X \rightarrow Y$ be a map. Then $f$ is continuous on all of $X$ if and only if for each open subset $U$ of $Y$, its preimage $f^{-1}(U)$ is open in $X$.