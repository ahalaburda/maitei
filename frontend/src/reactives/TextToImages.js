import React from "react";
import { baseURL } from "../services/http-common";
import i18n from '../i18n/index'

function TextToImages(props) {
  return (
    <div className="container">
      <div className="row">
        <span className="text-dark" style={{fontSize: '30px'}}>{i18n.t('select_correct_answer')}</span>
        <br/>
        <br/>
      </div>
        <div className="col-lg-12 text-md-center">
          <br/>
          <br/>
          <div className="col-lg-12 text-md-center">
              <div id="text" style={{textAlign: 'center'}}>
                <div  style={{margin: '0 30%',
                              padding: '2em',
                              color: 'black'}}>
                    { props.question.split('<br/>').map((data, idx) =>{
                        return (
                          <p key={idx} style={{textAlign: 'center'}}>— {data}</p>
                        )
                    })
                  }
                </div>
              </div>
            </div>
          <hr/>
          <br/>
          <br/>
          <div className="row justify-content-center">
            { props.answers.map((data,idx) => {
                return (
                <div style={{padding: "0 1em"}} key={idx}>
                    <input type="radio" name="options" id={"answer-" + (idx+1)} />
                    <br/>
                    <img src={baseURL + data.answer_filename} alt="" height="100px" width="auto" />
              </div>
              )
            })}
          </div>
        </div>
    </div>
  );
}

export default TextToImages;