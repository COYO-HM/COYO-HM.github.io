---
date: '2022-10-19'
title: '[이코테] 구현 실전문제2 : 왕실의 나이트'
categories: ['Algorithm', 'Algorithm/Problem', 'Algorithm/Implementation']
summary: '왕실의 나이트'
thumbnail: '../thumbnail.jpg'
---

<div class="noticeBox">이 글은 "이것이 코딩 테스트이다."를 읽고 공부한 기록입니다.</div>

## 문제 설명

> 행복 왕국의 왕실 정원은 체스판과 같은 8 \* 8 좌표 평면이다. 왕실 정원의 특정한 한 칸에 나이트가 서 있다. 나이트는 매우 충성스러운 신하로서 매일 무술을 연마한다.
> 나이트는 말을 타고 있기 때문에 이동을 할 때는 L자 형태로만 이동할 수 있으며 정원 밖으로는 나갈 수 없다. 나이트는 특정한 위치에서 다음과 같은 2가지 경우로 이동할 두 있다.
>
> 1.  수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동하기
> 2.  수직으로 두 칸 이동한 뒤에 수편으로 한 칸 이동하기
>
> 나이트가 이동할 수 있는 경우의 수를 출력하시오.

## 내 풀이

```python
[y, x] = input()

x = int(x) - 1
y = ord(y) - ord('a')

dx = [-1, -2, -2, -1, 1, 2, 2, 1]
dy = [-2, -1, 1, 2, 2, 1, -1, -2]

cnt = 0
for i in range(8):
  nx = x + dx[i]
  ny = y + dy[i]
  if 0 <= nx < 8 and 0 <= ny < 8:
    cnt += 1

print(cnt)
```

> [시간] 7:43
