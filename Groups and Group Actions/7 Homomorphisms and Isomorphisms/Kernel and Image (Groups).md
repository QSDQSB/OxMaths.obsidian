## Kernel and Image
#Groups 
### Definition: Kernel
Let $\phi: G \rightarrow H$ be a homomorphism between groups. Then:
(i) the ***kernel*** of $\phi$, written $\color{yellow}\ker\phi$, equals
$$
\operatorname{ker} \phi=\left\{g \in G: \phi(g)=e_{H}\right\} \subseteq G.
$$
### Definition: Image
(ii) the ***image*** of $\phi$, written $\color{yellow}\operatorname{Im} \phi$, equals
$$
\operatorname{Im} \phi=\{\phi(g): g \in G\} \subseteq H.
$$

### Examples
#### Example 194
The map $\phi: \mathbb{Z} \rightarrow \mathbb{Z}_{n}$ given by $\phi(n)=\bar{n}$ has kernel $n \mathbb{Z}$ and has image $\mathbb{Z}_{n}$.
#### Example 195
The map sgn: $S_{n} \rightarrow\{\pm 1\}$ has kernel $A_{n}$ and image $\{\pm 1\}$.
#### Example 196
The map det: $G L(n, \mathbb{R}) \rightarrow \mathbb{R}^{*}$ has kernel $S L(n, \mathbb{R})$ and image $\mathbb{R}^{*}$.
#### Example 197
The map $\phi: \mathbb{R} \rightarrow S^{1}$ given by $\phi(x)=e^{i x}$ has kernel $2 \pi \mathbb{Z}$ and image $S^{1} \cdot \phi$
#### Example 198
The map $\phi: \mathbb{C}^{*} \rightarrow \mathbb{R}^{*}$ given by $\phi(z)=|z|$ has kernel $S^{1}$ and image $(0, \infty)$.

### Proposition 192
`Kernel is a normal subgroup.`
>Let $\phi: G \rightarrow H$ be a [[homomorphism]] between two groups. Then $\mathrm{ker} \phi \triangleleft G$.
#### Proof
Say $k_{1}, k_{2} \in \operatorname{ker} \phi$ and $g \in G$. Then by [[subgroup test]]
$$
\phi\left(e_{G}\right)=e_{H} ; \quad \phi\left(k_{1} k_{2}\right)=\phi\left(k_{1}\right) \phi\left(k_{2}\right)=e_{H} e_{H}=e_{H}
$$
$$
\phi\left(k_{1}^{-1}\right)=\phi\left(k_{1}\right)^{-1}=e_{H}^{-1}=e_{H}
$$
showing that $\ker\phi$ is a [[subgroup]] of $G$; further as
$$
\phi\left(g^{-1} k_{1} g\right)=\phi\left(g^{-1}\right) \phi\left(k_{1}\right) \phi(g)=\phi(g)^{-1} e_{H} \phi(g)=e_{H}
$$
then $\ker\phi$ is a [[Normal Subgroup]] of $G$.

### Proposition 193
>Let $\phi: G \rightarrow H$ be a [[homomorphism]] between two groups. Then $\operatorname{Im} \phi \leqslant H$.
#### Proof
Note $e_{H}=\phi\left(e_{G}\right) \in \operatorname{Im} \phi .$ Say $h_{1}, h_{2} \in \operatorname{Im} \phi$. Then there are $g_{i}$ such that $\phi\left(g_{i}\right)=h_{i}$. Note
$$
h_{1} h_{2}=\phi\left(g_{1}\right) \phi\left(g_{2}\right)=\phi\left(g_{1} g_{2}\right) \in \operatorname{Im} \phi ; \quad h_{1}^{-1}=\phi\left(g_{1}\right)^{-1}=\phi\left(g_{1}^{-1}\right) \in \operatorname{Im} \phi.
$$
Then by [[Subgroup Test]].

### Proposition 199
>See [[Homomorphism#Proposition 199]]

A [[homomorphism]] is constant on a [[coset]] of $\ker\phi$ and takes different values on different cosets.

#### Corollary 200
Let $\phi: G \rightarrow H$ be a [[homomorphism]] between two groups. Then $\phi$ is $1-1$ if and only if $\ker\phi=\left\{e_{G}\right\}$.

### First Isomorphism Theorem
![[First Isomorphism Theorem#Theorem]]