---
aliases: [connected components]
---
## Connected Component
#ComplexAnalysis  

### Definition
From [[Connected#Sunflower Lemma]] for each $x \in X$, there is a unique maximal [[connected]] subset of $X$ containing $x$, which contains all other such sets (take the union of all connected subsets of $X$ containing $x)$. This is called the [[connected component]] of $X$ containing $x$.

### Proposition 7.1.7 
The [[Connected Component|connected components]] of a [[metric space]] **partition** the space. $A$ space is [[connected]] if and only if it has a unique [[connected component]].

#### Proof
Let $X$ be the space, and for $x \in X$ write $\Gamma(x)$ for the [[connected]] component containing $x .$ Suppose that $\Gamma(x)$ and $\Gamma(y)$ are not disjoint, say $a \in \Gamma(x) \cap \Gamma(y)$ We wish to show that they coincide, which is what it means for them to partition the space. By the Sunflower Lemma, $\Gamma(x) \cup \Gamma(y)$ is [[connected]]. By the definition of connected component, $\Gamma(x)$ must contain this set, which of course means that $\Gamma(y) \subseteq \Gamma(x) .$ Similarly $\Gamma(x) \subseteq \Gamma(y)$, and so $\Gamma(x)=\Gamma(y)$.