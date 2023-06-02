#ComplexAnalysis  

![[Path#Definition]]

## Definition
Let $X$ be a [[Metric Space]]. Then we say that $X$ is [[Path-Connected]] if the following is true: for any $a, b \in X$ there is a [[Continuous]] map $\gamma:[0,1] \rightarrow X$ with $\gamma(0)=a$ and $\gamma(1)=b$.

## Theorem 7.4.1
A [[Path-Connected]] [[Metric Space]] is [[Connected]].
#### Proof
Suppose that $X$ is [[Path-Connected]], and let $f: X \rightarrow\{0,1\}$. We claim that $f$ is constant, which is enough to establish [[Connected|connectedness]] of $X$ by [[Connected#Lemma 7.1.2]](ii).

Let $a, b \in X$, Since $X$ is [[Path-Connected]], there is a [[Path]] $\gamma:[0,1] \rightarrow X$ such that $\gamma(0)=a$ and $\gamma(1)=b$. Consider the composition $f \circ \gamma$. This is a continuous function from $[0,1]$ to $\{0,1\}$ and hence, since $[0,1]$ is [[Connected]], it is constant. Therefore $f(a)=(f \circ \gamma)(0)=(f \circ \gamma)(1)=f(b)$. Since $a$ and $b$ were arbitrary, this implies that $f$ is indeed constant.

## Theorem 7.4.2
A [[Connected]] [[Open]] subset of a [[Norm|normed]] space is [[Path-Connected]].

## Theorem 7.4.3
There is a [[Connected]] subset of $\mathbf{R}^{2}$ which is not [[Path-Connected]].

>There is a classic example, known as the Topologist's sine-curve. This is the set $A \subseteq \mathbf{R}^{2}$ given by $$\{(0, y):-1 \leqslant y \leqslant 1\} \cup\{(x, \sin (1 / x): x \in(0,1]\}$$