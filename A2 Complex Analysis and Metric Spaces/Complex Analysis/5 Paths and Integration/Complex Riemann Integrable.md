---
aliases: [Riemann integrable]
---
#ComplexAnalysis 

## Definition
We may write $F(t)=G(t)+i H(t)$ where $G, H$ are functions on $[a, b]$ taking real values. Then we say that $F$ is [[Integrable|Riemann integrable]] if both $G$ and $H$ are, and we define:
$$
\int_{a}^{b} F(t) d t=\int_{a}^{b} G(t) d t+i \int_{a}^{b} H(t) d t
$$
It is easy to check that the integral is then ***complex linear***, that is, if $F_{1}, F_{2}$ are complex-valued Riemann integrable functions on $[a, b]$, and $\alpha, \beta \in \mathbb{C}$, then $\alpha F_{1}+\beta F_{2}$ is [[Integrable|Riemann integrable]] and
$$
\int_{a}^{b}\left(\alpha \cdot F_{1}+\beta \cdot F_{2}\right) d t=\alpha \cdot \int_{a}^{b} F_{1} d t+\beta \cdot \int_{a}^{b} F_{2} d t
$$

>Note that if F is **continuous**, then its real and imaginary parts are also continuous, and so in particular *Riemann integrable*.

## Lemma 5.8
Let $[a, b]$ be a closed interval and $S \subset[a, b]$ a finite set. If $f$ is a bounded continuous function (taking real or complex values) on $[a, b] \backslash S$ then it is [[Complex Riemann Integrable|Riemann integrable]] on $[a, b]$.

### Proof
The case of complex-valued functions follows from the real case by taking real and imaginary parts. For the case of a function $f:[a, b] \backslash S \rightarrow \mathbb{R}$.
Let $a=x_{0}<x_{1}<x_{2}<\ldots<x_{k}=b$ be any ***partition*** of $[a, b]$ which includes the elements of $S$. Then on each open interval $\left(x_{i}, x_{i+1}\right)$ the function $f$ is bounded and [[Continuous]], and hence integrable. We may therefore set
$$
\int_{a}^{b} f(t) d t=\int_{x_{0}}^{x_{1}} f(t) d t+\int_{x_{1}}^{x_{2}} f(t) d t+\ldots+\int_{x_{k-1}}^{x_{k}} f(t) d t
$$
The standard additivity properties of the integral then show that $\int_{a}^{b} f(t) d t$ is independent of any choices.

## Lemma 5.10: Triangle Inequality for Complex-Valued Functions
Suppose that $F:[a, b] \rightarrow \mathbb{C}$ is a complex-valued function. Then we have
$$
\left|\int_{a}^{b} F(t) d t\right| \leq \int_{a}^{b}|F(t)| d t
$$