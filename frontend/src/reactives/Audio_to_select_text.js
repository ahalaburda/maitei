import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import ReactAudioPlayer from 'react-audio-player';


function Audio_to_select_texts(props) {
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

      <div className="btn-group" data-toggle="buttons">
        <label className="btn btn-primary">
          <input type="radio" name="options" id="option1" /> Option 1
        </label>
        <label className="btn btn-primary">
          <input type="radio" name="options" id="option2" /> Option 2
        </label>
        <label className="btn btn-primary">
          <input type="radio" name="options" id="option3" /> Option 3
        </label>
      </div>

                { props.answers.map((d) => {
                  return  d.answer
                })}
                </div>
        </div>

    </div>
  );
}

export default Audio_to_select_texts;