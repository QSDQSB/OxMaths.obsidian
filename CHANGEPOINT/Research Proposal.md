Jiahe Qiu

## Goal
*Develop an online algorithm to test for parameter changes in an autoregressive model.*
- To be precise, a time series is observed with an autoregressive assumption. At certain points (unknown locations & numbers) ,  structural changes occur and the parameters are updated (to unknown values).
- We want to develop an algorithm that is able to find the changepoints, and adjust parameters to fit the time series, in an online manner.
#### Why This Is a Problem
The parameters of an autoregressive model are non-trivial and not observable in the autoregressive models. The existing techniques for changepoint detection of ARMA parameters are almost all based on offline estimation (CUSUM test for example).
## Current Thought
Currently two thoughts, one seems too naive and straightforward, the other seems too hard.
### The Easy Approach
- Use an online Autoregressive algorithm to have a parameter fit w.r.t. time.
- Perform an Bayesian online changepoint detection based on parameter fit.
![](ogd.pdf)(the figure is a parameter fit of a generated autoregressive sample. `x-axis` time, y-axis parameter value. The dashed horizontal line means the TRUE value of the parameter, the real line is the parameters of online gradient descent arima fit, the vertical dashed lines indicate time change) 

Things to manipulate: 
- Examine changepoints based on the $error$ of the fit, instead of the $parameters$.
- Extension to other online Time Series Forecast Algorithms.
- Manipulate Bayesian Online Changepoint Detection. Prior, etc.
- Online AR's Update method: Gradient Descent / Netwon's Method / Adapative Gradient Descent, etc..

Why This Method is Bad
- **No original content,  no deduction at all**. Online AR is existing. Bayesian Online Changepoint Detection is existing. It's like *Application of Bayesian Online Changepoint Detection to the Dataset of Autoregressive Parameters*, which might be too simple?
- Also, if we manipulate on autoregressive models (update methods for example), it seem off the topic to me. It's about the  performance of online AR models, not about *changepoint detection*.

### The Hard Approach
- An autoregressive hidden Markov model. 
	- The observations state is the time series $X_t$, $X_t$ is autoregressive based on $X_{t-1},\,X_{t-2},\,X_{t-3}$ with parameters $\phi_t$. Order 3 of AR is chosen to capture the AR behaviour, but not involving too much computational complexity.
	- The hidden state is $\phi_t$, the parameters of AR. We assume $\phi_t=\phi_{t-1}$ if the changepoint $c_t=0$, otherwise $\phi_t=\phi_{t-1}+O_t$ where $O_t$ is multivariate Gaussian. We model $c_t$ with some Bernoulli distribution.
- Use MCMC to do Expectation-maximisation to update the parameters.
- If multistep HMM is too infeasible, could switch to a simple hidden Markov model, where the observation state is the `recent observations` vector $(X_{t-2},X_{t-1},X_{t})$ and the Markov property can be satisfied. But to the best of my knowledge, the computational cost is still high.

Difficulties
1. Computational complexity. The transition matrix / paramters grow exponentially compared to a single Markov model.
2. The hidden state $\phi_t$ has a continuous state space. I am not sure if MCMC is going to converge in a reasonable time. The transition equation $\phi_t=\phi_{t-1}+\mathbb{1}_{c_t} O_t$ brings too much noise - there is basically no information for *how the changepoint occurs*. Even if we relax the hidden state to 0.1, 0.2, ..., 0.9 and the sum of the absolute value of parameters is less than 1, it's still of cardinality around 300. So we are talking about a transition matrix of size $300\times300$, and this is already a non-accurate approximation.

---

To summarise, I think this approach is quite novel, but with lots of computational challenge / modelling challenge / fine tunings.

I saw papers using HMM to model regime-switching time series. But the state spaces are often finite and known - for example for a road traffic data, with pre-known 4 stages (good traffic, accident, etc.), and the data is without an AR manner. However if I only apply HMM to the standard changepoint detection problem (i.e. directly detect shifts of $X_t$), this HMM looks like a sub-model of a [Bayesian state-space time series forecasting model](https://openreview.net/pdf?id=rJLTTe-0W).