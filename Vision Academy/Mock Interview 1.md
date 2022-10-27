# Mock Interview 1

==Aug 20== @Jiahe

1. Which was larger, $2^{3333}$ or $3^{2222} ?$
2. What is $\pi$? Show that $\pi$ is between 3 and 4.
3. On the average, how many times must a die be thrown until one gets a 6 ?
4. Coupons in cereal boxes are numbered 1 to 5 , and a set of one of each is required for a prize. With one coupon per box, how many boxes on the average are required to make a complete set?



## Solutions
### Number of Trials
>But a beautiful way to do this problem is to notice that when the first toss is a failure, the mean number of tosses required is $1+m$, and when the first toss is a success, the mean number is 1 . Then $m=p(1)+q(1+m)$, or $m=1+q m$, and
$$m=1 / p$$


It seems obvious that it must be 6 . To check, let $p$ be the probability of a 6 on a given trial. Then the probabilities of success for the first time on each trial are (let $q=1-p$ ):

The sum of the probabilities is
$$
\begin{aligned}
p+p q+p q^{2}+\cdots &=p\left(1+q+q^{2}+\cdots\right) \\
&=p /(1-q)=p / p=1
\end{aligned}
$$
The mean number of trials, $m$, is by definition,
$$
m=p+2 p q+3 p q^{2}+4 p q^{3}+\cdots .
$$
Note that our usual trick for summing a geometric series works:
$$
q m=\quad p q+2 p q^{2}+3 p q^{3}+\cdots .
$$
Subtracting the second expression from the first gives
$$
m-q m=p+p q+p q^{2}+\cdots,
$$
or
Consequently,
$$
m(1-q)=1 .
$$
$$
m p=1, \quad \text { and } \quad m=1 / p .
$$
In our example, $p=\frac{1}{6}$, and so $m=6$, as seemed obvious.


We get one of the numbers in the first box. Now the chance of getting a new number from the next box is $\frac{4}{5}$. Using the result of Problem 4 , the second new number requires $1 /(4 / 5)=\frac{5}{4}$ boxes. The third new number requires an additional $1 /(3 / 5)=\frac{5}{3}$; the fourth $\frac{5}{2}$, the fifth $\frac{5}{1}$.
Thus the average number of boxes required is
$$
5\left(\frac{1}{5}+\frac{1}{4}+\frac{1}{3}+\frac{1}{2}+1\right) \approx 11.42
$$