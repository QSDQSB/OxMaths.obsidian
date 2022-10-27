## Picard's Theorem via CMT
#DE 

### Contraction Mapping Theorem
![[Contraction Mapping Theorem]]

---
#### Defining the Metric Space
Define $\mathcal{C}_{h, k}=\mathcal{C}([a-h, a+h] ;[b-k, b+k])$, the space of continuous functions $y:$ $[a-h, a+h] \rightarrow[b-k, b+k] .$ For $y, z \in \mathcal{C}_{h, k}$ if we define
$$
d(y, z):=\|y-z\|_{\text {sup }}:=\sup _{x \in[a-h, a+h]}|y(x)-z(x)|
$$
then $\left(\mathcal{C}_{h, k}, d\right)$ is a [[complete]] [[metric space]] (we call $\|\cdot\|_{\text {sup }}$ the "sup norm").

---
### Picard's Existence Theorem
>Let $f: R \rightarrow \mathbb{R}$ be a function defined on the rectangle $R:=$$\{(x, y):$$|x-a| \leq h,|y-b| \leq k\}$ which satisfies conditions ==$\mathbf{P}(\mathbf{i})(a)$== and ==$\mathbf{P}(\mathbf{i i})$==. Let $\eta>0$ be so that $L \eta<1$ and $M \eta \leq k$.
>
Then the initial value problem [(1.1)](Picard's%20Theorem.md#^Equation1-1) has a **unique** solution for $x \in[a-\eta, a+\eta]$.

---
#### Proof of Picard's Existence Theorem
As before, we can write the initial value problem as an integral equation
$$
y(x)=b+\int_{a}^{x} f(s, y(s)) d s
$$
Provided $f(s, y(s))$ is continuous in $s$, $y$ is a solution of the differential equation if and only if $y$ is a solution of the integral equation.
If we define
$$
(T y)(x)=b+\int_{a}^{x} f(s, y(s)) d s
$$

then we can write (1.22) as a **fixed point problem**
$$y=T y$$
We will work in the complete metric space $\mathcal{C}_{\eta, k}=\mathcal{C}([a-\eta, a+\eta] ;[b-k, b+k])$, where we will choose $\eta \leq h$ so that $T: \mathcal{C}_{\eta, k} \rightarrow \mathcal{C}_{\eta, k}$ and so that $T$ is a [[contraction]].

---
We begin by proving Claim 1: ==If $\eta>0$ is so that $M \eta \leq k$ then $T: \mathcal{C}_{\eta, k} \rightarrow \mathcal{C}_{\eta, k}$==

##### Proof of Claim 1
[[Picard's Theorem#Claim 1]]
First we note that from the properties of integration, $(T y)(x) \in \mathcal{C}([a-\eta, a+\eta] ; \mathbb{R})$. All that we require is thus to show that $\|T y-b\|_{\text {sup }} \leq k$ if $\|y-b\|_{\text {sup }} \leq k$.
But
$$
\begin{aligned}
\|T y-b\|_{\text {sup }} &=\sup _{x \in[a-\eta, a+\eta]}\left|\int_{a}^{x} f(s, y(s)) d s\right| \\
& \leq \sup _{x \in[a-\eta, a+\eta]}\left|\int_{a}^{x}\left| f(s, y(s))\right|d s\right| \\
& \leq M \eta \leq k
\end{aligned}
$$
provided $M \eta \leq k .$

---
Claim 2: ==If $L \eta<1$ then $T$ is a [[contraction]] (with $K=L \eta)$==
##### Proof of Claim 2
Given $y, z \in C_{\eta, k}$ we can bound
$$
\begin{aligned}
\|T y-T z\|_{\text {sup }} &=\sup _{x \in[a-\eta, a+\eta]}\left|\int_{a}^{x} f(s, y(s))-f(s, z(s)) d s\right| \\
& \leq \sup _{x \in[a-\eta, a+\eta]}\left|\int_{a}^{x}\left| f(s, y(s))-f(s, z(s))\right|d s\right| \\
& \leq \sup _{x \in[a-\eta, a+\eta]}\left|\int_{a}^{x} L\left| y(s)-z(s)\right|d s\right| \leq L \eta\left\|y-z||_{\text {sup }} \leq K\right\| y-z \|_{\text {sup }}
\end{aligned}
$$
`Follows correspondingly by Triangle inequality and Lipschitz`
where $K:=\eta L<1$ provided $\eta<1 / L$.

---
If we hence choose $\eta<\min \{h, k / M, 1 / L\}$ then $\mathrm{T}$ satisfies the conditions of the [[contraction mapping theorem]] and has a unique fixed point, $y(x) .$ So we have established that the initial value problem has a unique solution on the interval $[a-\eta, a+\eta]$.

#### Corollary 1.5
If $Mh \leq k$, then the initial value problem has a unique solution on the whole interval $[a-h, a+h]$.

##### Proof of Corollary 1.5
We look at $x \geq a$ first. If $h<1 / L$ we are done. (Take $\eta=h$.) Otherwise we choose $\eta_{1}<1 / L .$ Then from [[#Picard's Existence Theorem]] there exists a unique solution, $y_{0}$ say, on $\left[a, a+\eta_{1}\right]$.

Now choose $\eta_{2}=\min \left\{2 \eta_{1}, h\right\}$, and look for a solution, $y_{1}$ say, on $\left[a+\eta_{1}, a+\eta_{2}\right]$, of the ODE with initial data $y_{1}\left(a+\eta_{1}\right)=y_{0}\left(a+\eta_{1}\right)$.

Define
$$
\begin{array}{l}
y(x)=y_{0}(x), x \in\left[a, a+\eta_{1}\right] \\
y(x)=y_{1}(x), x \in\left[a+\eta_{1}, a+\eta_{2}\right]
\end{array}
$$
To constuct $y_{1}$: As in [[#Picard's Existence Theorem]], but we now work in the space $X_{1}:=\mathcal{C}\left(\left[a+\eta_{1}, a+\right.\right.$ $\left.\left.\eta_{2}\right] ;[b-k, b+k]\right)$, and take (for $\left.a+\eta_{1} \leq x \leq a+\eta_{2}\right)$
$$
\begin{aligned}
\left(T_{1} y\right)(x) &=y_{0}\left(a+\eta_{1}\right)+\int_{a+\eta_{1}}^{x} f(s, y(s)) d s \\
&=b+\int_{a}^{a+\eta_{1}} f\left(s, y_{0}(s)\right) d s+\int_{a+\eta_{1}}^{x} f(s, y(s)) d s
\end{aligned}
$$
So $T_{1}: X_{1} \rightarrow X_{1}$ because from $(1.26)$
$$
\begin{array}{c}
\left\|T_{1} y-b\right\|_{\text {sup }} \leq M \eta_{1}+M\left(x-\left(a+\eta_{1}\right)=M(x-a) \leq M \eta_{2}\right. \\
\leq M h \leq k
\end{array}
$$
Also $T_{1}$ is a [[contraction]] as the proof of claim 2 only requires that the length of the interval we work on, which for $T_{1}$ is $\eta_{2}-\eta_{1}$, is less than $1 / L .$ Thus we obtain the existence of a unique solution on $\left[a, a+\eta_{2}\right]$.

Repeating this argument, both in positive and negative direction, we continue to be able to extend the solution and after finitely many steps have reached the endpoint $a+h$ of the original interval, since we can carry out each step except the very last one (where we will be able to choose $\eta_{j}=h$ since we'll have $\left.h-\eta_{j-1}<\frac{1}{L}\right)$ with the same 'stepsize' $\eta_{k}-\eta_{k-1}=\eta_{1}$.

### Global Existence
If $f$ is continuous for all $x \in[a-h, a+h]$, and all $y$ and satisfies a **global** [[Differential Equation/1 ODE and Picard's Theorem/Lipschitz]] condition (i.e. condition $\mathbf{P}(iii)$ on $[a-h, a+h] \times \mathbb{R})$, then we instead work in the spaces $\mathcal{C}_{h}=\mathcal{C}([a-h, a+h] ; \mathbb{R})$, respectively $\mathcal{C}_{\eta}=\mathcal{C}([a-\eta, a+\eta] ; \mathbb{R})$.

As before, claim 1 then no longer requires the condition $M h \leq k$ and we obtain in a first step that a solution exists on $[a-\eta, a+\eta]$ for $\eta<\frac{1}{L}$.

We can then carry out the argument above to extend this solution and in this case the proof of [[#Corollary 1.5]] is also simplified as we no longer require $\left\|T_{1} y-b\right\|_{\text {sup }} \leq k$ etc. We thus conclude that a unique solution of the IVP exists on all of $[a-h, a+h]$.

- Convergence in the sup norm is equivalent to uniform convergence.
- The proof using the CMT produces a less delicate result, in that the range of x for which it applied is more restricted.
- The above proof can in particular be adjusted to prove the existence of solutions of partial differential equations, such as heat equations with non-linearities.

