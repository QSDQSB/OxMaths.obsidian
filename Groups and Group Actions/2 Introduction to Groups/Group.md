## Group
 #Groups 
### Definition
A group is a set $G$ together with a [[Binary Operation]] $*$ on $G$ such that
1) $*$ is [[associative]];
2) there is an [[identity]];
3) each element of $G$ has an [[inverse]].

>Conditions (i), (ii) and (iii) are collectively called the **group axioms**.

>We write the group as $(G, *)$, or simply as $G$ when the operation is clear.

>We often write the operation multiplicatively: when it will not be ambiguous, we write $g h$ for $g * h$, and $g^{n}$ for $\underbrace{g g g \cdots g}_{n \text { times }}($ for $n \geq 1)$. 

>With this convention, we write $g^{-1}$ for the [[Inverse]] element of $g$, so $g^{-1} g=e=g g^{-1}$. (Do not use this notation if the operation is **addition**, when for example the inverse of $g$ is $-g$.)

>we must also ensure that $∗$ is a **[[Binary Operation]]** on $G$, which in practice often means checking that $G$ is [[Groups and Group Actions/2 Introduction to Groups/Closed]] under $∗$.

### Proposition 3
Let $G$ be a group. Let $g, g_{1}, g_{2}, g_{3} \in G$, let $m, n \in \mathbb{Z}$.Then

1) $\left(g_{1}g_{2}\right)^{-1}=g_{2}^{-1}g_{1}^{-1}$
2) $\left(g^{n}\right)^{-1}=\left(g^{-1}\right)^{n};$
3) $g^{m} g^{n}=g^{m+n}$;
4) $\left(g^{m}\right)^{n}=g^{m n} ;$
5) if $g_{1} g_{2}=g_{1} g_{3}$, then $g_{2}=g_{3}$ ('cancellation on the left');
6) if $g_{1} g_{2}=g_{3} g_{2}$, then $g_{1}=g_{3}$ ('cancellation on the right').

---
