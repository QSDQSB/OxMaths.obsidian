#ComplexAnalysis 

```ad-theorem
title: Lemma 11.7
Let $f: \mathbb{H} \rightarrow \mathbb{C}_{\infty}$ be a [[meromorphic]] function on the upper-half plane $\mathbb{H}=\{z \in \mathbb{C}: \Im(z)>0\}$. Suppose that $f(z) \rightarrow 0$ as $z \rightarrow \infty$ in $\mathbb{H}$. Then if $\gamma_{R}(t)=$ Re $e^{i t}$ for $t \in[0, \pi]$ we have
$$
\int_{\gamma_{R}} f(z) e^{i \alpha z} d z \rightarrow 0
$$
as $R \rightarrow \infty$ for all $\alpha \in \mathbb{R}_{>0}$
```
^theorem

#### Lemma 11.6
Let $g: \mathbb{R} \rightarrow \mathbb{R}$ be a twice [[Complex Differentiable|differentiable]] function. Then if $[a, b]$ is an interval on which $g^{\prime \prime}(x)<0$, the function $g$ is concave on $[a, b]$, that is, for $x<y \in[a, b]$ we have
$$
g(t x+(1-t) y) \geq \operatorname{tg}(x)+(1-t) g(y), \quad t \in[0,1]
$$

### Proof of Jordan's Lemma
Suppose that $\epsilon>0$ is given. Then by assumption we may find an $S$ such that for $|z|>S$ we have $|f(z)|<\epsilon$. Thus if $R>S$ and $z=\gamma_{R}(t)$, it follows that
$$
\left|f(z) e^{i \alpha z}\right|=\leq \epsilon e^{-\alpha R \sin (t)} .
$$
But now applying Lemma $11.6$ to the function $g(t)=\sin (t)$ with $x=0$ and $y=\pi / 2$ we see that $\sin (t) \geq \frac{2}{\pi} t$ for $t \in[0, \pi / 2]$. Similarly we have $\sin (\pi-t) \geq 2(\pi-t) / \pi$ for $t \in[\pi / 2, \pi]$. Thus we have
$$

\left|f(z) e^{i \alpha z}\right| \leq\left\{\begin{array}{cc}
\epsilon \cdot e^{-2 \alpha R t / \pi}, & t \in[0, \pi / 2] \\
\epsilon \cdot e^{-2 \alpha R(\pi-t) / \pi} & t \in[\pi / 2, \pi]
\end{array}\right.
$$
But then it follows that
$$
\left|\int_{\gamma_{R}} f(z) e^{i \alpha z} d z\right| \leq 2 \int_{0}^{\pi / 2} \epsilon R . e^{-2 \alpha R t / \pi} d t=\epsilon \cdot \pi \frac{1-e^{-\alpha R}}{\alpha}<\epsilon . \pi / \alpha,
$$
Thus since $\pi / \alpha>0$ is independent of $R$, it follows that $\int_{\gamma_{R}} f(z) e^{i \alpha z} d z \rightarrow 0$ as $R \rightarrow \infty$ as required.