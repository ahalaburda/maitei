import React from "react";
import ReactAudioPlayer from 'react-audio-player';


function ImageToSelectAudio(props) {
  return (
    <div className="container">
        <div className="row">
            <span style={{fontSize: '30px'}}>Escucha y Selecciona la respuesta correcta</span>
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <img src={props.filename} alt={props.filename} height="200px" width="auto" />
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <br/>
            <br/>
            <label>Selecciona la respuesta correcta</label>
            <hr/>
            <br/>
            <br/>
                <div className="row justify-content-center">
                { props.answers.map((data, idx) => {
                    return (
                    <div key={idx}>
                        <input type="radio" name="options" id={"answer-" +(idx+1)} />
                        <br/>
                        <ReactAudioPlayer
                            src={"http://localhost:8000" +  data.answer_filename}
                            controls
                        />
                  </div>
                  )
                })}  
                </div>
        </div>

    </div>
  );
}

export default ImageToSelectAudio;