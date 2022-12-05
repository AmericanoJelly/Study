<h1>자바스크립트</h1>

배열과 메서드

요소 추가, 제거 메서드 
- arr.push(...items) //맨 끝에 요소 추가
- arr.pop() //맨 끝 요소 제거
- arr.shift //맨 앞 요소 제거
- arr.unshift(...item) //맨 앞에 요소 추가

## splice
요소 추가, 삭제, 교체
- arr.splice(index[,deleteCount, 추가요소1, ..., 추가요소n])
index: 첫번째 요소를 가리키는 인덱스
deleteCount: 제거하고자 하는 요소의 개수
ex) 처음(0) 세 개(3)의 요소를 지우고, 이 자리를 다른 요소로 대체 - arr.splice(0, 3, "Let's", "dance");

## slice
start 와 end 까지의 요소를 복사본을 만든다.
기존의 배열을 건드리지 않으면서 배열을 조작해 새로운 배열을 만들고자 할 때 자주 사용된다.
- arr.slice([start],[end])
ex) let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외))

alert( arr.slice(-2) ); // s,t (인덱스가 -2인 요소부터 제일 끝 요소까지를 복사)


