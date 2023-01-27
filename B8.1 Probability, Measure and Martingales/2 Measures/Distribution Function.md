#PMM 

## Definition

```ad-definition
title: Distribution Function
Let $\mu$ be a probability measure on $\mathscr{B}(\mathbb{R})$. The [[distribution function]] of $\mu$ is the function $F_\mu: \mathbb{R} \rightarrow \mathbb{R}$ defined by $F_\mu(x)=\mu((-\infty, x])$
The function $F_\mu$ has the following properties:
1) $F_\mu$ is increasing, i.e., $x<y$ implies $F_\mu(x) \leqslant F_\mu(y)$,
2) $F_\mu(x) \rightarrow 0$ as $x \rightarrow-\infty$ and $F_\mu(x) \rightarrow 1$ as $x \rightarrow \infty$, and
3) $F_\mu$ is right continuous: $y \downarrow x$ implies $F_\mu(y) \rightarrow F_\mu(x)$.
```

## Theorem 2.16 (Lebesgue)
Let $F: \mathbb{R} \rightarrow \mathbb{R}$ be a distribution function, i.e., $F$ is an increasing, right continuous function with $F(-\infty)=0$ and $F(\infty)=1$. Then there is a unique Borel probability measure $\mu=\mu_F$ on $\mathbb{R}$ such that $\mu((-\infty, x])=F(x)$ for every $x$. Every Borel probability measure $\mu$ on $\mathbb{R}$ arises in this way.

> In other words, there is a 1-1 correspondence between distribution functions and Borel probability measures on $\mathbb{R}$. Before proving this result let us state an immediate corollary.

### Corollary 2.17
There exists a unique Borel measure Leb on $\mathbb{R}$ such that for all $a, b \in \mathbb{R}$ with $a<b$, Leb $((a, b])=$ $b-a$. The measure Leb is the Lebesgue measure on $\mathscr{B}(\mathbb{R})$.

#### Proof
The statement with $\mathbb{R}$ replaced by $(0,1]$ follows from Theorem $2.16$ with $F(x)=0$ on $(-\infty, 0], F(x)=x$ on $[0,1]$ and $F(x)=1$ on $[1, \infty)$. This gives us the Lebesgue measure $\operatorname{Leb}_k$ on any $(k, k+1]$. We set Leb $(A)=$ $\sum_{k \in \mathbb{Z}} \operatorname{Leb}_k(A \cap(k, k+1])$ and easily check it defines a measure on $\mathscr{B}(\mathbb{R})$ with the right properties. Uniqueness follows from Remark $2.12$.

### Proof of Theorem 2.16
Suppose for the moment that the existence statement holds. Since $\pi(\mathbb{R})=\{(-\infty, x]$ : $x \in \mathbb{R}\}$ is a $\pi$-system which generates the $\sigma$-algebra $\mathscr{B}(\mathbb{R})$, uniqueness follows by Theorem $2.10$. Also, to see the final part, let $\mu$ be any Borel probability measure on $\mathbb{R}$, and let $F$ be its distribution function. Then $F$ has the properties required for the first part of the theorem, and we obtain a measure $\mu_F$ which by uniqueness is the measure $\mu$ we started with.
For existence we shall apply Theorem $2.11$, so first we need a suitable algebra. For $-\infty \leqslant a \leqslant b<\infty$, let $I_{a, b}=(a, b]$, and set $I_{a, \infty}=(a, \infty)$. Let $\mathscr{I}=\left\{I_{a, b}:-\infty \leqslant a \leqslant b \leqslant \infty\right\}$ be the collection of intervals that are open on the left and closed on the right. Let $\mathscr{A}$ be the set of finite disjoint unions of elements of $\mathscr{I}$; then $\mathscr{A}$ is an algebra, and $\sigma(\mathscr{A})=\sigma(\mathscr{I})=\mathscr{B}(\mathbb{R})$.
We can define a set function $\mu_0$ on $\mathscr{A}$ by setting
$$
\mu_0\left(I_{a, b}\right)=F(b)-F(a)
$$
for intervals and then extending it to $\mathscr{A}$ by defining it as the sum for disjoint unions from $\mathscr{I}$. It is an easy exercise to show that $\mu_0$ is well defined and finitely additive. Carathéodory's Extension Theorem tells us that $\mu_0$ extends to a probability measure on $\mathscr{B}(\mathbb{R})$ provided that $\mu_0$ is countably additive on $\mathscr{A}$. Proving this is slightly tricky. Note that we will have to use right continuity at some point.

First note that by Lemma 2.4, since $\mu_0$ is finite and additive on $\mathscr{A}$, it is countably additive if and only if, for any sequence $\left(A_n\right)$ of sets from $\mathscr{A}$ with $A_n \downarrow \emptyset, \mu_0\left(A_n\right) \downarrow 0$.

Suppose that $F$ has the stated properties but, for a contradiction, that there exist $A_1, A_2, \ldots \in \mathscr{A}$ with $A_n \downarrow \emptyset$ but $\mu_0\left(A_n\right) \not \rightarrow 0$. Since $\mu_0\left(A_n\right)$ is a decreasing sequence, there is some $\delta>0$ (namely, $\left.\lim \mu_0\left(A_n\right)\right)$ such that $\mu_0\left(A_n\right) \geqslant \delta$ for all $n$. We look for a descending sequence of compact sets; since if all the sets in such a sequence are non-empty, so is their intersection.
==Step 1==: Replace $A_n$ by $B_n=A_n \cap(-l, l]$. Since
$$
\mu_0\left(A_n \backslash B_n\right) \leqslant \mu_0((-\infty, l] \cup(l, \infty))=F(-l)+1-F(l)
$$
if we take $l$ large enough then we have $\mu_0\left(B_n\right) \geqslant \delta / 2$ for all $n$.

==Step 2==: Suppose that $B_n=\bigcup_{i=1}^{k_n} I_{a_{n, i}, b_{n, i}}$. Let $C_n=\bigcup_{i=1}^{k_n} I_{\tilde{a}_{n, i}, b_{n, i}}$ where $a_{n, i}<\tilde{a}_{n, i}<b_{n, i}$ and we use right continuity of $F$ to do this in such a way that
$$
\mu_0\left(B_n \backslash C_n\right)<\frac{\delta}{2^{n+2}} \quad \text { for each } n .
$$
Let $\bar{C}_n$ be the closure of $C_n$ (obtained by adding the points $\tilde{a}_{n, i}$ to $\left.C_n\right)$.
Step 3: The sequence $\left(C_n\right)$ need not be decreasing, so set $D_n=\bigcap_{i=1}^n C_i$, and $E_n=\bigcap_{i=1}^n \bar{C}_i$. Since
$$
\mu_0\left(D_n\right) \geqslant \mu_0\left(B_n\right)-\sum_{i=1}^n \mu_0\left(B_i \backslash C_i\right) \geqslant \frac{\delta}{2}-\sum_{i=1}^n \frac{\delta}{2^{i+2}} \geqslant \frac{\delta}{4}
$$
$D_n$ is non-empty. Thus $E_n \supseteq D_n$ is non-empty.
Each $E_n$ is closed and bounded, and so compact. Also, each $E_n$ is non-empty, and $E_n \supseteq E_{n+1}$. Hence, by a basic result from topology, there is some $x$ such that $x \in E_n$ for all $n$. Since $E_n \subseteq \bar{C}_n \subseteq B_n \subseteq A_n$, we have $x \in A_n$ for all $n$, contradicting $A_n \downarrow \emptyset$.

