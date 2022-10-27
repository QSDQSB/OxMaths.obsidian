1. You have been chosen to play a game involving a 10-sided die. You get to roll the die once, see the result, and then may choose to either stop or roll again. Your payoff is the sum of your rolls, unless this sum is greater than 10, in which case you "bust" and get nothing. What is your strategy for this game? That is, for each possible outcome of the first roll will you choose stop or to roll again?
	1. Reroll < 4
2. I have a 3x3 Grid and in each cell I place a lightbulb. Each of the 9 lightbulbs is then turned on with probability 1/2. What is the probability that there are NO adjacent cells both lit up.
	- $5*5 + 3 * 3 + 3 * 3 + 2 * 2 = 25+18+4 = 47$
	- 47+16 = 63
	- 63/512
3.  - I have toss 10 fair coins. What is the probability of an even number of heads. 
	- Now 100 fair coins. 
	- Now X unfair coins and Y fair coins
	- The fact is that if you have one fair coin, the game will be fair.
We don’t need to calculate combination numbers, only think about we put the fair coin on the last position. Before the last throw, the result of even and odd may be different, but in the last throw, the probability of head and tail is 1/2. So the final probability of getting even is (P(even before last throw)+P(odd before last throw))/2=1/2

4. Four 50-sided dice are rolled so that the numbers are all different, then assigned randomly to players A,B,C,D. The players with the highest/lowest numbers pair up, as do the two middle ones. Then the team with the higher total pays the team with the lower total the difference.
You are one of the players. Someone scoundrel approaches you with a hack to fix the game so that you start with a given number 1-50.
Question 1: What is (one of?) the best number(s) to pick?
Question 2: Say you answer X to Question 1. The scoundrel hosts an auction to sell the hack that lets you start with X. How do you bid? (As far as I can tell this is just asking for the expected value of the hack? Maybe they wanted a subtlety about bidding strategies?)
5. Given a thirty sided dice A and a twenty sided diced B, I win (a) dollars if a > b, and i lose (b) dollars if b >= a, what's they expected pay off?
	1. 17/2-7/20
6. 一个箱子里有三个红球两个蓝球，抽到红球加一分，抽到蓝球减一分，可以随时结束游戏，求最佳策略及预期游戏价值
	- 3/2？
7. 你和对手玩一个游戏，2-30的数字里你们轮流报数，一旦一个数字被取过之后所有和这个数字有公约数的数字都不能取，无数可取的玩家输掉游戏，求持有必胜策略的玩家（先手/后手）及其所有必胜策略。
8. 扔1000个fair coins，500个silver 500个gold，gold正面得3块，silver正面得1块，问如果已知得了1100块，expected number of gold coins with heads up 是多少
9. 2 players : you (player 1) and an other player (player 2). You select a number between 1 and 100 and the one that tells the bigger number has to pay the lower number to the other player. The player 2 says a random number between 1 and 100. What is the optimal strategy ?
	A third player comes in the game. Now the bigger number has to pay to the 2 other players the number that each one has told. We suppose that the third player is smart. Which strategy to beat him ?
The question describe a involution circumstance. When your opponent is a silly man, you can earn a lot of money, but when another clever guy come in, you have to consider more deeply. The worst case is that you both bet a price that will earn almost no money, maybe you can strike a balance by both give the answer in question 1 and continue to earn a lot of money.
	`1`
10. `1a` We are playing a game with a coin. I get to either decide heads or tails and you then get to be the other. (i.e i pick tails so you are heads) The coin is tossed until someone reaches 5 of their face. I.e 5 Heads. That person wins. Im going to toss the coin once then let you decide what you want to be. What is your probability of winning . (to make this clear if i toss the coin first, its a head then you decide to be heads you now only need 4 more heads to win whereas i still need 5 tails) 
`Question 1b` Now instead of coins we play the same game with cards. So you must select a suit (Spades, Hearts, Diamonds, Clubs) and we turn over cards (without replacement) until someone has seen 5 of their suit. Same thing. Now I let you decide, would you like to pick your suit right away, after I show 1 card, or after I show 2 cards. Which of these 3 options gives you the best chance of winning.
11.  比较以下三个expectation的大小：
    (1) 扔一次骰子，扔出的值的平方
    (2) 扔两次骰子，两次值的乘积
    (3) 扔五次骰子，中位数的平方






