---
date: '2022-10-13'
title: '[이코테] 그리디 알고리즘 실전문제3 : 숫자 카드 게임'
categories: ['Algorithm', 'Algorithm/Problem', 'Algorithm/Greedy-Algorithm']
summary: '숫자 카드 게임'
thumbnail: '../thumbnail.jpg'
---

<div class="noticeBox">이 글은 "이것이 코딩 테스트이다."를 읽고 공부한 기록입니다.</div>

## 문제 설명

> 숫자 카드 게임은 여러 개의 숫자 카드 중에서 가장 높은 숫자가 쓰인 카드 한장을 뽑는 게임이다. 단, 게임의 룰을 지키며 카드를 뽑아야 하고 룰은 다음과 같다.
>
> 1.  숫자가 쓰인 카드들이 N \* M 형태로 놓여 있따. 이때 N은 행의 개수를 의미하며, M은 열의 개수를 의미한다.
> 2.  먼저 뽑고자 하는 카드가 포함되어 있는 행을 선택한다.
> 3.  그 다음 선택된 행에 포함된 카드들 중 가장 숫자가 낮은 카드를 뽑아야 한다.
> 4.  따라서 처음에 카드를 골라낼 행을 선택할 때, 이후에 해당 행에서 가장 숫자가 낮은 카드를 뽑을 것을 고려하여 최종적으로 가장 높은 숫자의 카드를 뽑을 수 있도록 전략을 세워야 한다.
>
> 카드들이 N \* M 형태로 놓여 있을 때, 게임의 룰에 맞게 카드를 뽑는 프로그램을 만드시오.

## 내 풀이

```python
N, M = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(N)]

result = max([min([graph[x][y] for y in range(M)]) for x in range(N)
])
print(result)
```

> [시간] 10:33
