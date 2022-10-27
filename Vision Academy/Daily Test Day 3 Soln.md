# Daily Test Day 3 Solutions
## 1
Straightforward proof.
## 2
We are allowed to assume
$$
\sin \theta<\theta<\tan \theta \quad \text { for } 0<\theta<\frac{\pi}{2}
$$
We also know that
$$
0<\sin \theta<\frac{1}{\sqrt{2}}<\cos \theta<1 \quad \text { for } 0<\theta<\frac{\pi}{4}
$$
So
$$
I_{1}=\int_{0}^{\pi / 4} x^{3} \cos x \mathrm{~d} x>\int_{0}^{\pi / 4} x^{3} \cos ^{2} x \mathrm{~d} x=I_{2}
$$
We also have that
$$
x^{3} \cos ^{2} x<x^{2} \sin x \cos x \quad \text { for } 0<x<\frac{\pi}{4}
$$
as this equivalent to $\tan x>x$. Hence
$$
I_{2}=\int_{0}^{\pi / 4} x^{3} \cos ^{2} x \mathrm{~d} x>\int_{0}^{\pi / 4} x^{2} \sin x \cos x \mathrm{~d} x=I_{3}
$$
Finally we note
$$
x^{3} \cos 2 x<x^{2} \sin x \cos x=\frac{1}{2} x^{2} \sin 2 x \quad \text { for } 0<x<\frac{\pi}{4}
$$
as this is equivalent to $2 x<\tan 2 x$ for $0<x<\pi / 4$. Hence we have
$$
I_{3}=\int_{0}^{\pi / 4} x^{2} \sin x \cos x \mathrm{~d} x>\int_{0}^{\pi / 4} x^{3} \cos 2 x \mathrm{~d} x=I_{4}
$$
## 3
Solution: (i) As $e^{-t^{2}}>0$ for all $t$, then
$$
\int_{a}^{b} e^{-t^{2}} \mathrm{~d} t>0
$$
whenever $a \neq b$. So
$$
\int_{x}^{x^{2}} e^{-t^{2}} \mathrm{~d} t=0
$$
if and only if $x=x^{2}$. So the two solutions are $x=0$ and $x=1$. (ii) Note $\sin (\sin t)$ is periodic with period $2 \pi$ and also that $\sin (\sin (t+\pi))=\sin (-\sin t)=-\sin (\sin t)$. Hence
$$
\int_{\pi}^{2 \pi} \sin (\sin t) \mathrm{d} t=-\int_{0}^{\pi} \sin (\sin t) \mathrm{d} t
$$
So
$$
\int_{0}^{2 \pi} \sin (\sin t) \mathrm{d} t=0
$$

and so for $0<x<\pi$ we have $\int_{0}^{x} \sin (\sin t) \mathrm{d} t>0$, and the integrand remains positive for $\pi \leqslant x<$ $2 \pi$.As
$$
\int_{0}^{2 \pi} \sin (\sin t) \mathrm{d} t=0
$$
and $\sin (\sin t)$ is periodic, then we find
$$
\int_{0}^{x} \sin (\sin t) \mathrm{d} t=0
$$
when $x$ is a multiple of $2 \pi$ and is otherwise positive. (iii) Note that $\quad(\sin ((-t) \cos (-t)))^{3}=(\sin (-t \cos t))^{3}=$ $(-\sin (t \cos t))^{3}=-\sin ^{3}(t \cos t)$ and so the integrand is odd. Therefore
$$
\int_{-x}^{x} \sin ^{3}(t \cos t) \mathrm{d} t=0
$$
for all $x$.

