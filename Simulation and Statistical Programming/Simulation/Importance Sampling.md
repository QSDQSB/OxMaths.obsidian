# Importance Sampling
#Statistics 
## Definition
Let $Y_{i} \sim q, i=1,2, \ldots, n$ be iid continuous random variables distributed for $Y_{i} \in \Omega$ with density $q$. We will require $p(x)>0 \Rightarrow q(x)>0$ for all $x \in \Omega$ (which is weaker than $p / q$ bounded as in rejection). Then
$$
\bar{f}=\frac{1}{n} \sum_{i=1}^{n} p\left(Y_{i}\right) f\left(Y_{i}\right) / q\left(Y_{i}\right)
$$
is an unbiased estimator for $E_{p}(f(X))$ since
$$
\begin{aligned}
E_{q}(\bar{f}) &=\frac{1}{n} \sum_{i=1}^{n} E_{q}\left(\frac{p\left(Y_{i}\right)}{q\left(Y_{i}\right)} f\left(Y_{i}\right)\right) \\
&=E_{q}\left(\frac{p\left(Y_{1}\right)}{q\left(Y_{1}\right)} f\left(Y_{1}\right)\right) \\
&=\int_{\Omega}\left[\frac{p(y)}{q(y)} f(y)\right] \times q(y) d y \\
&=\int_{\Omega} p(y) f(y) d y \\
&=E_{p}(f(X))
\end{aligned}
$$