---
aliases: [pushforward measure]
tag: [PMM]
---
## Definition
Let $(\Omega, \mathscr{F}, \mathbb{P})$ be a probability space and let $X$ be a [[Measurable Function|random variable]] from $(\Omega, \mathscr{F})$ to $(E, \mathscr{E})$ Then
$$
\mathbb{Q}(A)=\mathbb{P}\left(X^{-1}(A)\right), \quad A \in \mathscr{E},
$$
defines a [[Measure]] on $(E, \mathscr{E})$, the [[Image Measure]] of $\mu$ via $X$, or the *pushforward measure*. We write $\mathbb{Q}=\mathbb{P} \circ X^{-1}$ and also call it the law or the distribution of $X$.

## Lemma 2.23
Let $(\Omega, \mathscr{F}, \mathbb{P})$ be a probability space, $(E, \mathscr{E})$ and $(G, \mathscr{G})$ two measurable spaces and $X: \Omega \rightarrow E$, $Y: E \rightarrow G$ random variables. Then the image measure of $\mu_X$ via $Y$ is the image measure of $\mu$ via $Y \circ X$.
#### Proof
This is instantly seen with a simple drawing. More formally, we have
$$
\begin{aligned}
\mu_X \circ Y^{-1}(A) &=\mu_X\left(Y^{-1}(A)\right)=\mu_X(\{e \in E: Y(e) \in A\})=\mu\left(X^{-1}(\{e \in E: Y(e) \in A\})\right) \\
&=\mu(\{\omega \in \Omega: X(\omega) \in E \text { such that } Y(X(\omega)) \in A\})=\mu\left((Y \circ X)^{-1}(A)\right)=\mu_{Y \circ X}(A)
\end{aligned}
$$
as required.