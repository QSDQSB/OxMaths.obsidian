---
aliases: [Estimation Theorem]
---
#ComplexAnalysis 

```ad-theorem
title: Estimation Lemma
We have
$$\left|\int_{\gamma} f(z) d z\right| \leq \sup _{z \in \gamma^{*}}|f(z)| \cdot \ell(\gamma)$$
```
^lemma

## Proof
First note that [$\gamma([a, b])$](Path.md) is [[Sequential Compactness|compact]] in $\mathbb{C}$ since it is the image of the compact set $[a, b]$ under a [[Continuous]] map. It follows that the function $|f|$ is bounded on this set so that $\sup _{z \in \gamma([a, b])}|f(z)|$ exists. Thus we have
$$
\begin{aligned}
\left|\int_{\gamma} f(z) d z\right| &=\left|\int_{a}^{b} f(\gamma(t)) \gamma^{\prime}(t) d t\right| \\
& \leq \int_{a}^{b}|f(\gamma(t))|\left|\gamma^{\prime}(t)\right| d t \\
& \leq \sup _{z \in \gamma^{*}}|f(z)| \int_{a}^{b}\left|\gamma^{\prime}(t)\right| d t \\
&=\sup _{z \in \gamma^{*}}|f(z)| \cdot \ell(\gamma)
\end{aligned}
$$
where for the first inequality we use [[Complex Riemann Integrable#Lemma 5.10: Triangle Inequality for Complex-Valued Functions]] and the positivity of the Riemann integral for the second inequality.

## Proposition 5.16
Let $f_{n}: U \rightarrow \mathbb{C}$ be a sequence of [[Continuous]] functions on an open subset $U$ of the complex plane. Suppose that $\gamma:[a, b] \rightarrow \mathbb{C}$ is a [[Path]] whose image is contained in $U .$ If $\left(f_{n}\right)$ converges **uniformly** to a function $f$ on the image of $\gamma$ then
$$
\int_{\gamma} f_{n}(z) d z \rightarrow \int_{\gamma} f(z) d z
$$
### Proof
We have
$$
\begin{aligned}
\left|\int_{\gamma} f(z) d z-\int_{\gamma} f_{n}(z) d z\right| &=\left|\int_{\gamma}\left(f(z)-f_{n}(z)\right) d z\right| \\
& \leq \sup _{z \in \gamma^{*}}\left\{\left|f(z)-f_{n}(z)\right|\right\} \cdot \ell(\gamma)
\end{aligned}
$$
by the [[Estimation Lemma]]. Since we are assuming that $f_{n}$ tends to $f$ uniformly on $\gamma^{*}$ we have $\sup \left\{\left|f(z)-f_{n}(z)\right|: z \in \gamma^{*}\right\} \rightarrow 0$ as $n \rightarrow \infty$ which implies the result.