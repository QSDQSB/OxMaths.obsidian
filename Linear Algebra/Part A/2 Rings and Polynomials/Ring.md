## Ring
#LA 
### Definition
A non-empty set $R$ with two binary operations $+$ and $\times$ is a [[Ring]] if $(R,+, 0)$ is an [[abelian]] group, the multiplication $\times$ is **associative** and the **distribution laws** hold:
for all $a, b, c \in R$,
$$
(a+b) c=a c+b c \text { and } a(b+c)=a b+a c
$$
The [[Ring]] $R$ is called **commutative** if for all $a, b \in R$ we have $a b=b a$.

```ad-example
- Any [[field]] is a commutative ring.
- $\mathbb{Z}, \mathbb{Z}[i], \mathbb{F}[x]$ are commutative rings.
> $\mathbb{Z}[i]$: The ring of Gaussian integers. A Gaussian integer is a number of the form $a+b i$ where $a, b \in \mathbb{Z}$ and $i^{2}=-1$.

- $M_{n}(\mathbb{F})$, the set of $(n \times n)$-matrices over $\mathbb{F}$, and $\operatorname{Hom}(V, V)$, the set of linear self-maps for any vector space $V$, are non-commutative rings when $n>1$ or $\operatorname{dim}(V)>1$.

- For $A \in M_{n}(\mathbb{F})$ the set of polynomials evaluated on $A$, denoted $\mathbb{F}[A]$, forms a commutative **subring** of $M_{n}(\mathbb{F})$.
```

### Ring Homomorphism
![[Ring Homomorphism]]