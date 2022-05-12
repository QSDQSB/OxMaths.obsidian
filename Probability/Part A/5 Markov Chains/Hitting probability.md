## Hitting Probability
#Probability 

### Definition
Let $A$ be a subset of the state space $I .$ Define $h_{i}^{A}=\mathbb{P}_{i}\left(X_{n} \in A\right.$ for some $\left.n \geq 0\right)$, the [[hitting probability]] of $A$ starting from state $i$.
If $A$ is a closed class, we might call $h_{i}^{A}$ the ***absorption probability***.

### Theorem 5.7
The vector of hitting probabilities $\left(h_{i}^{A}, i \in I\right)$ is the minimal non-negative solution to the equations
$$
h_{i}^{A}=\left\{\begin{array}{ll}
1 & \text { if } i \in A \\
\sum_{j} p_{i j} h_{j}^{A} & \text { if } i \notin A
\end{array}\right.
$$
>Here by "minimal" we mean that if $\left(x_{i}, i \in I\right)$ is another non-negative solution to the system, then $h_{i} \leq x_{i}$ for all $i$.

#### Proof
To see that $h_{i}^{A}$ satisfies the system, we condition on the first jump of the process. If $i \notin A$, then
$$
\begin{aligned}
h_{i}^{A} &=\mathbb{P}_{i}\left(X_{n} \in A \text { for some } n \geq 0\right) \\
&=\mathbb{P}_{i}\left(X_{n} \in A \text { for some } n \geq 1\right) \\
&=\sum_{j} \mathbb{P}_{i}\left(X_{1}=j\right) \mathbb{P}\left(X_{n} \in A \text { for some } n \geq 1 \mid X_{0}=i, X_{1}=j\right) \\
&=\sum_{j} p_{i j} \mathbb{P}\left(X_{n} \in A \text { for some } n \geq 1 \mid X_{1}=j\right) \\
&=\sum_{j} p_{i j} h_{j}^{A}
\end{aligned}
$$