---
aliases: [AEP]
tag: [InfoTheory]
---
#InfoTheory 
## Weak AEP 1
```ad-theorem
title: Theorem 2.2: Weak AEP 1
Let $X$ be a discrete random variable. Then
$$
-\frac{1}{n} \log \left(p_{X_1, \cdots X_n}\left(X_1, \cdots X_n\right)\right) \stackrel{\text { in prob. }}{\longrightarrow} H(X) \quad \text { as } n \rightarrow+\infty .
$$
```
### Proof
By independence, $$-\log \left(p_{X_1, \cdots X_n}\left(X_1, \cdots X_n\right)\right)=-\sum_{i=1}^n \log \left(p_X\left(X_i\right)\right)$$ and $\mathbb{E}\left[-\log \left(p_X\left(X_i\right)\right)\right]=$ $H(X)$. The result follows from the [[weak law of large numbers]].

## Definition: Typical Sequences
![[Typical Sequences#^27aff8]]

## Weak AEP 2
```ad-theorem
title: Theorem 2.4: Weak AEP 2
For all $\varepsilon>0$, there exists an $n_0 \in \mathbb{N}$ such that for every $n>n_0$,
1) $p_{X_1, \cdots X_n}\left(x_1, \cdots x_n\right) \in$$\left[2^{-n(H(X)+\varepsilon)}, 2^{-n(H(X)-\varepsilon)}\right]$ for any $\left(x_1, \cdots, x_n\right) \in$$\mathcal{T}_n^{\varepsilon}$;
2) $\mathbb{P}\left(\left(X_1, \cdots, X_n\right) \in \mathcal{T}_n^{\varepsilon}\right) \geq 1-\varepsilon$;
3) $\left|\mathcal{T}_n^{\varepsilon}\right| \in\left[(1-\varepsilon) 2^{n(H(X)-\varepsilon)}, 2^{n(H(X)+\varepsilon)}\right]$.

Moreover, for Point (1) one can take $n_0=0$.
```

### Proof
- Point (1) follows directly from [[Typical Sequences]] for $n_0=0$.

- Point (2) follows by  [[#Weak AEP 1]], since for every $\varepsilon>0$,
$$
\mathbb{P}\left(\left(X_1, \cdots, X_n\right) \notin \mathcal{T}_n^{\varepsilon}\right)=\mathbb{P}\left(\mid \log \left(p_{X_1, \cdots, X_n}\left(X_1, \cdots, X_n\right)-H(X) \mid>\varepsilon\right),\right.
$$
which converges to 0 as $n \rightarrow+\infty$.

- For the upper bound in Point (3), it follows since
$$
\begin{aligned}
1 &=\sum_{\left(x_1, \cdots, x_n\right) \in \mathcal{X}^n} p_{\left.X_1, \cdots, X_n\right)}\left(x_1, \cdots, x_n\right) \\
& \geq \sum_{\left(x_1, \cdots, x_n\right) \in \mathcal{T}_n^{\varepsilon}} p_{X_1, \cdots, X_n}\left(x_1, \cdots, x_n\right) \\
& \geq \sum_{\left(x_1, \cdots, x_n\right) \in \mathcal{T}_n^{\varepsilon}} 2^{-n(H(X)+\varepsilon)}
\end{aligned}
$$

- For the lower bound, we know by Point (2) that the probability $\mathbb{P}\left(\left(X_1, \cdots, X_n\right) \in \mathcal{T}_n^{\varepsilon}\right)$ converges to 1 , so for $n$ large enough,
$$
1-\varepsilon \leq \mathbb{P}\left(\left(X_1, \cdots, X_n\right) \in \mathcal{T}_n^{\varepsilon}\right) \leq \sum_{\left(x_1, \cdots, x_n\right) \in \mathcal{T}_n^{\varepsilon}} 2^{-n(H(X)-\varepsilon)}=2^{-n(H(X)-\varepsilon)}\left|\mathcal{T}_n^{\varepsilon}\right|
$$
and then we get the lower bound.

```ad-remark
When $n$ is large, above suggests to think of $\left(X_1, \cdots, X_n\right)$ as being drawn **uniformly** from $\mathcal{T}_n^{\varepsilon}$ with probability $2^{-n H(X)}$.


```
```ad-note
title: The most likely sequence
The most likely sequence $x^*=\operatorname{argmax}_x \mathbb{P}\left(\left(X_1, \cdots, X_n\right)=x\right)$ is in general not an element of $\mathcal{T}_n^{\varepsilon}$. For example, take $\mathcal{X}=\{0,1\}$ and $\mathbb{P}(X=1)=0.9$, then $(1, \cdots, 1)$ is the most likely sequence but not typical since $-\frac{1}{n} \log \left(p_{X_1, \cdots, X_n}(1, \ldots, 1)=-\log (0.9)\right) \approx 0.11$ is not close to $H(X)=-0.1 \log (0.1)-$ $0.9 \log (0.9) \approx 0.46$. Note that as $n \rightarrow+\infty$, the probability of every sequence, thus also the most likely sequence, tends to 0 .
```