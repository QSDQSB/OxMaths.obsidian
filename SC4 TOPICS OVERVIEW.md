### Chapter 1: Introductory Materials

- Supervised vs unsupervised learning (notes section 1.1)
- Discriminative vs generative machine learning (notes sections 1.2 and 1.3)

### Chapter 2: Empirical Risk Minimization

- Empirical risk minimization (Chapter 2, examples sheet 1 Q1)
    - Loss functions
    - Risk
    - Hypothesis spaces
    - Empirical risk and ERM
    - Overfitting and regularization

### Chapter 3: Constrained Optimization and Support Vector Machines

- Constrained optimization and duality (section 3.1, examples sheet 1 Q2,3)
    - Lagrange multipliers
    - The primal problem
    - The Lagrangian and its lower bound interpretation
    - The dual problem and the Lagrange dual function
    - Weak duality, strong duality, and constraint qualifications
    - Complementary slackness
    - Optimality and the KKT conditions
- Support vector machines (SVMs, section 3.2)
    - Maximum margin classifier for linearly separable classification
        - Quadratic program form and associated derivation
    - The C-SVM
    - Lagrangian, stationary points, dual function, and training
    - The support vectors and complementary slackness
    - The nu-SVM (example sheet 1, Q2)

### Chapter 4: Kernel Methods

- Nonlinear feature maps and feature spaces (section 4.1)
- The kernel trick (examples sheet 1 Q4, examples sheet 2 Q1, 2)
- Reproducing kernel Hilbert spaces (RKHSs, section 4.2)
    - Inner products and Hilbert spaces
    - Formal definition of kernels
    - Positive-definite functions
    - Reproducing kernels and RKHSs
    - Equivalence between kernels, reproducing kernels, and positive-definite functions
    - Deriving the RKHS of a positive-definite function (whiteboard, section 4.2.1, and examples sheet 2 Q3)
- RKHSs as hypothesis classes (section 4.4)
    - RKHSs as function spaces
    - One-to-one correspondence between reproducing kernels and RKHSs
    - Specifying hypothesis classes through kernel choice
    - Representer theorem
    - Strengths and weaknesses of kernel methods
- Constructing kernels and operations with kernels (section 4.3, examples sheet 2 Q1)
    - Sum rule, product rule, and mapping rule of kernels
    - Kernel ridge regression (KRR, see also examples sheet 1 Q6)
    - Common kernels (RBF kernel, Matern kernels, etc)
    - Influence of kernel hyperparameters and visualizing kernels
- Kernel SVMs (section 4.5, examples sheet 1 Q5)
- Representing probabilities in RKHSs (section 4.6)
    - Kernel mean embeddings
    - Maximum mean discrepancy (MMD, examples sheet 2 Q5)
    - Hilbert-Schmidt independence criterion (HSIC)

### Chapter 5: Bayesian Machine Learning

- The Bayesian paradigm (section 5.1)
    - Bayesian vs frequentist probability
    - Bayes' rule, posteriors, and marginal likelihood / model evidence (sections 5.2, 5.4)
    - Prediction in Bayesian models (section 5.2)
    - Basics of Bayesian decision theory (section 5.3)
    - Strengths and weaknesses of Bayesian approach
- Bayesian modeling (sections 5.4 and 5.6)
    - Model-based reasoning
    - Common assumptions
    - Multiple hypotheses and Bayesian model averaging
    - Model comparison and Bayesian Occam's Razor
    - Bayesian linear regression (example sheet 2, Q6)
- Basics of Approximate Bayesian inference (section 5.7)
    - Challenges of Bayesian inference
    - MAP estimation
    - Laplace approximations
    - Importance sampling and self-normalization

### Chapter 6: Gaussian Processes (GPs)

- Nonparametric Bayesian models and functional priors
- GP definition and intuitions (section 6.2)
- GP regression (section 6.2, examples sheet 3 Q1, 2)
    - Conjugacy of Gaussians
    - Model, posterior, and posterior predictive
    - GP conjugacy
    - Links with KRR
    - Uncertainty estimation
- Influence and importance of hyperparameters, and hyperparameter tuning (section 6.3)
- GP classification and non-Gaussian likelihoods (section 6.4, examples sheet 3 Q3)
- Large-scale kernel approximations (section 6.5)
    - Low-rank approximations
    - Random Fourier features (examples sheet 3 Q4)
    - Sparse GPs and inducing points (examples sheet 4 Q6)
- Strengths and limitations

### Chapter 7: Deep Learning

- Motivations and high-level ideas (sections 7.1, 7.2, 7.3)
    - End-to-end learning vs feature engineering
    - Using multiple layers
    - Compositionality and differentiable programming
    - Computation graphs
- Neural networks (section 7.2)
    - Basic formulations and constructing networks from individual nodes
    - Weights, biases, and activation functions
    - Fully connected layers
    - Multi-layer perceptions (MLPs, examples sheet 4 Q1, 2)
    - The need for depth and associated intuitions
- Modules and architectures (sections 7.4 and 7.5)
    - Ops, modules, and factories
    - Example building blocks (linear factories, nonlinearity modules, max pooling, convolutions)
    - Convolutional neural networks (CNNs), ResNets, and DenseNets
    - Recurrent neural networks (RNNs)
- Backpropagation and automatic differentiation (sections 7.2 and 7.3)
    - Chain rule for neural networks
    - Importance of computation order
    - Backpropagation (examples sheet 4, Q1)
    - Automatic differentiation
    - Vector-Jacobian product calculators
- Training and practicalities (sections 7.6-7.9)
    - Gradient descent
    - Stochastic gradient descent (SGD) and minibatching
    - Momentum
    - ADAM
    - Initialization (examples sheet 4, Q2)
    - Regularization
    - Double descent phenomenon
    - Strengths and weaknesses of deep learning

### Chapter 8: Latent Variable Models and Variational Approaches

- Latent variable models (LVMs, section 8.1)
    - Latent variables
    - Factorized LVMs
    - Model learning and inference problem formulations
- Divergences (section 8.2)
    - The subjectivity of divergence definitions
    - KL divergence and its asymmetry
    - Jensen's inequality
- Variational inference (section 8.3)
    - Variational families
    - The ELBO
    - Optimization and gradient approaches (examples sheet 4 Q4)
    - Variational EM
    - Mean-field assumptions and coordinate ascent variational inference (CAVI, examples sheet 4 Q3)
    - Strengths and weaknesses of the variational approach
- Variational Auto-Encoders (VAEs, section 8.4)  
    - Model learning using the ELBO and stochastic gradients
    - Amortized inference
    - The VAE setup and end-to-end gradient training
    - The reparameterization trick and score function estimator
    - The auto-encoder view of VAEs (examples sheet 4, Q5)