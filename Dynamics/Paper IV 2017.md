### Q4
a) We have two forces in the system the spring $-k(x-l)$ and the Coulomb $-q^{2}\left(4 \pi \epsilon_{0} x^{2}\right)^{-1}$
Newton's 2nd law
$$
x^{\prime \prime}=-k(x-l)-\frac{q^{2}}{4 \pi \epsilon_{0} x^{2}}=f(x) .
$$
How does $f(x)$ look?
$$
\lim _{x \rightarrow \infty} f(x)=-\infty \quad \text { and } \quad \lim _{x \rightarrow 0} f(x)=-\infty
$$
Moreover, $f$ is concave $f^{\prime \prime}<0$. Therefore, $f$ admits a unique maxi$\operatorname{mum} x_{0}$. If $f\left(x_{0}\right)>0$, then $x$ has two steady states, the left with positive derivative and the right with negative derivative.
$$
\mathbf{f}^{\prime}\left(x_{0}\right)=0=-k-\frac{q^{2}}{4 \pi \epsilon_{0} x_{0}^{3}}
$$
Then
$$
x_{0}=\left(\frac{q^{2}}{2 \pi \epsilon_{0} k}\right)^{1 / 3}
$$
Then
$$
0 \leq \operatorname{maxf}=l k+\left(\frac{q^{2}}{2 \pi \epsilon_{0}}\right)^{1 / 3} \frac{3}{2} k \text { . }
$$
Then
$$
l_{1}=\left(\frac{q^{2}}{2 \pi \epsilon_{0}}\right)^{1 / 3} .
$$
4.b) Energy conservation. Either clearly state that the forces involved are conservative or derive it. Multiply the equation, by $x^{\prime}$ and integrate
$$
\int_{0}^{t} x^{\prime} x^{\prime \prime} m=m\left|x^{\prime}(t)\right|^{2}-m\left|x^{\prime}(0)\right|^{2}=m\left|x^{\prime}(t)\right|^{2}
$$
$$\int_{0}^{t} x^{\prime}\left(-k(x-l)-\frac{q^{2}}{4 \pi \epsilon_{0} x^{2}}\right)=-\frac{k}{2}(x(t)-l)^{2}+\frac{k}{2}(x(0)-l)^{2}+\frac{q^{2}}{4 \pi \epsilon_{0} x(t)}-\frac{q^{2}}{4 \pi \epsilon_{0} x(0)}$$
Then
$$
m\left|x^{\prime}(t)\right|^{2}=-\frac{k}{2}(x(t)-l)^{2}+\frac{q^{2}}{4 \pi \epsilon_{0} x(t)}-\frac{q^{2}}{4 \pi \epsilon_{0} l}
$$
The regions the particle will visit need to have $\left|x^{\prime}(t)\right|>0$, which implies
$$
g(x)=-\frac{k}{2}(x-l)^{2}+\frac{q^{2}}{4 \pi \epsilon_{0} x}-\frac{q^{2}}{4 \pi \epsilon_{0} l} \geq 0
$$
Again as $x \rightarrow 0, g(x) \rightarrow \infty$, but now as $x \rightarrow \infty,\, g(x) \rightarrow-\infty$. Moreover,
$g(l)=0 .$ We need to find the condition for $g(x)>0$ for all $x \in(0, l)$.

### 5
5b) First step is to calculate angular momentum of the particle. Draw a picture.
$$
r^{2} \dot{\theta}=v d
$$
where $d$ is the distance of the line to the origin. Depends where you set the line to see what is the initial condition of the equation. $\theta=0$ or $\theta=\theta_{*}$
$$
\lim _{\theta \rightarrow \theta_{*}} u(\theta)=0 .
$$
Also at $\theta=\theta_{*}$ we have
$$
\frac{d u}{d \theta}=-\frac{\dot{r}}{d v}=-\frac{1}{d}
$$
With this conditions solve equation for $u$ to find
$$
\begin{aligned}
u &=\frac{G M}{h^{2}}+A \cos (\theta)+B \sin (\theta) \\
&=\frac{G M}{d^{2} v^{2}}(1-\cos \theta)+\frac{1}{d} \sin (\theta)
\end{aligned}
$$
We want the space ship to turn asymptotical $\pi / 2$, so we need $u \rightarrow 0$ as $\theta \rightarrow \frac{3 \pi}{2}$, replacing in the equation for $u$ we have
$$
0=\frac{G M}{d^{2} v^{2}}-\frac{1}{d}
$$