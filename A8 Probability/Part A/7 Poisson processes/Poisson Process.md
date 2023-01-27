---
aliases: [process, Poisson processes]
---
# Poisson Process
#Probability 

## Definition
Let $\lambda>0$. We will give two different definitions for what it means to be a Poisson process of rate $\lambda$. Afterwards we will show that these definitions are equivalent.

```ad-definition


title: Definition of Poisson process via exponential interarrival times
The counting process $N_{t}:=\#\left\{n \geq 1: Y_{1}+\cdots+Y_{n} \leq t\right\}, t \geq 0$, is a [[Poisson process]] of rate $\lambda$ if its interarrival times $Y_{1}, Y_{2}, Y_{3}, \ldots$ are i.i.d. with $\operatorname{Exp}(\lambda)$ distribution.
```
^Definition-1
```ad-definition
title: Definition of Poisson process via Poisson distribution of increments
The counting process $N_{t}, t \geq 0$ is a [[Poisson process]] of rate $\lambda$ if:
1) $N_{0}=0$
2) If $\left(s_{1}, t_{1}\right),$$\left(s_{2}, t_{2}\right), \ldots,\left(s_{k}, t_{k}\right)$ are disjoint intervals in $\mathbb{R}_{+}$, then the increments $N\left(s_{1}, t_{1}\right]$, $N\left(s_{2}, t_{2}\right]$, $\ldots,$ $N\left(s_{k}, t_{k}\right]$ are independent, where $N\left(s_{i}, t_{i}\right]=$$N_{t_{i}}-N_{s_{i}}$.
3) For any $s<t$, the increment $N(s, t]$ has Poisson distribution with mean $\lambda(t-s)$.
```
^Definition-2

