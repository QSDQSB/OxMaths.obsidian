# Revision 1
#R 

## 2017Q3
The Laplace or double exponential distribution with parameters $\mu, \lambda$ has probability density function
$$
f(x ; \mu, \lambda)=\frac{\lambda}{2} \exp \{-\lambda|x-\mu|\}, \quad x \in \mathbb{R}
$$
### (a)
[4 marks] Find the cumulative distribution function for $f$, and explain how to use the inversion method to sample from this distribution.

#### Solution
Use integration to find $F$ and use inversion to find $F^{-1}$.

### (b)
[3 marks] Write an $\mathrm{R}$ function `rlaplace()` to sample from $f$; the function should have two arguments mu and lambda with respective default values 0 and 1 , and return a single number.

#### Solution
```R
rlaplace = function(mu=0, lambda=1) {
	u=runif(1)
	if u<(1/2) {
		return (mu+log(2*mu)/lambda)
	} else {
		return(mmu-1/lambda*log(2*(1-u)))
	}
}
```

### (c)
[5 marks] Now suppose that $p(x)$ is the density of a real valued random variable. Explain how to use a Metropolis-Hastings algorithm with proposal distribution $q(y \mid x)$ to sample from $p(x)$.

#### Solution
MCMC-MH Algorithm:
1) Start at somem initial position $X_0=x_0$.
2) for $t$ in $1:n$
	- Let $X_{t-1}=x$
	- Sample $Y_t=q(y|x)$
	- Sample $U=U[0,1]$
	- If $u<\alpha$ then set $X_t=y$, else set $X_t=x$
3) $$\alpha = \min\{  1, \frac{q(x|y)p(y)}{q(y|x)p(x)} \}$$

### (d)
[5 marks] Write an $\mathrm{R}$ function MHstep ( ) to perform a single Metropolis-Hastings step. It should have the following arguments:
- $x$, the current state of the Markov chain;
- $p$, a function of one variable $\mathrm{x}$ that returns the density of a target distribution $p$;
- $q$, a function of two variables $\mathrm{x}$ and $\mathrm{y}$ that returns the density of the proposal distribution $q(y \mid x)$.
- $rq$, a function of one variable $\mathrm{x}$ that returns a single sample from the proposal distribution $q(y \mid x)$.

The function should propose a new state to move to using the function q, perform the Metropolis-Hastings step, and return a list containing
- x, the new state of the Markov chain;
- move, an indicator of whether or not the chain moved from its previous step.

#### Solution
```R
MHStep <- function(x,p,q,rq) {
	y <- rq(x)
	alpha <- min( 1, q(y,x)*p(y)/q(x,y)/p(x) )
	u<-runif(1)
	if (u<alpha) {
		x<- y
	}
	return list(x=x,move = u<alpha)
}
```



Let $p(x)$ be a density function on $\mathbb{R}$ and $g(x)$ be a function satisfying $\int_{\mathbb{R}} p(x) g(x) d x<\infty$. Let $p(x)$ and $g(x)$ respectively be $R$ implementations of these functions.
### (e)
[6 marks] Write code to estimate $\mathbb{E}_{p} g(X)$ using a [[Metropolis-Hastings algorithm]], with proposal density given by a Laplace distribution with $\lambda=1$ and centred around the current observation. Your method should make use of MHstep() and rlaplace(), and you may assume that $\mathrm{p}()$ and $\mathrm{g}()$ are provided. You should write any other functions required to make the code run.
#### Solution
```R
dlaplace <- function(x,mu,lambda) {
	return(lambda / 2 + exp(-lambda*abs(x-mu)))
}

N=1e3
X=numeric(N)
X[1]=0

for (t in 2:N) {
	out = MHstep(x=X[t-1], 
				 p=p,
				 q=function(x,y){ 
				 	dlaplace(x,y,lambda)	 
				 },
				 rq= function(x) {
				 	rlaplace(mu=x,lambda=1)
				 }
	)
	X[t]=out$x
}

mean(g(X))
```


### (f)
[2 marks] Briefly explain what will happen to the estimates for different choices of $\lambda$.

#### Solution
- small $\lambda$: 
- big $\lambda$: Small moves