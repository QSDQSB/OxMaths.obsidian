## Local Linear Trend
Defined by the pair of equations
$$
\begin{aligned}
\mu_{t+1} & =\mu_t+\delta_t+\eta_{\mu, t}, \\
\delta_{t+1} & =\delta_t+\eta_{\delta, t},
\end{aligned}
$$
where $\eta_{\mu, t} \sim \mathcal{N}\left(0, \sigma_\mu^2\right)$ and $\eta_{\delta, t} \sim \mathcal{N}\left(0, \sigma_\delta^2\right)$. The $\mu_t$ component is the value of the trend at time $t$. The $\delta_t$ component is the expected increase in $\mu$ between times $t$ and $t+1$, so it can be thought of as the slope at time $t$.

The[[ local linear trend]] model is a popular choice for modelling trends because it quickly adapts to local variation, which is desirable when making short-term predictions. This degree of flexibility may not be desired when making longer term predictions, as such predictions often come with implausibly wide uncertainty intervals.

## Stationary Local Linear Trend
There is a generalisation of the local linear trend model where the slope exhibits stationarity instead of obeying a random walk. This model can be written as
$$
\begin{aligned}
\mu_{t+1} & =\mu_t+\delta_t+\eta_{\mu, t}, \\
\delta_{t+1} & =D+\rho\left(\delta_t-D\right)+\eta_{\delta, t},
\end{aligned}
$$
where the two components of $\eta$ are independent. In this model, the slope of the time trend exhibits AR(1) variation around a long-term slope of $D$. The parameter $|\rho|<1$ represents the *learning rate* at which the local trend is updated. Thus, the model balances short-term information with information from the distant past.

## Implmentation with Time-Varying Variances
For a more specific example, let's define a `MLEModel` subclass for a local linear trend model where both the level and the slope of the trend have their own process noise, and importantly, the variances of these noises are time-dependent. In a local linear trend model, the state vector typically includes two components at each time $t$: the level of the series ($\ell_t$) and the trend ($b_t$).

We'll assume the variances of the noises for both level and trend components vary over time, denoted as $Q_{\ell,t}$ for the level and $Q_{b,t}$ for the trend. The observation equation is:

$$y_t = \ell_{t-1} + b_{t-1} + \epsilon_t, \quad \epsilon_t \sim N(0, H_t)$$

And the state equations are:

$$\ell_t = \ell_{t-1} + b_{t-1} + \eta_{\ell,t}, \quad \eta_{\ell,t} \sim N(0, Q_{\ell,t})$$
$$b_t = b_{t-1} + \eta_{b,t}, \quad \eta_{b,t} \sim N(0, Q_{b,t})$$

For simplicity, we'll assume $H_t$, the variance of the observation noise, remains constant, but you can modify this to be time-varying as well.

```python
import numpy as np
import statsmodels.api as sm
from statsmodels.tsa.statespace.mlemodel import MLEModel

class LocalLinearTrendModel(MLEModel):
    def __init__(self, endog, **kwargs):
        # The state vector is 2-dimensional (level and trend).
        super(LocalLinearTrendModel, self).__init__(endog, k_states=2, k_posdef=1, **kwargs)
        
        # General model specification
        self['design'] = np.array([[1.0, 0.0]])  # Only the level affects observations directly.
        self['transition'] = np.array([[1.0, 1.0], [0.0, 1.0]])  # State transition matrix.
        self['selection'] = np.eye(2)  # Both states are subject to noise.
        
        # Initial state and state covariance
        self.initialize_approximate_diffuse()
        self.loglikelihood_burn = 1

    @property
    def start_params(self):
        # Start parameters: variances for level and trend noises, and one for observation noise
        return [0.1, 0.1, 0.1]  # These are just example starting values.

    def update(self, params, **kwargs):
        params = super(LocalLinearTrendModel, self).update(params, **kwargs)
        
        # Update the state covariance matrix (Q)
        self['state_cov'] = np.diag(params[:2])  # Assume diagonal for simplicity
        
        # Update the observation noise variance (H)
        self['obs_cov', 0, 0] = params[2]
        
    def transform_params(self, unconstrained):
        # Ensure variances are positive
        return np.exp(unconstrained)

    def untransform_params(self, constrained):
        # Reverse the transformation done in transform_params
        return np.log(constrained)
        
    def obs_cov(self, **kwargs):
        # Here, you could implement time-varying H_t if desired
        # For now, it's constant and set in `update`
        return super(LocalLinearTrendModel, self).obs_cov(**kwargs)

    # Implement any other methods as needed, such as methods to handle time-varying Q.
    # This example assumes constant Q for simplicity but it's straightforward to modify.

# Example usage (with dummy data)
np.random.seed(42)
nobs = 100
time = np.arange(nobs)
obs_noise = np.random.normal(scale=1.0, size=nobs)
true_level = np.cumsum(np.random.normal(size=nobs))
true_trend = np.cumsum(np.random.normal(size=nobs) * 0.1)
observed = true_level + true_trend + obs_noise

# Instantiate and fit the model
model = LocalLinearTrendModel(observed)
results = model.fit(disp=False)

print(results.summary())
```

This class defines a basic local linear trend model with time-varying process noise variances for the level and trend components. Note that in this simplified example, the variances are assumed to be constant for ease of demonstration. However, if you have specific models for how $Q_{\ell,t}$ and $Q_{b,t}$ should vary over time, you would implement these within the `update` method or by adding new methods to handle the time-varying nature explicitly.

The `transform_params` and `untransform_params` methods ensure that variance parameters are kept positive during the optimization process by transforming them with an exponential function and its inverse, respectively.

## Simple Random Walk Model
```python
import numpy as np
import statsmodels.api as sm
from statsmodels.tsa.statespace.mlemodel import MLEModel

class TimeVaryingNoiseModel(MLEModel):
    def __init__(self, endog, k_states, k_posdef=1, **kwargs):
        # Initialize the state space model
        super(TimeVaryingNoiseModel, self).__init__(endog, k_states=k_states, k_posdef=k_posdef, **kwargs)
        
        # Initialize the matrices
        self['design'] = np.array([[1.0]])  # Observation matrix
        self['transition'] = np.array([[1.0]])  # State transition matrix
        self['selection'] = np.array([[1.0]])  # Selection matrix
        
        self.initialize_known(initial_state=np.array([0.0]), initial_state_cov=np.array([[1.0]]))

    @property
    def start_params(self):
        # Provide an initial guess for the state noise variance
        # This is just an example; you might want to use a more informed guess based on your data
        return [1.0]  # Initial guess for state noise variance

    def update(self, params, **kwargs):
        self['state_cov', 0, 0] = params[0]

    def obs_cov(self, **kwargs):
        time_idx = kwargs.get('time', 0)
        variance = 1.0 + 0.01 * time_idx  # Simple linear increase
        return np.array([[variance]])

# Example usage
np.random.seed(42)
nobs = 100
true_state = np.cumsum(np.random.normal(size=nobs))
obs_noise = np.random.normal(scale=np.sqrt(np.linspace(1, 2, nobs)))  # Increasing variance
observed = true_state + obs_noise

# Instantiate and fit the model
model = TimeVaryingNoiseModel(observed, k_states=1)
results = model.fit(disp=False)

print(results.summary())
```
