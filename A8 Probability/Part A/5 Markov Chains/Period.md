#Probability 

## Definition
For a general chain and a state $i \in I$, the [[Period]] of the state $i$ is defined to be the *greatest common divisor* of the set $\left\{n \geq 1: p_{i i}^{(n)}>0\right\}$. (If $p_{i i}^{(n)}=0$ for all $n>0$, then the period is not defined).

$i$ is called ***aperiodic*** if this g.c.d. is 1 (and otherwise periodic). Equivalently (check!), $i$ is ***aperiodic*** if $p_{i i}^{(n)}>0$ for all sufficiently large $n$.

## Proposition 5.6
> All states in a [[Communicating Class]] have the same [[Period]].

### Proof
Suppose $i \leftrightarrow j$ and $d \mid n$ whenever $p_{i i}^{(n)}>0$.
Since $i$ and $j$ communicate, we can find $a$ and $b$ with $p_{i j}^{(a)}>0$ and $p_{j i}^{(b)}>0$. Then also $p_{i i}^{(a+b)}>0$.

Suppose $p_{j j}^{(m)}>0 .$ Then also $p_{i i}^{(a+m+b)}>0$.

Then $d \mid a+b$ and $d \mid a+m+b$, so also $d \mid m$.

This demonstrates that the sets $\left\{n \geq 1: p_{i i}^{(n)}>0\right\}$ and $\left\{m \geq 1: p_{j j}^{(m)}>0\right\}$ have the same divisors, and hence the same greatest common divisor.
#Q