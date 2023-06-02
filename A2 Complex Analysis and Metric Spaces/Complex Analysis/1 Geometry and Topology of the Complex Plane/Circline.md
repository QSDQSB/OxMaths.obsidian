---
aliases: [circlines]
---
#ComplexAnalysis 

## Definition
A [[Circline]] is either
- A circle in $\mathbb{C}$ (considered as a subset of $\mathbb{C}_{\infty}$ ) or
- A line in $\mathbb{C}$ (considered as a subset of $\mathbb{C}_{\infty}$ ) together with the point $\{\infty\}$

## Proposition 2.14
> [[Möbius map]] takes [[Circline|circlines]] to [[Circline|circlines]].

### Proof
By [[Möbius map#Lemma 2.12]] it is enough to check this for translations, dilations and inversions. The first two are easy and #TODO; it remains to show that inversion preserves [[Circline|circlines]].

We consider the case of circles first. Suppose we have a circle $|z-a|=r$. 
- Case 1: $r \neq|a|$ and $a \neq 0$. Then 0 is not on the circle and under inversion it becomes the set of points $\left\{z \in \mathbb{C}:\left|\frac{1}{z}-a\right|=r\right\}$, or equivalently $\left|z-\frac{1}{a}\right|=$ $\frac{r}{|a|}|z|$. This is also the equation of a circle (note $\frac{r}{|a|} \neq 1$ ).
- Case 2: $r=|a|$ and $a \neq 0 .$ Then 0 is on the circle and under inversion it becomes the set of points $\left\{z \in \mathbb{C}:\left|z-\frac{1}{a}\right|=\frac{r}{|a|}|z|\right\}$ together with $\infty$. The first set is a line (Lemma 1.4) and so this is a circline.
- Case 3: $a=0$. Under inversion, the circle $|z|=r$ becomes $|z|=\frac{1}{r}$, still a circle.

Now we look at lines (plus $\infty$). Suppose we have a line $|z-a|=|z-b|$ together with the point $\infty$. Note that the line is the perpendicular bisector of the segment $\overline{a b}$, so by extending this segment if necessary we can always choose $a, b \neq 0$

- Case 1: $|a| \neq|b|$. Then 0 does not lie on the line and under inversion it becomes the set of points $\left\{z \in \mathbb{C} \backslash\{0\}:|a|\left|\frac{1}{a}-z\right|=|b|\left|\frac{1}{b}-z\right|\right\}$. The point $\infty$ maps to 0 . This set of points is a circle.
- Case $2:|a|=|b|$. Then the line passes through 0 . Under inversion it maps to $\left\{z \in \mathbb{C} \backslash\{0\}:|a|\left|\frac{1}{a}-z\right|=|b|\left|\frac{1}{b}-z\right|\right\} \cup\{\infty\}$. The point $\infty$ maps to $0 .$ By Lemma $1.3$ this is a line through 0 together with the point $\infty$, and hence a circline.

---
Let $S: \mathbf{C}_{\infty} \rightarrow \mathbb{S}$ be the isometry from $\mathbf{C}_{\infty}$ to the unit sphere $\mathbb{S} \subseteq \mathbf{R}^{3}$ described in lectures. Show that $S$ maps circlines in $\mathbf{C}_{\infty}$ to circles in $\mathbb{S}$, and vice versa.