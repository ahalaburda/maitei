import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import ReactAudioPlayer from 'react-audio-player';

function initialState () {
  var elements = document.querySelectorAll('[id^="radio_label_"]');
  elements.forEach(
    element => {
        element.classList.remove("active");
    }
  );
}

function toggleClass(id){
  initialState();
  let element = document.getElementById("radio_label_"+ id);
  element.classList.add("active");
}

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
                <div class="row justify-content-center">
                  <div className="btn-group" data-toggle="buttons">
                    { props.answers.map((d) => {
                      return (
                        <label className="btn btn-primary" id={"radio_label_" + d.id}>
                          <input type="radio" name="options" onClick={() => {toggleClass(d.id)}} id={"option" + d.id} /> {d.answer}
                        </label>
                      )
                    })}
                  </div>
                </div>
        </div>

    </div>
  );
}

export default Audio_to_select_texts;