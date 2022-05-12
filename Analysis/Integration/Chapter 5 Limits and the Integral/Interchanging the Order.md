#Analysis 
## 5.1 Interchanging the Order of Limits and Integration
```ad-example
There is a sequence of integrable functions $f_{n}:[0,1] \rightarrow \mathbb{R}$ (in fact, step functions) such that $f_{n}(x) \rightarrow 0$ pointwise for all $x \in[0,1]$ but $\int f_{n}=1$ for all $n$. Thus $\lim _{n \rightarrow \infty} \int_{0}^{1} f_{n}=1$, whilst $\int_{0}^{1} \lim _{n \rightarrow \infty} f_{n}=0$, and so interchange of integration and limit is not valid in this case.
- **Proof**. Define $f_{n}(x)$ to be equal to $n$ for $0<x<\frac{1}{n}$ and 0 elsewhere.

```

### Theorem 5.2
Suppose that $f_{n}:[a, b] \rightarrow \mathbb{R}$ are integrable, and that $f_{n} \rightarrow f$ **uniformly** on $[a, b] .$ Then $f$ is also integrable, and
$$
\lim _{n \rightarrow \infty} \int_{a}^{b} f_{n}=\int_{a}^{b} f=\int_{a}^{b} \lim _{n \rightarrow \infty} f_{n} .
$$
#### Proof
Let $\varepsilon>0$. Since $f_{n} \rightarrow f$ uniformly, there is some choice of $n$ such that we have $\left|f_{n}(x)-f(x)\right| \leqslant \varepsilon$ for all $x \in[a, b]$.

Now $f_{n}$ is integrable, and so there is a majorant $\phi_{+}$ and a minorant $\phi_{-}$ for $f_{n}$ with $I\left(\phi_{+}\right)-I\left(\phi_{-}\right) \leqslant \varepsilon$
Define $\tilde{\phi}_{+}:=\phi_{+}+\varepsilon$ and $\tilde{\phi}_{-}:=\phi_{-}-\varepsilon$. Then $\tilde{\phi}_{-}, \tilde{\phi}_{+}$ are minorant/majorant
for $f$. Moreover
$$
\begin{aligned}
I\left(\tilde{\phi}_{+}\right)-I\left(\tilde{\phi}_{-}\right) & \leqslant 2 \varepsilon(b-a)+I\left(\phi_{+}\right)-I\left(\phi_{-}\right) \\
& \leqslant 2 \varepsilon(b-a)+\varepsilon
\end{aligned}
$$
Since $\varepsilon$ was arbitrary, this shows that $f$ is integrable. Now
$$
\left|\int_{a}^{b} f_{n}-\int_{a}^{b} f\right| \leqslant \int_{a}^{b}\left|f_{n}-f\right| \leqslant(b-a) \sup _{x \in[a, b]}\left|f_{n}(x)-f(x)\right| .
$$
Since $f_{n} \rightarrow f$ uniformly, it follows that
$$
\lim _{n \rightarrow \infty}\left|\int_{a}^{b} f_{n}-\int_{a}^{b} f\right|=0.
$$

and hence that
$$
\lim _{n \rightarrow \infty} \int_{a}^{b} f_{n}=\int_{a}^{b} f=\int_{a}^{b} \lim _{n \rightarrow \infty} f_{n} \text { . }
$$
This concludes the proof.

---
`We may integrate series term-by-term under suitable conditions.`

