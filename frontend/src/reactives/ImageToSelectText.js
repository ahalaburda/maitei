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

function ImageToSelectText(props) {
  return (
    <div className="container">
        <div className="row">
            <span style={{fontSize: '30px'}}>Selecciona la respuesta correcta</span>
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <img src={props.filename} alt={props.filename} height="200px" width="auto" />
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <br/>
            <br/>
            <label>Selecciona la respuesta correcta</label>
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

export default ImageToSelectText;