The reparameterisation trick reduces the variance of gradient estimates in variational inference by transforming the stochastic sampling process into a deterministic one with respect to the variational parameters. This transformation allows for the use of standard gradient-based optimization techniques.

### Explanation

1. **Standard Variational Inference:**
   In standard variational inference, the gradient of the ELBO with respect to the variational parameters $\phi$ involves expectations over the variational distribution $q_\phi(z \mid x)$:
   $$
   \nabla_\phi \mathcal{L}(\theta, \phi) = \nabla_\phi \mathbb{E}_{q_\phi(z \mid x)} \left[ \log p_\theta(x, z) - \log q_\phi(z \mid x) \right]
   $$
   This expectation is typically approximated using Monte Carlo sampling:
   $$
   \nabla_\phi \mathcal{L}(\theta, \phi) \approx \frac{1}{L} \sum_{i=1}^L \nabla_\phi \left[ \log p_\theta(x, z^{(i)}) - \log q_\phi(z^{(i)} \mid x) \right]
   $$
   where $z^{(i)} \sim q_\phi(z \mid x)$.

2. **High Variance of Gradient Estimates:**
   Directly sampling $z^{(i)}$ from $q_\phi(z \mid x)$ can lead to high variance in the gradient estimates. This is because the sampling process is stochastic, and the gradients $\nabla_\phi \log q_\phi(z^{(i)} \mid x)$ can vary significantly across samples.

3. **Reparameterization Trick:**
   The reparameterization trick addresses this issue by expressing the random variable $z$ as a deterministic function of $\phi$ and a noise variable $\epsilon$ drawn from a fixed distribution. For example, if $q_\phi(z \mid x)$ is a Gaussian distribution $\mathcal{N}(\mu_\phi(x), \sigma_\phi(x)^2)$, we can reparameterize $z$ as:
   $$
   z = \mu_\phi(x) + \sigma_\phi(x) \cdot \epsilon \quad \text{where} \quad \epsilon \sim \mathcal{N}(0, I)
   $$
   Here, $\epsilon$ is independent of $\phi$.

4. **Deterministic Transformation:**
   This reparameterization makes the latent variable $z$ a deterministic function of $\phi$:
   $$
   z = g(\epsilon, \phi) = \mu_\phi(x) + \sigma_\phi(x) \cdot \epsilon
   $$

5. **Gradient with Reparameterization:**
   The gradient of the ELBO with respect to $\phi$ can now be written as:
   $$
   \nabla_\phi \mathcal{L}(\theta, \phi) = \nabla_\phi \mathbb{E}_{\epsilon \sim \mathcal{N}(0, I)} \left[ \log p_\theta(x, g(\epsilon, \phi)) - \log q_\phi(g(\epsilon, \phi) \mid x) \right]
   $$
   Since $z$ is now a deterministic function of $\phi$, we can move the gradient inside the expectation:
   $$
   \nabla_\phi \mathcal{L}(\theta, \phi) = \mathbb{E}_{\epsilon \sim \mathcal{N}(0, I)} \left[ \nabla_\phi \left( \log p_\theta(x, g(\epsilon, \phi)) - \log q_\phi(g(\epsilon, \phi) \mid x) \right) \right]
   $$

6. **Reduced Variance:**
   The key advantage here is that the gradient $\nabla_\phi$ is now taken with respect to a deterministic function of $\phi$, rather than a stochastic one. This reduces the variance of the gradient estimates because the deterministic function $g(\epsilon, \phi)$ is smoother and more stable compared to direct sampling.

### Proof of Variance Reduction

Consider the variance of the gradient estimate in the original and reparameterized formulations:

1. **Original Gradient Estimation:**
   $$
   \nabla_\phi \mathcal{L}(\theta, \phi) \approx \frac{1}{L} \sum_{i=1}^L \nabla_\phi \left( \log p_\theta(x, z^{(i)}) - \log q_\phi(z^{(i)} \mid x) \right)
   $$
   where $z^{(i)} \sim q_\phi(z \mid x)$. The variance of this estimator depends on the variability of $z^{(i)}$ directly sampled from $q_\phi(z \mid x)$.

2. **Reparameterized Gradient Estimation:**
   $$
   \nabla_\phi \mathcal{L}(\theta, \phi) \approx \frac{1}{L} \sum_{i=1}^L \nabla_\phi \left( \log p_\theta(x, g(\epsilon^{(i)}, \phi)) - \log q_\phi(g(\epsilon^{(i)}, \phi) \mid x) \right)
   $$
   where $\epsilon^{(i)} \sim \mathcal{N}(0, I)$ and $z^{(i)} = g(\epsilon^{(i)}, \phi)$. The variance of this estimator is typically lower because $g(\epsilon, \phi)$ is a smoother function, reducing the variability introduced by $\epsilon$.

### Example

Let's consider a simple example with a Gaussian variational distribution:

- **Variational Distribution:**
  $$
  q_\phi(z \mid x) = \mathcal{N}(\mu_\phi(x), \sigma_\phi(x)^2)
  $$

- **Reparameterization:**
  $$
  z = \mu_\phi(x) + \sigma_\phi(x) \cdot \epsilon \quad \text{with} \quad \epsilon \sim \mathcal{N}(0, 1)
  $$

- **Gradient Estimation (without reparameterization):**
  $$
  \nabla_\phi \mathbb{E}_{q_\phi(z \mid x)} [\log p_\theta(x \mid z)] \approx \frac{1}{L} \sum_{i=1}^L \nabla_\phi \log p_\theta(x \mid z^{(i)})
  $$
  with $z^{(i)} \sim q_\phi(z \mid x)$.

- **Gradient Estimation (with reparameterization):**
  $$
  \nabla_\phi \mathbb{E}_{\epsilon \sim \mathcal{N}(0, 1)} [\log p_\theta(x \mid g(\epsilon, \phi))] \approx \frac{1}{L} \sum_{i=1}^L \nabla_\phi \log p_\theta(x \mid (\mu_\phi(x) + \sigma_\phi(x) \cdot \epsilon^{(i)}))
  $$

The reparameterization makes the gradients depend on $\phi$ in a more controlled and stable manner, thus reducing the variance and leading to more efficient optimization.

### Summary

- The reparameterization trick transforms the sampling process into a deterministic one with respect to the variational parameters $\phi$.
- This reduces the variance of the gradient estimates because the deterministic function $g(\epsilon, \phi)$ is smoother and more stable compared to direct sampling from $q_\phi(z \mid x)$.
- The result is more efficient and stable optimization of the ELBO in variational inference.