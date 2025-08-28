// const searchBar = document.querySelector('#searchBar');
// const btn = document.querySelector('#Btn');
// const container = document.querySelector('div');

// btn.addEventListener('click', function () {

//   let inputValue = searchBar.value;

//   if(inputValue !== '') {
//     const box = document.createElement('h4'); <- div, P 로나 UL>li를 쓰면 좋아요//
//     box.textContent = inputValue;

//     box.classList.add('inputValue');

//     container.appendChild(box);

//     searchBar.value = '';
//   }
// });

// ------------------------------------------------------------------//

const writeBtn = document.querySelector('#writeBtn');
writeBtn.addEventListener('click', () => {
    const keywordInput = document.querySelector('#keyword')
    //false로 인식, 값만 넣어도 인식 
    if(keywordInput.value) {


    // content 요소 생성
    const newContent = document.createElement('div');
    newContent.classList.add('content');
    const newP = document.createElement('p');
    newP.textContent = keywordInput.value;
    newContent.appendChild(newP);
    newContent.addEventListener('click', (e) => {
      e.target.classList.toggle('toggle-line-through');
    });

     //생성한 요소 추가
    const printBox = document.querySelector('.print-box');
    printBox.appendChild(newContent);

    // 검색어 초기화 
    keywordInput.value = '';
}
});


//서비스
//1. 엔터쳐도 전송되게 하기
//2. 아이템 클릭하면 완료, 제거하면 취소 

const keywordInput = document.querySelector('#keyword');
keywordInput.addEventListener('keypress', (e) => {
   if(e.key === 'Enter') {
    e.preventDefault();
    const writeBtn = document.querySelector('#writeBtn');
    writeBtn.click();
   }
});

//겹치는 부분 함수로 빼기 - 알아보세여어
