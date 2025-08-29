const nowTime = document.querySelector('#nowTime');
nowTime.textContent = generateNowTimeFormat();

// 멈춰 버튼 처리
const btnStop = document.querySelector('#bntStop');
btnStop.addEventListener('click', () => {
 clearInterval(intervalNowTime);
});

// 재시작 버튼 처리
const btnRestart = document.querySelector('#btnRestart');
btnRestart.addEventListener('click', () => {
 clearInterval(intervalNowTime);
 nowTimeIntoElement('#nowTime');
 setInterval(() => {
 nowTimeIntoElement('#nowTime');
 }, 1000);
 });

 // 기록 버튼
 const btnRecord = document.querySelector('#btnRecord');
 btnRecord.addEventListener('click', () => {
 const container = document.querySelector('.recordContainer');
 const newP = document.createElement('p')
 newP.textContent =generateNowTimeFormatUntilMilliseconds();
 container.appendChild(newP);

 });

 // 기록 초기화
 const btnRecordReset = document.querySelector('#recordContainerReset');
btnRecordReset.addEventListener('click', () => {
    document.querySelector('.recordContainer').textContent = '';
});



/**
 * selector로 선택한 요소의 textContent에 현재시간 삽입
 * @param {string} selector 
 */
function nowTimeIntoElement(selector) {
    const element = document.querySelector(selector);
    element.textContent = generateNowTimeFormat();
}


// -----------------이하 함수 ---------------
/**
 * 현재시간을 `오전 hh:mm:SS` 형식으로 반환
 * @returns {string} 
 */
function generateNowTimeFormat() { //함수로 묶어놨으니 쟤만 빼서 딴데 쓸수이떠용
    const now = new Date();
    // return now.toLocaleDateString();
    const hours = now.getHours();
    const minutes = now.getMinutes(minutes.toString().padStart(2, '0'));
    const seconds = now.getSeconds(seconds.toString().padStart(2, '0'));
        
    let ampm = '' //아 얘는 문자가 들어가겠구나.
    if(hours < 12) {
    ampm = '오전';
    } else {
      ampm = '오후';
      hours -= 12;
    

    return `${ampm} ${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
    }

    let intervalNowTime = setInterval(() => {
     nowTimeIntoElement('#nowTime');
    }, 1000);
}
/**
 * 현재시간을 `오전 hh:mm:SS.sss` 형식으로 반환
 * @returns 
 */
function generateNowTimeFormatUntilMilliseconds() { //함수로 묶어놨으니 쟤만 빼서 딴데 쓸수이떠용
    const now = new Date();
    // return now.toLocaleDateString();
    const hours = now.getHours();
    const minutes = now.getMinutes(minutes.toString().padStart(2, '0'));
    const seconds = now.getSeconds(seconds.toString().padStart(2, '0'));
    const Milliseconds = now.getMilliseconds();

    let ampm = '' //아 얘는 문자가 들어가겠구나.
    if(hours < 12) {
    ampm = '오전';
    } else {
      ampm = '오후';
      hours -= 12;
    

    return `${ampm} ${hours.toString().padStart(2, '0')}:`
    + `${minutes}:${seconds}.${Milliseconds.toString().padStart(3, '0')}`;
    }

    let intervalNowTime = setInterval(() => {
     nowTimeIntoElement('#nowTime');
    }, 1000);
}

//함수를 따로 뺐다면? jsDoc로 빼주긔 ><
