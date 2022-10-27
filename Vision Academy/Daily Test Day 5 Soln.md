# Daily Test Day 5 Solutions
## 1
(a) Method I: There are 36 equally likely outcomes, and just 10 of these contain exactly one six. The answer is therefore $\frac{10}{36}=\frac{5}{18}$.
Method II: Since the throws have independent outcomes,
$$
\mathbb{P}\left(\text { first is 6, second is not 6) }=\mathbb{P}(\text { first is } 6) \mathbb{P}(\text { second is not } 6)=\frac{1}{6} \cdot \frac{5}{6}=\frac{5}{36}\right. \text {. }
$$
There is an equal probability of the event $\{$ first is not 6 , second is 6$\}$.
(b) A die shows an odd number with probability $\frac{1}{2}$; by independence, $\mathbb{P}$ (both odd) $=\frac{1}{2} \cdot \frac{1}{2}=\frac{1}{4}$.
(c) Write $S$ for the sum, and $\{i, j\}$ for the event that the first is $i$ and the second $j$. Then $\mathbb{P}(S=4)=$ $\mathbb{P}(1,3)+\mathbb{P}(2,2)+\mathbb{P}(3,1)=\frac{3}{36}$
(d) Similarly
$$
\begin{aligned}
\mathbb{P}(S \text { divisible by } 3)=& \mathbb{P}(S=3)+\mathbb{P}(S=6)+\mathbb{P}(S=9)+\mathbb{P}(S=12) \\
=&\{\mathbb{P}(1,2)+\mathbb{P}(2,1)\} \\
& \quad+\{\mathbb{P}(1,5)+\mathbb{P}(2,4)+\mathbb{P}(3,3)+\mathbb{P}(4,2)+\mathbb{P}(5,1)\} \\
& \quad+\{\mathbb{P}(3,6)+\mathbb{P}(4,5)+\mathbb{P}(5,4)+\mathbb{P}(6,3)\}+\mathbb{P}(6,6) \\
=& \frac{12}{36}=\frac{1}{3} .
\end{aligned}
$$
## 2
(a) By independence, $\mathbb{P}(n-1$ tails, followed by a head $)=2^{-n}$.
(b) If $n$ is odd, $\mathbb{P}(\#$ heads $=\#$ tails $)=0$; $\#A$ denotes the cardinality of the set $A$. If $n$ is even, there are $\left(\begin{array}{c}n \\ n / 2\end{array}\right)$ sequences of outcomes with $\frac{1}{2} n$ heads and $\frac{1}{2} n$ tails. Any given sequence of heads and tails has probability $2^{-n}$; therefore $\mathbb{P}\left(\#\right.$ heads $=\#$ tails) $=2^{-n}\left(\begin{array}{c}n \\ n / 2\end{array}\right)$.
(c) There are $\left(\begin{array}{l}n \\ 2\end{array}\right)$ sequences containing 2 heads and $n-2$ tails. Each sequence has probability $2^{-n}$, and therefore $\mathbb{P}($ exactly two heads $)=\left(\begin{array}{l}n \\ 2\end{array}\right) 2^{-n}$.
(d) Clearly
$\mathbb{P}($ at least 2 heads $)=1-\mathbb{P}($ no heads $)-\mathbb{P}($ exactly one head $)=1-2^{-n}-\left(\begin{array}{l}n \\ 1\end{array}\right) 2^{-n}$

## 3
(a) The number of possible combinations of birthdays of $m$ people is $365^{m}$; the number of combinations of different birthdays is $365 ! /(365-m)$ !.
(b) The answer is
$$
p_{1}=365\left(\begin{array}{c}
364 \\
n-2
\end{array}\right) \frac{m !}{2} \frac{1}{365^{m}} .
$$
(c) In the same manner as on Earth,
$$
p_{0}=\frac{M}{M} \cdot \frac{M-1}{M} \cdots \frac{M-m+1}{M},
$$
so that, as $M \rightarrow \infty$
$$
\begin{aligned}
\log p_{0} &=\sum_{k=1}^{m-1} \log \left(1-\frac{k}{M}\right) \\
&=-\sum_{k=1}^{m-1} \frac{k}{M}+\mathrm{O}\left(M^{-2}\right)=-\frac{m(m-1)}{2 M}+\mathrm{O}\left(M^{-2}\right)
\end{aligned}
$$
## 4 
(a) $\left(\begin{array}{c}n-r+1 \\ r\end{array}\right) /\left(\begin{array}{l}n \\ r\end{array}\right)$.
(b) $(r-1)\left(\begin{array}{c}n-r+1 \\ r-1\end{array}\right) /\left(\begin{array}{l}n \\ r\end{array}\right)$.
(c) $\frac{1}{r !}$.
(d) $1 /\left(\begin{array}{l}n \\ r\end{array}\right)$.
(e) $\left(\begin{array}{l}r \\ k\end{array}\right)\left(\begin{array}{l}n-r \\ r-k\end{array}\right) /\left(\begin{array}{l}n \\ r\end{array}\right)$.

## 5
Divide the triangle into four parts, the area of all of which is $1 / 8$. Then apply pigeonhole principle.

## 6
For the tennis pairings consider player 1 , they can be paired with $2 n-1$ other people. Next relabel the remaining players and consider player 1 again, this new player 1 can be paired with $2 n-3$ other people. Continue this line of thought and it is clear the number of pairings is the product all odd numbers from 1 to $2 \mathrm{n}-1$. This is not something that can be evaluated quickly and some messing around with factorials and powers of two will lead to the more succinct expression $\frac{(2 n) !}{2^{n} n !}$. (This is exactly the expression in MAT2019 Quiz5)

