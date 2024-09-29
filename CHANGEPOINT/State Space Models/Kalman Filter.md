
## Local Level Model
- For $t=1, \ldots, T$  $$y_t=\alpha_t+\epsilon_t$$
- $\varepsilon_t$ is i.i.d. $N\left(0, h^{-1}\right)$.
- $\alpha_t$ which is not observed (**state**) and follows random walk for $t=1, . ., T-1$ :
$$
\alpha_{t+1}=\alpha_t+u_t
$$
- $u_t$ is i.i.d. $N(0, Q)$.
- $\alpha_1$ is initial condition.

State equation gives us:
$$
\alpha_{t+1} \mid \alpha_t, Q \sim N\left(\alpha_t, q\right)
$$

Or
$$
p(\alpha \mid Q)=\prod_{t=1}^T p\left(\alpha_{t+1} \mid \alpha_t, Q\right)
$$
- $y^T=\left(y_1, \ldots, y_T\right)^{\prime}$ is all observations in the sample
- $\alpha^t=\left(\alpha_1, \ldots, \alpha_t\right)^{\prime}$ is all states up to the current period $(t)$
- Filtering $=$ using $y^t$
- $E\left(\alpha_t \mid y^t\right)$ is the filtered estimate of the state
- $E\left(y_{t+1} \mid y^t\right)$ is estimate of $y_{t+1}$ (unknown at time $t$ )
- Smoothing $=$ using $y^T$
- $E\left(\alpha_t \mid y^T\right)$ is smoothed estimate of state

## Deriving the Kalman Filter Equations
Suppose we know $Q$ and $h$, then 
$$
\begin{aligned}
\alpha_t \mid y^{t-1} & \sim N\left(a_{t \mid t-1}, P_{t \mid t-1}\right) \\
\alpha_t \mid y^t & \sim N\left(a_{t \mid t}, P_{t \mid t}\right)
\end{aligned}
$$
- $P$ prediction error variance

Kalman filter involves simple formulae linking $a_{t \mid t-1}, P_{t \mid t-1}, a_{t \mid t}, P_{t \mid t}$
