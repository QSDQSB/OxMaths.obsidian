#ComplexAnalysis 

## Chain Rule

```ad-theorem
title: Chain Rule
Let $U$ be an open subset of $\mathbb{C}$ and let $F: U \rightarrow \mathbb{C}$ be a [[holomorphic]] function. If $\gamma:[a, b] \rightarrow \mathbb{U}$ is a (piecewise) $C^{1}$-path, then $F(\gamma(t))$ is [[Complex Differentiable|differentiable]] on any $t$ where $\gamma$ is [[Path Differentiable|differentiable]] and
$$
\frac{d}{d t}(F(\gamma(t)))=F^{\prime}(\gamma(t)) \cdot \gamma^{\prime}(t)
$$
```
^theorem

### Proof
Assume that $\gamma$ is differentiable at $t_{0} \in[a, b]$ and let $z_{0}=\gamma\left(t_{0}\right) \in U$. By definition of $F^{\prime}$, there is a function $\epsilon(z)$ such that
$$
F(z)=F\left(z_{0}\right)+F^{\prime}\left(z_{0}\right)\left(z-z_{0}\right)+\epsilon(z)\left(z-z_{0}\right)
$$
where $\epsilon(z) \rightarrow 0=\epsilon\left(z_{0}\right)$ as $z \rightarrow z_{0}$. But then
$$
\frac{F(\gamma(t))-F\left(\gamma\left(t_{0}\right)\right)}{t-t_{0}}=F^{\prime}\left(z_{0}\right) \cdot \frac{\gamma(t)-\gamma\left(t_{0}\right)}{t-t_{0}}+\epsilon(\gamma(t)) \cdot \frac{\gamma(t)-\gamma\left(t_{0}\right)}{t-t_{0}}
$$
But now consider the two terms on the right-hand side of this expression: the first term, as $t \rightarrow t_{0}$ tends to $F^{\prime}\left(z_{0}\right)\left(\gamma^{\prime}\left(t_{0}\right)\right)$. On the other hand, for the second term, since $\frac{\gamma(t)-\gamma\left(t_{0}\right)}{t-t_{0}}$ tends to $\gamma^{\prime}\left(t_{0}\right)$ as $t$ tends to $t_{0}$, we see that $\gamma(t)-$ $\gamma\left(t_{0}\right) /\left(t-t_{0}\right)$ is bounded as $t \rightarrow t_{0}$, while since $\gamma(t)$ is [[Continuous]] at $t_{0}$ since it is differentiable there, $\epsilon(\gamma(t)) \rightarrow \epsilon\left(\gamma\left(t_{0}\right)\right)=\epsilon\left(z_{0}\right)=0$. It follows that the second term tends to zero, so that the left-hand side tends to $F^{\prime}\left(z_{0}\right)\left(\gamma^{\prime}\left(t_{0}\right)\right)$ as $t \rightarrow t_{0}$, as required.