## 4
The recurrence relation is a typical model very similar to what we mentioned yesterday. For the value of $B_{10}$ we have $B_{10}=28$.
$$
\begin{array}{|l|l|l|l|l|l|l|l|l|l|l|}
\hline n & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\
\hline B_{n-3} & & & & 1 & 1 & 2 & 3 & 4 & 6 & 9 \\
\hline B_{n-1} & & 1 & 1 & 2 & 3 & 4 & 6 & 9 & 13 & 19 \\
\hline B_{n} & 1 & 1 & 2 & 3 & 4 & 6 & 9 & 13 & 19 & 28 \\
\hline
\end{array}
$$
## 5
The initial values of $B_{n}$ are $B_{1}=1, B_{2}=1, B_{3}=2$ and we see that
$$
1=\left(\begin{array}{l}
1 \\
0
\end{array}\right) ; \quad 1=\left(\begin{array}{l}
2 \\
0
\end{array}\right) ; \quad 2=\left(\begin{array}{l}
3 \\
0
\end{array}\right)+\left(\begin{array}{l}
1 \\
1
\end{array}\right)
$$
are in agreement. Set
$$
C_{n}=\left(\begin{array}{c}
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
\end{array}\right)+\cdots
$$
for $n \geqslant 1$ (with the usual understanding that $\left(\begin{array}{c}n \\ k\end{array}\right)=0$ when $n<0$ or $n<k$ ). Note that for any $i \geqslant 0$, if we add the $(i+1)$ th summand in $C_{n-1}$ to the $i$ th summand in $C_{n-3}$ we have
$$
\left(\begin{array}{c}
n-1-2(i+1) \\
i+1
\end{array}\right)+\left(\begin{array}{c}
n-3-2 i \\
i
\end{array}\right)=\left(\begin{array}{c}
n-3-2 i) \\
i+1
\end{array}\right)+\left(\begin{array}{c}
n-3-2 i \\
i
\end{array}\right)=\left(\begin{array}{c}
n-2-2 i \\
i
\end{array}\right)
$$
by Pascal's identity. Hence we have
$$
\begin{aligned}
C_{n-1}+C_{n-3} &=\left\{\left(\begin{array}{c}
n-1 \\
0
\end{array}\right)+\left(\begin{array}{c}
n-3 \\
1
\end{array}\right)+\left(\begin{array}{c}
n-5 \\
2
\end{array}\right)+\cdots\right\}+\left\{\left(\begin{array}{c}
n-3 \\
0
\end{array}\right)+\left(\begin{array}{c}
n-5 \\
1
\end{array}\right)+\left(\begin{array}{c}
n-7 \\
2
\end{array}\right)+\cdots\right\} \\
&=\left(\begin{array}{c}
n-1 \\
0
\end{array}\right)+\left\{\left(\begin{array}{c}
n-3 \\
1
\end{array}\right)+\left(\begin{array}{c}
n-3 \\
0
\end{array}\right)\right\}+\left\{\left(\begin{array}{c}
n-5 \\
2
\end{array}\right)+\left(\begin{array}{c}
n-5 \\
1
\end{array}\right)\right\}+\cdots \\
&=\left(\begin{array}{c}
n-1 \\
0
\end{array}\right)+\left(\begin{array}{c}
n-2 \\
1
\end{array}\right)+\left(\begin{array}{c}
n-4 \\
2
\end{array}\right)+\cdots \\
&=\left(\begin{array}{c}
n \\
0
\end{array}\right)+\left(\begin{array}{c}
n-2 \\
1
\end{array}\right)+\left(\begin{array}{c}
n-4 \\
2
\end{array}\right)+\cdots=C_{n}
\end{aligned}
$$
as $\left(\begin{array}{c}n-1 \\ 0\end{array}\right)=\left(\begin{array}{c}n \\ 0\end{array}\right)=1$. As $C_{n}$ satisfies the same recurrence relation as $B_{n}$ and agrees for $n=1,2,3$ then $C_{n}=B_{n}$ for all $n$.

## 6
### (i)
We have $p_{0}=0$ - as a loss is certain in this case, and $p_{10}=1$, as a win is certain.
### (ii)
If the stock is at $n$ where $1 \leqslant n \leqslant 9$, then there is $\frac{1}{3}$ chance that it will increase to $n+1$, from where there will be $p_{n+1}$ chance of winning, and $\frac{2}{3}$ chance that the stock decreases to $n-1$, from where there will be $p_{n-1}$ chance of winning. Hence
$$
p_{n}=\frac{1}{3} p_{n+1}+\frac{2}{3} p_{n-1}
$$
[In more formal notation we would use the Law of Total Probability to say that $P$ (winning at $n$ ) $=P$ (winning at $n-1) P($ moving to $n-1)+P($ winning at $n+1) P($ moving to $n+1)$.]