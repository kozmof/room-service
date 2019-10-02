## Search Algorithm Draft

### Insert
#### Case 1

aaaaaaaa
bbbbbbbb

=>

aaaaaaaa 1, 2
c
d
e
bbbbbbbb 3, 4



### Search order 1

1
2
3
4 <= start
5
6

4, 5, 3 ,6, 2, 1
  +1 -2 +3 -4 -1
0  1  2  3  4  5

### Search order 1

1
2 <= start
3
4 
5
6

2, 3, 1, 4, 5, 6
 +1 -2 +3 +1,+2
0 1  2  3  4  5