#Probability 

## Definition
Consider a population in which each individual gives birth after an $\operatorname{Exp}(\lambda)$ time, independently and repeatedly. If $n$ individuals are present then each waits an $\operatorname{Exp}(\lambda)$ time until it gives birth. So the first birth occurs after an ==$\operatorname{Exp}(n \lambda)$== time. Then we have $n+1$ individuals and, by [[Simple Birth Process#Proposition 3.3]], the process begins afresh:
- the $n-1$ individuals which didn't reproduce must each wait a further $\operatorname{Exp}(\lambda)$ time;
- the individual which did reproduce gets a new $\operatorname{Exp}(\lambda)$ time until it next gives birth;
- so does the individual which was born.
So the size of the population performs a [[simple birth process]] with rates $\lambda_n=n \lambda, n \geq 1$. This is often known as a Yule process of rate $\lambda$.

---

Suppose $Y_0=1$ and let $Y_t$ be the number of individuals alive at time $t>0$. Let $m(t):=$ $\mathbb{E}\left[Y_t\right]$.
### Proposition 3.4
We have $m(t)=e^{\lambda t}$, for $t \geq 0$.
#### Proof
Write $T$ for the time of the first birth, i.e. $T=\inf \left\{t \geq 0: Y_t=2\right\}$. Notice that after the first birth has occurred, by construction we have two independent copies of the original Yule process. Now, let us split the expectation according to whether $T$ has occurred by time $t$ or not:
$$
\begin{aligned}
m(t)=\mathbb{E}\left[Y_t\right] & =\mathbb{E}\left[Y_t \mathbb{1}_{\{T \leq t\}}\right]+\mathbb{E}\left[Y_t \mathbb{1}_{\{T>t\}}\right] \\
& =\int_0^t \mathbb{E}\left[Y_t \mid T=u\right] \lambda e^{-\lambda u} d u+\mathbb{P}(T>t),
\end{aligned}
$$
since $Y_t=1$ on the event $\{T>t\}$. Now, if $T=u$ then $\left(Y_{s+u}\right)_{s \geq 0}$ evolves as the sum of two independent copies of the original Yule process. So we have $\mathbb{E}\left[Y_t \mid T=u\right]=2 \mathbb{E}\left[Y_{t-u}\right]=2 m(t-u)$. Putting this together, we obtain
$$
m(t)=\int_0^t 2 m(t-u) \lambda e^{-\lambda u} d u+e^{-\lambda t} .
$$
We need to solve this integral equation. Changing variable in the integral to $s=t-u$ gives
$$
m(t)=e^{-\lambda t} \int_0^t 2 \lambda e^{\lambda s} m(s) d s+e^{-\lambda t}
$$
and so
$$
e^{\lambda t} m(t)=2 \lambda \int_0^t e^{\lambda s} m(s) d s+1 .
$$
Differentiating in $t$, we obtain
$$
\lambda e^{\lambda t} m(t)+e^{\lambda t} m^{\prime}(t)=2 \lambda e^{\lambda t} m(t)
$$
which is equivalent to
$$
m^{\prime}(t)=\lambda m(t) .
$$
Since $m(0)=\mathbb{E}\left[Y_0\right]=1$, we obtain $m(t)=e^{\lambda t}$.