## Solution
### Q1
(c)
### Q2
(b)
### Q3
(1)
$x=\pi\left(2 n+\frac{1}{6}\right)$ and $n \in \mathbb{Z}$
$x=\pi\left(2 n+\frac{5}{6}\right)$ and $n \in \mathbb{Z}$
(2)
$x=\pi\left(n-\frac{7}{4}\right)$ and $n \in \mathbb{Z}$
$x=\pi\left(n-\frac{1}{4}\right)$ and $n \in \mathbb{Z}$
$x=\frac{2}{3} \pi(3 n-1)$ and $n \in \mathbb{Z}$
$x=\frac{2}{3} \pi(3 n+1)$ and $n \in \mathbb{Z}$
### Q4
Typical induction.
### Q5
Verify: Simply plug in.
Sketch:
<img src="https://cdn.mathpix.com/snip/images/WGctU9mOGhpf2BR-VzVIWHAJLAxRkcQp-NdwTwtHjgc.original.fullsize.png" />
### Q6
#### When the teacher removes an even number
- Then there remains 1002 even numbers and 1002 odd ones.
- B has a must-win strategy as below:
1. If A keeps erasing even numbers, B can leave '3' and '9' on board (two numbers that are not co-prime), and erases any other odd numbers. If this is always the case, then at some point there are 4 numbers on blackboard: two even numbers, 3 and 9. Then no matter what number A erases at this point, B will always win (by removing the number of the same parity as A does).
2. If A, at some point, removes an odd number, then B removes an odd number as well (if not then B applies the strategy above). Then the number of odd numbers would be less than the number of even numbers. Then as long as B removes the number of a different parity as A does at each time, then it finally remains two even numbers, and B wins.

#### When the teacher removes an odd number
Then there remains 1003 even numbers and 1001 odd numbers. No matter what A removes at every time, B applies a strategy to remove a number of different parity, until everything remains is an even number. (This method always work, as in the most extreme case where A always remove an odd number, there will still finally be 2 even numbers) Then B must win.