const janggi = document.createElement('li');
janggi.textContent = '장기';

const apple = document.querySelector('#apple');
const ul = document.getElementById('ul');

ul.insertBefore(janggi, apple);

const ListColor = document.querySelectorAll('li');
ListColor.forEach((ListColor, index) => {
 if((index + 1) % 2 === 0) {
    ListColor.style.color = 'red'; 
 }  else {
    ListColor.style.color = 'blue';
 }
 });

// const lastList = document.querySelectorAll('li');

// lastList.forEach((lastList, index'이름은 아무거나 상관 ㄴ) => {
//  if((index + 1) % 2 === 0) {
//     lastList.style.backgroundColor = 'yellow'; 
//  } else {
//     lastList.style.backgroundColor = 'skyblue';
//  }

// });

const lastList = document.querySelector('#ul li:last-child');
lastList.style.backgroundColor = 'beige';

function change() {
    const ListColor = document.querySelectorAll('li');
ListColor.forEach((ListColor, index) => {
 if((index + 1) % 2 === 0) {
    ListColor.style.color = 'red'; 
 }  else {
    ListColor.style.color = 'blue';
 }
 });
}

// const lastList = document.querySelector('#ul li:last-child');
// lastList.style.backgroundColor = 'beige';
// change();

// function addLichild() {
//     const A = document.createElement('li';);
//     A.textContent = '스타';
// }

const result = {
    title: '타이틀',
    content: '내용내용',
    img: 'https://www.admin.com/img/posts/lassfsd.png'
};

function addCard(item) {
//카드 구조
const newCard = document.createElement('div');
newCard.classList.add('card');

const newCardImg = document.createElement('div');
newCardImg.classList.add('card-img');

const newCardTitle = document.createElement('p');
newCardTitle.textContent = item.title;

const newCardContent = document.createElement('p');
newCardContent.textContent = item.content;

newCard.appendChild(newCardImg);
newCard.appendChild(newCardTitle);
newCard.appendChild(newCardContent);

document.body.appendChild(newCard);
}

