#OptimisationforDS 

## Definition
Let $h: \mathbb{R}^n \rightarrow \mathbb{R} \cup\{+\infty\}$ be [[proper convex]] and closed.

The Moreau envelope of $h$ associated with $\lambda>0$ is the function
$$
\begin{aligned}
M_{\lambda, h}: \mathbb{R}^n & \rightarrow \mathbb{R}, \\
x & \mapsto \frac{1}{\lambda} \inf _u\left\{\lambda h(u)+\frac{1}{2}\|u-x\|^2\right\}=\inf _u\left\{h(u)+\frac{1}{2 \lambda}\|u-x\|^2\right\} .
\end{aligned}
$$
The Moreau envelope is a smoothed version of $h$.