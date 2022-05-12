## Disjoint
#Groups 
### Definition
The cycles $\left(a_{1} \ldots a_{k}\right)$ and $\left(b_{1} \ldots b_{l}\right)$ are disjoint if $a_{i} \neq b_{j}$ for all $i, j$.

### Proposition 8
Let $\alpha=\left(a_{1} \ldots a_{k}\right)$ and $\beta=\left(b_{1} \ldots b_{l}\right)$ be [[Disjoint]] cycles. Then $\alpha$ and $\beta$ **commute**.
#### Proof
We have
$$
\begin{array}{l}
\qquad a_{i} \alpha \beta=a_{i+1} \beta=a_{i+1} \text { for } 1 \leq i \leq k-1 \\
\text { and } a_{i} \beta \alpha=a_{i} \alpha=a_{i+1} \text { for } 1 \leq i \leq k-1 \\
\text { and } a_{k} \alpha \beta=a_{1} \beta=a_{1} \\
\text { and } a_{k} \beta \alpha=a_{k} \alpha=a_{1}
\end{array}
$$
and similarly $b_{j} \alpha \beta=b_{j} \beta \alpha$ for $1 \leq j \leq l$,
and for $x \notin\left\{a_{1}, \ldots, a_{k}, b_{1}, \ldots, b_{l}\right\}$ we have $x \alpha \beta=x=x \beta \alpha$.
So $\alpha \beta=\beta \alpha$.

### Theorem 9
Every permutation in $S_{n}$ can be written as a product of [[Disjoint]] cycles. Moreover, this product is **unique** up to cycling elements without cycles and permuting the order of the cycles.
#### Proof
Take $\sigma \in S_{n}$.
##### Existence
>
Take $a_{1} \in\{1,2, \ldots, n\}$. Consider $a_{1}, a_{1} \sigma, a_{1} \sigma^{2}, \ldots$.
All of these are in the finite set $\{1,2, \ldots, n\}$, so we must have $a_{1} \sigma^{r}=a_{1} \sigma^{s}$ for some $r, s$ with $r<s$. Then $a_{1}=a_{1} \sigma^{s-r}$, so in fact $a_{1}$ is the first element to be repeated. Say $k_{1}$ is the smallest positive integer with $a_{1} \sigma^{k_{1}}=a_{1}$. Then $\sigma$ permutes $\left\{a_{1}, a_{1} \sigma, a_{1} \sigma^{2}, \ldots, a_{1} \sigma^{k_{1}-1}\right\}$ (the orbit of $\left.a_{1}\right)$ via the cycle $\left(\begin{array}{lllll}a_{1} & a_{1} \sigma & a_{1} \sigma^{2} & \ldots & a_{1} \sigma^{k_{1}-1}\end{array}\right)$
If $k_{1}=n$, then $\sigma=\left(a_{1} a_{1} \sigma a_{1} \sigma^{2} \ldots a_{1} \sigma^{k_{1}-1}\right)$ is a cycle and we are done.
If not, then there is $a_{2}$ not in the orbit of $a_{1}$. Repeating the same argument shows that $\sigma$ permutes the orbit of $a_{2}$ via a cycle.
The two cycles must be disjoint, because if $a_{1} \sigma^{i}=a_{2} \sigma^{j}$ then $a_{2}=a_{1} \sigma^{i-j}$ is in the orbit of $a_{1}$, which it isn't.
Continuing in this way, we obtain $\sigma$ as a product of disjoint cycles. The process must stop, because $\{1,2, \ldots, n\}$ is finite so eventually the orbits will use it all up. 
##### Uniqueness
>Suppose that $\sigma=\pi_{1} \cdots \pi_{r}=\tau_{1} \cdots \tau_{s}$
where $\pi_{1}, \ldots, \pi_{r}$ are disjoint cycles and $\tau_{1}, \ldots, \tau_{s}$ are disjoint cycles. Then 1 appears in exactly one $\pi_{i}$, without loss of generality say it's $\pi_{1}$ (if necessary reorder the cycles, which is allowed since they commute), and similarly 1 appears in exactly one $\tau_{j}$, say $\tau_{1}$. Now without loss of generality 1 appears at the start of $\pi_{1}$ and $\tau_{1}$ (if necessary cycle elements within the cycle). Then $1 \sigma=1 \pi_{1}=1 \tau_{1}$ and so on, and so $\pi_{1}=\tau_{1}=\left(11 \sigma 1 \sigma^{2} \ldots 1 \sigma^{k-1}\right)$ where $k$ is the size of the orbit of 1 under $\sigma$.
Repeating with an element not in the orbit of 1 shows that $\pi_{2}=\tau_{2}$ and so on. 
So in fact the decomposition into [[Disjoint]] cycles are the same.

