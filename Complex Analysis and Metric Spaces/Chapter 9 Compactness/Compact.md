# Compact
#ComplexAnalysis 

## Definition
A [[metric space]] is said to be [[compact]] if every [[open cover]] has a ﬁnite [[subcover]].

```ad-example
The real line $\mathbf{R}$ is not [[compact]]. For instance, the [[open cover]] $\bigcup_{n \in \mathbf{N}}(-n, n)$ has no finite [[subcover]].
```
## Compactness implies sequential compactness
### Proposition 9.2.1.
A [[compact]] [[metric space]] is [[Sequential Compactness|sequentially compact]].

#### Lemma 9.2.2. 
Suppose that $X$ is a [[compact]] [[metric space]] and that we have a nested sequence $S_{1} \supseteq S_{2} \supseteq S_{3} \supseteq \cdots$ of nonempty, [[closed]] subsets of $X$. Then the intersection $\bigcap_{n=1}^{\infty} S_{n}$ is nonempty.
##### Proof
Suppose the intersection is empty. Then the complements $S_{i}^{c}$ (which are [[open]] sets) are an [[open cover]] of $X$. By compactness, there is a finite [[subcover]]. In particular, for some $n$ the sets $S_{1}^{c}, \ldots, S_{n}^{c}$ cover $X$. However, we have $S_{1}^{c} \subseteq S_{2}^{c} \subseteq$ $\cdots \subseteq S_{n}^{c}$, and therefore $S_{n}^{c}$ covers (is equal to) $X$. But this is a contradiction, since $S_{n}$ is nonempty.

#### Proof of Proposition 9.2.1.
Let $X$ be the space in question, and suppose that $\left(x_{n}\right)_{n=1}^{\infty}$ is a sequence of elements of $X$. We wish to find a convergent subsequence of this sequence.

For each natural number $n$, set $A_{n}:=\left\{x_{n}, x_{n+1}, x_{n+2}, \ldots\right\}$. Obviously, $A_{1} \supseteq$ $A_{2} \supseteq A_{3} \supseteq \cdots$, and so $\bar{A}_{1} \supseteq \bar{A}_{2} \supseteq \bar{A}_{3} \supseteq \cdots$. Applying [[#Lemma 9.2.2]], we see that $\bigcap_{n=1}^{\infty} \bar{A}_{n}$ is **nonempty**.

Let $a$ be a point in this intersection. We inductively construct a subsequence $\left(x_{n_{k}}\right)_{k=1}^{\infty}$ such that $d\left(x_{n_{k}}, a\right)<1 / k$ for all $k$; it is then clear that this subsequence converges (to $a$ ) and the proof will be [[complete]]. Suppose that $n_{1}, \ldots, n_{k}$ have already been constructed. Now $a$ lies in $\bar{A}_{n_{k}+1}$, that is to say the [[closure]] of the set $\left\{x_{n_{k}+1}, x_{n_{k}+2}, \ldots\right\}$. In particular, there is some element of this sequence at distance less than $1 /(k+1)$ from $a$, and we can take this to be our $x_{n_{k+1}}$.

## Sequential compactness implies compactness
### Proposition 9.4.1.
A [[Sequential Compactness|sequentially compact]] [[metric space]] is [[compact]].

> **Proof** nonexaminable.

## Theorem 9.4.2.
Let $X$ be a metric space. Then the following are equivalent:
(i) $X$ is compact;
(ii) $X$ is sequentially compact;
(iii) $X$ is complete and totally bounded.