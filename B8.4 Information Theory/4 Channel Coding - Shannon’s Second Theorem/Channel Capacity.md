---
aliases: [capacity]
tag: [InfoTheory]
---

## Definition
Let $(\mathcal{X}, M, \mathcal{Y})$ be a [[Discrete Memoryless Channel|DMC]]. We call $C:=\sup I(X ; Y)$ the channel capacity of [[Discrete Memoryless Channel|DMC]] $(\mathcal{X}, M, \mathcal{Y})$, where the supremum is taken over all pairs of random variables $X, Y$ that realise the [[Discrete Memoryless Channel|DMC]] $(\mathcal{X}, M, \mathcal{Y})$
From $I(X ; Y)=H(X)-H(X \mid Y)=H(Y)-H(Y \mid X)$, it follows that
$$0 \leq C \leq \min \{\log (|\mathcal{X}|), \log (|\mathcal{Y}|)\}$$
### Proposition 4.5
Fix $p_{Y \mid X}, I(X ; Y)$ is concave in $p_X ;$ Fix $p_X, I(X ; Y)$ is convex in $p_{Y \mid X}$.

#### Proof
For the first statement, recall $I(X ; Y)=H(Y)-H(Y \mid X)$. Given $p_{Y \mid X}, p_Y$ is linear in $p_X$, and $H(Y)$ is concave in $p_Y$, so $H(Y)$ is concave in $p_X$.

For the second statement, recall $I(X ; Y)=D\left(p_{X, Y} \| p_X * p_Y\right)$. Given $p_X, p_{X, Y}$ is linear in $p_{Y \mid X}$, so is $p_X * p_Y$. By Point (4) in Theorem 1.12, we know $D\left(p \| q\right.$ is convex in $(p, q)$. So $I(X ; Y)$ is convex in $p_{Y \mid X}$ for any fixed $p_X$.

## Definition
Fix $m, n \geq 1$. A $(m, n)$-channel code for a $D M C(\mathcal{X}, M, \mathcal{Y})$ is a tuple $(c, d)$ consisting of
- a map $c:\{1, \cdots, m\} \longrightarrow \mathcal{X}^n$, called the encoder,
- a map $d: \mathcal{Y}^n \longrightarrow\{1, \cdots, m\}$, called the decoder.
We call $\{1, \cdots, m\}$ the message set, $c(i)$ the codeword for message $i \in\{1, \cdots, m\}$ and the collection $\{c(i): i=1, \cdots, m\}$ the codebook.
That is to say, a $(m, n)$ channel transmits one out of $m$ messages by using the channel $n$ times.