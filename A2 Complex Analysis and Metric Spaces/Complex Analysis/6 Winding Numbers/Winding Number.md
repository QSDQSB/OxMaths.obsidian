#ComplexAnalysis 

## Proposition 6.2
Let $\gamma:[0,1] \rightarrow \mathbb{C} \backslash\{0\}$ be a path. Then there is [[Continuous]] function $a:[0,1] \rightarrow \mathbb{R}$ such that
$$
\gamma(t)=|\gamma(t)| e^{2 \pi i a(t)}
$$
Moreover, if $a$ and $b$ are two such functions, then there exists $n \in \mathbb{Z}$ such that $a(t)=b(t)+n$ for all $t \in[0,1] .$
`The angle is continuous`
#### Proof
By replacing $\gamma(t)$ with $\gamma(t) /|\gamma(t)|$ we may assume that $|\gamma(t)|=1$ for all $t$. Since $\gamma$ is continuous on a [[Sequential Compactness|compact]] set, it is uniformly continuous, so that there is a $\delta>0$ such that $|\gamma(s)-\gamma(t)|<\sqrt{3}$ for any $s, t$ with $|s-t|<\delta$. Choose an integer $n>0$ such that $n>1 / \delta$ so that on each subinterval $[i / n,(i+1) / n]$ we have $|\gamma(s)-\gamma(t)|<\sqrt{3} / 2$.

Now on any half-plane in $\mathbb{C}$ we may certainly define a [[Holomorphic]] [[Branch]] of $[\log (z)]$ (simply pick a [[Branch Cut]] along a ray in the opposite half-plane) and hence a continuous argument function, and if $\left|z_{1}\right|=\left|z_{2}\right|=1$ and $\left|z_{1}-z_{2}\right|<\sqrt{3}$, then the angle between $z_{1}$ and $z_{2}$ is at most $\pi / 3$.

It follows there exists a continuous functions $a_{i}:[j / n,(j+1) / n] \rightarrow \mathbb{R}$ such that $\gamma(t)=e^{2 \pi i a_{j}(t)}$ for $t \in[j / n,(j+1) / n]$ (since $\gamma([j / n,(j+1) / n])$ must lie in an arc of length at most $2 \pi / 3)$. Now since $e^{2 \pi i a_{j}(j / n)}=e^{2 \pi i a_{j-1}(j / n)} a_{j-1}(j / n)$ and $a_{i}(j / n)$ differ by an integer. Thus we can successively adjust the $a_{j}$ for $j>1$ by an integer (as if $\gamma(t)=e^{2 \pi i a_{j}(t)}$ then $\gamma(t)=e^{2 \pi i(a(t)+n)}$ for any $\left.n \in \mathbb{Z}\right)$ to obtain a continuous function $a:[0,1] \rightarrow \mathbb{C}$ such that $\gamma(t)=e^{2 \pi i a(t)}$ as required.

Finally, the uniqueness statement follows because $e^{2 \pi i(a(t)-b(t))}=1$, hence $a(t)-b(t) \in \mathbb{Z}$, and since $[0,1]$ is connected it follows $a(t)-b(t)$ is constant as required.

## Definition
If $\gamma:[0,1] \rightarrow \mathbb{C} \backslash\{0\}$ is a **closed** [[Path]] and $\gamma(t)=|\gamma(t)| e^{2 \pi i a(t)}$ as in the previous lemma, then since $\gamma(0)=\gamma(1)$ we must have $a(1)-a(0) \in$ $\mathbb{Z}$. This integer is called the [[Winding Number]] $I(\gamma, 0)$ of $\gamma$ around $0 .$ It is uniquely determined by the [[Path]] $\gamma$ because the function $a$ is unique up to an integer. By translation, if $\gamma$ is any closed path and $z_{0}$ is not in the image of $\gamma$, we may define the [[Winding Number]] $I\left(\gamma, z_{0}\right)$ of $\gamma$ about $z_{0}$ in the same fashion. Explicitly, if $\gamma$ is a closed path with $z_{0} \notin \gamma^{*}$ then let $t: \mathbb{C} \rightarrow \mathbb{C}$ be given by $t(z)=z-z_{0}$ and define $I\left(\gamma, z_{0}\right)=I(t \circ \gamma, 0)$.

