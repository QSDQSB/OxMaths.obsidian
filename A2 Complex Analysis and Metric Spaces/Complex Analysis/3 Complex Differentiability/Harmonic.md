#ComplexAnalysis 

## Definition: Laplacian
Suppose that $u: \mathbb{R}^{2} \rightarrow \mathbb{R}$ is a function on some open set $U \subseteq \mathbb{R}^{2}$ which is twice differentiable (that is, the partial derivatives themselves have partial derivatives). Then we define the Laplacian $\Delta u=$ $\partial_{x x} u+\partial_{y y} u$, where $\partial_{x x} u=\partial_{x}\left(\partial_{x} u\right)=\partial_{x}^{2} u$ and similarly for $\partial_{y y} u$.

## Definition
Suppose that $u: \mathbb{R}^{2} \rightarrow \mathbb{R}$ is a function on some open set $U \subseteq \mathbb{R}^{2}$ which is twice [[Complex Differentiable|differentiable]]. Then we say that $u$ is [[Harmonic]] if $\Delta u=0$.

## Theorem 3.14
Let $U \subseteq \mathbb{C}$ be open, and suppose that $f: U \rightarrow \mathbb{C}$ is [[Holomorphic]]. Let the components of $f$ be $(u, v)$, and suppose that they are both twice continuously [[Complex Differentiable|differentiable]]. Then $u$ and $v$ are [[Harmonic]]. (i.e. they satisfy [[Laplace's Equation]])
### Proof
From the [[Cauchy-Riemann equations|Cauchy-Riemann equations]],
$$
\partial_{x x} u=\partial_{x y} v\left(=\partial_{x} \partial_{y} v\right), \quad \partial_{y y} u=-\partial_{y x} v
$$
However, under the stated conditions we have the symmetry property of partial derivatives
$$
\partial_{x y} v=\partial_{y x} v
$$
and the result follows.