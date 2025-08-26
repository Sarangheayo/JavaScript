let odd = [1, 3, 5, 7, 9];
let val = odd;
let result = odd.map(val => {
if(val % 2 !==0) {
   return val;
} else {
  return odd;
}
 });

console.log(result);

let sum = 0;
for(let i = 1; i <=10; i++) {
    sum +=i;
}
console.log(sum);


// function greet(name = "Guest") {
//   return "Hello " + name;
// }
// console.log(greet());
// console.log(greet("Tom"));


// let date1 =  new Date('1970-02-23 14:30:00');
// const test = Math.abs(date1);
// const nowYear = now.getFullYear();
// console.log(nowYear);
// const nowMonth = now.getMonth() + 1;
// console.log(nowMonth);
// const nowDate = now.getDate();
// console.log(nowDate);
// const nowHours = now.getHours();
// console.log(nowHours);
// const nowMinutes = now.getMinutes();
// console.log(nowMinutes);
// const nowSeconds = now.getSeconds();
// console.log(nowSeconds);
// const nowMilliseconds =now.getMilliseconds();
// console.log(nowMilliseconds);
// const nowDay = now.getDay();
// console.log(nowDay);

// let date1 = `${nowYear}년 ${toPad(nowMonth, 2,'0')}월 ${toPad(nowDate, 2,'0')}일 ${toPad(nowHours, 2,'0')}:${toPad(nowMinutes, 2,'0')}:${toPad(nowSeconds, 2,'0')} ${koreanDay}`;
// console.log(date1);

// let age = 19;

// if(age >= 19) {
//     console.log('"성인입니다."');
// } else if(age <= 18, age >= 13) {
//      console.log('"청소년입니다."');
// }  else {
//     console.log('"어린이입니다."');
// }


// const student = {
//     name = "seola",
//     age = 24;
// };
// const total = 
// student1.name = "seola"
// student1.age = 24;

// console.log(student1, .name, .age);

const student = {
  name: 'sara',
  age: 24
}; 



console.log(student['like color']); // red

// if(18 >= age >= 13) {
//    console.log('"청소년입니다."');
// } else if(age >= 19) {
//      console.log('"성인입니다."');
// }  else {
//     console.log('"어린이입니다."');
// }

// // else if( 13 <= age, age <= 18) {
// //     console.log('"청소년입니다."');
// // }  else {
//     console.log('"어린이입니다."');
// }


//  let rank = 5;

// if(rank === 1) {
//    console.log('1등입니다.');
// }  else if(rank ===2) {
//     console.log('2등입니다.');
// }  else if(rank === 3) {
//     console.log('3등입니다.');
// }  else {
//     if(rank === 5 || rank === 7) {
//       console.log('특별상입니다.');
//     } else {
//        console.log('등수 외입니다.');
//     }
// }

// if(rank === 1) {
//     console.log('챔피언.');
// }

// let odd = [1, 3, 5, 7, 9];
// let val = odd;
// let result = odd.filter(val => {
// if(val % 2 !== 0) {
//    return val;
// } else {
//   return odd;
// }
//  });

//  const now = new Date();
//  console.log(now);