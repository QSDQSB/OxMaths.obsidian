## Riemann Sum
#Analysis 
### Definition
If $\mathcal{P}$ is a partition and $f:[a, b] \rightarrow \mathbb{R}$ is a function then the [[Riemann sum]] adapted to $\mathcal{P}$ is an expression of the form
$$
\Sigma(f ; \mathcal{P}, \vec{\xi})=\sum_{j=1}^{n} f\left(\xi_{j}\right)\left(x_{j}-x_{j-1}\right)
$$
where $\vec{\xi}=\left(\xi_{1}, \ldots, \xi_{n}\right)$ and $\xi_{j} \in\left[x_{j-1}, x_{j}\right]$.
### Proposition 3.1
Let $f:[a, b] \rightarrow \mathbb{R}$ be a bounded function. Fix a sequence of partitions $\mathcal{P}^{(i)} .$ For each $i$, let $\Sigma\left(f, \mathcal{P}^{(i)}, \vec{\xi}^{(i)}\right)$ be a [[Riemann sum]] adapted to $\mathcal{P}^{(i)} .$ Suppose that there is some constant $c$ such that, no matter how $\vec{\xi}^{(i)}$ is chosen, $\Sigma\left(f ; \mathcal{P}^{(i)}, \vec{\xi}^{(i)}\right) \rightarrow c .$ Then $f$ is [[integrable]] and $c=\int_{a}^{b} f$.

#### Proof
Let $\varepsilon>0 .$ Let $i$ be chosen so that $\Sigma\left(f ; \mathcal{P}^{(i)}, \vec{\xi}^{(i)}\right) \leqslant c+\varepsilon$, no matter which $\vec{\xi}^{(i)}$ is chosen. Write $\mathcal{P}=\mathcal{P}^{(i)}$, and suppose that $\mathcal{P}$ is $a=x_{0} \leqslant \ldots \leqslant x_{n}=b$.

For each $j$, choose some point $\xi_{j} \in\left[x_{j-1}, x_{j}\right]$ such that $f\left(\xi_{j}\right) \geqslant \sup _{x \in\left[x_{j-1}, x_{j}\right]} f(x)-\varepsilon$ (Note that $f$ does not necessarily attain its supremum on this interval.)

Let $\phi_{+}$ be a step function taking the value $f\left(\xi_{j}\right)+\varepsilon$ on $\left(x_{j-1}, x_{j}\right)$, and with $\phi_{+}\left(x_{j}\right)=f\left(x_{j}\right)$. Then $\phi_{+}$ is a majorant for $f .$ It is easy to see that
$$
I\left(\phi_{+}\right)=\varepsilon(b-a)+\Sigma(f ; \mathcal{P}, \vec{\xi}).
$$
We therefore have
$$
I\left(\phi_{+}\right) \leqslant \varepsilon(b-a)+c+\varepsilon.
$$
Since $\varepsilon>0$ was arbitrary, it follows that
$$
\inf _{\phi_{+}} I\left(\phi_{+}\right) \leqslant c.
$$
By an identical argument,
$$
\sup _{\phi_{-}} I\left(\phi_{-}\right) \geqslant c.
$$
Therefore
$$
c \leqslant \sup _{\phi_{-}} I\left(\phi_{-}\right) \leqslant \inf _{\phi_{+}} I\left(\phi_{+}\right) \leqslant c
$$
and so all these quantities equal $c$.

---
`mesh(P)` $\operatorname{mesh}(\mathcal{P})$ of a partition is the length of the longest subinterval in $\mathcal{P}$.
### Proposition 3.2
Let $\mathcal{P}^{(i)}, i=1,2, \ldots$ be a sequence of partitions satisfying $\operatorname{mesh}\left(\mathcal{P}^{(i)}\right) \rightarrow 0 .$ Suppose that $f$ is [[integrable]]. Then $\lim _{i \rightarrow \infty} \Sigma\left(f ; \mathcal{P}^{(i)}, \vec{\xi}^{(i)}\right)=\int_{a}^{b} f$, no matter what choice of $\vec{\xi}^{(i)}$ we make.
#### Proof
`M`	$M:=\sup _{x \in[a, b]}|f(x)|$.

Let $\mathcal{P}: a=x_{0} \leqslant x_{1} \leqslant\cdots \leqslant x_{n}=b$ be a partition. 

