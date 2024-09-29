[[BAYESIAN TIME SERIES FORECASTING WITH CHANGE POINT AND ANOMALY DETECTION.pdf]]
Observation equation 
$$y_t=\mu_t+\gamma_t+\left\{\begin{array}{l}\epsilon_t, \text { if } z_t^a=0 \\ o_t, \text { if } z_t^a=1\end{array}\right.$$
- the error term is modeled by $\epsilon_t$ and $o_t$, depending on the value of $z_t^a$. 

Trend
$$
\begin{aligned}
& \mu_t=\mu_{t-1}+\delta_{t-1}+\left\{\begin{array}{l}
u_t, \text { if } z_t^c=0 \\
r_t, \text { if } z_t^c=1
\end{array},\right. \\
& \delta_t=\delta_{t-1}+v_t,
\end{aligned}
$$

Seasonality $$\gamma_t=-\sum_{s=1}^{S-1} \gamma_{t-s}+w_t$$
- $v_t$ noise for trend, $w_t$ noise for seaonality
### Model Update
- sequentially update each hidden variable by ﬁxing the remaining ones
- two different categories of unknown variables
- "Gibb's Sampler" to obtain posterior distribution: combination of [[Kalman ﬁlter]], Kalman smoothing and the so-called “fake-path” trick

## Bayesian ARMA State Space Changepoint
ARMA process can be fit to the state space form:
![[State Space ARMA]]