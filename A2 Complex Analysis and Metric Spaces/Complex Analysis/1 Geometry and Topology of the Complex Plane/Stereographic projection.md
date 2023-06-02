#ComplexAnalysis
## Definition
Let
$$
\mathbb{S}=\left\{(x, y, z) \in \mathbb{R}^{3}: x^{2}+y^{2}+z^{2}=1\right\}
$$
be the unit sphere of radius 1 centred at the origin in $\mathbb{R}^{3}$. 

View the complex plane $\mathbb{C}$ as the copy of $\mathbb{R}^{2}$ inside $\mathbb{R}^{3}$ given by the plane $\{(x, y, 0) \in \mathbb{R}: x, y \in$ $\mathbb{R}\}$. Thus $z=x+i y$ corresponds to the point $(x, y, 0)$.

Let $N$ be the "north pole" $N=(0,0,1)$ of $\mathbb{S}$.

Define a bijective map $S: \mathbb{C} \rightarrow \mathbb{S} \backslash\{N\}$ as follows:

>To determine $S(z)$, join $z$ to $N$ by a straight line, and let $S(z)$ be the point where this line meets the sphere $\mathbb{S}$. This map (or more accurately its inverse) is called [[Stereographic projection]].

## Lemma 2.1: Formula for Stereographic Projection
Suppose that $z=x+i y$. Then
$$
S(z)=\left(\frac{2 x}{x^{2}+y^{2}+1}, \frac{2 y}{x^{2}+y^{2}+1}, \frac{x^{2}+y^{2}-1}{x^{2}+y^{2}+1}\right).
$$
Or $$S(z)=\frac{1}{1+|z|^{2}}\left(2 \Re(z), 2 \Im(z),|z|^{2}-1\right)$$ alternatively.

---
As we have seen, $\mathbb{C}$ may be identified with $\mathbb{S} \backslash\{N\}$ by [[Stereographic projection]]. The set $\mathbb{S} \backslash\{N\}$ has a natural metric, namely the one induced from the Euclidean [[Metric Space|metric]] on $\mathbb{R}^{3}$. This induces a metric $d$ on $\mathbb{C}$, the unique metric on $\mathbb{C}$ such that $S$ is an [[Isometry]]. To spell it out,
$$
d(z, w):=\|S(z)-S(w)\|
$$
Here is a formula for this metric.
## Lemma 2.2: Metric for C
For any $z, w \in \mathbb{C}$ we have
$$
d(z, w)=\frac{2|z-w|}{\sqrt{1+|z|^{2}} \sqrt{1+|w|^{2}}}
$$
#### Proof
Since $\|S(z)\|=\|S(w)\|=1$ we have $\|S(z)-S(w)\|^{2}=2-2\langle S(z), S(w)\rangle$, where $\langle$,$\rangle$ is the usual Euclidean inner product on $\mathbb{R}^{3}$. Using the formulae,
$$
\langle S(z), S(w)\rangle=1-\frac{2|z-w|^{2}}{\left(1+|z|^{2}\right)\left(1+|w|^{2}\right)}
$$
Therefore
$$
\|S(z)-S(w)\|^{2}=\frac{4|z-w|^{2}}{\left(1+|z|^{2}\right)\left(1+|w|^{2}\right)}
$$
as required.
```ad-note
On any bounded set $\{z \in \mathbb{C}:|z| \leq K\}$ we have
$$
c_{1}|z-w| \leq d(z, w) \leq c_{2}|z-w|
$$
for some $c_{1}, c_{2}>0$ depending on $K$. In fact, we could take $c_{2}=2$ and $c_{1}=\frac{1}{K^{2}}$ for $K \geq 1$.
```

## Adding in $\infty$
Extend the map $S$ to a map $S: \mathbb{C}_{\infty} \rightarrow \mathbb{S}$ by defining $S(\infty)=N$.
#### Lemma 2.3
For any $z \in \mathbb{C}$ we have
$$
d(z, \infty)=\frac{2}{\sqrt{1+|z|^{2}}}
$$

```ad-example
`Translations`	Let $a \in \mathbb{C}$. Define $f: \mathbb{C}_{\infty} \rightarrow \mathbb{C}_{\infty}$ by $f(z)=z+a$ for $z \in \mathbb{C}$ and $f(\infty)=\infty$. Then $f$ is a [[Continuous]] bijection.

>**Proof**. Clearly $f$ is [[Continuous]] with respect to the usual metric on $\mathbb{C}$. Therefore, restricted to $\mathbb{C}$, it is also continuous with respect to $d$, since $d$ is equivalent to the usual metric.
>
It remains to check continuity at $\infty$. Let $\varepsilon>0$. Now if $\delta>0$ and if $d(z, \infty)<\delta$ then $|z|>\sqrt{\frac{4}{\delta^{2}}-1}$ and so $|f(z)|>\sqrt{\frac{4}{\delta^{2}}-1}-|a|$. This tends to $\infty$ as $\delta \rightarrow 0$, so by choosing $\delta$ small enough in terms of $\varepsilon$ it will follows that $d(f(z), \infty)=\frac{2}{\sqrt{1+|f(z)|^{2}}}<\varepsilon$.

`Dilations`	Let $b \in \mathbb{C}$. Define $f: \mathbb{C}_{\infty} \rightarrow \mathbb{C}_{\infty}$ by $f(z)=b z$ for $z \in \mathbb{C}$ and $f(\infty)=\infty$. Then $f$ is a continuous bijection.

`Inversion`	Define $f: \mathbb{C}_{\infty} \rightarrow \mathbb{C}_{\infty}$ by $f(z)=1 / z$ for $z \in \mathbb{C} \backslash\{0\}$, $f(0)=\infty$ and $f(\infty)=0$. Then $f$ is a [[Continuous]] bijection.
```