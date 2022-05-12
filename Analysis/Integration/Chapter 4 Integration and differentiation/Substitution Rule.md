## Substitution rule
#Analysis 

>Suppose that $f:[a, b] \rightarrow \mathbb{R}$ is continuous and that $\phi:[c, d] \rightarrow[a, b]$ is continuous on $[c, d]$, has $\phi(c)=a$ and $\phi(d)=b$, and maps $(c, d)$ to $(a, b) .$ Suppose moreover that $\phi$ is differentiable on $(c, d)$ and that its
derivative $\phi^{\prime}$ is [[integrable]] on this interval. Then
>$$
\int_{a}^{b} f=\int_{c}^{d}(f \circ \phi) \phi^{\prime} .
>$$
- It may help to see the statement written out in full: $\int_{a}^{b} f(x) d x=\int_{c}^{d} f(\phi(t)) \phi^{\prime}(t) d t$.


### Proof
Let us first remark that $f \circ \phi$ is continuous and hence integrable on $[c, d]$. It therefore follows from [[Integrable#Proposition 1 19]] that $(f \circ \phi) \phi^{\prime}$ is integrable on $[c, d]$, so the statement does at least make sense.

Since $f$ is continuous on $[a, b]$, it is integrable. The [[First Fundamental Theorem of Calculus]] implies that its anti-derivative
$$
F(x):=\int_{a}^{x} f
$$
is continuous on $[a, b]$, differentiable on $(a, b)$ and that $F^{\prime}=f$. By the chain rule and the fact that $\phi((c, d)) \subset(a, b), F \circ \phi$ is differentiable on $(c, d)$, and
$$
(F \circ \phi)^{\prime}=\left(F^{\prime} \circ \phi\right) \phi^{\prime}=(f \circ \phi) \phi^{\prime}
$$
By the remarks at the start of the proof, it follows that $(F \circ \phi)^{\prime}$ is an integrable function. By the [[Second Fundamental Theorem of Calculus]],
$$
\begin{aligned}
\int_{c}^{d}(f \circ \phi) \phi^{\prime} &=\int_{c}^{d}(F \circ \phi)^{\prime} \\
&=(F \circ \phi)(d)-(F \circ \phi)(c) \\
&=F(b)-F(a) \\
&=F(b) \\
&=\int_{a}^{b} f.
\end{aligned}
$$