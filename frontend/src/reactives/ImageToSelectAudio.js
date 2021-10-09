import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { baseURL } from "../services/http-common";
import i18n from '../i18n/index'

function ImageToSelectAudio(props) {
  return (
    <div className="">
        <div className="row">
            <span className="text-dark" style={{fontSize: '30px'}}>{i18n.t('listen_and_select')}</span>
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <img src={props.filename} alt={props.filename} height="200px" width="auto" />
            <br/>
            <br/>
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

export default ImageToSelectAudio;
