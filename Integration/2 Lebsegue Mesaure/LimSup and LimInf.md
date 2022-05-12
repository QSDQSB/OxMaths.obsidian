## LimSup and LimInf
#Integration
### Definition
For a sequence $\left(a_{n}\right)$ in $[-\infty, \infty]$, define
$$
\begin{aligned}
\limsup _{n \rightarrow \infty} a_{n} &=\lim _{m \rightarrow \infty}\left(\sup _{n \geq m} a_{n}\right) \\
\liminf _{n \rightarrow \infty} a_{n} &=\lim _{m \rightarrow \infty}\left(\inf _{n \geq m} a_{n}\right) .
\end{aligned}
$$

The limits exist, because $\left(\sup _{n \geq m} a_{n}\right)_{m \geq 1}$ is a decreasing sequence.
So, $\limsup _{n \rightarrow \infty} a_{n}$ is the largest number $\ell$ such that there is a subsequence of $\left(a_{n}\right)$ converging to $\ell$.

### Proposition 1.3
1. $\liminf _{n \rightarrow \infty} a_{n}=-\limsup _{n \rightarrow \infty}\left(-a_{n}\right)$;
2. $\liminf _{n \rightarrow \infty} a_{n} \leq \limsup _{n \rightarrow \infty} a_{n} ;$
3. $\lim _{n \rightarrow \infty} a_{n}$ exists if and only if $\liminf _{n \rightarrow \infty} a_{n}=\lim \sup _{n \rightarrow \infty} a_{n}$; then all are equal;
4. If $a_{n} \leq b_{n}$ for all $n$, then $\lim \sup _{n \rightarrow \infty} a_{n} \leq \limsup _{n \rightarrow \infty} b_{n}$;
5. $\limsup _{n \rightarrow \infty}\left(a_{n}+b_{n}\right) \leq \lim \sup _{n \rightarrow \infty} a_{n}+\lim \sup _{n \rightarrow \infty} b_{n}$ (if all sums exist).