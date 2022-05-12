## Conjugacy Class
#Groups 


In a group $G$, two elements $a$ and $b$ are said to be [[conjugate]] if $\exists g\in G$ such that $a=g^{-1}bg$. Conjugacy, as an equivalence relation, forms a [[equivalence class]], namely [[conjugacy class]].

```ad-example
>Find all conjugacy classes in $A_4$.

The conjugacy classes in $A_4$ are $e$ and
$$
\begin{aligned}
\{(12)(34),(13)(24),(14)(23)\}, \\
\{(123),(134),(214),(324)\}, \\
\{(132),(143),(124),(234)\}.
\end{aligned}
$$
**Solution**.Note that
$$
(123)^{-1}(12)(34)(123)=(23)(14), \quad(123)^{-1}(23)(14)(123)=(31)(24) .
$$
Also
$$
(123)^{-1}(134)(123)=(214),
$$
$$
(123)^{-1}(214)(123)=(324), \quad(134)^{-1}(214)(134)=(123) .
$$
As conjugacy in $A_{4}$ implies conjugacy in $S_{4}$ (though not conversely) and a 3-cycle is not [[conjugate]] in $A_{4}$ with its inverse (by the previous example), then the conjugacy classes in $A_{4}$ are as given.
```

### Example: Group with 3 Conjugacy Classes
[[Orbit-Stabilizer Theorem#Example 284]]


### Finding Conjugacy Class in $\large\bf S_n$

> Consider ![[Permutation#Theorem 12]]

```ad-algorithm
`Step 1`	Realising that any two elements of the same [[cycle type]] are [[conjugate]] to each other in $S_n$.
`Step 2`	We claim that the number of conjugacy classes in $S_n$ equals the [[partition]] of $n$.
```

### Lemma: `two elements of the same cycle type are conjugate to each other`
For any $\tau, \sigma \in S_{n}$, since, $\sigma$ is a product of disjoint cycles, let's say for instance, that, cycle decomposition of $\sigma$ is given by
$$
\sigma=\left(\begin{array}{llll}
a_{1} a_{2} & a_{3} & \cdots & a_{k}
\end{array}\right)\left(b_{1} b_{2} b_{3} \cdots b_{l}\right) \cdots
$$
> We claim that $\tau \sigma \tau^{-1}=\left(\tau\left(a_{1}\right) \tau\left(a_{2}\right) \cdots \tau\left(a_{k}\right)\right)\left(\tau\left(b_{1}\right) \tau\left(b_{2}\right) \cdots \tau\left(b_{l}\right)\right) \cdots$

#### Proof
The proof is subtle. Suppose $i \stackrel{\sigma}{\mapsto} j$, we'll prove that $\tau(i) \stackrel{\tau \sigma \tau^{-1}}{\mapsto} \tau(j)$.
Now
$$
\begin{aligned}
\tau \sigma \tau^{-1}(\tau(i)) &=\tau(\sigma(i)) \\
&=\tau(j)
\end{aligned}
$$
This proves the claim. So, the [[cycle type]] of an element and its [[conjugate]] are the same. So, this proves that all elements of the same cycle type are **conjugate** to each other.

So, now, since two elements of the same cycle type are conjugate in $S_n$, we have that they belong to the same [[conjugacy class]]. So, counting the number of cycle types gives you the number of conjugacy classes. So, we have that the number of conjugacy classes is equal to the number of partitions of $n$.

---
<https://math.stackexchange.com/a/102198/891528>

### Conjugacy Classes in An

https://groupprops.subwiki.org/wiki/Splitting_criterion_for_conjugacy_classes_in_the_alternating_group