import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
import ExercisesService from "../../services/Exercises";

class Exercises extends Component {
    constructor(props){
        super(props);
        this.state = {
            asd: [],
            exercises: []
        };
    }

    getExercisesId(chapterId) {
        ExercisesService.getExercises(chapterId)
        .then((response) =>{
            this.setState({
                asd: response.data.map((data) =>{
                    return {
                        id:data.id,
                        description:data.description,
                        active:data.active
                    }
                })
            })
        })
        .catch((e) =>{
            alert(e);
            console.log(e);
        })
    }

    retrieveExerciseDetails(exerciseId) {
        ExercisesService.getExerciseDetails(exerciseId)
        .then((response) =>{
            this.setState({
                exercises: response.data.map((data) =>{
                    return {
                        id: data.id,
                        exercise_id_Text_to_text: data.exercise_id_Text_to_text,
                        exercise_id_Text_to_media: data.exercise_id_Text_to_media,
                        exercise_id_Media_to_text: data.exercise_id_Media_to_text,
                        exercise_id_Media_to_media: data.exercise_id_Media_to_media,
                        order: data.order,
                        experience: data.experience,
                        active: data.active,
                        reactive: data.reactive_id,
                    }
                })
            })
        })
        .catch((e) =>{
            alert(e);
            console.log(e);
        })
    }

    handleClick(id) {
        // sessionStorage.setItem('maitei_chapter_id',id);
                
    }

    componentDidMount(){
        let exercise_id = 0;
        let chapterId = sessionStorage.getItem('maitei_chapter_id');
        this.getExercisesId(chapterId);
        this.state.asd.map(item => (
            console.log(item)
          ))

        this.retrieveExerciseDetails(exercise_id);
    }

    render() {
        return (
            <>
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-dark mb-0">Ejercicio # </h3>
                </div>
                <div className="row">
                    {this.state.exercises.map((d, idx) => {
                        return (
                            <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                                <div className="card">
                                    <p>{d.id}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default Exercises;

