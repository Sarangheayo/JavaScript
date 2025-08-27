function checkGrade() {
  const score = number(document.querySelector('#score').value);
 
   let grade = '';

   if (score === 100) {
    grade = 'A+';
   } else if (score >= 90) {
    grade = 'A' ;
   } else if (score >= 80) {
    grade = 'B';
   } else if (score >= 70) {
    grade = 'C';
   } else if (score >= 60) {
        grade = 'D';
      } else {
        grade = 'F';
      }

    document.querySelector('#result').textContent =
     `your grade is ${score}.' <${grade}>`;
     console.log(grade); 
       
     
     
  const submitScore = document.querySelector('#result');
  submitScore.textContent = 'AllOWED "OLNY MUNBER"';

  submitScore.addEventListener('click', (e) => {
    if(e.target.value) {
      
    }
  });

  const caution = document.querySelector('#caution');

  gradeResult = document.createElement(h2);
  gradeResult.textContent = `Your grade is ${score}. <${grade}>`;
  document.querySelector('.div').appendChild(gradeResult);
}



