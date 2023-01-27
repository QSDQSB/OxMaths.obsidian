# Likelihood Ratio Statistic
#Statistics 
```ad-definition
title: Likelihood Ratio Statistic
The statistic $\Lambda(\mathbf{X})$ defined by
$$
\Lambda(\mathbf{X})=-2 \log \lambda(\mathbf{X})
$$
is called the likelihood ratio statistic. In terms of $\Lambda$, the [[Neyman–Pearson lemma|critical region]] of the [[Likelihood ratio test|LRT]] becomes $\{\mathbf{x}: \Lambda(\mathbf{x}) \geqslant c\}$, for some constant $c$.

```
If $H_{0}$ is true then, under the regularity conditions discussed at the end of Section 1.7 (and which we assume from now on), as $n \rightarrow \infty$ we have
$$
\Lambda(\mathbf{X}) \stackrel{D}{\rightarrow} \chi_{p}^{2}
$$
where $p=\operatorname{dim} \Theta-\operatorname{dim} \Theta_{0}$. Here $\operatorname{dim} \Theta$ is the dimension of the whole parameter space, which we can think of as the number of independent parameters in $\Theta$. Similarly, $\operatorname{dim} \Theta_{0}$ is the dimension of $\Theta_{0}$.

For a test with approximate size $\alpha$, we reject $H_{0}$ if and only if $\Lambda(\mathbf{x}) \geqslant c$ where $c$ is such that $P\left(\chi_{p}^{2} \geqslant c\right)=\alpha$. Using notation similar to what we've used before, we might write $c=\chi_{p}^{2}(\alpha)$. The size is approximately $\alpha$ because the distribution is approximately $\chi_{p}^{2}$, assuming that we have a large sample.

---
$$
\Large
\Lambda=-2 \log \lambda=-2 \log \left(\frac{\sup _{H_{0}} L}{\sup _{H_{1}} L}\right)
$$
and, assuming $n$ is large, when $H_{0}$ is true we have $\Lambda \stackrel{\mathrm{D}}{\approx} \chi_{p}^{2}$ where $p=\operatorname{dim} H_{1}-\operatorname{dim} H_{0}$.