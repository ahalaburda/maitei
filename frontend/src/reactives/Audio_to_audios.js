import React from "react";
import ReactAudioPlayer from 'react-audio-player';


function Audio_to_audios(props) {
  return (
    <div className="container">
        <div className="row">
            <span style={{fontSize: '30px'}}>Escucha y Selecciona la respuesta correcta</span>
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
            <label>Selecciona la respuesta correcta</label>
            <hr/>
            <br/>
            <br/>
                <div className="row justify-content-center">
                { props.answers.map((data, idx) => {
                    return (
                    <div key={idx}>
                        <input type="radio" name="options" id={"option" + data.id} />
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

export default Audio_to_audios;