#Integration 

```ad-theorem
title: Fatou's Lemma
Let $\left(f_{n}\right)$ be a sequence of non-negative measurable functions. Then
$$
\int \liminf _{n \rightarrow \infty} f_{n} \leq \liminf _{n \rightarrow \infty} \int f_{n}
$$
```
^theorem

## Proof
Let $g_{r}:=\inf _{n \geq r} f_{n}$.  Then $\left(g_{r}\right)$ increases to $\liminf _{n \rightarrow \infty} f_{n}$ and $g_{r} \leq f_{r}$ and $\int g_{r} \leq$ $\int f_{r}$.
By MCT, $\int \liminf \operatorname{inm}_{n \rightarrow \infty} f_{n}=\lim _{r \rightarrow \infty} \int g_{r}=\liminf r \rightarrow \infty \int g_{r} \leq \liminf _{r \rightarrow \infty} \int f_{r}$.
