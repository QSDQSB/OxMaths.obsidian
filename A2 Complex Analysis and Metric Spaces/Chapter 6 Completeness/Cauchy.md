#ComplexAnalysis  

## Definition
Let $\left(x_{n}\right)_{n=1}^{\infty}$ be a sequence in some [[Metric Space]] $X$. Then we say that this sequence is
- **[[Bounded]]** if the set $\left\{x_{n}: n \geqslant 1\right\}$ is [[Bounded]] in the sense of Definition 1.6.2, that is to say if all the $x_{n}$ lie in some ball $B(a, R)$;
- **[[Cauchy]]** if the $x_{n}$ become arbitrarily close together as $n \rightarrow \infty$, in the following sense: for every $\varepsilon>0$, there is some $N$ such that $d\left(x_{n}, x_{m}\right)<\varepsilon$ whenever $n, m \geqslant N$.
- **Convergent** if there is some $a \in X$ such that $\lim _{n \rightarrow \infty} x_{n}=a$.

## Proposition 6.1.2
A convergent sequence is [[Cauchy]]. A [[Cauchy]] sequence is [[Bounded]]. Neither of the reverse implications holds in general.