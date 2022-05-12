# Analysis III: Integration
#Subject #Analysis 
- Sheet 1: Chapter 1 (podcasts 1a,1b)
- Sheet 2: More of Chapter 1 , Chapter 3 (podcast 3a for key statements).
- Sheet 3: Chapters 4 and 5 (suggest also looking at Chapter 6 ) and corresponding podcasts.
- Sheet 4: Chapters 6 and 7 and consolidation of earlier chapters.

## Chapter 1 Step functions and the Riemann integral
### Definition: Step Function
Let $[a, b]$ be an interval. A function $\phi:[a, b] \rightarrow \mathbb{R}$ is called a [[step function]] if there is a finite sequence $a=x_{0} \leqslant x_{1} \leqslant \ldots \leqslant x_{n}=b$ such that $\phi$ is constant on each open interval $\left(x_{i-1}, x_{i}\right)$.
### Definition: Partition
>We call a sequence $a=x_{0} \leqslant x_{1} \leqslant \ldots \leqslant x_{n}=b$ a ***partition*** $\mathcal{P}$, and we say that $\phi$ is a [[step function]] **adapted** to $\mathcal{P}$.

### Definition: Refinement
A **partition** $\mathcal{P}^{\prime}$ given by $a=x_{0}^{\prime} \leqslant \ldots \leqslant x_{n^{\prime}}^{\prime} \leqslant b$ is a **refinement** of $\mathcal{P}$ if every $x_{i}$ is an $x_{j}^{\prime}$ for some $j$.

### Lemma 1.3
We have the following facts about partitions:
1) Suppose that $\phi$ is a [[step function]] adapted to $\mathcal{P}$, and if $\mathcal{P}^{\prime}$ is a refinement of $\mathcal{P}$, then $\phi$ is also a [[step function]] adapted to $\mathcal{P}^{\prime}$.
2) If $\mathcal{P}_{1}, \mathcal{P}_{2}$ are two partitions then there is a common refinement of both of them.
3) If $\phi_{1}, \phi_{2}$ are step functions then so are $\max \left(\phi_{1}, \phi_{2}\right), \phi_{1}+\phi_{2}$ and $\lambda \phi_{i}$ for
any scalar $\lambda$.

### Lemma 1.4
>A function $\phi:[a, b] \rightarrow \mathbb{R}$ is a [[step function]] if and only if it is a finite linear combination of indicator functions of intervals (open and closed).

### Definition: I($\phi$)
Let $\phi$ be a [[step function]] adapted to some partition $\mathcal{P}$, and
suppose that $\phi(x)=c_{i}$ on the interval $\left(x_{i-1}, x_{i}\right) .$ Then we define
$$
I(\phi)=\sum_{i=1}^{n} c_{i}\left(x_{i}-x_{i-1}\right).
$$
>**it does not matter which partition one chooses.** 
>$I(\phi ; \mathcal{P})=I\left(\phi ; \mathcal{P}^{\prime}\right)$ for any refinement $\mathcal{P}^{\prime}$ of $\mathcal{P}$. Now if $\phi$ is a [[step function]] adapted to both $\mathcal{P}_{1}$ and $\mathcal{P}_{2}$ then one may locate a common refinement $\mathcal{P}^{\prime}$ and conclude that $I\left(\phi ; \mathcal{P}_{1}\right)=I\left(\phi ; \mathcal{P}^{\prime}\right)=I\left(\phi ; \mathcal{P}_{2}\right)$

### Definition: Integrable
A function $f$ is [[integrable]] if $$\sup _{\phi_{-}} I\left(\phi_{-}\right)=\inf _{\phi_{+}} I\left(\phi_{+}\right), \quad\color{yellow}\textbf{(1.1)}$$where the *sup* is over all minorants $\phi_{-} \leqslant f$, and the *inf* is over all majorants $\phi_{+} \geqslant f$. These minorants and majorants are always assumed to be step functions. 

We define the integral $\int_{a}^{b} f$ to be the common value of the two quantities in $(1.1)$.

### Lemma 1.8
>Let $f:[a, b] \rightarrow \mathbb{R}$ be a **bounded** function. Then the following are **equivalent**:
>1) $f$ is [[integrable]];
>2) for every $\varepsilon>0$, there is a majorant $\phi_{+}$ and a minorant $\phi_{-}$ for $f$ such that $I\left(\phi_{+}\right)-I\left(\phi_{-}\right)<\varepsilon$.

