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

// async/await 문법
// promise hell을 개선하기 위해 나온 문법
// 내부적으로 promise obj를 사용하여 비동기 처리를 실행

 async function test() {
  try {
  await pro1('A', 1500);  
  await pro1('B', 1000);  
  await pro1('C', 500);      
  } catch(error) {
    console.log(error);
  }
}

test();
