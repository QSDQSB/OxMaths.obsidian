---
aliases: [disconnected, connected, connectedness, disconnect]
---
## Connectedness
#ComplexAnalysis #Topology  

### Definition
We say that a [[metric space]] is [[Connected|disconnected]] if we can write it as the disjoint union of two nonempty open sets. We say that a space is [[connected]] if it is not [[Connected|disconnected]].

If $X$ is written as a disjoint union of two nonempty open sets $U$ and $V$ then we say that these sets [[Connected|disconnect]] $X$.

```ad-example
If $X=[0,1] \cup[2,3] \subset \mathbf{R}$ then we have seen that both $[0,1]$ and $[2,3]$ are open in $X$. Since $X$ is their disjoint union, $X$ is disconnected.
```

---
### Lemma 7.1.2
Let $X$ be a [[metric space]]. Then the following are equivalent.
(i) $X$ is [[connected]].
(ii) If $f: X \rightarrow\{0,1\}$ is a [[continuous]] function then $f$ is constant.
(iii) The only subsets of $X$ which are both [[open]] and [[closed]] are $X$ and $\emptyset$.

### Lemma 7.1.3
`ascertain connectedness`
Let $X$ be a [[metric space]], and let $Y \subseteq X$ be a subset, considered as a metric space with the metric induced from $X$. Then $Y$ is [[connected]] if and only if the following is true:

>If $U, V$ are open subsets of $X$, and $U \cap V \cap Y=\emptyset$, then whenever $Y \subseteq U \cup V$, either $Y \subseteq U$ or $Y \subseteq V$.

#### Proof
The key point here is to recall that the open sets in $Y$ are precisely the sets of the form $U \cap Y$, where $U$ is open in $X$. This was proven in Lemma 4.5.1. Take a pair $U \cap Y, V \cap Y$ of such open sets. They [[Connected|disconnect]] $Y$ if and only if

(i) They are disjoint, thus $U \cap V \cap Y=\emptyset$;
(ii) They cover $Y$, which is equivalent to $Y \subseteq U \cup V$;
(iii) Neither is empty.

Thus $Y$ is [[connected]] if and only if (i) and (ii) imply that one of $U \cap Y, V \cap Y$ is empty or equivalently that $Y \subseteq V$ or $Y \subseteq U$.

### Sunflower Lemma
Let $X$ be a metric space. Let $\left\{A_{i}: i \in I\right\}$ be a collection of [[connected]] subsets of $X$ such that $\bigcap_{i \in I} A_{i} \neq \emptyset$.

Then $\bigcup_{i \in I} A_{i}$ is [[connected]].
#### Proof
We use the alternative characterisation of [[Connected|connectedness]] given in [[#Lemma 7.1.2]](ii).

Suppose that $f: \bigcup_{i \in I} A_{i} \rightarrow\{0,1\}$ is [[continuous]]. We must show that $f$ is constant. Pick $x_{0} \in \bigcap_{i \in I} A_{i}$. Then if $x \in \bigcup_{i \in I} A_{i}$ there is some $i$ for which $x \in A_{i}$. But then the restriction of $f$ to $A_{i}$ is constant since $A_{i}$ is [[connected]], so that $f(x)=f\left(x_{0}\right)$ as $x, x_{0} \in A_{i} .$ But since $x$ was arbitrary, it follows that $f$ is constant as required.

### Lemma 7.1.5: Connectedness and closures
Let $X$ be a metric space. If $A \subseteq X$ is [[connected]] then if $B$ is such that $A \subseteq B \subseteq$ [$\bar{A}$](Closure), the set $B$ is also [[connected]].

#### Proof
We use the criterion for a [[subspace]] to be connected from [[#Lemma 7.1.3]].

Suppose that $B \subseteq U \cup V$ where $U$ and $V$ are open in $X$ and $U \cap V \cap B=\emptyset$. Then certainly $A \subseteq U \cup V$ and $A \cap U \cap V=\emptyset .$ Hence, since $A$ is [[connected]], either $A \subseteq U$ or $A \subseteq V .$ Without loss of generality, $A \subseteq U$, and since $A \cap U \cap V=\emptyset$ this means that $A \subseteq V^{c}$. However, $V^{c}$ is closed and so taking closures we obtain $\bar{A} \subseteq \bar{V}^{c}=V^{c}$. In particular $B \subseteq V^{c}$ and so, since $B \subseteq U \cup V$, we must have $B \subseteq U .$ We have verified the criterion (Lemma $7.1 .3$ ) for a subspace to be connected.

### Lemma 7.1.6: Connected image of a connected set
Let $X$ be a [[connected]] metric space, and let $f: X \rightarrow Y$ be [[continuous]]. Then $f(X)$ is [[connected]].

> The property of connectedness is preserved under [[homeomorphism]].

---
### Theorem 7.2.1
A subset of $\mathbf{R}$ is [[connected]] if and only if it is an interval.

---
![[Path-Connected#Theorem 7.4.1]]