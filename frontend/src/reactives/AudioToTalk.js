import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { baseURL } from "../services/http-common";
import i18n from '../i18n/index'
import './Reactives.css'

function AudioToTalk(props) {
  return (
    <div className="">
        <div className="row">
            <span className="text-dark react-title">{i18n.t('listen_and_repeat')}</span>
            <br/>
            <br/>
        </div>
        <div className="col-lg-12">
            <div className="text-center">
              <img src={props.filename} alt="" height="200px" width="auto" />
            </div>
            
            <br/>
            <br/>
            <div id="text" style={{textAlign: 'center'}}>
            <div className="audio-talk-conversation">
              { props.description.split('<br/>').map((data, idx) =>{
                    return (
                      <p key={idx} style={{textAlign: 'left'}}>{data}</p>
                    )
                })
              }
            </div>
            </div>
        </div>
        <div className="col-lg-12 text-md-center">
            <br/>
            <ReactAudioPlayer
              src={baseURL + props.fileAnswer}
              autoPlay
              controls
            />
            <input id="answer-1" name="answer-1" type="hidden" value={props.correct_answer} />
        </div>
    </div>
  );
}

export default AudioToTalk;
