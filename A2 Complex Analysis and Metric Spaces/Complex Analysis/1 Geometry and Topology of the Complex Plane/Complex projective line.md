#ComplexAnalysis 

## Definition
Define an [[equivalence relation]] on $\mathbb{C}^{2} \backslash\{0\}$ as follows. We write $\left(z_{1}, z_{2}\right) \sim\left(z_{1}^{\prime}, z_{2}^{\prime}\right)$ iff there is some $\lambda \neq 0$ such that $z_{1}=\lambda z_{1}^{\prime}, z_{2}=\lambda z_{2}^{\prime}$. The set of equivalence classes is denoted by ==$\mathbb{P}^{1}(\mathbb{C})$== and is called the [[Complex projective line]]. The [[equivalence class]] of $\left(z_{1}, z_{2}\right)$ is traditionally denoted $\left[z_{1}\right.$ : $\left.z_{2}\right]$. ^1a83a9

## Lemma 2.10
> Every element of $\mathbb{P}^{1}(\mathbb{C})$ is equivalent to precisely one of the elements $[z: 1], z \in \mathbb{C}$ and $[1: 0]$

Interpret $[1: 0]$ as the [[point at infinity]].
We identify $\mathbb{C}_{\infty}$ with $\mathbb{P}^{1}(\mathbb{C})$ using the map $\iota: \mathbb{C}_{\infty} \rightarrow \mathbb{P}^{1}(\mathbb{C})$ defined by
$$
\iota(z)=[z: 1], \quad \iota(\infty)=[1: 0]
$$
$\mathbb{P}^{1}(\mathbb{C})$ can be given a natural metric structure and it turns out that this identification is a [[Homeomorphism]], but we will not discuss this here.
Möbius maps extend naturally to maps on $\mathbb{P}^{1}(\mathbb{C})$.

## Lemma 2.11
> Let $g=\left(\begin{array}{ll}a & b \\ c & d\end{array}\right) \in \mathrm{GL}_{2}(\mathbb{C}) .$ Then is a well defined map $\tilde{\Psi}_{g}:$ $\mathbb{P}^{1}(\mathbb{C}) \rightarrow \mathbb{P}^{1}(\mathbb{C})$ defined by $$\tilde{\Psi}_{g}\left(\left[z_{1}: z_{2}\right]\right)=\left[a z_{1}+b z_{2}: c z_{1}+d z_{2}\right]$$
^Equation2-1

Moreover, $\tilde{\Psi}_{g} \circ \iota=\iota \circ \Psi_{g}$; that is, $\tilde{\Psi}_{g}$ "is" the [[Möbius map]] $\Psi_{g}$ under the identification of $\mathbb{C}_{\infty}$ with $\mathbb{P}^{1}(\mathbb{C}) .$
