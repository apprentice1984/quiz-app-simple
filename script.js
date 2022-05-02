//TEST BRANCH
//get a ref to html form
const formElement = document.getElementById('form')

let userAnswers = []
let index = 1,
  checkedIn = false

//array with right answer numbers
const rightAnswers = ['4', '2', '1', '2']

const questionsArray = [
  'Which language runs in a web browser?',
  'What does CSS stand for?',
  'What does HTML stand for?',
  'What year was JavaScript launched?',
]

const answersArray = [
  ['Java', 'C', 'Python', 'JavaScript'],
  [
    'Central Style Sheets',
    'Cascading Style Sheets',
    'Cascading Simple Sheets',
    'Cars SUVs Sailboats',
  ],
  [
    'Hypertext Markup Language',
    'Hypertext Markdown Language',
    'Hyperloop Machine Language',
    'Helicopters Terminals Motorboats Lamborginis',
  ],
  ['1996', '1995', '1994', 'none of the above'],
]

updateForm()

formElement.addEventListener('submit', (e) => {
  e.preventDefault()

  //Проверить ответы
  checkAnswers()

  if (!checkedIn) {
    return
  }

  checkedIn = false
  //Проверить, выбран ли ответ. Если не выбран, то ничего не делать
  //А если выбран, то обновить разметку
  if (index < 4) {
    updateForm(index++)
  } else if (index >= 4) {
    let count = 0
    for (let i = 0; i < 4; i++) {
      if (rightAnswers[i] === userAnswers[i]) {
        count++
      }
    }

    formElement.innerHTML = `
    <h3 style='font-size:1.7rem; text-align: center'>You answered ${count}/4 questions correctly</h3>
     <div>
          <button type="reset" onclick='location.reload();'>Reload</button>
      </div>`
  }
})

//Обновить форму
function updateForm(index = 0) {
  let formContainer = `
   <h3 class="question">${questionsArray[index]}</h3>
        <div class="answers">
          <div class="form-input">
            <input type="radio" id="answer1" name="contact" value="1"  />
            <label for="answer1">${answersArray[index][0]}</label>
          </div>

          <div class="form-input">
            <input type="radio" id="answer2" name="contact" value="2" />
            <label for="answer2">${answersArray[index][1]}</label>
          </div>

          <div class="form-input">
            <input type="radio" id="answer3" name="contact" value="3" />
            <label for="answer3">${answersArray[index][2]}</label>
          </div>

          <div class="form-input">
            <input type="radio" id="answer4" name="contact" value="4" />
            <label for="answer4">${answersArray[index][3]}</label>
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
`
  formElement.innerHTML = formContainer
}

//Проверить ответ и добавить в массив ответов
function checkAnswers() {
  const answers = document.querySelectorAll('.answers input[type="radio"]')
  answers.forEach((answer) => {
    if (answer.checked) {
      userAnswers.push(answer.value)
      checkedIn = true
    }
  })
}
