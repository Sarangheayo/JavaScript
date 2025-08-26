// 요소 선택 방법
// [1] HTML 요소의 ID로 선택하는 방법
const title = document.getElementById('title');
console.log(title);
title.style.color = 'blue';

// [2] HTML 요소의 태그명으로 선택하는 방법
const tagH1 = document.getElementsByTagName('h1');  // 배열같은 객체야. mapm fillter.. 다쓸수 있음

// 가진 모든 h1을 다 적용하고 싶다면? 이터러블 객체 - for O, forEach X 사용가능

for(let i = 0; i < tagH1.length; i++) {
  tagH1[i].style.fontSize = '50px';
} 

// HTML 요소의 클래스명으로 선택하는 방법
const classH1 = document.getElementsByClassName('test');
console.log(classH1);



//**현업사용 많이하는 애들!! IMPORTANT! */
// 'querySelector' 쓰면 복수일 경우 제일 처음 요소만 적용가능
const selectorTitle = document.querySelector('#title');
selectorTitle.style.color = 'red';
// CSS 선택자로 요소를 선택하는 방법
// 'NodeList 객체' 복수일 경우 모두 선택,
const selectorAllH1 = document.querySelectorAll('h1');
selectorAllH1.forEach(node => node.style.color = 'green');

//------------------------------
// 요소 조작
//------------------------------
//textContent : 컨텐츠를 획득 및 변경, 순수한 텍스트 데이터를 전달 
selectorTitle.textContent = '넣어주면 된다.';

//innerHTML : 컨텐츠를 획득 및 변경, 태그는 태그로 인식해서 전달
selectorTitle.innerHTML = '<span>이너로 넣었다.</span>';

// setAttribute(속성명, 값) : 요소에 속성을 추가
const inputEmail = document.querySelector('input');
inputEmail.setAttribute('placeholder','이메일을 적어주세요.');
inputEmail.setAttribute('required','');

// removeAttribute(속성명) : 요소의 속성을 제거
selectorAllH1[1].removeAttribute('style');

//----------------
// 요소 스타일링
//----------------
//title.style.color -> 인라인 스타일 추가 방법inline:bg...display 정도 사용하고 나머지는 별로 사용 X
 title.style.color = 'red';

// classList : property다. HTML 요소에 클래스로 스타일 추가
const P = document.querySelector('P');
P.classList.add('test2');
P.classList.remove('test');
P.classList.toggle('test3'); // 토글을 이용해 제거, 추가 반복 가능.

