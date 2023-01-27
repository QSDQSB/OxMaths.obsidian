#ML 

## Adding Penalty to Leave Nodes
### Cost Complexity Pruning
**Cost complexity pruning** (CCP) which provides a more efficient solution in this regard. CCP is a complex and advanced technique which is parametrised by the parameter α in `Scikit` Learn `DecisionTreesclassifier` module.

An alternative to explicitly specifying the *depth* of a [[decision tree]] is to grow a very large, complex tree and then prune it back to find an optimal subtree. We find the optimal subtree by using a cost complexity parameter $(\alpha)$ that penalises our objective function for the number of terminal nodes of the tree $(T)$.
$$
\operatorname{minimize}\{S S E+\alpha|T|\}
$$
For a given value of $\alpha$ we find the smallest pruned tree that has the lowest penalised error. You may recognise the close association to the [[Lasso Regression|lasso penalty]]. As with the regularisation methods, smaller penalties tend to produce more complex models, which result in larger trees. Whereas larger penalties result in much smaller trees. Consequently, as a tree grows larger, the reduction in the SSE must be greater than the cost complexity penalty. Typically, we evaluate multiple models across a spectrum of $\alpha$ and use $\mathrm{CV}$ to identify the optimal value and, therefore, the optimal subtree that generalises best to unseen data.

## Post-Pruning
