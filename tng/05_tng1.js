
//*****
//*****
//*****
//*****
//*****

//이중문법으로 만들기
//줄 반복 loof, 별 여러개 만들어내는 loof 각 두개 문법 만들어줘
//여기서 있는 makedStar? = 얘는 별을 만들어주는애, loof를 돌리는 기준값 ㄴ

// let star = '*';

// for(let i = 0; i < 5; i++) {
//     let makedStar = '';

//    for(let z = 0; z < 5; z++) {
//      makedStar += star;
//    }
//     console.log(`${makedStar}`);
// }


//*
//**
//***
//****
//*****


//별
// let total = 5;

// for (let star = 1; star <= total; star++) {
// let stars = "*".repeat(star);  // 별 개수만 늘어나도록
// console.log(stars);
// }
 
// let makedStar = '';  //보여줄 빈칸 만들어 주기
// for(let lineCnt = 0; line < 5; lineCnt++) {
//     makedStar += '*';
//     console.log(makedStar);
// }


//이중 for문

// for(let lineCnt = 0; line < 5; lineCnt++) {
//     let makedStar = ''; //-> 별개수 초기화
//     for(let starCnt = 0; starCnt <= lineCnt; starCnt++) {
//         makedStar += '*';
//     }
//     console.log(makedStar);
// }

// let total = 5;

// for (let star = 1; star <= total; star++) {
// let spaces = " ".repeat(total - star);  // 왼쪽 공백 → 점점 줄어듦
// let stars  = "*".repeat(star);          // 별 개수 → 점점 늘어남
// console.log(spaces + stars);
// }

//*****
// ****
//  ***
//   **
//    *
//이렇게 별 만들어줘
//띄어쓰기 대신 *로 만들어줄거임
let makedStar = '';

for (let lineCnt =
    
    5; lineCnt > 0; lineCnt--) { 
     makedStar += '*';
      let makedSpace = ''; // 공백 넣을 빈칸 만들어주고
    for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
     makedSpace += ' '; 
   }
   console.log(makedSpace + makedStar);
}






// for (let i = 1; i <= 5; i++) {
//     let line = "// ";
    
//     // i에 따라 별 개수 늘리기
//     for (let j = 1; j <= i; j++) {
//         line += "****"; // 별 모양 패턴
//     }
    
//     // if문 예시: 특정 줄에는 추가 표시
//     if (i === 3) {
//         line += "  <-- 중간 줄";
//     }
//     console.log(line);

    // for(let i = 1; i < 5; i+=2) {
    //    if(i === 3) {
    //     continue;
    //    }
    //     console.log(i);
    // }
    
    // 다중루프
    // let z = 0;
    // for(let i = 0; i < 3; i++) {
    //     console.log(`바깥쪽 루프 : ${i}번째`);

    //   for(z; z < 3; z++) {
    //     console.log(`안쪽 루프 : ${z}번째`);
    //   } 
    // }

    //구구단 2단 출력
    // let dan = 2;
    // for(let i = 1; i < 10; i++) {
    //    console.log(`${dan} X ${i} = ${dan * i}`);
    // }

    //구구단 다 출력

   //  let startDan = 2;
   //  let startMultiPlier = 1;
   //  let maxDan = 9;

   //  for(let dan = startDan; dan <= maxDan; dan++) {
   //     console.log(`** ${dan}단 **`);

   //       for(let multiPlier = startMultiPlier; multiPlier <= maxDan; multiPlier++) {
   //          console.log(`${dan} X ${multiPlier} = ${dan * multiPlier}`);
   //       }
   //  }

const student = {};

student.name = "seola";
student.age = 20;
console.log(student);

function func(callback) {
  callback();
}
function callback() {
  console.log("callback");
}

func(callback);

let odd = [1, 3, 5, 7, 9];
let val = odd;
let result = odd.map(val => {
if(val % 2 !== 0) {
   return val;
} else {
  return odd;
}
 });