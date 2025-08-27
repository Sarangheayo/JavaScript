// 이벤트.. user가 클릭할 때, 마우스 무브할 때 좌표주기.. 등등 다 이벤트임

// 3 방법이 있다. 1개로 거의 다 사용/ 나머지 두개는 거의 사용 X deprecated

function test () {
     alert('테스트');
}

// property listener 프로퍼티 리스너 <- 오늘날 잘 안씀
// 동일한 이벤트를 여러번 사용 불가
// const btn2 = document.querySelector('#btn2');
// btn2.onclick = () => {
//     alert('버튼 2222')
// }
// btn2.onclick = () => {
//     alert('22222222')
// }

//요즘은 이거 씀 -> addEventListener
//동일한 이벤트를 여러번 사용 가능(마우스 움직임에 따라 변형할 때 사용 )
// const btn3 = document.querySelector('#btn3');
// btn3.addEventListener('click', btn3Alert);

// removeEventListener() : 이벤트 제거
// btn3.removeEventListener('click', btn3Alert);


// function btn3Alert(event) {
//     console.log(event);
//     alert('333');
// }

// btn3.addEventListener('click', () => {
//     alert('튼튼333');
// } );

window.addEventListener('scroll', () => {
    console.log('scroll test');
});

window.addEventListener('load', () => {
     window.open("https://www.google.com");
})

//--------------------------------
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (e) => {

    const regex = /^[0-9]+$/; // 숫자만 허용

    if (!regex.test(e.target.value)) {
      label.textContent = '숫자만 입력해주세요.';
      label.style.color = 'red'; // 글자 색 빨간색
    } else {
      label.textContent = '';
    }
  });


// ------ gpt answer ----------
// window.open(
//   "https://www.google.com",   // URL
//   "GoogleWindow",             // 창 이름
//   "width=600,height=400,top=100,left=100,scrollbars=yes"
// );

//-------------pw----------------
const chkPw = document.querySelector('#seePw');
// 유저가 클릭할때로 하면? 인식 못할수도 ㅇ, change possible
// 체크박스 생성
chkPw.addEventListener('change', (e) => {
 // 인풋 패스워드 접근
  const pw = document.querySelector('#pw');

  //체크 여부 확인 분기
  if(e.target.checked) {
    //인풋 패스워드 type속성 text로 변경
    pw.setAttribute('type', 'text');
  } else {
    //인풋 패스워드 type 속성 password로 변경
    pw.setAttribute('type', 'password');
  } 
});

// ''/유일하게 허용되는거 classList, style뿐이다. // 바로 접근 ㄴ(e.g. pw.type X)