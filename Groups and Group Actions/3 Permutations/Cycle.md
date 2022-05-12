## Cycle
#Groups 
### Definition
A [[Permutation]] $\sigma \in S_{n}$ is a [[cycle]] if there are distinct $a_{1}, \ldots$, $a_{k} \in\{1,2, \ldots, n\}$ such that
$$
\begin{aligned}
a_{i} \sigma &=a_{i+1} &\text { for } 1 \leq i \leq k-1 \\
a_{k} \sigma &=a_{1} \\
 x \sigma &=x & \text { for } x \notin\left\{a_{1}, \ldots, a_{k}\right\}
\end{aligned}
$$
Such a **cycle** has length $k$. We call it a $k$-cycle. We write it as $\left(a_{1} a_{2} \ldots a_{k}\right)$.
> A $k$-cycle has [[Order]] $k$.

> We often call a $2$-cycle a **transposition**.

### Example
In $S_{5}$, $(\text{1 2 3})$ and $\text{(2 4 5 1 3)}=\text{(5 1 3 2 4)}$ are cycles ($3$-cycle and $5$-cycle respectively), but $(123)(45)$ is not a **cycle**.
### Definition: Disjoint
The cycles $\left(a_{1} \ldots a_{k}\right)$ and $\left(b_{1} \ldots b_{l}\right)$ are [[disjoint]] if $a_{i} \neq b_{j}$ for all $i, j$.

### Proposition 8
Let $\alpha=\left(a_{1} \ldots a_{k}\right)$ and $\beta=\left(b_{1} \ldots b_{l}\right)$ be [[disjoint]] cycles. Then $\alpha$ and $\beta$ **[commute](Communative)**.

### [Theorem 9](Disjoint.md#Theorem%209)
Every permutation in $S_n$ can be written as a product of disjoint cycles. Moreover, this product is unique up to cycling elements without cycles and permuting the order of the cycles.
