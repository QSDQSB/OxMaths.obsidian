```R
Sigma = matrix(c(10,1,1,1),2,2)
data = mvrnorm(n=100, mu = c(2,-5),Sigma = Sigma)

data = data.frame(data)
```