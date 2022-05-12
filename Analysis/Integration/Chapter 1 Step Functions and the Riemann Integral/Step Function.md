## Step Function
#Analysis 
### Definition
Let $[a, b]$ be an interval. A function $\phi:[a, b] \rightarrow \mathbb{R}$ is called a [[step function]] if there is a finite sequence $a=x_{0} \leqslant x_{1} \leqslant \ldots \leqslant x_{n}=b$ such that $\phi$ is constant on each open interval $\left(x_{i-1}, x_{i}\right)$.

>We do not care about the values of $f$ at the endpoints $x_{0}, x_{1}, \ldots, x_{n}$.

### Definition: Partition
>We call a sequence $a=x_{0} \leqslant x_{1} \leqslant \ldots \leqslant x_{n}=b$ a ***partition*** $\mathcal{P}$, and we say that
$\phi$ is a [[step function]] **adapted** to $\mathcal{P}$.

### Definition: Refinement
A **partition** $\mathcal{P}^{\prime}$ given by $a=x_{0}^{\prime} \leqslant \ldots \leqslant x_{n^{\prime}}^{\prime} \leqslant b$ is a **refinement** of $\mathcal{P}$ if every $x_{i}$ is an $x_{j}^{\prime}$ for some $j$.
### Lemma 1.3
We have the following facts about partitions:
1) Suppose that $\phi$ is a [[step function]] adapted to $\mathcal{P}$, and if $\mathcal{P}^{\prime}$ is a refinement of $\mathcal{P}$, then $\phi$ is also a [[step function]] adapted to $\mathcal{P}^{\prime}$.
2) If $\mathcal{P}_{1}, \mathcal{P}_{2}$ are two partitions then there is a common refinement of both of them.
3) If $\phi_{1}, \phi_{2}$ are step functions then so are $\max \left(\phi_{1}, \phi_{2}\right), \phi_{1}+\phi_{2}$ and $\lambda \phi_{i}$ for
any scalar $\lambda$.
#### Proof.
All completely straightforward; for (iii), suppose that $\phi_{1}$ is adapted to $\mathcal{P}_{1}$
and that $\phi_{2}$ is adapted to $\mathcal{P}_{2}$, and pass to a common refinement of $\mathcal{P}_{1}, \mathcal{P}_{2}$.

### Definition: Indicator Function
If $X \subset \mathbb{R}$ is a set, the **[[indicator function]]** of $X$ is the function $\mathbf{1}_{X}$ taking the value 1 for $x \in X$ and 0 elsewhere.
### Lemma 1.4
>A function $\phi:[a, b] \rightarrow \mathbb{R}$ is a [[step function]] if and only if it is a finite linear combination of [indicator functions](Indicator%20Function) of intervals (open and closed).

### Definition: I($\phi$)
Let $\phi$ be a [[step function]] adapted to some partition $\mathcal{P}$, and
suppose that $\phi(x)=c_{i}$ on the interval $\left(x_{i-1}, x_{i}\right) .$ Then we define
$$
I(\phi)=\sum_{i=1}^{n} c_{i}\left(x_{i}-x_{i-1}\right).
$$
>**it does not matter which partition one chooses.** 
>$I(\phi ; \mathcal{P})=I\left(\phi ; \mathcal{P}^{\prime}\right)$ for any refinement $\mathcal{P}^{\prime}$ of $\mathcal{P}$. Now if $\phi$ is a [[step function]] adapted to both $\mathcal{P}_{1}$ and $\mathcal{P}_{2}$ then one may locate a common refinement $\mathcal{P}^{\prime}$ and conclude that $I\left(\phi ; \mathcal{P}_{1}\right)=I\left(\phi ; \mathcal{P}^{\prime}\right)=I\left(\phi ; \mathcal{P}_{2}\right)$

### Lemma 1.6: Linearity of Step Function
>The map $I: \mathscr{L}_{\text {step }}[a, b] \rightarrow \mathbb{R}$ is linear: $$I\left(\lambda \phi_{1}+\mu \phi_{2}\right)=\lambda I\left(\phi_{1}\right)+\mu I\left(\phi_{2}\right) .$$
#### Proof
This is obvious on passing to a common refinement of the partitions $\mathcal{P}_{1}$ and $\mathcal{P}_{2}$ to which $\phi_{1}, \phi_{2}$ are adapted.