const form = document.querySelector('.quiz-form');
const btn = document.querySelector('.btn');
const pScore = document.querySelector('#p-score');

const correctAnswers = ['B', 'B', 'B', 'B'];  

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;
  let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  
  scrollTo(0, 0);

  let output = 0;
  let timer = setInterval(() => {

    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
      pScore.textContent = `${output}%`;
    }
  }, 10);
});