#### Corollary 5.3
Suppose that $\phi_{i}:[a, b] \rightarrow \mathbb{R}, i=1,2, \ldots$ are integrable functions and that $\left|\phi_{i}(x)\right| \leqslant M_{i}$ for all $x \in[a, b]$, where $\sum_{i=1}^{\infty} M_{i}<\infty .$ Then the sum $\sum_{i} \phi_{i}$ is integrable and
$$
\int_{a}^{b} \sum_{i} \phi_{i}=\sum_{i} \int_{a}^{b} \phi_{i}
$$
**Proof**. This is immediate from the [[Weierstrass M-test]] and [[#Theorem 5.2]], applied with $f_{n}=\sum_{i=1}^{n} \phi_{i}$.

## 5.2 Interchanging the Order of Limits and Differentiation
`Example`	There is a sequence of functions $f_{n}:[0,1] \rightarrow \mathbb{R}$, each continuously differentiable on $(0,1)$, such that $f_{n} \rightarrow 0$ uniformly but such that $f_{n}^{\prime}$ does not converge at every point.
- **Proof**. Take $f_{n}(x)=\frac{1}{n} \sin \left(n^{2} x\right)$. Then $f_{n}^{\prime}(x)=-n \cos \left(n^{2} x\right)$. Taking $x=\frac{\pi}{4}$, we see that if $n$ is a multiple of 4 then $f_{n}^{\prime}(x)=-n$, which certainly does not converge.

### Proposition 5.5
>Suppose that $f_{n}:[a, b] \rightarrow \mathbb{R}, n=1,2, \ldots$ is a sequence of functions with the property that $f_{n}$ is continuously differentiable on $(a, b)$, that $f_{n}$ converges pointwise to some function $f$ on $[a, b]$, and that $f_{n}^{\prime}$ converges **uniformly** to some bounded function $g$ on $(a, b) .$ Then $f$ is differentiable and $f^{\prime}=g$.

In particular, $$\lim _{n \rightarrow \infty} f_{n}^{\prime}=\left(\lim _{n \rightarrow \infty} f_{n}\right)^{\prime}.$$


#### Proof
First note that, since the $f_{n}^{\prime}$ are continuous and $f_{n}^{\prime} \rightarrow g$ **uniformly**, $g$ is continuous. Since we are also assuming $g$ is bounded, it follows from [[Integrable#Theorem 2.2]] that $g$ is integrable.
We may therefore apply the [[First Fundamental Theorem of Calculus]] to $g$. Since $g$ is continuous, the theorem says that if we define a function $F:[a, b] \rightarrow \mathbb{R}$

by
$$
F(x):=\int_{a}^{x} g(t) d t
$$
then $F$ is differentiable with $F^{\prime}=g .$ By the [[Second Fundamental Theorem of Calculus]] applied to $f_{n}$, we have
$$
\int_{a}^{x} f_{n}^{\prime}(t) d t=f_{n}(x)-f_{n}(a)
$$
Taking limits as $n \rightarrow \infty$ and using the fact that $f_{n} \rightarrow f$ pointwise, we obtain
$$
\lim _{n \rightarrow \infty} \int_{a}^{x} f_{n}^{\prime}(t) d t=f(x)-f(a)
$$
However, since $f_{n}^{\prime} \rightarrow g$ uniformly, it follows from [[#Theorem 5.2]] that
$$
\lim _{n \rightarrow \infty} \int_{a}^{x} f_{n}^{\prime}(t) d t=\int_{a}^{x} g(t) d t
$$
Thus
$$
F(x)=\int_{a}^{x} g(t) d t=f(x)-f(a)
$$
It follows immediately that $f$ is differentiable and that its derivative is the same as that of $F$, namely $g$.

---
 [[Cauchy's Integral Formula]]
- Remark. Note that the statement of Proposition 5.5 involves only diﬀerentiation. However, the proof involves a considerable amount of the theory of integration. This is a theme that is seen throughout mathematical analysis. For example, the nice behaviour of complex diﬀerentiable functions (which you will see in course A2 next year) is a consequence of Cauchy’s integral formula.

## 5.3 Power series and radius of convergence
### Corollary 5.6
Suppose we have a sequence of continuous functions $\phi_{i}:[a, b] \rightarrow \mathbb{R}$, continuously differentiable on $(a, b)$, with $\sum_{i} \phi_{i}$ **converging** pointwise. Suppose that $\left|\phi_{i}^{\prime}(x)\right| \leqslant M_{i}$ for all $x \in(a, b)$, where $\sum_{i} M_{i}<\infty .$ Then $\sum \phi_{i}$ is differentiable and
$$
\left(\sum_{i} \phi_{i}\right)^{\prime}=\sum_{i} \phi_{i}^{\prime}.
$$
#### Proof
Apply [[#Proposition 5.5]] with $f_{n}:=\sum_{i=1}^{n} \phi_{i} .$ By the [[Weierstrass M-test]], $f_{n}^{\prime}=\sum_{i=1}^{n} \phi_{i}^{\prime}$ does converge pointwise to some bounded function, which we may call $g$.

Now suppose we have a sequence $\left(a_{i}\right)_{i=0}^{\infty}$ of real numbers. Then the expression $\sum_{i=0}^{\infty} a_{i} x^{i}$ is called a (*formal*) power series. The word "*formal*" means that we are not actually evaluating the sum over $i$; indeed, this may well not be possible for a given choice of the $a_{i}$ and $x$. In fact, a formal power series is just the same thing as a sequence $\left(a_{i}\right)_{i=0}^{\infty}$, only written a different way; it is a very similar concept to that of a generating function.

### Definition: Radius of Convergence
Given a formal power series $\sum_{i} a_{i} x^{i}$, we define its **radius of convergence** $R$ to be the **supremum** of all $|x|$ for which the sum $\sum_{i=0}^{\infty}\left|a_{i} x^{i}\right|$ converges. If this sum converges for all $x$, we write $R=\infty$.

---

	Theorem 5.9
below was called the "***differentiation theorem for power series***" in Analysis II. We isolate a simple lemma from the proof.

### Lemma 5.8
>Suppose that $0 \leqslant \lambda<1 .$ Then $\sum_{i=0}^{\infty} \lambda^{i}$ and $\sum_{i=1}^{\infty} i \lambda^{i-1}$ both **converge**.
#### Proof
By the well-known geometric series formula we have
$$
\sum_{i=0}^{n-1} \lambda^{i}=\frac{1-\lambda^{n}}{1-\lambda}
$$
Letting $n \rightarrow \infty$ gives the first statement immediately, the value of the sum being $\frac{1}{1-\lambda}$.

For the second statement, we **differentiate** the geometric series formula. This gives
$$
\sum_{i=1}^{n-1} i \lambda^{i-1}=\frac{1+(n-1) \lambda^{n}-n \lambda^{n-1}}{(1-\lambda)^{2}}
$$
which tends to $\frac{1}{(1-\lambda)^{2}}$ as $n \rightarrow \infty$.

### Theorem 5.9
`We may differentiate the power series term-by-term within its radius of convergence; the radius of convergence for the derivative is 'greater or equal'.`
>Suppose a formal power series $\sum_{i=0}^{\infty} a_{i} x^{i}$ has radius of convergence $R$. Then the series converges for $|x|<R$, giving a well-defined function $f(x)=\sum_{i=0}^{\infty} a_{i} x^{i} .$ Moreover, $f$ is differentiable on $(-R, R)$, and its derivative is given by term-by-term differentiation, that is to say $f^{\prime}(x)=\sum_{i=1}^{\infty} i a_{i} x^{i-1} .$ Moreover, the radius of convergence for this power series for $f^{\prime}$ is **at least** $R$.

#### Proof
If $R=0$, there is nothing to prove. Suppose that $R>0$. Let $R_{1}$ satisfy $0<R_{1}<R$. We apply [[#Corollary 5.6]] with $\phi_{i}(x)=a_{i} x^{i}$ and $[a, b]=\left[-R_{1}, R_{1}\right]$ We need to check that the hypotheses of that result are satisfied. By definition of the radius of convergence, there is some $R_{0}$ satisfying $R_{1}<R_{0} \leqslant R$ for which $\sum_{i}\left|a_{i} R_{0}^{i}\right|$ converges, and in particular $\left|a_{i} R_{0}^{i}\right|$ is bounded, uniformly in $i$ : let us say that $\left|a_{i} R_{0}^{i}\right| \leqslant K$. Then if $x \in[a, b]$ we have
$$
\left|\phi_{i}(x)\right| \leqslant K\left(\frac{R_{1}}{R_{0}}\right)^{i}
$$
and
$$
\left|\phi_{i}^{\prime}(x)\right| \leqslant \frac{K}{R_{0}} i\left(\frac{R_{1}}{R_{0}}\right)^{i-1}.
$$
The first condition of [[#Corollary 5.6]], that is to say pointwise convergence of $\sum_{i} \phi_{i}(x)$, is now immediate from the first part of [[#Lemma 5.8]]. Taking $M_{i}:=\frac{K}{R_{0}} i\left(\frac{R_{1}}{R_{0}}\right)^{i-1}$, we obtain the other condition of [[#Corollary 5.6]] from the second part of [[#Lemma 5.8]]. It now follows from [[#Corollary 5.6]] that $f$ is differentiable on $\left(-R_{1}, R_{1}\right)$, and that is derivative is given by term-by-term differentiation of the power series for $f$. Since $R_{1}<R$ was arbitrary, we may assert the same on $(-R, R)$.

Finally, it follows from [[#Lemma 5.8]] that the radius of convergence of the power series for $f^{\prime}$ is at least $R_{1}$. Since $R_{1}<R$ was arbitrary, the radius of convergence of this power series is at least $R$, as claimed.

>By applying this theorem repeatedly, it follows that under the same assumptions f is inﬁnitely differentiable on $(-R, R)$, with all of its derivatives being given by term-by-term differentiation.