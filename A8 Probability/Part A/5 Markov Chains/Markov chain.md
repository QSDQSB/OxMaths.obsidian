---
aliases: [chain]
---
## Markov Chain
#Probability

### Definition
Let $X=\left(X_{0}, X_{1}, X_{2}, \ldots\right)=\left(X_{n}, n \geq 0\right)$ be a sequence of random variables taking values in I. The process $X$ is called a [[Markov chain]] if for any $n \geq 0$ and any $i_{0}, i_{1}, \ldots, i_{n+1} \in I$,
$$
\mathbb{P}\left(X_{n+1}=i_{n+1} \mid X_{n}=i_{n}, \ldots, X_{0}=i_{0}\right)=\mathbb{P}\left(X_{n+1}=i_{n+1} \mid X_{n}=i_{n}\right).
$$
`The current probability is determined only by the previous one.`

![[#Proposition 5 4 Markov chain criterion]]


---
![[time-homogeneous]]

We will work almost always with [[time-homogeneous|homogeneous]] chains. To describe the distribution of such a chain, it is enough to specify two things:
- the initial distribution $\lambda$ of $X_{0}$. For each $i \in I, \lambda_{i}=\mathbb{P}\left(X_{0}=i\right)$.
- the **[[Transition matrix]]** $P=\left(p_{i j}\right)_{i, j \in I}$.

### Theorem 5.1
>
For $i_{0}, i_{1}, \ldots, i_{n} \in I$,
>$$
\mathbb{P}\left(X_{0}=i_{0}, X_{1}=i_{1}, \ldots, X_{n}=i_{n}\right)=\lambda_{i_{0}} p_{i_{0} i_{1}} p_{i_{1} i_{2}} \ldots p_{i_{n-1} i_{n}}
>$$

#### Proof
By the definition of conditional probabilities and cancellations,
$$
\begin{array}{l}
\mathbb{P}\left(X_{0}=i_{0}, X_{1}=i_{1}, \ldots, X_{n}=i_{n}\right) \\
\quad=\mathbb{P}\left(X_{0}=i_{0}\right) \mathbb{P}\left(X_{1}=i_{1} \mid X_{0}=i_{0}\right) \mathbb{P}\left(X_{2}=i_{2} \mid X_{1}=i_{1}, X_{0}=i_{0}\right) \times \ldots \\
\quad \cdots \times \mathbb{P}\left(X_{n}=i_{n} \mid X_{n-1}=i_{n-1}, \ldots, X_{0}=i_{0}\right) \\
\quad=\mathbb{P}\left(X_{0}=i_{0}\right) \mathbb{P}\left(X_{1}=i_{1} \mid X_{0}=i_{0}\right) \mathbb{P}\left(X_{2}=i_{2} \mid X_{1}=i_{1}\right) \ldots \mathbb{P}\left(X_{n}=i_{n} \mid X_{n-1}=i_{n-1}\right) \\
\quad=\lambda_{i_{0}} p_{i_{0} i_{1}} p_{i_{1} i_{2}} \ldots p_{i_{n-1} i_{n}}
\end{array}
$$

---
```ad-note
If $X$ is a [[Markov chain]] with initial distribution $\lambda$ and [[transition matrix]] $P$, we will sometimes write " $X \sim \operatorname{Markov}(\lambda, P)$ ".
```

### Examples
#### Random walk on a cycle
>$I=\{0,1,2, \ldots, M-1\} .$ At each step the walk increases by $1(\bmod M)$ with probability $p$ and decreases by $1(\bmod M)$ with probability $1-p$. That is,
>$$
p_{i j}=\left\{\begin{array}{lll}
p & \text { if } j \equiv i+1 & \bmod M \\
1-p & \text { if } j \equiv i-1 & \bmod M \\
0 & \text { otherwise } &
\end{array}\right.
>$$

$$P=\left(\begin{array}{cccccccc}0 & p & 0 & 0 & \cdots & 0 & 0 & 1-p \\ 1-p & 0 & p & 0 & \cdots & 0 & 0 & 0 \\ 0 & 1-p & 0 & p & \ddots & 0 & 0 & 0 \\ 0 & 0 & 1-p & 0 & \ddots & \ddots & \ddots & \vdots \\ \vdots & \vdots & \ddots & \ddots & \ddots & \ddots & \ddots & \vdots \\ \vdots & \vdots & \ddots & \ddots & \ddots & 0 & p & 0 \\ 0 & 0 & 0 & 0 & \ddots & 1-p & 0 & p \\ p & 0 & 0 & 0 & \cdots & 0 & 1-p & 0\end{array}\right)$$

#### Simple symmetric random walk on $\mathbb{Z}^{d}$
>$I=\mathbb{Z}^{d}$. At each step the walk moves from its current site to one of its $2 d$ neighbours chosen uniformly at random.
>$$
p_{i j}=\left\{\begin{array}{ll}
\frac{1}{2 d} & \text { if }|i-j|=1 \\
0, & \text { otherwise }
\end{array}\right.
>$$
where $|i-j|=\left|i_{1}-j_{1}\right|+\cdots+\left|i_{d}-j_{d}\right|$ for states $i=\left(i_{1}, \ldots, i_{d}\right)$ and $j=\left(j_{1}, \ldots, j_{d}\right)$.

#### Card-shuffling
>Let $I$ be the set of orderings of 52 cards. We can regard $I$ as the [[Permutation|permutation group]] $S_{52}$. There are many interesting Markov chains on permutation groups. We can think of shuffling a pack of cards. A simple and not very practical example of a shuffle: at each step, choose $a$ and $b$ independently and uniformly in $\{1,2, \ldots, 52\}$ and exchange the cards in positions $a$ and $b$. This gives
>$$
p_{\alpha \beta}=\left\{\begin{array}{ll}
\frac{2}{52^{2}} & \text { if } \alpha=\beta \tau \text { for some transposition } \tau \\
\frac{1}{52} & \text { if } \alpha=\beta \\
0 & \text { otherwise }
\end{array}\right.
>$$

---
![[Markov Property#Memoryless]]

---
### Notations
```ad-note
It will be convenient to write ==$\mathbb{P}_{i}$== for the distribution conditioned on $X_{0}=i$. For example $\mathbb{P}_{i}\left(X_{1}=j\right)=p_{i j} .$

Similarly $\mathbb{E}_{i}$ for expectation conditioned on $X_{0}=i$.

Write $p_{i j}^{(n)}=\mathbb{P}\left(X_{k+n}=j \mid X_{k}=i\right)$. This is an ==$n$-step transition probability== of the Markov chain.
```

---
### Example: General two-state Markov chain
Let $I=\{1,2\}$ and
$$
P=\left(\begin{array}{cc}
1-\alpha & \alpha \\
\beta & 1-\beta
\end{array}\right)
$$
What is $p_{11}^{(n)}$ ?
#### Solution
(1) $P$ has eigenvalues 1 and $1-\alpha-\beta$ (check! Every Markov transition matrix has 1 as an eigenvalue - why?). So we can diagonalise:
$$
\begin{aligned}
P &=U\left(\begin{array}{cc}
1 & 0 \\
0 & 1-\alpha-\beta
\end{array}\right) U^{-1} \\
P^{n} &=U\left(\begin{array}{cc}
1 & 0 \\
0 & (1-\alpha-\beta)^{n}
\end{array}\right) U^{-1}
\end{aligned}
$$
We get $\left(P^{n}\right)_{11}=A+B(1-\alpha-\beta)^{n}$ for some constants $A$ and $B$
Since we know $p_{11}^{(0)}=1$ and we have $p_{11}^{(1)}=1-\alpha$, we can solve for $A$ and $B$ to get $p_{11}^{(n)}=\frac{\beta}{\alpha+\beta}+\frac{\alpha}{\alpha+\beta}(1-\alpha-\beta)^{n}$

(2) Alternatively, we can condition on the state at step $n-1$ :
$$
\begin{aligned}
p_{11}^{(n)} &=p_{11}^{(n-1)}(1-\alpha)+p_{12}^{(n-1)} \beta \\
&=p_{11}^{(n-1)}(1-\alpha)+\left(1-p_{11}^{(n-1)}\right) \beta \\
&=(1-\alpha-\beta) p_{11}^{(n-1)}+\beta
\end{aligned}
$$
This gives a linear recurrence relation for $p_{11}^{(n)}$, which we can solve using standard methods to find the answer.

### Proposition 5.4: Markov chain criterion
Suppose that $\left(Y_{n}, n \geq 0\right)$ is a random process, and for some function $f$ we can write, for each $n$,
$$
Y_{n+1}=f\left(Y_{n}, X_{n+1}\right)
$$
where $X_{n+1}$ is independent of $Y_{0}, Y_{1}, \ldots, Y_{n} .$ Then $\left(Y_{n}, n \geq 0\right)$ is a [[Markov chain]].

#### Proof
The idea is that to update the chain, we use only the current state and some "new" randomness. We have
$$
\begin{aligned}
\mathbb{P}\left(Y_{n+1}=i_{n+1},\right.&\left.Y_{n}=i_{n}, \ldots, Y_{0}=i_{0}\right) \\
&=\mathbb{P}\left(f\left(i_{n}, X_{n+1}\right)=i_{n+1} \mid Y_{n}=i_{n}, \ldots, Y_{0}=i_{0}\right) \\
&\left.=\mathbb{P}\left(f\left(i_{n}, X_{n+1}\right)=i_{n+1}\right) \quad \text { (by independence of } X_{n+1} \text { from } Y_{0}, \ldots, Y_{n}\right) \\
&\left.=\mathbb{P}\left(f\left(i_{n}, X_{n+1}\right)=i_{n+1} \mid Y_{n}=i_{n}\right) \quad \text { (by independence of } X_{n+1} \text { from } Y_{n}\right) \\
&=\mathbb{P}\left(Y_{n+1}=i_{n+1} \mid Y_{n}=i_{n}\right)
\end{aligned}
$$

---
### Hitting Probability
![[Hitting probability]]