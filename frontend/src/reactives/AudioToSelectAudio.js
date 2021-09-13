import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { baseURL } from "../services/http-common";
import i18n from '../i18n/index'

function AudioToAudios(props) {
  return (
    <div className="container">
        <div className="row">
            <span  className="text-dark" style={{fontSize: '30px'}}>{i18n.t('listen_and_select')}</span>
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
            <div className="col-lg-12 text-md-center">
              <div id="text" style={{textAlign: 'center'}}>
                <div  style={{margin: '0 10%',
                              padding: '2em',
                              color: 'black'}}>
                    { props.description.split('<br/>').map((data, idx) =>{
                        return (
                          <p key={idx} style={{textAlign: 'center'}}>— {data}</p>
                        )
                    })
                  }
                </div>
              </div>
            </div>
        </div>

        <div className="col-lg-12 text-md-center">
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
                            src={baseURL +  data.answer_filename}
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

export default AudioToAudios;