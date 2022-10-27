
## Picard's Theorem
#DE 

### Initial Value Problem
We begin with a first-order ODE with data:
$$
y^{\prime}(x)=f(x, y(x)) \text { with } y(a)=b
\quad\color{yellow}\text{(1.1)}
$$
^Equation1-1

Our **first assumption** is that $f: R \rightarrow \mathbb{R}$ is `continuous` in $R$. Note that if $y$ is a solution of (1.1), say on an interval $[a-h, a+h]$, then integrating (1.1) from $a$ to variable $x \in[a-h, a+h]$ yields
$$
y(x)-y(a)=[y(t)]_{a}^{x}=\int_{a}^{x} f(t, y(t)) d t
$$
for any $x$ so rearranging
$$
y(x)=b+\int_{a}^{x} f(t, y(t)) d t
\quad\color{yellow}\text{(1.4)}
$$
^Equation1-4

### Picard's Method

Take
$$
\left.\begin{array}{c}y_{0}(x)=b \\ y_{n+1}(x)=b+\int_{a}^{x} f\left(t, y_{n}(t)\right) d t\end{array}\right\}
\quad\color{yellow}\text{(1.5)}
$$
^Picard-Method

Consider the difference between each iteration:

$$\left.\begin{array}{c}
e_{0}(x)=b \\
e_{n+1}(x)=y_{n+1}(x)-y_{n}(x)

\end{array}\right\}\quad\color{yellow}\text{(1.6)}$$
^Equation1-6

and note that

$$
y_{n}(x)=\sum_{0}^{n} e_{k}(x)
\quad\color{yellow}\text{(1.7)}
$$
^Equation1-7

Recall that *the modulus of the integral of a function is less than or equal to the integral of the modulus*. Therefore
$$
\left|e_{n+1}(x)\right| \leq\left|\int_{a}^{x}\right| f\left(t, y_{n}(t)\right)-f\left(t, y_{n-1}(t)\right)|d t|
\quad\color{yellow}\text{(1.8)}
$$
^Equation1-8

