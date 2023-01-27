---
aliases: [uniquely decodable, prefix code, unambiguous, prefix codes]
tags: [InfoTheory]
---
## Length of the Sequence
For a finite set $\mathcal{X}$, denote with $\mathcal{X}^*$ the set of finite sequences (also called strings) in $\mathcal{X}$. For $x=x_1 \cdots x_n \in \mathcal{X}^*$ with $x_i \in \mathcal{X}$ for all $i=1, \cdots, n$, we call $|x|=n$ the *length* of the sequence $x \in \mathcal{X}^*$ ([[Shannon's First Theorem#$A { bf color{yellow}*}$|definition of *]]). Given two finite sets $\mathcal{X}$ and $\mathcal{Y}$, we call a function $c: \mathcal{X} \longrightarrow \mathcal{Y}^*$ a symbol code, and call $c(x) \in \mathcal{Y}^*$ the codeword of $x \in \mathcal{X}$. In this context, $\mathcal{Y}$ is called a ==$d$-ary== if $|\mathcal{Y}|=d$.
> we can restrict attention to the design of preﬁx codes without increasing the length of code words.
## Definitions
Let $c: \mathcal{X} \longrightarrow \mathcal{Y}^*$ be a symbol code. We denote with $c^*: \mathcal{X}^* \longrightarrow \mathcal{Y}^*$ the extension of $c$ to $\mathcal{X}^*$ by $c^*\left(x_1 \cdots x_n\right)=c\left(x_1\right) \cdots c\left(x_n\right)$. We say that $c$ is
1) ==unambiguous== if $c$ is injective,
2) ==uniquely decodable== if $c^*$ is injective,
3) a ==prefix code==, if no codeword of $c$ is the prefix of another codeword of $c$. That is, there does not exist $x_1 \in \mathcal{X}, x_2 \in \mathcal{X}$ such that $c\left(x_1\right) y=c\left(x_2\right)$ for some $y \in \mathcal{Y}^*$. Prefix codes are also known as instantaneous codes.

