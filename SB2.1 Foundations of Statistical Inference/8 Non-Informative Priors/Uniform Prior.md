#FOSI 

## Definition
The uniform prior or flat prior is the prior $\pi(\theta) \propto 1$.
This is the obvious, naive representation of lack of information; every value being equally likely. Under this prior, the posterior is
$$
\pi(\theta \mid x)=\frac{L(\theta, x)}{\int_{\Theta} L(\theta, x) \mathrm{d} \theta},
$$
which is well defined as long as $\int_{\Theta} L(\theta, x) \mathrm{d} \theta<\infty$.