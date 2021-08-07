import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import ReactAudioPlayer from 'react-audio-player';


function Audio_to_complete_texts(props) {
  return (
    <div className="container">
        <div className="row">
            <span style={{fontSize: '30px'}}>Escucha y Completa la Oracion</span>
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <ReactAudioPlayer
              src={ props.filename}
              // autoPlay
              controls
            />
            <br/>
            <br/>
            <div id="text">{props.description}</div>
        </div>

        <div className="col-lg-12 text-md-center">
            <br/>
            <br/>
            <label for="exampleFormControlTextarea1">Completa la Oracion</label>
            <hr/>
            <br/>
            <br/>
                <div class="row justify-content-center">
                { props.answers.map((d) => {
                    if (d.correct_answer) {
                        return <input type="text" />

                    } else {
                        return <p className="ml-5 mr-5">{d.answer}</p>
                    }
                })}  
                </div>
        </div>

    </div>
  );
}

export default Audio_to_complete_texts;