## Möbius Map
#ComplexAnalysis 

### Definition
The general linear [[group]] $\mathrm{GL}_{2}(\mathbb{C})$ consists of all [[invertible]] $2 \times 2$ matrices $g=\left(\begin{array}{ll}a & b \\ c & d\end{array}\right)$ with $a, b, c, d \in \mathbb{C}$, with the group operation being matrix multiplication.

Each element $g \in \mathrm{GL}_{2}(\mathbb{C})$ gives a [[Möbius map]] $\Psi_{g}: \mathbb{C}_{\infty} \rightarrow \mathbb{C}_{\infty} .$ Roughly, this is given by the formula
$$
\Psi_{g}(z):=\frac{a z+b}{c z+d}
$$
but one needs to be careful about $\infty$, as follows:
- If $c \neq 0$ then we define $\Psi_{g}(-d / c)=\infty$ and $\Psi_{g}(\infty)=a / c ;$
- If $c=0$ then we define $\Psi_{g}(\infty)=\infty$

```ad-remark
Two elements $g, g^{\prime} \in \mathrm{GL}_{2}(\mathbb{C})$ give the same [[Möbius map]] if $g=\lambda g^{\prime}$ for some $\lambda \neq 0.$
```


### Proposition 2.8: Composition of Möbius maps
We have $\Psi_{g_{1} g_{2}}=\Psi_{g_{1}} \circ \Psi_{g_{2}}$. That is, $\mathrm{GL}_{2}(\mathbb{C})$ acts on $\mathbb{C}_{\infty}$ via [[Möbius map]].

> Could be proved by [[Complex projective line#^Equation2-1]]

### Decomposing Möbius Maps
#### Lemma 2.12
Every [[Möbius map]] can be written as a composition of translations, dilations and inversions.

##### Proof
Let $\Psi_{g}, g=\left(\begin{array}{ll}a & b \\ c & d\end{array}\right)$, be the Möbius map we are interested in. Suppose first that $c \neq 0$. Then, putting aside any worries about $\infty$, we have the following chain of compositions:

$$z \stackrel{\Psi_{D(c)}}{\longrightarrow} c z \stackrel{\Psi_{T(d)}}{\longrightarrow} c z+d \stackrel{\Psi_{J}}{\longrightarrow} \frac{1}{c z+d} \stackrel{\Psi_{D\left(\frac{b c-a d}{c}\right)}}{\longrightarrow} \frac{b-\frac{a d}{c}}{c z+d} \stackrel{\Psi_{T\left(\frac{a}{c}\right)}}{\longrightarrow} \frac{a z+b}{c z+d}$$