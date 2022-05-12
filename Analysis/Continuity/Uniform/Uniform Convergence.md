## Uniform Convergence
#Analysis 
### Definition
Let $f_{n}$ and $f$ be real (or complex) functions on $E$, where $n=1,2, \cdots$.
1) If for every $\varepsilon>0$, there is $N \in \mathbb{N}$ such that for all $x \in E$ and for all $n>N$
$$
\left|f_{n}(x)-f(x)\right|<\varepsilon,
$$
then we say $f_{n}$ converges to $f$ [uniformly](Uniform%20Convergence) on $E$, written as $f_{n} \rightarrow f$ [uniformly](Uniform%20Convergence) on $E$ as $n \rightarrow \infty$.
2) Define the sequence of partial sums 
$$
s_{n}(x) \equiv \sum_{k=1}^{n} f_{k}(x) \quad \forall x \in E
$$
If $s_{n} \rightarrow s$ uniformly on $E$, then we say the series $\sum_{n=1}^{\infty} f_{n}$ [converges uniformly](Uniform%20Convergence) on $E$.

>By definition, $f_{n} \rightarrow f$ uniformly on $E$ implies **pointwise convergence** that
$$\lim _{n \rightarrow \infty} f_{n}(x)=f(x) \quad \forall x \in E.$$

### Theorem 1.4.3
>Let $f_{n}, f: E \rightarrow \mathbb{R}$ (or $\mathbb{C}$). Then $f_{n} \rightarrow f$ **uniformly** on $E$ if and only if
$$\lim _{n \rightarrow \infty} \sup _{x \in E}\left|f_{n}(x)-f(x)\right|=0 .$$
#### Proof
Recall the notation used here:
$$
\sup _{x \in E}\left|f_{n}(x)-f(x)\right|=\sup \left\{\left|f_{n}(x)-f(x)\right|: x \in E\right\}
$$
which is the supermum of the function $\left|f_{n}-f\right|$ over $E$, or $\infty$ if the function $\left|f_{n}-f\right|$ is unbounde $E .$
$(\Longrightarrow)\quad$ Suppose $f_{n} \rightarrow f$ uniformly on $E$, then for any given $\varepsilon>0$ there is $N$ such that $\forall x \in E$ $n>N$ we have
$$
\left|f_{n}(x)-f(x)\right|<\frac{\varepsilon}{2}
$$
That is, $\frac{\varepsilon}{2}$ is an upper bound of $\left.\left\{\left|f_{n}(x)-f(x)\right|: x \in E\right\}\right]$. Hence $\forall n>N$ 
$$\begin{aligned} \sup _{x \in E}\left|f_{n}(x)-f(x)\right| & \leq \frac{\varepsilon}{2} \\ &<\varepsilon \end{aligned}$$ Think about why we have " $\leq$", not " $<$"?
According to definition, $\lim _{n \rightarrow \infty} \sup _{x \in E}\left|f_{n}(x)-f(x)\right|=0$

$(\Longleftarrow)\quad$ Suppose $\lim _{n \rightarrow \infty} \sup _{x \in E}\left|f_{n}(x)-f(x)\right|=0$, then $\forall \varepsilon>0 \exists N$ such that $\forall n>N$
$$
\sup _{x \in E}\left|f_{n}(x)-f(x)\right|<\varepsilon
$$
Therefore for all $x \in E$ and $n>N$
$$
\left|f_{n}(x)-f(x)\right| \leq \sup _{x \in E}\left|f_{n}(x)-f(x)\right|<\varepsilon
$$
By definition $f_{n} \rightarrow f$ uniformly on $E$.
#### Exercise 1.4.4
>Prove that $f_{n} \rightarrow f$ uniformly in $E$ if and only if for any sequence $\left(x_{n}\right)$ in $E$
$$\lim _{n \rightarrow \infty}\left|f_{n}\left(x_{n}\right)-f\left(x_{n}\right)\right|=0 \text { . }$$

**Solution.** Consider the contrapositive:
$$\exists (x_n)\in  E,\text{ such that }  \lim_{n\to \infty}|f_n(x_n)-f(x)|\not=0, \text { or the limit does not exist at all. then}$$  $$f_n \text{ does not converge uniformly to f.} $$
1) The limit is not zero, then say it is $l$. Then take $\varepsilon>0={l\over2}$,
2) 