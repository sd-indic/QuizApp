const questions = [
    {
    'que': 'Which of the following is a MarkUp Language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a',
    },
    {
    'que': 'What does HTML stands for?',
    'a': 'Hyper Text Machine Language',
    'b': 'Hyper Text Markup Language',
    'c': 'Hyper Text Modern Language',
    'd': 'Hyper Text Mark Language',
    'correct': 'b',
    },
    {
       'que': 'Choose the correct HTML element for the largest heading.',
    'a': '<h6>',
    'b': '<head>',
    'c': '<h1>',
    'd': '<heading>',
    'correct': 'd',
    },
    {   
    'que': 'What is the correct HTML element for inserting a line break?',
    'a': '<lb>',
    'b': '<break>',
    'c': '<br>',
    'd': '<b>',
    'correct': 'a',
    }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]

    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
   
}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct){
        right++;
    } else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
                
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML =`
    <div style="text-align:center">
    <h3> Thank you for Participating!</h3>
    <h2> ${right}/${total} are correct </h2>
    </div>
    `
}
//initial call
loadQuestion();