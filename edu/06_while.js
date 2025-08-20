//for, while + 어느 언어든 다 사용. c언어(기초가 되는 언어)에서 확장되어 나온 것들이라 비슷

// while(true) {
//   console.log('while문 시작');
  
//   if() {
//     break;
//   }
  
//   console.log('while문 끝');
// }

// let cnt = 0;

// while(true) {
//     console.log(cnt);
//     cnt++;
//     //console.log('while문 시작');

//     if(cnt >= 3) {
//         break;
//     }
// }   //console.log('while문 끝');

//연습// 구구단 2단
// 2 X n(dan) = 2*n
//----------------------------------------------
// let dan = 1;
// let twoDan = 2;

// while(true) {
//     console.log(dan);

//     if(dan < 9) {
//         break;
//     }
// }   console.log(`{twoDan} X ${dan} = ${twoDan*dan}`)
//----------------------------------------------------------//mine

//구구단 2단만
// let multiPlier = 1;

// while(multiPlier < 10) {
//     console.log(`2 X ${multiPlier} = ${2 * multiPlier}`);

//     multiPlier++;
// }

//do-while문 = 돌기전 조건을 체크 후 봄(if, while)과 다르게 얘는 일단 실행함
let multiPlier = 1;

do {
    console.log(`2 X ${multiPlier} = ${2 * multiPlier}`);

    multiPlier++;
} while(multiPlier < 10);