### Proposition 1.10
>Suppose that $\phi$ is a [[step function]] on $[a, b] .$ Then $\phi$ is [[integrable]], and $\int_{a}^{b} \phi=I(\phi)$.

### Proposition 1.13
- We may split up an integral into two parts.

>Suppose that $f$ is [[integrable]] on $[a, b] .$ Then, for any $c$ with $a<c<b, f$ is *Riemann [[Integrable]]* on $[a, c]$ and on $[c, b] .$ Moreover $\int_{a}^{b} f=\int_{a}^{c} f+$ $\int_{c}^{b} f$.

### Proposition 1.15
- Integral is linear.

>If $f, g$ are [[integrable]] on $[a, b]$ then so is $\lambda f+\mu g$ for any $\lambda, \mu \in \mathbb{R} .$ Moreover $\int_{a}^{b}(\lambda f+\mu g)=\lambda \int_{a}^{b} f+\mu \int_{a}^{b} g .$ That is, the [[Integrable]] functions on $[a, b]$ form a vector space and the integral is a linear functional (linear map to $\mathbb{R}$) on it.

### Corollary 1.16
- We may change an [[Integrable]] function in finitely many points.

>If $f$ is [[integrable]] on $[a, b]$, and if $\tilde{f}$ differs from $f$ in **finitely** many points, then $\tilde{f}$ is also [[integrable]].

### Proposition 1.17
>Suppose that $f$ and $g$ are [[integrable]] on $[a, b] .$ Then $\max (f, g)$ and $\min (f, g)$ are both ***Riemann [[Integrable]]***, as is $|f|$.

### Proposition 1.18
Suppose that $f$ is [[integrable]] on $[a, b]$, then
1) We have $(b-a) \inf _{x \in[a, b]} f(x) \leqslant \int_{a}^{b} f \leqslant(b-a) \sup _{x \in[a, b]} f(x)$.
2) If $g$ is another [[integrable]] function on $[a, b]$, and if $f \leqslant g$ pointwise, then $\int_{a}^{b} f \leqslant \int_{a}^{b} g$.
3) $\left|\int_{a}^{b} f\right| \leqslant \int_{a}^{b}|f|$.

## Chapter 2 Basic Theorems about Integrable

