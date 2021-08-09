import React from "react";

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

function Text_to_select_text(props) {
  return (
    <div className="container">
        <div className="row">
            <span style={{fontSize: '30px'}}>Lee y Selecciona la respuesta correcta</span>
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <br/>
            <br/>
            <h5 id="text">{props.question}</h5>
        </div>

        <div className="col-lg-12 text-md-center">
            <br/>
            <br/>
            <label>Lee y Selecciona la respuesta correcta</label>
            <hr/>
            <br/>
                <div className="row justify-content-center">
                  <div className="btn-group" data-toggle="buttons">
                    { props.answers.map((data,idx) => {
                      return (
                        <label className="btn btn-primary" id={"radio_label_" + data.id} key={idx}>
                          <input type="radio" name="options" onClick={() => {toggleClass(data.id)}} id={"option" + data.id} /> {data.answer}
                        </label>
                      )
                    })}
                  </div>
                </div>
        </div>

    </div>
  );
}

export default Text_to_select_text;