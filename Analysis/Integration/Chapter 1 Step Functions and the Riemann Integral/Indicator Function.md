## Indicator Function
#Analysis 
### Definition
If $X \subset \mathbb{R}$ is a set, the **indicator function** of $X$ is the function $\mathbf{1}_{X}$ taking the value 1 for $x \in X$ and 0 elsewhere.
### Lemma 1.4
>A function $\phi:[a, b] \rightarrow \mathbb{R}$ is a [[step function]] if and only if it is a finite linear combination of indicator functions of intervals (open and closed).

#### Proof
- Suppose first that $\phi$ is a [[step function]] adapted to some partition $\mathcal{P}$, $a=x_{0} \leqslant x_{1} \leqslant \ldots \leqslant x_{n}=b .$ Then $\phi$ can be written as a weighted sum of
the functions $\mathbf{1}_{\left(x_{i-1}, x_{i}\right)}$ (each an indicator function of an open interval) and the functions $\mathbf{1}_{\left\{x_{i}\right\}}$ (each an [[indicator function]] of a closed interval containing a single point).
- Conversely, the [[indicator function]] of any interval is a [[step function]], and hence so is any finite linear combination of these by [[Step Function#Lemma 1 3]].

In particular, the step functions on $[a, b]$ form a vector space, which we occasionally denote by 
>$$\huge\mathscr{L}_{\text {step }}[a, b].$$

==哇！好大！==