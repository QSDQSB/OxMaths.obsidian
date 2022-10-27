# Daily Test Day 4 Solutions
## 1
Let $m, n$ be natural numbers. The coefficient of $x^{2} y^{3}$ in (i) $(2+3 x+5 y)^{m}$ equals
$$
\frac{m !}{(m-5) ! 2 ! 3 !} 2^{m-5} 3^{2} 5^{3}=5625\left(\begin{array}{c}
m \\
5
\end{array}\right) 2^{m-4}
$$
which is non-zero when $m \geqslant 5$. (ii) $(1+x)^{m}(1+y)^{n}$ equals
$$
\left(\begin{array}{c}
m \\
2
\end{array}\right)\left(\begin{array}{l}
n \\
3
\end{array}\right)
$$
which is non-zero when $m \geqslant 2$ and $n \geqslant 3$. (iii) $\left(x+y^{2}\right)^{m}\left(y+x^{2}\right)^{n}$ equals
$$
\left(\begin{array}{c}
m \\
2,0
\end{array}\right)\left(\begin{array}{c}
n \\
3,0
\end{array}\right)+\left(\begin{array}{c}
m \\
2,1
\end{array}\right)\left(\begin{array}{c}
n \\
1,0
\end{array}\right)+\left(\begin{array}{c}
m \\
0,0
\end{array}\right)\left(\begin{array}{c}
n \\
3,1
\end{array}\right)+\left(\begin{array}{c}
m \\
0,1
\end{array}\right)\left(\begin{array}{c}
n \\
1,1
\end{array}\right)
$$
which is non-zero when $(m, n)$ equals $(2,3),(3,1),(0,4)$ or $(1,2)$. (iv) $(1+x y)^{m}(x+y)^{n}$ equals
$$
\left(\begin{array}{c}
n \\
2,3
\end{array}\right)+m\left(\begin{array}{c}
n \\
1,2
\end{array}\right)+\left(\begin{array}{c}
m \\
2
\end{array}\right)\left(\begin{array}{c}
n \\
0,1
\end{array}\right) .
$$
Consequently a non-zero coefficient is only possible when $n=1$ or 3 or 5.

## 2
Let $a>0$ and let $n$ be a natural number. The coefficients $c_{k}(0 \leqslant k \leqslant n)$ are defined by
$$
(1+a x)^{n}=\sum_{k=0}^{n} c_{k} x^{n} .
$$
If $c_{0}<c_{1}<c_{2}<\cdots<c_{n-1}<c_{n}$ then in particular $c_{n-1}<c_{n}$, i.e.
$$
n a^{n-1}<a^{n} \Longrightarrow n<a
$$
On the other hand if $n<a$ and $0 \leqslant k<n$ then
$$
\begin{aligned}
\frac{c_{k+1}}{c_{k}} &=\left\{\left(\begin{array}{c}
n \\
k+1
\end{array}\right) a^{k+1}\right\} /\left\{\left(\begin{array}{c}
n \\
k
\end{array}\right) a^{k}\right\} \\
&=a\left(\begin{array}{c}
n \\
k+1
\end{array}\right) /\left(\begin{array}{c}
n \\
k
\end{array}\right) \\
&=a \times \frac{n !}{(k+1) !(n-1-k) !} \times \frac{k !(n-k !)}{n !} \\
&=\frac{a(n-k)}{k+1} \\
&>n-k \quad[\text { as } a>n \geqslant k+1] \\
& \geqslant 1
\end{aligned}
$$
and so the coefficients $c_{0}, c_{1}, c_{2}, \ldots, c_{n}$ are increasing.

## 3
Solution: As the perimeter $2 s$ is given, then $s$ is fixed. Applying the AM-GM inequality to $s-a, s-$ $b, s-c$ we have
$$
\sqrt[3]{(s-a)(s-b)(s-c)}=\mathrm{GM} \leqslant \mathrm{AM}=\frac{(s-a)+(s-b)+(s-c)}{3}=\frac{3 s-(a+b+c)}{3}=\frac{s}{3}
$$
By Heron's formula we then have
$$
A^{2}=s(s-a)(s-b)(s-c) \leqslant s(s / 3)^{3}=s^{4} / 27
$$
with equality if and only if $s-a=s-b=s-c$, i.e. if and only if the triangle is equilateral.

## 4
Solution: Note that for any $x>0$ we have
$$
(x-1)^{2} \geqslant 0 \Longrightarrow x^{2}+1 \geqslant 2 x \Longrightarrow x+\frac{1}{x} \geqslant 2
$$
So if $x_{1} x_{2} \times \cdots \times x_{n}=1$ where each $x_{i}>0$ we have
$$
\left(\sqrt{x_{1}}+\frac{1}{\sqrt{x_{1}}}\right)\left(\sqrt{x_{2}}+\frac{1}{\sqrt{x_{2}}}\right) \times \cdots \times\left(\sqrt{x_{n}}+\frac{1}{\sqrt{x_{n}}}\right) \geqslant 2^{n} .
$$
If we multiply both sides by $\sqrt{x_{1} x_{2} \times \cdots \times x_{n}}=1$ then we obtain the desired result
$$
\left(x_{1}+1\right)\left(x_{2}+1\right) \times \cdots \times\left(x_{n}+1\right) \geqslant 2^{n}
$$

## 5
### Method 1: Exhaustion
For the first part (2 tosses vs 1) the probability is exactly $1\over2$. Listing all outcomes is one way to figure out the answer.

For the second part (3 vs 2), the probability is unchanged. This can be found by listing out all possibilities:
- There are $8\left(=2^{3}\right)$ outcomes for Mary: $\mathrm{HHH}, \mathrm{HHT}, \mathrm{HTH}, \mathrm{HTT}, \mathrm{THH}, \mathrm{THT}$, TTH, TTT, each of equal possibility of occurrence $(={1\over8})$
- $4\left(=2^{2}\right)$ outcomes for John: $\mathrm{HH}, \mathrm{HT}, \mathrm{TH}, \mathrm{TT}$.

Out of this $32$ combinations, Mary wins for $16$ cases.

With this spirit one might get a taste that the probability is always $1\over2$, regardless of the value of $n$. 

But this needs a rigorous proof.

### Method 2:  Probability Relations
We check the first $n$ tosses of $A$ and $B$ (that is to say $A$ hasn't had his final $(n+1)^{th}$ toss).
Under this $n$ vs $n$ case we denote
- $p_{A}=$ probability that $A$ obtains more heads than $B$.
- $p_{B}=$ probability that $B$ obtains more heads than $A$.
- $p_{D}=$ probability that $\mathrm{A}$ obtains as many heads as $B$.

Then $p_{A}+p_{B}+p_{D}=1$. As they are pairwise disjoint and cover all the situations.
By symmetry of both tossing $n$ times, $p_A=p_B$.

No we return to A having his final round.
- With half chance, he tosses a tail. So he only wins when he already won in the previous $n$ vs $n$ game, which is $p_A$.
- With half chance, he tosses a head. So he wins if he previously tosses number of heads greater than or equal to $B$'s. This has probability $p_B+p_D$.

So the final probability is $$\mathbb{P}(\text{A has more heads}) = {1\over2}p_A+{1\over2}(p_B+p_D)={1\over2}.$$