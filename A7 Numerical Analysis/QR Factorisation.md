
# QR Factorisation
#NumericalAnalysis 

## Theorem: QR Factorisation
Given any square matrix $A$, there exists an ==orthogonal== matrix $Q$ and an ==upper triangular== matrix $R$ such that
$$
A=Q R
$$
![[Householder]]
## Thin QR Factorisation
$A \in \mathbb{R}^{m \times n}$, $m>n$:
$$
\Large
A=[Q][R]=
\left[
\begin{array}{l:l}\hat{Q}: Q_{\perp}\end{array}\right]
\left[\begin{array}{l}\hat{R}\\0
\end{array}\right]
=\hat{Q} \hat{R}
$$