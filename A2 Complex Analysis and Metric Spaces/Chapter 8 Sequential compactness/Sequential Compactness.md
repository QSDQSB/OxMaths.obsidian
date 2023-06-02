---
aliases: [sequentially compact, compact]
---
## Sequential Compactness
#ComplexAnalysis #Topology  

## Definition
Let $X$ be a [[Metric Space]]. Then $X$ is said to be [[Sequential Compactness|sequentially compact]] if any sequence of elements in $X$ has a convergent subsequence.

```ad-example
The real line $\mathbf{R}$ is not [[Sequential Copactness|sequentially compact]]. For instance, the sequence $x_{n}=n$ has no convergent subsequence in this space.
```

## Lemma 8.2.1
A [[Sequential Compactness|sequentially compact]] subspace of a metric space is [[A2 Complex Analysis and Metric Spaces/Chapter 4 Open and Closed Sets/Closed|closed]] and bounded.
#### Lemma 8.2.2
A [[A2 Complex Analysis and Metric Spaces/Chapter 4 Open and Closed Sets/Closed|closed]] subset of a [[Sequential Compactness|sequentially compact]] [[Metric Space]] is [[sequentially compact]].

---
## Lemma 8.2.3
Let $X$ be a [[Metric Space]]. Suppose that $K$ is a sequentially compact subset of $X$, and that $U$ is an [[Open]] subset of $X$ containing $K .$ Then there is some $\varepsilon>0$ such that the "E-thickening" $\bigcup_{z \in K} B(z, \varepsilon)$ of $K$ is contained in $U$.

---
## Lemma 8.3.1
The image of a [[Sequential Compactness|sequentially compact]] [[Metric Space]] under a [[Continuous]] map is sequentially compact.

### Proof
Let $X$ be sequentially compact, and suppose that $f: X \rightarrow Y$ is [[Continuous]]. Let $\sigma=\left(f\left(x_{n}\right)\right)_{n=1}^{\infty}$ be a sequence of elements of $f(X) .$ The sequence $\left(x_{n}\right)$ contains a convergent subsequence $\left(x_{n_{k}}\right)$ say, with $x_{n_{k}} \rightarrow a$ as $k \rightarrow \infty$ for some $a \in X .$ But then, since $f$ is continuous, we have $f\left(x_{n_{k}}\right) \rightarrow f(a)$, and so $\sigma^{\prime}=\left(f\left(x_{n_{k}}\right)\right)_{k=1}^{\infty}$ is a convergent subsequence of $\sigma$.

>As a consequence of [[#Lemma 8.2.1]], we see that continuous function $f$ from a sequentially compact metric space $X$ to $\mathbf{R}$ has [[A2 Complex Analysis and Metric Spaces/Chapter 4 Open and Closed Sets/Closed|closed]] and [[Bounded]] image, so in particular $f$ is bounded and attains its bounds.

>Another consequence of [[#Lemma 8.3.1]] is the if $X$ and $Y$ are [[Homeomorphism|homeomorphic]] [[Metric Space|metric spaces]] and if $X$ is sequentially compact, then so is $Y$.

## Proposition 8.3.2
A [[Continuous]] function from a sequentially compact [[Metric Space]] to $\mathbf{R}$ is [[Uniformly Continuous]].

### Lemma from tutorial
If S is compact and maps to $\mathbf{R}$, then the image of it attains its max/min.

---
## Proposition 8.4.2
The [product](Product%20Space.md) of two sequentially compact metric spaces is [[Sequential Compactness|compact]].

---
## Proposition 8.5.1
A sequentially compact metric space is [[Complete]] and bounded. The converse is not true in general.

```ad-example
To show that the converse is not true in general, consider the following example. Take $C_{b}(\mathbf{R})$ to be the normed space of continuous bounded functions on the real line equipped as usual with the $\|\cdot\|_{\infty}$-norm and the associated metric. Define a function $\phi: \mathbf{R} \rightarrow \mathbf{R}$ by
$$
\phi(t)=\left\{\begin{array}{cc}
2 t+1, & -1 / 2 \leqslant t \leqslant 0 \\
1-2 t, & 0 \leqslant t \leqslant 1 / 2
\end{array}\right.
$$
and $\phi(t)=0$ for $t \notin[-1 / 2,1 / 2]$. For each $n \in \mathbf{N}$ set $f_{n}(t)=\phi(t+n)$ (we might call this sequence of functions a "moving bump"). All of the functions $f_{n}$ lie in $\bar{B}(0,1)$ (that is, have sup [[norm]] [[bounded]] by 1). However, if $n \neq m$ then $f_{n}(n)=1$, whilst $f_{m}(n)=0$, so $\left\|f_{n}-f_{m}\right\|_{\infty}=1$. Thus the sequence $\left(f_{n}\right)_{n=1}^{\infty}$ has no [[Cauchy]] subsequence, and hence certainly no convergent subsequence.
```