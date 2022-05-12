#ProblemSheet 
## Main Course
1. (i) Let $x, n$ be integers with $n \geqslant 2$ and $n$ not dividing $x$. Show that the order $o(\bar{x})$ of $\bar{x} \in \mathbb{Z}_{n}$ is
$$
o(\bar{x})=\frac{n}{\operatorname{hcf}(x, n)}
$$
(ii) Let $G, H$ be finite groups with $g \in G$ and $h \in H .$ Show that the order of $(g, h)$ in $G \times H$ is given by
$$
o((g, h))=\operatorname{lcm}\{o(g), o(h)\} .
$$
2. $\bar{x} \in \mathbb{Z}_{n}$ is said to be a unit if there exists $\bar{y} \in \mathbb{Z}_{n}$ such that $\bar{x} \bar{y}=\overline{1}(\bmod n)$.
(i) Show that the units of $\mathbb{Z}_{n}$ form a group under multiplication. We denote this group $\mathbb{Z}_{n}^{*}$.
(ii) Use Bézout's Lemma to show that $\bar{x}$ is a unit of $\mathbb{Z}_{n}$ if and only if $\operatorname{hcf}(x, n)=1$.
(iii) List the units in $\mathbb{Z}_{9}$ and write out the Cayley table for $\mathbb{Z}_{9}^{*}$.
(iv) Show that $\mathbb{Z}_{9}^{*}$ is cyclic. What are the generators of $\mathbb{Z}_{9}^{*}$ ?
3. (i) Use [[Fermat's Little Theorem]] to compute $5^{15}(\bmod 7)$ and $7^{13}(\bmod 11)$.
(ii) Use the [[Lagrange's Theorem#Fermat-Euler Theorem]] to compute $4^{43}(\bmod 15)$ and $2^{51}(\bmod 21)$.
(iii) Show that $5^{14}=10(\bmod 15)$. (You might try to find $5^{14}$ modulo 3 and modulo 5 first.)
4. Let $p$ be a prime and let $g, h$ be elements, both of order $p$, in a group $G$. What are the possible orders of $\langle g\rangle \cap\langle h\rangle ?$
Show that if $G$ is finite then the number of elements of order $p$ in $G$ is a multiple of $p-1$.
Deduce that a group of order 35 contains an element of order 5 and an element of order 7 .
5. Suppose that every element $x$ in a group $G$ satisfies $x^{2}=e$. Prove that $G$ is Abelian.
Show also that if $H$ is any subgroup of $G$ and $g \in G \backslash H$ then $K=H \cup g H$ is a subgroup of $G$.
Show further that $K$ is isomorphic to $H \times C_{2}$.
**Deduce that if $G$ is finite then $G$ is isomorphic to $\left(\mathbb{Z}_{2}\right)^{n}$ for some non-negative integer $n$.** ^3802d7
6. Let $G_{1}$ and $G_{2}$ be finite groups and let $K \leqslant G_{1} \times G_{2}$.
(i) Set $H_{1}=\left\{g \in G_{1}:(g, e) \in K\right\}$ and $H_{2}=\left\{g \in G_{2}:(e, g) \in K\right\}$. Show that
$$
H_{1} \leqslant G_{1} ; \quad H_{2} \leqslant G_{2} ; \quad H_{1} \times H_{2} \leqslant K
$$
(ii) Suppose that $\left|G_{1}\right|$ and $\left|G_{2}\right|$ are coprime. Show that $K=H_{1} \times H_{2}$.
(iii) Show that this result need not follow if $\left|G_{1}\right|$ and $\left|G_{2}\right|$ are not coprime.
