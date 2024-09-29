
[[Bayesian Higher Order HMM.pdf]]
- > Any HOHMM can be reformulated as a first order HMM by moving either in blocks of q time steps or, more conventionally, in single time steps but with a special q-tuple initial latent stat
- A two-stage [[Metropolis Hastings Markov Chain Monte Carlo algorithm|MCMC]] algorithm for learning the parameters of the model. The first stage selects the important lags implementing a coarser ‘hard’ sharing approximation using a **stochastic search variable selection** (SSVS) approach. The second stage keeps the set of important lags fixed and implements the finer soft kernel sharing feature, building on existing computational machineries for the HDP-HMM.
