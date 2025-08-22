// Date 객채
// 2025년 8월 22일 오후 12시 38분 6초
// 로컬 타임존에 따른 유닉스 타임스탬프 기반으로 동작

//Date 인스턴스
 const now = new Date();
 const date1 =  new Date('1970-02-23 14:30:00');
 const date2 =  new Date(1980, 10, 10, 23, 0, 1);
 const date3 = new Date(453453535564);

 const test = Math.abs(date1 - date2)
// console.Log(test);

//getFullYear() : 연도 획득

const nowYear = now.getFullYear();
console.log(nowYear);

//getMonth() : 월 획득, (**caution!** 0-11로 변환)

const nowMonth = now.getMonth() + 1;
console.log(nowMonth);

//getDate() : 일 획득
const nowDate = now.getDate();
console.log(nowDate);

//getHours() : '시=hour' 획득
const nowHours = now.getHours();
console.log(nowHours); // 정수 변환이므로 앞에 오전 9시면 09X, just 9로 작성됨

//getMinutes() : 분 획득
const nowMinutes = now.getMinutes();
console.log(nowMinutes);

// getSeconds() : 초를 반환
const nowSeconds = now.getSeconds();
console.log(nowSeconds);

//getMilliseconds() : 밀리초를 반환
const nowMilliseconds =now.getMilliseconds();
console.log(nowMilliseconds);

// getDay () : 요일을 반환(**caution** 0-6반환, 0= 일요일)
const nowDay = now.getDay();
console.log(nowDay);

// 요일 한글로 변환
let koreanDay = ''; 
 switch(nowDay) {
    case 0:
        koreanDay ='일요일';
        break;
    case 1:
        koreanDay ='월요알';
        break;
    case 2:
        koreanDay ='화요일';
        break;
    case 3:
        koreanDay ='수요일';
        break;
    case 4:
        koreanDay ='목요일';
        break;
    case 5:    
        koreanDay ='금요일';
        break;
    default :
        koreanDay ='토요일';
        break;
}

// XXXX년 XX월 XX일 XX:XX:XX 금요일
const nowFormat = `${nowYear}년 ${toPad(nowMonth, 2,'0')}월 ${toPad(nowDate, 2,'0')}일 ${toPad(nowHours, 2,'0')}:${toPad(nowMinutes, 2,'0')}:${toPad(nowSeconds, 2,'0')} ${koreanDay}`;
console.log(nowFormat);

//2025년 8월 -> 08월 만드는 법
//console.log(typeof(nowYear), typeof(nowYear.toString())); [1]
console.log(typeof(nowYear), typeof(nowYear.toString()), typeof(String(nowYear)));

function toPad(origin, length, fillStr) {
   //origin의 타입 체크
   if(typeof(origin) === 'number') {
    origin = origin.toString();
   }

   return origin.padStart(length, fillStr);

}

// 두 날짜의 차를 구하는 방법
const targetDate = new Date('2025-03-13 18:10:00');
const diff = Math.floor(Math.abs(targetDate - now) / ( 1000 * 60 * 60 * 24 ));
// 일단위 1000 * 60 * 60 * 24

let diffMs = Math.abs(targetDate - now);
diffMs %= (1000 * 60 * 60);
console.log(diff, diffMs);
