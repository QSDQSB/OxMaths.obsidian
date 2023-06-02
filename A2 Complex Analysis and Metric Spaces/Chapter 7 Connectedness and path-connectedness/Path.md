#ComplexAnalysis  

## Definition
A continuous map $\gamma:[0,1] \rightarrow X$ is called a [[Path]].

## Concatenation
Given two paths $\gamma_{1}, \gamma_{2}$ in $X$ such that $\gamma_{1}(1)=\gamma_{2}(0)$ we can form the concatenation $\gamma_{1} \star \gamma_{2}$ of the two paths to be the path
$$
\gamma_{1} \star \gamma_{2}(t)=\left\{\begin{array}{cc}
\gamma_{1}(2 t), & 0 \leqslant t \leqslant 1 / 2 \\
\gamma_{2}(2 t-1), & 1 / 2 \leqslant t \leqslant 1
\end{array}\right.
$$

## Opposite
If $\gamma:[0,1] \rightarrow X$ is a [[Path]], then the opposite [[Path]] $\gamma^{-}$is defined by $\gamma^{-}(t)=$ $\gamma(1-t)$

```ad-note
If $\gamma$ is a path, we will write ==$\gamma^{*}$== for its image, that is
$$
\gamma^{*}=\{z \in \mathbb{C}: z=\gamma(t), \text { some } t \in[a, b]\}
$$
```

## Examples
#### Circle
The most basic example of a closed curve is a **circle**: If $z_{0} \in \mathbb{C}$ and $r>0$ then the path $z(t)=z_{0}+r e^{2 \pi i t}$ (for $t \in[0,1]$ ) is the simple closed [[Path]] with ***positive orientation*** encircling $z_{0}$ with radius $r$. The path $\tilde{z}(t)=z_{0}+r e^{-2 \pi i t}$ is the simple closed path encircling $z_{0}$ with radius $r$ and ***negative orientation***.