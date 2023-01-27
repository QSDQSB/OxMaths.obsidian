## Leibniz's Integral Rule
#FSPDE 

Let $F(x, t)$ and $\partial F / \partial t$ be continuous in both $x$ and $t$ in some region $R$ of the $(x, t)$ plane containing the region $S=\left\{(x, t): a(t) \leq x \leq b(t), t_{0} \leq t \leq t_{1}\right\}$, where the functions $a(t)$ and $b(t)$ and their derivatives are [[Continuous]] for $t \in\left[t_{0}, t_{1}\right]$. Then
$$
\frac{\mathrm{d}}{\mathrm{d} t} \int_{a(t)}^{b(t)} F(x, t) \mathrm{d} x=\int_{a(t)}^{b(t)} \frac{\partial F}{\partial t}(x, t) \mathrm{d} x+\dot{b}(t) F(b(t), t)-\dot{a}(t) F(a(t), t).
$$
As a result, if $a(t)$ and $b(t)$ are constants, then
$$
\frac{\mathrm{d}}{\mathrm{d} t} \int_{a}^{b} F(x, t) \mathrm{d} x=\int_{a}^{b} \frac{\partial F}{\partial t}(x, t) \mathrm{d} x .
$$