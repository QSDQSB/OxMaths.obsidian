## Linearized Equation of Motion
#Dynamics
### Motion near an equilibrium point $x=x_e$
Expanding Newton's second law around $x=x_e$, assuming $F(x)$ is suitably smooth and using $F\left(x_{e}\right)=0$ yields
$$
\begin{aligned}
m \ddot{x}&= F(x)=F\left(x_{e}\right)+\left(x-x_{e}\right) F^{\prime}\left(x_{e}\right)+O\left(\left(x-x_{e}\right)^{2}\right) \qquad \color{gray}\textbf{(3.14)}
\\
&=\left(x-x_{e}\right) F^{\prime}\left(x_{e}\right)+O\left(\left(x-x_{e}\right)^{2}\right) \\
\end{aligned}
$$
where $O\left(\left(x-x_{e}\right)^{2}\right)$ means higher order terms, which are not larger than $$\text { Constant }\times\left(x-x_{e}\right)^{2}$$
for $x$ sufficiently close to $x_{e}$.
We change variables to $\xi \equiv x-x_{e},$ so that the equilibrium point is now at $\xi=0$.
Assuming we are sufficiently close to the latter, so that the higher order terms in [(3.14)](Equilibrium.md) are small, we have the approximate linear differential equation for $\xi$ : $$m \ddot{\xi}=F^{\prime}\left(x_{e}\right) \xi \qquad\text{(3.16)}$$  
### Definition
Equation (3.16) is called the [[Linearized Equation of Motion]] and its solutions are labelled as *Linearized Solutions*.
For any point of equilibrium in one spatial dimension there are three qualitatively different cases for the behaviour of the linearized solutions, depending on the sign of the constant $$K \equiv-F^{\prime}\left(x_{e}\right).\qquad\text{(3.17)}$$

- $K>0$
With $\omega=\sqrt{K / m}>0$ we have the simple harmonic oscillator equation $$\ddot{\xi}+\omega^{2} \xi=0.$$
The general solution is $\xi(t)=A \cos (\omega t+\phi)$ and $\xi=0$ is a point of **stable [[ equilibrium]]**.
For amplitude $A$ small enough so that it is consistent to ignore the higher order terms in the expansion of the force [(3.14)](Equilibrium.md), the system executes small oscillations around the equilibrium point.
The frequency of these oscillations is $\omega$.
- $K<0$
With $p=\sqrt{-K / m}>0$. the linearized equation of motion *(3.16)* now reads
$$\ddot{\xi}-p^{2} \xi=0$$
with general solution $$\xi(t)=A \mathrm{e}^{p t}+B \mathrm{e}^{-p t}.$$
where $A$ and $B$ are integration constants.
A generic small displacement and small velocity for the system at time $t=0$ will have both $A$ and $B$ non-zero, and the solution grows exponentially with $t,$ for both $t>0$ and $t<0$
Such equilibria are hence termed $\color{orange}\textbf{unstable}$.
The higher order terms in the Taylor expansion, which we ignored, quickly become relevant.
- $K=0$
Finally, if $K=0$ the first two terms in the Taylor expansion in [(3.14)](Equilibrium.md) are zero, and we need to expand to higher order to determine what happens.

Rephrase all of the above discussion in terms of [[Potential Energy]]. We similarly expand
$$
V(x)=V\left(x_{e}\right)+\left(x-x_{e}\right) V^{\prime}\left(x_{e}\right)+\frac{1}{2}\left(x-x_{e}\right)^{2} V^{\prime \prime}\left(x_{e}\right)+O\left(\left(x-x_{e}\right)^{3}\right)
$$
Without loss of generality we may choose the arbitrary additive constant in $V$ so that $V\left(x_{e}\right)=0 .$ Moreover, $V^{\prime}\left(x_{e}\right)=-F\left(x_{e}\right)=0 .$ This means that **near equilibrium the potential is approximately quadratic**:
$$V_{\text {quad }}(x)=\frac{1}{2} K\left(x-x_{e}\right)^{2},$$
where $K=V^{\prime \prime}\left(x_{e}\right)=-F^{\prime}\left(x_{e}\right),$ as in (3.17)
A stable equilibrium point with $K>0$ is then a local minimum of the potential, while an unstable equilibrium point with $K<0$ is a local maximum.

### Example
#PastPaper
A bead of mass $m$ slides along a smooth, straight horizontal wire which passes through the origin $O$. The bead is attached to a light, straight elastic spring of natural length $l$ and spring constant $k,$ and the other end of the spring is attached to a fixed point $P$, which is a distance $d$ vertically above $O$.
(i) If $x$ denotes the coordinate of the bead, relative to $O$, explain why the tension in the spring is $\mathbb{T}=k\left(\sqrt{d^{2}+x^{2}}-l\right),$ and show that
$$
\ddot{x}=\frac{k}{m} x\left(\frac{l}{\sqrt{d^{2}+x^{2}}}-1\right).\quad\text{(3.22)}
$$
(ii) Find the equilibrium solutions of this equation, and determine whether they are stable or unstable, distinguishing carefully between the two cases $l<d$ and $l>d$
![Figure 6|250](Dynamics_24.png)
<center style="font-size:14px;color:#03a4f2;text-decoration:underline">Figure 6: The spring-bead system. The bead of mass m is constrained to move along the x axis.</center> 

#### Solution
##### (i)
>
The spring is depicted in Fig.6 ; its extension from natural length is $\sqrt{d^{2}+x^{2}}-l$.
Thus $\mathbb{T}=k\left(\sqrt{d^{2}+x^{2}}-l\right),$ by [[Hooke's law]].
Resolving Newton's second law in the $x$ direction gives $$m\ddot{x}=-\mathbb{T}\cos\theta=-\frac{\mathbb{T} x}{\sqrt{d^{2}+x^{2}}}=-k x\left(1-\frac{l}{\sqrt{d^{2}+x^{2}}}\right) \equiv F(x)\quad\text{(3.23)}$$
Dividing both sides by $m$ gives the required gives the equation of motion.
##### (ii)
>
>Equilibrium solutions have the right hand side of (3.23) equal to zero, namely $F\left(x_{e}\right)=0$ where
$$F(x)=k x\left(\frac{l}{\sqrt{d^{2}+x^{2}}}-1\right).$$
The zeros are at $x_{e}^{0}=0$ and where $l=\sqrt{d^{2}+\left(x_{e}^{\pm}\right)^{2}}$ so that $x_{e}^{\pm}=\pm \sqrt{l^{2}-d^{2}}$. The latter makes sense only if $l \geq d$.
Note also that the configuration is symmetric under taking $x \mapsto-x$, so the behaviour of the two equilibria $x_{e}^{\pm}$ is the same.
With $$F^{\prime}(x)=k\left(\frac{l}{\sqrt{d^{2}+x^{2}}}-1\right)-\frac{x^{2} k l}{\left(d^{2}+x^{2}\right)^{3 / 2}},$$
we have$$F^{\prime}\left(x_{e}^{0}\right)=F^{\prime}(0)=k\left(\frac{l}{d}-1\right).$$
Hence the equilibrium at $x_{e}^{0}=0$ is stable if $l<d$ and unstable if $l>d$.
On the other hand $$F^{\prime}\left(x_{e}^{\pm}\right)=-\frac{\left(x_{e}^{\pm}\right)^{2} k l}{\left(d^{2}+\left(x_{e}^{\pm}\right)^{2}\right)^{3 / 2}}<0,$$
so that $K>0$.
Hence $x_{e}^{\pm}$ only exist as equilibria when $l>d,$ and if they exist, they are stable.