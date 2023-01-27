#PMM
## Theorem

```ad-theorem
title: Kolmogorov's 0-1 Law
Let $\left(X_n\right)_{n \geqslant 1}$ be a sequence of [[independent]] [[Measurable Function|random variables]]. Then the [[tail σ-algebra]] $\mathscr{T}$ of $\left(X_n\right)_{n \geqslant 1}$ **contains only events of probability 0 or 1**. Moreover, any $\mathscr{T}$-measurable [[Measurable Function|random variable]] is almost surely constant.
```

### Proof
Fix $n \geqslant 1$ and let $\mathscr{F}_n=\sigma\left(X_1, \ldots, X_n\right)$. Note that $\mathscr{F}_n$ is [[Generated σ-algebra|generated]] by the [[π-system]] of events
$$
\mathscr{A}=\left\{\left\{X_1 \leqslant x_1, \ldots, X_n \leqslant x_n\right\}: x_1, \ldots, x_n \in \overline{\mathbb{R}}\right\}
$$
and $\mathscr{T}_n$ is [[Generated σ-algebra|generated]] by the $\pi$-system of events
$$
\mathscr{B}=\left\{\left\{X_{n+1} \leqslant x_{n+1}, \ldots, X_{n+k} \leqslant x_{n+k}\right\}: k \geqslant 1, x_{n+1}, \ldots, x_{n+k} \in \overline{\mathbb{R}}\right\} .
$$
For any $A \in \mathscr{A}, B \in \mathscr{B}$, by the independence of the [[Measurable Function|random variables]] $\left(X_n\right)$, we have
$$
\mathbb{P}(A \cap B)=\mathbb{P}(A) \mathbb{P}(B)
$$
and so by [[Independent#Theorem 3.5]] the [[A4 Integration/3 Measure Spaces and Measurable Functions/σ-algebra|σ-algebras]] $\sigma(\mathscr{A})=\mathscr{F}_n$ and $\sigma(\mathscr{B})=\mathscr{T}_n$ are also [[Independent]]. Since $\mathscr{T} \subseteq \mathscr{T}_n$ we conclude that $\mathscr{F}_n$ and $\mathscr{T}$ are also [[Independent]].

The above was true for all $n \geqslant 1$ and hence $\bigcup_{n \geqslant 1} \mathscr{F}_n$ and $\mathscr{T}$ are also [[Independent]]. Now $\bigcup_{n \geqslant 1} \mathscr{F}_n$ is a [[π-system]] (although not in general a  [[A4 Integration/3 Measure Spaces and Measurable Functions/σ-algebra]]) generating the [[A4 Integration/3 Measure Spaces and Measurable Functions/σ-algebra]] $\mathscr{F}_{\infty}=\sigma\left(\left(X_n\right)_{n \geqslant 1}\right)$. So applying [[Independent#Theorem 3.5]] again we see that $\mathscr{F}_{\infty}$ and $\mathscr{T}$ are [[Independent]]. But $\mathscr{T} \subseteq \mathscr{F}_{\infty}$ so that if $A \in \mathscr{T}$
$$
\mathbb{P}(A)=\mathbb{P}(A \cap A)=\mathbb{P}(A)^2
$$
and so $\mathbb{P}(A)=0$ or $\mathbb{P}(A)=1$.

Now suppose that $Y$ is any (real-valued) $\mathscr{T}$-[[A4 Integration/2 Lebsegue Mesaure/Measurable]] [[Measurable Function|random variable]]. Then its [[Distribution Function]] $F_Y(y)=\mathbb{P}(Y \leqslant y)$ is increasing, right continuous and takes only values in $\{0,1\}$ since $\{Y \leqslant y\} \in \mathscr{T}$. So $\mathbb{P}(Y=c)=1$ where $c=\inf \left\{y: F_Y(y)=1\right\}$. This extends easily to the extended-real-valued case.

```ad-example
Let $\left(X_n\right)_{n \geqslant 1}$ be a sequence of independent, identically distributed (i.i.d.) random variables and let $S_n=\sum_{k=1}^n X_k$. Consider $U=\limsup _{n \rightarrow \infty} S_n / n$ and $L=\liminf _{n \rightarrow \infty} S_n / n$. Then $U$ and $L$ are tail random variables and so almost surely constant. We'll prove later in the course that, $L=U$ is the expectation of $X_1$, a result known as the [[Strong Law of Large Numbers]].
```