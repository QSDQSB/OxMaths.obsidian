#PMM 
## Theorem

```ad-theorem
title: Radon-Nikodym Theorem
Let $\mu, v$ be two probability measures on a [[Measure Space (PMM)|measurable space]] $(\Omega, \mathscr{F})$. Then $v \ll \mu$ if and only if there exists a non-negative [[Measurable Function|random variable]] $f$ such that
$$
v(A)=\int_A f \mathrm{~d} \mu, \quad A \in \mathscr{F} .
$$
The function $f$ is often denoted $\frac{\mathrm{d} v}{\mathrm{~d} \mu}$ and is called the *Radon-Nikodym derivative of $v$* w.r.t. $\mu$. Further, $v \sim \mu$ if and only if $f>0\,\, \mu$-a.s. (and then also $v$-a.s.) in which case $\frac{\mathrm{d} \mu}{\mathrm{d} v}=\frac{1}{f}$.
```