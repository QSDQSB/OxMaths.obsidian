## Changepoint & Anomaly Model
$$
\begin{aligned}
& y_t=\mu_t+ \begin{cases}\epsilon_t, \text { if } z_t^a=0 \\
o_t, \text { if } z_t^a=1 \text { (anomaly) }\end{cases} \\
& \mu_t=\mu_{t-1}+\delta_{t-1}+ \begin{cases}u_t, \text { if } z_t^c=0 \\
r_t, \text { if } z_t^c=1 \text { (changepoint) }\end{cases} \\
& \delta_t=\delta_{t-1}+v_t
\end{aligned}
$$
## $\mu$, $\delta$ Changepoint Model
$$
\begin{aligned}
& y_t=\mu_t+ \epsilon_t \\
& \mu_t=\mu_{t-1}+\delta_{t-1}+ \begin{cases}u_t, \text { if } z_t^\mu=0 \\
r_t, \text { if } z_t^\mu=1 \text { (level changepoint) }\end{cases} \\
& \delta_t=\delta_{t-1}+\begin{cases}v_t, \text { if } z_t^\delta=0 \\
w_t, \text { if } z_t^\delta=1 \text { (trend changepoint) }\end{cases}
\end{aligned}
$$


