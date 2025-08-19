// switch 문
//잘 안 쓰임
let food = '초밥';
let foodKinds = '';

switch(food) {
    case '돈까스':
        foodKinds = '경양식';
        break;
    case '김치찌개':
        foodKinds = '한식';
        break;
    case '초밥':
        foodKinds = '일식';
        break;
    default:
        foodKinds = '기타';
        break;
}
console.log(foodKinds);

//마지막 브레이크 없어도 되나 닫아주는 게 좋음

// switch 문은 if문보다 가독성이 좋음
// if(food === '돈까스') {
//     foodKinds = '경양식';
// } else if(food === '김치찌개') {
//     foodKinds = '한식';
// } else if(food === '초밥') {
//     foodKinds = '일식';
// } else {
//     foodKinds = '기타';
// }
