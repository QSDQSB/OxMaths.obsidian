#ComplexAnalysis 

## Definition: Multi-valued Function
A multi-valued function or multi-function on a subset $U \subseteq \mathbb{C}$ is a map $f: U \rightarrow \mathcal{P}(\mathbb{C})$ assigning to each point in $U$ a subset of the complex numbers.
>1 We use the notation $\mathcal{P}(X)$ to denote the power set of $X$, that is, the set of all subsets of $X$

## Definition: Branch
A [[Branch]] of $f$ on a subset $V \subseteq U$ is a function $g: V \rightarrow \mathbb{C}$ such that $g(z) \in f(z)$, for all $z \in V$. If $g$ is continuous (or [[Holomorphic]]) on $V$ we refer to it as a continuous, (respectively [[Holomorphic]]) [[Branch]] of $f$.

>The square root $z \mapsto\left[z^{1 / 2}\right]$ is a multifunction

```ad-note
The ***principal branch*** of $\operatorname{Log}$ is defined by taking $\arg (z) \in(-\pi, \pi]$.
```

## Example 4.7
Another example of a natural multifunction to consider in this context is $[\arg (z)]:=\left\{\theta \in \mathbb{R}: z=|z| e^{i \theta}\right\}$ defined on $\mathbb{C} \backslash\{0\}$. Clearly if $z=|z| e^{i \theta}$ then $\arg (z)$ is equal to the set $\{\theta+2 n \pi: n \in \mathbb{Z}\}$.

We claim that *there is no continuous [[Branch]] of $[\arg (z)]$ on $\mathbb{C} \backslash\{0\}$*. 

Consider the circle $S=\{z:|z|=1\}$. Suppose that $f(z)$ is a continuous branch of $[\arg (z)]$ defined on $S$. Let's say that $f(1)=2 n \pi, n \in \mathbb{Z}$. 

Consider $g:[0,2 \pi) \rightarrow \mathbb{R}$ given by $g(t)=2 n \pi+t .$ Then $f\left(e^{i 0}\right)=g(0)=2 n \pi .$ Since $f$ is continuous there is some $\delta>0$ such that $f\left(e^{i t}\right)=g(t)$ for all $t \in[0, \delta)$. 

It suffices to pick $\delta$ so that when $|t-s|<\delta$ we have $\left|f\left(e^{i t}\right)-f\left(e^{i s}\right)\right|<1$.

Consider now the set $A=\left\{t: f\left(e^{i t}\right)=g(t)\right\} \subseteq[0,2 \pi)$. This is an [[Open]] and [[A2 Complex Analysis and Metric Spaces/Chapter 4 Open and Closed Sets/Closed|closed]] subset of $[0,2 \pi)$, so, since $[0,2 \pi)$ is [connected](Connected.md#Lemma%207.1.2), $A=[0,2 \pi)$. But then $\lim _{t \rightarrow 2 \pi} f\left(e^{i t}\right)=2(n+1) \pi \neq f(1)$, while $\lim _{t \rightarrow 2 \pi} e^{i t}=1$, so $f$ is not continuous.

```ad-note
The argument multifunction is closely related to the logarithm.

**There is a continuous branch of $[\log (z)]$ on a set $U$ if and only if there is continuous branch of $[\arg (z)]$ on $U$.**

Indeed if $f(z)$ is a continuous [[branch]] of $[\arg (z)]$ on $U$ we may define a continuous [[branch]] of $[\operatorname{Log} (z)]$ by $g(z)=\log |z|+i f(z)$, and conversely given $g(z)$ we may define $f(z)=\Im(g(z))$.
```