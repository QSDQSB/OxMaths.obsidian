#ComplexAnalysis 

### Definition
If $X$ is any set we define $B(X)$ to be the space of functions $f: X \rightarrow \mathbf{R}$ for which $f(X)=\{f(x): x \in X\}$ is bounded. If $f \in B(X)$, define $\|f\|_{\infty}=\sup _{x \in X}|f(x)|$

### Lemma 2.3.2
For any set $X, B(X)$ is a vector space, and $\|\cdot\|_{\infty}$ is a [[Norm]].

### Definition: Continuous Bounded Function Space
Let $X$ be a metric space. Write $C_{b}(X):=C(X) \cap B(X)$ for the space of continuous, bounded functions on $X$. Since $C_{b}(X)$ is a subspace of $B(X)$, it inherits the norm $\|f\|_{\infty}=\sup _{x \in X}|f(x)|$, and we may define a [[Metric Space|metric]] $d_{\infty}$ on $C_{b}(X)$ in the usual way via $d_{\infty}(f, g):=\|f-g\|_{\infty}$.