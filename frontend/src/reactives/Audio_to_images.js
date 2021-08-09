import React from "react";
import ReactAudioPlayer from 'react-audio-player';


function Audio_to_images(props) {
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
            <hr/>
                <div className="row justify-content-center">
                { props.answers.map((data,idx) => {
                    return (
                    <div style={{padding: "0 1em"}} key={idx}>
                        <input type="radio" name="options" id={"option" + data.id} />
                        <br/>
                        <img src={"http://localhost:8000" + data.answer_filename} alt="" height="100px" width="auto" />
                  </div>
                  )
                })}  
                </div>
        </div>

    </div>
  );
}

export default Audio_to_images;