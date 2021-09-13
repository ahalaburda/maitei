import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { baseURL } from "../services/http-common";
import i18n from '../i18n/index'

function AudioToTalk(props) {


  return (
    <div className="container">
        <div className="row">
            <span className="text-dark" style={{fontSize: '30px'}}>{i18n.t('listen_and_repeat')}</span>
            <br/>
            <br/>
        </div>
        <div className="col-lg-12 text-md-center">
            <img src={props.filename} alt="" height="200px" width="auto" />
            <br/>
            <br/>
            <div id="text" style={{textAlign: 'center'}}>
            <div  style={{margin: '0 30%',
                          padding: '2em',
                          backgroundColor: '#e8e8e8',
                          color: 'black'}}>
              { props.description.split('<br/>').map((data, idx) =>{
                    return (
                      <p key={idx} style={{textAlign: 'left'}}>— {data}</p>
                    )
                })
              }
            </div>  
            </div>
        </div>
        <div className="col-lg-12 text-md-center">
            <br/>
            <ReactAudioPlayer
<<<<<<< HEAD
              src={"http://137.184.36.83:8000" + props.fileAnswer}
=======
              src={baseURL + props.fileAnswer}
>>>>>>> d75881f056f889b41038fab3fe511f5de5a65118
              autoPlay
              controls
            />
            <input id="answer-1" name="answer-1" type="hidden" value={props.correct_answer} />
        </div>
    </div>
  );
}

export default AudioToTalk;
