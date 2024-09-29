
### ARMA in State Space Form

The $\operatorname{ARMA}(p, q)$ model for a time series $y_t$ is
$$
y_t=\phi_1 y_{t-1}+\cdots+\phi_p y_{t-p}+\varepsilon_t+\theta_1 \varepsilon_{t-1}+\cdots+\theta_q \varepsilon_{t-q},
$$
#### ARMA(1,1)
$$\begin{aligned} & y_t=\alpha_t+\varepsilon_t \\ & \alpha_{t+1}=\phi \alpha_t+(\theta+\phi) \varepsilon_t\end{aligned}$$
#### ARMA(2,2)
$$\begin{aligned} & y_t=\left(\begin{array}{ll}1 & 0\end{array}\right) \alpha_t+\varepsilon_t, \\ & \alpha_{t+1}=\left(\begin{array}{ll}0 & 1 \\ \phi_2 & \phi_1\end{array}\right) \alpha_t+\left(\begin{array}{l}\psi_1 \\ \psi_2\end{array}\right) \varepsilon_t\end{aligned}$$
where $\psi_1=\theta_1+\phi_1$ and $\psi_2=\theta_2+\phi_1 \theta_1+\phi_1^2+\phi_2$. This representation has the useful property that at time $t+1$, the $j$ th element of the state is a predictor of $y_{t+j}$ based on information available at time $t$,
$$
\alpha_{j, t+1}=E\left(y_{t+j} \mid y_t, \ldots, y_{t-m+1}, \varepsilon_t, \ldots, \varepsilon_{t-m+1}\right), \quad j=1, \ldots, m
$$
($m$ is $\max(p,q)$)


