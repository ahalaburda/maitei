import React from "react";
import i18n from '../i18n/index'

function TextToCompleteText(props) {
  let inputCounter=0;

  return (
    <div className="">
      <div className="row">
        <span className="text-dark" style={{fontSize: '30px'}}>{i18n.t('complete_sentence')}</span>
        <br/>
        <br/>
      </div>
      <div className="col-lg-12 text-md-center">
        <br/>
        <br/>
        <h5 id="text">{props.description}</h5>
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
            }) }
        </div>
      </div>
    </div>
  );
}

export default TextToCompleteText;