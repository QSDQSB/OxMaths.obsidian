#InfoTheory

## Definition
One way to motivate the definition of [[Entropy]], is to think of $H(X)$ as a measure of the average uncertainty we have about the value of $X$ : the less certain we are, the bigger $H(X)$. To see this, we first derive a function $s(A)$ to measure the "surprise" of observing the event $\{X \in A\}$ for a set $A \subset \mathcal{X}$. It seems to natural to demand that

1) $s(A)$ depends continuously on $\mathbb{P}(X \in A)$,
2) $s(A)$ is decreasing in $\mathbb{P}(X \in A)$,
3) $s(A \cap B)=s(A)+s(B)$ for $\mathbb{P}(X \in A \cap B)=\mathbb{P}(X \in A) \mathbb{P}(X \in B)$, i.e., the **surprise** about the occurrence of two independent events $\{X \in A\},\{X \in B\}$ is the sum of the surprises of each of these events.

Using that $\mathbb{P}(X \in A \cap B)=\mathbb{P}(X \in A) \mathbb{P}(X \in B)$, it follows that ==$s(A)=-\log (\mathbb{P}(A)$== fulfills these properties and is the unique function with these properties (up to choice of a multiplicative constant and base of the logarithm).

In some books, $s(A)$ is also called the [[Shannon Information]] content of the outcome $A$. Hence, we can regard the entropy $H(X)$ as the ***average surprise*** over the events $\{X=x\}$ for $x \in \mathcal{X}$.