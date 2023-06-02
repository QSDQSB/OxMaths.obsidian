---
aliases: [differentiable]
---
#ComplexAnalysis 

## Definition 
We will say that a [[Path]] $\gamma:[a, b] \rightarrow \mathbb{C}$ is [[Path Differentiable|differentiable]] if its real and imaginary parts are [[Complex Differentiable|differentiable]] as real-valued functions. Equivalently, $\gamma$ is differentiable at $t_{0} \in[a, b]$ if
$$
\lim _{t \rightarrow t_{0}} \frac{\gamma(t)-\gamma\left(t_{0}\right)}{t-t_{0}}
$$
exists, and then we denote this limit as $\gamma^{\prime}\left(t_{0}\right) .$ (If $t=a$ or $b$ then we interpret the above as a one-sided limit.)

We say that a [[Path]] is ==$C^{1}$== if it is [[Path Differentiable|differentiable]] and its derivative $\gamma^{\prime}(t)$ is **continuous**.

### Piecewise C1
We will say a path is ==piecewise $C^{1}$== if it is continuous on $[a, b]$ and the interval $[a, b]$ can be divided into subintervals on each of which $\gamma$ is $C^{1}$. *That is, there is a finite sequence $a=a_{0}<a_{1}<\ldots<a_{m}=b$ such that $\gamma_{\left[\left[a_{i}, a_{i+1}\right]\right.}$ is $C^{1}$.* 

In particular, the left-hand and right-hand derivatives of $\gamma$ at $a_{i}(1 \leq i \leq m-1)$ may not be equal.
>So a piecewise $C^{1}$ path is precisely a finite ***concatenation*** of $C^{1}$ paths.