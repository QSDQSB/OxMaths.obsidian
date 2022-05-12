## Orbit Counting Formula
#Groups 

`fix(g)`	for $g\in G$, we define $$\operatorname{fix}(g)=\{s\in S: g\cdot s = s\}.$$

### Theorem
Let $G$ be a finite group acting on a finite set $S$. Then $$\#\,orbits = {1\over |G|}\sum_{g\in G}|\operatorname{fix}(g)|.$$

#### Proof
Consider the set 
$$
A=\{(g,s):g\cdot s = s\} \subseteq G\times S
$$
and try to count up $|A|$ in two different ways.

Note that 
$$
|A|=\sum_{g\in G}|\{s\in S: g\cdot s =s \}| = \sum_{s\in S} |\{g\in G: g\cdot s = s\}|.
$$
The first and second sums respectively equal
$$
\sum_{g\in G}|\operatorname{fix}(g)|\quad \text{and} \quad 
\sum_{s\in S}|\operatorname{Stab}(s)|.
$$
Say the orbits are $O_1,O_2,\dots,O_N$ then [as the orbits partition $S$](Orbit#Proposition%20272),
$$
\sum_{s\in S}|\operatorname{Stab}(s)|=\sum_{i=1}^N\sum_{s\in O_i}|\operatorname{Stab}(s)|.
$$

Applying the [[Orbit-Stabilizer Theorem]] we may rewrite the previous terms as
$$
\sum_{i=1}^N\sum_{s\in O_i}|\operatorname{Stab}(s)| = 
\sum_{i=1}^N\sum_{s\in O_i}{|G|\over |O_i|}=\sum_{i=1}^N|G|=N|G|.
$$

Hence 
$$
N|G|=\sum_{g\in G}|\operatorname{fix}(g)|.
$$

```ad-comment
Note that if $g$ and $h$ are [[conjugate]] then $$\operatorname{fix}(g)=\operatorname{fix}(h) .$$
To see this, say $g=$ $k^{-1} h k$, and note
$$
g \cdot s=s \Longleftrightarrow k^{-1} h k \cdot s=s \Longleftrightarrow h \cdot(k \cdot s)=(k \cdot s)
$$
So we can rewrite the orbit counting formula as
$$
N=\frac{1}{|G|} \sum_{g \in C_{i}}|\operatorname{fix}(g)||C(g)|
$$
where we take a representative $g$ from each of the conjugacy classes $C_{i} .$
```

### Example 289
>In how many essentially different ways can a **triangle**'s edges be painted with $n$ colours. Compare your answers for $n=2$ and $n=3$ with those found in [[GG_Sheet6]].

**Solution**. With labels still present there are $n^{3}$ colourings. So we can form the table
$$
\begin{array}{|c|c|c|c|c|}
\hline g & \# \text { of conjugates } & s \text { fixed by } g & \operatorname{fix}(g) & \text { contribution } \\
\hline e & 1 & \text { all } & n^{3} & n^{3} \\
\hline r & 2 & C_{1} C_{1} C_{1} & n & 2 n \\
\hline s & 3 & C_{1} C_{1} C_{2} & n^{2} & 3 n^{2} \\
\hline
\end{array}
$$
By the [[orbit counting formula]] there are
$$
\frac{n^{3}+3 n^{2}+2 n}{6}=\frac{n(n+1)(n+2)}{6}
$$
**essentially** different colourings.
Note this fomula gives $2 \times 3 \times 4 / 6=4$ and $3 \times 4 \times 5 / 6=10$ colourings when $n=2$ and $n=3$ as previously calculated.