import React, {
    Component
} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

import {
    Link
} from "react-router-dom";

import ExercisesService from "../../services/Exercises";
import Audio_to_talk from "../../reactives/Audio_to_talk";
import Audio_to_complete_texts from "../../reactives/Audio_to_complete_text";
import Audio_to_select_texts from "../../reactives/Audio_to_select_text";



class Exercises extends Component {
    constructor(props) {
      super(props);
      this.state = {
        exerciseId: 0,
        exercises: [],
        answers: [],
        currentOrder: 1
      };
    }

    getExercisesId(chapterId) {
      ExercisesService.getExercises(chapterId)
        .then((response) => {
          this.setState({
            exerciseId: response.data[0].id
          })
        })
        .catch((e) => {
          alert(e);
          console.log(e);
        })
    }

    retrieveExerciseDetails(exerciseId) {
      ExercisesService.getExerciseDetails(exerciseId)
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
    }

    handleClick(id) {
      // sessionStorage.setItem('maitei_chapter_id',id);
    }

    componentDidMount() {
      let chapterId = sessionStorage.getItem('maitei_chapter_id');
      this.getExercisesId(chapterId);
    }

    componentDidUpdate() {
      let exercise_id = this.state.exerciseId;
      this.retrieveExerciseDetails(exercise_id);
    }

    progressPosition = (currentOrder, total) => {
      return (100 * currentOrder - 1) / total
    }

    // proceed to the next step
    nextStep = () => {
      const { currentOrder } = this.state;
      this.setState({
        currentOrder: currentOrder + 1
      });
    }

    audioButton = (audioFile) => {
      let audio = new Audio(audioFile)
      audio.play();
    }
    render() {

        let reactive = this.state.exercises.map((data, id) => {
            if (data.order == this.state.currentOrder) {
                // return <Audio_to_talk  key={id} filename={data.exercise_Media_to_media.filename} fileAnswer={data.answers[0].fileAnswer} function={this.playSound(data.description)} />
                switch (data.reactive.id) {
                    case 1: //{id: 1, description: "Audio / Hablar", active: true}
                        let answer = data.exercise_Media_to_media.answers;
                        return <Audio_to_talk 
                                    key = {id}
                                    filename={data.exercise_Media_to_media.filename}
                                    fileAnswer={answer[0].answer_filename}
                                    description={answer[0].description}  />
                    case 2: //{id: 2, description: "Audio/ Completar oracion", active: true}
                        let answer2 = data.exercise_Media_to_text.answers;
                        return <Audio_to_complete_texts 
                                  key = {id}
                                  filename = {data.exercise_Media_to_text.filename}
                                  answers = {answer2}  />
                    case 3: //{id: 3, description: "Audio/ Seleccionar Texto", active: true}
                      let answer3 = data.exercise_Media_to_text.answers;
                      return <Audio_to_select_texts 
                                key = {id}
                                filename = {data.exercise_Media_to_text.filename}
                                answers = {answer3}  />
                    case 4: //{id: 4, description: "Audio / Audio", active: true}
                        
                    case 5:
                        
                    default:
                        break;
                }
            }
        })
        return (
            <>
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-dark mb-0">Ejercicio # </h3>
                </div>
                <div>
                    <ProgressBar animated now={this.progressPosition(this.state.currentOrder, this.state.exercises.length)} />
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        {reactive}
                    </div>
                    
                </div>
                <button className="btn btn-info float-right" onClick={this.nextStep} >Siguiente </button>
            </>
        );
    }
}

export default Exercises;

// <Audio_to_talk filename={d.exercise_Media_to_media.filename} />
// <button className="btn btn-info" onClick={this.nextStep} >Next </button>
// {/* onclick={this.playSound("hola")}/> */}