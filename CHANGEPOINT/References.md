#Dissertation
## Baysn TS Frcsting with CP and AP Detection
[[BAYESIAN TIME SERIES FORECASTING WITH CHANGE POINT AND ANOMALY DETECTION.pdf]]
We develop a **state space** time series forecasting model in the Bayesian framework that can simultaneously detect anomaly and change points and perform forecasting. The learned structure information related to anomaly and change points is automatically incorporated into the forecasting process, which naturally enhances the model prediction based on the feedback of state-space model.

To solve the resultant optimization problem, an iterative algorithm based on Bayesian approximate inference with [[Metropolis Hastings Markov Chain Monte Carlo algorithm|MCMC]], Kalman filter and Kalman smoothing is proposed. The novel model could explicitly capture the structure of change points, anomaly points, trend and seasonality, as also provide the distributions and forecasting intervals due to Bayesian forecasting framework.
-  $y_t = trend + seasonality + change point + anomaly + residual.$
- we model the change point directly into the trend component
### Transition Equation
```ad-note
title: Notation
- $\bf{\mu}$ ==trend==
- $\bf{\gamma}$  ==seasonality==
- $\it{z^a}$ ==anomaly points==, 1 indicates anomaly points
- $z^c$  ==changepoints==, 1 indicates changepoints
- $\bf{\delta}$  ==*slope* of the trend==
- $\begin{equation}
\boldsymbol{\alpha}_{\boldsymbol{t}}=\left(\mu_t, \delta_t, \gamma_t, \gamma_{t-1}, \ldots, \gamma_{t-(S-2)}\right)
\end{equation}$

```

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

## [[2305.06630.pdf]]

> _Online detection of changepoints of trends_
### Configuration
- input window $I_t:=\{t-l+1, \ldots, t\}$, predict window $J_t:=\{t+1, \ldots, t+b\}$
- predict the $j$ values and compare to the actual observations. CUSUM test.
- Predict & Compare detector

## Use of CPA in SARIMA
[Sri Lanka](https://www.researchgate.net/profile/Pavithra-Basnayake-2/publication/364987031_Use_of_Change_Point_Analysis_in_Seasonal_ARIMA_Models_for_Forecasting_Tourist_Arrivals_in_Sri_Lanka/links/6361d0df54eb5f547c96c5f9/Use-of-Change-Point-Analysis-in-Seasonal-ARIMA-Models-for-Forecasting-Tourist-Arrivals-in-Sri-Lanka.pdf)

Manually run offline changepoint detection, and separate the time series fo SARIMA fit.

## Traffic Parameter Prediction
[[An_Online_Change-Point-Based_Model_for_Traffic_Parameter_Prediction.pdf]]

