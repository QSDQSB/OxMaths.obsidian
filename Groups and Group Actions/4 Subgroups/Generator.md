## Generator
#Groups 
### Definition
Let $G$ be a group. Let $S$ be a subset of $G$. The [[Subgroup]] ***[generated](Generator.md)*** by $S$, written $\langle S\rangle$, is the smallest [[subgroup]] of $G$ that contains $S$, that is, ^94f2cd
$$
\langle S\rangle=\bigcap_{S \subseteq H \leq G} H
$$
The elements of $S$ are called the **generators** of $\langle S\rangle$.

### Proposition 19
Let $G$ be a group. Take $g \in G$.
1) We have $\langle g\rangle=\left\{g^{k}: k \in \mathbb{Z}\right\}$.
2) If $g$ has [finite order](Finite%20Group.md), then $\langle g\rangle=\left\{e, g, g^{2}, \ldots, g^{o(g)-1}\right\}$. ^77c187
#### Proof
##### (i)
$\supseteq:$ Clearly if $k \in \mathbb{Z}$ then $g^{k} \in\langle g\rangle$, so $\langle g\rangle \supseteq\left\{g^{k}: k \in \mathbb{Z}\right\}$.
$\subseteq:$ Claim. $H=\left\{g^{k}: k \in \mathbb{Z}\right\}$ is a [[subgroup]] of $G$.
###### Proof of claim
>- We have $e=g^{0} \in H$ so $H$ is non-empty.
>- If $g^{k}, g^{l} \in H$, then $\left(g^{k}\right)\left(g^{l}\right)^{-1}=g^{k-l} \in H$.
>So by [[Subgroup Test]] have $H \leq G$, which proves the claim. So $\langle g\rangle \subseteq H$

So $\langle g\rangle=H$.

##### (ii)
Let $d=o(g)$.
$\supseteq$: Clearly $\langle g\rangle \supseteq\left\{e, g, \ldots, g^{d-1}\right\}$.
$\subseteq:$ Take $g^{k} \in\langle g\rangle .$
> By the [[Division Algorithm]], we have $k=q d+r$ for some $q, r \in \mathbb{Z}$ with $0 \leq r \leq d-1$.
Then $g^{k}=g^{q d+r}=\left(g^{d}\right)^{q} g^{r}=g^{r} \in\left\{e, g, \ldots, g^{d-1}\right\} .$
So $\langle g\rangle \subseteq\left\{e, g, \ldots, g^{d-1}\right\}$.

So $\langle g\rangle=\left\{e, g, \ldots, g^{d-1}\right\}$.
#### Remark
>A group is [[Cyclic]] precisely when there is some $g\in G$ such that $G=\langle g\rangle.$
In particular, a [[Finite Group]] $G$ is [[Cyclic]] if and only if there is some $g \in G$ with $o(g)=|G|$
### Theorem 20
Let $G$ be a [[Cyclic]] group, say $G=\langle g\rangle$.
1) If $G$ is **[finite](Finite%20Group.md)**, with $|G|=n$, then $G \cong C_{n}$.
2) If $G$ is **infinite**, then $G \cong \mathbb{Z}$.
#### Proof
(i) We see that $g$ has [[Order]] $n$, and $G=\left\{e, g, \ldots, g^{n-1}\right\} \cong C_{n}$.
(ii) Define
$$
\begin{aligned}
\theta: G & \rightarrow \mathbb{Z} \\
g^{k} & \mapsto k
\end{aligned}
$$
This is an [[Isomorphism]].

### Theorem 21
>Let $G$ be a [[cyclic]] group. Let $H$ be a [[subgroup]] of $G$. Then $H$ is [[Cyclic]].

#### Proof
>Say $G=\langle g\rangle$.
If $H=\{e\}$, then $H$ is [[cyclic]] and we are done. 
Suppose not, so $g^{k} \in H$ for some $k \in \mathbb{Z} \backslash\{0\}$. 
Then we must have $g^{l} \in H$ for some $l \in \mathbb{Z}^{>0}$, because if $g^{k} \in H$ then also $g^{-k} \in H$
Let $d=\min \left\{m \in \mathbb{Z}^{>0}: g^{m} \in H\right\}$.
Then certainly $\left\langle g^{d}\right\rangle \subseteq H$. 
Take $g^{n} \in H$. By the [[Division Algorithm]], there are $q, r \in \mathbb{Z}$ with $n=q d+r$ and $0 \leq r<d$.
Then $g^{n}=g^{q d+r}$, so 
$$g^{r}=g^{n-q d}=g^{n}\left(g^{d}\right)^{-q} \in H.$$ Since $0 \leq r<d$ and $d$ is *minimal*, we must have $r=0$. That is, $d$ divides
$n$, and so $g^{n} \in\left\langle g^{d}\right\rangle$. So
$$H=\left\langle g^{d}\right\rangle \,\text{is cyclic.}$$

#### Remark
>Applying this to the [[cyclic]] group $\mathbb{Z}$ shows that every [[Subgroup]] of $\mathbb{Z}$ is of the form $$\langle m\rangle=m \mathbb{Z}$$ for some integer $m$.
Consequently, given any two integers $m$ and $n$, there are integers $h$ and $l$ such that
$$\langle m, n\rangle=\langle h\rangle \text { and }\langle m\rangle \cap\langle n\rangle=\langle l\rangle.$$ We may assume that $h$ and $l$ are positive.

### Proposition 22
Let $m, n$ be integers. Let $h, l$ be positive integers such that $\langle m, n\rangle=\langle h\rangle$ and $\langle m\rangle \cap\langle n\rangle=\langle l\rangle .$ Then
1) $h \mid m$ and $h \mid n$ (that is, $h$ is a **common factor** of $m$ and $n$ );
2) there are $a, b \in \mathbb{Z}$ such that $h=a m+b n$ ***(Bézout's lemma)***;
3) if $d \mid m$ and $d \mid n$, then $d \mid h$ (that is, $h$ is divisible by every common factor of $m$ and $n)$;
4) $m \mid l$ and $n \mid l$ (that is, $l$ is a common multiple of $m$ and $n$ );
5) if $m \mid c$ and $n \mid c$, then $l \mid c$ (that is, any common multiple of $m$ and $n$ is a multiple of $l$ ).

### Definition: hcf&lcm
We define $h$ here to be the **highest common factor** $(h c f)$ of $m$ and $n$, and $l$ to be the **least common multiple** $(l c m)$ of $m$ and $n$.

### Lemma 23
Let $G$ be a group, let $g \in G$ be an element with finite [[order]] d. We have $g^{k}=e$ if and only if $d \mid k$.
#### Proof
##### $(\Leftarrow)$
Assume that $d \mid k$, say $k=a d$ where $a \in \mathbb{Z}$. Then $g^{k}=\left(g^{d}\right)^{a}=e$.
##### $(\Rightarrow)$
Assume that $g^{k}=e$ By the division algorithm, we have $k=q d+r$ for some integers $q, r$ with $0 \leq q<d$.
Then $g^{r}=g^{k-q d}=g^{k}\left(g^{d}\right)^{q}=e$.
Since $r<d$ and $d$ is minimal, we have $r=0$. So $d \mid k$.
