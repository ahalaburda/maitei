import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { baseURL } from "../services/http-common";
import i18n from '../i18n/index'

function AudioToImages(props) {
  return (
    <div className="">
        <div className="row">
            <span style={{fontSize: '30px'}}>{i18n.t('listen_and_select')}</span>
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
                <div  style={{margin: '0 30%',
                              padding: '2em',
                              color: 'black'}}>
                    { props.description.split('<br/>').map((data, idx) =>{
                        return (
                          <p key={idx} style={{textAlign: 'center'}}>{data}</p>
                        )
                    })
                  }
                </div>
              </div>
            </div>
        </div>

        <div className="col-lg-12 text-md-center">
            <hr/>
                <div className="row justify-content-center">
                { props.answers.map((data,idx) => {
                    return (
                    <div style={{padding: "0 1em"}} key={idx}>
                        <input type="radio" name="options" id={"answer-" + (idx+1)} />
                        <br/>
                        <img src={baseURL + data.answer_filename} alt="" height="100px" width="auto" />
                        <br/>
                        <br/>
                  </div>
                  )
                })}
                </div>
        </div>

    </div>
  );
}

export default AudioToImages;
