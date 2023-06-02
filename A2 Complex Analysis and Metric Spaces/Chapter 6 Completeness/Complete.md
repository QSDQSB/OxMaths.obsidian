#ComplexAnalysis  

## Definition
A [[Metric Space]] is said to be [[Complete]] if every [[Cauchy]] sequence converges.

> The notion of completeness is not (necessarily) preserved under [[Homeomorphism]].

## Lemma 6.2.1
A subspace of a [[Complete]] metric space is [[Complete]] if and only if it is [[A2 Complex Analysis and Metric Spaces/Chapter 4 Open and Closed Sets/Closed|Closed]].

### Proof
Let $X$ be a [[Complete]] metric space and suppose that $Y \subseteq X .$ Suppose first that $Y$ is [[A2 Complex Analysis and Metric Spaces/Chapter 4 Open and Closed Sets/Closed|Closed]]. we will show that it is complete. Let $\left(y_{n}\right)_{n=1}^{\infty}$ be a [[Cauchy]] sequence in $Y$. Then it is also a Cauchy sequence in $X$. Since $X$ is complete, it converges, say $\lim _{n \rightarrow \infty} y_{n}=a .$ By Corollary 5.1.5, $a \in Y$.

In the other direction, suppose that $Y$ is complete. Let $\left(y_{n}\right)_{n=1}^{\infty}$ be a sequence of elements of $Y$ with $\lim _{n \rightarrow \infty} y_{n}=a$. Then $\left(y_{n}\right)_{n=1}^{\infty}$ is certainly a Cauchy sequence, and so by completeness it has a subsequence which converges to an element of $Y$. Since this subsequence must also converge to $a$, it follows that $a \in Y$. By Corollary 5.1.5, $Y$ is closed..

![[Cantor's Intersection Theorem]]

---

## Completeness of Function Spaces

### Theorem 6.3.1
Let $X$ be a set and let $B(X)$ denote the normed vector space of bounded functions $f: X \rightarrow \mathbf{R}$, with [[Norm]] $\|f\|_{\infty}=\sup _{x \in X}|f(x)|$. Then $B(X)$ is [[Complete]].

### Theorem 6.3.2
Let $X$ be a metric space and let $C_{b}(X)$ denote the normed vector space of bounded [[Continuous]] functions $f: X \rightarrow \mathbf{R}$,  with norm $\|f\|_{\infty}=\sup _{x \in X}|f(x)|$. Then $C_{b}(X)$ is complete.

> Proof Firstly by [[#Theorem 6.3.1]] and then by [[#Lemma 6.2.1]].