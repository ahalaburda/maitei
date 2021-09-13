/* eslint-disable default-case */
import React, {
  Component
} from 'react'
//Addons
import {
  Redirect
} from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import swal from '@sweetalert/with-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // minified version is also included // import 'react-toastify/dist/ReactToastify.min.css';
import ReactAudioPlayer from 'react-audio-player';
//Service
import ExercisesService from "../../services/Exercises";
import { baseURL } from "../../services/http-common";
//Reactives
import AudioToTalk from "../../reactives/AudioToTalk";
import AudioToCompleteTexts from "../../reactives/AudioToCompleteTexts";
import AudioToSelectTexts from "../../reactives/AudioToSelectText";
import AudioToSelectAudio from "../../reactives/AudioToSelectAudio";
import AudioToImages from "../../reactives/AudioToImages";
import TextToImages from "../../reactives/TextToImages";
import TextToSelectText from '../../reactives/TextToSelectText';
import TextToCompleteTexts from '../../reactives/TextToCompleteTexts';
import TextToSelectAudio from '../../reactives/TextToSelectAudio';
import ImageToSelectText from '../../reactives/ImageToSelectText';
import ImageToCompleteTexts from '../../reactives/ImageToCompleteTexts';
import ImageToSelectAudio from '../../reactives/ImageToSelectAudio';
//Intros
//es
import Chapter1A from '../../intros/es/Chapter1A';
// import {Chapter1A as Chapter1A_es} from '../../intros/es/Chapter1A';

//en
import Chapter1AEN from '../../intros/en/Chapter1A';
//i18n
import i18n from '../../i18n/index'


class Exercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseId: 0,
      exercises: [],
      answers: [],
      currentOrder: 26
    };
  }

  getExercisesId(chapterId) {
    ExercisesService.getExercises(chapterId)
      .then((response) => {
        ExercisesService.getExerciseDetails(response.data[0].id)
          .then((response) => {
            this.setState({
              exercises: response.data.map((data) => {
                return {
                  id: data.id,
                  exercise_Text_to_text: data.exercise_id_Text_to_text,
                  exercise_Text_to_media: data.exercise_id_Text_to_media,
                  exercise_Media_to_text: data.exercise_id_Media_to_text,
                  exercise_Media_to_media: data.exercise_id_Media_to_media,
                  order: data.order,
                  experience: data.experience,
                  active: data.active,
                  reactive: data.reactive_id,
                }
              }),
            })
          })
          .catch((e) => {
            alert(e);
            console.log(e);
          })
      })
      .catch((e) => {
        alert(e);
        console.log(e);
      })
  }

  componentDidMount() {
    let chapterId = sessionStorage.getItem('maitei_chapter_id');
    this.getExercisesId(chapterId);
  }

  progressPosition = (currentOrder, total) => {
    return (100 * currentOrder - 1) / total
  }

  checkAnswer = () => {
    let answers;
    // eslint-disable-next-line array-callback-return
    if (this.state.currentOrder === 0) {
      this.nextStep();
    }
    this.state.exercises.map((data, id) => {
      if (data.order === this.state.currentOrder) {
        if (data.exercise_Text_to_text != null) {
          answers = data.exercise_Text_to_text.answers;
        } else if (data.exercise_Text_to_media) {
          answers = data.exercise_Text_to_media.answers;
        } else if (data.exercise_Media_to_text) {
          answers = data.exercise_Media_to_text.answers;
        } else {
          answers = data.exercise_Media_to_media.answers;
        }

        if (data.reactive.id === 1) {        // 1- Audio / talk
          for (let index = 0; index < answers.length; index++) {
            let element = document.getElementById("answer-" + (index + 1));
            if (element.value === answers[index].correct_answer + "") {
              this.nextStep();
            }
          }
          toast.success('+100 exp - '+ i18n.t('toastr_message_1'), {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            });
        }else if (data.reactive.id === 2 || data.reactive.id === 8 || data.reactive.id === 11) {  // 2- Audio to Complete text // 8- Text to Complete text // 11- Image to Complete text
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
            this.nextStep()
            toast.success('+100 exp - Wow!', {
              position: "bottom-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              progress: undefined,
              });
          }else{
            swal({
              title: i18n.t('error_title_message'),
              content: <div>
                        <p>{i18n.t('error_subtitle_message')}</p>
                        <h1>{answers[error_index].answer}</h1>
                      </div>,
              icon: "error",
              }).then((value) => {
                this.nextStep()
            });
          }
        }else if (data.reactive.id === 3 || data.reactive.id === 7 || data.reactive.id === 10) {  // 3- Audio to Select text // 7- Text to Select text // 10- Image to Select Text
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
              title: i18n.t('error_title_message'),
              content: <div>
                         <p>{i18n.t('error_subtitle_message')} </p>
                         <h1> { answers[correct].answer } </h1>
                       </div>,
              icon: "error",
            }).then(() => {
              this.nextStep()
            })
          } else {
            this.nextStep()
            toast.success('+100 exp -'+ i18n.t('toastr_message_2'), {
              position: "bottom-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              progress: undefined,
              });
          }
        }else if (data.reactive.id === 4 || data.reactive.id === 9 || data.reactive.id === 12) {  // 4- Audio to Select Audio // 9- Text to Select Audio // 12- Image to Select Audio
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
              title: i18n.t('error_title_message'),
              content: <div>  
                        <p>{i18n.t('error_subtitle_message')}</p>
                        <h4>{i18n.t('option')} #{correct+1}</h4>
                        <ReactAudioPlayer
                          src={baseURL + answers[correct].answer_filename}
                          controls
                        />
                      </div>,
              icon: "error",
            }).then(() => {
              this.nextStep()
            })
          } else {
            this.nextStep()
            toast.success('+100 exp - '+ i18n.t('toastr_message_3'), {
              position: "bottom-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              progress: undefined,
              });
          }
        }else if (data.reactive.id === 5 || data.reactive.id === 6) {  // 5- Audio to Select image // 6- Text to Select image
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
              title: i18n.t('error_title_message'),
              content: <div>  
                        <p>{i18n.t('error_subtitle_message')}</p>
                        <img src={baseURL + answers[correct].answer_filename} alt="" height="50px" width="auto" />
                      </div>,
              icon: "error",
            }).then(() => {
              this.nextStep()
            })
          } else {
            this.nextStep()
            toast.success('+100 exp!', {
              position: "bottom-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              progress: undefined,
              });
          }
        }
      }
    })
  }

  // proceed to the next step
  nextStep = () => {
    const {
      currentOrder
    } = this.state;
    let temp = currentOrder + 1
    this.setState({
      currentOrder: temp
    });
    sessionStorage.setItem('order',temp.toString)
  }

  backStep = () => {
    const {
      currentOrder
    } = this.state;
    this.setState({
      currentOrder: currentOrder - 1
    });
  }

  intro = (currentOrder) =>{
    if(currentOrder === 0){

      let chapter = parseInt(sessionStorage.getItem('maitei_chapter_id'))
      switch(i18n.language){
        case 'es':
          switch (chapter) {
            case 1:
              return <Chapter1A />
              
            case 2:
                return <Chapter1A />
          }
        // eslint-disable-next-line no-fallthrough
        case 'en':
          switch (chapter) {
            case 1:
              return <Chapter1AEN />
            case 2:
                return <Chapter1AEN />
          }
      }
    }
  }

  render() {
    // eslint-disable-next-line array-callback-return
    let reactive = this.state.exercises.map((data, id) => {
      if (this.state.exercises.length+1 === this.state.currentOrder) {
        swal({
            title: i18n.t('congrats'),
            text: "",
            icon: "success",
            buttons: [i18n.t('restart'), i18n.t('continue')],
          })
          .then((willContinue) => {
            if (willContinue) {
              window.location.href = "/chapters";
              <Redirect to='/chapters' />
            } else {
              window.location.href = "/exercises";
              <Redirect to='/exercises' />
            }
          });
      } else {
        if (data.order === this.state.currentOrder && data.active === true) {
          switch (data.reactive.id) {
            case 1:  // 1- Audio / talk
              let answer = data.exercise_Media_to_media.answers;
              return <AudioToTalk
                      key = { id }
                      filename = { data.exercise_Media_to_media.filename }
                      fileAnswer = { answer[0].answer_filename }
                      description = { answer[0].description }
                      correct_answer = { answer[0].correct_answer } />
            case 2:  // 2- Audio to Complete text
              return <AudioToCompleteTexts
                        key = { id }
                        filename = { data.exercise_Media_to_text.filename }
                        question = { data.exercise_Media_to_text.description }
                        correct_answer = { data.exercise_Media_to_text.answers } />
            case 3:  // 3- Audio to Select text
              return <AudioToSelectTexts
                        key = { id }
                        filename = { data.exercise_Media_to_text.filename }
                        description = { data.exercise_Media_to_text.description }
                        answers = { data.exercise_Media_to_text.answers }
                        correct_answer = { data.exercise_Media_to_text.answers } />
            case 4:  // 4- Audio to Select Audio
              return <AudioToSelectAudio
                        key = { id }
                        filename = { data.exercise_Media_to_media.filename }
                        description = { data.exercise_Media_to_media.description }
                        answers = { data.exercise_Media_to_media.answers }
                        correct_answer = { data.exercise_Media_to_media.answers } />
            case 5:  // 5- Audio to Select image
              return <AudioToImages
                        key = { id }
                        filename = { data.exercise_Media_to_media.filename }
                        description = { data.exercise_Media_to_media.description }
                        answers = { data.exercise_Media_to_media.answers } />
            case 6:  // 6- Text to Select image
              return <TextToImages
                        key = { id }
                        question = { data.exercise_Text_to_media.question }
                        answers = { data.exercise_Text_to_media.answers } />
            case 7:  // 7- Text to Select text
              return <TextToSelectText
                        key = { id }
                        question = { data.exercise_Text_to_text.question }
                        answers = { data.exercise_Text_to_text.answers } />
            case 8:  // 8- Text to Complete text
              return <TextToCompleteTexts
                        key = { id }
                        description = { data.exercise_Text_to_text.description }
                        question = { data.exercise_Text_to_text.question }
                        answers = { data.exercise_Text_to_text.answers } />
            case 9:  // 9- Text to Select Audio
              return <TextToSelectAudio
                        key = { id }
                        filename = { data.exercise_Text_to_media.filename }
                        question = { data.exercise_Text_to_media.question }
                        answers = { data.exercise_Text_to_media.answers } />
            case 10: // 10- Image to Select Text
              return <ImageToSelectText
                        key = { id }
                        filename = { data.exercise_Media_to_text.filename }
                        answers = { data.exercise_Media_to_text.answers } />
            case 11: // 11- Image to Complete text
              return <ImageToCompleteTexts
                        key = { id }
                        question = { data.exercise_Media_to_text.question }
                        answers = { data.exercise_Media_to_text.answers } />
            case 12: // 12- Image to Select Audio
              return <ImageToSelectAudio
                        key = { id }
                        filename = { data.exercise_Media_to_media.filename }
                        answers = { data.exercise_Media_to_media.answers } />
            default:
              break;
          }
        }
      }
    })
    return ( 
      <>
        {this.state.currentOrder === 0 ? " " : 
          <>
            <div className = "d-sm-flex justify-content-between align-items-center mb-4" >
              <div className = "mb-0" style={{width: '100%' }}>
              <h5> {i18n.t('exercise')} #{ this.state.currentOrder } </h5>
              </div>
            </div> 
            <div>
              < ProgressBar animated now = { this.progressPosition(this.state.currentOrder, this.state.exercises.length) }/>
            </div>
          </>
        }
        <br />
        {this.intro(this.state.currentOrder)}
        <div className = "row">
          <div className = "col-md-6 col-lg-4 col-xl-3 mb-4" >
            {reactive}
          </div>
        </div>
        <button className = "btn btn-info float-right " onClick = { () => this.checkAnswer() } > {i18n.t('next')} </button>
        {this.state.currentOrder !== 0 ? <button className = "btn btn-warning float-right btn-back" onClick = { () => this.backStep() } > {i18n.t('back')} </button> : ''}
        <ToastContainer
            position="bottom-center"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
      </>
    );
  }
}

export default Exercises;
