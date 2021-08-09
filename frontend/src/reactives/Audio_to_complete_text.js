import React from "react";
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
              autoPlay
              controls
            />
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <br/>
            <br/>
            <label>Completa la Oracion</label>
            <hr/>
            <br/>
            <br/>
                <div className="row justify-content-center">
                  { props.question.split(' ').map((data,idx) =>{
                      if (data === "INPUT") {
                        return <input type="text" key={idx} />
                      } else {
                        return <p className="ml-1 mr-1" key={idx}>{data}</p>
                      }
                    })
                  }
                </div>
        </div>

    </div>
  );
}

export default Audio_to_complete_texts;