### Theorem 2.1
>See at [[Integrable#Theorem 2 1]]

Continuous functions $f:[a, b] \rightarrow \mathbb{R}$ are [[integrable]].

### Theorem 2.2
>See at [[Integrable#Theorem 2 2]]

Bounded continuous functions $f:(a, b) \rightarrow \mathbb{R}$ are [[integrable]].

### Lemma 2.3
>See at [[Integrable#Lemma 2 3]]

Suppose that $f:[a, b] \rightarrow \mathbb{R}$ is a continuous function with $f \geqslant 0$ pointwise and $\int_{a}^{b} f=0 .$ Then $f(x)=0$ for $x \in[a, b]$.

### Proposition 2.4
> See at [[Integrable#Proposition 2 4]]

Suppose that $f:[a, b] \rightarrow \mathbb{R}$ is continuous. Then there is some $c \in[a, b]$ such that
$$
\int_{a}^{b} f=(b-a) f(c).
$$

### Proposition 2.5
> See at [[Integrable#Proposition 2 5]]

Suppose that $f:[a, b] \rightarrow \mathbb{R}$ is continuous, and that $w:[a, b] \rightarrow \mathbb{R}$ is a nonnegative [[integrable]] function. Then there is some $c \in[a, b]$ such that
$$
\int_{a}^{b} f w=f(c) \int_{a}^{b} w.
$$

### Theorem 2.6
>See at [[Integrable#Theorem 2 6]]

Monotone functions $f:[a, b] \rightarrow \mathbb{R}$ are [[integrable]].

## Chapter 3 Riemann Sums
### Definition: Riemann Sum
If $\mathcal{P}$ is a partition and $f:[a, b] \rightarrow \mathbb{R}$ is a function then the [[Riemann sum]] adapted to $\mathcal{P}$ is an expression of the form
$$
\Sigma(f ; \mathcal{P}, \vec{\xi})=\sum_{j=1}^{n} f\left(\xi_{j}\right)\left(x_{j}-x_{j-1}\right)
$$
where $\vec{\xi}=\left(\xi_{1}, \ldots, \xi_{n}\right)$ and $\xi_{j} \in\left[x_{j-1}, x_{j}\right]$.
### Proposition 3.1
>Let $f:[a, b] \rightarrow \mathbb{R}$ be a bounded function. Fix a sequence of partitions $\mathcal{P}^{(i)} .$ For each $i$, let $\Sigma\left(f, \mathcal{P}^{(i)}, \vec{\xi}^{(i)}\right)$ be a [[Riemann sum]] adapted to $\mathcal{P}^{(i)} .$ Suppose that there is some constant $c$ such that, no matter how $\vec{\xi}^{(i)}$ is chosen, $\Sigma\left(f ; \mathcal{P}^{(i)}, \vec{\xi}^{(i)}\right) \rightarrow c .$ Then $f$ is [[integrable]] and $c=\int_{a}^{b} f$.

### Proposition 3.2
>Let $\mathcal{P}^{(i)}, i=1,2, \ldots$ be a sequence of partitions satisfying $\operatorname{mesh}\left(\mathcal{P}^{(i)}\right) \rightarrow 0 .$ Suppose that $f$ is [[integrable]]. Then $\lim _{i \rightarrow \infty} \Sigma\left(f ; \mathcal{P}^{(i)}, \vec{\xi}^{(i)}\right)=\int_{a}^{b} f$, no matter what choice of $\vec{\xi}^{(i)}$ we make.

### Proposition 3.3
>Let $f:[a, b] \rightarrow \mathbb{R}$ be a function. Let $\mathcal{P}^{(i)}, i=1,2, \ldots$ be a sequence of partitions with $\operatorname{mesh}\left(\mathcal{P}^{(i)}\right) \rightarrow 0 .$
Then $f$ is [[integrable]] if and only if $\lim _{i \rightarrow \infty} \Sigma\left(f, \mathcal{P}^{(i)}, \vec{\xi}^{(i)}\right)$ equals some constant $c$, independently of the choice of $\xi \overrightarrow{(i)}$.
If this is so, then $$\int_{a}^{b} f=c.$$


## Chapter 4 Integration and Differentiation
### First Fundamental Theorem of Calculus
> See at [[First Fundamental Theorem of Calculus]]

Suppose that $f$ is [[integrable]] on $(a, b) .$ Define a new function $F:[a, b] \rightarrow \mathbb{R}$ by
$$
F(x):=\int_{a}^{x} f
$$
Then $F$ is **continuous**. Moreover, if $f$ is continuous at $c \in(a, b)$ then $F$ is differentiable at $c$ and $F^{\prime}(c)=f(c)$.

### Second fundamental theorem of Calculus
> See at [[Second Fundamental Theorem of Calculus]]

Suppose that $F:[a, b] \rightarrow \mathbb{R}$ is continuous on $[a, b]$ and differentiable on $(a, b)$. Suppose furthermore that its derivative $F^{\prime}$ is integrable on $(a, b)$. Then
$$
\int_{a}^{b} F^{\prime}=F(b)-F(a).
$$
### Proposition 4.5: Integration by Parts
>See at [[Integration by Parts]]

Suppose that $f, g:[a, b] \rightarrow \mathbb{R}$ are continuous functions, differentiable on $(a, b)$. Suppose that the derivatives $f^{\prime}, g^{\prime}$ are integrable on $(a, b) .$
Then $f g^{\prime}$ and $f^{\prime} g$ are integrable on $(a, b)$, and
$$
\int_{a}^{b} f g^{\prime}=f(b) g(b)-f(a) g(a)-\int_{a}^{b} f^{\prime} g.
$$


### Substitution rule
> See at [[Substitution Rule]]

Suppose that $f:[a, b] \rightarrow \mathbb{R}$ is continuous and that $\phi:[c, d] \rightarrow[a, b]$ is continuous on $[c, d]$, has $\phi(c)=a$ and $\phi(d)=b$, and maps $(c, d)$ to $(a, b) .$ Suppose moreover that $\phi$ is differentiable on $(c, d)$ and that its
derivative $\phi^{\prime}$ is [[integrable]] on this interval. Then
$$
\int_{a}^{b} f=\int_{c}^{d}(f \circ \phi) \phi^{\prime} .
$$

## Chapter 5 Limits and the Integral
![[Interchanging the Order]]

## Chapter 6 Exponent & Logarithm
![[Exponent Function]]
![[Logarithm Function]]

![[Improper Integrals]]