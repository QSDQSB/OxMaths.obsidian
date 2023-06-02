---
aliases: [Huffman's Code, Huffman code, Huffman's code]
tags: [InfoTheory]
---
we construct a rooted tree starting from the nodes of the least likely letters. For brevity of presentation, we describe only the binary Huffman code in detail: fix a pmf $p$ on $\mathcal{X}=\{1, \cdots, m\}$ and a random variable $X \sim p$, and assume (by relabelling) that $p_1 \geq \cdots \geq p_m$ with $p_i:=p\left(x_i\right)$. Then

1) Associate with the two least likely symbols, two leaves that are joined into a vertex,
2) Build a new distribution on $m-1$ symbols $p$, where $p_1^{\prime}=p_1, \cdots, p_{m-2}^{\prime}=p_{m-2}$ and $p_{m-1}^{\prime}:=p_{m-1}+$ $p_m$ (i.e. symbols $m-1$ and $m$ are merged into one new symbol with probability $p_{m-1}^{\prime}=p_{m-1}+p_m$ ), and relabel the resulted pmf by non-increasing order.
3) Repeat above two steps of merging the two least likely symbols until we have a rooted tree.

## Proposition 3.15: Optimality of Huffman
Let $\mathcal{X}, \mathcal{Y}$ be finite sets and $p$ a pmf on $\mathcal{X}$ with a random variable $X \sim p$. The Huffman code $c: \mathcal{X} \longrightarrow \mathcal{Y}^*$ for $p$ is [[Optimal Codes|optimal]], i.e. if $c^{\prime}$ is another [[Classes of Codes|uniquely decodable]] code $c^{\prime}: \mathcal{X} \longrightarrow \mathcal{Y}^*$ then
$$
\mathbb{E}[|c(X)|] \leq \mathbb{E}\left[\left|c^{\prime}(X)\right|\right]
$$

### Lemma 3.16
Let $p$ be a pmf on $\mathcal{X}=\left\{x_1, \cdots, x_m\right\}$ and assume wlog that $p_1 \geq \cdots \geq p_m$ for $p_i:=p\left(x_i\right)$ There exists an [[Optimal Codes|optimal]] [[Classes of Codes|prefix code]] that has the property that
1) $p_j>p_k$ implies $\left|c\left(x_j\right)\right| \leq\left|c\left(x_k\right)\right|$,
2) the two longest codewords have the same length,
3) the two longest codewords only differ in the last digit.

#### Proof of Lemma 3.16
The existence of an [[Optimal Codes|optimal]] [[Classes of Codes|prefix code]] holds since the set of [[Classes of Codes|prefix codes]] is well-ordered by expected length, hence there exists a (not necessarily unique) [[Optimal Codes|optimal code]].

- For `Point (1)`, fix an [[Optimal Codes|optimal code]] $c$ and consider the code $c^{\prime}$ given by interchanging the codewords of $c$ for $x_j$ and $x_k$ for some $j, k$ with $j<k$ resp. $p_k<p_j$. Then
$$
\begin{aligned}
0 & \leq \sum_i p_i\left|c^{\prime}\left(x_i\right)\right|-\sum_i p_i\left|c\left(x_i\right)\right| \\
& =p_j\left|c\left(x_k\right)\right|+p_k\left|c\left(x_j\right)\right|-p_j\left|c\left(x_j\right)\right|-p_k\left|c\left(x_k\right)\right| \\
& =\left(p_j-p_k\right)\left(\left|c\left(x_k\right)\right|-\left|c\left(x_j\right)\right|\right) .
\end{aligned}
$$
Hence $\left|c\left(x_k\right)\right| \geq\left|c\left(x_j\right)\right|$.
- For `Point (2)`, assume the contrary and remove the last digit from the longest codeword. This would still give a [[Classes of Codes|prefix code]] and this new [[Classes of Codes|prefix code]] would have strictly smaller expected length. Hence, the two longest codewords must have the same expected length. 
	- Non-identical is ensured by [[Classes of Codes|prefix code]].
- For `Point (3)`, identify a prefix code with a rooted tree. A codeword of maximum length must have a sibling (a leaf connecting to same vertex; otherwise, we could remove the last digit and get a [[Classes of Codes|prefix code]] of shorter expected length). Now exchange codewords until the two elements of $\mathcal{X}$ with lowest probabilities are associated with two siblings on the tree.


