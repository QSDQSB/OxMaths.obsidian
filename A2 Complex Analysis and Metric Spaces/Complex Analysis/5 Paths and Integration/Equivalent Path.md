---
aliases: [equivalent]
---
#ComplexAnalysis 

## Definition
We will say two parametrized paths $\gamma_{1}:[a, b] \rightarrow \mathbb{C}$ and $\gamma_{2}:[c, d] \rightarrow \mathbb{C}$ are [[Equivalent Path|equivalent]] if there is a continuously differentiable bijective function $s:[a, b] \rightarrow[c, d]$ such that $s^{\prime}(t)>0$ for all $t \in[a, b]$ and $\gamma_{1}=\gamma_{2} \circ s .$

It is straight-forward to check that equivalence is indeed an [[equivalence relation]] on parametrized paths, and we will call the equivalence classes oriented curves in the complex plane.

We denote the equivalence class of $\gamma$ by $[\gamma] .$ The condition that $s^{\prime}(t)>0$ ensures that the path is traversed in the same direction for each of the parametrizations $\gamma_{1}$ and $\gamma_{2}$. Moreover $\gamma_{1}$ is [piecewise $C^{1}$](Path%20Differentiable.md#Piecewise%20C1) if and only if $\gamma_{2}$ is.