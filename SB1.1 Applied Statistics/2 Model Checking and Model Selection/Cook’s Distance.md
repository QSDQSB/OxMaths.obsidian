## Definition
The [[Cook's distance]] for a point $\left(\mathbf{x}_i, y_i\right)$ is a measure of influence given by the sum of the squares of the shift in fitted values when point $i$ is removed. The Cook's distance for the $i$ th data point is defined to be
$$
C_i=\frac{\left(\widehat{y}-\widehat{y}_{-i}\right)^T\left(\widehat{y}-\widehat{y}_{-i}\right)}{p s^2}
$$
where $\widehat{y}_{-i}=X \widehat{\beta}_{-i}$. (That is, $\widehat{y}_{-i}$ is an $n$-component vector of fitted values, where the fit is based on all data points except point $i$, so $\left(\widehat{y}_{-i}\right)_k=\mathbf{x}_k^T \widehat{\beta}_{-i}$ for $\left.k=1, \ldots, n\right)$.