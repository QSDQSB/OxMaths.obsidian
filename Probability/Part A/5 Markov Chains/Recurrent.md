## Recurrent
#Probability 

### Definition
If the [[Markov chain|chain]] starts in state $i$, what is the chance that it returns to $i$ at some point in the future? We can distinguish two possibilities:
1)  
$$
\mathbb{P}_{i}\left(X_{n}=i \text { for some } n \geq 1\right)=p<1
$$
Then the total number of visits to $i$ has geometric distribution with parameter $1-p$ (since each time we return to $i$, we have chance $1-p$ of never returning again). We have
$$
\mathbb{P}_{i}(\text { hit } i \text { infinitely often })=0
$$
The state $i$ is called ***transient***.

2) 
$$
\mathbb{P}_{i}\left(X_{n}=i \text { for some } n \geq 1\right)=1
$$
Then
$$
\mathbb{P}_{i}(\text { hit } i \text { infinitely often })=1
$$
The state $i$ is called [[recurrent]].

### Theorem 5.8
State $i$ is [[recurrent]] if and only if $\sum_{n=0}^\infty p_{ii}^{(n)}=\infty$.

### Proposition 5.9
1) Let $C$ be a [[communicating class]]. Either all states in $C$ are [[recurrent]], or all are ***transient*** (so we may refer to the whole class as transient or recurrent).
2) Every recurrent class is [[Groups and Group Actions/2 Introduction to Groups/Closed]]. Every finite closed class is [[recurrent]].