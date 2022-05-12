## [[Theorem 1.1.17]]: Function limits via limits for sequences
#Analysis 
Let $E \subseteq \mathbb{R}$ (or $\mathbb C$), and $f:E\to \mathbb R$ (or $\mathbb C$) be a real (or complex) function. Let $p$ be a [[Analysis/Continuity/Limit Point]] of $E$  *(but $p$ is not necessary in $E$)*, and $l\in\mathbb{C}$. Then $\lim_{x\to p}f(x)=l$ if and only if for any sequence ($p_n$) in $E$ such that $p_n\not=p$ and $p_n\to p$, we have $$\lim_{n\to\infty}f(p_n)=l.$$
___
### Proof
#### ➡️ Necessity
Basically by definition of sequence limits.
#### ⬅️ Sufficiency
Assume by contradiction that it is not true, i.e. $\exists\varepsilon>0$, for each $n=1,2,...$ (with $\delta={1\over n}$) there is at least one point $x_n\in E$ such that $0<|x_n-p|<{1\over n}$ but $$ |f(x_n)-l|\geq\varepsilon.$$
Therefore we have constructed a sequence ($x_n$) which converges to $p$, $x_n\not=p$, but ($f(x_n)$) does not tend to $l$, which is a contradiction.
