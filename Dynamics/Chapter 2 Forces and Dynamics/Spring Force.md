## Spring Force
#Dynamics 
### Definition
A spring is fixed at one end and attached to a particle at the other. The particle will experience a force, $\mathbf{F}$, directed along the line of the spring with a magnitude that depends on the extension of the spring from its equilibrium length.
Hooke's linear law states that the force is proportional to the extension, so that
$$
\mathbf{F}=-k(x-l) \mathbf{t}
$$
where $\mathbf{t}$ is the unit vector along the spring pointing towards the particle, $x$ is the length of the spring, $l$ is the equilibrium length, and $k$ is the spring constant.
### Example
Suppose a particle of mass $m$ is attached to a spring that possesses a spring constant $k,$ a length $l,$ and is fixed by its opposing end to the origin, while aligned along the $x$ -axis of a table top with no friction. Initially the particle is at location $x(0)=l,$ with speed $\dot{x}(0)=u$ in the positive $x$ direction. Determine its trajectory.

Solution Resolving Newton's second law along the $x$ axis gives the equation of motion
$$
m \ddot{x}=-k(x-l)
\quad\color{yellow}\text{(2.16).}
$$
and $x(0)=l, \dot{x}(0)=u .$ With $x=l+q$ we have
$$
\ddot{q}=-\omega^{2} q, \quad \omega^{2}=\frac{k}{m}>0.
\quad\color{yellow}\text{(2.17)}
$$
Thus $q=A \sin (\omega t+\psi),$ where $A$ is the amplitude and $\psi$ the phase of the ensuing oscillation. Imposing the initial conditions gives $A \omega=u, \psi=0$ and hence
$$
x(t)=l+\frac{u}{\omega} \sin \omega t.
$$