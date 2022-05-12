## Picard's Theorem for Systems
#DE 

### Initial Value Problem
Consider a pair of first order ODEs, for the functions $y_{1}$ and $y_{2}$.
$$
\begin{aligned}
y_{1}^{\prime}(x)&=f_{1}\left(x, y_{1}(x), y_{2}(x)\right) \quad\color{yellow}\text{(1.27)}\\
y_{2}^{\prime}(x)&=f_{2}\left(x, y_{1}(x), y_{2}(x)\right) \quad\color{yellow}\text{(1.28)}\\
\text{with initial data}\quad y_{1}(a)&=b_{1}, \quad y_{2}(a)=b_{2} \quad\color{yellow}\text{(1.29)}
\end{aligned}
$$
Introduce vector notation
$$
\underline{y}=\left(\begin{array}{l}
y_{1} \\
y_{2}
\end{array}\right), \quad \underline{f}=\left(\begin{array}{l}
f_{1} \\
f_{2}
\end{array}\right), \quad \underline{b}=\left(\begin{array}{l}
b_{1} \\
b_{2}
\end{array}\right)
$$
Write equations (1.27)-(1.29) as
$$
\begin{aligned}
\underline{y}^{\prime}(x) &=\underline{f}(x, \underline{y}(x)) \quad\color{yellow}\text{(1.30)}\\
\underline{y}(a) &=\underline{b} \quad\color{yellow}\text{(1.31)}
\end{aligned}
$$

`distance in R2` Use $l^1$-norm: $\|y\|_1=|y_1|+|y_2|$.

### H1
$f_{1}\left(x, y_{1}, y_{2}\right)$ and $f_{2}\left(x, y_{1}, y_{2}\right)$ are continuous on $S$, and are hence bounded (because $f_{1}$ and $f_{2}$ are continuous functions on the closed bounded set $S$ ), say $\left|f_{1}(x, y)\right|+$ $\left|f_{2}(x, y)\right| \leq M$ on $S$.

==$(\mathbf{H}(\mathbf{i}))^{\prime}$== $\underline{f}(x, y)$ is continuous on $S$, and bounded by $M$, say (that is $\left.\|\underline{f}(x, y)\|_{1} \leq M\right)$ $[M$ must exist because $\underline{f}$ is a continuous function on the closed bounded set $S .]$

---
### H2
$f_{1}\left(x, y_{1}, y_{2}\right)$ and $f_{2}\left(x, y_{1}, y_{2}\right)$ are Lipschitz continuous with respect to $\left(y_{1}, y_{2}\right)$ on $S$. That is, there exist $L_{1}$ and $L_{2}$ such that for $x \in[a-h, a+h]$ and $\underline{u}, \underline{v} \in B_{k}(\underline{b})$,
$$
\begin{aligned}
\left|f_{1}\left(x, u_{1}, u_{2}\right)-f_{1}\left(x, v_{1}, v_{2}\right)\right| & \leq L_{1}\left(\left|u_{1}-v_{1}\right|+\left|u_{2}-v_{2}\right|\right) \text { and } \\
\left|f_{2}\left(x, u_{1}, u_{2}\right)-f_{2}\left(x, v_{1}, v_{2}\right)\right| & \leq L_{2}\left(\left|u_{1}-v_{1}\right|+\left|u_{2}-v_{2}\right|\right)
\end{aligned}
$$

==$(\mathbf{H}(\mathbf{i i}))^{\prime}$== $\underline{f}(x, y)$ is Lipschitz continuous with respect to $\underline{y}$ on $S .$ That is, there exists $L$ such that for $\bar{x} \in[a-h, a+h]$ and $\underline{u}, \underline{v} \in B_{k}(\underline{b})$
$$
\|\underline{f}(x, \underline{u})-\underline{f}(x, \underline{v})\|_{1} \leq L\|u-v\|_{1}
$$
>Note that we can take $L=L_{1}+L_{2}$.

### Picard's existence theorem for systems
Let $f_{1}, f_{2}: S \rightarrow \mathbb{R}$ be functions for which the conditions $(\mathbf{H}(\mathbf{i}))$ and $(\mathbf{H}(\mathbf{i i}))$ (or $(\mathbf{H}(\mathbf{i}))^{\prime}$ and $\left.(\mathbf{H}(\mathbf{i i}))^{\prime}\right)$ hold true for the set $S=[a-h, a+h] \times B_{k}(\underline{b}) \subset \mathbb{R}^{3}$.  

Then there exists $0<\eta \leq h$, such that the has a unique solution for $x \in[a-\eta, a+\eta]$.

#### Proof
##### Complete Metric Space
We will work in the new [[complete]] metric space: $\mathcal{C}_{\eta}:=\mathcal{c}\left([a-\eta, a+\eta] ; B_{k}(\underline{b})\right)$, the space of continuous functions mapping from $[a-\eta, a+\eta]$ to $B_{k}(\underline{b})$ with [[norm]] (or distance) on $\mathcal{C}_{\eta}$ defined by

$$\|\underline{y}\|_{\text {sup }}=\sup _{x \in[a-\eta, a+\eta]}\|\underline{y}(x)\|_{1}\left(:=\sup _{x \in[a-\eta, a+\eta]}\left(\left|y_{1}(x)\right|+\left|y_{2}(x)\right|\right) .\right)$$

##### Integral Equation
Write the initial value problem as an integral equation
$$
\underline{y}(x)=\underline{b}+\int_{a}^{x} \underline{f}(s, \underline{y}(s)) d s
$$
where by the integral we mean that we integrate componentwise.

Define $$(T \underline{y})(x)=\underline{b}+\int_{a}^{x} \underline{f}(s, \underline{y}(s)) d s$$

##### Proof by CMT
As before we can now work in the complete metric space $\mathcal{C}_{\eta}$, to show that, provided we choose $\eta<\min \{h, k / M, 1 / L\}$, then $T: \mathcal{C}_{\eta} \rightarrow \mathcal{C}_{\eta}$ and is a [[contraction]].
Again we can extend the range of the solution to all $x \in[a-h, a+h]$, by iteration.

### Corollary 1.7
If $M h \leq k$ then there is a unique solution for all $x \in[a-h, a+h]$.