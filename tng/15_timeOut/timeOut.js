const currentTime = document.querySelector('.currentTime');
const pauseTime = document.querySelector('.pause');
const restartTime = document.querySelector('.restart');

//시간 다 두자리 + 분, 초 현재로 흐르게.
function nowTime() {
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');

//오전 오후 계산
let time = hours % 12;
if (time === 0) time = 12;

//시간만 따로 두자리 선언해주기
const timeHours = time.toString().padStart(2, '0');



let appm;
if (hours < 12) {
    ampm = '오전';
} else {
    ampm = '오후';
}

currentTime.textContent = `현재 시각 ${ampm} ${timeHours}:${minutes}:${seconds}`; //오후까지 $이걸로 묶어서 바뀌게 표시

// // 인사말 
// let timer;
// if (hours < 12) {
//     timer = "굿모닝☀️ :) 지금은 오전이에요 🌅";
// } else {
//     timer = "굿애프터눈! 지금은 오후예요 🌇";
// }
}

//시간이 계속 1초마다 바뀌게 let, now로 
nowTime();
timeId = setInterval(nowTime, 1000);
// 버튼 클릭 시 일시정지 / 재시작 기능을 구현하려면 setInterval ID를 변수에 저장해서 제어해야 합니다.


//이제 버튼에 이벤트만 주면 끝 !!

pauseTime.addEventListener('click', ()=> {
  clearInterval(timeId);
});

pauseTime.addEventListener('click', ()=> {
    clearInterval(timeId);  // <- 이걸주면 이미 실행중이면? 멈춤 
    timeId = setInterval(nowTime, 1000);
});