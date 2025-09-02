const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const inputBox = document.querySelector('.inputBox');

const url = 'https://picsum.photos/v2/list?page=1&limit=10';

function wantSubmit() {
    axios.get(url)
  .then(response => {
    response.data.forEach((item, idx) => {
      const newImg = document.createElement('img');    
      newImg.setAttribute('src', item.download_url);
      newImg.setAttribute('width', '300px');
      
      imgBox.appendChild(newImg);
    });
  })
  .catch(err => {
    console.error(err);
});

// 버튼 클릭 시 input 값으로 이미지 추가
btn.addEventListener('click', () => {
  const value = input.value.trim();
  if(!value) {
    alert('이미지 링크를 입력하세요!');
    return;
  }
  const newImg = document.createElement('img');
  newImg.setAttribute('src', value);
  newImg.setAttribute('width', '300px');

  imgBox.appendChild(newImg);
  input.value = '';
});

}
