// Toggle "Saiba Mais"
const toggleButton = document.getElementById('toggleButton');
const extraText = document.getElementById('extraText');

toggleButton.addEventListener('click', () => {
    if (extraText.classList.contains('visible')) {
        extraText.classList.remove('visible');
        extraText.classList.add('hidden');
        toggleButton.textContent = 'Saiba Mais';
    } else {
        extraText.classList.remove('hidden');
        extraText.classList.add('visible');
        toggleButton.textContent = 'Mostrar Menos';
    }
});

// Quiz
const quizQuestions = [
    {
        question: "Qual dessas ações é sustentável no dia a dia?",
        options: ["Usar sacolas plásticas descartáveis", "Reciclar corretamente", "Desperdiçar água", "Queimar lixo no quintal"],
        answer: 1
    },
    {
        question: "O que a agricultura sustentável visa preservar?",
        options: ["Solo e água", "Somente o lucro", "Somente a tecnologia", "Nada específico"],
        answer: 0
    },
    {
        question: "Reduzir o uso de plásticos ajuda a:",
        options: ["Aumentar a poluição", "Proteger o meio ambiente", "Diminuir a biodiversidade", "Aumentar o consumo de energia"],
        answer: 1
    }
];

let currentQuestion = 0;

const quizQuestionEl = document.getElementById('quizQuestion');
const quizOptionsEl = document.getElementById('quizOptions');
const quizResultEl = document.getElementById('quizResult');
const nextQuestionBtn = document.getElementById('nextQuestion');

function loadQuestion() {
    quizResultEl.textContent = '';
    const q = quizQuestions[currentQuestion];
    quizQuestionEl.textContent = q.question;
    quizOptionsEl.innerHTML = '';
    q.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => checkAnswer(index));
        quizOptionsEl.appendChild(li);
    });
}

function checkAnswer(selected) {
    const correct = quizQuestions[currentQuestion].answer;
    if (selected === correct) {
        quizResultEl.textContent = "✅ Correto!";
    } else {
        quizResultEl.textContent = `❌ Incorreto! A resposta certa é: ${quizQuestions[currentQuestion].options[correct]}`;
    }
}

nextQuestionBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion >= quizQuestions.length) {
        quizResultEl.textContent = "🎉 Você completou o quiz!";
        quizQuestionEl.textContent = "";
        quizOptionsEl.innerHTML = "";
        nextQuestionBtn.style.display = "none";
    } else {
        loadQuestion();
    }
});

// Inicializa o quiz
loadQuestion();