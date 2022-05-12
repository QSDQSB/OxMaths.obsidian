## Stabilizer
#Groups 

### Definition
If a group $G$ acts on a set $S$, then for $s\in S$, the [[stabilizer]] of s, written ==$\operatorname{Stab}(s)$==, is defined as
$$
\operatorname{Stab}(s)=\{g \in G: g \cdot s=s\} \subseteq G.
$$

![[Orbit#Examples]]

### Proposition 273
`Stabilizers are subgroups`
The stabilizers of an action are **subgroups**.
Proof. Let $G$ be a group acting on a set $S$ and $s \in S$. Then
$$
e \in \operatorname{Stab}(s) \text { as } e \cdot s=s
$$
If $g, h \in \operatorname{Stab}(s)$ then
$$
(g h) \cdot s=g \cdot(h \cdot s)=g \cdot s=s
$$
showing that $g h \in \operatorname{Stab}(s)$ and
$$
g^{-1} \cdot s=g^{-1} \cdot(g \cdot s)=\left(g^{-1} g\right) \cdot s=e \cdot s=s
$$
showing that $g^{-1} \in \operatorname{Stab}(s)$.

### Proposition 274
>If two elements lie in the same [[orbit]] then their stabilizers are [[conjugate]].

#### Proof
If $s, t$ lie in the same orbit of an action then there exists $g \in G$ such that $g \cdot s=t$. Then
$$
\begin{aligned}
h \in \operatorname{Stab}(s) & \Longleftrightarrow & h \cdot s=s \\
& \Longleftrightarrow & h \cdot\left(g^{-1} \cdot t\right)=g^{-1} \cdot t \\
& \Longleftrightarrow & g \cdot\left(h \cdot\left(g^{-1} \cdot t\right)\right)=g^{-1} \cdot t=t \\
& \Longleftrightarrow &\left(g h g^{-1}\right) \cdot t=t \\
& \Longleftrightarrow & g h g^{-1} \in \operatorname{Stab}(t) \\
& \Longleftrightarrow & h \in g^{-1} \operatorname{Stab}(t) g
\end{aligned}
$$
Hence
$$
\operatorname{Stab}(s)=g^{-1} \operatorname{Stab}(t) g.
$$