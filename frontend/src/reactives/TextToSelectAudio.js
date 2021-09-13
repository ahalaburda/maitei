import React from "react";
import ReactAudioPlayer from 'react-audio-player';


function TextToSelectAudio(props) {
  return (
    <div className="container">
        <div className="row">
            <span style={{fontSize: '30px'}}>Escucha y Selecciona la respuesta correcta</span>
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <label>
              { props.question.split(' ').map((data,idx) =>{
                  if (data === "\n") {
                    return <br/>
                  } else {
                    return data
                  }
                })
              }
            </label>
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
                            src={"http://137.184.36.83:8000" +  data.answer_filename}
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

export default TextToSelectAudio;
