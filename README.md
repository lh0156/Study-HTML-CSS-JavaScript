# 변수
## 변수 23/03/28

📎 변수

- 변수는 변수다. 단 컴퓨터 기초 상식이 나와 정리해두려고 한다.
- 컴퓨터는 CPU를 사용해 연산하고, 메모리를 사용해 데이터를 기억한다.
- 메모리는 데이터를 저장할 수 있는 메모리 셀의 집합체다. 메모리 셀 하나의 크기는 1바이트(8비트)이며, 컴퓨터는 메모리 셀의 크기, 즉 1바이트 단위로 데이터를 저장(write)하거나 읽어(read)들인다.
- 각 셀은 고유의 메모리 주소를 갖는다. 이 메모리 주소는 메모리 공가느이 위치를 나타내며, 0부터 시작해서 메모리의 크기만큼 정수로 표현된다. 예를 들어, $GB 메모리는 0부터 4,294,967,295(0x00000000 ~ 0xFFFFFFFF)까지의 메모리 주소를 갖는다.
- 컴퓨터는 모든 데이터를 2진수로 처리한다. 따라서 메모리에 저장되는 데이터는 데이터의 종류와 상관 없이 모두 2진수로 저장된다.
- 이러한 것을 메모리에 저장하지 않고 변수에 저장한다.
- **변수(variable)은 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙ㄴ인 이름을 말한다.**

## 변수 이름은 어디에 등록되는가? 23/03/28

📎 변수 등록 위치

- 변수 이름을 비롯한 모든 식별자는 실행 컨텍스트에 등록된다.
- 변수 이름과 변수 값은 실행 컨텍스트 내에 key-value 형식인 객체로 등록되어 관리된다. 자바스크립트 엔진이 변수를 관리하는 메커니즘은 13장 스코프와 23장 실행 컨텍스트에서 자세히 살펴볼 것이다.

## 변수 선언의 실행 시점과 변수 호이스팅 23/03/28

```jsx
console.log(scroe);
var score;
```

- 변수 선언문보다 변수를 참조하는 코드가 앞에있다.
- console.log가 먼저 실행되므로 ReferenceError가 발생할 것 같지만 undefined가 출력된다.
- **그 이유는 변수 선언이 소스 코드가 한 줄 씩 순차적으로 실행되는 시점, 즉 런탄임(runtikme)이 아니라 그 이전 단계에서 먼저 실행되기 때문이다.**
- 이처럼 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 변수 호이스팅이라 한다.
- 사실 변수 선언 뿐 아니라 var, let, const, function, function*, class 키워드를 사용해서 선언하는 모듡 식별자는 호이스팅 된다.
- 모든 선언문은 런타임 이전 단계에서 먼저 실행되기 때문이다.

## 변수 선언의 실행 시점과 변수 호이스팅 23/03/28

- 변수 선언은 소스코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행되지만 값의 할당은 소스코드가 순차적으로 실행되는 시점인 런타임에 실행된다.

```jsx
console.log(score);

var score;  // 변수 선언
score = 80; // 값의 할당

console.log(score);
```

- 변수 선언(1)은 런타임 이전에 실행되고 값의 할당(2)은 런타임 이후에 실행되는 것을 알 수 있다. 이는 변수의 선언과 값의 할당을 동시에 시행해도 마찬가지이다.

```jsx
console.log(score);

var score = 80;

console.log(score);
```

- 이때 변수에 값을 할당할 때는 이전 값 undefined가 저장되어 있던 메모리 공간을 지우고 그 메모리 공간에 값을 새롭게 저장하는게 아니라 새로운 메모리 공ㄱ간을 확보하고 그곳에 할당 값 80을 저장한다는 점에 주의하자.


## let은 변수 호이스팅이 일어나는가? 23/03/28

- let 키워드를 사용하여 변수를 선언하면 변수 호이스팅이 발생하지만, 변수가 초기화되기 전에는 사용할 수 없습니다. 즉, 변수가 선언되기 전에 변수를 사용하려고 하면 참조 오류가 발생합니다.
- 예를 들어, 다음과 같은 코드가 있다고 가정해봅시다.

```jsx
console.log(myVar); // ReferenceError: myVar is not defined
let myVar = 10;
```

- 위 코드에서는 let 키워드를 사용하여 myVar 변수를 선언했습니다. 하지만 변수가 초기화되기 전에 변수를 사용하려고 하면 참조 오류가 발생합니다.
- 따라서 let을 사용하여 변수를 선언하더라도 변수 호이스팅이 발생하지만, 변수가 초기화되기 전에는 사용할 수 없다는 점을 염두에 두어야 합니다.
 
