
---
aliases: [Integrable, Riemann Integrable]
---
## Integrable
#Analysis 
### Definition: Majorant
Let $f:[a, b] \rightarrow \mathbb{R}$ be a bounded function. We say that a step function $\phi_{-}$ is a **minorant** for $f$ if $f \geqslant \phi_{-}$ pointwise. 
### Definition: Majorant
We say that a step function $\phi^{+}$ is a **majorant** for $f$ if $f \leqslant \phi^{+}$ pointwise.
### Definition: Integrable
A function $f$ is [[integrable]] if $$\sup _{\phi_{-}} I\left(\phi_{-}\right)=\inf _{\phi_{+}} I\left(\phi_{+}\right), \quad\color{yellow}\text{(1.1)}$$where the *sup* is over all minorants $\phi_{-} \leqslant f$, and the *inf* is over all majorants $\phi_{+} \geqslant f$. These minorants and majorants are always assumed to be step functions. 

We define the integral $\int_{a}^{b} f$ to be the common value of the two quantities in $(1.1)$.

> Note that sup and inf exists for any **bounded** function $f$.

> Note that for any function $f$, $$\sup _{\phi_{-}} I\left(\phi_{-}\right) \leqslant \inf _{\phi_{+}} I\left(\phi_{+}\right).\quad\color{yellow}\text{(1.2)}$$ And it follows that if $f$ is [[integrable]] then $$I\left(\phi_{-}\right) \leqslant \int_{a}^{b} f \leqslant I\left(\phi_{+}\right).\quad\color{yellow}\text{(1.3)}$$ whenever $\phi_{-} \leqslant f \leqslant \phi_{+}$ are minorant and majorants.

^6b1e95

>**Remark**. If a function $f$ is only defined on an open interval $(a, b)$, then we say that it is [[integrable]] if an arbitrary **extension** of it to $[a, b]$ is. It follows immediately from the definition of [[step function]] (which does not care about the endpoints) that it does not matter which extension we choose.

### Lemma 1.8
>Let $f:[a, b] \rightarrow \mathbb{R}$ be a **bounded** function. Then the following are **equivalent**:
>1) $f$ is [[integrable]];
>2) for every $\varepsilon>0$, there is a majorant $\phi_{+}$ and a minorant $\phi_{-}$ for $f$ such that $I\left(\phi_{+}\right)-I\left(\phi_{-}\right)<\varepsilon$.
#### Proof
- Suppose first that $f$ is [[integrable]]. Let $\varepsilon>0 .$ Then by the *approximation property* for sup and inf, there is a minorant $\phi_{-}$ such that
$$
I\left(\phi_{-}\right)>\sup _{\phi_{-}} I\left(\phi_{-}\right)-(\varepsilon / 2),
$$
and a majorant $\phi_{+}$ such that
$$
I\left(\phi_{+}\right)<\inf _{\phi_{+}} I\left(\phi_{+}\right)+(\varepsilon / 2).
$$
Since the sup and inf are assumed to be equal, we deduce that
$$
I\left(\phi_{+}\right)-I\left(\phi_{-}\right)<\varepsilon.
$$
- Now suppose that (2) holds. Let $\varepsilon>0$ be arbitrary, and let $\phi_{+}$ and $\phi_{-}$ be the majorant and minorant provided by (2). Then
$$
I\left(\phi_{+}\right)<I\left(\phi_{-}\right)+\varepsilon \leqslant \sup _{\phi_{-}} I\left(\phi_{-}\right)+\varepsilon.
$$
So, taking the infimum over all majorants, we deduce that
$$
\inf _{\phi_{+}} I\left(\phi_{+}\right)<\sup _{\phi_{-}} I\left(\phi_{-}\right)+\varepsilon.
$$
Therefore, $\inf _{\phi_{+}} I\left(\phi_{+}\right)$ is squeezed between $\sup _{\phi_{-}} I\left(\phi_{-}\right)$ and $\sup _{\phi_{-}} I\left(\phi_{-}\right)+\varepsilon$. Since
$\varepsilon>0$ was arbitrary, we deduce that the inf and sup must be equal. In other words, $f$ is [[integrable]].

