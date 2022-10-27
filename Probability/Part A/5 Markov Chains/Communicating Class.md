## Markov Chain's Class Structures
#Probability 

### Communicating Class
Let $i, j \in I$. We say that " $i$ leads to $j$ " and write " $i \rightarrow j$ " if $\mathbb{P}_{i}\left(X_{n}=j\right)>0$ for some $n \geq 0$, i.e. $p_{i j}^{(n)}>0$ for some $n \geq 0$.
If $i \rightarrow j$ and $j \rightarrow i$ then we say *$i$ communicates with $j$*  and write $i \leftrightarrow j$.
Then $\leftrightarrow$ is an [[equivalence relation]]. It partitions the state space $I$ into communicating classes.

### Closed Class
A class $C$ is called closed if $p_{i j}=0$ whenever $i \in C, j \notin C$, or equivalently $i \not\rightarrow j$ for any $i \in C, j \notin C .$ Once the [[Markov chain|chain]] enters a closed class, it can never escape from it. If $\{i\}$ is a closed class then $p_{i i}=1$, and $i$ is called an ***absorbing state***. If $C$ is not closed it is called open.

### Irreducible
A [[transition matrix]] for which $I$ consists of a single communicating class is called ***irreducible***. Equivalently, $i \rightarrow j$ for all $i, j \in I$.