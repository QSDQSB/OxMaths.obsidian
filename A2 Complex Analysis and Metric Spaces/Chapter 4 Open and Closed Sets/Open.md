#ComplexAnalysis #Topology 

## Definition
```ad-definition
title: Open Set
If $X$ is a [[metric space]] then we say a subset $U \subseteq X$ is [[open]] (or [[open]] in $X$) if for each $y \in U$ there is some $\delta>0$ such that the [[open ball]] $B(y, \delta)$ is contained in $U$.
```

```ad-example
- The interval $(0,1)$ is [[open]] in $\mathbf{R}$, but $[0,1]$ is not;
- The rationals $\mathbf{Q}$ are not [[open]] in $\mathbf{R}$;
- If $X$ is a set with the discrete [[Metric Space|metric]], every set is [[open]].
```

### Lemma 4.1.2
Every [[Open ball]] in an [[Metric Space]] is an [[Open]] set.

### Lemma 4.2.1
Let $X$ be [[Metric Space]]. Then we have
(i) The subsets $X$ and $\emptyset$ are [[Open]].
(ii) For any indexing set $I$ and $\left\{U_{i}: i \in I\right\}$ a collection of [[Open]] sets, the set $\bigcup_{i \in I} U_{i}$ is an open set.
(iii) If $I$ is **finite** and $\left\{U_{i}: i \in I\right\}$ are [[Open]] sets then $\bigcap_{i \in I} U_{i}$ is [[Open]].


```ad-note
It is extremely important to note that the indexing set in (iii) must be finite. In general, an arbitrary intersection of open sets is not open; for instance, the intervals $U_{i}=(-1 / i, 1 / i)$ are all open in $\mathbf{R}$, but their intersection $\bigcap_{i=1}^{\infty} U_{i}$ is just the singleton $\{0\}$, which is not an open set.
```

> If $X$ is a [[Metric Space]], the collection of all open sets in $X$ is calld the topology of $X$.

---
### Subspaces
#### Lemma 4.5.1
Let $X$ be a [[Metric Space]] and suppose that $Y \subseteq X$. Then a subset $U \subseteq Y$ is an open subset of $Y$ if and only if there is an open subset $V$ of $X$ such that $U=Y \cap V$. Similarly a subset $Z \subseteq Y$ is a closed subset of $Y$ if and only if there is a [[A2 Complex Analysis and Metric Spaces/Chapter 4 Open and Closed Sets/Closed|closed]] subset $F$ of $X$ such that $Z=F \cap Y$.

