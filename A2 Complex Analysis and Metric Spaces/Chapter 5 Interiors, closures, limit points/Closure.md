#ComplexAnalysis #Topology  

## Definition
Let $X$ be a metric space, and let $S \subset X$. The [[Closure]] $\bar{S}$ is defined to be the intersection of all closed subsets of $X$ containing $S$.

 A set $S \subseteq X$ is said to be [[Dense]] if $\bar{S}=X$.
 
> Since an arbitrary intersection of closed sets is closed, $\bar{S}$ is the unique smallest closed subset of $X$ containing $S$. If $S$ is itself closed then evidently $S=\bar{S}$.
## Lemma 5.1.4
Let $X$ be a [[Metric Space]], and let $S \subseteq X$ be a subset. Then $a \in$ [$\bar{S}$](Closure.md) if and only if the following is true: every [[Open ball]] $B(a, \varepsilon)$ contains a point of $S$.
#### Proof
Suppose $a \in \bar{S}$. If $B(a, \varepsilon)$ does not meet $S$, then $B(a, \varepsilon)^{c}$ is a closed set containing $S$. Therefore $B(a, \varepsilon)^{c}$ contains $\bar{S}$, and hence it contains $a$, which is obviously nonsense.

Conversely, suppose that every ball $B(a, \varepsilon)$ meets $S$. If $a \notin \bar{S}$ then, since $\bar{S}^{c}$ is open, there is a ball $B(a, \varepsilon)$ contained in $\bar{S}^{c}$, and hence in $S^{c}$, contrary to assumption.

>Remark. A particular consequence of this is that $S \subseteq X$ is [[Dense]] if and only if it meets every open set in $X$.

### Corollary 5.1.5
Let $X$ be a [[Metric Space]], and let $S \subseteq X$ be a subset. Let $a \in X$. Then $a$ lies in the [[Closure]] $\bar{S}$ if and only if there is a sequence $\left(x_{n}\right)_{n=1}^{\infty}$ of elements of $S$ with $\lim _{n \rightarrow \infty} x_{n}=a$.
**In particular, $S$ is closed if and only if the limit of every convergent sequence $\left(x_{n}\right)_{n=1}^{\infty}$ of elements of $S$ lies in $S$.**

```ad-note
In general, it need not be the case that $\bar{B}(a, \varepsilon)$ is the closure of $B(a, \varepsilon)$. Since we have seen that $\bar{B}(a, \varepsilon)$ is closed, it is always true that $\overline{B(a, \varepsilon)} \subseteq$ $\bar{B}(a, \varepsilon)$, but the containment can be proper. Indeed, take any set $X$ with at least two elements equipped with the discrete metric. Then if $x \in X$ we have $B(x, 1)=$ $\overline{B(x, 1)}=\{x\}$, but $\bar{B}(x, 1)$ is the whole space $X$.
```

![[A2 Complex Analysis and Metric Spaces/Chapter 5 Interiors, closures, limit points/Limit Point#Proposition 5.2.4]]