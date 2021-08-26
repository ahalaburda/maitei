import swal from '@sweetalert/with-react';
import ReactAudioPlayer from 'react-audio-player';

export function checkAnswerAudioToTalk(answers, nextStepMethod) {
  for (let index = 0; index < answers.length; index++) {
    let element = document.getElementById("answer-" + (index + 1));
    if (element.value === answers[index].correct_answer + "") {
      return nextStepMethod
    }
  }
}

export function checkAnswerCompleteTexts(answers, nextStepMethod) {
  let correct = 0;
  let error = 0;
  let error_index = 0
  for (let index = 0; index < answers.length; index++) {
    let element = document.getElementById("answer-" + (index + 1));
    let input = element.value;
    let answer = answers[index].answer + "";
    input = input.toLowerCase()
    answer = answer.toLowerCase()
    if (input === answer) {
      correct++;
    } else {
      error++;
      error_index = index;
    }
  }
  console.log("correct: "+correct)
  console.log("error: "+error)
  if (error === 0) {
    return nextStepMethod
  }else{
    swal({
      title: "Lo siento",
      content: <div>  
                <p>La respuesta correcta es:</p>
                <h1>{answers[error_index].answer}</h1>
              </div>,
      icon: "error",
      }).then((value) => {
        return nextStepMethod
    });
  }
}

export function checkAnswerSelectText(answers, nextStepMethod) {
  let correct = 0;
  let correct_answer = false;
  for (let index = 0; index < answers.length; index++) {
    let element = document.getElementById("answer-" + (index + 1));
    if (answers[index].correct_answer) {
      correct = index
    }
    if (element.checked === true && element.checked === answers[index].correct_answer) {
      correct_answer = true
    }
  }
  if (correct_answer === false) {
    swal({
      title: "Lo siento",
      content: <div>
                 <p> La respuesta correcta es: </p>
                 <h1> { answers[correct].answer } </h1>
               </div>,
      icon: "error",
    }).then(() => {
      return nextStepMethod
    })
  } else {
    return nextStepMethod
  }
}

export function checkAnswerSelectAudio(answers, nextStepMethod) {
  let correct = 0;
  let correct_answer = false;
  for (let index = 0; index < answers.length; index++) {
    let element = document.getElementById("answer-" + (index + 1));
    if(answers[index].correct_answer){
      correct = index
    }
    if (element.checked === true && element.checked === answers[index].correct_answer) {
      correct_answer = true
    }
  }
  if (correct_answer === false) { 
    swal({
      title: "Lo siento",
      content: <div>  
                <p>La respuesta correcta es:</p>
                <h4>Opción #{correct+1}</h4>
                <ReactAudioPlayer
                  src={"http://localhost:8000" + answers[correct].answer_filename}
                  controls
                />
              </div>,
      icon: "error",
    }).then(() => {
      return nextStepMethod
    })
  } else {
    return nextStepMethod
  }
}

export function checkAnswerSelectImages(answers, nextStepMethod) {
  let correct = 0;
  let correct_answer = false;
  for (let index = 0; index < answers.length; index++) {
    let element = document.getElementById("answer-" + (index + 1));
    if (answers[index].correct_answer) {
      correct = index
    }
    if (element.checked === true && element.checked === answers[index].correct_answer) {
      correct_answer = true
    }
  }
  if (correct_answer === false) {
    swal({
      title: "Lo siento",
      content: <div>  
                <p>La respuesta correcta es:</p>
                <img src={"http://localhost:8000" + answers[correct].answer_filename} alt="" height="50px" width="auto" />
              </div>,
      icon: "error",
    }).then(() => {
      return nextStepMethod
    })
  } else {
    return nextStepMethod
  }
}
