#ComplexAnalysis 

## Proposition 3.20
We have $\exp (z+w)=\exp (z) \exp (w)$.
### Proof
Fix $a \in \mathbb{C}$, and consider the function $f(z)=\exp (z) \exp (a-z)$. Differentiating and using the product rule and [[chain rule]], we see that
$$
f^{\prime}(z)=\exp (z) \exp (a-z)-\exp (z) \exp (a-z)=0
$$
Therefore, by [[Complex Differentiable#Lemma 3.8]], $f$ is constant. It follows that
$$
f(z)=f(0)=\exp (a)
$$
that is to say
$$
\exp (z) \exp (a-z)=\exp (a)
$$
Substituting $a=z+w$ gives the stated result.

### Corollary 3.21
For $x, y \in \mathbb{R}$ we have $$e^{x+i y}=e^{x}(\cos y+i \sin y)$$

## Proposition 3.22
Let $D=\mathbb{C} \backslash B$, where $B=\{x \in \mathbb{R}: x \leq 0\} .$ That is, $D$ is the complex plane minus the negative real axis (and 0). Define the function Log : $D \rightarrow \mathbb{C}$ as follows: if $z=|z| e^{i \ddot{\theta}}$ with $\theta \in(-\pi, \pi]$ then set
$$
\operatorname{Log} (z):=\log |z|+i \theta
$$
Then $\operatorname{Log}$ is [[Holomorphic]] on $D$.