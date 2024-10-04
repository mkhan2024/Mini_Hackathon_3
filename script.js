const questions = [
    {
      question: 'What is the capital of France?',
      answers: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 2
    },
    {
      question: 'Which programming language is used for web development?',
      answers: ['Python', 'JavaScript', 'C++', 'Java'],
      correctAnswer: 1
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const answerButtons = document.querySelectorAll('.btn');
  const nextButton = document.getElementById('next-btn');
  const resultElement = document.getElementById('result');
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
      button.textContent = currentQuestion.answers[index];
      button.addEventListener('click', () => selectAnswer(index));
    });
  }
  
  function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
      score++;
      resultElement.textContent = 'Correct!';
    } else {
      resultElement.textContent = 'Wrong answer!';
    }
    nextButton.style.display = 'block';
  }
  
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      resultElement.textContent = '';
      nextButton.style.display = 'none';
      showQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    questionElement.textContent = 'Quiz Completed!';
    answerButtons.forEach(button => button.style.display = 'none');
    resultElement.textContent = `Your score: ${score}/${questions.length}`;
    nextButton.style.display = 'none';
  }
  
  showQuestion();
  