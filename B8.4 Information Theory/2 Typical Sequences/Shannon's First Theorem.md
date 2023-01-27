#InfoTheory 

### $A^{\bf\color{yellow}*}$
For a finite set $A$, denote with $A^{\bf\color{yellow}*}$ the set of finite sequences in $A$.

## Shannon's First Theorem
Let $X$ be discrete random variable with state space $\mathcal{X}$. For every $\varepsilon>0$, there exists an integer $n$, and a map
$$
c: \mathcal{X}^n \longrightarrow\{0,1\}^*
$$
such that
1) the map $\cup_{k \geq 0} \mathcal{X}^{n k} \longrightarrow\{0,1\}^*$ given by $\left(x_1, \cdots, x_k\right)$ $\mapsto$ $c\left(x_1\right) \cdots c\left(x_k\right)$ $\in\{0,1\}^*$ is injective;
2) $\frac{1}{n} \mathbb{E}\left[\left|c\left(X_1, \cdots, X_n\right)\right|\right] \leq H(X)+\varepsilon$.

## Strong Typicality $S_n^\varepsilon$
Denote with $\mathcal{S}_n^{\varepsilon}$ the *smallest subset* of $\mathcal{X}^n$ such that
$$
\mathbb{P}\left(\left(X_1, \cdots, X_n\right) \in \mathcal{S}_n^{\varepsilon}\right) \geq 1-\varepsilon .
$$
>We can construct this set by ordering sequences by their probability and adding them until the probability mass is greater or equal $1-\varepsilon$.

### Proposition 2.10
Let $\left(\varepsilon_n\right)_n$ be a strictly positive sequence such that $\lim _{n \rightarrow+\infty} \varepsilon_n=0$. Then
$$
\lim _{n \rightarrow+\infty}\left\{\lim _{m \rightarrow+\infty} \frac{1}{m} \log \left(\frac{\left|\mathcal{S}_m^{\varepsilon_n}\right|}{\left|\mathcal{T}_m^{\varepsilon_n}\right|}\right)\right\}=0
$$
[[Typical Sequences|typical sequence]]

