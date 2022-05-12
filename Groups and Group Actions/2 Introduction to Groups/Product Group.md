## Product Group
#Groups 
### Definition
Given groups $\left(G, *_{G}\right)$ and $\left(H, *_{H}\right)$, we define their [[Product Group]] (or product) to be $(G \times H, *)$ with $*$ defined by
$$
\left(g_{1}, h_{1}\right) *\left(g_{2}, h_{2}\right)=\left(g_{1} *_{G} g_{2}, h_{1} *_{H} h_{2}\right).
$$
### Proposition 5
The operation $*$ just defined makes $(G \times H, *)$ into a [[Group]].
#### Proof
- **closure**: since $*_{G}$ and $*_{H}$ are binary operations on $G$ and $H$ respectively, we have $\left(g_{1} *_{G} g_{2}, h_{1} *_{H} h_{2}\right) \in G \times H$ for all $g_{1}, g_{2} \in G$ and $h_{1}, h_{2} \in H$
- **associativity**: follows from the associativity of $*_{G}$ and $*_{H}$ .
- **identity**: the identity element in $(G \times H, *)$ is $e_{G \times H}=\left(e_{G}, e_{H}\right)$.
- **inverses**: given $(g, h) \in G \times H$, we have $(g, h)^{-1}=\left(g^{-1}, h^{-1}\right) \in G \times H$.

### Examples
> $\mathbb{Z}_{15}^{*} \cong \mathbb{Z}_{4} \times \mathbb{Z}_{2}$