Property (2) in [[#^Definition-2]] is called the *independent increments property*. The number of points falling in disjoint intervals is independent.

This can be seen as a version of the [[Markov Property]]. For any $t_{0}$, the distribution of the process $\left(N\left(t_{0}, t_{0}+t\right], t \geq 0\right)$, is independent of the process $\left(N_{t}, t \leq t_{0}\right)$. Put another way, the distribution of $\left(N_{t}, t>t_{0}\right)$ conditional on the process $\left(N_{t}, t \leq t_{0}\right)$ depends only on the value $N_{t_{0}}$.

### Equivalence of Definitions
#### Interrarival definition implies independent Poisson increments deﬁnition
Property (i) is immediate: since $Y_{1}=T_{1}=\inf \left\{t \geq 0: N_{t} \geq 1\right\}$ is strictly positive with probability 1 , also $N_{0}=0$ with probability 1 .

Now let us consider the distribution of the number of points in an interval. First let us take $s=0$ in (iii), and consider $N(0, t]$. We want $N(0, t] \sim \operatorname{Poisson}(\lambda t)$, i.e. that for all $k$,
$$
\mathbb{P}(N(0, t]=k)=\frac{e^{-\lambda t}(\lambda t)^{k}}{k !}
$$
But we can rewrite the event on the LHS in terms of $T_{k}$ and $T_{k+1}$. Since $T_{k}$ is the sum of $k$ independent exponentials of rate $\lambda$, we have $T_{k} \sim \operatorname{Gamma}(k, \lambda)$, and similarly $T_{k+1} \sim$ $\operatorname{Gamma}(k+1, \lambda)$. So
$$
\begin{aligned}
\mathbb{P}(N(0, t]=k) &=\mathbb{P}\left(T_{k} \leq t, T_{k+1}>t\right) \\
&=\mathbb{P}\left(T_{k} \leq t\right)-\mathbb{P}\left(T_{k+1} \leq t\right) \\
&=\int_{0}^{t} \frac{\lambda^{k} x^{k-1} e^{-\lambda x}}{(k-1) !} d x-\int_{0}^{t} \frac{\lambda^{k+1} x^{k} e^{-\lambda x}}{k !} d x
\end{aligned}
$$
Now we can check that the RHS of (7.1) and (7.2) are the same (for example, either by integrating by parts in (7.2), or by differentiating in (7.1)). In this way we obtain that indeed $N(0, t] \sim \operatorname{Poisson}(\lambda t)$.

Now we use the memoryless property of the exponential distribution to extend this to all intervals and to give the independent increments property.

Fix $s$, and suppose we condition on any outcome of the process on $[0, s]$. To be specific, condition on the event that
$$
N_{s}=k, T_{1}=t_{1}, T_{2}=t_{2}, \ldots, T_{k}=t_{k} .
$$
Equivalently,
$$
Y_{1}=t_{1}, Y_{2}=t_{2}-t_{1}, \ldots, Y_{k}=t_{k}-t_{k-1}, Y_{k+1}>s-t_{k}
$$
The memoryless property for $Y_{k+1}$ tells us that conditional on $Y_{k+1}>s-t_{k}$, the distribution of $Y_{k+1}-\left(s-t_{k}\right)$ is again exponential with rate $\lambda$.

Combining this with the independence of the sequence $Y_{i}$, we have that conditional on (7.3), the sequence $Y_{k+1}-\left(s-t_{k}\right), Y_{k+2}, Y_{k+3}, \ldots$ is i.i.d. with $\operatorname{Exp}(\lambda)$ distribution.

But this means that, conditional on (7.3), the distribution of the process $N(s, s+u], u \geq 0$ is the same as the original distribution of the process $\left(N_{u}, u \geq 0\right)$.

So indeed, the property (iii) extends to all $s$. Further, the increment on $(s, t]$ is independent of the whole process on $(0, s]$, and applying this repeatedly we get independence of any set of increments on disjoint intervals. So Definition $7.2$ holds as desired.

#### Poisson deﬁnition characterises the distribution of the process
- ***Seemingly unexaminable.***

## Superposition of Poisson Process
```ad-theorem
title: Superposition of Poisson processes
Let $L=\left(L_{t}, t \geq 0\right)$ and $M=\left(M_{t}, t \geq 0\right)$ be independent Poisson processes of rate $\lambda$ and $\mu$ respectively. Let $N_{t}=L_{t}+M_{t}, t \geq 0$. Then $N=\left(N_{t}, t \geq 0\right)$ is a [[Poisson process]] of rate $\lambda+\mu$.
```

### Proof
1. We work from the definition of a Poisson process in terms of independent Poisson increments for disjoint intervals. Clearly, $N_{0}=L_{0}+M_{0}=0$ for property (1)
2. $N$ satisfies property (2) (independent increments) since $L$ and $M$ both have independent increments and are independent of each other.
3. Since $L(s, t] \sim \operatorname{Poisson}(\lambda t)$ and $M(s, t] \sim \operatorname{Poisson}(\mu t)$ independently of each other, we have $N(s, t] \sim \operatorname{Poisson}((\lambda+\mu) t)$ as required, by familiar properties of the Poisson distribution.

## Thinning of Poisson Process
```ad-theorem
title: Thinning of a Poisson process
Let $N=\left(N_{t}, t \geq 0\right)$ be a [[Poisson process]] of rate $\lambda$. "Mark" each point of the process with probability $p$, independently for different points. Let $M=\left(M_{t}, t \geq 0\right)$ be the counting process of the marked points. Then $M$ is a [[Poisson process]] of rate $p \lambda$.
```
### Proof
1. Properties (i) and (ii) for $M$ follow from the same properties for $N$.
2. Consider any interval $(s, t]$. We have $N(s, t] \sim \operatorname{Poisson}(\lambda(t-s))$, and conditional on $N(s, t]=n$, we have $M(s, t] \sim \operatorname{Binomial}(n, p)$. But if $A \sim \operatorname{Poisson}(\mu)$, and, conditional on $A=n, B \sim \operatorname{Binomial}(n, p)$, then in fact $B \sim \operatorname{Poisson}(p \mu)$. This fact was proved in two different ways: `1` it can be done using generating functions: let $B=X_{1}+X_{2}+\cdots+X_{A}$ where $X_{i}$ are i.i.d. Bernoulli random variables; then $G_{B}(s)=G_{A}\left(G_{X}(s)\right)$. `2` by direct calculation:
$$
\begin{aligned}
\mathbb{P}(B=k)=& \sum_{n \geq 0} \mathbb{P}(B=k \mid A=n) \mathbb{P}(A=n) \\
=& \sum_{n \geq k} \frac{e^{-\mu} \mu^{n}}{n !}\left(\begin{array}{l}
n \\
k
\end{array}\right) p^{k}(1-p)^{n-k} \\
& \vdots \\
=& \frac{e^{-p \mu}(p \mu)^{k}}{k !} .
\end{aligned}
$$
Hence indeed we have here that $M(s, t] \sim \operatorname{Poisson}(p \lambda(t-s))$. So indeed property (iii) holds as desired, and $M$ is a [[Poisson Process]] of rate $p \lambda$.

## The Poisson process as a limit of discrete-time processes

1) If $X_{n} \sim \operatorname{Binomial}(n, \lambda / n)$, then $X_{n} \stackrel{d}{\rightarrow} \operatorname{Poisson}(\lambda)$ as $n \rightarrow \infty .$ (See Example 2.10.)
2) If $Y_{n} \sim \operatorname{Geometric}(\lambda / n)$, then $Y_{n} / n \stackrel{d}{\rightarrow} \operatorname{Exp}(\lambda)$ as $n \rightarrow \infty$. (See Example 2.3.)

