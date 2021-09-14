import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import i18n from '../i18n/index'

function AudioToCompleteTexts(props) {
  let inputCounter=0;

  return (
    <div className="container">
        <div className="row">
            <span  className="text-dark" style={{fontSize: '30px'}}>{i18n.t('listen_and_complete')}</span>
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
            <hr/>
            <br/>
            <br/>
                <div className="row justify-content-center">
                  { props.question.split(' ').map((data,idx) =>{
                      if (data === "INPUT") {
                        inputCounter++;
                        return <input type="text" key={idx} id={"answer-"+inputCounter} className={'input-material'} />
                      } else {
                        return <p className="ml-1 mr-1" key={idx}>{data}</p>
                      }
                    })
                  }
                </div>
                <div>
                  { props.correct_answer.map((data,idx) =>{
                      let answer = data.answer
                      return  <input key={idx} id={"answer-1"+idx} name={"answer-1"+idx} type="hidden" value={answer.toLowerCase()} />
                    })
                  }
                </div>
        </div>

    </div>
  );
}

export default AudioToCompleteTexts;