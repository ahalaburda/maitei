import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import i18n from '../i18n/index'
import "./Reactives.css"

function initialState () {
  var elements = document.querySelectorAll('[id^="radio_label_"]');
  elements.forEach(
    element => {
        element.classList.remove("active");
    }
  );
}

function toggleClass(id){
  initialState();
  let element = document.getElementById("radio_label_"+ id);
  element.classList.add("active");
}

function AudioToSelectTexts(props) {
  return (
    <div className="">
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
              <div id="text" style={{textAlign: 'center', fontSize:'1.4rem'}}>
                <div className='audio-select_text'>
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
            <br/>
                <div className="row justify-content-center">
                  <div className="btn-group" data-toggle="buttons">
                    { props.answers.map((data,idx) => {
                      return (
                        <label className="btn btn-primary" id={"radio_label_" + data.id} key={idx}>
                          <input type="radio" name="options" onClick={() => {toggleClass(data.id)}} id={"answer-" + (idx+1)} /> <br />{data.answer}
                        </label>
                      )
                    })}
                  </div>
                </div>
        </div>

    </div>
  );
}

export default AudioToSelectTexts;