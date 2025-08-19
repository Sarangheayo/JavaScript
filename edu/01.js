// 변수 : 변하는 데이터를 저장하기 위한 공간/ (변수를 선언하다=variations make) 
var var1 = '제육';
let let1 = '햄버거';
var var2;  
var2 = 0; 

// 상수 : 최초에 대입한 값이 절대 변하지 않는 공간
// const CONST_1 = '뚝불';
// const1 ='fsdf';

//-----------------------
//var를 지양해야 하는 이유
//-----------------------
// 1. var을 중복 선언이 가능하다.
var name = '홍길동';
var name = '갑돌이';

// let name2 = '둘리';
// let name2 = '도우너';
//2. 작성한 코드 상, 선언보다 사용이 먼저 일 경우, 
// 오류가 발생하지 않고, 접근 가능한 현상  
// console.log(age);
// let age = 20;

//3. var는 기본적으로 함수 레벨 스코프를 가진다.
// 종류 : 전역 스코프, 지역 스코프, 블록레벨 스코프 
// var globalVar = 'globalVar';
// let globalLet = 'globalLet';
// const globalConst = 'globalConst';

// function test() {
//   console.log(globalVar);
//   console.log(globalLet);
//   console.log(globalConst);
// }

// test();

//  console.log(globalVar);
//  console.log(globalLet);
//  console.log(globalConst);


//  function test() {
//   var localVar = 'localVar';
//   let localLet = 'localLet';
//   const localConst = 'localConst';
//   console.log(globalVar);
//   console.log(globalLet);
//   console.log(globalConst);

//   console.log(localVar);
//   console.log(localLet);
//   console.log(localConst);
// }

// test();

//  console.log(globalVar);
//  console.log(globalLet);
//  console.log(globalConst);

if(true) {
  var blockVar = 'blockVar';
  let blockLet = 'blockLet';
  const blockConst = 'blockConst';
}

console.log(blockVar);
console.log(blockLet);
console.log(blockConst);

