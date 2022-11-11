# OT
1. Check a list of number is sum of two fibonacci and return bool
2. Python pandas operation using groupby and print selected feature
ex. Given email, country, buy log print which country has largest buy volume
3. Given a list of node return number of possible square, node ex: (2,0), (0
4. similar to problem 3, Given a list of node return number of possible rectengle

https://www.kaggle.com/code/residentmario/grouping-and-sorting
https://www.careercup.com/question?id=24908669

### Q1
```py
def solution(a):
	max_a = max(a)
	f1,f2=1,1
	table = set()
	table.add(1)
	while f1<max_a:
		tmp=f1+f2
		table.add(tmp)
		f1=f2
		f2=tmp
	ans=[]
	for element in a:
		isIn=False
		for i in table:
			if i>element: continue
			if (element-i) in table:
				ans.append(True)
				isIn=True
				break
		if isIn==False: ans.append(False)
	return(ans)
```
### Q2

```py
import pandas as pd
import csv
# Write your code here
data = pd.read_csv("/root/customers/data.csv")
print("Total customers:")
print(data.shape[0])
print("Customers by city:")
customer_in_each_city = data.sort_values(by="CITY").groupby('CITY').ID.count()
for i in range(customer_in_each_city.shape[0]):
	print(f'{customer_in_each_city.index[i]}: {customer_in_each_city.iloc[i]}')

print("Customers by country:")
data_by_country = data.sort_values(by='COUNTRY').groupby('COUNTRY')
customer_in_each_country = data_by_country.ID.count()
for i in range(customer_in_each_country.shape[0]):
	print(f'{customer_in_each_country.index[i]}:{customer_in_each_country.iloc[i]}')

print("Country with the largest number of customers' contracts:")
contracts = data_by_country['CONTRCNT'].sum()
#print(contracts)
max_c = 0
for i in range(1,len(contracts)):
	if contracts.iloc[max_c]<=contracts.iloc[i]: max_c=i
print(f'{contracts.index[max_c]} ({contracts.iloc[max_c]} contracts)')
print("Unique cities with at least one customer:")
print(customer_in_each_city.shape[0])
```

### Q3
```py
def solution(x, y):
	pointset = set()
	pointarray = []
	for i in range(len(x)):
		pointset.add((x[i],y[i]))
		pointarray.append((x[i],y[i]))
	ans = 0
	for i in range(len(pointarray)-1):
	point1=pointarray[i]
	for j in range(i+1,len(pointarray)):
		point2=pointarray[j]
		ax = point2[1]-point1[1]
		ay = -point2[0]+point1[0]
		if ((point1[0]+ax,point1[1]+ay) in pointset) and ((point2[0]+ax,point2[1]+ay) in pointset): ans+=1
return(ans//2)
```

# Second Round
- ✅ Leetcode `464` **Can I Win**
	- https://leetcode.com/problems/can-i-win/
- ✅ Leetcode `1801` **Numbers of Orders in the Backlog**
	- https://leetcode.com/problems/number-of-orders-in-the-backlog/
	- heapq, maxheap needs negative sign
	- collide and cancel
- ✅Leetcode `336` **Palindrome Pairs**
	- https://leetcode.com/problems/palindrome-pairs/
- ✅Leetcode `140` **World Break II**
	- https://leetcode.com/problems/word-break-ii/
- 