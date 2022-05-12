## Homomorphism from $\bf{Z_m}$ to $\bf{Z_n}$
#Groups 

### Proposition 231
The map $\phi: \mathbb{Z}_{m} \rightarrow \mathbb{Z}_{n}$ given by
$$
\phi(r \bmod m)=k r \bmod n
$$
is a well-defined [[homomorphism]] if and only if $n$ divides $\mathrm{km}$. As $\mathbb{Z}_{m}$ is **cyclic** then every [[homomorphism]] $\mathbb{Z}_{m} \rightarrow \mathbb{Z}_{n}$ is of this form.

#### Proof
If $\phi$ is a well-defined function then as $\overline{0}=\bar{m}$ in $\mathbb{Z}_{m}$ we need $\overline{0}=\overline{k m}$ to be true in $\mathbb{Z}_{n}$. That is we need $n$ to divide $k m$.
Conversely, suppose that $n$ divides $k m$ so that $k m=n c$ for some $c$. For $\phi$ to be well-defined, we need to ensure that
$$
r_{1} \bmod m=r_{2} \bmod m \Longrightarrow k r_{1} \bmod n=k r_{2} \bmod n
$$
or equivalently that if $m$ divides $x=r_{1}-r_{2}$ then $n$ divides $k x$. If $m$ divides $x$ then $x=m d$ for some $d$ and hence
$$
k x=k(m d)=(k m) d=(n c) d
$$
is a multiple of $n$ as required. It is then an easy check to see that $\phi(\bar{r})=k \bar{r}$ is a homomorphism provided it is well-defined.

---
### Example 232: Homomorphisms between $\large\bf Z_a$ to $\large\bf Z_b$
```ad-question
How many homomorphisms are there 
1) from $\mathbb{Z}_{6}$ to $\mathbb{Z}_{12}$ ?
2) from $\mathbb{Z}_{10}$ to $D_{8}$ ?
```

