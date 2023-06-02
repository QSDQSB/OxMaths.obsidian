---
aliases: [Möbius transformations, Möbius transformation, Möbius maps]
---
#ComplexAnalysis 

## Definition
The general linear [[group]] $\mathrm{GL}_{2}(\mathbb{C})$ consists of all [[invertible]] $2 \times 2$ matrices $g=\left(\begin{array}{ll}a & b \\ c & d\end{array}\right)$ with $a, b, c, d \in \mathbb{C}$, with the group operation being matrix multiplication.

Each element $g \in \mathrm{GL}_{2}(\mathbb{C})$ gives a [[Möbius map]] $\Psi_{g}: \mathbb{C}_{\infty} \rightarrow \mathbb{C}_{\infty} .$ Roughly, this is given by the formula
$$
\Psi_{g}(z):=\frac{a z+b}{c z+d}
$$
but one needs to be careful about $\infty$, as follows:
- If $c \neq 0$ then we define $\Psi_{g}(-d / c)=\infty$ and $\Psi_{g}(\infty)=a / c ;$
- If $c=0$ then we define $\Psi_{g}(\infty)=\infty$

```ad-remark
Two elements $g, g^{\prime} \in \mathrm{GL}_{2}(\mathbb{C})$ give the same [[Möbius map]] if $g=\lambda g^{\prime}$ for some $\lambda \neq 0.$
```


### Proposition 2.8: Composition of Möbius maps
We have $\Psi_{g_{1} g_{2}}=\Psi_{g_{1}} \circ \Psi_{g_{2}}$. That is, $\mathrm{GL}_{2}(\mathbb{C})$ acts on $\mathbb{C}_{\infty}$ via [[Möbius map]].

> Could be proved by [[Complex projective line#^Equation2-1]]

### Decomposing Möbius Maps
#### Lemma 2.12
Every [[Möbius map]] can be written as a composition of translations, dilations and inversions.

##### Proof
Let $\Psi_{g}, g=\left(\begin{array}{ll}a & b \\ c & d\end{array}\right)$, be the Möbius map we are interested in. Suppose first that $c \neq 0$. Then, putting aside any worries about $\infty$, we have the following chain of compositions:

$$z \stackrel{\Psi_{D(c)}}{\longrightarrow} c z \stackrel{\Psi_{T(d)}}{\longrightarrow} c z+d \stackrel{\Psi_{J}}{\longrightarrow} \frac{1}{c z+d} \stackrel{\Psi_{D\left(\frac{b c-a d}{c}\right)}}{\longrightarrow} \frac{b-\frac{a d}{c}}{c z+d} \stackrel{\Psi_{T\left(\frac{a}{c}\right)}}{\longrightarrow} \frac{a z+b}{c z+d}$$

### Proposition 12.9
```ad-theorem
title: Proposition
If $z_{1}, z_{2}, z_{3}$ and $w_{1}, w_{2}, w_{3}$ are triples of pairwise distinct complex numbers, then there is a unique [[Möbius map|Möbius transformation]] $f$ such that $f\left(z_{i}\right)=$ $w_{i}$ for each $i=1,2,3$.
```
^Proposition-12-9

#### Proof of Proposition 12.9
It is enough to show that, given any triple $\left(z_{1}, z_{2}, z_{3}\right)$ of complex numbers, we can find a Möbius transformations which takes $z_{1}, z_{2}, z_{3}$ to $0,1, \infty$ respectively. Indeed if $f_{1}$ is such a transformation, and $f_{2}$ takes $0,1, \infty$ to $w_{1}, w_{2}, w_{3}$ respectively, then clearly $f_{2} \circ f_{1}^{-1}$ is a Möbius transformation which takes $z_{i}$ to $w_{i}$ for each $i$.
Now consider
$$
\Large
f(z)=\frac{\left(z-z_{1}\right)\left(z_{2}-z_{3}\right)}{\left(z-z_{3}\right)\left(z_{2}-z_{1}\right)}
$$
It is easy to check that $f\left(z_{1}\right)=0, f\left(z_{2}\right)=1, f\left(z_{3}\right)=\infty$, and clearly $f$ is a Möbius transformation as required. If any of $z_{1}, z_{2}$ or $z_{3}$ is $\infty$, then one can find a similar transformation (for example by letting $z_{i} \rightarrow \infty$ in the above formula). Indeed if $z_{1}=\infty$ then we set $f(z)=\frac{z_{2}-z_{3}}{z-z_{3}}$; if $z_{2}=\infty$, we take $f(z)=\frac{z-z_{1}}{z-z_{3}}$; and finally if $z_{3}=\infty$ take $f(z)=\frac{z-z_{1}}{z_{2}-z_{1}}$.

To see the $f$ is unique, suppose $f_{1}$ and $f_{2}$ both took $z_{1}, z_{2}, z_{3}$ to $w_{1}, w_{2}, w_{3}$. Then taking Möbius transformations $g, h$ sending $z_{1}, z_{2}, z_{3}$ and $w_{1}, w_{2}, w_{3}$ to $0,1, \infty$ the transformations $h f_{1} g^{-1}$ and $h f_{2} g^{-1}$ both take $(0,1, \infty)$ to $(0,1, \infty)$. But suppose $T(z)=\frac{a z+b}{c z+d}$ is any Möbius transformation with $T(0)=0$, $T(1)=1$ and $T(\infty)=\infty$. Since $T$ fixes $\infty$ it follows $c=0$. Since $T(0)=0$ it follows that $b / d=0$ hence $b=0$, thus $T(z)=a / d \cdot z$, and since $T(1)=1$ it follows $a / d=1$ and hence $T(z)=z$. Thus we see that
$$
h f_{1} g^{-1}=h f_{2} g^{-1}=\mathrm{id},
$$
and so $f_{1}=f_{2}$ as required.