>`optimal majorant`  $\phi_{+}^{\mathcal{P}}$ for $f$ relative to $\mathcal{P}$ (and similarly minorant). This is the majorant defined by
>$$
\phi_{+}^{\mathcal{P}}:=\left\{\begin{array}{ll}
\sup _{x \in\left(x_{i-1}, x_{i}\right)} f(x) & \text { on }\left(x_{i-1}, x_{i}\right) \\
f\left(x_{i}\right) & \text { at the points } x_{i}
\end{array}\right.
>$$

It is easy to see that if $\phi_{+}$ is any majorant for $f$ adapted to $\mathcal{P}$, then $I\left(\phi_{+}^{\mathcal{P}}\right) \leqslant I\left(\phi_{+}\right)$. Similarly, $I\left(\phi_{-}^{\mathcal{P}}\right) \geqslant I\left(\phi_{-}\right)$, and so
$$
I\left(\phi_{+}^{\mathcal{P}}\right)-I\left(\phi_{-}^{\mathcal{P}}\right) \leqslant I\left(\phi_{+}\right)-I\left(\phi_{-}\right).
$$
Let $\varepsilon>0$. Since $f$ is [[integrable]] it follows from what we just said that there is a partition $\mathcal{P}: a=x_{0} \leqslant x_{1} \leqslant \cdots \leqslant x_{n}=b$ such that $I\left(\phi_{+}^{\mathcal{P}}\right)-I\left(\phi_{-}^{\mathcal{P}}\right)<\varepsilon$. In particular, since $I\left(\phi_{-}\right) \leqslant \int_{a}^{b} f$ for any minorant $\phi_{-}$
>`(3.1)`
>$$
I\left(\phi_{+}^{\mathcal{P}}\right) \leqslant \int_{a}^{b} f+\varepsilon
>$$

Set $\delta:=\varepsilon / n M .$ Let $\mathcal{P}^{\prime}: a=x_{0}^{\prime} \leqslant x_{1}^{\prime} \leqslant \ldots \leqslant x_{n^{\prime}}^{\prime}=b$ be any partition with $\operatorname{mesh}\left(\mathcal{P}^{\prime}\right) \leqslant \delta$, and consider an arbitrary [[Riemann sum]]
$$
\Sigma\left(f ; \mathcal{P}^{\prime}, \vec{\xi}^{\prime}\right)=\sum_{j=1}^{n^{\prime}} f\left(\xi_{j}^{\prime}\right)\left(x_{j}^{\prime}-x_{j-1}^{\prime}\right)
$$
This is equal to $I(\psi)$, where the step function $\psi$ is defined to be $f\left(\xi_{j}^{\prime}\right)$ on $\left(x_{j-1}^{\prime}, x_{j}^{\prime}\right)$ and $f\left(x_{j}^{\prime}\right)$ at the $x_{j}^{\prime}$.

Compare $\psi$ and the optimal majorant $\phi_{+}^{\mathcal{P}}$.

Say that $j$ is `good` if $\left[x_{j-1}^{\prime}, x_{j}^{\prime}\right] \subset\left(x_{i-1}, x_{i}\right)$ for some $i$.

If $j$ is ==good== then, for $t \in\left(x_{j-1}^{\prime}, x_{j}^{\prime}\right)$

>`(3.2)`
>$$
\psi(t)=f\left(\xi_{j}^{\prime}\right) \leqslant \sup _{x \in\left[x_{j-1}^{\prime}, x_{j}^{\prime}\right]} f(x) \leqslant \sup _{x \in\left(x_{i-1}, x_{i}\right)} f(x)=\phi_{+}^{\mathcal{P}}(t)
>$$

If $j$ is `bad` (i.e. ==not good==) then we cannot assert such a bound, but we do have the trivial bound
>`(3.3)`
>$$
\psi(t) \leqslant \phi_{+}^{\mathcal{P}}(t)+2 M
>$$

for all $j$. Now if $j$ is ==bad== then we have $x_{i} \in\left[x_{j-1}^{\prime}, x_{j}^{\prime}\right]$ for some $i .$ No $x_{i}$ can belong to more than two intervals $\left[x_{j-1}^{\prime}, x_{j}^{\prime}\right]$, so there cannot be more than $2 n$ ==bad== values of $j$. Therefore the total length of the corresponding intervals $\left(x_{j-1}^{\prime}, x_{j}^{\prime}\right)$ is at most $2 \delta n=2 \varepsilon / M$.

It therefore follows, using (3.2) on the good intervals and (3.3) on the bad, that
$$
\Sigma\left(f ; \mathcal{P}^{\prime}, \vec{\xi}^{\prime}\right)=I(\psi) \leqslant I\left(\phi_{+}^{\mathcal{P}}\right)+2 M \cdot \frac{2 \varepsilon}{M}=I\left(\phi_{+}^{\mathcal{P}}\right)+4 \varepsilon
$$
Combining this with (3.1) yields
$$
\Sigma\left(f ; \mathcal{P}^{\prime}, \vec{\xi}^{\prime}\right) \leqslant \int_{a}^{b} f+5 \varepsilon
$$
There is a similar lower bound, proven in an analogous manner. Since $\varepsilon$ was arbitrary, this concludes the proof.

Combining [[#Proposition 3.1]] and [[#Proposition 3.2]], 
we could have an alternative definition of the integral.
### Proposition 3.3
>Let $f:[a, b] \rightarrow \mathbb{R}$ be a function. Let $\mathcal{P}^{(i)}, i=1,2, \ldots$ be a sequence of partitions with $\operatorname{mesh}\left(\mathcal{P}^{(i)}\right) \rightarrow 0 .$
Then $f$ is [[integrable]] if and only if $\lim _{i \rightarrow \infty} \Sigma\left(f, \mathcal{P}^{(i)}, \vec{\xi}^{(i)}\right)$ is equal to some constant $c$, independently of the choice of $\xi \overrightarrow{(i)}$.
If this is so, then $$\int_{a}^{b} f=c.$$

