#자바스크립트

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

## concat
새로운 배열을 만들거나 기본 배열에 요소를 추가하고자 할 때 사용할 수있다.
- arr.concat(arg1, arg2...)
ex) let arr = [1, 2];

// arr의 요소 모두와 [3,4]의 요소 모두를 한데 모은 새로운 배열이 만들어집니다.
alert( arr.concat([3, 4]) ); // 1,2,3,4

// arr의 요소 모두와 [3,4]의 요소 모두, [5,6]의 요소 모두를 모은 새로운 배열이 만들어집니다.
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// arr의 요소 모두와 [3,4]의 요소 모두, 5와 6을 한데 모은 새로운 배열이 만들어집니다.
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

배열처럼 보이는 유사 배열이라도 분해되지 않고 통으로 복사하여 더해진다.
let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]

## forEach
배열 탐색하기 - 주어진 함수를 배열 요소에 각각에 대해 실행할 수 있다.
인수로 넘겨준 함수의 반환값은 무시된다

## indexOf
- arr.indexOf(item, from)은 from부터 시작해 item(요소)를 찾는다.
발견하면 해당 요소의 인덱스를 반환하고 발견하지 못하면 -1을 반환한다






















