import React from "react";
import ReactAudioPlayer from 'react-audio-player';


function AudioToTalk(props) {


  return (
    <div className="container">
        <div className="row">
            <span style={{fontSize: '30px'}}>Escucha y repite</span>
            <br/>
            <br/>
        </div>
        <div className="col-lg-12 text-md-center">
            <img src={props.filename} alt="" height="200px" width="auto" />
            <br/>
            <br/>
            <div id="text" style={{textAlign: 'center'}}>
            <div  style={{margin: '0 32%',
                          padding: '2em',
                          backgroundColor: '#e8e8e8',
                          color: 'black'}}>
              { props.description.split('<br/>').map((data, idx) =>{
                    return (
                      <p key={idx} style={{textAlign: 'left'}}>&#183; {data}</p>
                    )
                })
              }
            </div>  
            </div>
        </div>
        <div className="col-lg-12 text-md-center">
            <br/>
            <ReactAudioPlayer
              src={"http://localhost:8000" + props.fileAnswer}
              autoPlay
              controls
            />
            <input id="answer-1" name="answer-1" type="hidden" value={props.correct_answer} />
        </div>
    </div>
  );
}

export default AudioToTalk;