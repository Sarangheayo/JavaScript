//date



const startDate = new Date('2001-01-18 00:00:00');
const endDate   = new Date('2025-08-22 00:00:00');

let diffMs = Math.abs(endDate - startDate); // 두 날짜 차이 (밀리초)

// 각각 단위로 변환
const days    = Math.floor(diffMs / (1000 * 60 * 60 * 24));
diffMs       %= (1000 * 60 * 60 * 24);

const hours   = Math.floor(diffMs / (1000 * 60 * 60));
diffMs       %= (1000 * 60 * 60);

const minutes = Math.floor(diffMs / (1000 * 60));
diffMs       %= (1000 * 60);

const seconds = Math.floor(diffMs / 1000);

console.log(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`); 
