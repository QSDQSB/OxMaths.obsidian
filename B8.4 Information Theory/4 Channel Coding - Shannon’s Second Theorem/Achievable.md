## Definition
A rate $R>0$ is [[Achievable]] for a [[Discrete Memoryless Channel|DMC]] $(\mathcal{X}, M, \mathcal{Y})$, if for any $\varepsilon>0$ there exists sufficiently large $m, n$ and $a(m, n)$-channel code $(c, d)$ with
$$
\rho(c, d)>R-\varepsilon \text { and } \varepsilon_{\max }<\varepsilon
$$
where $\varepsilon_{\max }$ denotes the maximal error of $(c, d)$.
In other words, a rate $R$ is achievable if there exists a sequence of codes whose rates approach $R$ and whose maximal errors approach zero. A priori it is by no means obvious that a message may be transmitted over a [[Discrete Memoryless Channel|DMC]] at a given rate with as small probability of error as desired! Shannon's result not only shows that this is possible but also shows that the set of rates that can be achieved is exactly those that are bounded by the [[Channel Capacity]] $C$. We already saw that the [[Channel Capacity]] can be explicitly computed for some important channels. All these are reasons why Theorem $4.13$ is considered a (maybe even the) major result of communication theory.