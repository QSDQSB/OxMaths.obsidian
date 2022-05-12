## Logarithm Function
#Analysis 

### Theorem 6.2
For $x>0$, define
$$
L(x)=\int_{1}^{x} \frac{d y}{y}
\quad\color{yellow}\text{(6.2)}
$$
Then
- $L$ is differentiable with derivative $\frac{1}{x}$ at each $x>0$;
- $L\left(e^{t}\right)=t$ for all $t \in \mathbb{R}$.

>To ensure the definition makes sense when $x<1$, we define $\int_{b}^{a} f$ to be $-\int_{a}^{b} f$ when $a<b$. (We could have developed the theory of the integral $\int_{a}^{b}$ when $b<a$ more generally, but this is rather dull and routine.)

#### Proof
1) This is almost immediate from the [[first fundamental theorem of calculus]] except that we need to convince ourselves that it still applies when $x \leqslant 1$. This may be done as follows. Let $c>0$ and write
$$
\int_{1}^{x} \frac{d y}{y}=\int_{c}^{x} \frac{d y}{y}-\int_{c}^{1} \frac{d y}{y}
$$
It is easy to check that this holds for any $c>0 .$ Then we may apply the fundamental theorem of calculus to get that $L^{\prime}(x)=\frac{1}{x}$ for any $x>c$. Since $c$ was arbitrary, the result follows.
2) We use the [[substitution rule]], Proposition 4.6, taking $f(y)=\frac{1}{y}$ and $\phi(t)=e^{t}$. Note that $f(\phi(t)) \phi^{\prime}(t)=1$, since $\phi^{\prime}=\phi$. We therefore have
$$
\int_{1}^{e^{x}} \frac{d t}{t}=\int_{0}^{x}(f \circ \phi) \phi^{\prime}=x
$$
We leave the reader to check that the conditions required in the substitution lemma are valid (this is easy).