---
https://www.1point3acres.com/bbs/thread-838828-1-1.html
2021.12.30进行的Final Round，隔天被告知没有offer
这里是之前的电面面经

面试是通过zoom进行，一共有四轮，一开始会给你100个chips

第一轮：

做市游戏【final round邮件里market making guide一定要看！】，一开始先是热身：
掷一个六面骰子， make a market on the value

掷两个八面骰子， make a market on the sum of two dices
掷一个十二面骰子，一个二十面骰子，一个四十面骰子， make a market on the minimum value of these three dices

然后开始用扑克玩真的
52张扑克，除去JQK，40张牌，抽出四张扣着在桌子上，然后
1. make a market on the sum of four cards
2. make a market on the sum of red cards

除此之外，还可以进行side bet，赌下一张是红还是黑，大牌（6-10）还是小牌（1-5），赢了就获得赌注两倍的chips，输了就输掉赌注

之后面试官翻开第一张牌，接着做市
1. make a market on 24 divided by the number of diamond cards
2. make a market on min value of club cards
然后翻开第二 第三张牌的时候面试官也会要求你进行做市并进行side bet，但是这些value的variance会越来越大 比如会有 make a market on 5 to the power of # red cards，最后四张牌全部翻开后，对之前进行的所有交易进行总的结算

其实不难看出只要你给出的market range覆盖了expected value，你的预期收益是正的，这个游戏的精髓在于不仅要对variance较高的value的expectation有准确估计，而且还要用zero expectation的side bet尽可能对冲掉variance，达成正收益，低variance的总效果，并且综合你之前做出的所有trade考虑你要下什么样的side bet，我当时是下错了side bet导致variance更高了，最后还亏了chips orz

这个游戏对于数感和mental math要求极高

第二轮：

玩他们用excel写好的小游戏【全程不会用到excel技巧】，10个coin，第一个coin正面概率0.5，剩下九个coin正面概率从近似于正态分布的distribution里随机生成（生成的p expectation还是0.5，并且确保在0-1之间），你有100次翻coin的机会，每次都可以从这8个coin里任选一个翻，最后你从这个游戏里赢的钱就是正面的次数（只要花钱少于60就可以放心玩这个游戏）

策略大概就是尝试之后找到一个p比较大的coin一直翻就行了，但操作过程中follow up非常多
比如说，你翻了四次某个coin，3次head一次tail，你要不要换coin？基于什么原因？一些hypothesis test相关

当你试验的时候，p降低到多少的时候可以尝试换coin？
这个问题比较复杂，首先要考虑到 换到不好的coin可以换回来，而换到更好的coin的时候就可以一直翻更好的coin，所以即便目前p > 0.5，换coin也可以带来更高的预期收益，然后要计算换coin的opportunity cost和预期收益，大概是翻几次coin，p < 0.68左右就可以考虑换coin了，换到了更好的就翻更好的，没换到更好的继续试别的

同样在这个游戏里，一定要通过计算，估计收益，据此来决定自己是否要换coin，千万不要凭感觉随便决策

然后等我翻完100个coin之后，面试官接着让我make a market on 9个未知概率coin的p值，可以做6%-wide market，如果这样的话面试官就不会查看这个coin的真实p值直接和你交易，也可以做12%-wide market，但这样面试官就会查看这个coin的p值然后和再你交易，也就是说如果你的market没有覆盖真实的p值就会血亏

这里要注意的是，如果你已经翻了这个coin几十次然后比如p = 0.7，那你就可以放心做市 67% at 73%，但是如果你只翻了三次，两次head一次tail，这个时候expected value of p其实比0.66要小很多！（p的生成服从于近似正态分布，所以p实际上会更加靠近0.5），考虑把market向中间shift一些【这个真的特别坑，让我亏了好多】