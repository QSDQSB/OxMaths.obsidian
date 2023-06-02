---
aliases: [line integral, integral]
---
#ComplexAnalysis 

## Definition
If $\gamma:[a, b] \rightarrow \mathbb{C}$ is a [piecewise-$C^1$ path](Path%20Differentiable.md#Piecewise%20C1) and $f: \mathbb{C} \rightarrow \mathbb{C}$, then we define the [[Complex Path Integral|integral]] of $f$ along $\gamma$ to be
$$
\int_{\gamma} f(z) d z=\int_{a}^{b} f(\gamma(t)) \gamma^{\prime}(t) d t
$$

## Lemma 5.12
If $\gamma:[a, b] \rightarrow \mathbb{C}$ be a piecewise $C^{1}$ path and $\tilde{\gamma}:[c, d] \rightarrow \mathbb{C}$ is an [[Equivalent Path]], then for any continuous function $f: \mathbb{C} \rightarrow \mathbb{C}$ we have
$$
\int_{\gamma} f(z) d z=\int_{\tilde{\gamma}} f(z) d z
$$
In particular, the integral only depends on the *oriented* curve $[\gamma]$.

### Proof
Since $\tilde{\gamma}$ is [[Equivalent Path|equivalent]] to $\gamma$ there is a continuously differentiable function $s:[c, d] \rightarrow[a, b]$ with $s(c)=a, s(d)=b$ and $s^{\prime}(t)>0$ for all $t \in[c, d] .$ Suppose first that $\gamma$ is $C^{1}$. Then by the [[Path's Chain Rule|chain rule]] we have
$$
\begin{aligned}
\int_{\tilde{\gamma}} f(z) d z &=\int_{c}^{d} f(\gamma(s(t)))(\gamma \circ s)^{\prime}(t) d t \\
&=\int_{c}^{d} f\left(\gamma(s(t)) \gamma^{\prime}(s(t)) s^{\prime}(t) d t\right.\\
&=\int_{a}^{b} f(\gamma(s)) \gamma^{\prime}(s) d s \\
&=\int_{\gamma} f(z) d z
\end{aligned}
$$
where in the second last equality we used the change of variables formula.

---
> See [[Line Integral]]