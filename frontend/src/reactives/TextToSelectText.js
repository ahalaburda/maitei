import React from "react";
import i18n from '../i18n/index'

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

function TextToSelectText(props) {
  return (
    <div className="container">
        <div className="row">
            <span className="text-dark" style={{fontSize: '30px'}}>{i18n.t('read_and_select')}</span>
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <br/>
            <br/>
            <h5 id="text" style={{color: 'black'}}>{i18n.t(props.question)}</h5>
            
        </div>

        <div className="col-lg-12 text-md-center">
            <hr/>
            <br/>
                <div className="row justify-content-center">
                  <div className="btn-group" data-toggle="buttons">
                    { props.answers.map((data,idx) => {
                      return (
                        <label className="btn btn-primary" id={"radio_label_" + data.id} key={idx}>
                          <input type="radio" name="options" onClick={() => {toggleClass(data.id)}} id={"answer-" + (idx+1)} /> {data.answer}
                        </label>
                      )
                    })}
                  </div>
                </div>
        </div>

    </div>
  );
}

export default TextToSelectText;