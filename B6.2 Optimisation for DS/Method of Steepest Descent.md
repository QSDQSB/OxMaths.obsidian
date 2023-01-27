#OptimisationforDS 

The [[Method of Steepest Descent]] is a gradient method based on making the following choices: $d^k=-\nabla f\left(x^k\right)$ for all $k$ (the direction of steepest descent), and $\alpha_k \equiv L^{-1}$ for all $k$ (constant step length). This leads to the steepest descent updates
$$
x^{k+1}=x^k-\frac{1}{L} \nabla f\left(x^k\right)
$$

## Foundational Inequality of Steepest Descent
Starting steepest descent iterations at some arbitrary point $x^0$, we have
$$
f\left(x^{k+1}\right)=f\left(x^k-\frac{1}{L} \nabla f\left(x^k\right)\right) \leq f\left(x^k\right)-\frac{1}{2 L}\left\|\nabla f\left(x^k\right)\right\|^2 \quad \forall k .
$$

## Convergence Theory
### General $f$
> $\left(\nabla f\left(x^k\right)\right)_{k \in \mathbb{N}} \rightarrow 0$ **sublinearly** with rate $O(1 / \sqrt{k})$ for general $f$.
```ad-theorem
For $f(x)$ L-smooth and bounded below by $\bar{f}$, the method of steepest descent with constant step size $\alpha_k=1 / L$ satisfies
$$
\min _{0 \leq k \leq T-1}\left\|\nabla f\left(x^k\right)\right\| \leq \sqrt{\frac{2 L \times\left(f\left(x^0\right)-\bar{f}\right)}{T}}, \quad \forall T \geq 1 .
$$
Proof. [[#Foundational Inequality of Steepest Descent]] implies
$$
\sum_{k=0}^{T-1}\left\|\nabla f\left(x^k\right)\right\| \leq 2 L \sum_{k=0}^{T-1}\left[f\left(x^k\right)-f\left(x^{k+1}\right)\right]=2 L\left[f\left(x^0\right)-f\left(x^T\right)\right] .
$$
Therefore,
$$
\min _{0 \leq k \leq T-1}\left\|\nabla f\left(x^k\right)\right\| \leq \sqrt{\frac{1}{T} \sum_{k=0}^{T-1}\left\|\nabla f\left(x^k\right)\right\|^2} \leq \sqrt{\frac{2 L\left[f\left(x^0\right)-f\left(x^T\right)\right]}{T}}
$$
```
### L-smooth convex $f$
- $\left(f\left(x^k\right)-f\left(x^*\right)\right)_{k \in \mathbb{N}} \rightarrow 0$ **sublinearly** with rate $O(1 / k)$ for convex $f$.
```ad-theorem
title: Theorem 2
If $f$ is $L$-smooth and convex with minimiser $x^*$, then the method of steepest descent with constant step size $\alpha_k=1 / L$ satisfies

$$
f\left(x^T\right)-f\left(x^*\right) \leq \frac{L}{2 T}\left\|x^0-x^*\right\|^2, \quad \forall T \geq 1 .
$$
$$\color{red}x^*\text{  is not necessarily unique}$$
```

#### Proof
By convexity of $f, f\left(x^*\right) \geq f\left(x^k\right)+\nabla f\left(x^k\right)\left(x^*-x^k\right)$. Substitution into Lemma 3 yields
$$
\begin{aligned}
f\left(x^{k+1}\right) & \leq f\left(x^*\right)+\nabla f\left(x^k\right)^{\mathrm{T}}\left(x^k-x^*\right)-\frac{1}{2 L}\left\|\nabla f\left(x^k\right)\right\|^2 \\
&\quad\quad\text { (use upper bound on } f\left(x^k\right) \text { ) } \\
& =f\left(x^*\right)+\frac{L}{2}\left(\left\|x^k-x^*\right\|^2-\left\|x^k-x^*-\frac{1}{L} \nabla f\left(x^k\right)\right\|^2\right) \\
&\quad\quad \text { (expand to check) } \\
 &\left.=f\left(x^*\right)+\frac{L}{2}\left(\left\|x^k-x^*\right\|^2-\left\|x^{k+1}-x^*\right\|^2\right) \\
 
 \quad\quad \text{(use def of } x^{k+1}\right)
\end{aligned}
$$
Repeated use of this bound in a telescoping sum yields
$$
\sum_{k=0}^{T-1}\left[f\left(x^{k+1}\right)-f\left(x^*\right)\right] \leq \frac{L}{2} \sum_{k=0}^{T-1}\left(\left\|x^k-x^*\right\|^2-\left\|x^{k+1}-x^*\right\|^2\right) \leq \frac{L}{2}\left\|x^0-x^*\right\|^2,
$$
and since $f\left(x^{k+1}\right) \geq f\left(x^T\right)$ by virtue of [[#Foundational Inequality of Steepest Descent]] , this implies
$$
f\left(x^T\right)-f\left(x^*\right) \leq \frac{1}{T} \sum_{k=0}^{T-1}\left(f\left(x^{k+1}\right)-f\left(x^*\right)\right) \leq \frac{L}{2 T}\left\|x^0-x^*\right\|^2 .
$$

### strong convex $f$
- $\left(f\left(x^k\right)-f\left(x^*\right)\right)_{k \in \mathbb{N}} \rightarrow 0$ **Q-linearly** with rate $(1-\gamma / L)$ when $f$ is $\gamma$ strongly convex.
```ad-theorem
title: Theorem 3
If $f$ is $L$-smooth and $\gamma$-strongly convex then there exists a unique minimiser $x^*$, and
$$
f\left(x^{k+1}\right)-f\left(x^*\right) \leq\left(1-\frac{\gamma}{L}\right)\left(f\left(x^k\right)-f\left(x^*\right)\right) \quad \forall k
$$
```

#### Proof
For the uniqueness of $x^*$, see Proposition 3. Proposition 2 implies that for all $y \in \mathbb{R}^n$,
$$
f(y) \geq f\left(x^k\right)+\nabla f\left(x^k\right)^{\mathrm{T}}\left(y-x^k\right)+\frac{\gamma}{2}\left\|y-x^k\right\|^2 .
$$
Therefore,
$$
\min _y f(y) \geq \min _y f\left(x^k\right)+\nabla f\left(x^k\right)^{\mathrm{T}}(y-x)+\frac{\gamma}{2}\|y-x\|^2
$$
The `argmin` of the right hand side of (12) equals $y^*=x^k-(1 / \gamma) \nabla f\left(x^k\right)$, and substitution back into (12) gives
$$
\begin{aligned}
f\left(x^*\right) & \geq f\left(x^k\right)-\nabla f\left(x^k\right)^{\mathrm{T}}\left(\frac{1}{\gamma} \nabla f\left(x^k\right)\right)+\frac{\gamma}{2}\left\|\frac{1}{\gamma} \nabla f\left(x^k\right)\right\|^2, \\
& =f\left(x^k\right)-\frac{1}{2 \gamma}\left\|\nabla f\left(x^k\right)\right\|^2
\end{aligned}
$$
which in turn yields
$$
\left\|\nabla f\left(x^k\right)\right\|^2 \geq 2 \gamma\left(f\left(x^k\right)-f\left(x^*\right)\right) .
$$
Substituting into the bound of [[#Foundational Inequality of Steepest Descent]], we find
$$
f\left(x^{k+1}\right)-f\left(x^*\right) \leq f\left(x^k\right)-f\left(x^*\right)-\frac{\gamma}{L}\left(f\left(x^k\right)-f\left(x^*\right)\right)
$$