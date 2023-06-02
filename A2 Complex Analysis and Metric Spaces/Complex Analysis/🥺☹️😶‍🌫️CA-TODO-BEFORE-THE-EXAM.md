#### TO SAVE COMPLEX ANALYSIS IN ONE NIGHT
#ComplexAnalysis #MostCrucial 
 ![[Cauchy-Riemann equations#^theorem]]
 Easy
 
 ![[Complex Chain Rule#^theorem]]
By noting we can write $F$ as $F(z)=F\left(z_{0}\right)+F^{\prime}\left(z_{0}\right)\left(z-z_{0}\right)+\epsilon(z)\left(z-z_{0}\right)$.

![[Complex Fundamental Theorem of Calculus#^theorem]]
Use [[Complex Chain Rule]].

![[Estimation Lemma#^lemma]]
Use [[Complex Chain Rule]].

 ![[Morera's Theorem#^theorem]] 
 Consider $F=\int_\gamma f$ and show ${1\over h}\int_{[z_0,z_0+h]} f(z) dz-f(z_0)\to 0$ as $h\to0$.
 
 ![[Liouville's theorem#^theorem]]
Consider $|f(w)-f(0)| =\left|\frac{1}{2 \pi i} \int_{\gamma_{R}} f(z)\left(\frac{1}{z-w}-\frac{1}{z}\right) d z\right|$ then as $R\to\infty$ $f(w)=f(0)$.

 ![[Cauchy's Integral Formula#^formula]]
Consider a  big circle around $a$ whose integral equals small circle as the line integral vanishes. Show that the integral around small circle $\gamma(w,\epsilon)$ goes to $f(w)$ by subtracting and adding a term $f(w)\over z-w$ and finally use continuity.

![[Cauchy's Integral Formula#Corollary 7.11 derivative of f(z)]]
 notes摆烂我也摆
 
![[Cauchy's theorem for a triangle#^theorem]]
Key points: ==1== Divide and conquer by four triangles. ==2== Length shrinks by $2^{-k}$ (=) but the integral shrinks by $4^k$ (≥) ==3== Around $z_0$ we have $f(z)=f\left(z_{0}\right)$+$f^{\prime}\left(z_{0}\right)\left(z-z_{0}\right)$+$\left(z-z_{0}\right) \psi(z)$ where $\psi(z)\to0=\psi(z_0)$. ==4== Integrating both side along the triangle, two linear terms on the right vanishes. ==5== $z-z_0$ is bounded by diameter.

 ![[Cauchy's theorem for a star-like domain#^theorem]]
Aim to show $f$ has a [[Primitive]]. Consider an integral along a line $F(z)=\int_{\gamma_{z}} f(\zeta) d \zeta$. Then for $w$ close to $z$  use [[Cauchy's theorem for a triangle]]. Finally consider $\left|\frac{F(z)-F(w)}{z-w}-f(z)\right|$

![[Identity Theorem#Theorem 8 3]]
In RE use [[Taylor's Theorem]] to prove equivalence.
In the new notes,  we firstly note that zeroes of a holomorphic function is either isolated or contained in an open ball. Let $S=\{g^{-1}(0)\}$ and note that $S=\operatorname{int}(S)$$\cup$$\{\text{isolated zeroes of S}\}$. $S$ is closed in $U$ as $g$ continuous. $\operatorname{int}(S)$ is open. Consider the closure of $\operatorname{int}(S)$ should be closed, but it is also open. Then use connectedness.

![[Laurent's Theorem#^Laurent-theorem]]
证明狗都不背

![[Residue Theorem#^theorem]]
Write $f$ as its Laurent series at every singularity and note that all the other integral vanishes except $c_{-1}$.

 ![[Jordan's Lemma#^theorem]]
Bound $f$ by $\epsilon$. Bound $\sin(t)$ by $\sin (t) \geq \frac{2}{\pi} t$ and similarly in the second quadrant.

![[Argument Principle#^theorem]]

![[Rouche's Theorem#^theorem]]

它敢考这两个证明我就在卷子上画一坨💩。