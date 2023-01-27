---
aliases: [householder, householder matrix]
tags: [NumericalAnalysis]
---
## Definition
For $w \in \mathbb{R}^{n}, w \neq 0$, the [[Householder]] reflector $H(w) \in \mathbb{R}^{n \times n}$ is the matrix
$$
\Large
H(w)=I-\frac{2}{w^{\mathrm{T}} w} w w^{\mathrm{T}} .
$$

## Proposition: H(w) is a symmetric orthogonal matrix.
### Proof
Symmetry is straightforward to verify. For orthogonality,
$$
\begin{aligned}
H(w) H(w)^{\mathrm{T}} &=\left(I-\frac{2}{w^{\mathrm{T}} w} w w^{\mathrm{T}}\right)\left(I-\frac{2}{w^{\mathrm{T}} w} w w^{\mathrm{T}}\right) \\
&=I-\frac{4}{w^{\mathrm{T}} w} w w^{\mathrm{T}}+\frac{4}{\left(w^{\mathrm{T}} w\right)^{2}} w\left(w^{\mathrm{T}} w\right) w^{\mathrm{T}} \\
&=I .
\end{aligned}
$$

## Lemma: H(w)u=v
Given $u \in \mathbb{R}^{n}$, there exists a $w \in \mathbb{R}^{n}$ such that
$$
H(w) u=\left[\begin{array}{c}
\alpha \\
0 \\
\vdots \\
0
\end{array}\right] \equiv v
$$
say, where $\alpha=\pm \sqrt{u^{\mathrm{T}} u}$.

### Proof
Take ==$w=\gamma(u-v)$==, where $\gamma \neq 0$. Recall that $u^{\mathrm{T}} u=v^{\mathrm{T}} v$. Thus,
$$
\begin{aligned}
w^{\mathrm{T}} w &=\gamma^{2}(u-v)^{\mathrm{T}}(u-v)=\gamma^{2}\left(u^{\mathrm{T}} u-2 u^{\mathrm{T}} v+v^{\mathrm{T}} v\right) \\
&=\gamma^{2}\left(u^{\mathrm{T}} u-2 u^{\mathrm{T}} v+u^{\mathrm{T}} u\right)=2 \gamma u^{\mathrm{T}}(\gamma(u-v)) \\
&=2 \gamma w^{\mathrm{T}} u
\end{aligned}
$$

So
$$
H(w) u=\left(I-\frac{2}{w^{\mathrm{T}} w} w w^{\mathrm{T}}\right) u=u-\frac{2 w^{\mathrm{T}} u}{w^{\mathrm{T}} w} w=u-\frac{1}{\gamma} w=u-(u-v)=v
$$