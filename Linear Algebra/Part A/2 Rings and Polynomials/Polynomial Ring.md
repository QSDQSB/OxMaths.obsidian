# Polynomial Ring
#LA 

---
$$\color{pink}\Large\mathbb{F}[x]$$

---
### Definition
Ghe ring of polynomials in $x$ with coefficients in $\mathbb{F}$ is denoted $\mathbb{F}[x]$. It consists of all ==formal sums== $$\sum_{i=0}^{\infty} a_{i} x^{i}$$
Here $a_{i}=0$ for all but finitely many values of $\mathrm{i}$.

### Theorem 2.8: Division algorithm for polynomials
```ad-theorem
title: Division Algorithm for Polynomials
Let $f(x), g(x) \in \mathbb{F}[x]$ be two polynomials with $g(x) \neq 0$. Then there exists $q(x), r(x) \in \mathbb{F}[x]$ such that $$f(x)=q(x) g(x)+r(x) \text { and } \operatorname{deg} r(x)<\operatorname{deg} g(x).$$
```

#### Proof
If $\operatorname{deg} f(x)<\operatorname{deg} g(x)$, put $q(x)=0, r(x)=f(x)$.
Assume now that deg $f(x) \geq \operatorname{deg} g(x)$ and let
$$
\begin{array}{c}
f(x)=a_{n} x^{n}+a_{n-1} x^{n-1}+\cdots+a_{0} \\
g(x)=b_{k} x^{k}+b_{k-1} x^{k-1}+\cdots+b_{0},\left(b_{k} \neq 0\right)
\end{array}
$$
Then
$$
\operatorname{deg}\left(f(x)-\frac{a_{n}}{b_{k}} x^{n-k} g(x)\right)<n
$$
By induction on $\operatorname{deg} f-\operatorname{deg} g$, there exist $s(x), t(x)$ such that
$$
f(x)-\frac{a_{n}}{b_{k}} x^{n-k} g(x)=s(x) g(x)+t(x) \text { and } \operatorname{deg} g(x)>\operatorname{deg} t(x)
$$
Hence put $q(x)=\frac{a_{n}}{b_{k}} x^{n-k}+s(x)$ and $r(x)=t(x)$.

#### Corollary 2.9
For all $f(x) \in \mathbb{F}[x]$ and $a \in \mathbb{F}$,
$$
f(a)=0 \Rightarrow(x-a) \mid f(x)
$$
##### Proof
By [[#Theorem 2.8 Division algorithm for polynomials]] there exist $q(x), r(x)$ such that
$$
f(x)=q(x)(x-a)+r(x)
$$
where $r(x)$ is constant (as $\operatorname{deg} r(x)<1)$. Evaluating at $a$ gives
$$
f(a)=0=q(a)(a-a)+r=r
$$
and hence $r=0$.



### Proposition 2.11
Let $a(x), b(x) \in \mathbb{F}[x]$ be two polynomials. Let $c(x)$ be a monic polynomial of highest degree dividing both $a(x)$ and $b(x)$ and write $c=\operatorname{gcd}(a, b)$ (also wrote less commonly hcf $(a, b))$.
```ad-theorem
title: Proposition
Let $a, b \in \mathbb{F}[x]$ be non-zero polynomials and let $\operatorname{gcd}(a, b)=c$. Then there exist $s, t \in \mathbb{F}[x]$ such that:
$$
a(x) s(x)+b(x) t(x)=c(x) .
$$
```