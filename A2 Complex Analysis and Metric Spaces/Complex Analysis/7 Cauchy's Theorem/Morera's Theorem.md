#ComplexAnalysis 

## Theorem 7.17.

```ad-theorem
title: Morera's Theorem
Suppose that $f: U \rightarrow \mathbb{C}$ is a ***continuous*** function on an [[open]] subset $U \subseteq \mathbb{C}$. If for any [[Complex Analysis and Metric Spaces/Chapter 4 Open and Closed Sets/Closed|closed]] [[path]] $\gamma:[a, b] \rightarrow U$ we have $\int_{\gamma} f(z) d z=0$, then $f$ is [[holomorphic]].
```
^theorem

### Proof
By [[Complex Fundamental Theorem of Calculus#Theorem 5.22]] we know that $f$ has a [[Primitive]] $F: U \rightarrow \mathbb{C}$. But then $F$ is [[Holomorphic]] on $U$ and so infinitely [[Complex Differentiable|differentiable]] on $U$, thus in particular $f=F^{\prime}$ is also [[Holomorphic]].

---

### Proof 2: From RE
Let $z_{0} \in U .$ As $U$ is [[Open]] and [[Connected]] then it is [[Path-Connected]] and so for any $z \in U$ there is a [[Path]] $\gamma(z)$ connecting $z_{0}$ to $z$. We will then define
$$
F(z)=\int_{\gamma(z)} f(w) \mathrm{d} w .
$$
Note that if $\gamma_{1}$ and $\gamma_{2}$ are two such paths then $\gamma_{1} \cup\left(-\gamma_{2}\right)$ is a closed [[Path]] and hence by hypothesis
$$
0=\int_{\gamma_{1} \gamma_{2}^{-1}} f(w) \mathrm{d} w=\int_{\gamma_{1}} f(w) \mathrm{d} w-\int_{\gamma_{2}} f(w) \mathrm{d} w
$$
and we see that $F(z)$ is well-defined.
Now take $z_{0} \in U$ and $r>0$ such that $D\left(z_{0}, r\right) \subseteq U$ and $h \in D\left(z_{0}, r\right)$. Then
$$
F\left(z_{0}+h\right)=F\left(z_{0}\right)+\int_{\left[z_{0}, z_{0}+h\right]} f(w) \mathrm{d} w
$$
Hence
$$
\begin{aligned}
\left|\frac{F\left(z_{0}+h\right)-F\left(z_{0}\right)}{h}-f\left(z_{0}\right)\right| &=\left|\left(\frac{1}{h} \int_{\left[z_{0}, z_{0}+h\right]} f(w) \mathrm{d} w\right)-f\left(z_{0}\right)\right| \\
&=\left|\frac{1}{h} \int_{\left[z_{0}, z_{0}+h\right]}\left(f(w)-f\left(z_{0}\right)\right) \mathrm{d} w\right| \\
& \leqslant \frac{1}{|h|}|h| \sup _{\left[z_{0}, z_{0}+h\right]}\left|f(w)-f\left(z_{0}\right)\right| \quad \text { [by the Estimation Theorem] } \\
&=\sup _{\left[z_{0}, z_{0}+h\right]}\left|f(w)-f\left(z_{0}\right)\right| \rightarrow 0 \text { as } h \rightarrow 0 \text { by the continuity of } f \text { at } z_{0} .
\end{aligned}
$$
Hence $F$ is [[Holomorphic]] and $F^{\prime}=f$. By [[Holomorphic#^Corollary-225]] $f$ is [[Holomorphic]].