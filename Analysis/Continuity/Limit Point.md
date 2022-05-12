## Limit Point
#Analysis
### Definition
Let $E\subseteq\mathbb{R}$ (resp. $\mathbb{C}$) is called a *limit point* (or an *accumulation point*, a *cluster point*) of $E$, if for every $\varepsilon>0$, there is $z\in E$ other than $p$ such that
$$|z-p|<\varepsilon.$$
A point of $E$ which is not a limit point of $E$ is called an *isolated point* of $E$.

### Proposition 1.1.9
$p\in\mathbb{R}$ is a limit point of an interval $[a,b]$ ($(a,b]$, $[a,b)$ or $(a,b)$) if and only if $p\in[a,b]$, where $a,b$ are two numbers.

___
### Definition 1.1.13: Limit of a function
Let $E \subseteq \mathbb{R}$ (or $\mathbb C$), and $f:E\to \mathbb R$ (or $\mathbb C$) be a real (or complex) function. Let $p$ be a limit point of $E$  *(but $p$ is not necessary in $E$)*, and $l$ be a number. If for every $\varepsilon>0$ there is $\delta>0$ *(which may depend on $p$ and $\varepsilon$)* such that for every $x\in E$ with $0<|x-p|<\delta$ we have $| f(x)−l| < \varepsilon$, then we say $f$ tends to $l$ as $x$ goes to $p$ *(along $E$)*, written as
$$\lim_{x\to p}f(x)=l$$
or $f(x)\to l$ as $x\to p$ *(along $E$)*.

#### Remark 1.1.14
$f$ does not converge to $l$ as $x\to p$ indicates: $\exists \varepsilon>0$, $\forall \delta>0$, $\exists x\in E$ such that $0<|x-p|<\delta$ but $|f(x)-l|\geq\varepsilon$.

#### Example 1.1.15
Show that $f(x)=|x|^\alpha \sin{1\over x}\to0$ as $x\to 0$.
##### Hint
Take $\delta=\varepsilon^{1\over a}$.




#### Proposition 1.1.16: Uniqueness of limit of a function
Let $f:E\to \mathbb R$ (or $\mathbb C$) be a real (or complex) function. Let $p$ be a limit point of $E$. If $f$ has a limit as $x\to p$, then the limit is unique.
#### Hint
Assume for contradiction + [[Triangle inequality]]


#### [[Theorem 1.1.17]]: Function limits via limits for sequences