[[Differential Equation/1 ODE and Picard's Theorem/Lipschitz]]

---
### Picard Existence Theorem
Let $f: R \rightarrow \mathbb{R}$ be a function defined on the rectangle $R:=$$\{(x, y):$$|x-a| \leq h,|y-b| \leq k\}$ which satisfies


$\large\mathbf{P}(\mathbf{i}):$

>(a) $f$ is continuous in $R$, with bound $M($ so $|f(x, y)| \leq M)$
(b) $M h \leq k$
^P-i

$\large\mathbf{P}(\mathbf{i i})$: $f$ satisfies a [[Differential Equation/1 ODE and Picard's Theorem/Lipschitz]] condition in $R .$
^P-ii

Then the IVP
$$
y^{\prime}(x)=f(x, y(x)) \text { with } y(a)=b
$$
has a ***unique*** solution $y:[a-h, a+h] \rightarrow[b-k, b+k]$.

---
#### Claim 1
> Each [$y_{n}$](#^Picard-Method) is well-defined, continuous and $\left|y_{n}(x)-b\right| \leq k$ for $x \in[a-h, a+h]$.

##### Proof of Claim 1
This is clearly true for $n=0$, so suppose claim is true for some $n \geq 0$.

Then for $t \in[a-h, a+h]$ we have that $\left(t, y_{n}(t)\right) \in R$ so as $f$ is defined and continuous on $R$ and as $y_{n}$ is continuous we have that $t \mapsto f\left(t, y_{n}(t)\right)$ is a continuous function on the interval $[a-h, a+h]$.

Thus $y_{n+1}$ is well defined and continuous by properties of integration and by [$\mathrm{P}(\mathrm{i})$](#^P-i)
$$
\begin{aligned}
\left|y_{n+1}(x)-b\right| & \leq\left|\int_{a}^{x}\right| f\left(t, y_{n}(t)\right)|d t| \\
& \leq\left|M \int_{a}^{x} d t\right|=M|x-a| \leq M h \leq k
\end{aligned}
$$
for every $x \in[a-h, a+h]$. Thus the claim is true by induction.

---
#### Claim 2
For $|x-a| \leq h$ and $n \in \mathbb{N}$

$$
\left|e_{n}(x)\right| \leq \frac{L^{n-1} M}{n !}|x-a|^{n}
\quad\color{yellow}\text{(1.11)} 
$$
^Equation1-11

where $L$ is such that the [[Differential Equation/1 ODE and Picard's Theorem/Lipschitz]] condition holds.

>We remark that this claim in particular implies that

$$
\left|e_{n}(x)\right| \leq \frac{L^{n-1} M}{n !} h^{n} \text { for all }|x-a| \leq h \quad\color{yellow}\text{(1.12)}
$$
^Equation1-12

>which will be the estimate that we will use to show that $\sum e_{n}$ converges uniformly using M-test.

##### Proof of Claim 2
We recall that the [[Differential Equation/1 ODE and Picard's Theorem/Lipschitz]] condition [P(ii)](#^P-ii) combined with the fact that the graph of $y_{n}$ is in the rectangle implies that for all $|t-a| \leq h$

$$
\left|f\left(t, y_{n}(t)\right)-f\left(t, y_{n-1}(t)\right)\right| \leq L\left|y_{n}(t)-y_{n-1}(t)\right|=L\left|e_{n}(t)\right|
\quad\color{yellow}\text{(1.13)} 
$$
^Equation1-13

From [(1.8)](#^Equation1-8) and [(1.13)](#^Equation1-13) thus
$$
\begin{aligned}
\left|e_{n+1}(x)\right| & \leq\left|\int_{a}^{x}\right| f\left(t, y_{n}(t)\right)-f\left(t, y_{n-1}(t)\right)|d t| \\
& \leq L\left|\int_{a}^{x}\right| e_{n}(t)|d t|
\end{aligned}
$$
Now we prove [(1.11)](#^Equation1-11) by induction:
$$
e_{1}(x)=y_{1}(x)-b=\int_{a}^{x} f(t, b) d t
$$
By [$\mathbf{P}(\mathbf{i})$](#^P-i), $f$ is bounded by $M$ so that
$$
\left|e_{1}(x)\right| \leq\left|\int_{a}^{x}\right| f(t, b)|d t| \leq M|x-a|
$$
so [(1.11)](#^Equation1-11) is true for $n=1$. Now suppose that [(1.11)](#^Equation1-11) is true for $n$, then
$$
\begin{aligned}
\left|e_{n+1}(x)\right| & \leq L\left|\int_{a}^{x}\right| e_{n}(t)|d t| \\
& \leq L\left|\int_{a}^{x} \frac{L^{n-1} M}{n !}\right| t-\left.a\right|^{n} d t\left|=\frac{L^{n} M}{(n+1) !}\right| x-\left.a\right|^{n+1}
\end{aligned}
$$
so that [(1.11)](#^Equation1-11) is true by induction.

---
#### Claim 3
The iterates $y_{n}(x)=\sum_{j=0}^{n} e_{j}(x)$ converge **uniformly** to a continuous function $y_{\infty}$ and $y_{\infty}$ is a solution of the integral equation (1.4).

##### Proof of Claim 3
The uniform convergence immediately follows from the [[Weierstrass M-test]] and [(1.12)](#^Equation1-12), since $\sum_{n=1}^{\infty} M_{n}$ for $M_{n}=\frac{L^{n-1} M h^{n}}{n !}$ converges and $M_{n}$ is a upper bound on $\left|e_{n}(x)\right|$ that is independent of $x$. Thus, $y_{n}=\sum_{0}^{n} e_{k}$ converges uniformly to a limit $y_{\infty}$ on $[a-h, a+h]$ and this limit is **continuous** as it is the **uniform** limit of the continuous functions $y_{n}$.

To see that $y_{\infty}$ is a solution of [(1.1)](#^Equation1-1), we would like to take the limit in (1.5) and exchange the limit and the integral to get that
$$
\begin{aligned}
y_{\infty}(x) &=\lim _{n \rightarrow \infty} y_{n+1}(x)=b+\lim _{n \rightarrow \infty} \int_{a}^{x} f\left(t, y_{n}(t)\right) d t \stackrel{(*)}{=} b+\int_{a}^{x} \lim _{n \rightarrow \infty} f\left(t, y_{n}(t)\right) d t \\
&=b+\int_{a}^{x} f\left(t, y_{\infty}(t)\right) d t
\end{aligned}
$$
The reason that we are allowed to switch limit and integral in $(*)$ is that the integrands $f\left(t, y_{n}(t)\right)$ converge **uniformly** to $f\left(t, y_{\infty}(t)\right)$ since the uniform convergence of the $y_{n}$ and the [[Differential Equation/1 ODE and Picard's Theorem/Lipschitz]] condition allow us to estimate
$$
\sup _{t \in[a-h, a+h]}\left|f\left(t, y_{n}(t)\right)-f\left(t, y_{\infty}(t)\right)\right| \leq \sup _{t \in[a-h, a+h]} L\left|y_{n}(t)-y_{\infty}(t)\right| \rightarrow 0
$$
We have thus proven the **existence** of a solution of the integral equation and as remarked previously differentiating the integral equation implies that
$$
y_{\infty}^{\prime}(x)=f\left(x, y_{\infty}(x)\right)
$$
and since also $y_{\infty}(a)=b$, thus $y_{\infty}$ is a solution of the [IVP](#^Equation1-1).

---
#### Claim 4
The solution of $(1.1)$ is unique among all functions $y:[a-h, a+h] \rightarrow$ $[b-k, b+k]$
##### Proof of Claim 4
Let $y_{1}(x)$ and $y_{2}(x)$ be two solutions of (1.1) (for the same $f, a$ and $b$) and set $e(x):=y_{2}(x)-y_{1}(x)$. We aim to show that $e(x)=0$ for all $x$.

As the IVP is equivalent to the integral equation (1.4) we can subtract the two integral equations satisfied by $y_{1,2}$ to see that
$$
e(x)=y_{2}(x)-y_{1}(x)=\int_{a}^{x}\left(f\left(t, y_{2}(t)\right)-f\left(t, y_{1}(t)\right)\right) d t
$$
so using the triangle inequality for integrals and the Lipschitz condition we get
$$
\begin{aligned}
|e(x)| & \leq\left|\int_{a}^{x}\right| f\left(t, y_{2}(t)\right)-f\left(t, y_{1}(t)\right)|d t| \leq L\left|\int_{a}^{x}\right| y_{2}(t)-y_{1}(t)|d t| \\
& \leq L\left|\int_{a}^{x}\right| e(t)|d t|
\end{aligned}
\quad\color{yellow}\text{(1.18)}
$$
^Equation1-18

Now $e(x)$ is continuous on $[a-h, a+h]$ therefore, it is **bounded** say $|e(x)| \leq B$ so
$$
|e(x)| \leq L\left|\int_{a}^{x} B d t\right|=L B|x-a|
$$
and inducting on $n$, using [$(1.18)$](#^Equation1-18), for each $n$
$$
|e(x)| \leq B L^{n} \frac{|x-a|^{n}}{n !}
$$
So that for each $n$
$$
|e(x)| \leq B \frac{L^{n} h^{n}}{n !} \rightarrow 0 \text { as } n \rightarrow \infty \text { and } e(x)=0
$$
Thus the difference is zero, so the solutions are the same which establishes **uniqueness**.

---
### Global Existence
>We would like to find conditions which guarantee that the solution does exist for all $x \in(-\infty, \infty)$ (or if $f$ is only defined for $x$ in an certain interval then on the whole such interval). 
>
>One such condition is the global [[Differential Equation/1 ODE and Picard's Theorem/Lipschitz|Lipschitz condition]], where we can find a constant $L$ such that the [[Differential Equation/1 ODE and Picard's Theorem/Lipschitz|Lipschitz condition]] holds for all $y .$ First we will see that if the [[Differential Equation/1 ODE and Picard's Theorem/Lipschitz]] condition is global in $y$, but $L$ still depends on the interval $[a-h, a+h]$, then there is existence on all of $[a-h, a+h]$.

Suppose we require that $f(x, y)$ is defined and continuous for all $(x, y) \in[a-h, a+h] \times \mathbb{R}$ and instead of $(\mathbf{P}(\mathbf{i i}))$ we have:

$\Large\mathbf{P}(\mathbf{iii})$: $f(x, y)$ satisfies the [[Differential Equation/1 ODE and Picard's Theorem/Lipschitz]] condition for all real $y$ and all $x \in[a-h, a+h]$.
^P-iii

---
Then **the last condition in [claim 1](#Claim%201) is not required** and hence we don't need to ask that $M h \leq k$.

If we investigate the proof of the [[#Picard existence theorem]], we see that $M$ also appears in [(1.16)](#^Equation1-16).

However for claim 2 to hold it is sufficient to take $M=\sup _{x \in[a-h, a+h]}|f(x, b)|$, which exists as $x \mapsto f(x, b)$ is a continuous function on the closed bounded interval $[a-h, a+h]$ (whereas $(x, y) \mapsto f(x, y)$ might be unbounded on the unbounded set $[a-h, a+h] \times \mathbb{R})$.

The rest of the proof applies without change and we hence obtain that the solution exists and is unique $\forall x \in[a-h, a+h]$.

---
### Continuous Dependence
![[Gronwall's Inequality#Continuous Dependence]]

---
