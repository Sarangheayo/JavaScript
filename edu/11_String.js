//String 객체

let str = `문자열입니다.`;

// length : 문자열의 길이를 반환
console.log(str.length);


//charAt(idx) : idx의 요소의 값을 반환 : character + At
console.log(str.charAt(3));

// indexOF(searchStr, idx) : 해당 문자열에서 searchStr을 찾아 최초의 인덱스를 반환
// 찾지 못하면 -1 반환, indexof, includes
// idx는 생략 가능, = idx? -> start 지점을 지정하는 친구.
str = '문자열입니다. 문자열입니다.';
console.log(str.indexOf('열'));
console.log(str.indexOf('열', 3));
console.log(str.indexOf('입니다'));
console.log(str.includes('슷자')); // 없으니까 -1, false / includes 이용, 가독성 향상

// replace(pattern, replacement) -> 기존 pattern을 찾아서 첫번째 문자열을 replacement 치환한 문자
str = '문자열입니다. 문자열입니다.';
console.log(str.replace('문자열', '')); //특정 글자 찾아서 지우고 싶을때 ''주면? 제거 가능

// replaceAll(pattern, replacement) -> pattern을 찾아서 모든 문자열을 replacement 치환한 문자
str = '문자열입니다. 문자열입니다.';
console.log(str.replaceAll('문자열', '최설아'));

//substring(startIdx, endIdx) :startIdx부터 endIdx까지 자른 문자열을 반환, endIdx 생략가능
str = '문자열입니다. 문자열입니다.';
console.log(str.substring(3, 5));

//split(separator, limit) : 문자열에서 separator 기준으로 각 문자열을 잘라 배열 요소로 담은 배열을 반환
//limit 배열 길이 조절 가능 
str = '탕수육, 짜장면, 짬뽕, 크림새우';
let arr = str.split(',');
console.log(str.split(',', 1));

//  trim() : 문자열의 시작과 끝에 있는 공백을 제거한 문자열을 반환  
str = '   하  하    ';
console.log(str.trim()); //문자열 사이의 공백은 사라지지 않음/ 앞 뒤말고 다른 부분은? replace로 하세요

// toUpperCase(), toLowerCase() : 영어 대/소문자로 변환해서 반환
str = 'AfdfrgDTSssd';
console.log(str.toUpperCase());
console.log(str.toLowerCase());