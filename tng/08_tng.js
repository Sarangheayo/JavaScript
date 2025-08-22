

// const result = [ 
//   {
//     userId: 1,
//     email: 'admin1@admin.com',
//     password: 'ga3l5ikgbjaw4iptrvj304a9',
//     name: 'jhon',
//     rank: 1,
//   },
//   {
//     userId: 2,
//     email: 'admin2@admin.com',
//     password: 'ga3l5ikgbjaw4iptrvj304a9',
//     name: 'suzan',
//     rank: 2,
//   },
//   {
//     userId: 3,
//     email: 'admin3@admin.com',
//     password: 'ga3l5ikgbjaw4iptrvj304a9',
//     name: 'ahoi',
//     rank: 3,
//   },
//   {
//     userId: 4,
//     email: 'admin4@admin.com',
//     password: 'ga3l5ikgbjaw4iptrvj304a9',
//     name: 'yoho',
//     rank: 2,
//   },
// ];

// // rank 코드 → 한글 변환 매핑
// const rankMap = {
//   1: '관리자',
//   2: '팀장',
//   3: '주임',
//   4: '사원',
// };

// // 변환된 새로운 배열
// const converted = result.map(user => ({
//   ...user,
//   rank: rankMap[user.rank] || '기타'
// }));

// console.log(converted);

//===============================================================================
const result = [
  {
    userId: 1,
    email: 'admin1@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'jhon',
    rank: 1,
  },
  {
    userId: 2,
    email: 'admin2@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'suzan',
    rank: 2,
  },
  {
    userId: 3,
    email: 'admin3@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'ahoi',
    rank: 3,
  },
  {
    userId: 4,
    email: 'admin4@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'yoho',
    rank: 4,
  },
];

//-------------------------------------------------------------------

const resultMap = result.map(item => {
   let krRank = '';
   if(item.rank === 1) {
       krRank = '관리자';
   } else if(item.rank === 2) {
     krRank = '팀장';
   }  else if(item.rank === 3) {
     krRank = '주임';
   }  else  {
     krRank = '사원'; 
   }
   
   //원본 변경하지 않기 위해, deep copy 이용
   const copyItem = {...item}; 
   copyItem.rank = krRank;
   return copyItem;
});

 console.log(resultMap) ;