>Once we know that $f$ is [[integrable]], then any majorant $\phi_{+}$ and minorant $\phi_{-}$ as in (ii) gives an **approximation** to the integral, by (1.3). This is because $\int_{a}^{b} f$ lies between $I\left(\phi_{-}\right)$ and $I\left(\phi_{+}\right)$ which differ by less than $\varepsilon$.

#### Example 1.9
>The function $f(x)=x$ is [[integrable]] on $[0,1]$, and $\int_{0}^{1} f(x) d x=\frac{1}{2}$.

##### Proof
We define explicit minorants and majorants. Let $n$ be an integer to be specified later.
Set $\phi_{-}(x)=\frac{i}{n}$ for $\frac{i}{n} \leqslant x<\frac{i+1}{n}, i=0,1, \ldots, n-1 .$ 
Set $\phi_{+}(x)=\frac{j}{n}$ for $\frac{j-1}{n} \leqslant x<\frac{j}{n}, j=1, \ldots, n .$
Then $\phi_{-} \leqslant f \leqslant \phi_{+}$ pointwise, so $\phi_{-}, \phi_{+}$ (being step functions) are minorant/majorant for $f$. We have
$$
I\left(\phi_{-}\right)=\sum_{i=0}^{n-1} \frac{i}{n} \cdot \frac{1}{n}=\frac{1}{2}\left(1-\frac{1}{n}\right)
$$
and
$$
I\left(\phi_{+}\right)=\sum_{j=1}^{n} \frac{j}{n} \cdot \frac{1}{n}=\frac{1}{2}\left(1+\frac{1}{n}\right) .
$$
So, by [[#Lemma 1.8]], $f$ is [[integrable]]. Moreover, the integral of $f$ must lie between $\frac{1}{2}\left(1-\frac{1}{n}\right)$ and $\frac{1}{2}\left(1+\frac{1}{n}\right) .$ Since $n$ was arbitrary, the integral must be $\frac{1}{2}$.

### Proposition 1.10
>Suppose that $\phi$ is a [[step function]] on $[a, b] .$ Then $\phi$ is [[integrable]], and $\int_{a}^{b} \phi=I(\phi)$.

**Proof**. Take $\phi_{-}=\phi_{+}=\phi$, and the result is immediate from [[#Lemma 1.8]] and [(1.3)](#^6b1e95).

### Corollary 1.11
>There is a non-negative integrable function $f$ on $[a, b]$ which is not identically zero, but for which $\int_{a}^{b} f=0 .$

**Proof**. Simply take $f$ to be the zero function, modified at one point.

#### Example 1.12
>There is a **bounded** function $f:[0,1] \rightarrow \mathbb{R}$ which is not [[Integrable|Riemann Integrable]].

**Proof**. Consider the function $f$ such that $f(x)=1$ if $x \in \mathbb{Q}$ and 0 if $x \notin \mathbb{Q}$.

Since any open interval contains both rational points and points which are not rational, any step function majorising $f$ must satisfy $\phi_{+}(x) \geqslant 1$ except possibly at the finitely many endpoints $x_{i}$, and hence $I\left(\phi_{+}\right) \geqslant 1$. Similarly any minorant $\phi_{-}$ satisfies $\phi_{-}(x) \leqslant 0$ except at finitely many points, and so $I\left(\phi_{-}\right) \leqslant 0 .$ This function $f$ cannot possibly be integrable.

> This function is indeed [Lebesgue integrable](Lebesgue%20Integration) (and equals 0).

---
`Basic Theorems about the Integral`
### Proposition 1.13
- We may split up an integral into two parts.

>Suppose that $f$ is [[integrable]] on $[a, b] .$ Then, for any $c$ with $a<c<b, f$ is *Riemann integrable* on $[a, c]$ and on $[c, b] .$ Moreover $\int_{a}^{b} f=\int_{a}^{c} f+$ $\int_{c}^{b} f$.

#### Proof
Let $M$ be a bound for $f$, thus $|f(x)| \leqslant M$ everywhere. In this proof it is convenient to assume that 
1) all partitions of $[a, b]$ include the point $c$ and that 
2) all minorants take the value $-M$ at $c$, and all majorants the value $M$.

By refining partitions if necessary, this makes no difference to any computations involving $I\left(\phi_{-}\right), I\left(\phi_{+}\right)$.
Now observe that a minorant $\phi_{-}$ of $f$ on $[a, b]$ is precisely the same thing as a minorant $\phi_{-}^{(1)}$ of $f$ on $[a, c]$ *juxtaposed* with a minorant $\phi_{-}^{(2)}$ of $f$ on $[c, b]$, and that $$I\left(\phi_{-}\right)=I\left(\phi_{-}^{(1)}\right)+I\left(\phi_{-}^{(2)}\right) .$$ A similar comment applies to majorants. Thus, since $f$ is integrable,
$$
\begin{aligned}
\sup _{\phi_{-}} I\left(\phi_{-}\right)
&=\sup _{\phi_{-}^{(1)}} I\left(\phi_{-}^{(1)}\right)+\sup _{\phi_{-}^{(2)}} I\left(\phi_{-}^{(2)}\right) \\
&=\inf _{\phi_{+}^{(1)}} I\left(\phi_{+}^{(1)}\right)+\inf _{\phi_{+}^{(2)}} I\left(\phi_{+}^{(2)}\right)\\
&=\inf _{\phi_{+}} I\left(\phi_{+}\right).
\end{aligned}
$$
Since $\sup _{\phi_{-}^{(i)}} I\left(\phi_{-}^{(i)}\right) \leqslant \inf _{\phi_{+}^{(i)}} I\left(\phi_{+}^{(i)}\right)$ for $i=1,2$, we are forced to conclude that equality holds: $\sup _{\phi_{-}^{(i)}} I\left(\phi_{-}^{(i)}\right)=\inf _{\phi_{+}^{(i)}} I\left(\phi_{+}^{(i)}\right)$ for $i=1,2 .$ 
- Here, we used the fact that if $x \leqslant x^{\prime}, y \leqslant y^{\prime}$ and $x+y=x^{\prime}+y^{\prime}$ then $x=x^{\prime}$ and $y=y^{\prime}$ .

Thus $f$ is indeed [[integrable]] on $[a, c]$ and on $[c, b]$, and it follows that $$\int_{a}^{b} f=\int_{a}^{c} f+\int_{c}^{b} f.$$

#### Corollary 1.14
Suppose that $f:[a, b] \rightarrow \mathbb{R}$ is [[integrable]], and that $[c, d] \subseteq [a, b]$. Then $f$ is [[integrable]] on $[c, d]$.

### Proposition 1.15
- Integral is linear.

>If $f, g$ are [[integrable]] on $[a, b]$ then so is $\lambda f+\mu g$ for any $\lambda, \mu \in \mathbb{R} .$ Moreover $\int_{a}^{b}(\lambda f+\mu g)=\lambda \int_{a}^{b} f+\mu \int_{a}^{b} g .$ That is, the integrable functions on $[a, b]$ form a vector space and the integral is a linear functional (linear map to $\mathbb{R}$) on it.

#### Proof
Suppose that $\lambda>0$. If $\phi_{-} \leqslant f \leqslant \phi_{+}$ are minorant/majorant for $f$,
then $\lambda \phi_{-} \leqslant \lambda f \leqslant \lambda \phi_{+}$ are minorant and majorant for $\lambda f .$ Moreover $$I\left(\lambda \phi_{+}\right)-I\left(\lambda \phi_{-}\right)=\lambda\left(I\left(\phi_{+}\right)-I\left(\phi_{-}\right)\right)$$ can be made arbitrarily small. Thus $\lambda f$ is integrable. Moreover  $$\inf_{\phi_{+}} I\left(\lambda \phi_{+}\right)=\lambda \inf _{\phi_{+}} I\left(\phi_{+}\right),\quad \sup _{\phi_{-}} I\left(\lambda \phi_{-}\right)=\lambda \sup _{\phi_{-}} I\left(\phi_{-}\right)$$, and so $\int_{a}^{b}(\lambda f)=\lambda \int_{a}^{b} f$. If $\lambda<0$ then we can proceed in a very similar manner. We leave this to the reader. If $\lambda=0$, then $\lambda f$ is identically zero and hence is integrable by [[#Proposition 1.10]].

Now suppose that $\phi_{-} \leqslant f \leqslant \phi_{+}$ and $\psi_{-} \leqslant g \leqslant \psi_{+}$ are minorant/majorants for $f$, $g$. Then $\phi_{-}+\psi_{-} \leqslant f+g \leqslant \phi_{+}+\psi_{+}$ are minorant/majorant for $f+g$ (note these are step functions) and by [[Step Function#Lemma 1.6: Linearity of Step Function]]
$$
\inf _{\phi_{+}, \psi_{+}} I\left(\phi_{+}+\psi_{+}\right)=\inf _{\phi_{+}} I\left(\phi_{+}\right)+\inf _{\psi_{+}} I\left(\psi_{+}\right)=\int_{a}^{b} f+\int_{a}^{b} g
$$
whilst
$$
\sup _{\phi_{-}, \psi_{-}} I\left(\phi_{-}+\psi_{-}\right)=\sup _{\phi_{-}} I\left(\phi_{-}\right)+\sup _{\psi_{-}} I\left(\psi_{-}\right)=\int_{a}^{b} f+\int_{a}^{b} g.
$$
It follows that indeed $f+g$ is [[integrable]] and $\int_{a}^{b}(f+g)=\int_{a}^{b} f+\int_{a}^{b} g$. That $\int_{a}^{b}(\lambda f+\mu g)=\lambda \int_{a}^{b} f+\mu \int_{a}^{b} g$ follows immediately by combining these two facts.

#### Corollary 1.16
- We may change an integrable function in finitely many points.

>If $f$ is [[integrable]] on $[a, b]$, and if $\tilde{f}$ differs from $f$ in **finitely** many points, then $\tilde{f}$ is also [[integrable]].

**Proof**. The function $\tilde{f}-f$ is zero except at finitely many points. Suppose that these points are $x_{1}, \ldots, x_{n-1} .$ Then $\tilde{f}-f$ is a step function adapted to the partition $a=x_{0} \leqslant x_{1} \leqslant \ldots \leqslant x_{n-1} \leqslant x_{n}=b .$
By [[#Proposition 1.10]], $\tilde{f}-f$ is integrable, and hence so is $\tilde{f}=(\tilde{f}-f)+f$, by [[#Proposition 1.15]].

### Proposition 1.17
>Suppose that $f$ and $g$ are [[integrable]] on $[a, b] .$ Then $\max (f, g)$ and $\min (f, g)$ are both ***Riemann integrable***, as is $|f|$.

#### Proof
We have $\max (f, g)=g+\max (f-g, 0)$, $\min (h, 0)=-\max (-h, 0)$ and $|h|=\max (h, 0)-\min (h, 0)$. Using these relations and [[#Proposition 1.15]], it is enough to prove that if $f$ is [[integrable]] on $[a, b]$, then so is $\max (f, 0)$.

Now the function $x \mapsto \max (x, 0)$ is 
- **order-preserving** (if $x \leqslant y$ then $\max (x, 0) \leqslant$ $\max (y, 0))$ 
- **non-expanding** (we have $|\max (x, 0)-\max (y, 0)| \leqslant|x-y|$, as can be established by an easy case-check, according to the signs of $x, y) .$ 

It follows that if $\phi_{-} \leqslant f \leqslant \phi_{+}$ are minorant and majorant for $f$ then $\max \left(\phi_{-}, 0\right) \leqslant \max (f, 0) \leqslant\max \left(\phi_{+}, 0\right)$ are minorant and majorant for $\max (f, 0)$ (obviously they are both step functions). Moreover,
$$
I\left(\max \left(\phi_{+}, 0\right)\right)-I\left(\max \left(\phi_{-}, 0\right)\right) \leqslant I\left(\phi_{+}\right)-I\left(\phi_{-}\right)
$$
Since $f$ is [[integrable]], this can be made arbitrarily small.

### Proposition 1.18
Suppose that $f$ is [[integrable]] on $[a, b]$, then
1) We have $(b-a) \inf _{x \in[a, b]} f(x) \leqslant \int_{a}^{b} f \leqslant(b-a) \sup _{x \in[a, b]} f(x)$.
2) If $g$ is another [[integrable]] function on $[a, b]$, and if $f \leqslant g$ pointwise, then $\int_{a}^{b} f \leqslant \int_{a}^{b} g$.
3) $\left|\int_{a}^{b} f\right| \leqslant \int_{a}^{b}|f|$.

#### Proof
1) is an immediate consequence of the fact that the constant function $\phi_{-}(x)=\inf _{x \in[a, b]} f(x)$ is a minorant for $f$ on $[a, b]$, whilst $\phi_{+}(x)=\sup _{x \in[a, b]} f(x)$ is a majorant. Thus $$(b-a) \inf _{x \in[a, b]} f(x)=I\left(\phi_{-}\right) \leqslant \sup _{\phi_{-}} I\left(\phi_{-}\right)=\int_{a}^{b} f$$ and similarly for the upper bound.
2) Applying (1) to $g-f$ gives $\int_{a}^{b}(g-f) \geqslant 0$, from which the result is immediate from linearity of the integral.
3) Apply (2) to $f$ and $|f|$, and also to $-f$ and $|f|$, obtaining $\pm \int_{a}^{b} f \leqslant \int_{a}^{b}|f|$.

### Proposition 1.19
>Suppose that $f, g:[a, b] \rightarrow \mathbb{R}$ are two [[integrable]] functions. Then their **product** $f g$ is [[integrable]].

#### Proof
Write $f=f_{+}-f_{-}$, where $f_{+}=\max (f, 0)$ and $f_{-}=-\min (f, 0)$, and similarly for $g .$ Then $f g=f_{+} g_{+}-f_{-} g_{+}-f_{+} g_{-}+f_{-} g_{-}$, and so *it suffices to prove the statement for non-negative functions such as $f_{\pm}, g_{\pm}$.*

Suppose, then, that $f, g \geqslant 0 .$ Let $\varepsilon>0$, and let $\phi_{-} \leqslant f \leqslant \phi_{+}, \psi_{-} \leqslant g \leqslant \psi_{+}$ be minorants and majorants for $f, g$ with $I\left(\phi_{+}\right)-I\left(\phi_{-}\right), I\left(\psi_{+}\right)-I\left(\psi_{-}\right) \leqslant \varepsilon .$ Replacing $\phi_{-}$ with $\max \left(\phi_{-}, 0\right)$ if necessary (and similarly for $\left.\psi_{-}\right)$, we may assume that $\phi_{-}, \psi_{-} \geqslant 0$ pointwise. Replacing $\phi_{+}$ with $\min \left(\phi_{+}, M\right)$, where $M=\max \left\{\sup _{[a, b]} f, \sup _{[a, b]} g\right\}$ (and similarly for $\left.\psi_{+}\right)$ we may assume that $\phi_{+}, \psi_{+} \leqslant M$ pointwise.

By refining partitions if necessary, we may assume that all of these step functions are adapted to the **same** partition $\mathcal{P}$. Now observe that $\phi_{-} \psi_{-}, \phi_{+} \psi_{+}$ are both step functions and that $\phi_{-} \psi_{-} \leqslant f g \leqslant \phi_{+} \psi_{+}$ pointwise. 

Moreover, if $0 \leqslant u, v, u^{\prime}, v^{\prime} \leqslant M$ and $u \leqslant u^{\prime}, v \leqslant v^{\prime}$ then we have
$$
u^{\prime} v^{\prime}-u v=\left(u^{\prime}-u\right) v^{\prime}+\left(v^{\prime}-v\right) u \leqslant M\left(u^{\prime}-u+v^{\prime}-v\right)
\quad\color{yellow}\text{(1.5)}
$$
Applying this on each interval of the partition $\mathcal{P}$, with $u=\phi_{-}, u^{\prime}=\phi_{+}, v=\psi_{-}$
$v^{\prime}=\psi_{+}$, we have
$$
I\left(\phi_{+} \psi_{+}\right)-I\left(\phi_{-} \psi_{-}\right) \leqslant M\left(I\left(\phi_{+}\right)-I\left(\phi_{-}\right)+I\left(\psi_{+}\right)-I\left(\psi_{-}\right)\right) \leqslant 2 \varepsilon M
$$
Since $\varepsilon>0$ was arbitrary, the result follows.

>**Alternative** which is arguably a little slicker, or at least easier notationally. 
>
Note the identity $f g=\frac{1}{4}(f+g)^{2}-\frac{1}{4}(f-g)^{2}$. Thus it suffices to show that if $f$ is integrable then so is $f^{2}$.
>
Replacing $f$ by $|f|$, we may assume that $f \geqslant 0$ pointwise. Then proceed as above but with $f=g$, $\phi_{-}=\psi_{-}, \phi_{+}=\psi_{+} .$ In place of $(1.5)$ one may instead use $\left(u^{\prime}\right)^{2}-u^{2} \leqslant 2 M\left(u^{\prime}-u\right)$. 

--- 
### Theorem 2.1
>Continuous functions $f:[a, b] \rightarrow \mathbb{R}$ are [[integrable]].

#### Proof
Since $f$ is continuous on a closed and bounded interval, $f$ is also bounded.
We will also use the fact that a continuous function $f$ is **uniformly** continuous. Let $\varepsilon>0$, and let $\delta$ be so small that $|f(x)-f(y)| \leqslant \varepsilon$ whenever $|x-y| \leqslant \delta .$ 

Let $\mathcal{P}$ be a partition with $\text{mesh}<\delta$. 

Let $\phi_{+}$ be the [[step function]] whose value on $\left(x_{i-1}, x_{i}\right)$ is $\sup _{x \in\left[x_{i-1}, x_{i}\right]} f(x)$ and which takes the value $f\left(x_{i}\right)$ at the points $x_{i}$, and let $\phi_{-}$ be the step function whose value on $\left(x_{i-1}, x_{i}\right)$ is inf $_{x \in\left[x_{i-1}, x_{i}\right]} f(x)$ and which takes the value $f\left(x_{i}\right)$ at the points $x_{i}$.

By construction, $\phi_{+}$ is a majorant for $f$ and $\phi_{-}$ is a minorant. Since a continuous function on a closed bounded interval attains its bounds, there are $\xi_{-}, \xi_{+} \in\left[x_{i-1}, x_{i}\right]$ such that $\sup _{x \in\left[x_{i-1}, x_{i}\right]} f(x)=f\left(\xi_{+}\right)$ and inf $_{x \in\left[x_{i-1}, x_{i}\right]} f(x)=f\left(\xi_{-}\right)$.

For $x \in\left(x_{i-1}, x_{i}\right)$ we have $\phi_{+}(x)-\phi_{-}(x) \leqslant f\left(\xi_{+}\right)-f\left(\xi_{-}\right) \leqslant \varepsilon .$ Therefore
$\phi_{+}(x)-\phi_{-}(x) \leqslant \varepsilon$ for all $x \in[a, b]$.

It follows that $I\left(\phi_{+}\right)-I\left(\phi_{-}\right) \leqslant \varepsilon(b-a) .$ Since $\varepsilon$ was arbitrary, this concludes the proof.

### Theorem 2.2: Continuous Functions are Integrable
>Bounded continuous functions $f:(a, b) \rightarrow \mathbb{R}$ are [[integrable]].
#### Proof
Suppose that $|f| \leqslant M .$ Let $\varepsilon>0 .$ Then $f$ is continuous, and hence uniformly continuous, on $[a+\varepsilon, b-\varepsilon] .$ Let $\delta$ be such that if $x, y \in[a+\varepsilon, b-\varepsilon]$ and $|x-y| \leqslant \delta$ then $|f(x)-f(y)| \leqslant \varepsilon$, and consider a partition $\mathcal{P}$ with $a=x_{0}$, $a+\varepsilon=x_{1}$, $b-\varepsilon=x_{n-1}$, $b=x_{n}$ and mesh $\leqslant \delta$.

Let $\phi_{+}$ be the step function whose value on $\left(x_{i-1}, x_{i}\right)$ is $\sup _{x \in\left[x_{i-1}, x_{i}\right]} f(x)$ when $i=2, \ldots, n-1$, and whose value on $\left(x_{0}, x_{1}\right)$ and $\left(x_{n-1}, x_{n}\right)$ is $M$.

Let $\phi_{-}$ be the step function whose value on $\left(x_{i-1}, x_{i}\right)$ is inf $_{x \in\left[x_{i-1}, x_{i}\right]} f(x)$ when $i=2, \ldots, n-1$, and whose value on $\left(x_{0}, x_{1}\right)$ and $\left(x_{n-1}, x_{n}\right)$ is $-M$.

Then $\phi_{-} \leqslant f \leqslant \phi_{+}$ pointwise. As in the proof of the previous theorem, we have $\left|\phi_{+}(x)-\phi_{-}(x)\right| \leqslant \varepsilon$ when $x \in\left(x_{i-1}, x_{i}\right), i=2, \ldots, n-1 .$ On $\left(x_{0}, x_{1}\right)$ and $\left(x_{n-1}, x_{n}\right)$ we have the trivial bound $\left|\phi_{+}(x)-\phi_{-}(x)\right| \leqslant 2 M$. Thus
$$
I\left(\phi_{+}\right)-I(\phi-) \leqslant(b-a) \varepsilon+2 M \cdot 2 \varepsilon
$$
which can be made arbitrarily small by taking $\varepsilon$ arbitrarily small.

### Lemma 2.3
>Suppose that $f:[a, b] \rightarrow \mathbb{R}$ is a continuous function with $f \geqslant 0$ pointwise and $\int_{a}^{b} f=0 .$ Then $f(x)=0$ for $x \in[a, b]$.

> Similar sheet question: [[Ana3-1#^e3626b]].


#### Proof
Suppose not. Then there is some point $x \in[a, b]$ with $f(x)>0$, let us say $f(x)=\varepsilon$. 

Since $f$ is continuous, there is some $\delta>0$ such that if $|x-y| \leqslant \delta$ then $|f(x)-f(y)| \leqslant \varepsilon / 2$, and hence $|f(x)| \geqslant \varepsilon / 2 .$ 

The set of all $y \in[a, b]$ with $|x-y| \leqslant \delta$ is a subinterval $I \subset[a, b]$ with length $\ell$ at least $\min (b-a, \delta)$, and so
$$
\int f \geqslant \int_{I} f \geqslant \frac{\varepsilon}{2} \min (b-a, \delta)>0.
$$

`Mean Value Theorems Related Integrability`
### Proposition 2.4: Mean-Value Theorem for Integrals
>Suppose that $f:[a, b] \rightarrow \mathbb{R}$ is continuous. Then there is some $c \in[a, b]$ such that
>$$
\int_{a}^{b} f=(b-a) f(c).
>$$

#### Proof
Since $f$ is continuous, it attains its maximum $M$ and its minimum $m$. By [[#Proposition 1.18]](i),
$$
m(b-a) \leqslant \int_{a}^{b} f \leqslant M(b-a)
$$
which implies that
$$
m \leqslant \frac{1}{b-a} \int_{a}^{b} f \leqslant M.
$$
By the [[intermediate value theorem]], $f$ attains every value in $[m, M]$, and in particular there is some $c$ such that
$$
f(c)=\frac{1}{b-a} \int_{a}^{b} f.
$$

### Proposition 2.5
>Suppose that $f:[a, b] \rightarrow \mathbb{R}$ is continuous, and that $w:[a, b] \rightarrow \mathbb{R}$ is a nonnegative [[integrable]] function. Then there is some $c \in[a, b]$ such that
>$$
\int_{a}^{b} f w=f(c) \int_{a}^{b} w.
>$$

#### Proof
First one should remark that $f w$ is indeed integrable, this being a consequence of [[#Proposition 1.19]]. As in the proof of [[#Proposition 2 4 Mean-Value Theorem for Integrals]], write $M, m$ for the maximum and minimum of $f$ respectively. Then $m w \leqslant f w \leqslant M w$ pointwise, and so
$$
m \int_{a}^{b} w \leqslant \int_{a}^{b} f w \leqslant M \int_{a}^{b} w.
$$
If $\int_{a}^{b} w=0$ then the result follows immediately; otherwise, we may divide through to get
$$
m \leqslant \frac{\int_{a}^{b} f w}{\int_{a}^{b} w} \leqslant M.
$$
Since both $m$ and $M$ are values attained by $f$, the result now follows from the [[intermediate value theorem]].

### Theorem 2.6
>**Monotone** functions $f:[a, b] \rightarrow \mathbb{R}$ are [[integrable]].

Proof. By replacing $f$ with $-f$ if necessary we may suppose that $f$ is monotonically increasing, i.e. $f(x) \leqslant f(y)$ whenever $x \leqslant y .$ Since $f(a) \leqslant f(x) \leqslant f(b), f$ is automatically bounded.

Let $n$ be a positive integer, and consider the partition of $[a, b]$ into $n$ equal parts. 

Thus $\mathcal{P}$ is $a=x_{0} \leqslant x_{1} \leqslant \ldots \leqslant x_{n}=b$, with $x_{i}=a+\frac{i}{n}(b-a) .$ On $\left(x_{i-1}, x_{i}\right)$, define
$\phi_{+}(x)=f\left(x_{i}\right)$ and $\phi_{-}(x)=f\left(x_{i-1}\right)$. 

Define $\phi_{-}\left(x_{i}\right)=f\left(x_{i}\right)$ and $\phi_{+}\left(x_{i}\right)=f\left(x_{i}\right) .$ Then $\phi_{+}$ is a majorant for $f$ and $\phi_{-}$ is a minorant. We have
$$
\begin{aligned}
I\left(\phi_{+}\right)-I\left(\phi_{-}\right) &=\sum_{i=1}^{n}\left(f\left(x_{i}\right)-f\left(x_{i-1}\right)\right)\left(x_{i}-x_{i-1}\right) \\
&=\frac{b-a}{n} \sum_{i=1}^{n}\left(f\left(x_{i}\right)-f\left(x_{i-1}\right)\right) \\
&=\frac{1}{n}(b-a)(f(b)-f(a))
\end{aligned}
$$
Taking $n$ large, this can be made as small as desired.