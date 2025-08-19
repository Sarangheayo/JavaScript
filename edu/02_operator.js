// 산술 연산자(oprator)
let num1 = 5;
let num2 = 10;

console.log(num1 + num2); //더하기 , 꼭 띄어쓰기 안해도됨, 가독성을 위해 띄우는 거임
//항상 자리 이동 전 control + S 해주세요 자동저장 extension 하지마세요 직접 하세요!//

console.log(num1 - num2); //빼기 < 빼기는 연산자에 쓰니까 빼기 쓰지마! 언더바, 카멜기법써!
console.log(num1 * num2); //곱하기
console.log(num1 / num2); //나누기   
console.log(num1 % num2); //나머지 구하는 법

//문자열 연결 연산자
let firstName = '길동';
let lastName = '홍'
console.log(firstName + lastName); //문자열 연결
console.log(firstName.concat(lastName)); //문자열 연결 concat 함수 사용

//산술대입연산자
let num3 = 0;

//num3 =num3 + num1; //num3에 num1을 더한 값을 대입
num3 += num1; //num3에 num1을 더한 값을 대입
console.log(num3); //결과 출력 

num3 -= num1; //num3에 num1을 뺀 값을 대입  (빼기는 빼기 밖에 없음)
console.log(num3); //결과 출력

num3 *= num1; //num3에 num1을 곱한 값을 대입
console.log(num3); //결과 출력

num3 /= num1; //num3에 num1을 나눈 값을 대입
console.log(num3); //결과 출력

num3 %= num1; //num3에 num1을 나눈 나머지 값을 대입
console.log(num3); //결과 출력


// (전위|후위)증감 연산자
let num4 = 0;

console.log(++num4); //전위 증감 연산자, num4를 1 증가시키고 출력
console.log(num4++); //후위 증감 연산자, num4를 출력한 후 1 증가시킴

console.log(--num4); //전위 증감 연산자, num4를 1 감소시키고 출력
console.log(num4--); //후위 증감 연산자, num4를 출력한 후 1 감소시킴

// 비교 연산자
let num5 = 1;
let num6 = 2;
console.log(num5 > num6); 
console.log(num5 < num6);
console.log(num5 >= num6);
console.log(num5 <= num6);
// ==(데이터 타입 체크 X 값만 비교), ===((데이터 타입 체크 O 값도 비교)
console.log(1 == '1'); 
console.log(1 != '1');  
console.log(1 === '1');
console.log(1 !== '1');    

//논리 연산자
console.log((1 === 1) && (1 === 0)); // AND 연산자, 둘 다 참일 때만 참
console.log((1 === 1) || (1 === 0)); // OR 연산자, 둘 중 하나가 참이면 참
console.log(!(1 === 1)); // NOT 연산자, 참을 거짓으로, 거짓을 참으로 바꿈

// 삼항 연산자
let rank = 2;
let result = rank >=2 ? '통과' : '탈락'; // rank가 2 이상이면 '통과', 아니면 '탈락'
console.log(result); // 결과 출력



