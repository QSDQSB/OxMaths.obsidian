## Periodic Functions
#FSPDE
### Definition
The function $f: \mathbb{R} \rightarrow \mathbb{R}$ is a periodic function if there exists $p>0$ such that
$$
f(x+p)=f(x) \quad \text { for all } x \in \mathbb{R}
$$
In this case $p$ is a period for $f$ and $f$ is called $p$ -periodic. A period is not unique, but if there exists a smallest such $p$ it is called the *prime* period.

### Definition: Periodic Extension
The periodic extension of the function $f:(\alpha, \alpha+p] \rightarrow \mathbb{R}$ is the function $F: \mathbb{R} \rightarrow \mathbb{R}$ defined by
$$
F(x)=f(x-m(x) p) \quad \text { for } x \in \mathbb{R}
$$
where, for each $x \in \mathbb{R}, m(x)$ is the unique integer such that $x-m(x) p \in(\alpha, \alpha+p]$.

### Properties
1) $f, g$ are $n p$-periodic for all $n \in \mathbb{N} \backslash\{0\}$;
2) $\alpha f+\beta g$ are $p$-periodic for all $\alpha, \beta \in \mathbb{R}$;
3) $f g$ is $p$ -periodic;
4) $f(\lambda x)$ is $p\over\lambda$-periodic for all $\lambda>0$;
5) $\int_{0}^{p} f(x) \mathrm{d} x=\int_{\alpha}^{\alpha+p} f(x) \mathrm{d} x$ for all $\alpha \in \mathbb{R}$.

