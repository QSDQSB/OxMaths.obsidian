# Project Euler 753 

When $p=6k-1$，It can shown that $a^3 \text{ mod }p$ has $p-1$ different values for $a\in\{1,\cdots,p-1\}$. Then immediately  $F(p)=(p-1)(p-2)$, as we could arbitrarily choose 2 numbers to be $a$ and $b$ and there must be a unique corresponding $c$.

When $p=6k+1$, by Fermat's Little theorem we have $a^{p-1}\equiv 1 \mod p$. Then it becomes $(a^2)^{3k}\equiv1 \mod p$. I am still trying to proceed further, but here is some info from online forum:

>The equation is homogeneous so the number of total solutions is equal to $p-1$ times the number of solutions to $x^3 + 1 \equiv z^3 \mod p$. 

And you can brutal force to find the number of solutions for this, and therefore solve the equation.