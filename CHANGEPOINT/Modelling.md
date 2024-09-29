## State Space Model Formulation

A state space model is apt for this situation because it allows for modeling observations $X_t$ that are influenced by unobserved state variables $p_t$. You can set up the model as follows:
- State Equation: This describes how the state $p_t$ evolves over time. Given your description, $p_t$ can be modeled as a random walk:
$$
p_{t+1}=p_t+\epsilon_t, \quad \epsilon_t \sim N\left(0, \sigma^2\right)
$$
where $\sigma^2$ is small, reflecting the "small noise" characteristic of the random walk.
- Observation Equation: This links the observable $X_t$ to the unobserved state $p_t$. Since $X_t$ follows a Bernoulli distribution with parameter $p_t$ :
$$
X_t \mid p_t \sim \operatorname{Bernoulli}\left(p_t\right)
$$
## Parameter Estimation using Kalman Filter

For linear state space models, the Kalman filter is typically used for estimating the state variables. However, because the observation model (Bernoulli distribution) is nonlinear, you might need to use an extension of the Kalman filter such as the Extended Kalman Filter (EKF) or the Unscented Kalman Filter (UKF), which are designed to handle nonlinearities:
- Extended Kalman Filter (EKF): Approximates the state distribution using a linearization technique. It might not be the best choice here due to the potentially poor approximation of the Bernoulli observation model.
- Unscented Kalman Filter (UKF): Uses a deterministic sampling technique to capture the mean and covariance of the state distribution. It is generally better at handling the kind of nonlinearity present in a Bernoulli observation model.


## Particle Filtering

Particle filters, or sequential Monte Carlo methods, are another powerful option, particularly useful when dealing with non-linear models like ours where $p_t$ follows a random walk and $X_t$ is Bernoullidistributed. Particle filters manage a set of hypotheses ("particles") about the state values and update these based on the observations:
- Each particle represents a possible value of $p_t$.
- When a new observation $X_t$ arrives, the particles are updated based on the likelihood of $X_t$ given $p_t$ and the dynamics of $p_t$.