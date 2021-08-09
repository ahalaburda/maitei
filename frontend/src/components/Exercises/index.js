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
import Audio_to_audios from "../../reactives/Audio_to_audios";
import Audio_to_images from "../../reactives/Audio_to_images";
import Text_to_images from "../../reactives/Text_to_images";
import Text_to_select_text from '../../reactives/Text_to_select_text';
import Text_to_complete_texts from '../../reactives/Text_to_complete_texts';


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

    // proceed to the next step
    nextStep = () => {
      const { currentOrder } = this.state;
      this.setState({
        currentOrder: currentOrder + 1
      });
    }

    render() {
        let reactive = this.state.exercises.map((data, id) => {
          if (this.state.exercises.length === this.state.currentOrder-1) {
            alert('Felicidades, sigue asi')
          } else {
            if (data.order == this.state.currentOrder) {
              switch (data.reactive.id) {
                  case 1: //1 - Audio / Hablar
                    let answer = data.exercise_Media_to_media.answers;
                    return <Audio_to_talk 
                              key = {id}
                              filename={data.exercise_Media_to_media.filename}
                              fileAnswer={answer[0].answer_filename}
                              description={answer[0].description}  />
                  case 2: //2 - Audio / Completar oracion
                    return <Audio_to_complete_texts 
                              key = {id}
                              filename = {data.exercise_Media_to_text.filename}
                              question = {data.exercise_Media_to_text.description}  />
                  case 3: //3 - Audio / Seleccionar Texto
                    return <Audio_to_select_texts 
                              key = {id}
                              filename = {data.exercise_Media_to_text.filename}
                              answers = {data.exercise_Media_to_text.answers}  />
                  case 4: //4 - Audio / Audio
                    return  <Audio_to_audios 
                              key = {id}
                              filename = {data.exercise_Media_to_media.filename}
                              answers = {data.exercise_Media_to_media.answers}  />
                  case 5: //5 - Audio / Imagen
                    return  <Audio_to_images
                              key = {id}
                              filename = {data.exercise_Media_to_media.filename}
                              description={data.exercise_Media_to_media.description}
                              answers = {data.exercise_Media_to_media.answers}  />
                  case 6: //6 - Texto / Imagenes
                    return  <Text_to_images
                              key = {id}
                              question = {data.exercise_Text_to_media.question}
                              answers = {data.exercise_Text_to_media.answers}  />
                  case 7: //7 - Texto / Seleccionar texto
                    return  <Text_to_select_text
                              key = {id}
                              question = {data.exercise_Text_to_text.question}
                              answers = {data.exercise_Text_to_text.answers}  />
                  case 8: //8 - Texto / Completar Oracion
                    return  <Text_to_complete_texts
                              key = {id}
                              question = {data.exercise_Text_to_text.question}
                              answers = {data.exercise_Text_to_text.answers}  />
                  default:
                      break;
              }
          }
          }
            
        })
        return (
            <>
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-dark mb-0">Ejercicio #{this.state.currentOrder} </h3>
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
