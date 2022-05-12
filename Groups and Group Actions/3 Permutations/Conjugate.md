## Conjugate
#Groups 

- [[Conjugacy Class]]


### Definition
We say that two [permutations](Permutation.md) $\sigma, \tau \in S_{n}$ are ***[[conjugate]]*** if there is some $\rho \in S_{n}$ with $\sigma=\rho^{-1} \tau \rho$.
> Let $G$ be a group. We say that $g_{1}, g_{2} \in G$ are [[conjugate]] if there is $h \in G$ with $g_{1}=h^{-1} g_{2} h$. 
### Lemma 11
Let $\left(a_{1} a_{2} \ldots a_{k}\right)$ be a [[cycle]] in $S_{n}$, and take $\sigma \in S_{n} .$ Then
$$
\sigma^{-1}\left(\begin{array}{llll}
a_{1} & a_{2} & \ldots & a_{k}
\end{array}\right) \sigma=\left(\begin{array}{llll}
a_{1} \sigma & a_{2} \sigma & \ldots & a_{k} \sigma
\end{array}\right).
$$
### Theorem 12
Let $\sigma, \tau \in S_{n} .$ They are [[conjugate]] if and only if they have the same [[cycle type]].
#### Proof
##### $(\Rightarrow)$ 
Assume that $\sigma, \tau$ are conjugate, so there is $\rho \in S_{n}$ such that $\sigma=\rho^{-1} \tau \rho$
Say $\tau=\pi_{1} \cdots \pi_{r}$ where the $\pi_{i}$ are disjoint cycles. By [Lemma 11](Conjugate.md#Lemma%2011), $\rho^{-1} \pi_{i} \rho$ is a cycle of the same length as $\pi_{i}$.
$$
\text { But } \sigma=\rho^{-1} \tau \rho=\rho^{-1} \pi_{1} \rho \rho^{-1} \pi_{2} \rho \cdots \rho^{-1} \pi_{r} \rho
$$
so $\sigma$ has the same cycle type as $\tau$. 
##### $(\Leftarrow)$
Assume that $\sigma$ and $\tau$ have the same [[cycle type]], say
$$
\begin{aligned}
\sigma=\left(a_{1}\right. \ldots &\left.a_{k_{1}}\right)\left(a_{k_{1}+1}\right.\left.\ldots a_{k_{2}}\right) \cdots\left(a_{k_{m-1}+1}\right.\ldots a_{k_{m}}) \\
\text { and } \tau=\left(b_{1}\right. \ldots &\left.b_{k_{1}}\right)\left(b_{k_{1}+1}\right.\left.\ldots b_{k_{2}}\right) \cdots\left(b_{k_{m-1}+1} \ldots b_{k_{m}}\right)
\end{aligned}
$$
Define $\rho \in S_{n}$ as follows: 
define $a_{i} \rho=b_{i}$ for $1 \leq i \leq k_{m}$ Then, by Lemma 11, $\rho^{-1}\left(a_{1} \ldots a_{k_{1}}\right) \rho=\left(b_{1} \ldots b_{k_{1}}\right)$ and so on,
so $\rho^{-1} \sigma \rho=\tau$, so $\sigma$ and $\tau$ are [[conjugate]].

### Proposition 26
>Conjugacy in $G$ is an [[equivalence relation]].

#### Proof
>Write $h \sim k$ if and only if $h$ and $k$ are [[conjugate]] in $G$ (that is, if and only if there is $g \in G$ with $\left.h=g^{-1} k g\right)$. Take $g_{1}, g_{2}, g_{3} \in G$:
>- reflexive: have $g_{1}=e^{-1} g_{1} e$ so $g_{1} \sim g_{1}$.
>- symmetric: if $g_{1} \sim g_{2}$, then there is $h \in G$ with $g_{1}=h^{-1} g_{2} h$. Then $g_{2}=h g_{1} h^{-1}=\left(h^{-1}\right)^{-1} g_{1}\left(h^{-1}\right)$ so $g_{2} \sim g_{1}$
>- transitive: if $g_{1} \sim g_{2}$ and $g_{2} \sim g_{3}$, then there are $h_{1}, h_{2} \in G$ with $g_{1}=h_{1}^{-1} g_{2} h_{1}$ and $g_{2}=h_{2}^{-1} g_{3} h_{2}$. Then $g_{1}=h_{1}^{-1}\left(h_{2}^{-1} g_{3} h_{2}\right) h_{1}=\left(h_{2} h_{1}\right)^{-1} g_{3}\left(h_{2} h_{1}\right)$, so $g_{1} \sim g_{3}$.

### Corollary 187
Let $G$ be a group and $g, h \in G$.
(i) If $g$ and $h$ are conjugate then $\mathrm{o}(g)=\mathrm{o}(h)$.
(ii) If $g$ and $h$ are conjugate then $g^{-1}$ and $h^{-1}$ are conjugate.
> See [[Isomorphism#Corollary 187]]


---

### Conjugacy is a Group [[Action]]
