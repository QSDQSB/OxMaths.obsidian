#Analysis #ComplexAnalysis 

## Definition
Let $\left(X, d_{X}\right)$ and $\left(Y, d_{Y}\right)$ be [[Metric Space|metric spaces]]. We say a function $f: X \rightarrow Y$ is [[Continuous]] at $a \in X$ if for any $\epsilon>0$ there is a $\delta>0$ such that for any $x \in X$ with $d_{X}(a, x)<\delta$ we have $d_{Y}(f(x), f(a))<\epsilon$.
We say $f$ is [[Continuous]] if it is [[Continuous]] at every $a \in X$.

## Lemma 2.2.1
Let $f: V \rightarrow W$ be a linear map between [normed](Norm.md) vector spaces. Then $f$ is [[Continuous]] if and only if $\{\|f(x)\|:\|x\| \leqslant 1\}$ is bounded.

### Proof
Suppose first that $f$ is [[Continuous]]. In particular, it is continuous at $0 \in V$. Therefore, taking $\varepsilon=1$ in the definition of continuity, there is some $\delta>0$ such that $d(f(x), f(0))<1$ whenever $\|x\|<\delta .$ Since $f(0)=0$, this implies that $\|f(x)\| \leqslant 1$ for these $x .$ Now suppose that $\|v\|=1 .$ Then $\|\delta v / 2\|=\delta / 2<\delta$ and so $\|f(\delta v / 2)\| \leqslant 1 .$ Since $f$ is linear, $f(\delta v / 2)=\delta f(v) / 2$, and so $\|f(\delta v / 2)\|=$ $\delta\|f(v)\| / 2 .$
It follows that $\|f(v)\| \leqslant 2 / \delta$, and so indeed the set $\{\|f(x)\|:\|x\| \leqslant 1\}$ is bounded.

For the converse, suppose that $\|f(v)\|<M$ for all $v$ with $\|v\| \leqslant 1 .$ Let $\varepsilon>0$ and set $\delta:=\epsilon / M .$ Then if $\|v-w\|<\delta$ we have
$$
\|f(v)-f(w)\|=\|f(v-w)\|=\delta\left\|f\left(\delta^{-1}(v-w)\right)\right\|<\delta M=\epsilon
$$
so that $f$ is in fact [[Uniformly Continuous]] on $V$.