Consider a sequence of independent Bernoulli trials. In each trial (or time-slot), suppose we see a success with probability $p$ and no event with probability $1-p$. Then in any run of $m$ trials, the total number of successes has $\operatorname{Binomial}(m, p)$ distribution. Meanwhile the distances between consecutive successes are i.i.d. with Geometric $(p)$ distribution.

Now consider $n$ large. Let $p=\lambda / n$, and rescale time by a factor of $1 / n$, so that a timeinterval of length $t$ corresponds to a run of $t n$ trials. Then the number of events in a timeinterval of length $t$ has $\operatorname{Binomial}(t n, \lambda / n)$ distribution, which is approximately $\operatorname{Poisson}(\lambda t)$, while the times between consecutive successes have Geometric $(\lambda / n)$ distribution rescaled by $1 / n$, which is approximately $\operatorname{Exp}(\lambda)$.

So indeed, as $n \rightarrow \infty$, we obtain a continuous-time process in which the interarrival times are independent exponentials, and the increments on disjoint intervals are independent Poisson random variables. So we can see this exponential/Poisson relationship in the [[Poisson Process]] as a limit of the geometric/binomial relationship which is already familiar from sequences of independent trials.

```ad-example
title: Example 7.8
A call centre receives calls from existing customers at rate 1 per 20 seconds, and calls from potential new customers at rate 1 per 30 seconds. Assume that these form independent Poisson processes. 
1) What is the distribution of the total number of calls in a given minute?
2) What is the probability that the next call to arrive is from a potential new customer?
3) Suppose each call from a potential new customer results in a contract with probability $1 / 4$ independently. What is the distribution of the number of new contracts arising from calls in a given hour?

---
**Solution**: Let the unit of time be 1 minute, so that the [[Poisson Process|Poisson processes]] in the question have rates 3 and 2 .
1) From Theorem 7.5, the combined process of all calls is a [[Poisson process]] of rate 5 . The number of calls in a given minute has Poisson(5) distribution.
2) From any given moment, the time until the next "existing" call, say $U_{1}$, is exponential with rate 3 , and the time until the next "new" call, say $V_{1}$, is exponential with rate $2 .$
$$
\begin{aligned}
\mathbb{P}\left(U_{1}<V_{1}\right) &=\int_{u=0}^{\infty} \int_{v=u}^{\infty} 3 e^{-3 u} \times 2 e^{-2 v} d v d u \\
&=\int_{u=0}^{\infty} 3 e^{-3 u} e^{-2 u} d u \\
&=3 /(2+3) \\
&=3 / 5
\end{aligned}
$$
(In fact, it is not a coincidence that here the answer is the ratio of the rate of the "existing customer" [[Poisson Process|process]] to the rate of the two processes combined. This fact follows from Remark 7.7; we can consider a single process of rate 5 and "mark" each point with probability $3 / 5$, to arrive at two independent processes with rates 3 and 2. In particular, the probability that the first point is marked is then $3 / 5$.)
3) The process of calls resulting in contracts is a thinning of the process of calls from potential new customers. This gives us a new [[Poisson process]] of rate $1 / 4 \times 2=1 / 2$. So the total number of calls resulting in new contracts in a given time interval of length 60 has Poisson(30) distribution.
```
