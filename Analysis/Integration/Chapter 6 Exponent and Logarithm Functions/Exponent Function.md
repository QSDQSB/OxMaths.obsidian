## Exponent Function
#Analysis 

### Lemma 6.1
>Suppose that $f: \mathbb{R} \rightarrow \mathbb{R}$ is a differentiable function with $f^{\prime}=f$ **identically** and $f(0)=0 .$ Then $f$ is identically zero.

#### Proof
Since $f$ is continuous, it attains its maximum value on $\left[0, \frac{1}{2}\right]$ at some point
$x$. Suppose that $x>0$. By the [[mean value theorem]].
$$
f(x)=f(x)-f(0)=x f^{\prime}(\xi)=x f(\xi)
$$
for some point $\xi \in(0, x)$. Therefore
$$
f(x) \leqslant x f(x) \leqslant \frac{1}{2} f(x)
$$
which implies that $f(x) \leqslant 0 .$ That is, $f \leqslant 0$ on $\left[0, \frac{1}{2}\right] .$ Applying the same argument to $-f$ gives $f \geqslant 0$ on $\left[0, \frac{1}{2}\right]$, and so $f=0$ identically on $\left[0, \frac{1}{2}\right]$.

We may now apply the same argument to $g(x)=f\left(x-\frac{1}{2}\right)$, which satisfies $g^{\prime}=g$ and $g(0)=0$. We conclude that $g$ is identically zero on $\left[0, \frac{1}{2}\right]$, and hence that $f$ is identically zero on $\left[\frac{1}{2}, 1\right]$ and hence on $[0,1]$. Continuing in this manner eventually shows that $f$ is identically zero on the whole of $\mathbb{R}$.

### Theorem 6.2: Exponent Function
For $x \in \mathbb{R}$, define
>$$
e(x)=\sum_{k=0}^{\infty} \frac{x^{k}}{k !}.
\quad\color{yellow}\text{(6.1)}
>$$

Then
1) The series converges for all $x$, and $e(x)$ is a differentiable function satisfying $e^{\prime}=e$
2) We have $e(x)>0$ for all $x \in \mathbb{R}$.
3) We have $e(x+y)=e(x) e(y)$ for all $x, y \in \mathbb{R}$.

#### 
`(i)`Clearly we may work on bounded intervals $[-X, X]$, and let $X \rightarrow \infty$ at the end. Fix $X$ from now on.

We will apply [[Interchanging the Order#Corollary 5.6]], taking $\phi_{k}(x)=x^{k} / k !$. Since the $\phi_{k}$ are continuously differentiable and $\phi_{k}^{\prime}(x)=x^{k-1} /(k-1) !$, the result will follow if we can show that $\left|\phi_{k}(x)\right| \leqslant M_{k}$ for $x \in[-X, X]$, where $\sum_{k} M_{k}$ converges. (In particular it will then follow from the Weierstrass M-test that $\sum_{k} \phi_{k}(x)$ converges, which is one of the hypotheses of Corollary 5.6).

To establish this, we can use very crude bounds. Observe that $k ! \geqslant(k / 2)^{k / 2}$ for all $k$, since the product for $k !$ contains at least $k / 2$ terms of size $k / 2$ or greater. Therefore
$$
\frac{x^{k}}{k !} \leqslant\left(\frac{2 x^{2}}{k}\right)^{k / 2}
$$
If $|x| \leqslant X$ and $k \geqslant 8 X^{2}$, this is bounded above by $2^{-k}$, which clearly converges when summed over $k$. (One could also use the "ratio test" here, though personally I wouldn't bother when a direct proof is so short.)
`(ii)` Suppose that $e(a)=0$. Consider the function $f(x)=e(x-a) ;$ then $f(0)=0$ and $f^{\prime}=f$. By Lemma $6.1, f$ is identically zero and hence so is $e$. But this is a contradiction, as $e$ is clearly not identically zero (for example $e(0)=1$ ).

Thus $e$ never vanishes. Since it is continuous, and positive somewhere, the [[intermediate value theorem]] implies that it is positive everywhere.
`(iii)` Consider the function $\tilde{e}(x)=\frac{e(x+y)}{e(y)}$. As just established, $e(y) \neq 0$ and so for every fixed $y$ this is a continuous function of $x$. Moreover by the chain rule we have $\tilde{e}^{\prime}(x)=\tilde{e}(x)$, and by direct substitution we have $\tilde{e}(0)=e(0)=1$.

Therefore the function $f:=e-\tilde{e}$ satisfies the hypotheses of [[#Lemma 6.1]] It follows that $\tilde{e}(x)=e(x)$, which is what we were required to prove.