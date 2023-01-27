#PMM
## Definition
Let $\left(A_n\right)_{n \geqslant 1}$ be a sequence of **sets** from $\mathscr{F}$. We define
$$
\begin{aligned}
\limsup _{n \rightarrow \infty} A_n &=\bigcap_{n=1}^{\infty} \bigcup_{m \geqslant n} A_m \\
&=\left\{\omega \in \Omega: \omega \in A_m \text { for infinitely many } m\right\} \\
&=\left\{A_n \text { occurs infinitely often }\right\} \\
&=\left\{A_n \text { i.o. }\right\}
\end{aligned}
$$
and
$$
\begin{aligned}
\liminf _{n \rightarrow \infty} A_n &=\bigcup_{n=1}^{\infty} \bigcap_{m \geqslant n} A_m \\
&=\left\{\omega \in \Omega: \exists m_0(\omega) \text { such that } \omega \in A_m \text { for all } m \geqslant m_0(\omega)\right\} \\
&=\left\{A_n \text { eventually }\right\} \\
&=\left\{A_n^{\mathrm{c}} \text { infinitely often }\right\}^{\mathrm{c}} .
\end{aligned}
$$
## Lemma 3.16
$$
\mathbf{1}_{\limsup_{n \rightarrow \infty}A_n}=\limsup _{n \rightarrow \infty} \mathbf{1}_{A_n}, \quad \mathbf{1}_{\liminf _{n \rightarrow \infty} A_n}=\liminf _{n \rightarrow \infty} \mathbf{1}_{A_n}
$$
### Proof
Note that $\mathbf{1}_{\cup_n A_n}=\sup _n \mathbf{1}_{A_n}$ and $\mathbf{1}_{\cap_n A_n}=\inf _n \mathbf{1}_{A_n}$, and apply these twice.

## Lemma 3.17 (Fatou and Reverse Fatou for sets)
Let $\left(A_n\right)_{n \geqslant 1}$ be a sequence of sets from $\mathscr{F}$. Then
$$
\mathbb{P}\left(\liminf _{n \rightarrow \infty} A_n\right) \leqslant \liminf _{n \rightarrow \infty} \mathbb{P}\left(A_n\right) \text { and } \mathbb{P}\left(\limsup _{n \rightarrow \infty} A_n\right) \geqslant \limsup _{n \rightarrow \infty} \mathbb{P}\left(A_n\right) \text {. }
$$
### Proof
Using continuity of $\mathbb{P}$ from above and below, see Proposition 2.3, we have
$$
\mathbb{P}\left(A_n \text { eventually }\right)=\lim _{n \rightarrow \infty} \mathbb{P}\left(\bigcap_{m \geqslant n} A_m\right) \leqslant \lim _{n \rightarrow \infty} \inf _{m \geqslant n} \mathbb{P}\left(A_m\right)=\liminf _{n \rightarrow \infty} \mathbb{P}\left(A_n\right)
$$
and hence (taking complements)
$$
\mathbb{P}\left(A_n \text { i.o. }\right) \geqslant \limsup _{n \rightarrow \infty} \mathbb{P}\left(A_n\right) \text {. }
$$
In fact we can say more about the probabilities of these events.