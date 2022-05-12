## Improper Integrals
#Analysis 

### Example 7.1
>Consider the function $f(x)=\log x$. This is continuous on $(0,1]$ but it is not integrable there since it is not bounded (it tends to $-\infty$ as $x \rightarrow 0)$.
However, it is **integrable** on any interval $[\varepsilon, 1], \varepsilon>0$.


By the [[second fundamental theorem of calculus]] (and the fact that if $F(x)=$ $x \log x-x$ then $\left.F^{\prime}(x)=\log x\right)$ we have
$$
\int_{\varepsilon}^{1} \log x d x=[x \log x-x]_{\varepsilon}^{1}=-1-\varepsilon \log \varepsilon-\varepsilon
\quad\color{yellow}\text{(7.1)} 
$$
We claim that

$$
\lim _{\varepsilon \rightarrow 0^{+}} \varepsilon \log \varepsilon=0
\quad\color{yellow}\text{(7.2)}
$$
^7-2

Once this is shown, it follows from $(7.1)$ that
$$
\lim _{\varepsilon \rightarrow 0^{+}} \int_{\varepsilon}^{1} \log x d x=-1
$$
This will often be written as
$$
\int_{0}^{1} \log x d x=-1
$$
but strictly speaking, as remarked above, this is not an integral as discussed in this course.

#### Proof of (7.2)
![[#^7-2]]
Recall that $$\log \varepsilon=-\int_{\varepsilon}^{1} \frac{d x}{x}$$ for $\varepsilon<1$. We divide the range of integration into the ranges $[\varepsilon, \sqrt{\varepsilon}$ and $[\sqrt{\varepsilon}, 1]$. On the first range we have $1 / x \leqslant 1 / \varepsilon$ and so
$$
\int_{\varepsilon}^{\sqrt{\varepsilon}} \frac{d x}{x} \mid \leqslant \frac{1}{\sqrt{\varepsilon}}
$$
On the second range we have $1 / x \leqslant 1 / \sqrt{\varepsilon}$ and so
$$
\left|\int_{\sqrt{\varepsilon}}^{1} \frac{d x}{x}\right| \leqslant \frac{1}{\sqrt{\varepsilon}}
$$
It follows that
$$
|\log \varepsilon| \leqslant \frac{2}{\sqrt{\varepsilon}}
$$
from which (7.2) follows immediately.

### Example 7.2
Consider the function $f(x)=1 / x^{2}$. We would like to discuss the integral of this "on $[1, \infty)$ ", but this is not permitted by the way we have defined the integral, which requires a bounded interval. However, on any bounded interval $[1, K]$ we have
$$
\int_{1}^{K} \frac{1}{x^{2}} d x=\left[-\frac{1}{x}\right]_{1}^{K}=1-\frac{1}{K}
$$
Therefore
$$
\lim _{K \rightarrow \infty} \int_{1}^{K} \frac{1}{x^{2}} d x=1
$$
This is invariably written
$$
\int_{1}^{\infty} \frac{1}{x^{2}} d x=1
$$
### Example 7.3
Define $f(x)$ to be $\log x$ if $0<x \leqslant 1$, and $f(x)=\frac{1}{x^{2}}$ for $x \geqslant 1$. Then it makes sense to write
$$
\int_{0}^{\infty} f(x) d x=0
$$
by which we mean
$$
\lim _{K \rightarrow \infty, \varepsilon \rightarrow 0} \int_{\varepsilon}^{K} f(x) d x=0
$$
This is a combination of the preceding two examples.

### Example 7.4
Define $f(x)$ to be $1 / x$ for $0<|x| \leqslant 1$, and $f(0)=0$. Then $f$ is unbounded as $x \rightarrow 0$, and so we cannot define the integral $\int_{-1}^{1} f .$ We can nonetheless try to make some kind of sense of this quantity. Excising the problematic region around 0, one can look at
$$
I_{\varepsilon, \varepsilon^{\prime}}:=\int_{\varepsilon}^{1} f(x) d x+\int_{-1}^{-\varepsilon^{\prime}} f(x) d x
$$
and one easily computes that $$I_{\varepsilon, \varepsilon^{\prime}}=\log \frac{\varepsilon^{\prime}}{\varepsilon}$$
This does not necessarily tend to a limit as $\varepsilon, \varepsilon^{\prime} \rightarrow 0$ (for example, if $\varepsilon^{\prime}=\varepsilon^{2}$ it does not tend to a limit). One will often hear the term [[Cauchy principal value]] (PV) for the limit $\lim _{\varepsilon \rightarrow 0} I_{\varepsilon, \varepsilon}$, which in this case equals 0. We won't discuss principal values any further in this course, and in this case it is not appropriate to write $\int_{-1}^{1} \frac{1}{x} d x=0 ;$ one could possibly write $\mathrm{PV} \int_{-1}^{1} \frac{1}{x} d x=0 .$

### Example 7.5
Similarly to the last example, one should not write $\int_{-\infty}^{\infty} \sin x d x=$ 0, even though $\lim _{K \rightarrow \infty} \int_{-K}^{K} \sin x d x=0$ (because sin is an odd function). In this case, $\lim _{K, K^{\prime} \rightarrow \infty} \int_{-K^{\prime}}^{K} \sin x d x$ does not exist. One could maybe write
$$
\operatorname{PV} \int_{-\infty}^{\infty} \sin x d x=0
$$
but I would not be tempted to do so.

### Definition: Improper Integrable Type I
Let $f:(a,b]\to\mathbb{R}$ such that $f\in R[a',b], \,\forall a'\in(a,b)$. Then f is improperly integrable over $(a,b]$ if $\lim_{d\to a^+}f(x)\mathrm{d}x$ exists.

In this case, $$\int_a^bf(x)dx=\lim_{a'\to a^+}\int_{a'}^bf(x)dx.$$
```ad-note
It suffices to disprove integrability if we can find $(a_n)\to a^+$ such that $\int_{a_n}^bf(x)dx$ diverges.
```

#### Lemma
If $f$ has the same sign on the whole domain, then it is enough to find $a_n\to a^+$ such that $\int_{a_n}^bf(x)dx$ converges to ensure integrability.

> `Similar Proof`
> ![[Theorem 1.1.17]]

(For a monotone function, if a limit exists for a particular sequence then it exists for any sequence converging to it.)

### Definition: Improper Integral Type II
Let $f:[0,\infty)\to\mathbb{R}$ such that $f$ is Riemann integrable on $[a,b]$ for any $b>a$. Then $f$ is improperly integrable on $[a,\infty)$ if $$\lim_{b\to\infty}\int_a^bf(x)dx$$ exists.

#### Example: $\large\int_{e}^\infty {dx\over x(\log x)^c}$
>$\int_{e}^\infty {dx\over x(\log x)^c}$ exists if and only if $c>1$.