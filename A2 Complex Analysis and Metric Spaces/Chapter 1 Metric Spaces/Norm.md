---
aliases: [normed]
---
#ComplexAnalysis  

### Definition
Let $V$ be any vector space (over the reals). A function $\|\cdot\|: V \rightarrow[0, \infty)$ is called a [[Norm]] if the following are all true:
- $\|x\|=0$ if and only if $x=0$;
- $\|\lambda x\|=|\lambda|\|x\|$ for all $\lambda \in \mathbf{R}, x \in V$
- $\|x+y\| \leqslant\|x\|+\|y\|$ whenever $x, y \in V$.

>It is very easy to check that $d(x, y):=\|x-y\|$ defines a [[Metric Space|metric]] on $V$.

Indeed, we have already seen that when $V=\mathbf{R}^{n},$ $\|\cdot\|_{2}$ is a norm (and so the name "Euclidean norm" is appropriate) and we defined $d_{2}(x, y)=\|x-y\|_{2}$.

### Lemma 1.4.2
`Norm creates metric spaces.`
Let $V$ be a vector space over the reals, and let $\|\cdot\|$ be a [[Norm]] on it. Define $d: V \times V \rightarrow[0, \infty)$ by $d(x, y):=\|x-y\| .$ Then $(V, d)$ is a [[Metric Space]].

>
All metrics arising from a norm have the ***translation invariance*** property $$d(x + z, y + z) = d(x, y)$$, as well as the ***scalar invariance*** $$d(\lambda x, \lambda y) = | \lambda | d(x, y)$$