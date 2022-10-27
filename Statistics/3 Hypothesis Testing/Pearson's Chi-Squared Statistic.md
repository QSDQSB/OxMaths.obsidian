# Pearson's chi-squared statistic
#Statistics 

Write
$$
\Lambda=2 \sum O_{i} \log \left(\frac{O_{i}}{E_{i}}\right)
$$
where $O_{i}=n_{i}$ is the ==observed count in category $i$==, and $E_{i}=n \pi_{i}(\widehat{\theta})$ is the ==expected count in category $i$== under $H_{0}$.
For $x$ near $a$, we have
$$
x \log \left(\frac{x}{a}\right) \approx(x-a)+\frac{(x-a)^{2}}{2 a} .
$$
Hence
$$
\begin{aligned}
\Lambda & \approx 2 \sum\left[\left(O_{i}-E_{i}\right)+\frac{\left(O_{i}-E_{i}\right)^{2}}{2 E_{i}}\right] \\
&=\sum \frac{\left(O_{i}-E_{i}\right)^{2}}{E_{i}}
\end{aligned}
$$
since $\sum O_{i}=\sum E_{i}=n .$ The statistic
$$
P=\sum \frac{\left(O_{i}-E_{i}\right)^{2}}{E_{i}}
$$
is called Pearson's chi-squared statistic and this also has an approximate $\chi_{p}^{2}$-distribution under $H_{0}$, where $p=k-1-q$.