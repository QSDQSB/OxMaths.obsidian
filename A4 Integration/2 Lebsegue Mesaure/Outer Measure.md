## Outer Measure
#Integration 

### Definition
For $A \subseteq \mathbb{R}$, we define the [[Outer Measure]] of $A$ to be
$$
m^{*}(A)=\inf \left\{\sum_{n=1}^{\infty} m\left(I_{n}\right): I_{n} \text { intervals, } A \subseteq \bigcup_{n=1}^{\infty} I_{n}\right\}
$$

### Proposition 2.1
1. $m^{*}(\emptyset)=0, m^{*}(\{x\})=0$;
2. $m^{*}(I)=b-a$ if $I$ is any interval with endpoints $a, b$;
3. $m^{*}(A+x)=m^{*}(x)$;
4. $m^{*}(\alpha A)=|\alpha| m^{*}(A)$
5. $m^{*}(A) \leq m^{*}(B)$ if $A \subseteq B$
6. $m^{*}(A \cup B) \leq m^{*}(A)+m^{*}(B)$;
$6^{\prime} . m^{*}\left(\bigcup_{n=1}^{\infty} A_{n}\right) \leq \sum_{n=1}^{\infty} m^{*}\left(A_{n}\right)$.


### Null
![[Null#Definition]]

```ad-example
title: $\bf m^*$ NOT COUNTABLY ADDITIVE
Let $A$ be a subset of $[0,1]$ with the following properties;
(i) $x, y \in A, x \neq y \Longrightarrow x-y \notin \mathbb{Q}$
(ii) For any $x \in[0,1]$, there exists $q \in \mathbb{Q}$ such that $x+q \in A$.
Then
$$
[0,1] \subseteq \bigcup_{q \in \mathbb{Q} \cap[-1,1]}(A-q) \subseteq[-1,2]
$$
Moreover, the sets $A-q$ are disjoint (as $q$ varies), and there are countably many of them. If $m^{*}$ is countably additive, then
$$
1=m^{*}[0,1] \leq \sum_{q \in \mathbb{Q} \cap[-1,1]} m^{*}(A-q)=\sum_{q \in \mathbb{Q} \cap[-1,1]} m^{*}(A) \leq 3
$$
This is impossible.
```