# Daily Test Day 3
1. Show that
$$
F(x)=\frac{\sin x+\sin (x+a)}{\cos x-\cos (x+a)}
$$
is a constant function by showing that $F^{\prime}(x)=0$.

2. Assuming that $\sin \theta<\theta<\tan \theta$ for $0<\theta<\pi / 2$, rank the integrals below in order of size without directly calculating any of them.
$$
\int_{0}^{\pi / 4} x^{3} \cos x \mathrm{~d} x, \quad \int_{0}^{\pi / 4} x^{3} \cos ^{2} x \mathrm{~d} x, \quad \int_{0}^{\pi / 4} x^{2} \sin x \cos x \mathrm{~d} x, \quad \int_{0}^{\pi / 4} x^{3} \cos 2 x \mathrm{~d} x
$$
3. Find all the solutions $x$ to the following equations.
(a) $\int_{x}^{x^{2}} e^{-t^{2}} \mathrm{~d} t=0$
(b) $\int_{0}^{x} \sin (\sin t) \mathrm{d} t=0$
(c) $\int_{-x}^{x} \sin ^{3}(t \cos t) \mathrm{d} t=0$

4. Let $B_{n}$ denote the number of ways to cover a $3 \times n$ grid using $3 \times 1$ rectangular tiles. Show that
$$
B_{n}=B_{n-1}+B_{n-3} \quad \text { for } n \geqslant 4
$$
and so determine $B_{10}$.
5. (This continues from Q4) Show that
$$
B_{n}=\left(\begin{array}{l}
n \\
0
\end{array}\right)+\left(\begin{array}{c}
n-2 \\
1
\end{array}\right)+\left(\begin{array}{c}
n-4 \\
2
\end{array}\right)+\left(\begin{array}{c}
n-6 \\
3
\end{array}\right)+\cdots \quad \text { for } n \geqslant 1
$$
 >
Here is Pascal's rule, in case you forgot: $$\left(\begin{array}{c}n-1 \\ k\end{array}\right)+\left(\begin{array}{l}n-1 \\ k-1\end{array}\right)=\left(\begin{array}{l}n \\ k\end{array}\right)$$
Moreover, to ensure everything makes sense, a standard convention is to have $${n\choose k} = 0$$ for $k>n$.


6. `The following problem is known as Gambler's Ruin, which we will dive deeper today.` 
   A casino runs the following game. A player is given 9 tokens initially. The game played then involves consecutively rolling a die and with each roll one token is added or subtracted from the player's pile. If $1,2,3$ or 4 is rolled a token is removed; if 5 or 6 is rolled then the player receives a token. The player loses the game if his/her stock of tokens reaches 0 and wins if the stock reaches 10 . This question investigates the probability of the player winning.
(i) For $0 \leqslant n \leqslant 10$, let $p_{n}$ denote the probability the player wins with a stock of $n$ tokens. What are $p_{0}$ and $p_{10}$ ?
(ii) Explain why
$$
p_{n}=\frac{1}{3} p_{n+1}+\frac{2}{3} p_{n-1} \quad \text { for } 1 \leqslant n \leqslant 9
$$