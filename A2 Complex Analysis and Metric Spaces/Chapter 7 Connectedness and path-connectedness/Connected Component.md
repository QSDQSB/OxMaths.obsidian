---
aliases: [connected components]
---
#ComplexAnalysis  
## Definition
From [[Connected#Sunflower Lemma]] for each $x \in X$, there is a unique maximal [[Connected]] subset of $X$ containing $x$, which contains all other such sets (take the union of all connected subsets of $X$ containing $x)$. This is called the [[Connected Component]] of $X$ containing $x$.

### Proposition 7.1.7 
The [[Connected Component|connected components]] of a [[Metric Space]] **partition** the space. $A$ space is [[Connected]] if and only if it has a unique [[Connected Component]].

#### Proof
Let $X$ be the space, and for $x \in X$ write $\Gamma(x)$ for the [[Connected]] component containing $x .$ Suppose that $\Gamma(x)$ and $\Gamma(y)$ are not disjoint, say $a \in \Gamma(x) \cap \Gamma(y)$ We wish to show that they coincide, which is what it means for them to partition the space. By the [[Connected]], $\Gamma(x) \cup \Gamma(y)$ is [[Connected#Sunflower Lemma]]. By the definition of connected component, $\Gamma(x)$ must contain this set, which of course means that $\Gamma(y) \subseteq \Gamma(x) .$ Similarly $\Gamma(x) \subseteq \Gamma(y)$, and so $\Gamma(x)=\Gamma(y)$.