## Algebra of Limits of Functions
#Analysis 
Let $p$ be a [[Analysis/Continuity/Limit Point]] of $E$, and $f$, $g$ be two real (or complex) functions on $E$. Suppose $\lim_{x\to p}f(x)=A$ and $\lim_{x\to p}g(x)=B$. Then
1) $\lim_{x\to p}(f(x)\pm g(x))=A\pm B;$
2) $\lim_{x\to p}f(x)g(x)=AB;$
3) if $B\not=0$, $$\lim_{x\to p}{f(x)\over g(x)}={A\over B}.$$
### Proof
Use [[Algebra of Sequence Limits]] with [[Theorem 1.1.17]].

### Example 1.1.19
Show that $\lim_{x\to0}\sin{1\over x}$ does not exist.
#### Hint
Let $x_n={1\over 2\pi n}$ and $y_n={1\over 2\pi n+\pi/2}$.

### Example 1.1.20 #useful 
If $\lim_{x\to p}f(x)=l\not=0$, then $\exists\delta>0$, such that $\forall x\in E$ with $0<|x-p|<\delta$, we have $$|f(x)|\geq{|l|\over2}.$$
In particular, $|f(x)|>0$ for all $x\in E$ such that $0<|x-p|<\delta$,.
#### Proof
Since $\lim _{x \to p} f(x)=l$ and $|l|>0$, applying the definition of function limits to $f$ at $p$ with $\varepsilon=|l| / 2$ which is positive, there is $\delta>0$, for $x \in E$ such that $0<|x-p|<\delta$ we have
$$|f(x)-l|<\frac{|l|}{2}$$
Using [[triangle inequality]] we then deduce that
$$
\begin{aligned}
|f(x)| &=|l+(f(x)-l)| \\
& \geq|l|-|f(x)-l| \\
&>|l|-\frac{|l|}{2}=\frac{|l|}{2}
\end{aligned}
$$
for every $x \in E$ such that $0<|x-p|<\delta$.
