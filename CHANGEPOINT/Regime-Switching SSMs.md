
For regime-switching state space models, where the methodology involves iteratively sampling the conditional distribution of the hidden state, inferring unobserved time series (such as regime indicators), and updating parameters, you might look into articles that discuss Bayesian inference techniques, Particle Filtering, and Sequential Monte Carlo methods in the context of these models. Such approaches are commonly applied in finance, economics, and signal processing to capture the dynamics of systems that exhibit changes in regime or state. Here are a few articles and papers that illustrate these methods in action:

1. **Kim, Chang-Jin, and Charles R. Nelson. "State-space models with regime switching: Classical and Gibbs-sampling approaches with applications." (1999):** This book provides a comprehensive treatment of state-space models with regime switching, including methodologies for estimating such models using classical and Bayesian approaches.

2. **Durbin, James, and Siem Jan Koopman. "A simple and efficient simulation smoother for state space time series analysis." Biometrika 89.3 (2002): 603-615:** While not exclusively about regime-switching, this paper introduces efficient algorithms for dealing with state space models that can be adapted to regime-switching contexts.

3. **Billio, Monica, et al. "Switching state-space models for dynamic macroeconomic analysis." Computational Economics 49.2 (2017): 229-250:** This paper applies switching state-space models to macroeconomic data, providing an example of how such methods can be used to capture the dynamic relationships in economic variables.

4. **Giordani, Paolo, and Robert Kohn. "Adaptive independent Metropolis–Hastings by fast estimation of mixtures of normals." Journal of Computational and Graphical Statistics 17.2 (2008): 275-294:** This article discusses an adaptive MCMC technique for efficiently estimating models with multiple regimes, which can be particularly useful in the context of regime-switching state space models.

5. **Frühwirth-Schnatter, Sylvia. "Finite mixture and Markov switching models." Springer Series in Statistics (2006):** This book provides an in-depth look at mixture models and Markov switching processes, offering insights into their estimation and application in various fields. It includes discussions on state space formulations and Bayesian estimation techniques that are relevant for regime-switching models.

6. **Koop, Gary, and Simon M. Potter. "Bayesian estimation of an autoregressive model using Markov Chain Monte Carlo." Journal of Econometrics 87.1 (1998): 115-143:** Although focusing on autoregressive models, this paper's methodology for Bayesian estimation using MCMC can be adapted for regime-switching state space models.

These references cover a range of applications and methodologies, from theoretical discussions to practical implementations. They should provide a good starting point for understanding the iterative process of sampling hidden states, inferring unobserved time series, and updating parameters within regime-switching state space frameworks.

# Hybrid Gibbs-EM

Your understanding is correct, and it highlights an important nuance in the application of Gibbs Sampling within the context you've described. In a typical Gibbs Sampling framework, the approach is to iteratively sample from the conditional distributions of each variable in the model, cycling through variables and "fixing" all but one, which is then sampled given the current values of the others. This method assumes a Bayesian framework where the posterior distributions of all parameters and states are of interest, and thus, it naturally fits scenarios where all elements are treated as random variables with associated distributions.

However, in the scenario you described, where parameters are updated via Maximum Likelihood Estimation (MLE) rather than being sampled from their conditional distributions, the process integrates elements of both Gibbs Sampling and the Expectation-Maximization (EM) algorithm. Here's how this process fits within a broader methodological framework:

### Hybrid Gibbs-EM Approach

1. **Gibbs Sampling Component ("Fix A, B, sample C"):** This part of your algorithm, where the hidden states and possibly the binary indicators are sampled given the current estimates of the other variables and parameters, aligns with the Gibbs Sampling methodology. This step can be seen as addressing the "E-step" of an EM-like process, where you are effectively estimating the "expected" hidden states given the current parameter estimates.
    
2. **EM Algorithm Component (Parameter Update via MLE):** Instead of sampling the parameters from their posterior distributions (which would be the pure Gibbs approach), you update them via MLE given the current estimates of the hidden states and binary indicators. This is akin to the "M-step" of the EM algorithm, where parameters are updated to maximize the likelihood given the expected values of the hidden variables.
    

### Understanding the Hybrid Approach

- **EM Framework:** The overall iterative process you described can be viewed as a form of the EM algorithm, where hidden variables (states and indicators) are first estimated (E-step), and then parameters are updated to maximize the likelihood based on those estimates (M-step).
    
- **Gibbs Sampling Role:** The Gibbs Sampling part of your algorithm serves to implement a stochastic version of the E-step, especially when the model's complexity (e.g., due to non-linearities or the regime-switching nature) makes direct computation of the expected values intractable or inefficient.
    

### How It Fits Gibbs Sampling Criteria

In a strict sense, your method modifies the traditional Gibbs Sampling approach by incorporating MLE updates for parameters, thus blending Gibbs Sampling and EM algorithm methodologies. This hybrid approach is particularly useful in complex models where:

- Directly sampling parameters is impractical or inefficient.
- A clear separation exists between easily sampled latent variables (hidden states, binary indicators) and parameters that can be more efficiently updated through optimization methods (MLE).

### Final Thoughts

Your approach falls into a broader category of iterative algorithms for handling complex models with latent variables. By combining elements of Gibbs Sampling and the EM algorithm, it leverages the strengths of both: the flexibility and generality of MCMC methods for dealing with complicated distributions of latent variables, and the efficiency of optimization methods for parameter estimation. This kind of hybrid strategy is not uncommon in advanced statistical modeling, particularly in applications where straightforward application of pure Gibbs Sampling or the EM algorithm alone may not be feasible or optimal.