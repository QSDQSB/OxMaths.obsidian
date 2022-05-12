## Coset Equality Test
#Groups 
> Let $H$ be a subgroup of a group $G$. Take $g_{1}, g_{2} \in G .$ We have $g_{1} H=g_{2} H$ if and only if $g_{2}^{-1} g_{1} \in H .$

#### Proof
##### $(\Rightarrow)$
>
Assume that $g_{1} H=g_{2} H$. Then $g_{1}=g_{1} e \in g_{1} H$ so $g_{1} \in g_{2} H$ so there is $h \in H$ with $g_{1}=g_{2} h$. Then $g_{2}^{-1} g_{1}=h \in H$.
##### $(\Leftarrow)$
>
Assume that $g_{2}^{-1} g_{1} \in H$, say $g_{2}^{-1} g_{1}=h \in H .$
Take an element of $g_{1} H$, say $g_{1} h_{1}$ where $h_{1} \in H$. 
So $g_{1} H \subseteq g_{2} H$.
Since $g_{1}^{-1} g_{2}=h^{-1} \in H$, we similarly obtain $g_{2} H \subseteq g_{1} H$. So $g_{1} H=g_{2} H .$

[[Coset]]