## Inertia Tensor
#Dynamics 
### Definition
The [[inertia tensor]] $\mathcal{I}=\mathcal{I}^{(O)}=\left(\mathcal{I}_{i j}^{(O)}\right)$ of the [[rigid body]], about a point $O$ fixed in the body, is defined as
$$
\mathcal{I}_{i j}=\sum_{I=1}^{N} m_{I}\left[\left(\mathbf{r}_{I} \cdot \mathbf{r}_{I}\right) \delta_{i j}-r_{I i} r_{I j}\right]
$$
Here $\mathbf{r}_{I}=\sum_{i=1}^{3} r_{I i} \mathbf{e}_{i}$ are the position vectors of the body particles, in the rest frame basis $\left\{\mathbf{e}_{i}\right\}$.
Hence we may write the total [[angular momentum]] (8.11) in matrix notation as
$$
\mathbf{L}_{G}=\mathcal{I}^{(G)} \boldsymbol{\omega}=\sum_{i, j=1}^{3} \mathcal{I}_{i j}^{(G)} \omega_{j} \mathbf{e}_{i}
$$
where the coefficients of $\boldsymbol{\omega}$ are given via $\boldsymbol{\omega}=\sum_{k=1}^{3} \omega_{k} \mathbf{e}_{k}$.

- The label "tensor" is a common nomenclature in theoretical physics that here simply emphasises the inertia tensor maps a vector to a vector, in particular it maps angular velocity to angular momentum.
- The inertia tensor is defined in the rest frame of the body, and so is intrinsic to the body itself, and in particular independent of time $t$.
- The inertia depends on a choice of origin $O$, fixed in the body.
- The inertia tensor need not be proportional to the identity so that angular momentum and velocity are not parallel in general, leading to complex rigid body dynamics.
- The inertia tensor is symmetric, $\mathcal{I}=\mathcal{I}^{\mathrm{T}}$ (and real). By the Spectral Theorem in Linear Algebra II there is a change of basis by an orthogonal matrix $\mathcal{P}$ such that $\mathcal{P} \mathcal{I} \mathcal{P}^{\mathrm{T}}$ is diagonal, which simplifies the dynamics (somewhat).