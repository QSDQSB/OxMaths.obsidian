## Chinese Remainder Theorem
#Groups 

>Let $m, n$ be coprime positive integers. Then [$C_{m} \times C_{n}$](Product%20Group) is [[cyclic]], and is [isomorphic](Isomorphism.md) to $C_{m n}$.

### Proof
Say $C_{m}=\langle g\rangle$ and $C_{n}=\langle h\rangle .$
> **Claim**. $\rm(g, h) \in C_{m} \times C_{n}\,\textrm{has order }\textbf{mn}.$
**Proof of claim** 
We have $\left.(g, h)^{m n}=\left(\left(g^{m}\right)^{n},\left(h^{n}\right)^{m}\right)\right)=(e, e)$, so the order of $(g, h)$ is at most $m n$. 
Also, for any $k \in \mathbb{Z}^{>0}$ if $(g, h)^{k}=(e, e)$ then $g^{k}=e$ and $h^{k}=e$.
So $m \mid k$ and $n \mid k$, by [Lemma 23](Generator.md#Lemma%2023). 
Since $m$ and $n$ are coprime, by ***Bézout*** there are integers $a$ and $b$ such that $$am+b n=1.$$Then $a k m+b k n=k$, and both terms on the left are divisible by $m n$, so $m n \mid k$, so $k \geq m n$.
So the order of $(g, h)$ is $m n$, which proves the claim. 

Now $\left|C_{m} \times C_{n}\right|=m n$, so $C_{m} \times C_{n}$ is a group of order $m n$ containing an element with order $m n$, so $C_{m} \times C_{n}$ is [[Cyclic]] and $C_{m} \times C_{n} \cong C_{m n}$.