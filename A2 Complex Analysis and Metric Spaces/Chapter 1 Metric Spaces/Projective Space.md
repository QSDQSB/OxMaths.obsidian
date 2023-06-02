#ComplexAnalysis  

Consider the set $\mathbf{P}\left(\mathbf{R}^{n}\right)$ of one-dimensional subspaces of $\mathbf{R}^{n}$, that is to say lines through the origin). One way to define a distance on this set is to take, for lines $L_{1}, L_{2}$, the distance between $L_{1}$ and $L_{2}$ to
be
$$
d\left(L_{1}, L_{2}\right)=\sqrt{1-\frac{|\langle v, w\rangle|^{2}}{\|v\|^{2}\|w\|^{2}}}
$$
where $v$ and $w$ are any non-zero vectors in $L_{1}$ and $L_{2}$ respectively. It is easy to see this is independent of the choice of vectors $v$ and $w .$ The Cauchy-Schwarz inequality ensures that $d$ is well-defined, and moreover the criterion for equality in that inequality ensures positivity. The symmetry property is evident, while the triangle inequality is left as an exercise.

It is useful to think of the case when $n=2$ here, that is, the case of lines through
the origin in the plane $\mathbf{R}^{2}$. The distance between two such lines given by the above formula is then $\sin (\theta)$ where $\theta$ is the angle between the two lines (another exercise).