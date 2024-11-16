let playerScore = 0;
let computerScore = 0;
let timer;

// دالة بدء المؤقت
function startTimer() {
  let timeLeft = 10;  // 10 ثواني
  document.getElementById('timer').textContent = `الوقت المتبقي: ${timeLeft} ثواني`;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = `الوقت المتبقي: ${timeLeft} ثواني`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("انتهى الوقت! تم تحديد خيار عشوائي.");
      play(generateRandomChoice());
    }
  }, 1000);
}

// دالة لتحديد اختيار عشوائي
function generateRandomChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// دالة اللعبة
function play(playerChoice) {
  startTimer();  // بدء المؤقت عند اختيار اللاعب

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  // عرض الاختيارات
  document.getElementById('playerChoice').textContent = `أنت اخترت: ${playerChoice}`;
  document.getElementById('computerChoice').textContent = `الكمبيوتر اختر: ${computerChoice}`;

  // تحديد الفائز
  if (playerChoice === computerChoice) {
    result = 'التعادل! جرب مرة أخرى.';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = 'لقد فزت!';
    playerScore++;  // زيادة نقاط اللاعب
    document.getElementById('winSound').play(); // تشغيل صوت الفوز
  } else {
    result = 'لقد خسرت! الكمبيوتر فاز.';
    computerScore++;  // زيادة نقاط الكمبيوتر
    document.getElementById('loseSound').play(); // تشغيل صوت الخسارة
  }

  // عرض النتيجة
  document.getElementById('result').textContent = result;
  document.getElementById('playerScore').textContent = `نقاطك: ${playerScore}`;
  document.getElementById('computerScore').textContent = `نقاط الكمبيوتر: ${computerScore}`;
}

// دالة إعادة اللعبة
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('playerScore').textContent = `نقاطك: 0`;
  document.getElementById('computerScore').textContent = `نقاط الكمبيوتر: 0`;
  document.getElementById('result').textContent = '';
  document.getElementById('playerChoice').textContent = '';
  document.getElementById('computerChoice').textContent = '';
  document.getElementById('timer').textContent = 'الوقت المتبقي: 10 ثواني';
}
