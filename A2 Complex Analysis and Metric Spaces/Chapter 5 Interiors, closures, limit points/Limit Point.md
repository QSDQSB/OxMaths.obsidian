---
aliases: [limit point]
---
#ComplexAnalysis  
## Definition
If $X$ is a [[Metric Space]] and $S \subseteq X$ is any subset, then we say a point $a \in X$ is a [[A2 Complex Analysis and Metric Spaces/Chapter 5 Interiors, closures, limit points/Limit Point|limit point]] of $S$ if any [[Open ball]] about $a$ contains a point of $S$ other than $a$ itself.

We will write $L(S)$ for the set of limit points of $S$.

```ad-example
Take $X=\mathbf{R}$ and $S=(0,1] \cup\{2\}$. Then $L(S)=[0,1]$. Note in particular that 0 does not lie in $S$, but is a [[limit point]]; by contrast, 2 does lie in $S$, but it is not a [[limit point]], so it is an isolated point.
```

## Proposition 5.2.4 
Let $S$ be a subset of a metric space $X .$ Let $L(S)$ be its set of limit points, and $\bar{S}$ its [[Closure]]. Then $\bar{S}=S \cup L(S)$.

#### Proof
We first show the containment $S \cup L(S) \subseteq \bar{S}$. Obviously $S \subseteq \bar{S}$, so we need only show that $L(S) \subseteq \bar{S}$. Suppose $a \in \bar{S}^{c}$. Since $\bar{S}^{c}$ is [[Open]], there is some ball $B(a, \varepsilon)$ which lies in $\bar{S}^{c}$, and hence also in $S^{c}$, and therefore $a$ cannot be a [[A2 Complex Analysis and Metric Spaces/Chapter 5 Interiors, closures, limit points/Limit Point|limit point]] of $S$. This concludes the proof of this direction.

Now we look at the opposite containment $\bar{S} \subseteq S \cup L(S) .$ If $a \in \bar{S}$, we saw in [[Closure#Corollary 5.1.5]] that there is a sequence $\left(x_{n}\right)_{n=1}^{\infty}$ of elements of $S$ with $x_{n} \rightarrow a$. If $x_{n}=a$ for some $n$ then we are done, since this implies that $a \in S .$ Suppose, then, that $x_{n} \neq a$ for all $n$. Let $\varepsilon>0 .$ Then all the $x_{n}$, for $n$ sufficiently large in terms of $\varepsilon$, are elements of $B(a, \varepsilon) \backslash\{a\}$, and they all lie in $S .$ It follows that $a$ is a [[A2 Complex Analysis and Metric Spaces/Chapter 5 Interiors, closures, limit points/Limit Point|limit point]] of $S$, and so we are done in this case also.

#### Corollary 5.2.5
Let $S$ be a subset of a [[Metric Space]] $X .$ Then $S$ is [[A2 Complex Analysis and Metric Spaces/Chapter 4 Open and Closed Sets/Closed|closed]] if and only if it contains all its [limit points](A2%20Complex%20Analysis%20and%20Metric%20Spaces/Chapter%205%20Interiors,%20closures,%20limit%20points/Limit%20Point.md).
> As $S$ is [[A2 Complex Analysis and Metric Spaces/Chapter 4 Open and Closed Sets/Closed|closed]] if and only if $S=\bar{S}$.