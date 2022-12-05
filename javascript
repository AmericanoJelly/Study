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

## lastIndexOf
- arr.lastIndexOf(item, from)는 검색을 끝에서 부터 시작

## includes (배열 내 존재여부만 확인)
- arr.includes(item, from)는 인덱스 from 부터 시작해 item이 있는지를 검색, 해당하는 요소를 발견하면 true 반환

## find / findindex
특정 조건에 부학하는 객체 찾기 
findIndex는 find와 동일한 일을 하나, 조건에 맞는 요소를 반환하는 대신 해당 요소의 인덱스를 반환한다는 점이 다르다. 조건에 맞는 요소가 없으면 -1이 반환된다.
(item => item.id == 1). 이런 패턴이 가장 많이 사용되는 편. 다른 인자들(index, array)은 잘 사용되지 않는다

- let result = arr.find(function(item, index, array) {
  // true가 반환되면 반복이 멈추고 해당 요소를 반환합니다.
  // 조건에 해당하는 요소가 없으면 undefined를 반환합니다.
});
item – 함수를 호출할 요소
index – 요소의 인덱스
array – 배열 자기 자신

ex) let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John

## filter 
조건에 맞는 요소 전체를 담은 배열을 반환
- let results = arr.filter(function(item, index, array) {
  // 조건을 충족하는 요소는 results에 순차적으로 더해집니다.
  // 조건을 충족하는 요소가 하나도 없으면 빈 배열이 반환됩니다.
});

ex) let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// 앞쪽 사용자 두 명을 반환합니다.
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2

## map
- let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

## sort
배열의 요소를 정렬해준다.




















