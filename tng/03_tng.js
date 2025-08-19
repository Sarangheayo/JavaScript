// let score = value;
// let grade = '';

// let rank1 = (value === 100);
// let rank2 =((value >= 90) && (value <= 100));
// let rank3 =((value >= 80) && (value <= 90));
// let rank4 =((value >= 70) && (value <= 80));
// let rank5 =((value >= 60) && (value <= 70));
// let rank6 =((value >= 0) && (value < 60));

// if (rank1) {
//     score = rank1; grade = 'A+';
// }
// if (rank2) {
//     score =  rank2; grade = 'A';
// }
// if (rank3) {
//     score =  rank3;  grade = 'B';
// }
// if (rank4) {
//     score = rank4; grade = 'C';
// }
// if (rank5) {
//     score = value;  grade = 'D';
// }
// if (rank6) {
//     score = value;  grade = 'F';
// }


// if (rank1) {   
//     console.log(`당신의 점수는 ${score}점 입니다. <''>등급`);
// } 
// if (rank2) {
//    console.log(`당신의 점수는 ${score}점 입니다.<''>등급`);
// }
// if (rank3) {
//    console.log(`당신의 점수는 ${score}점 입니다. <''>등급`);
// }
// if (rank4) {
//    console.log(`당신의 점수는 ${score}점 입니다. <''>등급`);
// }
// if (rank5) {
//    console.log(`당신의 점수는 ${score}점 입니다. <''>등급`);
// }
// if (rank6) {
//    console.log(`당신의 점수는 ${score}점 입니다. <''>등급`);
// }

// console.log(`당신의 점수는 "${score}"점 입니다. <${grade}>등급`);

let score = 101; // 보통 에러뜨게 설정 -이후 검사 한번더/ 수정
let grade = 'F';

if (score > 100 || score < 0) {
    console.log('점수는 0에서 100 사이여야 합니다.');
}  else {
   if(score === 100) {
    grade = 'A+';
} else if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';    
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D'; 
}
// } else {
// grade = 'F';    
// } 초기값을 F로 해놨으니 없어도 됨
// 앞뒤로 잘 실행되는 지 확인하세요 90이라면 앞뒤로 89, 90, 91 확인해보세요 : 경계값 테스트


console.log('당신의 점수는 ' + score + '점입니다. <' + grade + '>');
console.log(`당신의 점수는 ${score}점 입니다. <${grade}>등급`); //백틱을 이용해서 제작함
// console.log(`당신의 점수는 ${score}점 입니다. <${grade}>등급`); // 템플릿 리터럴
}


    
    