#### Solution
1) By [[#Proposition 231]] we know that any [[homomorphism]] $\mathbb{Z}_{6} \rightarrow \mathbb{Z}_{12}$ is of the form $\bar{r} \mapsto k \bar{r}$ where $12 \mid 6 k$ or equivalently $2 \mid k$. Hence $k$ is even. But as $k$ and $k+12$ would lead to the same homomorphism then there are in fact only six homomorphisms
$$
\bar{n} \mapsto 0, \quad \bar{n} \mapsto 2 \bar{n}, \quad \bar{n} \mapsto 4 \bar{n}, \quad \bar{n} \mapsto 6 \bar{n}, \quad \bar{n} \mapsto 8 \bar{n}, \quad \bar{n} \mapsto 10 \bar{n} .
$$
$$\begin{array}{|c|c|c|c|c|c|c|}
\hline \phi & \bar{n} \mapsto 0 & \bar{n} \mapsto 2 \bar{n} & \bar{n} \mapsto 4 \bar{n} & \bar{n} \mapsto 6 \bar{n} & \bar{n} \mapsto 8 \bar{n} & \bar{n} \mapsto 10 \bar{n} \\
\hline \text { ker } \phi & \mathbb{Z}_{6} & \{\overline{0}\} & \{\overline{0}, 3\} & \{\overline{0}, \overline{2}, \overline{4}\} & \{\overline{0}, \overline{3}\} & \{\overline{0}\} \\
\hline \operatorname{Im} \phi & \{\overline{0}\} & \{\overline{0}, \overline{2}, \overline{4}, \overline{6}, \overline{8}, \overline{10}\} & \{\overline{0}, \overline{4}, \overline{8}\} & \{\overline{0}, \overline{6}\} & \{\overline{0}, \overline{4}, \overline{8}\} & \{\overline{0}, \overline{2}, \overline{4}, \overline{6}, \overline{8}, \overline{10}\} \\
\hline
\end{array}$$
>Note that in each case $|\operatorname{ker} \phi| \times|\operatorname{Im} \phi|=6=\left|\mathbb{Z}_{6}\right|$.
2) Homomorphisms $\mathbb{Z}_{10} \rightarrow D_{8} .$ As in [[Homomorphism#Proposition 188]], it again follows that $\phi$ is entirely determined by $\phi(1)$ as $\mathbb{Z}_{10}$ is cyclic. Further o $(1)=10$ and so o $(\phi(1))$ divides 10. Also $o(\phi(1))$  divides $\left|D_{8}\right|=8$ as a consequence of Lagrange's Theorem. Combining these facts we see o $(\phi(1))$ divides 2. The orders of the elements of $D_{8}$ are given in the table below:
$$\begin{array}{|c|c|c|c|c|c|c|c|c|}
\hline g & e & r & r^{2} & r^{3} & s & r s & r^{2} s & r^{3} s \\
\hline \mathrm{o}(g) & 1 & 4 & 2 & 4 & 2 & 2 & 2 & 2 \\
\hline
\end{array}$$
The possible values of $\phi(1)$ are $e, r^{2}, s, r s, r^{2} s, r^{3} s$ and again each of these leads to a well-defined homomorphism.
$$
\bar{n} \mapsto e, \quad \bar{n} \mapsto r^{2 n}, \quad \bar{n} \mapsto s^{n}, \quad \bar{n} \mapsto(r s)^{n}, \quad \bar{n} \mapsto\left(r^{2} s\right)^{n}, \quad \bar{n} \mapsto\left(r^{3} s\right)^{n} .
$$
$$\begin{array}{|c|c|c|c|c|c|c|}
\hline \phi & \bar{n} \mapsto e & \bar{n} \mapsto r^{2 n} & \bar{n} \mapsto s^{n} & \bar{n} \mapsto(r s)^{n} & \bar{n} \mapsto\left(r^{2} s\right)^{n} & \bar{n} \mapsto\left(r^{3} s\right)^{n} \\
\hline \operatorname{ker} \phi & \mathbb{Z}_{6} & \langle\overline{2}\rangle=\{\overline{0}, \overline{2}, \overline{4}, \overline{6}, \overline{8}\} & \langle\overline{2}\rangle & \langle\overline{2}\rangle & \langle\overline{2}\rangle & \langle\overline{2}\rangle \\
\hline \operatorname{Im} \phi & \{e\} & \{e, r\} & \{e, s\} & \{e, r s\} & \left\{e, r^{2} s\right\} & \left\{e, r^{3} s\right\} \\
\hline
\end{array}$$
> Note that in each case $|\operatorname{ker} \phi| \times|\operatorname{Im} \phi|=10=\left|\mathbb{Z}_{10}\right|$.

```ad-remark
Let $G$ be a group and consider finding all the homomorphisms from $\mathbb{Z}$ to $G .$ A particular homomorphism $\phi$ is entirely determined by $\phi(1) .$ If $g=\phi(1)$ and $n=\mathrm{o}(g)<\infty$ then we see that $\operatorname{Im} \phi=\langle g\rangle \cong \mathbb{Z}_{n}$ and that $\operatorname{ker} \phi=n \mathbb{Z} .$ We have wrapped $\mathbb{Z}$ into $G$ going around and around $\langle g\rangle$ and repeating with period $n$. The map $\phi$ is not $1-1$ and we have collapsed its domain, $\mathbb{Z}$, in such a way for its image to match a subgroup of $G .$ More technically we have that $G /$ ker $\phi=\mathbb{Z} / n \mathbb{Z}$ is isomorphic to $\operatorname{Im} \phi \cong \mathbb{Z}_{n}$ with the pre-image of any element of the image being a coset of the kernel.

If we are considering homomorphisms from $\mathbb{Z}_{m}$ into $G$ these are likewise determined by $\phi(\overline{1})$ as $\mathbb{Z}_{m}$ is cyclic but we can only have $\phi(\overline{1})=g$ if $\mathrm{o}(g)=n$ divides $m$ as we must have that $\phi(\bar{m})=e_{G}$ for well-definedness. In this case ker $\phi=\langle\bar{n}\rangle$ and again we are collapsing $\mathbb{Z}_{m}$ onto $\mathbb{Z}_{m} /\langle\bar{n}\rangle \cong \mathbb{Z}_{n} \cong\langle g\rangle$

More generally, when considering homomorphisms $\phi: G \rightarrow H$ where $G$ need not be cyclic, we will still be addressing the same problem of how are we to collapse the group $G$ by ker $\phi$ in order to fit $G$ onto some subgroup of $H$ as its image. This is where the First Isomorphism Theorem helps.
```

---