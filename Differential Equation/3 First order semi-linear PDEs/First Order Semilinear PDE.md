# First Order Semi-Linear PDE
#DE 

$$P(x, y) \frac{\partial z}{\partial x}+Q(x, y) \frac{\partial z}{\partial y}=R(x, y, z)$$
^The-PDE

## The Problem
We will assume that in the region specified, $P(x, y)$ and $Q(x, y)$ are Lipschitz continuous in $x$ and $y$ and $R(x, y, z)$ is continuous and [[Differential Equation/1 ODE and Picard's Theorem/Lipschitz|Lipschitz]] continuous in $z$. This will be enough to ensure that the [[Linear Algebra/Part A/1 Vector Spaces and Linear maps/Characteristic|characteristic]] equations have a solution through each point in the region, which is unique except at points where $P=0$ and $Q=0$ (see below).
## Solution Surface
The solution of (3.1) will be a function
$$
z=f(x, y)
$$
but can be thought of as the surface defined by this equation, or equivalently defined by the equation
$$
\Sigma(x, y, z):=z-f(x, y)=0 .
$$
We shall refer to this as the solution surface and call it $\Sigma$. The method of solution of the equation will be to generate $\Sigma$.
#### A Normal to the Solution Surface
A normal to the solution surface is defined by
$$
\mathbf{n}=\nabla \Sigma=\left(\frac{\partial \Sigma}{\partial x}, \frac{\partial \Sigma}{\partial y}, \frac{\partial \Sigma}{\partial z}\right)=\left(-f_{x},-f_{y}, 1\right)
$$