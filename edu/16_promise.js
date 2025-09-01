//Callback Hell
// setTimeout(() => {
//  console.log('A');
//  setTimeout(() => {
//  console.log('B');
 
// setTimeout(() => {
//  console.log('C');
// }, 1000);
// }, 2000);
// }, 3000);

// Promise 객체
// 비동기 처리의 결과를 제공하겠다는 약속을 반환
// 성공 or 실패, 결과를 반환해줄게! 약속하는 것
// 단 비동기 처리가 끝날 때 까지 결과를 기다리는 것은 아니다.

function pro1(str, ms) {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
       if(str === 'A' || str === 'B' || str === 'C') {
         console.log(str);
          return resolve();
       } else {
          reject();
       }
     }, ms);
    });
}

pro1('D', 3000)
.then((data) => {
  console.log('Then');
}) // 작업이 성공했을 때, then 메소드의 콜백 함수를 실행
.catch((error) => {
  console.log('Catch');
}) // 작업이 실패 했을 때 catch 메소드의 콜백 함수를 실행
.finally(() => {
  console.log('Finally');
}); // 성공 실패 여부 상관 없이 무조건 실행.
 //chaining 기법 : 원리는 특정 객체의 . then : 반환 값이 객체임. 계속 객체를 반환하는 기법

pro1('A', 3000)
.then(()=> {
  pro1('B', 2000)
  .then(()=> {
    pro1('C',1000)
    .then()
    .catch();
  })
})
 .catch();
// finally는 필요에 따라 적어주면 됨


pro1('A', 3000)
.then(() => {
  return pro1('B', 2000);
})
.then(() => {
   return pro1('C', 1000); 
})
.catch();

