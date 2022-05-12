## First Fundamental Theorem of Calculus
#Analysis 
>
Suppose that $f$ is [[integrable]] on $(a, b) .$ Define a new function $F:[a, b] \rightarrow \mathbb{R}$ by
>$$
F(x):=\int_{a}^{x} f
>$$
Then $F$ is [[continuous]]. Moreover, if $f$ is [[continuous]] at $c \in(a, b)$ then $F$ is [[differentiable]] at $c$ and $F^{\prime}(c)=f(c)$.

### Proof
The fact that $F$ is [[continuous]] follows immediately from the fact that $f$ is **bounded** (which it must be, as it is [[integrable]]), say by $M$. Then
$$
|F(c+h)-F(c)|=\left|\int_{c}^{c+h} f\right| \leqslant \int_{c}^{c+h}|f| \leqslant M h
$$
>In fact, this argument directly establishes that $F$ is [[uniformly continuous]] (and in fact [[Lipschitz continuous]].)

Now we turn to the second part. Suppose that $c \in(a, b)$ and that $h>0$ is sufficiently small that $c+h<b$. We have
$$
F(c+h)-F(c)=\int_{c}^{c+h} f
$$
Let $\varepsilon>0$. Since $f$ is [[continuous]] at $c$, there is a $\delta>0$ such that for all $t \in[c, c+\delta]$, we have $|f(t)-f(c)| \leqslant \varepsilon$. Therefore, for any $h \in(0, \delta)$,
$$
|F(c+h)-F(c)-h f(c)|=\left|\int_{c}^{c+h}(f(t)-f(c)) d t\right| \leqslant \varepsilon h
$$
Divide through by $h$ :
$$
\left|\frac{F(c+h)-F(c)}{h}-f(c)\right| \leqslant \varepsilon
\quad\color{yellow}\text{(4.1)}
$$

Essentially the same argument works for $h<0$ (in fact, exactly the same argument works if we interpret $\int_{c}^{c+h} f$ in the natural way as $\left.-\int_{c+h}^{c} f\right) .$ Statement (4.1) is exactly the definition of $F$ being differentiable at $c$ with derivative $f(c)$.