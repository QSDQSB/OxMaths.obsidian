---
aliases: [prox]
tags: [OptimisationforDS]
---
## Definition
Let $h: \mathbb{R}^n \rightarrow \mathbb{R} \cup\{+\infty\}$ be [[proper convex]] and closed.

The [[proximal operator]] is given by
$$
\begin{aligned}
\operatorname{prox}_{\lambda h}: \mathbb{R}^n & \rightarrow \mathbb{R}, \\
x & \mapsto \arg \min _u\left\{\lambda h(u)+\frac{1}{2}\|u-x\|^2\right\}
\end{aligned}
$$
>The function is well defined by [[strongly convex#Proposition 3]].