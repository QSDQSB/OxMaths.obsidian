#ComplexAnalysis 

## Proposition 9.3.1.
The interval $[a, b]$ is [[Compact]].

### Proof
Let $\mathcal{U}=\left\{U_{i}: i \in I\right\}$ be an [[Open Cover]] of $[a, b]$ (the $U_{i}$ are open in $\mathbf{R}$).
Define $S$ to be the set of all $x \in[a, b]$ for which $[a, x]$ is covered by some finite subcollection of the $U_{i}$.

Certainly $S \neq \emptyset$, since $a \in S . S$ is [[Bounded]] above by $b$. Therefore it has a supremum $c=\sup (S)$, and $c \in[a, b]$. In fact $c>a$ : if $a \in U_{j}$ then $U_{j}$ contains some interval $[a-\eta, a+\eta], \eta>0$, so $a+\eta \in S$.

Assume that $c<b$. Since $\mathcal{U}$ is an [[Open Cover]] of $[a, b], c$ lies in some set $U_{j}$. Since $U_{j}$ is open, some [[Open]] interval $[c-\varepsilon, c+\varepsilon], \varepsilon>0$, is contained in $U_{j}$. Assume $\varepsilon$ is chosen so small that $c-\varepsilon>a$ and $c+\varepsilon<b$.

Now $c-\varepsilon$ is contained in $S$, or else it would be an upper bound for $S$, smaller than $c$. Therefore $[a, c-\varepsilon]$ is covered by finitely many sets from $\mathcal{U}$. These sets, together with $U_{j}$, then give a covering of $[a, c+\varepsilon]$ by a finite subcollection of $\mathcal{U}$. This contradicts the fact that $c$ is an upper bound for $S$.

We are forced to conclude that $c=b$. Now if $b \in U_{i}$ then $U_{i}$ contains some interval $[b-\kappa, b+\kappa], \kappa>0$. Since $c=\sup (S)=b, b-\kappa \in S$, and so $[a, b-\kappa]$ is covered by a finite subcollection of $\mathcal{U}$. This subcollection, together with $U_{i}$, gives a finite [[Subcover]] of $[a, b]$.