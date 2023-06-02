
#ComplexAnalysis  
## Theorem

>Let $X$ be a [[Complete]] metric space and suppose that $S_{1} \supseteq S_{2} \supseteq\cdots$ form a **nested** sequence of non-empty closed sets in $X$ with the property that $\operatorname{diam}\left(S_{n}\right) \rightarrow 0$ as $n \rightarrow \infty$. Then $\bigcap_{n=1}^{\infty} S_{n}$ contains a unique point $a .$

#### Proof
For each $n$, pick $x_{n} \in S_{n}$. We claim that $\left(x_{n}\right)_{n=1}^{\infty}$ is [[Cauchy]]. To see this, let $\varepsilon>0$, and suppose that $N$ is large enough that $\operatorname{diam}\left(S_{N}\right)<\varepsilon$. If $n, m \geqslant N$ then, since the $S_{i}$ are nested, $x_{n}, x_{m} \in S_{N} .$ By the definition of diameter, $d\left(x_{n}, x_{m}\right) \leqslant$ $\operatorname{diam}\left(S_{N}\right)<\varepsilon$.

Since $X$ is [[Complete]], we have $\lim _{n \rightarrow \infty} x_{n}=a$ for some $a$. For each $i$, the **nesting** property of the sets $S_{i}$ implies that we have $x_{n} \in S_{i}$ for all $i \leqslant n$. Therefore, since $S_{i}$ is closed, [[Closure#Corollary 5.1.5]] tells us that $a \in S_{i}$. Since this is true for all $i$, we have $a \in \bigcap_{i=1}^{\infty} S_{i}$.

To show that $a$ is unique, suppose that $b \in \bigcap_{i=1}^{\infty} S_{i}$. Then $d(a, b) \leqslant \operatorname{diam}\left(S_{i}\right)$ for all $i$. Since $\operatorname{diam}\left(S_{i}\right) \rightarrow 0$, we have $d(a, b)=0$ and so $a=b$.