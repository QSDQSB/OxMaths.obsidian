https://www.1point3acres.com/bbs/thread-834530-1-1.html
第一轮：
先让我walk through了一下resume，然后开始coding
两道题Leetcode `921和746`

然后问数学题
X ~ N(0, σ_x^2)
Y ~ N(0, σ_y^2)
P(X+Y > 0 | Y > 0)?
答案应该是 1/2 + arctan(σ_y/σ_x) / π

数学题答得不太好，但是两周后还是收到通知约了第二轮

第二轮：
Coding：`1186`的变体，用DP即可

数学题：
A是$N*N$ 矩阵，每个entry都是1或0，$A\times A$ 是zero matrix, 问A里最多多少个1 （思路是把A当作描述graph的adjacency matrix，可知这个graph里的path长度最多为1）
答案 $N$如果是偶数：$N^2$

---

说是1小时但是聊了有80分钟，先聊research project然后细节问了问，然后有四个题，都是统计：
1. 随机变量uniform distribution [0,x]，假如给数据，怎么estimate x，深挖计算细节
2. 丢硬币，p有个uniform prior，如果有data怎么算posterior怎么get MAP，也是要深挖计算细节，还考到共轭先验