## Lemma 6.5
Let $\gamma$ be a piecewise $C^{1}$ closed [[Path]] and $z_{0} \in \mathbb{C}$ a point not in the image of $\gamma$. Then the [[Winding Number]] $I\left(\gamma, z_{0}\right)$ of $\gamma$ around $z_{0}$ is given by
$$
I\left(\gamma, z_{0}\right)=\frac{1}{2 \pi i} \int_{\gamma} \frac{d z}{z-z_{0}}
$$
### Proof
If $\gamma:[0,1] \rightarrow \mathbb{C}$ we may write $\gamma(t)=z_{0}+r(t) e^{2 \pi i a(t)}$ (where $r(t)=$ $\left|\gamma(t)-z_{0}\right|>0$ is continuous and the existence of $a(t)$ is guaranteed by [[#Proposition 6.2]]). Then we have
$$
\begin{aligned}
\int_{\gamma} \frac{d z}{z-z_{0}} &=\int_{0}^{1} \frac{1}{r(t) e^{2 \pi i a(t)}} \cdot\left(r^{\prime}(t)+2 \pi i r(t) a^{\prime}(t)\right) e^{2 \pi i a(t)} d t \\
&=\int_{0}^{1} r^{\prime}(t) / r(t)+2 \pi i a^{\prime}(t) d t=[\log (r(t))+2 \pi i a(t)]_{0}^{1} \\
&=2 \pi i(a(1)-a(0))
\end{aligned}
$$
since $r(1)=r(0)=\left|\gamma(0)-z_{0}\right|$.

## Proposition 6.7
Let $U$ be an open set in $\mathbb{C}$ and let $\gamma:[0,1] \rightarrow U$ be a closed path. If $f(z)$ is a continuous function on $\gamma^{*}$ then the function
$$
I_{f}(\gamma, w)=\frac{1}{2 \pi i} \int_{\gamma} \frac{f(z)}{z-w} d z
$$
is [[Analytic]] in $w$.
In particular, if $f(z)=1$ this shows that the function $w \mapsto I(\gamma, w)$ is a continuous function on $\mathbb{C} \backslash \gamma^{*}$, and hence, since it is integer-valued, it is constant on the connected components of $\mathbb{C} \backslash \gamma^{*}$.

### Proof
We wish to show that for each $z_{0} \notin \gamma^{*}$ we can find a disk $B\left(z_{0}, \epsilon\right)$ within which $I_{f}(\gamma, w)$ is given by a power series in $\left(w-z_{0}\right)$. Translating if necessary we may assume $z_{0}=0$

Now since $\mathbb{C} \backslash \gamma^{*}$ is open, there is some $r>0$ such that $B(0,2 r) \cap \gamma^{*}=\emptyset$. We claim that $I_{f}(\gamma, w)$ is [[Holomorphic]] in $B(0 . r)$. Indeed if $w \in B(0, r)$ and $z \in \gamma^{*}$ it follows that $|w / z|<1 / 2 .$ Moreover, since $\gamma^{*}$ is [[Sequential Compactness|compact]], $M=\sup \left\{|f(z)|: z \in \gamma^{*}\right\}$ is finite, and hence
$$
\left|f(z) \cdot w^{n} / z^{n+1}\right|=|f(z)||z|^{-1}|w / z|^{n}<\frac{M}{2 r}(1 / 2)^{n}, \quad \forall z \in \gamma^{*}
$$
It follows from the [[Weierstrass M-test]] that the series
$$
\sum_{n=0}^{\infty} \frac{f(z) \cdot w^{n}}{z^{n+1}}=\sum_{n=0}^{\infty} \frac{f(z)}{z}(w / z)^{n}=\frac{f(z)}{z}(1-w / z)^{-1}=\frac{f(z)}{z-w}
$$
viewed as a function of $z$, converges uniformly on $\gamma^{*}$ to $f(z) /(z-w)$. Thus for all $w \in B(0, r)$ we have
$$
I_{f}(\gamma, w)=\frac{1}{2 \pi i} \int_{\gamma} \frac{f(z) d z}{z-w}=\sum_{n=0}^{\infty}\left(\frac{1}{2 \pi i} \int_{\gamma} \frac{f(z)}{z^{n+1}} d z\right) w^{n}
$$
hence $I_{f}(\gamma, w)$ is given by a power series in $B(0, r)$ (and hence is also [[Holomorphic]] there) as required. Finally, if $f=1$, then since $I_{1}(\gamma, z)=I(\gamma, z)$ is integer-valued, it follows it must be constant on any connected component of $\mathbb{C} \backslash \gamma^{*}$ as required.

### Remark 6.9
If $\gamma$ is a closed path then $\gamma^{*}$ is [[Compact]] and hence bounded. Thus there is an $R>0$ such that the connected set $\mathbb{C} \backslash B(0, R) \cap \gamma^{*}=\emptyset .$ It follows that $\mathbb{C} \backslash \gamma^{*}$ has exactly one unbounded connected component. Since
$$
\left|\int_{\gamma} \frac{d \zeta}{\zeta-z}\right| \leq \ell(\gamma) \cdot \sup _{\zeta \in \gamma^{*}}|1 /(\zeta-z)| \rightarrow 0
$$
as $z \rightarrow \infty$ it follows that $I(\gamma, z)=0$ on the unbounded component of $\mathbb{C} \backslash \gamma^{*}$.