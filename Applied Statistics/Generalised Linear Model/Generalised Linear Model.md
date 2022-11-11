#AppliedStats 


## Exponential Dispersion Family
![[Exponential Dispersion Family#Definition]]


## Moments: E(Y) and Var(Y)

$$
1=\int \exp \left\{\frac{y \theta-\kappa(\theta)}{\phi}+c(y ; \phi)\right\} d y
$$
where $\int$ means $\sum$ in the discrete case.
Differentiate w.r.t. $\theta$ :
$$
\begin{aligned}
0 &=\int \frac{1}{\phi}\left(y-\kappa^{\prime}(\theta)\right) \exp \{\ldots\} d y \\
&=\frac{1}{\phi}\left(E(Y)-\kappa^{\prime}(\theta)\right),
\end{aligned}
$$
where $\kappa^{\prime}(\theta)=\frac{d \kappa(\theta)}{d \theta}$.
Letting $\mu(\theta)=E(Y)$, we obtain $\mu(\theta)=E(Y)=\kappa^{\prime}(\theta)$.

Differentiating a second time:
$$
\begin{aligned}
0 &=\int\left\{\frac{1}{\phi}\left(-\kappa^{\prime \prime}(\theta)\right)+\frac{1}{\phi^2}\left(y-\kappa^{\prime}(\theta)\right)^2\right\} \exp \{\ldots\} d y \\
&=-\frac{\kappa^{\prime \prime}(\theta)}{\phi}+\frac{1}{\phi^2} \operatorname{var}(Y)
\end{aligned}
$$
where $\kappa^{\prime \prime}(\theta)=\frac{d^2 \kappa(\theta)}{d \theta^2}$.
Hence $\operatorname{var}(Y)=\phi \kappa^{\prime \prime}(\theta)$.

### Variance Function
We define a variance function $V(\mu)$ by
$$
\operatorname{var}(Y)=\phi V(\mu)
$$
Using $\operatorname{var}(Y)=\phi \kappa^{\prime \prime}(\theta)$, we have $V(\mu)=\kappa^{\prime \prime}\left(\kappa^{\prime-1}(\mu)\right)$.

#### Canonical Link?
![[Canonical Link#^definition-cannonical-link-function]]