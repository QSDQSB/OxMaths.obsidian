---
aliases: [encoder, decoder, autoencoder]
---
# Encoder, Decoder and Autoencoder
#ML 

## Encoder
For a data item $x_{i} \in \mathbb{R}^{p}$, we want to find a lower dimensional representation $z_{i} \in \mathbb{R}^{K}$ with $K \ll p$. Such representation should capture important aspects of the data. We denote by enc ${ }_{\theta}: \mathbb{R}^{p} \rightarrow \mathbb{R}^{K}$ such transformation, called an encoder. The ==encoder== is parameterised by a vector $\theta \in \Theta$, and we have
$$
z_{i}=\operatorname{enc}_{\theta}\left(x_{i}\right) .
$$
## Decoder
Similarly, we assume that there is another transformation $\operatorname{dec}_{\theta}: \mathbb{R}^{K} \rightarrow \mathbb{R}^{p}$, called a ==decoder==, that transforms the latent representation $z_{i}$ back into the original space $\mathbb{R}^{p}$. This transformation is also parameterised by $\theta$. Denote
$$
\widehat{x}_{i}=\operatorname{dec}_{\theta}\left(z_{i}\right)
$$
the reconstructed example. 
## Autoencoder
Let $h_{\theta}: \mathbb{R}^{p} \rightarrow \mathbb{R}^{p}$ be the function defined by
$$
h_{\theta}\left(x_{i}\right)=\operatorname{dec}_{\theta}\left(\operatorname{enc}_{\theta}\left(x_{i}\right)\right)=\widehat{x}_{i}
$$
and called an ==autoencoder==. Note that, as $K$ is typically smaller than $p$, the auto-encoder transformation in general incurs some loss of information and $\widehat{x}_{i} \neq x_{i}$.
