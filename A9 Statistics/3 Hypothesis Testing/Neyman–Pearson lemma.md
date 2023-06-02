---
aliases: [NP lemma,critical region,most powerful test]
---
#Statistics 

Consider testing a **simple** null hypothesis against a **simple** alternative:
$$
H_{0}: \theta=\theta_{0} \quad \text { against } \quad H_{1}: \theta=\theta_{1} . \quad (*)
$$

Suppose we choose a small ==type I error== probability $\alpha$ (e.g. $\alpha=0.05)$. (this is the size of the test)
```ad-theorem
title: Neyman-Pearson Lemma
Let $L(\theta ; \mathbf{x})$ be the likelihood. Define the ==critical region== $C$ by
$$
C=\left\{\mathbf{x}: \frac{L\left(\theta_{0} ; \mathbf{x}\right)}{L\left(\theta_{1} ; \mathbf{x}\right)} \leqslant k\right\}
$$
and suppose the constants $k$ and $\alpha$ are such that $P\left(\mathbf{X} \in C \mid H_{0}\right)=\alpha$. Then among all tests of $(*)$ of size $\leqslant \alpha$, the test with critical region $C$ has maximum ==power==.
```

Equivalently: the test with critical region $C$ minimises the probability of a type II error.
- $k$ cannot depend on $\bf{x}$, but can depend on $n$, $\sigma$ (any know parameters) etc.

### Proof
Consider any test of size $\leqslant \alpha$, with a critical region $A$ say. Then we have
$$
P\left(\mathbf{X} \in A \mid H_{0}\right) \leqslant \alpha .
\quad\color{yellow}\text{(3.2)}
$$
^Equation3-2

The critical region $C$ is one possible $A$. Define
$$
\phi_{A}(\mathbf{x})=\left\{\begin{array}{ll}
1 & \text { if } \mathbf{x} \in A \\
0 & \text { otherwise }
\end{array}\right.
$$
and let $C$ and $k$ be as in the statement of the theorem. Then
$$
0 \leqslant\left\{\phi_{C}(\mathbf{x})-\phi_{A}(\mathbf{x})\right\}\left[L\left(\theta_{1} ; \mathbf{x}\right)-\frac{1}{k} L\left(\theta_{0} ; \mathbf{x}\right)\right]
$$
since $\{\ldots\}$ and $[\ldots]$ are both $\geqslant 0$ if $\mathbf{x} \in C$, and both $\leqslant 0$ if $\mathbf{x} \notin C$.

So
$$
\begin{aligned}
0 \leqslant & \int_{\mathbb{R}^{n}}\left\{\phi_{C}(\mathbf{x})-\phi_{A}(\mathbf{x})\right\}\left[L\left(\theta_{1} ; \mathbf{x}\right)-\frac{1}{k} L\left(\theta_{0} ; \mathbf{x}\right)\right] d \mathbf{x} \\
=& P\left(\mathbf{X} \in C \mid H_{1}\right)-P\left(\mathbf{X} \in A \mid H_{1}\right) \\
&-\frac{1}{k}\left[P\left(\mathbf{X} \in C \mid H_{0}\right)-P\left(\mathbf{X} \in A \mid H_{0}\right)\right]\quad\color{yellow}{\text{(3.3)}}
\end{aligned}
$$
Now $P\left(\mathbf{X} \in C \mid H_{0}\right)=\alpha$, so $[\ldots]$ in $(3.3)$ is $\geqslant 0$ by [(3.2)](#^Equation3-2). Hence
$$
0 \leqslant P\left(\mathbf{X} \in C \mid H_{1}\right)-P\left(\mathbf{X} \in A \mid H_{1}\right)
$$
Thus $P\left(\mathbf{X} \in C \mid H_{1}\right) \geqslant P\left(\mathbf{X} \in A \mid H_{1}\right)$, i.e. the power of the test is maximised by using critical region $C$.

## Most Powerful Test
The test given by the [[Neyman–Pearson lemma|NP lemma]] is the ***most powerful test*** of (∗).

```ad-definition
title: Uniformly most powerful test

Consider testing the simple $H_{0}: \theta=\theta_{0}$ against the composite alternative $H_{1}: \theta \in$ $\Theta_{1}$
Let $\theta_{1} \in \Theta_{1}$.
When testing the simple null $\theta=\theta_{0}$ against the simple alternative $\theta=\theta_{1}$, the critical region from the NP lemma may be the same for all $\theta_{1} \in \Theta_{1}$. If this holds then $C$ is said to be ==uniformly most powerful== (UMP) for testing $H_{0}: \theta=\theta_{0}$ against $H_{1}: \theta \in \Theta_{1}$.
```