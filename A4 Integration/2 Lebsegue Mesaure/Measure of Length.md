---
aliases: [measure of length]
---
#Integration 
## Definition
A [[Measure of Length]] for (all) subsets of $\mathbb{R}$ should be a function $m: \mathcal{P}(\mathbb{R}) \rightarrow[0, \infty]$ satisfying:
(i) $m(\emptyset)=0, m(\{x\})=0$;
(ii) $m(I)=b-a$ if $I$ is an interval with endpoints $a, b$, where $a<b$;
(iii) $m(A+x)=m(A)$;
(iv) $m(\alpha A)=|\alpha| m(A)$
(v) $m(A) \leq m(B)$ if $A \subseteq B ; \quad(m$ is monotone);
(vi) $m(A \cup B)=m(A)+m(B)$ if $A \cap B=\emptyset(m$ is finitely additive);
$(\mathrm{vi})^{\prime} m\left(\bigcup_{n=1}^{\infty} A_{n}\right)=\sum_{n=1}^{\infty} m\left(A_{n}\right)$ if $A_{n} \cap A_{k}=\emptyset$ for $k \neq n$ ( $m$ is countably additive); (vii) $m\left(\bigcup_{n=1}^{\infty} A_{n}\right)=\lim _{n \rightarrow \infty} m\left(A_{n}\right)$ if $\left(A_{n}\right)$ is an increasing sequence of sets.

![[Outer Measure#Definition]]