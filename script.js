const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];
let currentQuestionIndex = 0;

function quiz() {
  const container = document.getElementById('container');
  container.innerHTML = '';

  const quesEle = document.createElement('div');
  quesEle.textContent = questions[currentQuestionIndex].questionText;
  container.appendChild(quesEle);

  const optcontainer = document.createElement('ul');
  questions[currentQuestionIndex].options.forEach((opt, optindex) => {
    const optEle = document.createElement('li');
    const radioele = document.createElement('input');
    radioele.setAttribute('type', 'radio');
    radioele.setAttribute('value', optindex);
    radioele.setAttribute('name', `question-${currentQuestionIndex}`);
    optEle.appendChild(radioele);
    optEle.appendChild(document.createTextNode(opt));
    optcontainer.appendChild(optEle);
  });

  container.appendChild(optcontainer);

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  container.appendChild(submitButton);

  submitButton.addEventListener('click', () => {
    const submittedAns = Array.from(document.querySelectorAll(`input[name="question-${currentQuestionIndex}"]:checked`));

    if (submittedAns.length === 0) {
      alert("Please select an answer");
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      quiz();
    } else {
      showScore();
    }
  });
}

function showScore() {
   // Calculate score and display it
    let score=0;
    questions.forEach((question,index)=>{
        if(question.answer===question.options[submittedAns[index].value])
        score++;
    });
    const sc=document.createElement("p");
    sc.textContent= `Score: ${score} out of ${questions.length}`;
    document.getElementById("container").appendChild(sc);
}

