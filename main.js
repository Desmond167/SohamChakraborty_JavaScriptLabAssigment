// function Quiz(data){
    
//     this.score = 0;
//     this.isFinished = false;
//     this.increaseScore = function () {
//         console.log(this.score)
//         this.score++;
//       };
// }

// Quiz.increaseScore = function () {
//     console.log(this.score)
//     this.score++;
//   };

let score = 0;
let isFinished = false;

fetch('data.json')
  .then(response => response.json())
  .then(data = function(data) {

      console.log("These are the loaded questions");
      console.log(data);
      loadQuestion(0, data);

  }
  )
  .catch(error => console.log(error));

function validate(data, answer) {
    if (answer === data['correct']) {
        score++
    }

    else {
        pass;
    }
    
}

function loadQuestion(index, questions) {
    data = questions[index];

    console.log("Dispaying Question");
    console.log(data);

    question = document.getElementById("question");
    question.innerHTML = data['question'];

    for (let i=0; i<data['options'].length; i++) {
        button = document.getElementById("choice"+i);
        button.innerHTML = data['options'][i];

        btnElement = document.getElementById("btn"+i);
        btnElement.onclick = () => {
            validate(data['options'][i]);
            if (index === questions.length-1){
                isFinished = true;
            }

            else {
                loadQuestion(index+1, questions);
            }
        
            if (isFinished === true) {
                alert("Your score is: " + score);
            }
          };
    }
     
}
