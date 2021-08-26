import React from "react";
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

function AudioToSelectTexts(props) {
  return (
    <div className="container">
        <div className="row">
            <span style={{fontSize: '30px'}}>Escucha y Selecciona la respuesta correcta.</span>
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <ReactAudioPlayer
              src={ props.filename}
              autoPlay
              controls
            />
            <br/>
            <br/>
            <div id="text">{props.description}</div>
        </div>

        <div className="col-lg-12 text-md-center">
            <br/>
            <br/>
            <label>Completa la Oracion</label>
            <hr/>
            <br/>
                <div className="row justify-content-center">
                  <div className="btn-group" data-toggle="buttons">
                    { props.answers.map((data,idx) => {
                      return (
                        <label className="btn btn-primary" id={"radio_label_" + data.id} key={idx}>
                          <input type="radio" name="options" onClick={() => {toggleClass(data.id)}} id={"answer-" + (idx+1)} /> {data.answer}
                        </label>
                      )
                    })}
                  </div>
                </div>
        </div>

    </div>
  );
}

export default AudioToSelectTexts;