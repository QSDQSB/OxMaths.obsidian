## Derivation of 1-D Heat Equation
#FSPDE 

Consider a rigid isotropic conducting rod (e.g. metal) of constant `cross-sectional area` ==$A$== lying along the $x$-axis. We shall consider **conservation of thermal or heat energy** in the arbitrary section of the rod in $a \leq x \leq a+h$, where ==$a$== and ==$h$== are constants. The geometric setup is as illustrated in the schematic below.
![Geometric Setup Heat Equation | 400](FSPDE-32.png)

Assume that the **lateral surfaces of the rod are insulated**, so that no thermal energy can be transported through them and the absolute `temperature` ==$T$== may be taken to be a function of `distance` $x$ along an axis of the rod and `time` ==$t$==. This assumption is applicable if the rod is long and thin, like a wire.

We denote by ==$\rho$== the `density` of the rod and by ==$c_{v}$== the `specific heat` of the rod, and we assume that these material parameters are **constant**. The specific heat $c_{v}$ of a material is *the energy required to heat up a kilogram by one degree kelvin*, 

---
so the `thermal energy` in the section of the rod in $a \leq x \leq a+h$ is given by
$$
A \int_{a}^{a+h} \rho c_{v} T(x, t) \mathrm{d} x
$$
Denote the `heat flux` ==$q(x, t)$== in the positive $x$-direction, to be *the rate at which thermal energy is transported through a cross-section of the rod at station $x$ at time $t$ in the positive $x$-direction per unit cross-sectional area per unit time*, i.e. the rate of flow of thermal energy along the rod. By definition, **the rate at which thermal energy enters the section through its left-hand cross-section** in the plane $x=a$ is ==$A q(a, t)$==. Similarly, **the rate at which thermal energy leaves the section through the right-hand cross-section** in the plane $x=a+h$ is ==$A q(a+h, t)$==. Hence, with our sign convention on the heat flux, the net rate at which thermal energy enters the section is
$$
\large
A q(a, t)-A q(a+h, t)
$$
Assuming insulated lateral surfaces and no external heating $($ e.g. due to microwave heating), [[conservation of energy]] states that **the rate of change of the thermal energy in the section is equal to the net rate at which thermal energy enters the section**, so that
$$
\large
\underbrace{\frac{\mathrm{d}}{\mathrm{d} t}\left(A \int_{a}^{a+h} \rho c_{v} T(x, t) \mathrm{d} x\right)}_{(1)}=\underbrace{A q(a, t)}_{(2)}-\underbrace{A q(a+h, t)}_{(3)}
$$
where we have labeled the three terms in order to summarize their ***physical significance*** as follows:
1) is the time rate of change of thermal energy in the section in $a \leq x \leq a+h$;
2) is the rate at which thermal energy enters the section through $x=a$;
3) is the rate at which thermal energy leaves the section through $x=a+h$.

Assuming $T_{t}$ is **continuous**, [[Leibniz's Integral Rule]] with $a$ and $a+h$ constant gives
$$
\frac{\rho c_{v}}{h} \int_{a}^{a+h} T_{t}(x, t) \mathrm{d} x+\frac{q(a+h, t)-q(a, t)}{h}=0
$$
where we have also rearranged into a form that will enable us to take the limit $h \rightarrow 0$.

To take the limit $h \rightarrow 0$ we apply the [[First Fundamental Theorem of Calculus]] to the first term (assuming $T_{t}$ is continuous in a neighbourhood of $a$) and use the definition of the partial derivative of $q$ with respect to $x$ (assuming it to exist and to be continuous at $a$ ), to obtain the partial differential equation
$$
\large
\rho c_{v} T_{t}+q_{x}=0
$$
which relates the **time rate of change of the temperature** and the **spatial rate of change of the heat flux**.

To close our model for heat conduction we will adopt [[Fourier's Law]], which is is the constitutive law given by 
$$
q=-k T_{x}
$$
where $k$ is the *thermal conductivity* of the rod, which is another material parameter that we take to be **constant**.

```ad-comment
The minus sign in [[Fourier's law]] means that thermal energy flows **down** the temperature gradient, i.e. from high to low temperatures.
Physical experiments confirm that this is an excellent approximation in many practical applications. We note that a good conductor of heat (such as silver) will have a higher thermal conductivity than a poor conductor of heat (such as glass).
```

Finally we arrive at the heat equation
$$
\Large
\frac{\partial T}{\partial t}=\kappa \frac{\partial^{2} T}{\partial x^{2}}
$$
where the `thermal diffusivity` $\kappa=k /\left(\rho c_{v}\right)$.