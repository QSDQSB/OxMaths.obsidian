## Conservation of Energy Theorem (Constrained Motion)
#Dynamics 
If we consider a particle of mass $m,$ acted on by a force $\mathbf{F}_{0},$ that is then further constrained to move on a smooth constraint space, Newton's second law simply reads
$$
m \ddot{\mathbf{r}}=\mathbf{F}=\mathbf{F}_{0}+\mathbf{N}
$$
where $\mathbf{N}$ is the normal reaction/constraint force. We have the following important result:
### Theorem
Suppose that the force $\mathbf{F}_{0}=-\nabla V$ is [conservative](Conservative%20Force), with potential $V=V(\mathbf{r}) .$ Then the total energy $E=$ $T+V$ for the constrained motion of a point particle is conserved.
#### Proof
From Newton's second law
$$
m \ddot{\mathbf{r}}=\mathbf{F}_{0}(x)+\mathbf{N}=-\nabla V(\mathbf{r})+\mathbf{N}
$$
where $\mathbf{r}=\mathbf{r}(t)$ is a function of time. **Taking the dot product of both sides by $\dot{\mathbf{r}}$** on noting $\mathbf{N} \cdot \dot{\mathbf{r}}=0$ gives
$$
\frac{\mathrm{d}}{\mathrm{d} t}\left(\frac{1}{2} m \dot{\mathbf{r}}^{2}\right)=m \dot{\mathbf{r}} \cdot \ddot{\mathbf{r}}=-\dot{\mathbf{r}} \cdot \nabla V=-\frac{\mathrm{d} V(\mathbf{r}(t))}{\mathrm{d} t},
\quad\color{yellow}\text{(5.4)}
$$
and, once more, we have [energy conservation](Conservation%20of%20Energy):
$$
\frac{1}{2} m \dot{\mathbf{r}}^{2}+V(\mathbf{r})=T+V=E, \text { constant }.
\quad\color{yellow}\text{(5.5)}
$$